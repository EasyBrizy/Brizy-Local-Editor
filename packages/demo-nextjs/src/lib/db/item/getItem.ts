"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
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
  await DBConnect();

  if (isById(query)) {
    const item = await Models.Items.findById(query.id).lean();

    if (!item) {
      throw new Error(`Failed to get item, ${JSON.stringify(query)}`);
    }

    return toItemConvertor(item);
  }

  const item = await Models.Items.findOne({
    "slug.collection": query.type,
    "slug.item": query.item,
  }).lean();

  if (!item) {
    throw new Error(`Failed to get item, ${JSON.stringify(query)}`);
  }

  return toItemConvertor(item);
}
