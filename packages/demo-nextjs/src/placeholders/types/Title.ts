import { getCollectionTitle } from "@/api/collections/title";
import { getContext } from "@/placeholders/types/utils";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

export class TitlePlaceholder extends BasePlaceholder {
  constructor() {
    super("Title Placeholder", PlaceholderType.Title);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId, entityType } = getContext(context, placeholder);

    return getCollectionTitle(entityId, entityType);
  }
}
