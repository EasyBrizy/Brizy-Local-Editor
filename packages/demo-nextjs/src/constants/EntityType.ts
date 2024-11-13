export const BRZ_CURRENT_CONTEXT = "brz_current_context";

export enum EntityType {
  PAGE = "page",
  BLOG = "blog",
  PRODUCT = "product",
}

export const CollectionTypes = [
  {
    title: "Pages",
    value: EntityType.PAGE,
  },
  {
    title: "Blogs",
    value: EntityType.BLOG,
  },
  {
    title: "Products",
    value: EntityType.PRODUCT,
  },
];
