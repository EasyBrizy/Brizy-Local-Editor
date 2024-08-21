"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";

interface Data {
  id: string;
  slug: {
    collection: string;
    item: string;
  };
  data?: string;
}

export async function newItem(data: Data): Promise<Item> {
  await DBConnect();
  const item = await Models.Items.create(data);

  if (!item) {
    throw new Error("Failed to create item");
  }

  return item.toObject();
}
