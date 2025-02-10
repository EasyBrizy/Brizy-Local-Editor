import { AssetFont } from "./AssetFont";
import { AssetLib } from "./AssetLib";
import { BaseAsset } from "./BaseAsset";

export enum AssetType {
  File = "file",
  Inline = "inline",
  Code = "code",
}

export enum FontType {
  GOOGLE = "google-font",
  UPLOADED = "uploaded-font",
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

export type AssetContent = AssetFile | AssetInline | AssetCode;

export interface Asset {
  name: string;
  score: number;
  content: AssetContent;
  pro: boolean;
}

export interface AssetFonts {
  name: string;
  type: FontType;
  score: number;
  content: {
    type: AssetType.File;
    url: string;
    attr?: Record<string, string>;
  };
  pro: boolean;
}

export interface AssetLibsMap extends Asset {
  selectors: string[];
}

export interface GroupedAssets {
  main: BaseAsset;
  generic: BaseAsset[];
  libsMap: AssetLib[];
  libsSelectors: string[];
  pageFonts: AssetFont[];
  pageStyles: BaseAsset[];
}

export const isAssetFileContent = (content: AssetContent): content is AssetFile =>
  content.type === AssetType.File && "url" in content;

export const isAssetInlineContent = (content: AssetContent): content is AssetInline =>
  content.type === AssetType.Inline && "content" in content;

export const isAssetCodeContent = (content: AssetContent): content is AssetCode =>
  content.type === AssetType.Code && "content" in content;
