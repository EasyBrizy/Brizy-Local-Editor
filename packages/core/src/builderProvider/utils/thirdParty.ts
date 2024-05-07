import { Config } from "@/types/types";

// These placeholder is added inside public/index.html
const stylesPlaceholder = "{{ third_party_styles }}";
const scriptsPlaceholder = "{{ third_party_scripts }}";

interface Data {
  doc: string;
  config: Config;
}

export function replaceThirdParty(data: Data): string {
  const { doc, config } = data;
  let _doc = doc;
  const { thirdPartyUrls } = config;
  const styles = document.createElement("div");
  const scripts = document.createElement("div");

  thirdPartyUrls?.forEach((asset) => {
    if (asset.scriptUrl) {
      const script = document.createElement("script");
      script.src = asset.scriptUrl;
      scripts.appendChild(script);
    }

    if (asset.styleUrl) {
      const link = document.createElement("link");
      link.href = asset.styleUrl;
      link.rel = "stylesheet";
      link.type = "text/css";
      styles.appendChild(link);
    }
  });

  _doc = _doc.replace(stylesPlaceholder, styles.innerHTML.replace(/"/g, "'"));
  _doc = _doc.replace(scriptsPlaceholder, scripts.innerHTML.replace(/"/g, "'"));

  return _doc;
}
