import { getCollectionDescription } from "@/api/collections/collectionDescription";
import { getCollectionTitle } from "@/api/collections/collectionTitle";
import { getFeaturedImage } from "@/api/collections/featuredImage";
import { getProductMetafield } from "@/api/shopify/product/metafield";
import { getProductPrice } from "@/api/shopify/product/price";
import { getProductVariantOptions, getProductVariantTitle } from "@/api/shopify/product/variant";
import { getProductVendor } from "@/api/shopify/product/vendor";
import { DCPlaceholderObj, PlaceholderType, Reference } from "@/lib/dynamicContent/types";

const getDCContext = (options: Record<string, unknown>[], id: string) => ({
  collection: options,
  dynamicContent: {
    itemId: id,
  },
  config: {
    "*": {
      dynamicContent: {
        itemId: id,
      },
    },
  },
});

let variantId = "";

export const getPlaceholderValue = async (
  placeholder: DCPlaceholderObj,
  placeholderKey: string,
  reference?: Reference,
) => {
  console.log("Placeholder : ", placeholder);
  const { entityId = "", entityType = "", cW, cH, key } = placeholder.attr ?? {};

  const id = entityId || reference?.collectionId;

  const type = entityType || reference?.collectionType;

  switch (placeholder.content) {
    case PlaceholderType.Price:
      return getProductPrice(id, true);
    case PlaceholderType.CompareAtPrice:
      return getProductPrice(id, false);
    case PlaceholderType.Title:
      return getCollectionTitle(id, type);
    case PlaceholderType.Description:
      return getCollectionDescription(id, type);
    case PlaceholderType.Vendor:
      return getProductVendor(id);
    case PlaceholderType.VariantOptions:
      const options = await getProductVariantTitle(id);

      if (variantId !== id) {
        // Variant element has loop of placeholders, and only the first one keep the id of product
        variantId = id;
      }

      return JSON.stringify(getDCContext(options, id));
    case PlaceholderType.VariantTitle:
      return placeholderKey;
    case PlaceholderType.VariantOptionValues:
      const optionValues = await getProductVariantOptions(variantId, placeholderKey);

      return JSON.stringify(getDCContext(optionValues, variantId));
    case PlaceholderType.VariantOptionTitle:
      return placeholderKey;
    case PlaceholderType.FeaturedImageOriginal:
    case PlaceholderType.FeaturedImageCustom:
      return getFeaturedImage(id, type, { cW, cH });
    case PlaceholderType.Metafield:
      console.log("DJIWDJIEFJI");
      return getProductMetafield(id, key);
    default:
      return placeholder.content;
  }
};
