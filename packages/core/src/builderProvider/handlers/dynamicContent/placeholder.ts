import { Handler } from "@/builderProvider/types/type";
import { BaseDCItem, DCHandlerExtra } from "@/types/dynamicContent";

export type PlaceholderDataHandler = (uid: string, extra?: DCHandlerExtra) => Promise<BaseDCItem>;

export const getPlaceholderDataHandler = (placeholderDataHandler: PlaceholderDataHandler, uid: string) => {
  const handler: Handler<BaseDCItem, string, DCHandlerExtra> = async (res, rej, extra) => {
    try {
      const data = await placeholderDataHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching placeholder data";
      rej(message);
    }
  };

  return handler;
};
