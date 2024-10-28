import { Choice } from "@/types/common";
import { Handler } from "../../../types/type";

type Extra = {
  id: string;
};

export type GetCollectionItemsHandler = (uid: string, extra?: Extra) => Promise<Choice[]>;

export const getCollectionItemsHandler = (collectionItemsHandler: GetCollectionItemsHandler, uid: string) => {
  const handler: Handler<Choice[], string, Extra> = async (res, rej, extra) => {
    try {
      const data = await collectionItemsHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error loading collection items";
      rej(message);
    }
  };

  return { handler };
};
