import { Handler } from "@/builderProvider/types/type";
import { BaseDCItem, DCHandlerExtra } from "@/types/dynamicContent";

export type ImageDCHandler = (uid: string, extra?: DCHandlerExtra) => Promise<BaseDCItem>;

export const addImageDCHandler = (imageHandler: ImageDCHandler, uid: string) => {
  const handler: Handler<BaseDCItem, string, DCHandlerExtra> = async (res, rej, extra) => {
    try {
      const data = await imageHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching image dc data";
      rej(message);
    }
  };

  return { handler };
};
