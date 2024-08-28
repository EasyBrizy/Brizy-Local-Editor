"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";
import { toItemConvertor } from "./utils";

type Query = {
  type: string;
  item?: string;
  search?: string;
};

type Pagination = {
  limit: number;
  skip: number;
};

interface Data {
  items: Array<Item>;
  total: number;
}

export async function getItems(query: Query, pagination?: Pagination): Promise<Data> {
  let items;
  const { type, item, search } = query;
  const dbQuery = {
    "slug.collection": type,
    ...(search ? { "slug.item": new RegExp(search, "i") } : { item }),
  };

  await DBConnect();

  if (pagination) {
    items = await Models.Items.find(dbQuery, {}, pagination)
      .limit(pagination.limit)
      .skip(pagination.skip)
      .lean<Array<Item>>();
  } else {
    items = await Models.Items.find(dbQuery).lean<Array<Item>>();
  }

  if (!items) {
    throw new Error("Failed to find items.");
  }

  const total = await Models.Items.countDocuments(dbQuery);

  return { items: items.map(toItemConvertor), total };
}

export async function getAllPages(): Promise<Array<Item>> {
  const items = await Models.Items.find({ "config.showInMenu": true }).lean<Array<Item>>();
  return items.map(toItemConvertor);
}
