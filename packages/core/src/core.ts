import { v4 as uuid } from "uuid";
import { loader } from "./Loader";
import { destroyLoader, initLoader } from "./Loader/init";
import {
  addFileRej,
  addFileRes,
  addMediaRej,
  addMediaRes,
  autoSave,
  dcImageRej,
  dcImageRes,
  dcLinkRej,
  dcLinkRes,
  dcRichTextRej,
  dcRichTextRes,
  formFieldsRej,
  formFieldsRes,
  init,
  save,
} from "./actions";
import { ActionTypes } from "./actions/types";
import {
  AddFileData,
  AddFileExtra,
  AddMediaData,
  AddMediaExtra,
  AutoSaveOutput,
  BaseDCItem,
  BuilderOutput,
  DCHandlerExtra,
  FormFieldsOption,
  HtmlOutputType,
  Init,
  OnSave,
  Target,
} from "./types/types";
import { createOutput } from "./utils/createOutput";

const actions = {
  init: init,
  save: save,
  autoSave: autoSave,
  addMediaRes: addMediaRes,
  addMediaRej: addMediaRej,
  addFileRes: addFileRes,
  addFileRej: addFileRej,
  formFieldsRes: formFieldsRes,
  formFieldsRej: formFieldsRej,
  dcRichTextRes: dcRichTextRes,
  dcRichTextRej: dcRichTextRej,
  dcImageRes: dcImageRes,
  dcImageRej: dcImageRej,
  dcLinkRes: dcLinkRes,
  dcLinkRej: dcLinkRej,
};

const savedNodeCB = new Map<HTMLElement, OnSave>();

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
  const uid = uuid();
  container.dataset.uid = uid;
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

    iframeWindow.postMessage(actions.init(config, uid, token), targetOrigin);

    _window.addEventListener("message", (event) => {
      const data = event.data;

      if (data.uid === undefined) {
        console.error("Missing the uid");
        return;
      }

      if (data.target !== Target.builder || data.uid !== uid) {
        return;
      }

      try {
        const action = JSON.parse(data.data);
        const api = {
          [ActionTypes.save]: (output: BuilderOutput) => {
            const _output = createOutput(htmlOutputType, output);
            config.onSave?.(_output);
            const onSaveCallback = savedNodeCB.get(container);

            if (typeof onSaveCallback === "function") {
              onSaveCallback(_output);
            }
          },
          [ActionTypes.autoSave]: (output: AutoSaveOutput) => {
            config.onAutoSave?.(output);
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
                iframeWindow.postMessage(actions.addMediaRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.addMediaRej(r, uid), targetOrigin);
              };

              iframe.blur();
              handler(res, rej, extra);
            }
          },
          [ActionTypes.addFile]: (extra: AddFileExtra) => {
            const { api = {} } = config;
            const { customFile = {} } = api;
            const handler = customFile.addFile?.handler;

            if (typeof handler === "function") {
              const res = (r: AddFileData) => {
                iframeWindow.postMessage(actions.addFileRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.addFileRej(r, uid), targetOrigin);
              };

              iframe.blur();
              handler(res, rej, extra);
            }
          },
          [ActionTypes.formFields]: () => {
            const { integration = {} } = config;
            const { form = {} } = integration;
            const handler = form.fields?.handler;

            if (typeof handler === "function") {
              const res = (r: Array<FormFieldsOption>) => {
                iframeWindow.postMessage(actions.formFieldsRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.formFieldsRej(r, uid), targetOrigin);
              };

              handler(res, rej);
            }
          },
          [ActionTypes.dcRichText]: (extra: DCHandlerExtra) => {
            const { dynamicContent = {} } = config;
            const richText = dynamicContent?.groups?.richText;

            if (!richText || Array.isArray(richText)) {
              return;
            }

            const res = (r: BaseDCItem) => {
              iframeWindow.postMessage(actions.dcRichTextRes(r, uid), targetOrigin);
            };
            const rej = (r: string) => {
              iframeWindow.postMessage(actions.dcRichTextRej(r, uid), targetOrigin);
            };

            richText.handler(res, rej, extra);
          },
          [ActionTypes.dcImage]: (extra: DCHandlerExtra) => {
            const { dynamicContent = {} } = config;
            const image = dynamicContent?.groups?.image;

            if (!image || Array.isArray(image)) {
              return;
            }

            const res = (r: BaseDCItem) => {
              iframeWindow.postMessage(actions.dcImageRes(r, uid), targetOrigin);
            };
            const rej = (r: string) => {
              iframeWindow.postMessage(actions.dcImageRej(r, uid), targetOrigin);
            };

            image.handler(res, rej, extra);
          },
          [ActionTypes.dcLink]: (extra: DCHandlerExtra) => {
            const { dynamicContent = {} } = config;
            const link = dynamicContent?.groups?.link;

            if (!link || Array.isArray(link)) {
              return;
            }

            const res = (r: BaseDCItem) => {
              iframeWindow.postMessage(actions.dcLinkRes(r, uid), targetOrigin);
            };
            const rej = (r: string) => {
              iframeWindow.postMessage(actions.dcLinkRej(r, uid), targetOrigin);
            };

            link.handler(res, rej, extra);
          },
          [ActionTypes.menuOpen]: () => {
            const { elements } = config;
            const { menu } = elements || {};

            if (typeof menu?.onOpen === "function") {
              menu.onOpen();
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

    const save = (cb?: OnSave) => {
      if (typeof cb === "function") {
        savedNodeCB.set(container, cb);
      }
      iframeWindow.postMessage(actions.save(uid), targetOrigin);
    };

    const api = {
      save,
    };

    cb(api);
  });

  container.appendChild(iframe);
};
