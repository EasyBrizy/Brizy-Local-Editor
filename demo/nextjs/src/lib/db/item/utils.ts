import { Item } from "@/lib/db/types";
import { RJSON } from "@/utils/rjson";
import { FlattenMaps } from "mongoose";

export const toItemConvertor = (item: FlattenMaps<any>): Item => ({
  id: item._id,
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
