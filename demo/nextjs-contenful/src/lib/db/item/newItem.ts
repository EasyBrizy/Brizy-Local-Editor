"use server";

import { client } from "../contentful";
import { Item } from "../types";
import { toCollectionConvertor, toItemConvertor } from "./utils";

interface Data {
  id: string;
  slug: Item["slug"];
  title: string;
  data?: Item["data"];
  config?: Item["config"];
}

export async function newItem(data: Data): Promise<Item> {
  const item = await client.entry.create({ contentTypeId: data.slug.collection }, toCollectionConvertor(data));

  if (!item) {
    throw new Error("Failed to create item");
  }

  return toItemConvertor(item);
}
