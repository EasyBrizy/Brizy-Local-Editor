import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";
import { CollectionContext } from "../../context/CollectionContext";
import { isCollectionContext } from "../../context/types";
import { PlaceholderType } from "../types";
import { MenuBasePlaceholder } from "./MenuBasePlaceholder";
import { readMenuItemId } from "./utils";

export class MenuLoopPlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MenuLoop Placeholder", PlaceholderType.MenuLoop);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { recursive } = placeholder.getAttributes() ?? {};

    if (isCollectionContext(context)) {
      const { menuId } = context.getAttributes();
      const _menuId = Str.read(menuId) ?? "";

      if (recursive) {
        const placeholder = context.searchPlaceholderByNameAndAttr(PlaceholderType.MenuLoop, "menuId", _menuId);
        return placeholder ? await this.handleRecursiveMenuLoop(context, placeholder, _menuId) : "";
      }

      return this.handleMenuLoop(context, placeholder);
    }
    return "";
  }

  private async handleMenuLoop(context: CollectionContext, placeholder: ContentPlaceholder) {
    const menuId = Str.read(placeholder.getAttributes()?.menuId);

    return menuId ? this.loop(context, placeholder, menuId) : "";
  }

  private async loop(
    context: CollectionContext,
    placeholder: ContentPlaceholder,
    menuId: string,
    itemParentId?: string,
  ) {
    let content = "";

    const menuItems = await (itemParentId ? this.getMenuItemChildren(menuId, itemParentId) : this.getMenuItems(menuId));

    const newContext = new CollectionContext({}, context);

    for (const menuItem of menuItems) {
      newContext.setAttributes({
        menuItem: menuItem.value,
        menuId,
      });
      content += await this.getReplacer()?.replacePlaceholders(placeholder.getContent() ?? "", newContext);
    }

    return content;
  }

  private async handleRecursiveMenuLoop(context: CollectionContext, placeholder: ContentPlaceholder, menuId: string) {
    const { menuItem } = context.getAttributes() ?? {};
    const menuItemId = readMenuItemId(menuItem);

    if (!menuId || !menuItemId) {
      return "";
    }

    return this.loop(context, placeholder, menuId, menuItemId);
  }
}
