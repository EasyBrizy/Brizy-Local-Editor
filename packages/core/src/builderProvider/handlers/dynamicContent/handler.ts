import { Handler } from "@/builderProvider/types/type";
import { BaseDCHandlerExtra, ConfigDCItem } from "@/types/dynamicContent";

export type DCHandler = (uid: string, extra?: BaseDCHandlerExtra) => Promise<ConfigDCItem[]>;

export const baseDCHandler = (dcHandler: DCHandler, uid: string) => {
  const handler: Handler<ConfigDCItem[], string, BaseDCHandlerExtra> = async (res, rej, extra) => {
    try {
      const data = await dcHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching dc data";
      rej(message);
    }
  };

  return handler;
};
