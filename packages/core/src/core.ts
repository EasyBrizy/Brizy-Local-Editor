import { loader } from "@/Loader";
import { destroyLoader, initLoader } from "@/Loader/init";
import {
  addFileRej,
  addFileRes,
  addMediaRej,
  addMediaRes,
  autoSave,
  createScreenshotsRej,
  createScreenshotsRes,
  dcHandlerRej,
  dcHandlerRes,
  dcImageRej,
  dcImageRes,
  dcLinkRej,
  dcLinkRes,
  dcPlaceholderRej,
  dcPlaceholderRes,
  dcRichTextRej,
  dcRichTextRes,
  formFieldsRej,
  formFieldsRes,
  getCollectionItemsIdsRej,
  getCollectionItemsIdsRes,
  init,
  leftSidebarOpenCMSClose,
  loadCollectionRej,
  loadCollectionRes,
  publishRej,
  publishRes,
  save,
  templateKitsDataRej,
  templateKitsDataRes,
  templateKitsMetaRej,
  templateKitsMetaRes,
  templateLayoutsDataRej,
  templateLayoutsDataRes,
  templateLayoutsMetaRej,
  templateLayoutsMetaRes,
  templateLayoutsPagesRej,
  templateLayoutsPagesRes,
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
import { templateKitsRej, templateKitsRes } from "@/actions/templates";
import { ActionTypes } from "@/actions/types";
import { AddFileData, AddFileExtra } from "@/types/customFile";
import {
  BaseDCHandlerExtra,
  BaseDCItem,
  ConfigDCItem,
  DCHandlerExtra,
  DCPlaceholdersExtra,
} from "@/types/dynamicContent";
import { FormFieldsOption } from "@/types/form";
import { LeftSidebarOptionsIds } from "@/types/leftSidebar";
import { AddMediaData, AddMediaExtra } from "@/types/media";
import { PublishData } from "@/types/publish";
import { ScreenshotExtra, ScreenshotRes } from "@/types/screenshots";
import {
  BlockWithThumbs,
  BlocksArray,
  DefaultBlockWithID,
  KitItem,
  KitsWithThumbs,
  LayoutsPages,
  LayoutsWithThumbs,
  Popup,
  StoryTemplate,
} from "@/types/templates";
import { AutoSaveOutput, BuilderOutput, HtmlOutputType, Init, OnSave, Target } from "@/types/types";
import { createOutput } from "@/utils/createOutput";
import { Dictionary } from "@/utils/types";
import { v4 as uuid } from "uuid";

const actions = {
  init,
  save,
  autoSave,
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
  dcPlaceholderRes,
  dcPlaceholderRej,
  dcHandlerRes,
  dcHandlerRej,
  templateKitsRes,
  templateKitsRej,
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
  templateLayoutsPagesRes,
  templateLayoutsPagesRej,
  templateStoriesMetaRes,
  templateStoriesMetaRej,
  templateStoriesDataRes,
  templateStoriesDataRej,
  createScreenshotsRes,
  createScreenshotsRej,
  updateScreenshotsRes,
  updateScreenshotsRej,
  leftSidebarOpenCMSClose,
  publishRej,
  publishRes,
  loadCollectionRes,
  loadCollectionRej,
  getCollectionItemsIdsRes,
  getCollectionItemsIdsRej,
};

const savedNodeCB = new Map<HTMLElement, OnSave<HtmlOutputType>>();

export const Core: Init<HtmlOutputType> = (token, config, cb) => {
  if (!token) {
    console.error("Token is required");
    return;
  }

  const { htmlOutputType = "html", container } = config;

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
        if (data.target !== undefined) {
          console.warn("Missing the uid");
        }

        return;
      }

      if (data.target !== Target.builder || data.uid !== uid) {
        return;
      }

      try {
        const action = JSON.parse(data.data);
        const api = {
          [ActionTypes.save]: (output: BuilderOutput<HtmlOutputType>) => {
            const _output = createOutput(htmlOutputType, output);
            config.onSave?.(_output);
            const onSaveCallback = savedNodeCB.get(container);

            if (typeof onSaveCallback === "function") {
              onSaveCallback(_output);
            }
          },
          [ActionTypes.autoSave]: (output: AutoSaveOutput<HtmlOutputType>) => {
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
            const { integrations = {} } = config;
            const { form = {} } = integrations;
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
          [ActionTypes.dcHandler]: (extra: BaseDCHandlerExtra) => {
            const { dynamicContent = {} } = config;
            const { handler } = dynamicContent;

            const res = (r: ConfigDCItem[]) => {
              iframeWindow.postMessage(actions.dcHandlerRes(r, uid), targetOrigin);
            };
            const rej = (r: string) => {
              iframeWindow.postMessage(actions.dcHandlerRej(r, uid), targetOrigin);
            };

            handler?.(res, rej, extra);
          },
          [ActionTypes.dcPlaceholderData]: (extra: DCPlaceholdersExtra) => {
            const { getPlaceholderData } = config.dynamicContent ?? {};

            if (typeof getPlaceholderData !== "function") {
              return;
            }
            const res = (r: Dictionary<string>) => {
              iframeWindow.postMessage(actions.dcPlaceholderRes(r, uid), targetOrigin);
            };

            const rej = (r: string) => {
              iframeWindow.postMessage(actions.dcPlaceholderRej(r, uid), targetOrigin);
            };

            getPlaceholderData(res, rej, extra);
          },
          [ActionTypes.templateKits]: () => {
            const { api = {} } = config;
            const { defaultKits } = api;
            const getKits = defaultKits?.getKits;

            if (typeof getKits === "function") {
              const res = (r: Array<KitItem>) => {
                iframeWindow.postMessage(actions.templateKitsRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateKitsMetaRej(r, uid), targetOrigin);
              };
              getKits(res, rej);
            }
          },
          [ActionTypes.templateKitsMeta]: (kit: KitItem) => {
            const { api = {} } = config;
            const { defaultKits } = api;
            const getMeta = defaultKits?.getMeta;

            if (typeof getMeta === "function") {
              const res = (r: KitsWithThumbs) => {
                iframeWindow.postMessage(actions.templateKitsMetaRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateKitsMetaRej(r, uid), targetOrigin);
              };
              getMeta(res, rej, kit);
            }
          },
          [ActionTypes.templateKitsData]: (kit: BlockWithThumbs) => {
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
              getData(res, rej, kit);
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
          [ActionTypes.templatePopupsData]: (kit: KitItem) => {
            const { api = {} } = config;
            const { defaultPopups } = api;
            const getData = defaultPopups?.getData;

            if (typeof getData === "function") {
              const res = (r: DefaultBlockWithID) => {
                iframeWindow.postMessage(actions.templatePopupsDataRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templatePopupsDataRej(r, uid), targetOrigin);
              };
              getData(res, rej, kit);
            }
          },
          [ActionTypes.templateLayoutsMeta]: () => {
            const { api = {} } = config;
            const { defaultLayouts } = api;
            const getMeta = defaultLayouts?.getMeta;

            if (typeof getMeta === "function") {
              const res = (r: LayoutsWithThumbs) => {
                iframeWindow.postMessage(actions.templateLayoutsMetaRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateLayoutsMetaRej(r, uid), targetOrigin);
              };
              getMeta(res, rej);
            }
          },
          [ActionTypes.templateLayoutsData]: (page: { id: string; layoutId: string }) => {
            const { api = {} } = config;
            const { defaultLayouts } = api;
            const getData = defaultLayouts?.getData;

            if (typeof getData === "function") {
              const res = (r: BlocksArray<DefaultBlockWithID>) => {
                iframeWindow.postMessage(actions.templateLayoutsDataRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateLayoutsDataRej(r, uid), targetOrigin);
              };
              getData(res, rej, page);
            }
          },
          [ActionTypes.templateLayoutsPages]: (id: string) => {
            const { api = {} } = config;
            const { defaultLayouts } = api;
            const getPages = defaultLayouts?.getPages;

            if (typeof getPages === "function") {
              const res = (r: LayoutsPages) => {
                iframeWindow.postMessage(actions.templateLayoutsPagesRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.templateLayoutsPagesRej(r, uid), targetOrigin);
              };
              getPages(res, rej, id);
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
          [ActionTypes.templateStoriesData]: (id: string) => {
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
              getData(res, rej, id);
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
          [ActionTypes.leftSidebarOpenCMS]: () => {
            const { leftSidebar = {} } = config.ui ?? {};
            const cms = leftSidebar[LeftSidebarOptionsIds.cms];
            const onOpen = cms?.onOpen;

            if (typeof onOpen === "function") {
              const onClose = () => {
                iframeWindow.postMessage(actions.leftSidebarOpenCMSClose(uid), targetOrigin);
              };

              onOpen(onClose);
            }
          },
          [ActionTypes.leftSidebarCloseCMS]: () => {
            const { leftSidebar = {} } = config.ui ?? {};
            const cms = leftSidebar[LeftSidebarOptionsIds.cms];
            const onClose = cms?.onClose;

            if (typeof onClose === "function") {
              onClose();
            }
          },
          [ActionTypes.uiPublish]: (extra: BuilderOutput<HtmlOutputType>) => {
            const { publish } = config.ui ?? {};
            const handler = publish?.handler;

            if (typeof handler === "function") {
              const res = (r: PublishData<HtmlOutputType>) => {
                iframeWindow.postMessage(actions.publishRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.publishRej(r, uid), targetOrigin);
              };

              const output = createOutput(htmlOutputType, extra);

              config.onSave?.(output);
              handler(res, rej, output);
            }
          },
          [ActionTypes.loadCollectionTypes]: () => {
            const { collectionTypes } = config.api ?? {};
            const handler = collectionTypes?.loadCollectionTypes.handler;

            if (typeof handler === "function") {
              const res = (r: any) => {
                iframeWindow.postMessage(actions.loadCollectionRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.loadCollectionRej(r, uid), targetOrigin);
              };

              handler(res, rej);
            }
          },
          [ActionTypes.getCollectionItemsIds]: (extra: { id: string }) => {
            const { collectionItems } = config.api ?? {};
            const handler = collectionItems?.getCollectionItemsIds.handler;

            if (typeof handler === "function") {
              const res = (r: any) => {
                iframeWindow.postMessage(actions.getCollectionItemsIdsRes(r, uid), targetOrigin);
              };
              const rej = (r: string) => {
                iframeWindow.postMessage(actions.getCollectionItemsIdsRej(r, uid), targetOrigin);
              };

              handler(res, rej, extra);
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

    const save = (cb?: OnSave<HtmlOutputType>) => {
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
