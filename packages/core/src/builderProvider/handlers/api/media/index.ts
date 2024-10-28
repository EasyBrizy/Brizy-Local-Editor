import { AddMediaData, AddMediaExtra } from "@/types/media";
import { Handler } from "../../../types/type";

export type AddMediaHandler = (uid: string, extra?: AddMediaExtra) => Promise<AddMediaData>;

export const getMediaHandler = (mediaHandler: AddMediaHandler, uid: string) => {
  const handler: Handler<AddMediaData, string, AddMediaExtra> = async (res, rej, extra) => {
    try {
      const data = await mediaHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error adding media";
      rej(message);
    }
  };

  return { handler };
};
