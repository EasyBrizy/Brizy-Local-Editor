import { Dispatch, SetStateAction } from "react";
import { Image } from "../../types";

export interface ItemsProps {
  images: Partial<Image>[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
