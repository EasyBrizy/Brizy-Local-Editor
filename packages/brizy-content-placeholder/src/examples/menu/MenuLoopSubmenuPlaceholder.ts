import { MenuBasePlaceholder } from "./MenuBasePlaceholder"
import { ContextInterface } from "../../modules/ContextInterface"
import { ContentPlaceholder } from "../../modules/ContentPlaceholder"
import { BaseContext, isBaseContext } from "../BaseContext"
import { readMenuItemId } from "./utils"

export class MenuLoopSubmenuPlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MenuLoopSubmenu Placeholder", "menu_loop_submenu")
  }

  async getValue(
    context: ContextInterface,
    placeholder: ContentPlaceholder,
  ): Promise<string> {
    if (isBaseContext(context)) {
      const { menuItem, menuId: _menuId } = context.getAttributes()

      const menuId = String(_menuId)
      const menuItemId = readMenuItemId(menuItem)

      if (!menuId || !menuItemId) {
        return ""
      }

      const menuItemItems = await this.getMenuItemChildren(context)
      const content = placeholder.getContent() ?? ""
      if (menuItemItems.length && !this.hasMegaMenu(context, menuItemId)) {
        return (
          (await this.getReplacer()?.replacePlaceholders(content, context)) ??
          ""
        )
      }
    }

    return ""
  }

  private hasMegaMenu(context: BaseContext, menuItemId: string): boolean {
    const placeholder = context.searchPlaceholderByNameAndAttr(
      "mega_menu_value",
      "itemId",
      menuItemId,
    )
    if (placeholder) {
      return placeholder.getContent() !== ""
    }
    return false
  }
}
