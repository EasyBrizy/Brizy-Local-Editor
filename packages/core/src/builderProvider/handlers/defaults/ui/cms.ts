import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";

//#region Open

interface OpenHandler extends HandlerData {
  onClose: Response<void>;
}

function handleOpen(data: OpenHandler) {
  const { uid, target, onClose } = data;

  return function openEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_leftSidebar_open_cms_close`: {
          onClose();
          console.log("CMS is Closed");
          window.removeEventListener("message", openEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid HandleLeftSidebarOpenCMS JSON", e);
    }
  };
}

export const getOpenCMS = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<void, string, string> = (onClose) => {
    const data = JSON.stringify({
      type: `${target}_leftSidebar_open_cms`,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleOpen({ onClose, uid, event, target }));
  };

  return handler;
};

//#endregion

//#region Close

export const getCloseCMS = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler = () => {
    const data = JSON.stringify({
      type: `${target}_leftSidebar_close_cms`,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);
  };

  return handler;
};

//#endregion
