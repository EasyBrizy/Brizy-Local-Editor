import { Item } from "@/lib/db/types";
import { PageJsonCompiledOutput } from "@builder/core/build/es/types/common";

type _Item = Omit<Item, "data">;
export type ItemDataParsed = _Item & {
  data: {
    compiled?: PageJsonCompiledOutput;
  };
};

export function convertItem(item: Item): ItemDataParsed {
  const { data, ..._item } = item;
  const parsed = JSON.parse(data ?? "{}");
  return { ..._item, data: parsed };
}
