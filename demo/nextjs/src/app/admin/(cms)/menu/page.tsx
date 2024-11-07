import { Menu as MenuComponent } from "@/components/Menu";
import { TreeItems } from "@/components/Menu/types";
import { getMenu, updateMenu } from "@/lib/admin";
import { getAllPages } from "@/lib/db/item/getItems";
import { CollectionTypes } from "@/lib/db/types";
import React from "react";

async function getAllPagesAsMenuItems(): Promise<TreeItems> {
  const items = await getAllPages();

  return items.map((item) => {
    const { collection, item: pageSlug } = item.slug;

    const title = `${collection} / ${pageSlug}`;
    const slug = pageSlug[0].toUpperCase() + pageSlug.slice(1);
    const url = collection === CollectionTypes.page ? `/${pageSlug}` : `/${collection}/${pageSlug}`;

    return { id: crypto.randomUUID(), pageId: `${item.id}`, title, url, slug, children: [] };
  });
}

export default async function Menu() {
  const items = await getMenu();
  const allItems = await getAllPagesAsMenuItems();

  return <MenuComponent allItems={allItems} items={items} updateMenu={updateMenu} getMenu={getMenu} />;
}
