import { getCollectionItemsIds, loadCollectionItems, searchCollectionItems } from "@/api/collections/collectionItems";
import { loadCollectionTypes } from "@/api/collections/collectionTypes/loadCollectionTypes";
import { Response } from "@/api/types";
import {
  convertLayoutPages,
  convertLayouts,
  convertStories,
  convertStoriesPages,
  convertToCategories,
  converterKit,
  converterPopup,
  isDefaultBlockArray,
  isDefaultBlockWithID,
  isKitDataItems,
  isPopupDataResult,
  isStoryDataBlocks,
  isStoryDataResponse,
} from "@/components/Editor/contexts/converters";
import { ConfigWithReference } from "@/components/Editor/contexts/types";
import { replacePlaceholders } from "@/placeholders";
import { MediaUpload } from "@brizy/cloud-media-upload";
import { Arr, Json, Obj } from "@brizy/readers";
import { BaseDCHandlerExtra, ConfigDCItem, DCPlaceholdersExtra } from "@builder/core/build/es/types/dynamicContent";
import { UploadFont, UploadFontExtra, UploadedFont } from "@builder/core/build/es/types/font";
import { LeftSidebarMoreOptionsIds, LeftSidebarOptionsIds } from "@builder/core/build/es/types/leftSidebar";
import { PostsSources } from "@builder/core/build/es/types/posts";
import {
  BlockWithThumbs,
  BlocksArray,
  CustomTemplatePage,
  DefaultBlock,
  DefaultBlockWithID,
  KitItem,
  KitsWithThumbs,
  LayoutsPages,
  LayoutsWithThumbs,
  Popup,
  StoriesWithThumbs,
} from "@builder/core/build/es/types/templates";
import { Dictionary } from "@builder/core/build/es/utils/types";
import axios from "axios";
import { isT, mPipe, pass } from "fp-utilities";

const newTemplates = "https://template-mk.b-cdn.net/api";
const templatesImageUrl = "https://cloud-1de12d.b-cdn.net/media/iW=1024&iH=1024/";

