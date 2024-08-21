import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";
import { isCollectionContext } from "../context/types";

export const getContext = (
  context: ContextInterface,
  placeholder: ContentPlaceholder,
): {
  entityId: string;
  entityType: string;
} => {
  const attributes = placeholder.getAttributes();

  let entityId = Str.read(attributes?.entityId) ?? "";
  let entityType = Str.read(attributes?.entityType) ?? "";

  if (isCollectionContext(context)) {
    const contextEntityId = context.getEntityId();
    const contextEntityType = context.getEntityType();

    if (!entityId || entityId === "auto") {
      entityId = contextEntityId;
    }

    if (!entityType || entityType === "auto") {
      entityType = contextEntityType;
    }
  }

  return {
    entityId,
    entityType,
  };
};

export const getDCContext = (options: Record<string, unknown>[], id: string) => ({
  collection: options,
  dynamicContent: {
    itemId: id,
  },
  config: {
    "*": {
      dynamicContent: {
        itemId: id,
      },
    },
  },
});
