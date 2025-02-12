import { MenuBasePlaceholder } from "./MenuBasePlaceholder";

export class MegaMenuValuePlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MegaMenuValue Placeholder", "mega_menu_value");
  }

  async getValue(): Promise<string> {
    return "";
  }
}
