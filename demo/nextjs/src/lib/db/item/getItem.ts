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

type ByReference = {
  reference: string;
  type: string;
};

type Query = ById | ByItem | ByReference;

const isById = (q: Query): q is ById => "id" in q;

const isByReference = (q: Query): q is ByReference => "reference" in q;

export async function getItem(query: Query): Promise<Item> {
  await DBConnect();

  if (isById(query)) {
    const item = await Models.Items.findById(query.id).lean();

    if (!item) {
      throw new Error(`Failed to get item, ${JSON.stringify(query)}`);
    }

    return toItemConvertor(item);
  }

  if (isByReference(query)) {
    const item = await Models.Items.findOne({
      "slug.collection": query.type,
      "config.reference": new RegExp(query.reference),
    }).lean();

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
