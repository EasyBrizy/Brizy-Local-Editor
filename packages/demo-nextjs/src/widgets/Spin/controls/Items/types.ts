import { CSSProperties } from "react";

export interface Props {
  items: Array<{ score: number; title: string }>;
  style?: CSSProperties;
  onSpinStart?: () => void;
  spinning?: boolean;
}
