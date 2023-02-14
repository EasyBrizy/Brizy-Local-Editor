import { loader } from "./Loader";
import { destroyLoader, initLoader } from "./Loader/init";
import {
  addMediaRej,
  addMediaRes,
  dcRichTextRej,
  dcRichTextRes,
  formActionRej,
  formActionRes,
  formFieldsRej,
  formFieldsRes,
  init,
  save,
} from "./actions";
import { ActionTypes } from "./actions/types";
import {
  AddMediaData,
  AddMediaExtra,
  BuilderOutput,
  DynamicContentOption,
  FormFieldsOption,
  HtmlOutputType,
  Init,
  Target,
} from "./types/types";
import { createOutput } from "./utils/createOutput";

const actions = {
  init: init,
  save: save,
  addMediaRes: addMediaRes,
  addMediaRej: addMediaRej,
  formFieldsRes: formFieldsRes,
  formFieldsRej: formFieldsRej,
  formActionRes: formActionRes,
  formActionRej: formActionRej,
  dcRichTextRes: dcRichTextRes,
  dcRichTextRej: dcRichTextRej,
};

const noopFunc = () => {};

export const Core: Init<HtmlOutputType> = (token, config, cb) => {
  if (!token) {
    console.error("Token is required");
    return;
  }

  const { htmlOutputType = "monolith", container } = config;

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
    const targetOrigin = e.target?.src ?? "*";

    iframeWindow.postMessage(actions.init(config, token), targetOrigin);

    _window.addEventListener("message", (event) => {
      const data = event.data;
      if (data.target !== Target.builder) {
        return;
      }

      try {
        const action = JSON.parse(data.data);
        const api = {
          [ActionTypes.save]: (output: BuilderOutput) => {
            config.onSave?.(createOutput(htmlOutputType, output));
          },
          [ActionTypes.onLoad]: () => {
            destroyLoader(spinner, container);
            config.onLoad?.();
          },
          [ActionTypes.addMedia]: (extra: AddMediaExtra) => {
            const { api = {} } = config;
            const { media = {} } = api;
            const handler = media.addMedia?.handler;

            if (typeof handler === "function") {
              const res = (r: AddMediaData) => {
                iframeWindow.postMessage(actions.addMediaRes(r), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.addMediaRej(r), targetOrigin);
              };

              handler(res, rej, extra);
            }
          },
          [ActionTypes.formFields]: () => {
            const { integration = {} } = config;
            const { form = {} } = integration;
            const handler = form.fields?.handler;

            if (typeof handler === "function") {
              const res = (r: Array<FormFieldsOption>) => {
                iframeWindow.postMessage(actions.formFieldsRes(r), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.formFieldsRej(r), targetOrigin);
              };

              handler(res, rej);
            }
          },
          [ActionTypes.formAction]: () => {
            const { integration = {} } = config;
            const { form = {} } = integration;
            const handler = form.action?.handler;

            if (typeof handler === "function") {
              const res = (r: string) => {
                iframeWindow.postMessage(actions.formActionRes(r), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.formActionRej(r), targetOrigin);
              };

              handler(res, rej);
            }
          },
          [ActionTypes.dcRichText]: () => {
            const { dynamicContent = {} } = config;
            const handler = dynamicContent.richText;

            if (typeof handler === "function") {
              const res = (r: DynamicContentOption) => {
                iframeWindow.postMessage(actions.dcRichTextRes(r), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.dcRichTextRej(r), targetOrigin);
              };

              handler(res, rej);
            }
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

    const save = (callback?: VoidFunction) => {
      iframeWindow.postMessage(actions.save({ callback: String(callback ?? noopFunc) }), targetOrigin);
    };

    const api = {
      save,
    };

    cb(api);
  });

  container.appendChild(iframe);
};
