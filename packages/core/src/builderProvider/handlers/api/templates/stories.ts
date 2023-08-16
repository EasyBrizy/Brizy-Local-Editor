import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { StoryTemplate } from "@/types/templates";

//#region Meta

interface MetaHandler extends HandlerData {
  res: Response<StoryTemplate>;
  rej: Response<string>;
}

function handleMeta(data: MetaHandler) {
  const { uid, target, res, rej } = data;

  return function metaEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_template_stories_meta_res`: {
          res(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
        case `${target}_template_stories_meta_rej`: {
          rej(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid TemplateKitsMeta JSON", e);
    }
  };
}

export const getStoriesMeta = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<StoryTemplate, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_stories_meta`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleMeta({ res, rej, uid, event, target }));
  };

  return handler;
};

//#endregion

//#region Data

interface DataHandler extends HandlerData {
  res: Response<Record<string, unknown>>;
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
        case `${target}_template_stories_data_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_template_stories_data_rej`: {
          rej(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid TemplateStoriesData JSON", e);
    }
  };
}

export const getStoriesData = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<Record<string, unknown>, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_stories_data`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleData({ res, rej, uid, event, target }));
  };

  return handler;
};

//#endregion
