import { EntityType } from "@/constants/EntityType";
import { getShopifyCollectionItems } from "@/lib/db/shopify/getCollectionItems";
import { ShopifyTemplate } from "@builder/core/build/es/types/types";
import { Response } from "../../types";
import { CollectionItem } from "./types";

export const getCollectionItems = async (id: string) => {
  let items: CollectionItem[] = [];

  if (id === EntityType.PRODUCT || id === ShopifyTemplate.Product) {
    items = await getShopifyCollectionItems();
  }

  return [{ title: "Auto", value: "auto" }, ...items];
};

export const getCollectionItemsIds = {
  async handler(res: Response<CollectionItem[]>, rej: Response<string>, extra: { id: string }) {
    try {
      const { id } = extra;
      const items = await getCollectionItems(id);

      res(items);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Failed to get collection items";
      rej(errorMessage);
    }
  },
};
