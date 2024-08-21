"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";

interface Data {
  id: string;
  slug?: {
    collection: string;
    item: string;
  };
  data?: string;
}

export async function updateItem(id: string, data: Data): Promise<Array<Item>> {
  await DBConnect();
  const item = await Models.Items.findOneAndUpdate({ _id: id }, data, {
    new: true,
    upsert: true,
  }).lean<Array<Item>>();

  if (!item) {
    throw new Error("No item found");
  }

  return item;
}
