import { Fonts } from "./fonts";
import { ExtraFontStyle, Style } from "./style";

export interface Project {
  id: string;
  dataVersion: number;
  data: {
    selectedKit: string;
    selectedStyle: string;
    styles: Style[];
    extraStyles: Style[];
    extraFontStyles: ExtraFontStyle[];
    font: string;
    fonts: Fonts;
    disabledElements: string[];
    pinnedElements: string[];
  };
}
