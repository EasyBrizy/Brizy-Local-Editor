import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";
import { CollectionContext } from "../../context/CollectionContext";
import { isCollectionContext } from "../../context/types";
import { PlaceholderType } from "../types";
import { MenuBasePlaceholder } from "./MenuBasePlaceholder";
import { readMenuItemId } from "./utils";

export class MenuLoopSubmenuPlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MenuLoopSubmenu Placeholder", PlaceholderType.MenuLoopSubmenu);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    if (isCollectionContext(context)) {
      const { menuItem, menuId: _menuId } = context.getAttributes();

      const menuId = Str.read(_menuId);
      const menuItemId = readMenuItemId(menuItem);

      if (!menuId || !menuItemId) {
        return "";
      }

      const menuItemItems = await this.getMenuItemChildren(menuId, menuItemId);
      const content = placeholder.getContent() ?? "";
      if (menuItemItems.length && !this.hasMegaMenu(context, menuItemId)) {
        return (await this.getReplacer()?.replacePlaceholders(content, context)) ?? "";
      }
    }

    return "";
  }

  private hasMegaMenu(context: CollectionContext, menuItemId: string): boolean {
    const placeholder = context.searchPlaceholderByNameAndAttr(PlaceholderType.MegaMenuValue, "itemId", menuItemId);
    if (placeholder) {
      return placeholder.getContent() !== "";
    }
    return false;
  }
}
