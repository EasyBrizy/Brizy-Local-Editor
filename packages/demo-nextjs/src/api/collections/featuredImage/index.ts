import { getProductFeaturedImage } from "@/api/shopify/product/featuredImage";
import { Size } from "./types";

export const getFeaturedImage = async (sourceId: string, entityType: string, size: Size) => {
  if (entityType === "product") {
    return getProductFeaturedImage(sourceId, size);
  }
  return "";
};
