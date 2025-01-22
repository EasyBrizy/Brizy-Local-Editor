import { Choice } from "@/types/common";
import { Handler } from "../../../types/type";

type Extra = {
  collectionId: string;
  value: string[];
};

export type LoadCollectionItemsHandler = (uid: string, extra?: Extra) => Promise<Choice[]>;

export const loadCollectionItemsHandler = (loadCollectionItemsHandler: LoadCollectionItemsHandler, uid: string) => {
  const handler: Handler<Choice[], string, Extra> = async (res, rej, extra) => {
    try {
      const data = await loadCollectionItemsHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error loading collection items";
      rej(message);
    }
  };

  return { handler };
};
