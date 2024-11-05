import { Item } from "@/lib/db/types";
import { RJSON } from "@/utils/rjson";
import { FlattenMaps } from "mongoose";
import { Sort, SortBy } from "./getItems";

export const toItemConvertor = (item: FlattenMaps<any>): Item => ({
  id: item._id.toString(),
  title: item.title,
  slug: item.slug,
  config: item.config,
  data: item.data ? JSON.stringify(RJSON.unpack(JSON.parse(item.data))) : undefined,
});

export const toCollectionConvertor = (item: Partial<Item>): Partial<Item> => {
  return {
    ...item,
    ...(item.data !== undefined && {
      data: JSON.stringify(RJSON.pack(JSON.parse(item.data))),
    }),
  };
};

const VALID_SORT_BY: SortBy[] = ["date", "name", "id"];
const VALID_SORT: Sort[] = ["asc", "desc"];

function readValue<T>(value: unknown, validValues: T[]): T | undefined {
  return typeof value === "string" && validValues.includes(value as T) ? (value as T) : undefined;
}

export const readSortBy = (sortBy: unknown): SortBy | undefined => {
  return readValue(sortBy, VALID_SORT_BY);
};

export const readSort = (sort: unknown): Sort | undefined => {
  return readValue(sort, VALID_SORT);
};
