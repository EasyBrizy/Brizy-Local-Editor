import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { ScreenshotExtra, ScreenshotRes } from "@/types/screenshots";

interface DataHandler extends HandlerData {
  res: Response<ScreenshotRes>;
  rej: Response<string>;
}

function handleData(data: DataHandler) {
  const { uid, target, res, rej } = data;

  return function emitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_update_screenshots_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_update_screenshots_rej`: {
          rej(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid UpdateScreenshots JSON", e);
    }
  };
}

export const getUpdateScreenshots = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<ScreenshotRes, string, ScreenshotExtra & ScreenshotRes> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_update_screenshots`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleData({ res, rej, uid, event, target }));
  };

  return handler;
};
