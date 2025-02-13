import { BasePlaceholder } from "../BasePlaceholder"
import { ContextInterface } from "../../modules/ContextInterface"
import { ContentPlaceholder } from "../../modules/ContentPlaceholder"
import { isBaseContext } from "../BaseContext"

export class MenuItemPlaceholder extends BasePlaceholder {
  constructor() {
    super("MenuItemsAttributes Placeholder", "menu_item_attributes")
  }

  support(placeholderName: string): boolean {
    return placeholderName.startsWith("menu_item_")
  }

  async getValue(
    context: ContextInterface,
    placeholder: ContentPlaceholder,
  ): Promise<string> {
    if (isBaseContext(context)) {
      const { menuItem } = context.getAttributes()
      const parsedMenuItem = typeof menuItem === "object" ? menuItem : {}
      const regex = /menu_item_(.*)/

      const attr = regex.exec(placeholder.getName())?.[1] ?? ""

      if (!parsedMenuItem) {
        return ""
      }

      let value: unknown

      switch (attr) {
        case "title":
          value = parsedMenuItem["title"]
          break
        case "href":
          value = parsedMenuItem["url"]
          break
        case "uid":
          value = parsedMenuItem["id"]
          break
        case "classname":
          value = parsedMenuItem["current"] ? "brz-menu__item--current" : ""
      }

      return String(value)
    }
    return ""
  }
}
