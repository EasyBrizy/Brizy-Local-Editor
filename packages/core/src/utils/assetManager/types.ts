import { Asset, ScriptsFree, ScriptsPro, StylesFree, StylesPro } from "@/types/common";

interface Style {
  type: "style";
  attr: Record<string, string>;
  html: string;
}

interface Link {
  type: "link";
  attr: Record<string, string>;
}

export type Styles = Style | Link;

export function isStyle(style: Styles): style is Style {
  return style.type === "style" && style.hasOwnProperty("html");
}

export interface Scripts {
  attr?: Record<string, string | boolean>;
  html?: string;
}

export interface Assets {
  styles: Array<Styles>;
  scripts: Array<Scripts>;
}

export type PageAssetEntry = {
  freeStyles: StylesFree;
  freeScripts: ScriptsFree;
  proStyles?: StylesPro;
  proScripts?: ScriptsPro;
};

export type ProjectAssetEntry = {
  styles: Array<Asset>;
};
