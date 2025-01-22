import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { PlaceholderType } from "../types";
import { MenuBasePlaceholder } from "./MenuBasePlaceholder";

export class MegaMenuValuePlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MegaMenuValue Placeholder", PlaceholderType.MegaMenuValue);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    return "";
  }
}
