import { EntityType } from "@/constants/EntityType";
import { getProductDescription } from "@/lib/db/shopify/product/getDescription";

export const getCollectionDescription = async (collectionId: string, entityType: string) =>
  entityType === EntityType.PRODUCT ? getProductDescription(collectionId) : "";
