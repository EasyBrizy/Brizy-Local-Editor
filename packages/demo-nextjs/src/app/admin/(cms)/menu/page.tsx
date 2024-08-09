"use server";

import { Menu as MenuComponent } from "@/components/Menu";
import { TreeItems } from "@/components/Menu/types";
import { getAllPagesWithPreview, getMenu, updateMenu } from "@/lib/admin";
import React, { useId } from "react";

async function getAllPagesAsMenuItems(): Promise<TreeItems> {
  "use server";
  const menuItems = await getAllPagesWithPreview();
  return menuItems.map((item) => {
    // const id = useId();
    const name = `${item.slug.collection} / ${item.slug.item}`;
    return { id: crypto.randomUUID(), pageId: item._id, name, children: [] };
  });
}

async function getItems() {
  const menuItems = await getMenu().then((r) => JSON.parse(r));

  if (menuItems?.length > 0) {
    return menuItems;
  }
  return await getAllPagesAsMenuItems();
}

export default async function Menu() {
  return (
    <MenuComponent
      allItems={await getAllPagesAsMenuItems()}
      items={await getItems()}
      updateMenu={updateMenu}
      getMenu={getMenu}
    />
  );
}
