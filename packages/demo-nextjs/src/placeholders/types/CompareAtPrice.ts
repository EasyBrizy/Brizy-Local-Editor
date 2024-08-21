import { getProductPrice } from "@/lib/db/shopify/product/getPrice";
import { getContext } from "@/placeholders/types/utils";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

export class CompareAtPricePlaceholder extends BasePlaceholder {
  constructor() {
    super("CompareAtPrice", PlaceholderType.CompareAtPrice);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId } = getContext(context, placeholder);

    return getProductPrice(entityId, true);
  }
}
