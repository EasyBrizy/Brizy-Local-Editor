import { Handler } from "@/builderProvider/types/type";
import { BaseDCItem, DCHandlerExtra } from "@/types/dynamicContent";

export type LinkDCHandler = (uid: string, extra?: DCHandlerExtra) => Promise<BaseDCItem>;

export const addLinkDCHandler = (linkHandler: LinkDCHandler, uid: string) => {
  const handler: Handler<BaseDCItem, string, DCHandlerExtra> = async (res, rej, extra) => {
    try {
      const data = await linkHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching link dc data";
      rej(message);
    }
  };

  return { handler };
};
