import { Response } from "@/api/types";
import { getCollectionItems } from "@/lib/db/item/getCollectionItems";
import { CollectionTypes } from "@/lib/db/types";
import { searchProductsByTitle } from "./requests";
import { CollectionItem } from "./types";

type Extra = {
  collectionId: string;
  search: string;
};

export const searchCollectionItems = {
  async handler(res: Response<CollectionItem[]>, rej: Response<string>, extra: Extra) {
    try {
      const { collectionId, search } = extra;
      let items: CollectionItem[] = [];

      const { data } = await getCollectionItems({
        collection: collectionId,
        search,
      });

      if (collectionId === CollectionTypes.product) {
        items = await searchProductsByTitle(search);
      } else {
        items = data.map((item) => ({
          title: item.title,
          value: item.id,
        }));
      }

      res(items);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Failed to search collection items";
      rej(errorMessage);
    }
  },
};