export const getApi = () => {
  const mediaUpload = new MediaUpload({ clientId: 123456, isDev: true });

  return {
    collectionTypes: {
      loadCollectionTypes,
    },
    collectionItems: {
      getCollectionItemsIds,
      searchCollectionItems,
      loadCollectionItems,
    },
    media: mediaUpload.mediaConfig,

    defaultKits: {
      async getKits(res: Response<Array<KitItem>>, rej: Response<string>) {
        try {
          const kits = await fetch(`${newTemplates}/get-kits`);

          if (kits) {
            const response = await kits.json();

            const parsedKits = response.collections.map((item: { slug: string; title: string }) => ({
              ...item,
              id: item.slug,
            }));

            res(parsedKits);
          }
        } catch (e) {
          rej("Failed to load Kits");
        }
      },
      async getMeta(res: Response<KitsWithThumbs>, rej: Response<string>, kit: KitItem) {
        try {
          const response = await fetch(`${newTemplates}/get-kit-collections-chunk?project_id=${kit.id}`);

          if (response) {
            const data = await response.json();

            const { types, blocks } = converterKit(data.collections, templatesImageUrl, kit.id);

            res({
              id: kit.id,
              blocks,
              categories: convertToCategories(data.categories),
              types,
              name: kit.title,
              styles: [data.styles],
            });
          }
        } catch (e) {
          rej("Failed to load meta.json");
        }
      },
      async getData(res: Response<Record<string, unknown>>, rej: Response<string>, kit: BlockWithThumbs) {
        try {
          const response = await fetch(`${newTemplates}/get-item?project_id=${kit.kitId}&page_slug=${kit.id}`, {
            method: "GET",
          });

          if (response) {
            const data = await response.json();

            const collection = data.collection.pop();

            const x = JSON.parse(collection.pageData).items.pop();

            res(x);
          }
        } catch (e) {
          rej("Failed to load resolves for selected DefaultTemplate");
        }
      },
    },
    defaultPopups: {
      async getMeta(res: Response<Popup>, rej: Response<string>) {
        try {
          const response = await fetch(`${newTemplates}/get-popups-chunk`);

          if (response) {
            const res2 = await response.json();

            const data = converterPopup(res2.collections, templatesImageUrl);

            const convertedCategories = convertToCategories(res2.categories);

            res({ ...data, categories: convertedCategories });
          }
        } catch (e) {
          rej("Failed to load meta.json");
        }
      },
      async getData(res: Response<DefaultBlockWithID>, rej: Response<string>, kit: KitItem) {
        try {
          const data = await fetch(`${newTemplates}/get-popup-data?project_id=${kit.id}`);

          if (data) {
            const res2 = await data.json();

            const parsedResult = mPipe(
              pass(isPopupDataResult),
              (res) => res.pop()?.pageData,
              (r) => Json.read(r),
              pass(isKitDataItems),
              Obj.readKey("items"),
              Arr.read,
              (r) => r.pop(),
            )(res2);

            if (isT(parsedResult) && isDefaultBlockWithID(parsedResult)) {
              res(parsedResult);
            }
          }
        } catch (e) {
          rej("Failed to load resolves for selected DefaultTemplate");
        }
      },
    },
    defaultLayouts: {
      async getMeta(res: Response<LayoutsWithThumbs>, rej: Response<string>) {
        try {
          const response = await fetch(`${newTemplates}/get-layouts-chunk`, {
            method: "GET",
          });

          if (response) {
            const data = await response.json();

            if (data.collections && data.categories) {
              const result: LayoutsWithThumbs = {
                templates: convertLayouts(data.collections, templatesImageUrl),
                categories: convertToCategories(data.categories),
              };

              res(result);
            }
          }
        } catch (e) {
          rej("Failed to load meta.json");
        }
      },
      async getData(
        res: Response<BlocksArray<DefaultBlockWithID>>,
        rej: Response<string>,
        { id, layoutId }: CustomTemplatePage,
      ) {
        try {
          const response = await fetch(`${newTemplates}/get-layouts-page?project_id=${layoutId}&page_slug=${id}`, {
            method: "GET",
          });

          if (response.ok) {
            const data = await response.json();

            const parsedResult = mPipe(
              Arr.read,
              (res) => res[0] as { pageData: string },
              Obj.readKey("pageData"),
              (r) =>
                Json.read(r) as {
                  items: DefaultBlockWithID[];
                },
            )(data);

            if (isT(parsedResult)) {
              const result: BlocksArray<DefaultBlockWithID> = {
                blocks: [...parsedResult.items],
              };

              res(result);
            }
          }
        } catch (e) {
          rej("Failed to load resolves for selected DefaultTemplate");
        }
      },
      async getPages(res: Response<LayoutsPages>, rej: Response<string>, id: string) {
        try {
          const response = await fetch(`${newTemplates}/get-layouts-pages?project_id=${id}&per_page=20`, {
            method: "GET",
          });

          if (response) {
            const data = await response.json();

            const parsedData: CustomTemplatePage[] = convertLayoutPages(data.collections, templatesImageUrl, id);

            res({ pages: parsedData, styles: [data.styles] });
          }
        } catch (e) {
          rej("Failed to load pages for selected Layout");
        }
      },
    },
    defaultStories: {
      async getMeta(res: Response<StoriesWithThumbs>, rej: Response<string>) {
        try {
          const response = await fetch(`${newTemplates}/get-story-chunk`, {
            method: "GET",
          });

          if (response) {
            const result = await response.json();

            if (result.collections && result.categories) {
              const data = {
                stories: convertStories(result.collections, templatesImageUrl),
                categories: convertToCategories(result.categories),
              };

              res(data);
            }
          }
        } catch (e) {
          rej("Failed to load Stories");
        }
      },
      async getData(
        res: Response<BlocksArray<DefaultBlock>>,
        rej: Response<string>,
        { layoutId, id }: { id: string; layoutId: string },
      ) {
        try {
          const response = await fetch(`${newTemplates}/get-story-page-data?project_id=${layoutId}&page_slug=${id}`, {
            method: "GET",
          });

          if (response.ok) {
            const result = await response.json();

            const parsedResult = mPipe(
              pass(isStoryDataResponse),
              Obj.readKey("collection"),
              Json.read,
              pass(isStoryDataBlocks),
              pass(({ blocks }) => isDefaultBlockArray(blocks)),
            )(result);

            if (parsedResult) {
              res({ blocks: parsedResult.blocks });
            }
          }
        } catch (e) {
          rej("Failed to load resolves for selected DefaultTemplate");
        }
      },
      async getPages(res: Response<LayoutsPages>, rej: Response<string>, id: string) {
        try {
          const response = await fetch(`${newTemplates}/get-story-page?project_id=${id}&per_page=20`, {
            method: "GET",
          });

          if (response) {
            const result = await response.json();

            const parsedData = convertStoriesPages(result.collections, templatesImageUrl, id);

            res({
              pages: parsedData,
              styles: [result.styles],
            });
          }
        } catch (e) {
          rej("Failed to load pages for selected Stories");
        }
      },
    },
  };
};

