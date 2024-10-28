import { Choice } from "@/types/common";
import { Handler } from "../../../types/type";

export type LoadCollectionTypesHandler = (uid: string) => Promise<Choice[]>;

export const getLoadCollectionTypesHandler = (collectionHandler: LoadCollectionTypesHandler, uid: string) => {
  const handler: Handler<Choice[], string, undefined> = async (res, rej) => {
    try {
      const data = await collectionHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error loading collection types";
      rej(message);
    }
  };

  return { handler };
};
