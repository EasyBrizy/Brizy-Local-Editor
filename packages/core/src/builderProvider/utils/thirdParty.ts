// These placeholder is added inside public/index.html
const stylesPlaceholder = "{{ third_party_styles }}";
const scriptsPlaceholder = "{{ third_party_scripts }}";

interface Data {
  doc: string;
  thirdPartyAssets: ParsedThirdParty[];
}

export async function replaceThirdParty(data: Data): Promise<string> {
  const { doc, thirdPartyAssets } = data;
  let _doc = doc;

  const styles = document.createElement("div");
  const scripts = document.createElement("div");

  thirdPartyAssets.forEach((thirdParty) => {
    thirdParty.editorScripts.forEach((scriptUrl: string) => {
      const script = document.createElement("script");
      script.src = scriptUrl;
      scripts.appendChild(script);
    });

    thirdParty.editorStyles.forEach((styleUrl: string) => {
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

export interface ParsedThirdParty {
  name: string;
  host?: string;
  editorScripts: string[];
  editorStyles: string[];
}

export async function prepareThirdpartyAssets(thirdPartyCfgUrls: string[]) {
  let assets: ParsedThirdParty[] = [];

  for (const url of thirdPartyCfgUrls) {
    const host = url.slice(0, url.lastIndexOf("/"));
    try {
      const cfg = await fetch(url).then((r) => r.json());
      const scripts = cfg.editorScripts.map((script: string) => `${host}/${script}`) ?? [];
      const styles = cfg.editorStyles.map((style: string) => `${host}/${style}`) ?? [];

      assets.push({ name: cfg.name, host, editorScripts: scripts, editorStyles: styles });
    } catch (e) {
      console.log("Fail to load thirdParty: ", e);
    }
  }
  return assets;
}
