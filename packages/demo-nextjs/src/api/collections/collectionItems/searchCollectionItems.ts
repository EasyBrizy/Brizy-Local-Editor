import { Response } from "@/api/types";
import { getCollectionItems } from "@/lib/db/item/getCollectionItems";
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

      items = data.map((item) => ({
        title: item.title,
        value: item.id,
      }));

      res(items);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Failed to search collection items";
      rej(errorMessage);
    }
  },
};
