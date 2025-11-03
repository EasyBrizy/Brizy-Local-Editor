import { Handler } from "@/builderProvider/types/type";
import { AddMediaData, AddMediaExtra } from "@/types/media";
import { normalizeMediaData } from "./utils";

export type ImageGalleryHandler = (uid: string, extra?: AddMediaExtra) => Promise<Array<AddMediaData>>;

export const getImageGalleryHandler = (imageGalleryHandler: ImageGalleryHandler, uid: string) => {
  const handler: Handler<AddMediaData[], string, AddMediaExtra> = async (res, rej, extra) => {
    try {
      const data = await imageGalleryHandler(uid, extra);

      if (Array.isArray(data)) {
        return res(data.map(normalizeMediaData).filter(Boolean) as AddMediaData[]);
      }

      return res([]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error adding media gallery";
      rej(message);
    }
  };

  return { handler };
};
