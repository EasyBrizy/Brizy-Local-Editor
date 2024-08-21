import { CollectionTypes } from "@/constants/EntityType";
import { Response } from "../../types";

interface CollectionItem {
  title: string;
  value: string;
}

export const loadCollectionTypes = {
  async handler(res: Response<CollectionItem[]>) {
    const collections = [
      {
        title: "Auto",
        value: "auto",
      },
      ...CollectionTypes,
    ];

    res(collections);
  },
};
