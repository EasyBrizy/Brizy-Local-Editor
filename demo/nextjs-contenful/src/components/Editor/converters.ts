import { Obj, Str } from "@brizy/readers";
import {
  APIPopup,
  Categories,
  DefaultBlock,
  DefaultBlockWithID,
  KitDataItems,
  PopupBlockWithThumbs,
  PopupDataResult,
} from "@builder/core/build/es/types/templates";

const PRO = "PRO";

export const converterPopup = (
  kit: APIPopup[],
  url: string,
): {
  blocks: PopupBlockWithThumbs[];
} => {
  const blocks: PopupBlockWithThumbs[] = kit.map(
    ({ id, title, categories, pro, thumbnail, thumbnailWidth, thumbnailHeight, blank }) => ({
      id,
      cat: categories.split(",").map((item) => item.trim().toLowerCase()),
      title,
      thumbnailHeight,
      thumbnailWidth,
      thumbnailSrc: `${url}${thumbnail}`,
      pro: pro === PRO,
      keywords: "popup2",
      position: 1,
      type: ["light"],
      blank,
    }),
  );

  return {
    blocks,
  };
};

export const convertToCategories = (obj: { slug: string; title: string }[]): Categories[] =>
  obj.map((item) => ({
    ...item,
    id: item.title.toLowerCase(),
  }));

export const isPopupDataResult = (obj: unknown): obj is PopupDataResult =>
  Array.isArray(obj) &&
  obj.every((item) => Obj.isObject(item) && Obj.hasKey("pageData", item) && Str.is(item.pageData));

export const isDefaultBlock = (obj: unknown): obj is DefaultBlock =>
  Obj.isObject(obj) &&
  Obj.hasKey("type", obj) &&
  Str.is(obj.type) &&
  Obj.hasKey("value", obj) &&
  Obj.isObject(obj.value);

export const isKitDataItems = (obj: unknown): obj is KitDataItems =>
  Obj.isObject(obj) &&
  Obj.hasKey("items", obj) &&
  Array.isArray(obj.items) &&
  obj.items.every((item) => isDefaultBlock(item));

export const isDefaultBlockWithID = (obj: unknown): obj is DefaultBlockWithID =>
  Obj.isObject(obj) && Obj.hasKey("blockId", obj) && isDefaultBlock(obj);
