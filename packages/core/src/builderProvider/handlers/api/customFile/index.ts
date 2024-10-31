import { AddFileData, AddFileExtra } from "@/types/customFile";
import { Handler } from "../../../types/type";

export type AddCustomFileHandler = (uid: string, extra?: AddFileExtra) => Promise<AddFileData>;

export const getCustomFileHandler = (fileHandler: AddCustomFileHandler, uid: string) => {
  const handler: Handler<AddFileData, string, AddFileExtra> = async (res, rej, extra) => {
    try {
      const data = await fileHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error adding custom file";
      rej(message);
    }
  };

  return {
    handler,
  };
};
