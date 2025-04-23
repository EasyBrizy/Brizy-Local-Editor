import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
