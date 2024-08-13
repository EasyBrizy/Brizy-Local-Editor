import { getProductDescription } from "@/api/shopify/product/description";

export const getCollectionDescription = (sourceId: string, entityType: string) =>
  entityType === "product" ? getProductDescription(sourceId) : "";
