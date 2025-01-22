import { Choice } from "@/types/common";
import { Handler } from "../../../types/type";

type Extra = {
  collectionId: string;
  search: string;
};

export type SearchCollectionItemsHandler = (uid: string, extra?: Extra) => Promise<Choice[]>;

export const searchCollectionItemsHandler = (
  searchCollectionItemsHandler: SearchCollectionItemsHandler,
  uid: string,
) => {
  const handler: Handler<Choice[], string, Extra> = async (res, rej, extra) => {
    try {
      const data = await searchCollectionItemsHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error searching collection items";
      rej(message);
    }
  };

  return { handler };
};
