import { AddMediaData, AddMediaExtra } from "@/types/media";
import { Handler } from "../../../types/type";

export type AddMediaHandler = (uid: string, extra?: AddMediaExtra) => Promise<AddMediaData>;

export const getMediaHandler = (mediaHandler: AddMediaHandler, uid: string) => {
  const handler: Handler<AddMediaData, string, AddMediaExtra> = async (res, rej, extra) => {
    try {
      const { uid: imageUid, fileName } = await mediaHandler(uid, extra);

      if (imageUid && fileName) {
        return res({ uid: imageUid, fileName });
      }

      if (fileName) {
        return res({ uid: fileName });
      }

      if (imageUid) {
        return res({ uid: imageUid });
      }

      rej("Error adding media");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error adding media";
      rej(message);
    }
  };

  return { handler };
};
