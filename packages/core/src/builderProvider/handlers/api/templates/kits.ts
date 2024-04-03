import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { Kit } from "@/types/templates";

//#region Base

interface BaseHandler extends HandlerData {
  res: Response<Array<Kit>>;
  rej: Response<string>;
}

function handleBase(data: BaseHandler) {
  const { uid, target, res, rej } = data;

  return function metaEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_template_kits_res`: {
          res(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
        case `${target}_template_kits_rej`: {
          rej(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid TemplateKits JSON", e);
    }
  };
}

export function getKits(data: HandlerData) {
  const { target, uid, event } = data;

  const handler: Handler<Array<Kit>, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_kits`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleBase({ res, rej, uid, event, target }));
  };

  return handler;
}

//#endregion

//#region Meta

interface MetaHandler extends HandlerData {
  res: Response<Array<Kit>>;
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
        case `${target}_template_kits_meta_res`: {
          res(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
        case `${target}_template_kits_meta_rej`: {
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

export const getKitsMeta = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<Array<Kit>, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_kits_meta`,
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
        case `${target}_template_kits_data_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_template_kits_data_rej`: {
          rej(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid TemplateKitsData JSON", e);
    }
  };
}

export const getKitsData = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<Record<string, unknown>, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_kits_data`,
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
