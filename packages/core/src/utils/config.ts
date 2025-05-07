import { destroyLoader } from "@/Loader/init";
import { AddFileExtra } from "@/types/customFile";
import { BaseDCHandlerExtra, DCHandlerExtra, DCPlaceholdersExtra } from "@/types/dynamicContent";
import { UploadFontExtra } from "@/types/font";
import { LeftSidebarOptionsIds } from "@/types/leftSidebar";
import { AddMediaExtra } from "@/types/media";
import { PostsSources } from "@/types/posts";
import { ScreenshotExtra, ScreenshotRes } from "@/types/screenshots";
import { BlockWithThumbs, KitItem } from "@/types/templates";
import { AutoSaveOutput, BuilderOutput, CompileBuilderOutput, Config, OnCompile, OnSave } from "@/types/types";
import { createOutput, createPopupSettings } from "@/utils/createOutput";
import { Response } from "@/utils/types";

interface Params {
  uid: string;
  config: Config;
  iframe: HTMLIFrameElement;
  spinner: HTMLElement;
  container: HTMLElement;
  savedNodeCB: Map<HTMLElement, OnSave>;
  compiledNodeCB: Map<HTMLElement, OnCompile>;
}

export const getHandlers = ({ config, iframe, container, spinner, savedNodeCB, compiledNodeCB, uid }: Params) => ({
  addMedia: (iframeUid: string, extra: AddMediaExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { media = {} } = api;
    const handler = media.addMedia?.handler;
    if (typeof handler === "function") {
      iframe.blur();
      return new Promise((res, rej) => {
        handler(res, rej, extra);
      });
    }
  },
  addFile: (iframeUid: string, extra: AddFileExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { customFile = {} } = api;
    const handler = customFile.addFile?.handler;

    if (typeof handler === "function") {
      iframe.blur();
      return new Promise((res, rej) => {
        handler(res, rej, extra);
      });
    }
  },
  getKits: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultKits } = api;
    const getKits = defaultKits?.getKits;

    if (typeof getKits === "function") {
      return new Promise(getKits);
    }
  },
  getKitsMeta: (kit: KitItem, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultKits } = api;
    const getMeta = defaultKits?.getMeta;

    if (typeof getMeta === "function") {
      return new Promise((res, rej) => {
        getMeta(res, rej, kit);
      });
    }
  },
  getKitsData: (kit: BlockWithThumbs, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultKits } = api;
    const getData = defaultKits?.getData;

    if (typeof getData === "function") {
      return new Promise((res, rej) => {
        getData(res, rej, kit);
      });
    }
  },
  getPopupsMeta: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultPopups } = api;
    const getMeta = defaultPopups?.getMeta;

    if (typeof getMeta === "function") {
      return new Promise(getMeta);
    }
  },
  getPopupsData: (kit: KitItem, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultPopups } = api;
    const getData = defaultPopups?.getData;

    if (typeof getData === "function") {
      return new Promise((res, rej) => {
        getData(res, rej, kit);
      });
    }
  },
  getStoriesMeta: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultStories } = api;
    const getMeta = defaultStories?.getMeta;

    if (typeof getMeta === "function") {
      return new Promise(getMeta);
    }
  },
  getStoriesData: (page: { id: string; layoutId: string }, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultStories } = api;
    const getData = defaultStories?.getData;

    if (typeof getData === "function") {
      return new Promise((res, rej) => {
        getData(res, rej, page);
      });
    }
  },
  getStoriesPages: (id: string, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultStories } = api;
    const getPages = defaultStories?.getPages;

    if (typeof getPages === "function") {
      return new Promise((res, rej) => {
        getPages(res, rej, id);
      });
    }
  },
  getLayoutsMeta: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultLayouts } = api;
    const getMeta = defaultLayouts?.getMeta;

    if (typeof getMeta === "function") {
      return new Promise(getMeta);
    }
  },
  getLayoutsData: (page: { id: string; layoutId: string }, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultLayouts } = api;
    const getData = defaultLayouts?.getData;

    if (typeof getData === "function") {
      return new Promise((res, rej) => {
        getData(res, rej, page);
      });
    }
  },
  getLayoutsPages: (id: string, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { defaultLayouts } = api;
    const getPages = defaultLayouts?.getPages;

    if (typeof getPages === "function") {
      return new Promise((res, rej) => {
        getPages(res, rej, id);
      });
    }
  },
  createScreenshot: (iframeUid: string, extra: ScreenshotExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { screenshots } = api;
    const create = screenshots?.create;

    if (typeof create === "function") {
      return new Promise((res, rej) => {
        create(res, rej, extra);
      });
    }
  },
  updateScreenshot: (iframeUid: string, extra: ScreenshotExtra & ScreenshotRes) => {
    if (iframeUid !== uid) {
      return;
    }
    const { api = {} } = config;
    const { screenshots } = api;
    const update = screenshots?.update;

    if (typeof update === "function") {
      return new Promise((res, rej) => {
        update(res, rej, extra);
      });
    }
  },
  loadCollectionTypes: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { collectionTypes } = config.api ?? {};
    const handler = collectionTypes?.loadCollectionTypes.handler;

    if (typeof handler === "function") {
      return new Promise(handler);
    }
  },
  getCollectionItems: (iframeUid: string, extra: { id: string }) => {
    if (iframeUid !== uid) {
      return;
    }
    const { collectionItems } = config.api ?? {};
    const handler = collectionItems?.getCollectionItemsIds.handler;

    if (typeof handler === "function") {
      return new Promise((res, rej) => {
        handler(res, rej, extra);
      });
    }
  },
  handleDCRichText: (iframeUid: string, extra: DCHandlerExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { dynamicContent = {} } = config;
    const richText = dynamicContent?.groups?.richText;

    if (!richText || Array.isArray(richText) || typeof richText.handler !== "function") {
      return;
    }

    return new Promise((res, rej) => {
      richText.handler(res, rej, extra);
    });
  },
  handleDCImage: (iframeUid: string, extra: DCHandlerExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { dynamicContent = {} } = config;
    const image = dynamicContent?.groups?.image;

    if (!image || Array.isArray(image) || typeof image.handler !== "function") {
      return;
    }

    return new Promise((res, rej) => {
      image.handler(res, rej, extra);
    });
  },
  handleDCLink: (iframeUid: string, extra: DCHandlerExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { dynamicContent = {} } = config;
    const link = dynamicContent?.groups?.link;

    if (!link || Array.isArray(link) || typeof link.handler !== "function") {
      return;
    }

    return new Promise((res, rej) => {
      link.handler(res, rej, extra);
    });
  },
  dcHandler: (iframeUid: string, extra: BaseDCHandlerExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { dynamicContent = {} } = config;
    const { handler } = dynamicContent;

    if (typeof handler !== "function") {
      return;
    }

    return new Promise((res, rej) => {
      handler(res, rej, extra);
    });
  },
  getPlaceholderData: (iframeUid: string, extra: DCPlaceholdersExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { getPlaceholderData } = config.dynamicContent ?? {};

    if (typeof getPlaceholderData !== "function") {
      return;
    }

    return new Promise((res, rej) => {
      getPlaceholderData(res, rej, extra);
    });
  },
  save: (output: BuilderOutput, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const _output = createOutput(output);
    config.onSave?.(_output);
    const onSaveCallback = savedNodeCB.get(container);

    if (typeof onSaveCallback === "function") {
      onSaveCallback(_output);
    }
  },
  compile: (output: CompileBuilderOutput, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }

    const { pageData, projectData, error, mode } = output;
    const popupSettings = createPopupSettings({ pageData, mode });
    const data = {
      pageData,
      projectData,
      error,
      ...(popupSettings && { popupSettings }),
    };

    config.onSave?.(data);
    const onCompiledCallback = compiledNodeCB.get(container);

    if (typeof onCompiledCallback === "function") {
      onCompiledCallback(data);
    }
  },
  onAutoSave: (output: AutoSaveOutput, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    config.onAutoSave?.(output);
  },
  onLoad: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    destroyLoader(spinner, container);
    config.onLoad?.();
  },
  getFormFields: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { integrations = {} } = config;
    const { form = {} } = integrations;
    const handler = form.fields?.handler;

    if (typeof handler === "function") {
      return new Promise((res, rej) => {
        handler(res, rej);
      });
    }
  },
  onOpenCMS: async (cb: () => Promise<void>, iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { leftSidebar = {} } = config.ui ?? {};
    const cms = leftSidebar[LeftSidebarOptionsIds.cms];
    const onOpen = cms?.onOpen;

    if (typeof onOpen === "function") {
      const onClose = async () => {
        await cb();
      };

      onOpen(onClose);
    }
  },
  onCloseCMS: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { leftSidebar = {} } = config.ui ?? {};

    const cms = leftSidebar[LeftSidebarOptionsIds.cms];
    const onClose = cms?.onClose;

    if (typeof onClose === "function") {
      onClose();
    }
  },
  publish: (iframeUid: string, extra: BuilderOutput) => {
    if (iframeUid !== uid) {
      return;
    }
    const { publish } = config.ui ?? {};
    const handler = publish?.handler;

    if (typeof handler === "function") {
      const output = createOutput(extra);
      config.onSave?.(output);

      return new Promise((res, rej) => {
        handler(res, rej, output);
      });
    }
  },
  onOpenMenu: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { menu = {} } = config.elements ?? {};
    const onOpen = menu?.onOpen;

    if (typeof onOpen === "function") {
      onOpen();
    }
  },
  postsHandler: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { handler } = config.elements?.posts ?? {};

    if (typeof handler === "function") {
      return new Promise((res: Response<PostsSources>, rej: Response<string>) => {
        handler(res, rej);
      });
    }
  },
  searchCollectionItems: (
    iframeUid: string,
    extra?: {
      collectionId: string;
      search: string;
    },
  ) => {
    if (iframeUid !== uid) {
      return;
    }
    const { collectionItems } = config.api ?? {};
    const handler = collectionItems?.searchCollectionItems?.handler;
    if (typeof handler === "function") {
      return new Promise((res, rej) => {
        handler(res, rej, extra);
      });
    }
  },
  loadCollectionItems: (
    iframeUid: string,
    extra?: {
      collectionId: string;
      value: string[];
    },
  ) => {
    if (iframeUid !== uid) {
      return;
    }
    const { collectionItems } = config.api ?? {};
    const handler = collectionItems?.loadCollectionItems?.handler;
    if (typeof handler === "function") {
      return new Promise((res, rej) => {
        handler(res, rej, extra);
      });
    }
  },
  getFont: (iframeUid: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { fonts } = config.integrations ?? {};
    const handler = fonts?.upload?.get;

    if (typeof handler === "function") {
      return new Promise((res, rej) => {
        handler(res, rej);
      });
    }
  },
  uploadFont: (iframeUid: string, extra: UploadFontExtra) => {
    if (iframeUid !== uid) {
      return;
    }
    const { fonts } = config.integrations ?? {};
    const handler = fonts?.upload?.upload;

    if (typeof handler === "function") {
      return new Promise((res, rej) => {
        handler(res, rej, extra);
      });
    }
  },
  deleteFont: (iframeUid: string, fontId: string) => {
    if (iframeUid !== uid) {
      return;
    }
    const { fonts } = config.integrations ?? {};
    const handler = fonts?.upload?.delete;

    if (typeof handler === "function") {
      return new Promise((res, rej) => {
        handler(res, rej, fontId);
      });
    }
  },
});
