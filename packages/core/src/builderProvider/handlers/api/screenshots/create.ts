import { Handler } from "@/builderProvider/types/type";
import { ScreenshotExtra, ScreenshotRes } from "@/types/screenshots";

export type CreateScreenshotsHandler = (uid: string, extra?: ScreenshotExtra) => Promise<ScreenshotRes>;

export const getCreateScreenshots = (createScreenshotHandler: CreateScreenshotsHandler, uid: string) => {
  const handler: Handler<ScreenshotRes, string, ScreenshotExtra> = async (res, rej, extra) => {
    try {
      const data = await createScreenshotHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to create screenshot";
      rej(message);
    }
  };

  return handler;
};
