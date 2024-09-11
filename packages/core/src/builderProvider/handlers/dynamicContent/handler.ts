import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { BaseDCHandlerExtra, ConfigDCItem } from "@/types/dynamicContent";

interface DCHandler extends HandlerData {
  res: Response<ConfigDCItem[]>;
  rej: Response<string>;
}

function handleDCHandler(data: DCHandler) {
  const { uid, target, res, rej } = data;

  return function emitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_dc_handler_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_dc_handler_rej`: {
          rej(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid DCOption JSON", e);
    }
  };
}

export const addDCHandler = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<ConfigDCItem[], string, BaseDCHandlerExtra> = (res, rej, extra) => {
    const data = JSON.stringify({ type: `${target}_dc_handler`, payload: extra });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleDCHandler({ res, rej, uid, target, event }));
  };

  return handler;
};
