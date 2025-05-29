import { Image } from "../../types";
import { Dispatch, SetStateAction } from "react";

export interface ItemsProps {
  images: Partial<Image>[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
