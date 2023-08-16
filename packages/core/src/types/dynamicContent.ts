import { Response } from "./common";

export enum DCTypes {
  image = "image",
  link = "link",
  richText = "richText",
}

export interface BaseDCItem {
  label: string;
  placeholder: string;
}

export interface ConfigDCItem extends BaseDCItem {
  optgroup?: ConfigDCItem[];
}

export interface DCHandlerExtra {
  keyCode: string;
}

interface DCItemHandler {
  handler: (res: Response<BaseDCItem>, rej: Response<string>, extra?: DCHandlerExtra) => void;
}

export interface DCGroups {
  [DCTypes.image]?: Array<ConfigDCItem> | DCItemHandler;
  [DCTypes.link]?: Array<ConfigDCItem> | DCItemHandler;
  [DCTypes.richText]?: Array<ConfigDCItem> | DCItemHandler;
}

export interface DCPlaceholderObj {
  name: string;
  attr?: Record<string, unknown>;
}

export type MakePlaceholder = (placeholderObj: DCPlaceholderObj) => string | undefined;

export type ExplodePlaceholder = (placeholder: string) => DCPlaceholderObj | undefined;

export interface DynamicContent {
  makePlaceholder?: MakePlaceholder;
  explodePlaceholder?: ExplodePlaceholder;
  groups?: DCGroups;
}
