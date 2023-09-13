import { loader } from "@/Loader";
import { destroyLoader, initLoader } from "@/Loader/init";
import {
  addFileRej,
  addFileRes,
  addMediaRej,
  addMediaRes,
  createScreenshotsRej,
  createScreenshotsRes,
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
  templateKitsDataRej,
  templateKitsDataRes,
  templateKitsMetaRej,
  templateKitsMetaRes,
  templateLayoutsDataRej,
  templateLayoutsDataRes,
  templateLayoutsMetaRej,
  templateLayoutsMetaRes,
  templatePopupsDataRej,
  templatePopupsDataRes,
  templatePopupsMetaRej,
  templatePopupsMetaRes,
  templateStoriesDataRej,
  templateStoriesDataRes,
  templateStoriesMetaRej,
  templateStoriesMetaRes,
  updateScreenshotsRej,
  updateScreenshotsRes,
} from "@/actions";
import { ActionTypes } from "@/actions/types";
import { AddFileData, AddFileExtra } from "@/types/customFile";
import { BaseDCItem, DCHandlerExtra } from "@/types/dynamicContent";
import { FormFieldsOption } from "@/types/form";
import { AddMediaData, AddMediaExtra } from "@/types/media";
import { ScreenshotExtra, ScreenshotRes } from "@/types/screenshots";
import { Kit, Popup, StoryTemplate, Template } from "@/types/templates";
import { BuilderOutput, HtmlOutputType, Init, OnSave, Target } from "@/types/types";
import { createOutput } from "@/utils/createOutput";
import { v4 as uuid } from "uuid";

const actions = {
  init,
  save,
  addMediaRes,
  addMediaRej,
  addFileRes,
  addFileRej,
  formFieldsRes,
  formFieldsRej,
  dcRichTextRes,
  dcRichTextRej,
  dcImageRes,
  dcImageRej,
  dcLinkRes,
  dcLinkRej,
  templateKitsMetaRes,
  templateKitsMetaRej,
  templateKitsDataRes,
  templateKitsDataRej,
  templatePopupsMetaRes,
  templatePopupsMetaRej,
  templatePopupsDataRes,
  templatePopupsDataRej,
  templateLayoutsMetaRes,
  templateLayoutsMetaRej,
  templateLayoutsDataRes,
  templateLayoutsDataRej,
  templateStoriesMetaRes,
  templateStoriesMetaRej,
  templateStoriesDataRes,
  templateStoriesDataRej,
  createScreenshotsRes,
  createScreenshotsRej,
  updateScreenshotsRes,
  updateScreenshotsRej,
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
          [ActionTypes.templateKitsMeta]: () => {
            const { api = {} } = config;
            const { defaultKits } = api;
            const getMeta = defaultKits?.getMeta;

            if (typeof getMeta === "function") {
              const res = (r: Array<Kit>) => {
                iframeWindow.postMessage(actions.templateKitsMetaRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateKitsMetaRej(r, uid), targetOrigin);
              };
              getMeta(res, rej);
            }
          },
          [ActionTypes.templateKitsData]: (blockId: string) => {
            const { api = {} } = config;
            const { defaultKits } = api;
            const getData = defaultKits?.getData;

            if (typeof getData === "function") {
              const res = (r: Record<string, unknown>) => {
                iframeWindow.postMessage(actions.templateKitsDataRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateKitsDataRej(r, uid), targetOrigin);
              };
              getData(res, rej, blockId);
            }
          },
          [ActionTypes.templatePopupsMeta]: () => {
            const { api = {} } = config;
            const { defaultPopups } = api;
            const getMeta = defaultPopups?.getMeta;

            if (typeof getMeta === "function") {
              const res = (r: Popup) => {
                iframeWindow.postMessage(actions.templatePopupsMetaRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templatePopupsMetaRej(r, uid), targetOrigin);
              };
              getMeta(res, rej);
            }
          },
          [ActionTypes.templatePopupsData]: (popupId: string) => {
            const { api = {} } = config;
            const { defaultPopups } = api;
            const getData = defaultPopups?.getData;

            if (typeof getData === "function") {
              const res = (r: Record<string, unknown>) => {
                iframeWindow.postMessage(actions.templatePopupsDataRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templatePopupsDataRej(r, uid), targetOrigin);
              };
              getData(res, rej, popupId);
            }
          },
          [ActionTypes.templateLayoutsMeta]: () => {
            const { api = {} } = config;
            const { defaultLayouts } = api;
            const getMeta = defaultLayouts?.getMeta;

            if (typeof getMeta === "function") {
              const res = (r: Template) => {
                iframeWindow.postMessage(actions.templateLayoutsMetaRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateLayoutsMetaRej(r, uid), targetOrigin);
              };
              getMeta(res, rej);
            }
          },
          [ActionTypes.templateLayoutsData]: (layoutId: string) => {
            const { api = {} } = config;
            const { defaultLayouts } = api;
            const getData = defaultLayouts?.getData;

            if (typeof getData === "function") {
              const res = (r: Record<string, unknown>) => {
                iframeWindow.postMessage(actions.templateLayoutsDataRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateLayoutsDataRej(r, uid), targetOrigin);
              };
              getData(res, rej, layoutId);
            }
          },
          [ActionTypes.templateStoriesMeta]: () => {
            const { api = {} } = config;
            const { defaultStories } = api;
            const getMeta = defaultStories?.getMeta;

            if (typeof getMeta === "function") {
              const res = (r: StoryTemplate) => {
                iframeWindow.postMessage(actions.templateStoriesMetaRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateStoriesMetaRej(r, uid), targetOrigin);
              };
              getMeta(res, rej);
            }
          },
          [ActionTypes.templateStoriesData]: (storyId: string) => {
            const { api = {} } = config;
            const { defaultStories } = api;
            const getData = defaultStories?.getData;

            if (typeof getData === "function") {
              const res = (r: Record<string, unknown>) => {
                iframeWindow.postMessage(actions.templateStoriesDataRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateStoriesDataRej(r, uid), targetOrigin);
              };
              getData(res, rej, storyId);
            }
          },
          [ActionTypes.createScreenshots]: (extra: ScreenshotExtra) => {
            const { api = {} } = config;
            const { screenshots } = api;
            const create = screenshots?.create;

            if (typeof create === "function") {
              const res = (r: ScreenshotRes) => {
                iframeWindow.postMessage(actions.createScreenshotsRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.createScreenshotsRej(r, uid), targetOrigin);
              };
              create(res, rej, extra);
            }
          },
          [ActionTypes.updateScreenshots]: (extra: ScreenshotExtra & ScreenshotRes) => {
            const { api = {} } = config;
            const { screenshots } = api;
            const update = screenshots?.update;

            if (typeof update === "function") {
              const res = (r: ScreenshotRes) => {
                iframeWindow.postMessage(actions.updateScreenshotsRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.updateScreenshotsRej(r, uid), targetOrigin);
              };
              update(res, rej, extra);
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
