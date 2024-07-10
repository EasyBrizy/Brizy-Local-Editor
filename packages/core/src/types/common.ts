import { Assets, Styles } from "../utils/assetManager/types";
import { HtmlOutputType } from "./types";

export type Response<R> = (r: R) => void;

//#region Assets

export interface AssetCommon {
  attr?: Record<string, string>;
}

export interface AssetFile extends AssetCommon {
  type: "file";
  url: string;
}

export interface AssetInline extends AssetCommon {
  type: "inline";
  content: string;
}

export interface AssetCode {
  type: "code";
  content: string;
}

export interface Asset {
  name: string;
  score: number;
  content: AssetFile | AssetInline | AssetCode;
  pro: boolean;
}

export interface AssetGoogle {
  name: "google";
  type: "google-font";
  score: number;
  content: {
    type: "file";
    url: string;
    attr: Record<string, string>;
  };
  pro: boolean;
}

export interface AssetUpload {
  name: "upload";
  type: "uploaded-font";
  score: number;
  content: {
    type: "file";
    url: string;
    attr: Record<string, string>;
  };
  pro: boolean;
}

export interface AssetAdobe {
  name: "adobe";
  type: "adobe-font";
  score: number;
  content: {
    type: "file";
    url: string;
    attr: Record<string, string>;
  };
  pro: boolean;
}

export interface AssetLibsMap extends Asset {
  selectors: string[];
}

export type AssetFonts = AssetGoogle | AssetUpload | AssetAdobe;

export interface StylesFree {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
  pageFonts: AssetFonts[];
  pageStyles: Asset[];
}

export interface StylesPro {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
}

export interface ScriptsFree {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
}

export interface ScriptsPro {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
}

//#endregion

//#region Page

export interface PageJsonOutput {
  html: string;
  assets: {
    freeStyles: StylesFree;
    freeScripts: ScriptsFree;
    proStyles?: StylesPro;
    proScripts?: ScriptsPro;
  };
}

export interface PageHtmlOutput {
  html: string;
  styles: Array<string>;
  scripts: Array<string>;
}

export type PageCompiled = {
  html: PageHtmlOutput;
  json: PageJsonOutput;
};

export type PageData<T extends HtmlOutputType> = {
  [key: string]: unknown;
  compiled?: PageCompiled[T];
};

export interface PageJsonCompiledOutput extends Assets {
  html: string;
}

type PageCompiledOutput = {
  html: PageHtmlOutput;
  json: PageJsonCompiledOutput;
};

export type PageDataOutput<T extends HtmlOutputType> = {
  [k: string]: unknown;
  compiled?: PageCompiledOutput[T];
};

export const isPageJsonCompile = (p: PageJsonOutput | PageHtmlOutput): p is PageJsonOutput => "assets" in p;

//#endregion

//#region Project

interface ProjectHtmlOutput {
  styles: Array<string>;
}

interface ProjectJsonOutput {
  styles: Array<Asset>;
}

export type ProjectCompiled = {
  html: ProjectHtmlOutput;
  json: ProjectJsonOutput;
};

export type ProjectData<T extends HtmlOutputType> = {
  [key: string]: unknown;
  compiled?: ProjectCompiled[T];
};

export interface ProjectJsonCompiledOutput {
  styles: Array<Styles>;
}

type ProjectCompiledOutput = {
  html: ProjectHtmlOutput;
  json: ProjectJsonCompiledOutput;
};

export type ProjectDataOutput<T extends HtmlOutputType> = {
  [k: string]: unknown;
  compiled?: ProjectCompiledOutput[T];
};

//#endregion
