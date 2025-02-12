import { BasePlaceholder } from "../BasePlaceholder"
import { BaseContext } from "../BaseContext"
import { isMenuData, readMenuItemId } from "./utils"

interface MenuItem {
  type: string
  value: {
    id: string
    title: string
    url: string
    target?: string
    items?: Array<MenuItem>
  }
}

export interface Menu {
  id: string
  name: string
  items: Array<MenuItem>
}

export class MenuBasePlaceholder extends BasePlaceholder {
  protected getMenuItems(
    context: BaseContext,
    parentMenuId?: string,
  ): MenuItem[] {
    const { menuData: _menuData, menuId: _menuId } = context.getAttributes()
    const menuId = parentMenuId ?? String(_menuId)
    const menuData = isMenuData(_menuData) ? _menuData : []
    return menuData.find((menu) => menu.id === menuId)?.items || []
  }

  protected async getMenuItemChildren(context: BaseContext, menuId?: string) {
    const { menuItem } = context.getAttributes()

    const menuItemId = readMenuItemId(menuItem)
    const menuItems = this.getMenuItems(context, menuId)
    const item = this.findItemsById(menuItems, menuItemId)

    return item?.items || []
  }

  private findItemsById(
    array: MenuItem[],
    id: string,
  ): MenuItem["value"] | null {
    for (const item of array) {
      if (item.value.id === id) {
        return item.value
      }

      if (item.value.items && item.value.items.length > 0) {
        const found = this.findItemsById(item.value.items, id)
        if (found !== null) {
          return found
        }
      }
    }

    return null
  }
}
