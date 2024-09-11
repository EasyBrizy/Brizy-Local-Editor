import { EntityType } from "@/constants/EntityType";
import { getShopifyCollectionItems } from "@/lib/db/shopify/getCollectionItems";
import { ShopifyTemplate } from "@builder/core/build/es/types/types";

export interface CollectionItem {
  title: string;
  value: string;
}

export const getCollectionItems = async (id: string) => {
  let items: CollectionItem[] = [];

  if (id === EntityType.PRODUCT || id === ShopifyTemplate.Product) {
    items = await getShopifyCollectionItems();
  }

  return [{ title: "Auto", value: "auto" }, ...items];
};
