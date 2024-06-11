// These placeholder is added inside public/index.html
import { Extension } from "@/types/types";
import { MValue } from "@/utils/types";
import { Arr, Err, Obj, Str, pipe } from "@brizy/readers";
import { mPipe, parseStrict } from "fp-utilities";
import { getIn } from "timm";

const stylesPlaceholder = "{{ third_party_styles }}";
const scriptsPlaceholder = "{{ third_party_scripts }}";

export interface ParsedThirdParty {
  name: string;
  host: string;
  editorScripts: string[];
  editorStyles: string[];
  viewScripts: string[];
  viewStyles: string[];
}

interface Data {
  doc: string;
  thirdPartyAssets: ParsedThirdParty[];
}

export function replaceThirdParty(data: Data): string {
  const { doc, thirdPartyAssets } = data;
  let _doc = doc;

  const styles = document.createElement("div");
  const scripts = document.createElement("div");

  thirdPartyAssets.forEach((thirdParty) => {
    thirdParty.editorScripts.forEach((scriptUrl) => {
      const script = document.createElement("script");
      script.src = scriptUrl;
      scripts.appendChild(script);
    });

    thirdParty.editorStyles.forEach((styleUrl) => {
      const link = document.createElement("link");
      link.href = styleUrl;
      link.rel = "stylesheet";
      link.type = "text/css";
      styles.appendChild(link);
    });
  });

  _doc = _doc.replace(stylesPlaceholder, styles.innerHTML.replace(/"/g, "'"));
  _doc = _doc.replace(scriptsPlaceholder, scripts.innerHTML.replace(/"/g, "'"));

  return _doc;
}

interface PluginConfig {
  name: string;
  title: string;
  version: string;
  category: string;
  keywords: Array<unknown>;
  editorScripts: Array<string>;
  viewScripts: Array<string>;
  editorStyles: Array<string>;
  viewStyles: Array<string>;
}

const readPluginConfig = parseStrict<Record<string, unknown>, PluginConfig>({
  name: pipe(mPipe(Obj.readKey("name"), Str.read), Err.throwOnNullish("Invalid name")),
  title: pipe(mPipe(Obj.readKey("title"), Str.read), Err.throwOnNullish("Invalid title")),
  version: pipe(mPipe(Obj.readKey("version"), Str.read), Err.throwOnNullish("Invalid version")),
  category: pipe(mPipe(Obj.readKey("category"), Str.read), Err.throwOnNullish("Invalid category")),
  keywords: pipe(mPipe(Obj.readKey("keywords"), Arr.read), Err.throwOnNullish("Invalid keywords")),
  editorScripts: pipe(
    mPipe(Obj.readKey("editorScripts"), Arr.readWithItemReader(Str.read)),
    Err.throwOnNullish("Invalid editorScripts"),
  ),
  viewScripts: pipe(
    mPipe(Obj.readKey("viewScripts"), Arr.readWithItemReader(Str.read)),
    Err.throwOnNullish("Invalid viewScripts"),
  ),
  editorStyles: pipe(
    mPipe(Obj.readKey("editorStyles"), Arr.readWithItemReader(Str.read)),
    Err.throwOnNullish("Invalid editorStyles"),
  ),
  viewStyles: pipe(
    mPipe(Obj.readKey("viewStyles"), Arr.readWithItemReader(Str.read)),
    Err.throwOnNullish("Invalid viewStyles"),
  ),
});

export const getPluginConfig = mPipe(Obj.read, readPluginConfig);

export async function prepareThirdPartyAssets(extensions: Array<Extension>): Promise<Array<ParsedThirdParty>> {
  let assets: ParsedThirdParty[] = [];

  for (const { host = "", path = "" } of extensions) {
    const url = host + path;

    try {
      const cf = await fetch(`${url}/config.json`);
      const cfg = await cf.json();
      const pluginConfig = getPluginConfig(cfg);

      if (!pluginConfig) {
        console.error("Invalid widget config");
        return [];
      }

      const editorScripts = pluginConfig.editorScripts.map((s) => `${url}/${s}`);
      const editorStyles = pluginConfig.editorStyles.map((s) => `${url}/${s}`);
      const viewScripts = pluginConfig.viewScripts.map((s) => `${url}/${s}`);
      const viewStyles = pluginConfig.viewStyles.map((s) => `${url}/${s}`);

      assets.push({
        name: pluginConfig.name,
        host: `${url}`,
        editorScripts,
        editorStyles,
        viewScripts,
        viewStyles,
      });
    } catch (e) {
      console.log("Fail to load thirdParty: ", e);
    }
  }

  return assets;
}

export function getViewStyles(assets: Array<ParsedThirdParty>, pageData: Record<string, unknown>) {
  const thirdPartyStyles = assets
    .map(({ viewStyles }) => viewStyles.map((href) => `<link href="${href}" rel="stylesheet">`))
    .flat();
  const styles = (getIn(pageData, ["compiled", "styles"]) as MValue<Array<string>>) ?? [];
  return [...styles, ...thirdPartyStyles];
}

export function getViewScripts(assets: Array<ParsedThirdParty>, pageData: Record<string, unknown>) {
  const thirdPartyScripts = assets
    .map(({ viewScripts }) => viewScripts.map((src) => `<script src="${src}"></script>`))
    .flat();
  const scripts = (getIn(pageData, ["compiled", "scripts"]) as MValue<Array<string>>) ?? [];
  return [...scripts, ...thirdPartyScripts];
}
