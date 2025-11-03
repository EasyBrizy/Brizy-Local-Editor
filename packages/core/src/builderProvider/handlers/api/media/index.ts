import { AddMediaData, AddMediaExtra } from "@/types/media";
import { Handler } from "../../../types/type";
import { normalizeMediaData } from "./utils";

export type AddMediaHandler = (uid: string, extra?: AddMediaExtra) => Promise<AddMediaData>;

export const getMediaHandler = (mediaHandler: AddMediaHandler, uid: string) => {
  const handler: Handler<AddMediaData, string, AddMediaExtra> = async (res, rej, extra) => {
    try {
      const data = await mediaHandler(uid, extra);
      const normalizedData = normalizeMediaData(data);

      if (normalizedData) {
        return res(normalizedData);
      }

      rej("Error adding media");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error adding media";
      rej(message);
    }
  };

  return { handler };
};
