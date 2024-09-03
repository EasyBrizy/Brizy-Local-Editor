"use server";

import { TreeItems } from "@/components/Menu/types";
import { getItem } from "@/lib/db/item/getItem";
import { updateItem } from "@/lib/db/item/updateItem";
import { CollectionTypes } from "@/lib/db/types";

enum Menu {
  main = "main",
}

const query = {
  type: CollectionTypes.menu,
  item: Menu.main,
};

export async function getMenu(): Promise<TreeItems> {
  try {
    const item = await getItem(query);

    if (!item.data) {
      return [];
    }

    return JSON.parse(item.data);
  } catch (e) {
    console.log("Get Menu Error: ", e);
    return [];
  }
}

export async function updateMenu(menu: TreeItems) {
  const item = await getItem(query);
  const data = {
    id: item.id,
    data: JSON.stringify(menu),
  };
  return await updateItem(item.id, data);
}
