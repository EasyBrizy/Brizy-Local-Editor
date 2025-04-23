import { Attributes, CSSProperties, ReactNode } from "react";

export interface Props {
  children: ReactNode;
  attributes?: Attributes;
  style?: CSSProperties;
}
