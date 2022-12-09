import { Init, Target } from "./types/types";
import { init, save } from "./actions";
import { ActionTypes } from "./actions/types";
import { loader } from "./Loader";
import { initLoader, destroyLoader } from "./Loader/init";

const actions = {
  init: init,
  save: save,
};

export const Core: Init = (container, config, cb) => {
  if (!(container instanceof HTMLElement)) {
    console.error("The element must be a valid HTMLElement");
    return;
  }

  const _window = container.ownerDocument.defaultView ?? window;
  const iframe = document.createElement("iframe");
  const spinner = loader(document);

  initLoader(spinner, container);

  iframe.setAttribute("src", `${PUBLIC_HOST}/index.html`);
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.frameBorder = "0";

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
          [ActionTypes.save]: config.onSave,
          [ActionTypes.onLoad]: () => {
            destroyLoader(spinner, container);
            config.onLoad?.();
          },
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

  container.appendChild(iframe);
};
