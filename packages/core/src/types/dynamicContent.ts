import { Dictionary } from "@/utils/types";
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
  keyCode?: string;
  placeholder: string;
}

export interface BaseDCHandlerExtra {
  entityType: string;
  groupType: DCTypes;
}

interface DCItemHandler {
  handler: (res: Response<BaseDCItem>, rej: Response<string>, extra?: DCHandlerExtra) => void;
}

export interface DCGroups {
  [DCTypes.image]?: Array<ConfigDCItem> | DCItemHandler;
  [DCTypes.link]?: Array<ConfigDCItem> | DCItemHandler;
  [DCTypes.richText]?: Array<ConfigDCItem> | DCItemHandler;
}

export interface DCPlaceholdersExtra {
  placeholders: Dictionary<string>;
  signal: AbortSignal | undefined;
}

export interface DynamicContent {
  groups?: DCGroups;
  getPlaceholderData?: (res: Response<Dictionary<string>>, rej: Response<string>, extra: DCPlaceholdersExtra) => void;
  handler?: (res: Response<ConfigDCItem[]>, rej: Response<string>, extraData: BaseDCHandlerExtra) => void;
}
