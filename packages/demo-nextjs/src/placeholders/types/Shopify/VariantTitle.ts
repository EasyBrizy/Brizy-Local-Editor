import { ContextInterface } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";
import { isCollectionContext } from "../../context/types";
import { BasePlaceholder } from "../BasePlaceholder";
import { PlaceholderType } from "../types";

export class VariantTitlePlaceholder extends BasePlaceholder {
  constructor() {
    super("VariantTitle Placeholder", PlaceholderType.VariantTitle);
  }

  public async getValue(context: ContextInterface): Promise<string> {
    let variantTitle = "";

    if (isCollectionContext(context)) {
      const { placeholderKey } = context.getAttributes();

      if (!Str.is(placeholderKey)) {
        return "";
      }

      variantTitle = placeholderKey.split("|||")[0];
    }

    return variantTitle;
  }
}
