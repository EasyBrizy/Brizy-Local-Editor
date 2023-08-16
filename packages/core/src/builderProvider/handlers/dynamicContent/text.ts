import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { BaseDCItem, DCHandlerExtra } from "@/types/dynamicContent";

interface TextHandler extends HandlerData {
  res: Response<BaseDCItem>;
  rej: Response<string>;
}

function handleDCRichText(data: TextHandler) {
  const { uid, target, res, rej } = data;

  return function richTextEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_dc_richtext_res`: {
          res(action.data);
          window.removeEventListener("message", richTextEmitter);
          break;
        }
        case `${target}_dc_richtext_rej`: {
          rej(action.data);
          window.removeEventListener("message", richTextEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid RichTextDCOption JSON", e);
    }
  };
}

export const addRichTextDCHandler = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<BaseDCItem, string, DCHandlerExtra> = (res, rej, extra) => {
    const data = JSON.stringify({ type: `${target}_dc_richtext`, payload: extra });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleDCRichText({ res, rej, uid, target, event }));
  };

  return handler;
};
