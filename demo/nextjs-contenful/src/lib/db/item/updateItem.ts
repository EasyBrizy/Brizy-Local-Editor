"use server";

import { client } from "../contentful";
import { Item } from "../types";
import { lang, toCollectionConvertor, toItemConvertor } from "./utils";

interface Data {
  id: string;
  slug?: {
    collection: string;
    item: string;
  };
  data?: string;
}

export async function updateItem(id: string, data: Data): Promise<Item> {
  const entry = await client.entry.get({ entryId: id });
  const collection = toCollectionConvertor(data);
  const item = await client.entry.update(
    {
      entryId: id,
    },
    {
      fields: { ...entry.fields, ...collection.fields },
      sys: entry.sys,
    },
  );

  if (!item) {
    throw new Error("No item found");
  }

  return toItemConvertor(item);
}
