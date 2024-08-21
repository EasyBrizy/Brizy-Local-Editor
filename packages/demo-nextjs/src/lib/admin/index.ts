"use server";

import { TreeItems } from "@/components/Menu/types";
import { getItem } from "@/lib/db/item/getItem";
import { getItems } from "@/lib/db/item/getItems";
import { updateItem } from "@/lib/db/item/updateItem";
import { CollectionTypes } from "@/lib/db/types";

enum Menu {
  main = "main",
}

const query = {
  "slug.collection": CollectionTypes.menu,
  "slug.item": Menu.main,
};

export async function getAllPagesWithPreview() {
  return await getItems({ "config.showInMenu": true });
}

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
  try {
    const item = await getItem(query);
    const data = {
      id: item._id,
      data: JSON.stringify(menu),
    };
    await updateItem(item._id, data);
  } catch (e) {
    console.log("Update menu error: ", e);
  }
}
