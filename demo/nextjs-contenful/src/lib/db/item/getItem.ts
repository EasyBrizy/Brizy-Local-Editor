"use server";

import { client } from "../contentful";
import { Item } from "../types";
import { toItemConvertor } from "./utils";

type ById = {
  id: string;
};

type ByItem = {
  type: string;
  item: string;
};

type Query = ById | ByItem;

const isById = (q: Query): q is ById => "id" in q;

export async function getItem(query: Query): Promise<Item> {
  if (isById(query)) {
    const data = await client.entry.get({ entryId: query.id });
    return toItemConvertor(data);
  }

  const { item, type } = query;
  const data = await client.entry.getMany({
    query: {
      "fields.slug": item,
      content_type: type,
    },
  });

  if (data.items.length === 0) {
    throw new Error(`Missing entry with item: ${item}`);
  }

  return toItemConvertor(data.items[0]);
}
