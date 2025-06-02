import type { Image } from "../../types";

export interface ItemProps {
  image: Partial<Image>;
  onClick?: () => void;
  className?: string;
}
