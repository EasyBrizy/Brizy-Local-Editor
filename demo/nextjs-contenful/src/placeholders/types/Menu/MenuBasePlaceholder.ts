import { getMenuItems } from "@/lib/itemConfig/getMenuItems";
import { MenuItem } from "@builder/core/build/es/types/menu";
import { BasePlaceholder } from "../BasePlaceholder";

export class MenuBasePlaceholder extends BasePlaceholder {
  protected async getMenuItems(menuId: string) {
    const menus = await getMenuItems();
    return menus.find((menu) => menu.id === menuId)?.items || [];
  }

  protected async getMenuItemChildren(menuId: string, itemId: string) {
    const menuItems = await this.getMenuItems(menuId);
    const item = this.findItemsById(menuItems, itemId);
    return item?.items || [];
  }

  private findItemsById(array: MenuItem[], id: string): MenuItem["value"] | null {
    for (const item of array) {
      if (item.value.id === id) {
        return item.value;
      }

      if (item.value.items && item.value.items.length > 0) {
        const found = this.findItemsById(item.value.items, id);
        if (found !== null) {
          return found;
        }
      }
    }

    return null;
  }
}
