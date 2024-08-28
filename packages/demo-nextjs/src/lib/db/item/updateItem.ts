"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";
import { toCollectionConvertor, toItemConvertor } from "./utils";

interface Data {
  id: string;
  slug?: Item["slug"];
  data?: Item["data"];
}

export async function updateItem(id: string, data: Data): Promise<Item> {
  await DBConnect();

  const item = await Models.Items.findOneAndUpdate({ _id: id }, toCollectionConvertor(data), {
    new: true,
    upsert: true,
  }).lean<Item>();

  if (!item) {
    throw new Error("No item found");
  }

  return toItemConvertor(item);
}
