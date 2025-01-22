import { getProductPrice } from "@/lib/db/shopify/product/getPrice";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { BasePlaceholder } from "../BasePlaceholder";
import { PlaceholderType } from "../types";
import { getContext } from "../utils";

export class PricePlaceholder extends BasePlaceholder {
  constructor() {
    super("Price Placeholder", PlaceholderType.Price);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId } = getContext(context, placeholder);

    return getProductPrice(entityId);
  }
}
