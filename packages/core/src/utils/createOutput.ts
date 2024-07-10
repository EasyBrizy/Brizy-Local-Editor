import { BuilderModes } from "@/actions/init";
import { isPageJsonCompile } from "@/types/common";
import { BuilderOutput, HtmlOutputType, Output } from "@/types/types";
import { getPageAssets, getProjectAssets } from "@/utils/assetManager";
import { getIn, set } from "timm";

const createPopupSettings = ({
  pageData,
  mode,
}: {
  pageData: BuilderOutput<HtmlOutputType>["pageData"];
  mode: BuilderOutput<HtmlOutputType>["mode"];
}): Output<HtmlOutputType>["popupSettings"] | undefined => {
  if (mode !== BuilderModes.externalPopup || !pageData) {
    return undefined;
  }

  const verticalAlign = getIn(pageData, ["data", "items", "0", "value", "verticalAlign"]) ?? "center";
  const horizontalAlign = getIn(pageData, ["data", "items", "0", "value", "horizontalAlign"]) ?? "center";

  return { verticalAlign, horizontalAlign } as Output<HtmlOutputType>["popupSettings"];
};

export const createOutput = <T extends HtmlOutputType>(type: T, output: BuilderOutput<T>): Output<T> => {
  const { pageData, projectData, error, mode } = output;
  const popupSettings = createPopupSettings({ pageData, mode });
  const { compiled: pageCompiled } = pageData ?? {};
  const { compiled: projectCompiled } = projectData ?? {};
  const data = {
    pageData,
    projectData,
    ...(popupSettings && { popupSettings }),
  };

  if (pageCompiled && isPageJsonCompile(pageCompiled)) {
    const { freeStyles, freeScripts, proStyles, proScripts } = pageCompiled.assets;
    const pageAssets = getPageAssets({ freeStyles, freeScripts, proStyles, proScripts });

    // @ts-expect-error: is not assignable to type PageHtmlOutput
    data.pageData = set(data.pageData, "compiled", {
      html: pageCompiled.html,
      scripts: pageAssets.scripts,
      styles: pageAssets.styles,
    });
  }

  if (type === "json" && projectCompiled) {
    // @ts-expect-error:  Argument of type string[] | Asset[] is not assignable to parameter of type ProjectAssetEntry
    data.projectData = set(data.projectData, "compiled", {
      // @ts-expect-error: Argument of type ProjectHtmlOutput | ProjectJsonOutput
      styles: getProjectAssets(projectCompiled),
    });
  }

  return { ...data, error } as Output<T>;
};
