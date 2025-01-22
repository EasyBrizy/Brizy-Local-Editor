import { Item } from "@/lib/db/types";
import { PageJsonOutput } from "@builder/core/build/es/types/common";

type _Item = Omit<Item, "data">;
export type ItemDataParsed = _Item & {
  data: {
    compiled?: PageJsonOutput;
  };
};

export function convertItem(item: Item): ItemDataParsed {
  const { data, ..._item } = item;
  const parsed = JSON.parse(data ?? "{}");
  return { ..._item, data: parsed };
}
