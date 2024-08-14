import { Categories, Page } from "@builder/core/build/es/types/templates";

export function numCategoryToStringCategory({
  cat,
  dict,
}: {
  cat: Array<number>;
  dict: Array<{ id: number; title: string }>;
}) {
  return cat.reduce((acc: Array<string>, catId) => {
    const category = dict.filter(({ id }: { id: number }) => id === catId);

    if (!category.length) {
      return acc;
    }
    return [...acc, category[0].title.toLowerCase()];
  }, []);
}

export function asNewCategory(oldCat: Array<Categories>): Array<Categories> {
  const spaceRegex = /\s\/?\s?/g;

  return oldCat
    .filter(({ id }) => id !== 0)
    .map(({ title }) => ({
      title,
      slug: title.replace(spaceRegex, "-"),
      id: title.toLowerCase(),
    }));
}

export function templateDetails(
  pages: Array<Page>,
): { thumbnailHeight: number; thumbnailWidth: number; pagesCount: number } | undefined {
  const count = pages.length;
  if (!count) {
    return;
  }

  return {
    pagesCount: count,
    thumbnailHeight: pages[0].thumbnailHeight,
    thumbnailWidth: pages[0].thumbnailWidth,
  };
}
