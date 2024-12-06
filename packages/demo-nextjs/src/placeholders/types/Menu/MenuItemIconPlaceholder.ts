import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { isCollectionContext } from "../../context/types";
import { PlaceholderType } from "../../types/types";
import { BasePlaceholder } from "../BasePlaceholder";
import { readMenuItemId } from "./utils";

export class MenuItemIconPlaceholder extends BasePlaceholder {
  constructor() {
    super("MenuItemIcon Placeholder", PlaceholderType.MenuItemIcon);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    if (isCollectionContext(context)) {
      const { menuItem } = context.getAttributes();
      const menuItemId = readMenuItemId(menuItem);

      if (!menuItemId) {
        return "";
      }

      const placeholder = context.searchPlaceholderByNameAndAttr(
        PlaceholderType.MenuItemIconValue,
        "itemId",
        menuItemId,
      );

      return placeholder?.getContent() ?? "";
    }
    return "";
  }
}
