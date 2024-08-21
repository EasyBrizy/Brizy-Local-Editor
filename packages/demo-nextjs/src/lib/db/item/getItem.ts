"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";

type Query = Record<string, string | RegExp | boolean>;

export async function getItem(query: Query): Promise<Item> {
  await DBConnect();
  const item = await Models.Items.findOne(query).lean<Item>();

  if (!item) {
    throw new Error(`Failed to get item, ${JSON.stringify(query)}`);
  }

  return item;
}
