import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { CollectionContext } from "../../context/CollectionContext";
import { BasePlaceholder } from "../BasePlaceholder";
import { PlaceholderType } from "../types";

export class GroupPlaceholder extends BasePlaceholder {
  constructor() {
    super("Group Placeholder", PlaceholderType.Group);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const content = placeholder.getContent();
    const replacer = this.getReplacer();
    return replacer ? await replacer.replacePlaceholders(content ?? "", new CollectionContext()) : "";
  }
}
