import { MenuBasePlaceholder } from "./MenuBasePlaceholder"
import { ContextInterface } from "../../modules/ContextInterface"
import { ContentPlaceholder } from "../../modules/ContentPlaceholder"
import { BaseContext, isBaseContext } from "../BaseContext"
import { readMenuItemId } from "./utils"

export class MenuLoopPlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MenuLoop Placeholder", "menu_loop")
  }

  async getValue(
    context: ContextInterface,
    placeholder: ContentPlaceholder,
  ): Promise<string> {
    const { recursive } = placeholder.getAttributes() ?? {}

    if (isBaseContext(context)) {
      const { menuId } = context.getAttributes()
      const _menuId = String(menuId)

      if (recursive) {
        const placeholder = context.searchPlaceholderByNameAndAttr(
          "menu_loop",
          "menuId",
          _menuId,
        )

        return placeholder
          ? await this.handleRecursiveMenuLoop(context, placeholder, _menuId)
          : ""
      }

      return this.handleMenuLoop(context, placeholder)
    }
    return ""
  }

  private async handleMenuLoop(
    context: BaseContext,
    placeholder: ContentPlaceholder,
  ) {
    const menuId = String(placeholder.getAttributes()?.menuId)

    return menuId ? this.loop(context, placeholder, menuId) : ""
  }

  private async loop(
    context: BaseContext,
    placeholder: ContentPlaceholder,
    menuId: string,
    itemParentId?: string,
  ) {
    let content = ""

    const menuItems = await (itemParentId
      ? this.getMenuItemChildren(context, menuId)
      : this.getMenuItems(context, menuId))

    const newContext = new BaseContext(context.getAttributes(), context)

    for (const menuItem of menuItems) {
      newContext.setAttributes({
        menuItem: menuItem.value,
        menuId,
      })
      content += await this.getReplacer()?.replacePlaceholders(
        placeholder.getContent() ?? "",
        newContext,
      )
    }

    return content
  }

  private async handleRecursiveMenuLoop(
    context: BaseContext,
    placeholder: ContentPlaceholder,
    menuId: string,
  ) {
    const { menuItem } = context.getAttributes() ?? {}
    const menuItemId = readMenuItemId(menuItem)

    if (!menuId || !menuItemId) {
      return ""
    }

    return this.loop(context, placeholder, menuId, menuItemId)
  }
}
