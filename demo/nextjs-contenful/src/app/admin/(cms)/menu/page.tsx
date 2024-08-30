import { Menu as MenuComponent } from "@/components/Menu";
import { TreeItems } from "@/components/Menu/types";
import { getMenu, updateMenu } from "@/lib/admin";
import { getAllPages } from "@/lib/db/item/getItems";
import React from "react";

async function getAllPagesAsMenuItems(): Promise<TreeItems> {
  const pages = await getAllPages();

  return pages.map((item) => {
    const name = `${item.slug.collection} / ${item.slug.item}`;
    return { id: crypto.randomUUID(), pageId: `${item._id}`, name, children: [] };
  });
}

export default async function Menu() {
  const items = await getMenu();
  const allItems = await getAllPagesAsMenuItems();

  return <MenuComponent allItems={allItems} items={items} updateMenu={updateMenu} getMenu={getMenu} />;
}
