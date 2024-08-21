import { Size } from "@/api/collections/featuredImage/types";
import { EntityType } from "@/constants/EntityType";
import { getProductFeaturedImage } from "@/lib/db/shopify/product/getFeaturedImage";

export const getFeaturedImage = async (collectionId: string, entityType: string, size: Size) =>
  entityType === EntityType.PRODUCT ? getProductFeaturedImage(collectionId, size) : "";
