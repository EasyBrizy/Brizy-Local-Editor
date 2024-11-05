"use server";

import DBConnect from "../mongoose/connect";
import Models from "../mongoose/models";
import { Item } from "../types";
import { toItemConvertor } from "./utils";

type ByCollectionType = {
  type: string;
  item?: string;
  search?: string;
  reference?: string;
  include?: string[];
  exclude?: string[];
};

type AllCollections = {
  type: "all";
};

type Query = ByCollectionType | AllCollections;

export type SortBy = "date" | "name" | "id";
export type Sort = "asc" | "desc";

type Pagination = {
  limit: number;
  skip: number;
  sortBy?: SortBy;
  sort?: Sort;
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
        ...(query.reference ? { "config.reference": new RegExp(query.reference) } : {}),
        ...(query.include || query.exclude
          ? {
              _id: {
                ...(query.include ? { $in: query.include } : {}),
                ...(query.exclude ? { $nin: query.exclude } : {}),
              },
            }
          : {}),
      };

  await DBConnect();

  const sortOptions: SortOptions = {};

  if (pagination?.sortBy) {
    const sortKey = pagination.sortBy === "date" ? "createdAt" : pagination.sortBy === "name" ? "slug.item" : "_id";
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

export async function getItemsByIds(ids: string[]): Promise<Array<Item>> {
  const items = await Models.Items.find({ _id: { $in: ids } }).lean<Array<Item>>();
  return items.map(toItemConvertor);
}
