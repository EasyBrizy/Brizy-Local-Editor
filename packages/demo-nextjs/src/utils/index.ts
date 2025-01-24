import { getProjectSettings } from "@/app/admin/(cms)/system/core/requests";
import { Reference } from "@/components/Editor/contexts/types";
import { replacePlaceholders } from "@/placeholders";
import { makeScript, makeStyle } from "@/utils/makeAssets";
import { projectId } from "@/utils/mock";
import { AssetAggregator, AssetGroup, BaseAsset } from "@brizy/merge-page-assets";
import { AssetType } from "@brizy/merge-page-assets/dist/assets/types";
import { Obj } from "@brizy/readers";
import {
  PageJsonOutput,
  ProjectJsonOutput,
  ScriptsFree,
  ScriptsPro,
  StylesFree,
  StylesPro,
} from "@builder/core/build/es/types/common";
import { ReactElement } from "react";

type AssetStyle = StylesFree | StylesPro;
type AssetScript = ScriptsFree | ScriptsPro;

const getAssetElement = (asset: BaseAsset, type: string) => {
  const content = asset.getContent() ?? "";
  const assetType = asset.getType();
  const attr = asset.getAttrs() as Record<string, string>;
  const url = asset.getUrl() ?? "";

  return type === "css"
    ? makeStyle({ content, type: assetType, attr, url })
    : makeScript({ content, type: assetType, attr, url });
};

export const getAssets = (assets: Array<AssetStyle | AssetScript>, type: string, extraAssets?: BaseAsset[]) => {
  const groups: AssetGroup[] = [];
  let hasExtraAssets = false;

  assets.forEach((group) => {
    try {
      const data = Obj.read(group);

      if (!data) {
        return;
      }

      const assetGroup = AssetGroup.instanceFromJsonData(data);

      // Add extra assets to the first asset group
      if (extraAssets && !hasExtraAssets) {
        hasExtraAssets = true;
        const pageStyles = assetGroup.getPageStyles();
        assetGroup.setPageStyles([...pageStyles, ...extraAssets]);
      }
      groups.push(assetGroup);
    } catch (e) {
      console.error("Error while creating asset group", e);
    }
  });

  const aggregator = new AssetAggregator(groups);
  const assetList = aggregator.getAssetList();

  return assetList.map((asset) => getAssetElement(asset, type));
};

export async function assemblePages(data: {
  items: Array<PageJsonOutput>;
  project: ProjectJsonOutput;
  reference?: Reference;
}): Promise<{
  html: string;
  styles: Array<ReactElement>;
  scripts: Array<ReactElement>;
}> {
  const { items, project, reference } = data;
  const projectStyles = project?.styles ?? [];
  const { code } = (await getProjectSettings(projectId)) || {};
  const { customCss, codeInjectionHeader, codeInjectionFooter } = code || {};

  let html = codeInjectionHeader ?? "";
  const styles: AssetStyle[] = [];
  const scripts: AssetScript[] = [];

  for (const item of items) {
    html += item.html ? await replacePlaceholders({ value: item.html, reference }) : "";

    const { freeStyles, proStyles, freeScripts, proScripts } = item.assets;

    styles.push(freeStyles);
    scripts.push(freeScripts);

    if (proStyles) {
      styles.push(proStyles);
    }

    if (proScripts) {
      scripts.push(proScripts);
    }
  }

  if (codeInjectionFooter) {
    html += codeInjectionFooter;
  }

  const extraAssets = projectStyles.map((asset) => new BaseAsset(asset));

  if (customCss) {
    const customCssAsset = new BaseAsset({
      name: "custom-css",
      score: Infinity,
      content: {
        type: AssetType.Inline,
        content: customCss,
      },
      pro: false,
    });

    extraAssets.push(customCssAsset);
  }

  const stylesAssets = getAssets(styles, "css", extraAssets);
  const scriptsAssets = getAssets(scripts, "js");

  return {
    html,
    styles: stylesAssets,
    scripts: scriptsAssets,
  };
}