export const getDynamicContent = (baseConfig: ConfigWithReference) => ({
  async getPlaceholderData(res: Response<Dictionary<string[]>>, rej: Response<string>, extra: DCPlaceholdersExtra) {
    try {
      const { placeholders: placeholdersData } = extra;

      const { reference } = baseConfig;

      let placeholderValues: Record<string, string[]> = {};

      await Promise.all(
        Object.entries(placeholdersData).map(async ([key, placeholders]) => {
          if (!Array.isArray(placeholders)) {
            return {};
          }

          placeholderValues[key] = await Promise.all(
            placeholders.map((placeholder) =>
              replacePlaceholders({ value: placeholder, placeholderKey: key, reference }),
            ),
          );
        }),
      );

      res(placeholderValues);
    } catch (e) {
      rej("Failed to get placeholder data");
      console.log("Failed to get placeholder data", e);
    }
  },
  handler: (res: Response<ConfigDCItem[]>, rej: Response<string>, extra: BaseDCHandlerExtra) => {
    const { groupType } = extra;
    const { dynamicContent } = baseConfig;

    if (!dynamicContent || !dynamicContent.groups) {
      return rej("Dynamic content not found");
    }

    const groupData = dynamicContent.groups[groupType] as ConfigDCItem[];
    res(groupData);
  },
});

export const getUI = (origin: string) => ({
  leftSidebar: {
    topTabsOrder: [
      {
        id: LeftSidebarOptionsIds.cms,
        type: LeftSidebarOptionsIds.cms,
      },
      {
        id: LeftSidebarOptionsIds.addElements,
        type: LeftSidebarOptionsIds.addElements,
      },
      {
        id: LeftSidebarOptionsIds.reorderBlock,
        type: LeftSidebarOptionsIds.reorderBlock,
      },
      {
        id: LeftSidebarOptionsIds.globalStyle,
        type: LeftSidebarOptionsIds.globalStyle,
      },
    ],
    [LeftSidebarOptionsIds.more]: {
      options: [
        {
          type: LeftSidebarMoreOptionsIds.shortcuts,
          label: "Shortcuts",
          link: "",
        },
        {
          type: LeftSidebarMoreOptionsIds.link,
          label: "Back to Dashboard",
          link: `${origin}/admin`,
          linkTarget: "_parent",
        },
      ],
    },
  },
});

export const getElements = (menuCb: VoidFunction) => ({
  posts: {
    handler: async (res: Response<PostsSources>, rej: Response<string>) => {
      try {
        const { collections, orderBy } = await fetch("/api/collections").then((res) => res.json());
        const sources = collections.map(({ id, title }: { id: string; title: string }) => ({
          id,
          title,
          orderBy,
        }));

        return res({
          sources,
          refsById: [],
        });
      } catch (e) {
        console.error(e);
        const error = e instanceof Error ? e.message : "Failed to get post sources";
        rej(error);
      }
    },
  },
  menu: {
    onOpen: menuCb,
  },
});

export const getIntegrations = (origin: string) => ({
  fonts: {
    upload: {
      get: async (res: Response<UploadedFont>, rej: Response<string>) => {
        try {
          const { data } = await axios.get("/api/fonts");
          return res(data);
        } catch (e) {
          console.error(e);
          rej("Failed to get fonts");
        }
      },
      upload: async (res: Response<UploadFont>, rej: Response<string>, extra: UploadFontExtra) => {
        try {
          const formData = new FormData();
          const { id, name, files } = extra;
          formData.append("id", id);
          formData.append("name", name);
          Object.entries(files).forEach(([type, filesType]) => {
            Object.entries(filesType).forEach(([fileType, file]) => {
              if (file) {
                // Flatten the key
                const key = `${type}_${fileType}`; // e.g., "font_regular"
                formData.append(key, file, file.name);
              }
            });
          });
          const { data } = await axios.post("/api/fonts", formData);

          return res(data);
        } catch (e) {
          console.error(e);
          rej("Failed to upload font");
        }
      },
      delete: async (res: Response<string>, rej: Response<string>, id: string) => {
        try {
          await axios.delete(`/api/font/${id}`);
          return res(id);
        } catch (e) {
          console.error(e);
          rej("Failed to delete font");
        }
      },
    },
  },
});
