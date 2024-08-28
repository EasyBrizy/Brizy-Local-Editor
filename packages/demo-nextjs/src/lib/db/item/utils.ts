import { Item } from "@/lib/db/types";
import { RJSON } from "@/utils/rjson";

export const toItemConvertor = (item: Item): Item => ({
  id: item.id,
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
