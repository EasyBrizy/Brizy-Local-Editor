import { Response } from "@/api/types";
import { getItemsByIds } from "@/lib/db/item/getItems";
import { CollectionTypes } from "@/lib/db/types";
import { getProductsByIds } from "./requests";
import { CollectionItem } from "./types";

type Extra = {
  collectionId: string;
  value: string[];
};

export const loadCollectionItems = {
  async handler(res: Response<CollectionItem[]>, rej: Response<string>, extra: Extra) {
    try {
      const { value, collectionId } = extra;
      let items: CollectionItem[] = [];

      if (collectionId === CollectionTypes.product) {
        items = await getProductsByIds(value);
      } else {
        const data = await getItemsByIds(value);
        items = data.map((item) => ({
          title: item.slug.item,
          value: item.id,
        }));
      }

      res(items);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Failed to load collection items";
      rej(errorMessage);
    }
  },
};
