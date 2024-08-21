"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";

type Query = Record<string, string | RegExp | boolean>;

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

  await DBConnect();

  if (pagination) {
    items = await Models.Items.find(query, {}, pagination)
      .limit(pagination.limit)
      .skip(pagination.skip)
      .lean<Array<Item>>();
  } else {
    items = await Models.Items.find(query).lean<Array<Item>>();
  }

  if (!items) {
    throw new Error("Failed to find items.");
  }

  const total = await Models.Items.countDocuments(query);

  return { items, total };
}
