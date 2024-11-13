import { getItem } from "@/lib/db/item/getItem";
import { getProductUrl } from "@/lib/db/shopify/product/getProductUrl";
import { CollectionTypes } from "@/lib/db/types";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";
import { getContext } from "./utils";

export class PostUrlPlaceholder extends BasePlaceholder {
  constructor() {
    super("PostUrl Placeholder", PlaceholderType.PostUrl);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId, entityType } = getContext(context, placeholder);
    if (entityType === CollectionTypes.product) {
      return await getProductUrl(entityId);
    } else {
      const { slug } = await getItem({
        id: entityId,
      });

      const { item, collection } = slug;

      return `/${collection}/${item}`;
    }
  }
}
