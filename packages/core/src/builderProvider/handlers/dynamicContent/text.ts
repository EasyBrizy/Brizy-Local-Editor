import { Handler } from "@/builderProvider/types/type";
import { BaseDCItem, DCHandlerExtra } from "@/types/dynamicContent";

export type RichTextDCHandler = (uid: string, extra?: DCHandlerExtra) => Promise<BaseDCItem>;

export const addRichTextDCHandler = (richTextHandler: RichTextDCHandler, uid: string) => {
  const handler: Handler<BaseDCItem, string, DCHandlerExtra> = async (res, rej, extra) => {
    try {
      const data = await richTextHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching richtext dc data";
      rej(message);
    }
  };

  return { handler };
};
