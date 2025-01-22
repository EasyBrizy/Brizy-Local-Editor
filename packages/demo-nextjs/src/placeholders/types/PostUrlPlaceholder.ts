import { getItem } from "@/lib/db/item/getItem";
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
    const isProduct = entityType === CollectionTypes.product;
    const params = isProduct
      ? {
          reference: `"collectionId":"${entityId}"`,
          type: CollectionTypes.product,
        }
      : {
          id: entityId,
        };

    try {
      const { slug } = await getItem(params);
      const { item, collection } = slug;

      return collection === CollectionTypes.page ? `${item}` : `/${collection}/${item}`;
    } catch (error) {
      if (isProduct) {
        // If there are no page created for the product, return the system product page
        const { slug } = await getItem({ type: CollectionTypes.system, item: "product" });
        return `/${slug.collection}/${slug.item}`;
      }

      return "";
    }
  }
}
