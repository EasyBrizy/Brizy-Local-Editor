import { ScriptsFree, ScriptsPro, StylesFree, StylesPro } from "./common";

export type BlockHtml = {
  html: string;
  assets: {
    freeStyles: StylesFree;
    freeScripts: ScriptsFree;
    proStyles?: StylesPro;
    proScripts?: ScriptsPro;
  };
};

export interface Page {
  id: string;
  matchingItemId?: string;
  data: {
    items: Array<Record<string, unknown>>;
    [k: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  dataVersion: number;
  status: "draft" | "publish" | "future" | "private"; // The future status is used for scheduled pages .
  dependencies: Array<string>;
  slug: string;
  title: string;
  collectionType: {
    id: string;
    title: string;
  };

  blocks?: Array<BlockHtml & { id: string }>;
}
