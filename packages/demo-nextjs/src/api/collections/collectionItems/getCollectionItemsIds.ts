import { Response } from "../../types";
import { CollectionItem, getCollectionItems } from "./index";

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
