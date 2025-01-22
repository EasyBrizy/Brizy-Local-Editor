import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { CollectionContext } from "../../context/CollectionContext";
import { isCollectionContext } from "../../context/types";
import { PlaceholderType } from "../types";
import { MenuBasePlaceholder } from "./MenuBasePlaceholder";
import { readMenuItemId } from "./utils";

export class MegaMenuItemPlaceholder extends MenuBasePlaceholder {
  constructor() {
    super("MegaMenuItem Placeholder", PlaceholderType.MegaMenu);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    if (isCollectionContext(context)) {
      const { menuItem } = context.getAttributes();
      const menuItemId = readMenuItemId(menuItem);
      const placeholder = context.searchPlaceholderByNameAndAttr(
        PlaceholderType.MegaMenuValue,
        "itemId",
        menuItemId ?? "",
      );

      if (!placeholder) {
        return "";
      }

      const newContext = new CollectionContext({}, context);
      newContext.setAttributes({
        menuItem,
      });

      const content = placeholder.getContent() ?? "";

      return (await this.getReplacer()?.replacePlaceholders(content, newContext)) ?? "";
    }
    return "";
  }
}
