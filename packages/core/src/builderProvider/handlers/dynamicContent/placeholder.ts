import { HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { DCPlaceholdersExtra } from "@/types/dynamicContent";
import { Dictionary } from "@/utils/types";

interface PlaceholderDataHandler extends HandlerData {
  res: Response<Dictionary<string>>;
  rej: Response<string>;
}

function placeholderDataHandler(data: PlaceholderDataHandler) {
  const { uid, target, res, rej } = data;

  return function placeholderData(event: MessageEvent) {
    const data = event.data;
    if (data.ta !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);
      switch (action.type) {
        case `${target}_dc_placeholder_data_res`: {
          res(action.data);
          window.removeEventListener("message", placeholderData);
          break;
        }
        case `${target}_dc_placeholder_data_rej`:
          rej(action.data);
          window.removeEventListener("message", placeholderData);
          break;
      }
    } catch (e) {
      console.log("Invalid DCPlaceholder Data JSON: ", e);
    }
  };
}

export function getPlaceholderDataHandler(data: HandlerData) {
  const { target, uid, event } = data;

  return (res: Response<Dictionary<string>>, rej: Response<string>, extra: DCPlaceholdersExtra) => {
    const data = JSON.stringify({ type: `${target}_dc_get_placeholder_data`, payload: extra });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    window.addEventListener("message", placeholderDataHandler({ res, rej, uid, target, event }));
  };
}
