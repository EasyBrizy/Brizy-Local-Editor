import { Menu as MenuComponent } from "@/components/Menu";
import { TreeItems } from "@/components/Menu/types";
import { getAllPagesWithPreview, getMenu, updateMenu } from "@/lib/admin";
import React from "react";

async function getAllPagesAsMenuItems(): Promise<TreeItems> {
  const { items } = await getAllPagesWithPreview();

  return items.map((item) => {
    const name = `${item.slug.collection} / ${item.slug.item}`;
    return { id: crypto.randomUUID(), pageId: `${item._id}`, name, children: [] };
  });
}

export default async function Menu() {
  const items = await getMenu();
  const allItems = await getAllPagesAsMenuItems();

  return <MenuComponent allItems={allItems} items={items} updateMenu={updateMenu} getMenu={getMenu} />;
}
