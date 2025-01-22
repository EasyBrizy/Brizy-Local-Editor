import { TreeItems } from "@/components/Menu/types";
import { getMenu } from "@/lib/admin";
import { demoMenu } from "@/lib/editorConfig/demoConfig";
import type { Menu, MenuItem } from "@builder/core/build/es/types/menu";

function convertToEditorMenu(items: TreeItems): MenuItem[] {
  return items.map((item) => {
    const children = item.children.length > 0 ? convertToEditorMenu(item.children) : null;

    return {
      type: "MenuItem",
      value: {
        // type assertion because typeof id in "MenuItem" interface and TreeItems differ
        id: item.id as string,
        title: item.slug,
        url: item.title,
        ...(children ? { items: children } : {}),
      },
    };
  });
}

export async function getMenuItems(): Promise<Menu> {
  try {
    const menu = convertToEditorMenu(await getMenu());

    return [...demoMenu, { id: "myMenuId", name: "First Menu", items: menu }];
  } catch (e) {
    console.log("Failed to get Menu: ", e);
    return [];
  }
}
