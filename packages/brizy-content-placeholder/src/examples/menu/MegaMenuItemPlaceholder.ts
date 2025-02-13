import { MenuBasePlaceholder } from "./MenuBasePlaceholder"
import { ContextInterface } from "../../modules/ContextInterface"
import { BaseContext, isBaseContext } from "../BaseContext"
import { readMenuItemId } from "./utils"

export class MegaMenuItemPlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MegaMenuItem Placeholder", "mega_menu")
  }

  async getValue(context: ContextInterface): Promise<string> {
    if (isBaseContext(context)) {
      const { menuItem } = context.getAttributes()
      const menuItemId = readMenuItemId(menuItem)
      const placeholder = context.searchPlaceholderByNameAndAttr(
        "mega_menu_value",
        "itemId",
        menuItemId ?? "",
      )

      if (!placeholder) {
        return ""
      }

      const newContext = new BaseContext(context.getAttributes(), context)
      newContext.setAttributes({
        menuItem,
      })

      const content = placeholder.getContent() ?? ""

      return (
        (await this.getReplacer()?.replacePlaceholders(content, newContext)) ??
        ""
      )
    }
    return ""
  }
}
