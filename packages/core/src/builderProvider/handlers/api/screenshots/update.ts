import { Handler } from "@/builderProvider/types/type";
import { ScreenshotExtra, ScreenshotRes } from "@/types/screenshots";

type Extra = ScreenshotExtra & ScreenshotRes;
export type UpdateScreenshotsHandler = (uid: string, extra?: Extra) => Promise<ScreenshotRes>;

export const getUpdateScreenshots = (updateScreenshotHandler: UpdateScreenshotsHandler, uid: string) => {
  const handler: Handler<ScreenshotRes, string, Extra> = async (res, rej, extra) => {
    try {
      const data = await updateScreenshotHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to update screenshot";
      rej(message);
    }
  };

  return handler;
};
