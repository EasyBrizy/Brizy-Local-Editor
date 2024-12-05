import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Obj, Str } from "@brizy/readers";
import { isCollectionContext } from "../../context/types";
import { PlaceholderType } from "../../types/types";
import { BasePlaceholder } from "../BasePlaceholder";

export class MenuAttributesPlaceholder extends BasePlaceholder {
  constructor() {
    super("MenuAttributes Placeholder", PlaceholderType.MenuAttributes);
  }

  support(placeholderName: string): boolean {
    return [PlaceholderType.MenuTitle, PlaceholderType.MenuUrl].includes(placeholderName as PlaceholderType);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    if (isCollectionContext(context)) {
      const { menuItem } = context.getAttributes();
      const parsedMenuItem = Obj.read(menuItem);

      if (!parsedMenuItem) {
        return "";
      }

      switch (placeholder.getName()) {
        case PlaceholderType.MenuTitle:
          return Str.read(parsedMenuItem.title) ?? "";
        case PlaceholderType.MenuUrl:
          return Str.read(parsedMenuItem.url) ?? "";
      }
      return super.getValue(context, placeholder);
    }
    return "";
  }
}
