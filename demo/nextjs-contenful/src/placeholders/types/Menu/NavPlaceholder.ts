import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { BasePlaceholder } from "../BasePlaceholder";
import { PlaceholderType } from "../types";

export class NavPlaceholder extends BasePlaceholder {
  constructor() {
    super("Nav Placeholder", PlaceholderType.NavItem);
  }

  support(placeholderName: string): boolean {
    return placeholderName.startsWith(this.getPlaceholder());
  }

  async getValue(_: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    return placeholder.getContent() ?? "";
  }
}
