import { Page } from "./page";
import { Project } from "./project";

export type Response<R> = (r: R) => void;

//#region Assets

export enum AssetType {
  Inline = "inline",
  Code = "code",
  File = "file",
}

export interface AssetCommon {
  attr?: Record<string, string>;
}

export interface AssetFile extends AssetCommon {
  type: AssetType.File;
  url: string;
}

export interface AssetInline extends AssetCommon {
  type: AssetType.Inline;
  content: string;
}

export interface AssetCode {
  type: AssetType.Code;
  content: string;
}

export interface Asset {
  name: string;
  score: number;
  content: AssetFile | AssetInline | AssetCode;
  pro: boolean;
}

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

export type PageDataOutput = Page & {
  [k: string]: unknown;
  compiled?: PageJsonOutput;
};

//#endregion

//#region Project

export interface ProjectJsonOutput {
  styles: Array<Asset>;
}

export type ProjectDataOutput = Project & {
  compiled?: ProjectJsonOutput;
};

//#endregion

export type Choice = {
  title: string;
  value: string | number;
};
