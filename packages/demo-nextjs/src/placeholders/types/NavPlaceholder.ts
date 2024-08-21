import { BasePlaceholder } from "@/placeholders/types/BasePlaceholder";
import { PlaceholderType } from "@/placeholders/types/types";
import { ContextInterface } from "@brizy/content-placeholder";

export class NavPlaceholder extends BasePlaceholder {
  constructor() {
    super("Nav Placeholder", PlaceholderType.NavItem);
  }

  support(placeholderName: string): boolean {
    return placeholderName.startsWith(this.placeholder);
  }
}
