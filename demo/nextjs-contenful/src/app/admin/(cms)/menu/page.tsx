import { Menu as MenuComponent } from "@/components/Menu";
import { TreeItems } from "@/components/Menu/types";
import { getMenu, updateMenu } from "@/lib/admin";
import { getAllPages } from "@/lib/db/item/getItems";
import React from "react";

async function getAllPagesAsMenuItems(): Promise<TreeItems> {
  const pages = await getAllPages();

  return pages.map((item) => {
    const { collection, item: pageSlug } = item.slug;

    const name = `${collection} / ${pageSlug}`;
    const title = `${collection} / ${pageSlug}`;
    const slug = pageSlug[0].toUpperCase() + pageSlug.slice(1);
    const url = collection === "page" ? `/${pageSlug}` : `/${collection}/${pageSlug}`;

    return { id: crypto.randomUUID(), pageId: `${item._id}`, name, title, url, slug, children: [] };
  });
}

export default async function Menu() {
  const items = await getMenu();
  const allItems = await getAllPagesAsMenuItems();

  return <MenuComponent allItems={allItems} items={items} updateMenu={updateMenu} getMenu={getMenu} />;
}
