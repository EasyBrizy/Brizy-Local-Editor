import { getIn } from "timm";
import { BuilderOutput, HtmlOutputType, Modes, Output } from "../types/types";

const createDoc = (data: { html: string; styles?: string; scripts?: string }): string => {
  const { html, styles = "", scripts = "" } = data;
  return `<!DOCTYPE html><html><head>${styles}</head><body>${html}${scripts}</body></html>`;
};

const createPopupSettings = ({
  pageData,
  mode,
}: {
  pageData: BuilderOutput["pageData"];
  mode: BuilderOutput["mode"];
}): Output<HtmlOutputType>["popupSettings"] | undefined => {
  if (mode !== Modes.popup) {
    return undefined;
  }

  const verticalAlign = getIn(pageData, ["data", "items", "0", "value", "verticalAlign"]) ?? "center";
  const horizontalAlign = getIn(pageData, ["data", "items", "0", "value", "horizontalAlign"]) ?? "center";

  return { verticalAlign, horizontalAlign } as Output<HtmlOutputType>["popupSettings"];
};

export const createOutput = <T extends HtmlOutputType>(type: T, output: BuilderOutput): Output<T> => {
  const { pageData, projectData, styles, scripts, html, error, mode } = output;
  const popupSettings = createPopupSettings({ pageData, mode });

  const data = {
    pageData,
    projectData,
    ...(popupSettings && { popupSettings }),
  };

  if (Array.isArray(scripts) && Array.isArray(styles) && html) {
    switch (type) {
      case "monolith": {
        const output = {
          ...data,
          html: {
            root: createDoc({ html, styles: styles.join(""), scripts: scripts.join("") }),
          },
        };

        return output as Output<T>;
      }
      case "partial": {
        return {
          ...data,
          html: {
            styles: styles,
            root: html,
            scripts: scripts,
          },
        };
      }
      default: {
        console.error("Unknown type, the type must be: monolith or partial");
      }
    }
  }

  return { ...data, error };
};
