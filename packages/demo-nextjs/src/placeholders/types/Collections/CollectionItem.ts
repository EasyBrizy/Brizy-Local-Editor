import { getProductVendor } from "@/lib/db/shopify/product/getVendor";
import { getContext } from "@/placeholders/types/utils";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { BasePlaceholder } from "../BasePlaceholder";
import { PlaceholderType } from "../types";

export class CollectionItemPlaceholder extends BasePlaceholder {
  constructor() {
    super("CollectionItemField Placeholder", PlaceholderType.CollectionItemField);
  }

  support(placeholderName: string): boolean {
    return super.support(placeholderName);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId } = getContext(context, placeholder);
    const { slug } = placeholder.getAttributes() ?? {};

    if (slug === "vendor") {
      return getProductVendor(entityId);
    }

    return entityId;
  }
}
