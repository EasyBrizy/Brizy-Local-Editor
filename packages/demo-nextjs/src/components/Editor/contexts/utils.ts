import { getCollectionItemsIds } from "@/api/collections/collectionItems/getCollectionItemsIds";
import { loadCollectionTypes } from "@/api/collections/collectionTypes/loadCollectionTypes";
import { Response } from "@/api/types";
import {
  convertLayoutPages,
  convertLayouts,
  convertToCategories,
  converterKit,
  converterPopup,
  isDefaultBlockWithID,
  isKitDataItems,
  isPopupDataResult,
} from "@/components/Editor/contexts/converters";
import { ConfigWithReference } from "@/components/Editor/contexts/types";
import { asNewCategory, numCategoryToStringCategory, templateDetails } from "@/components/Editor/utils";
import { replacePlaceholders } from "@/placeholders";
import { Arr, Json, Obj } from "@brizy/readers";
import { BaseDCHandlerExtra, ConfigDCItem, DCPlaceholdersExtra } from "@builder/core/build/es/types/dynamicContent";
import { LeftSidebarMoreOptionsIds, LeftSidebarOptionsIds } from "@builder/core/build/es/types/leftSidebar";
import { AddMediaData, AddMediaExtra } from "@builder/core/build/es/types/media";
import {
  BlockWithThumbs,
  BlocksArray,
  CustomTemplatePage,
  DefaultBlockWithID,
  KitItem,
  KitsWithThumbs,
  LayoutsPages,
  LayoutsWithThumbs,
  Popup,
  StoryTemplate,
  Template,
} from "@builder/core/build/es/types/templates";
import { Dictionary } from "@builder/core/build/es/utils/types";
import { isT, mPipe, pass } from "fp-utilities";

const templates = "https://e-t-cloud.b-cdn.net/1.3.0";
const newTemplates = "https://template-mk.b-cdn.net/api";
const templatesImageUrl = "https://cloud-1de12d.b-cdn.net/media/iW=1024&iH=1024/";

export const getApi = () => ({
  collectionTypes: {
    loadCollectionTypes,
  },
  collectionItems: {
    getCollectionItemsIds,
  },
  media: {
    mediaResizeUrl: "https://cloud-1de12d.b-cdn.net/media",
    imagePatterns: {
      full: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}&{{ oX=[oX] }}&{{ oY=[oY] }}&{{ cW=[cW] }}&{{ cH=[cH] }}/{{ [uid] }}/{{ [fileName] }}",
      original: "{{ [baseUrl] }}/{{ [sizeType] }}/{{ [uid] }}/{{ [fileName] }}",
      split: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}/{{ [uid] }}/{{ [fileName] }}",
    },
    addMedia: {
      handler(res: Response<AddMediaData>, rej: Response<string>, extra: AddMediaExtra) {
        setTimeout(() => {
          res({
            uid: "1234",
            fileName: "my-custom-image.png",
          });
        }, 1000);
      },
    },
  },

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
    async getMeta(res: Response<StoryTemplate>, rej: Response<string>) {
      const storiesUrl = `${templates}/stories`;
      try {
        const meta: StoryTemplate = await fetch(`${storiesUrl}/meta.json`).then((r) => r.json());

        const data = {
          ...meta,
          stories: meta.stories.map((story) => ({
            ...story,
            thumbnailSrc: `${storiesUrl}/thumbs/${story.pages[0].id}.jpg`,
            pages: story.pages.map((page) => ({
              ...page,
              thumbnailSrc: `${storiesUrl}/thumbs/${page.id}.jpg`,
            })),
          })),
        };

        res(data);
      } catch (e) {
        rej("Failed to load meta.json");
      }
    },
    async getData(res: Response<Record<string, unknown>>, rej: Response<string>, id: string) {
      const storiesUrl = `${templates}/stories`;
      try {
        const data = await fetch(`${storiesUrl}/resolves/${id}.json`).then((r) => r.json());
        res(data);
      } catch (e) {
        rej("Failed to load resolves for selected DefaultTemplate");
      }
    },
  },
});

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
      LeftSidebarOptionsIds.cms,
      LeftSidebarOptionsIds.addElements,
      LeftSidebarOptionsIds.reorderBlock,
      LeftSidebarOptionsIds.globalStyle,
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
