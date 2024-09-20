import { getCollectionItemsIds } from "@/api/collections/collectionItems/getCollectionItemsIds";
import { loadCollectionTypes } from "@/api/collections/collectionTypes/loadCollectionTypes";
import { Response } from "@/api/types";
import { convertToCategories, converterKit } from "@/components/Editor/contexts/converters";
import { ConfigWithReference } from "@/components/Editor/contexts/types";
import { asNewCategory, numCategoryToStringCategory, templateDetails } from "@/components/Editor/utils";
import { replacePlaceholders } from "@/placeholders";
import { BaseDCHandlerExtra, ConfigDCItem, DCPlaceholdersExtra } from "@builder/core/build/es/types/dynamicContent";
import { LeftSidebarMoreOptionsIds, LeftSidebarOptionsIds } from "@builder/core/build/es/types/leftSidebar";
import { AddMediaData, AddMediaExtra } from "@builder/core/build/es/types/media";
import {
  BlockWithThumbs,
  KitItem,
  KitsWithThumbs,
  Popup,
  StoryTemplate,
  Template,
} from "@builder/core/build/es/types/templates";
import { Dictionary } from "@builder/core/build/es/utils/types";

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
      const popupsUrl = `${templates}/popups`;

      try {
        const meta: Popup = await fetch(`${popupsUrl}/meta.json`).then((r) => r.json());

        const data = {
          ...meta,
          blocks: meta.blocks.map((item) => ({
            ...item,
            thumbnailSrc: `${popupsUrl}/thumbs/${item.id}.jpg`,
          })),
        };

        res(data);
      } catch (e) {
        rej("Failed to load meta.json");
      }
    },
    async getData(res: Response<Record<string, unknown>>, rej: Response<string>, kit: KitItem) {
      const popupsUrl = `${templates}/popups`;
      try {
        const data = await fetch(`${popupsUrl}/resolves/${kit.id}.json`).then((r) => r.json());
        res(data);
      } catch (e) {
        rej("Failed to load resolves for selected DefaultTemplate");
      }
    },
  },
  defaultLayouts: {
    async getMeta(res: Response<Template>, rej: Response<string>) {
      const layoutsUrl = `${templates}/layouts`;
      try {
        const meta: Template = await fetch(`${layoutsUrl}/meta.json`).then((r) => r.json());

        const data = {
          categories: asNewCategory(meta.categories),
          templates: meta.templates.map((item) => ({
            ...item,
            cat: numCategoryToStringCategory({
              cat: item.cat as unknown as number[],
              dict: meta.categories,
            }) as unknown as Symbol[],
            thumbnailSrc: `${layoutsUrl}/thumbs/${item.pages[0].id}.jpg`,
            ...(templateDetails(item.pages) ?? {}),
            pages: item.pages.map((page) => ({
              ...page,
              thumbnailSrc: `${layoutsUrl}/thumbs/${page.id}.jpg`,
            })),
          })),
        };

        res(data);
      } catch (e) {
        rej("Failed to load meta.json");
      }
    },
    async getData(res: Response<Record<string, unknown>>, rej: Response<string>, { id }: { id: string }) {
      const layoutsUrl = `${templates}/layouts`;
      try {
        const data = await fetch(`${layoutsUrl}/resolves/${id}.json`).then((r) => r.json());

        res(data);
      } catch (e) {
        rej("Failed to load resolves for selected DefaultTemplate");
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
