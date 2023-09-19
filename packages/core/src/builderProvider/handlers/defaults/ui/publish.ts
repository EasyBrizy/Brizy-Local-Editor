import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { Publish, PublishData } from "@/types/publish";
import { HtmlOutputType } from "@/types/types";

interface PublishHandler extends HandlerData {
  res: Response<PublishData>;
  rej: Response<string>;
}

function handlePublish(data: PublishHandler) {
  const { uid, target, res, rej } = data;

  return function openEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_ui_publish_res`: {
          res(action.data);
          window.removeEventListener("message", openEmitter);
          break;
        }
        case `${target}_ui_publish_rej`: {
          rej(action.data);
          window.removeEventListener("message", openEmitter);
        }
      }
    } catch (e) {
      console.error("Invalid HandlePublish JSON", e);
    }
  };
}

export const getPublish = (data: HandlerData): Publish<HtmlOutputType> => {
  const { target, uid, event } = data;

  const handler: Handler<PublishData, string, PublishData> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_ui_publish`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handlePublish({ res, rej, uid, event, target }));
  };

  return { handler };
};
