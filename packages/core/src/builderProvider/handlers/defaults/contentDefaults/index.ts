import { Obj } from "@brizy/readers";

type ElementConfig = Array<Record<string, unknown>> | Record<string, unknown> | unknown;
type ContentDefaults = Record<string, ElementConfig>;

const defaultData = {
  Column: [
    {
      type: "Column",
      value: {
        _styles: ["column"],
        items: [],
      },
    },
    {
      type: "Column",
      value: {
        _styles: ["column"],
        items: [],
      },
    },
  ],
  Row: {
    items: [
      {
        type: "Column",
        value: {
          _styles: ["column"],
          items: [],
        },
      },
      {
        type: "Column",
        value: {
          _styles: ["column"],
          items: [],
        },
      },
    ],
  },
};

export const getContentDefaults = (configData: Record<string, unknown>): ContentDefaults => {
  const { contentDefaults } = configData;

  if (Obj.isObject(contentDefaults)) {
    return contentDefaults;
  }

  return defaultData;
};
