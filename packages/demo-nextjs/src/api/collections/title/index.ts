import { EntityType } from "@/constants/EntityType";
import { getProductTitle } from "@/lib/db/shopify/product/getTitle";

export const getCollectionTitle = async (collectionId: string, entityType: string) =>
  entityType === EntityType.PRODUCT ? getProductTitle(collectionId) : "";
