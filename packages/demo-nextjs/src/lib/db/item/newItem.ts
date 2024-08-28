"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";
import { toCollectionConvertor, toItemConvertor } from "./utils";

interface Data {
  id: string;
  slug: Item["slug"];
  data?: Item["data"];
  config?: Item["config"];
}

export async function newItem(data: Data): Promise<Item> {
  await DBConnect();
  const item = await Models.Items.create(toCollectionConvertor(data));

  if (!item) {
    throw new Error("Failed to create item");
  }

  return toItemConvertor(item.toObject());
}
