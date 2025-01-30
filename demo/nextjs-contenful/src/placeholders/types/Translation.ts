import { BasePlaceholder } from "@/placeholders/types/BasePlaceholder";
import { PlaceholderType } from "@/placeholders/types/types";

export class TranslationPlaceholder extends BasePlaceholder {
  constructor() {
    super("Translation Placeholder", PlaceholderType.Translation);
  }
}
