import { getCollectionDescription } from "@/api/collections/description";
import { getContext } from "@/placeholders/types/utils";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

export class DescriptionPlaceholder extends BasePlaceholder {
  constructor() {
    super("Description Placeholder", PlaceholderType.Description);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId, entityType } = getContext(context, placeholder);

    return getCollectionDescription(entityId, entityType);
  }
}
