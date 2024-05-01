import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { AddMediaData, AddMediaExtra } from "@/types/media";

interface MediaHandler extends HandlerData {
  res: Response<AddMediaData>;
  rej: Response<string>;
}

function handleAddMedia(data: MediaHandler) {
  const { uid, target, res, rej } = data;

  return function mediaEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_add_media_res`: {
          res({ uid: action.data.uid, fileName: action.data.fileName });
          window.removeEventListener("message", mediaEmitter);
          break;
        }
        case `${target}_add_media_rej`: {
          rej(action.data);
          window.removeEventListener("message", mediaEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid AddMedia JSON", e);
    }
  };
}

export const addMediaHandler = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<AddMediaData, string, AddMediaExtra> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_add_media`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleAddMedia({ res, rej, uid, event, target }));
  };

  return handler;
};
