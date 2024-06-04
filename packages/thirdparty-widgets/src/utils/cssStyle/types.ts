import { Literal } from "../types";

export interface StyleCSSProperties {
  [k: string]: Literal;
}

export interface OutputOptionStyle {
  [k: string]: StyleCSSProperties;
}
