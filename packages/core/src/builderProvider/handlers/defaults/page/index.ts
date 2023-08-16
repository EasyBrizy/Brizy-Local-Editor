import { mergeDeep } from "timm";

const defaultPageData = {
  id: "1",
  title: "",
  slug: "",
  status: "draft",
  data: {
    items: [],
  },
  dataVersion: 0,
  collectionType: {
    id: "1",
    title: "Pages",
  },
  fields: [],
};

export const getPage = (page: Record<string, unknown>): Record<string, unknown> => {
  return mergeDeep(defaultPageData, page) as Record<string, unknown>;
};
