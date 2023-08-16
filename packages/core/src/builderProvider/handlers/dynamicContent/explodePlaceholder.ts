import { HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { DCPlaceholderObj } from "@/types/dynamicContent";

interface DataHandler extends HandlerData {
  res: Response<string>;
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
        case `${target}_dc_explode_placeholder_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_dc_explode_placeholder_rej`: {
          rej(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid makePlaceholder JSON", e);
    }
  };
}

export const addExplodePlaceholder = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler = (placeholder: string): DCPlaceholderObj | undefined => {
    const data = JSON.stringify({
      type: `${target}_dc_explode_placeholder`,
      payload: placeholder,
    });

    if (placeholder) {
      // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
      event.source?.postMessage({ target, uid, data }, event.origin);

      const res = () => {
        // TODO: Need review all of this in the Builder
        console.error("The explodePlaceholder doesn't work");
      };

      const rej = () => {
        // TODO: Need review all of this in the Builder
        console.error("The explodePlaceholder doesn't work");
      };

      // Listening the AddMessage
      window.addEventListener("message", handleData({ res, rej, uid, event, target }));
    }

    return undefined;
  };

  return handler;
};

//#endregion
