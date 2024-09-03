"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";
import { toItemConvertor } from "./utils";

type ByCollectionType = {
  type: string;
  item?: string;
  search?: string;
};

type AllCollections = {
  type: "all";
};

type Query = ByCollectionType | AllCollections;

type Pagination = {
  limit: number;
  skip: number;
  sortBy?: "date" | "name";
  sort?: "desc" | "asc";
};

interface Data {
  items: Array<Item>;
  total: number;
}

interface SortOptions {
  [key: string]: -1 | 1;
}

const isAllCollections = (q: Query): q is AllCollections => q.type === "all";

export async function getItems(query: Query, pagination?: Pagination): Promise<Data> {
  let items;
  const { type } = query;

  const dbQuery = isAllCollections(query)
    ? {}
    : {
        "slug.collection": type,
        ...(query.search ? { "slug.item": new RegExp(query.search, "i") } : { item: query.item }),
      };

  await DBConnect();

  const sortOptions: SortOptions = {};

  if (pagination?.sortBy) {
    const sortKey = pagination.sortBy === "date" ? "createdAt" : "slug.item";
    sortOptions[sortKey] = pagination.sort === "desc" ? -1 : 1;
  }

  if (pagination) {
    items = await Models.Items.find(dbQuery, {}, pagination)
      .sort(sortOptions)
      .limit(pagination.limit)
      .skip(pagination.skip)
      .lean<Array<Item>>();
  } else {
    items = await Models.Items.find(dbQuery).lean();
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
