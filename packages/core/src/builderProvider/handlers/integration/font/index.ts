import { Handler } from "@/builderProvider/types/type";
import { UploadFont, UploadFontExtra, UploadedFont } from "@/types/font";

export type UploadFontHandler = (uid: string, extra?: UploadFontExtra) => Promise<UploadFont>;

const uploadFontHandler = (uploadHandler: UploadFontHandler, uid: string) => {
  const handler: Handler<UploadFont, string, UploadFontExtra> = async (res, rej, extra) => {
    try {
      const data = await uploadHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to upload font";
      rej(message);
    }
  };
  return handler;
};

export type GetFontHandler = (uid: string) => Promise<UploadedFont[]>;

const getFontHandler = (getFontsHandler: GetFontHandler, uid: string) => {
  const handler: Handler<UploadedFont[], string, undefined> = async (res, rej) => {
    try {
      const data = await getFontsHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to get uploaded fonts";
      rej(message);
    }
  };
  return handler;
};

export type DeleteFontHandler = (uid: string, fontId: string) => Promise<string>;

const deleteFontHandler = (deleteHandler: DeleteFontHandler, uid: string) => {
  const handler: Handler<string, string, string> = async (res, rej, fontId) => {
    try {
      const data = await deleteHandler(uid, fontId ?? "");
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to delete uploaded font";
      rej(message);
    }
  };
  return handler;
};

interface Font {
  fonts: Record<string, unknown>;
  uploadHandler: UploadFontHandler;
  getFontsHandler: GetFontHandler;
  deleteHandler: DeleteFontHandler;
  uid: string;
}

export const getFonts = (data: Font) => {
  const { fonts, uploadHandler, getFontsHandler, deleteHandler, uid } = data;

  return {
    ...fonts,
    upload: {
      upload: uploadFontHandler(uploadHandler, uid),
      get: getFontHandler(getFontsHandler, uid),
      delete: deleteFontHandler(deleteHandler, uid),
    },
  };
};
