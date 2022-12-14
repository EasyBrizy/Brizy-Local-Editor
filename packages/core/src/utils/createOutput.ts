import { BuilderOutput, Output } from "../types/types";

const createDoc = (data: { html: string; styles?: string; scripts?: string }): string => {
  const { html, styles = "", scripts = "" } = data;
  return `<!DOCTYPE html><html><head>${styles}</head><body>${html}${scripts}</body></html>`;
};

export const createOutput = (output: BuilderOutput): Output => {
  const { pageData, projectData, styles, scripts, html, error } = output;
  const data: Output = {
    pageData,
    projectData,
  };

  if (Array.isArray(scripts) && Array.isArray(styles) && html) {
    return {
      ...data,
      html: createDoc({
        html,
        styles: styles.join(""),
        scripts: scripts.join(""),
      }),
      htmlBuilder: {
        styles: styles,
        root: html,
        scripts: scripts,
      },
    };
  }

  return { ...data, error };
};
