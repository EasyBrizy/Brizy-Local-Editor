import { getFileFormat } from "@/builderProvider/handlers/api/media/utils";
import { AddMediaData, AddMediaExtra } from "@/types/media";
import { Handler } from "../../../types/type";

export type AddMediaHandler = (uid: string, extra?: AddMediaExtra) => Promise<AddMediaData>;

export const getMediaHandler = (mediaHandler: AddMediaHandler, uid: string) => {
  const handler: Handler<AddMediaData, string, AddMediaExtra> = async (res, rej, extra) => {
    try {
      const { uid: imageUid, fileName } = await mediaHandler(uid, extra);

      if (imageUid && fileName) {
        // Check if imageUid already has an extension
        const uidExtension = getFileFormat(imageUid);
        const fileNameExtension = getFileFormat(fileName);

        // Use imageUid directly if it has an extension, else append fileName's extension if available
        const finalUid = uidExtension ? imageUid : `${imageUid}.${fileNameExtension ?? ""}`;

        return res({ uid: finalUid, fileName });
      }

      // If only fileName is available, resolve with fileName as the UID
      if (fileName) {
        return res({ uid: fileName });
      }

      // If only imageUid is available, resolve with imageUid as the UID
      if (imageUid) {
        return res({ uid: imageUid });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error adding media";
      rej(message);
    }
  };

  return { handler };
};
