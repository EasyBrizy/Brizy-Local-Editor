import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Choice, Response } from "@/types/common";

interface CollectionTypesHandler extends HandlerData {
  res: Response<Choice[]>;
  rej: Response<string>;
}

function handleCollectionTypes(data: CollectionTypesHandler) {
  const { uid, target, res, rej } = data;

  return function emitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_load_collection_types_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_load_collection_types_rej`: {
          rej(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid LoadCollectionTypes JSON", e);
    }
  };
}

export const loadCollectionTypes = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<Choice[], string, unknown> = (res, rej) => {
    const data = JSON.stringify({
      type: `${target}_load_collection_types`,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleCollectionTypes({ res, rej, uid, event, target }));
  };

  return { handler };
};
