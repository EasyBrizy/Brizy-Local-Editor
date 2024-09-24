import { pipe } from "@brizy/readers";
import { APIPopup, BlockWithThumbs, Categories, Kit, KitType } from "@builder/core/build/es/types/templates";
import { flatten, uniq, upperFirst } from "lodash";

type CatTypes = Kit | APIPopup;
const PRO = "PRO";

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

export const getUniqueKitTypes = (collections: Kit[]): KitType[] =>
  pipe(
    (collections: Kit[]) => collections.map((collection) => collection.theme),
    (types) => types.map((type) => type.split(",")),
    flatten,
    (types2) => types2.map((type2) => type2.toLowerCase()),
    uniq,
    (allTypes) => allTypes.filter((type) => type && type.length),
    (uni) =>
      uni.map((u) => ({
        title: upperFirst(u),
        id: u,
        name: u,
        icon: u === "light" ? "nc-light" : "nc-dark",
      })),
  )(collections);

export const convertToCategories = (obj: { slug: string; title: string }[]): Categories[] =>
  obj.map((item) => ({
    ...item,
    id: item.title.toLowerCase(),
  }));

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
