import { Init, Target } from "./types/types";
import { init, save } from "./actions";

const actions = {
  init: init,
  save: save,
};

export const Core: Init = (iframe, config, cb) => {
  if (!(iframe instanceof HTMLIFrameElement)) {
    console.error("The element must be a valid iframe");
    return;
  }

  const _window = iframe.ownerDocument.defaultView ?? window;

  iframe.addEventListener("load", (e) => {
    const iframeWindow = iframe.contentWindow;

    if (!iframeWindow) {
      console.error("Something went wrong on load iframe");
      return;
    }

    // @ts-expect-error: Property 'src' does not exist on type 'EventTarget'
    iframeWindow.postMessage(actions.init(config), e.target?.src ?? "*");

    _window.addEventListener("message", (event) => {
      const data = event.data;
      if (data.target !== Target.builder) {
        return;
      }

      try {
        const action = JSON.parse(data.data);
        const api = {
          save: config.onSave,
        };

        // @ts-expect-error: temporary
        if (typeof api[action.type] === "function") {
          // @ts-expect-error: temporary
          api[action.type](action.payload);
        } else {
          console.error("Invalid Event Data");
        }
      } catch (e) {
        console.error("Invalid Event Data");
      }
    });

    const save = () => {
      // @ts-expect-error: Property 'src' does not exist on type 'EventTarget'
      iframeWindow.postMessage(actions.save(), e.target?.src ?? "*");
    };

    const api = {
      save,
    };

    cb(api);
  });
};
