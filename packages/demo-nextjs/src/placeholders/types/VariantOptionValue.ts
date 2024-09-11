import { isCollectionContext } from "@/placeholders/context/types";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

export class VariantOptionValuePlaceholder extends BasePlaceholder {
  constructor() {
    super("VariantOptionValue Placeholder", PlaceholderType.VariantOptionValue);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    let value = "";

    if (isCollectionContext(context)) {
      const { placeholderKey } = context.getAttributes();

      if (!Str.is(placeholderKey)) {
        return value;
      }

      value = placeholderKey.split("|||")[0];
    }

    return value;
  }
}
