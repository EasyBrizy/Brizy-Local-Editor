import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Obj, Str } from "@brizy/readers";
import { isCollectionContext } from "../../context/types";
import { PlaceholderType } from "../../types/types";
import { BasePlaceholder } from "../BasePlaceholder";

const menuIconPlaceholders = [PlaceholderType.MenuItemIcon, PlaceholderType.MenuItemIconValue];

export class MenuItemAttributesPlaceholder extends BasePlaceholder {
  constructor() {
    super("MenuItemsAttributes Placeholder", PlaceholderType.MenuItemAttributes);
  }

  support(placeholderName: string): boolean {
    return (
      placeholderName.startsWith("menu_item_") && !menuIconPlaceholders.includes(placeholderName as PlaceholderType)
    );
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    if (isCollectionContext(context)) {
      const { menuItem } = context.getAttributes();
      const parsedMenuItem = Obj.read(menuItem);
      const regex = /menu_item_(.*)/;

      const attr = regex.exec(placeholder.getName())?.[1] ?? "";

      if (!parsedMenuItem) {
        return "";
      }

      let value: unknown;

      switch (attr) {
        case "classname":
          value = parsedMenuItem["current"] ? "brz-menu__item--current" : "";
          break;
        case "title":
        case "target":
          value = parsedMenuItem[attr];
          break;
        case "href":
        case "url":
          value = parsedMenuItem["url"];
          break;
        case "uid":
          value = parsedMenuItem["id"];
          break;
        case "attr_title":
          value = (Str.read(parsedMenuItem["title"]) ?? "").replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
      }

      return Str.read(value) ?? "";
    }
    return "";
  }
}
