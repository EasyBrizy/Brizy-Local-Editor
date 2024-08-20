import { Menu as MenuComponent } from "@/components/Menu";
import { TreeItems } from "@/components/Menu/types";
import { getAllPagesWithPreview, getMenu, updateMenu } from "@/lib/admin";
import React from "react";

async function getAllPagesAsMenuItems(): Promise<TreeItems> {
  const menuItems = await getAllPagesWithPreview();
  return menuItems.map((item) => {
    const name = `${item.slug.collection} / ${item.slug.item}`;
    return { id: crypto.randomUUID(), pageId: item.id, name, children: [] };
  });
}

async function getItems() {
  const menuItems = await getMenu().then((r) => JSON.parse(r));
  if (menuItems?.length > 0) {
    return menuItems;
  }
  return [];
}

export default async function Menu() {
  const items = await getItems();
  const allItems = await getAllPagesAsMenuItems();

  return <MenuComponent allItems={allItems} items={items} updateMenu={updateMenu} getMenu={getMenu} />;
}
