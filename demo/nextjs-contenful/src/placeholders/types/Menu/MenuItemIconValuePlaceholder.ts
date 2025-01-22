import { PlaceholderType } from "@/placeholders/types/types";
import { BasePlaceholder } from "../BasePlaceholder";

export class MenuItemIconValuePlaceholder extends BasePlaceholder {
  constructor() {
    super("MenuItemIconValue Placeholder", PlaceholderType.MenuItemIconValue);
  }

  async getValue(): Promise<string> {
    return "";
  }
}
