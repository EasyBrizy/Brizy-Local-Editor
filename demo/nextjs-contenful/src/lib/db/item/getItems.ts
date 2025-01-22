"use server";

import { client } from "../contentful";
import { CollectionTypes, Item } from "../types";
import { toItemConvertor } from "./utils";

type ByCollectionType = {
  type: string;
  item?: string;
  search?: string;
};

type Query = ByCollectionType;

type Pagination = {
  limit: number;
  skip: number;
};

interface Data {
  items: Array<Item>;
  total: number;
}

export async function getItems(query: Query, pagination?: Pagination): Promise<Data> {
  let items;
  let total = 0;
  const { type, item, search } = query;

  const contentfulQuery =
    type === "all"
      ? {
          order: "-sys.createdAt",
        }
      : {
          ...(search && { "fields.slug[match]": search }),
          ...(item && { "fields.slug": item }),
          order: "sys.createdAt",
          content_type: type,
        };

  if (pagination) {
    const data = await client.entry.getMany({
      query: { ...pagination, ...contentfulQuery },
    });

    items = data.items;
    total = data.total;
  } else {
    const data = await client.entry.getMany({
      query: contentfulQuery,
    });
    items = data.items;
    total = data.total;
  }

  if (!items) {
    throw new Error("Failed to find items.");
  }

  return { items: items.map(toItemConvertor), total };
}

const pages = [CollectionTypes.page, CollectionTypes.blog];

export async function getAllPages(): Promise<Array<Item>> {
  const entries = await client.entry.getMany({});
  const items = entries.items.filter((item) => pages.includes(item.sys.contentType.sys.id as CollectionTypes));
  return items.map(toItemConvertor);
}
