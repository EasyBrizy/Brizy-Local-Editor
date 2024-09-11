import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Choice, Response } from "@/types/common";

interface CollectionItemsHandler extends HandlerData {
  res: Response<Choice[]>;
  rej: Response<string>;
}

function handleCollectionItems(data: CollectionItemsHandler) {
  const { uid, target, res, rej } = data;

  return function emitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_get_collection_items_ids_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_get_collection_items_ids_rej`: {
          rej(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid collectionItems JSON", e);
    }
  };
}

export const getCollectionItemsIds = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<Choice[], string, unknown> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_get_collection_items_ids`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleCollectionItems({ res, rej, uid, event, target }));
  };

  return { handler };
};
