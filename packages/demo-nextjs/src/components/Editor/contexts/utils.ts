import { getCollectionItemsIds } from "@/api/collections/collectionItems/getCollectionItemsIds";
import { loadCollectionTypes } from "@/api/collections/collectionTypes/loadCollectionTypes";
import { Response } from "@/api/types";
import { ConfigWithReference } from "@/components/Editor/contexts/types";
import { asNewCategory, numCategoryToStringCategory, templateDetails } from "@/components/Editor/utils";
import { replacePlaceholders } from "@/placeholders";
import { pipe } from "@brizy/readers";
import { BaseDCHandlerExtra, ConfigDCItem, DCPlaceholdersExtra } from "@builder/core/build/es/types/dynamicContent";
import { LeftSidebarMoreOptionsIds, LeftSidebarOptionsIds } from "@builder/core/build/es/types/leftSidebar";
import { AddMediaData, AddMediaExtra } from "@builder/core/build/es/types/media";
import {
  APIPopup,
  BlockWithThumbs,
  Categories,
  Kit,
  KitItem,
  KitType,
  Kits,
  KitsWithThumbs,
  Popup,
  StoryTemplate,
  Template,
} from "@builder/core/build/es/types/templates";
import { Dictionary } from "@builder/core/build/es/utils/types";
import { flatten, uniq, upperFirst } from "lodash";

const templates = "https://e-t-cloud.b-cdn.net/1.3.0";
const templatesImageUrl = "https://cloud-1de12d.b-cdn.net/media/iW=1024&iH=1024/";

type CatTypes = Kit | APIPopup;

export const getUniqueKitCategories = (collections: CatTypes[]): Categories[] =>
  pipe(
    (collections: CatTypes[]) => collections.map((collection: CatTypes) => collection.categories),
    (categories) => categories.map((category) => category.split(",")),
    flatten,
    (categories2) => categories2.map((category2) => category2.trim()),
    uniq,
    (allCats) => allCats.filter((cat) => cat && cat.length),
    (cats) =>
      cats.map((cat) => ({
        title: upperFirst(cat),
        slug: cat,
        id: cat,
      })),
  )(collections);

export const converterKit = (
  kit: Kit[],
  url: string,
  kitId: string,
): {
  blocks: BlockWithThumbs[];
  categories: Categories[];
  types: KitType[];
} => {
  const categories = getUniqueKitCategories(kit);
  const types = getUniqueKitTypes(kit);

  const blocks: BlockWithThumbs[] = kit.map(
    ({ slug, categories, pro, thumbnail, keywords, thumbnailWidth, thumbnailHeight, blank, theme }) => ({
      id: slug,
      cat: categories.split(",").map((item) => item.trim().toLowerCase()),
      title: slug,
      type: theme
        .split(",")
        .map((item) => item.trim())
        .map((i1) => i1.toLowerCase()),
      keywords: keywords ?? "",
      thumbnailHeight,
      thumbnailWidth,
      thumbnailSrc: `${url}${thumbnail}`,
      pro: pro === PRO,
      kitId,
      blank,
    }),
  );

  return {
    blocks,
    categories,
    types,
  };
};

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
        const kits = await fetch("https://template-mk.b-cdn.net/api/get-kits");

        if (kits) {
          const res = await kits.json();

          const parsedKits = res.collections.map((item: { slug: string; title: string }) => ({
            ...item,
            id: item.slug,
          }));

          res(parsedKits);
        }

        throw new Error("Failed to load kits");

        // res(kits);
      } catch (e) {
        rej("Failed to load Kits");
      }
    },
    // async getKits(res: Response<Array<KitItem>>, rej: Response<string>) {
    //   try {
    //     const kits = await fetch(`${templates}/kits/meta.json`)
    //       .then((r) => r.json())
    //       .then((data) =>
    //         data.map((kit: { id: string; name: string }) => ({
    //           id: kit.id,
    //           title: kit.name,
    //         })),
    //       );
    //
    //     res(kits);
    //   } catch (e) {
    //     rej("Failed to load Kits");
    //   }
    // },
    async getMeta(res: Response<KitsWithThumbs>, rej: Response<string>, kit: KitItem) {
      try {
        // const data = await getDefaultKits(blocksChunkUrl, kit.id);

        const response = await fetch(
          `https://template-mk.b-cdn.net/api/get-kit-collections-chunk?project_id=${kit.id}`,
        );

        if (response) {
          const res = await response.json();

          // return {
          //   blocks: res.collections,
          //   categories: res.categories,
          //   styles: res.styles,
          // };

          const { types, blocks } = converterKit(res.collections, templatesImageUrl, kit.id);

          res({
            id: kit.id,
            blocks,
            categories: convertToCategories(res.categories),
            types,
            name: kit.title,
            styles: [res.styles],
          });
        }

        throw new Error(t("Failed to load kits"));
      } catch (e) {
        rej("Failed to load meta.json");
      }
    },
    async getMeta(res: Response<KitsWithThumbs>, rej: Response<string>, kit: KitItem) {
      try {
        const kitsUrl = `${templates}/kits`;
        const kits = await fetch(`${kitsUrl}/meta.json`).then((r) => r.json());

        const _kit = kits.find((item: Kits) => item.id === kit.id);

        enum Theme {
          light = 0,
          dark = 1,
        }

        const blocks = _kit?.blocks.map(
          ({ id, cat, pro, title, keywords, thumbnailWidth, thumbnailHeight, type, blank }: BlockWithThumbs) => ({
            id,
            cat: numCategoryToStringCategory({ cat, dict: _kit.categories }),
            title,
            type: [Theme[type]],
            keywords,
            thumbnailHeight,
            thumbnailWidth,
            thumbnailSrc: `${templates}/kits/thumbs/${id}.jpg`,
            pro: pro ?? false,
            kitId: kit.id,
            blank,
          }),
        );

        res({
          id: kit.id,
          blocks,
          categories: asNewCategory(_kit.categories),
          types: _kit.types as KitType[],
          name: kit.title,
          styles: _kit.styles,
        });
      } catch (e) {
        rej("Failed to load meta.json");
      }
    },
    async getData(res: Response<Record<string, unknown>>, rej: Response<string>, kit: KitItem) {
      const kitsUrl = `${templates}/kits`;
      try {
        const data = await fetch(`${kitsUrl}/resolves/${kit.id}.json`).then((r) => r.json());
        res(data);
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
