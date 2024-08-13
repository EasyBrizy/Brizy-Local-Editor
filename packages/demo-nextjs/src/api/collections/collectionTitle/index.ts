import { getProductTitle } from "../../shopify/product/title";

export const getCollectionTitle = async (sourceId: string, entityType: string) =>
  entityType === "product" ? getProductTitle(sourceId) : "";
