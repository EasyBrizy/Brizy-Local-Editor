import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { LayoutsPages, Template } from "@/types/templates";

//#region Meta

interface MetaHandler extends HandlerData {
  res: Response<Template>;
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
        case `${target}_template_layouts_meta_res`: {
          res(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
        case `${target}_template_layouts_meta_rej`: {
          rej(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid TemplateLayoutsMeta JSON", e);
    }
  };
}

export const getLayoutsMeta = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<Template, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_layouts_meta`,
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
        case `${target}_template_layouts_data_res`: {
          res(action.data);
          window.removeEventListener("message", emitter);
          break;
        }
        case `${target}_template_layouts_data_rej`: {
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

export const getLayoutsData = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<Record<string, unknown>, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_layouts_data`,
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

//#region Pages

interface PagesHandler extends HandlerData {
  res: Response<LayoutsPages>;
  rej: Response<string>;
}

function handlePages(data: PagesHandler) {
  const { uid, target, res, rej } = data;

  return function metaEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_template_layouts_pages_res`: {
          res(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
        case `${target}_template_layouts_pages_rej`: {
          rej(action.data);
          window.removeEventListener("message", metaEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid TemplateLayoutsPages JSON", e);
    }
  };
}

export const getLayoutsPages = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<LayoutsPages, string, string> = (res, rej, extra) => {
    const data = JSON.stringify({
      type: `${target}_template_layouts_pages`,
      payload: extra,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handlePages({ res, rej, uid, event, target }));
  };

  return handler;
};

//#endregion
