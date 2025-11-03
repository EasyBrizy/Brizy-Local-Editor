import { AddMediaData } from "@/types/media";

export const normalizeMediaData = (data: AddMediaData): AddMediaData | null => {
  const { uid, fileName } = data;

  if (uid && fileName) {
    return {
      uid,
      fileName,
    };
  }

  if (uid) {
    return {
      uid,
    };
  }

  if (fileName) {
    return {
      uid: fileName,
    };
  }

  return null;
};
