import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { BaseDCItem, DCHandlerExtra } from "@/types/dynamicContent";

interface ImageHandler extends HandlerData {
  res: Response<BaseDCItem>;
  rej: Response<string>;
}

function handleDCImage(data: ImageHandler) {
  const { uid, target, res, rej } = data;

  return function imageEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_dc_image_res`: {
          res(action.data);
          window.removeEventListener("message", imageEmitter);
          break;
        }
        case `${target}_dc_image_rej`: {
          rej(action.data);
          window.removeEventListener("message", imageEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid ImageDCOption JSON", e);
    }
  };
}

export const addImageDCHandler = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<BaseDCItem, string, DCHandlerExtra> = (res, rej, extra) => {
    const data = JSON.stringify({ type: `${target}_dc_image`, payload: extra });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleDCImage({ res, rej, uid, target, event }));
  };

  return handler;
};
