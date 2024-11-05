import { getCollectionItems } from "@/lib/db/item/getCollectionItems";
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
    const { placeholderKey } = context.getAttributes();
    const contextEntityId = Str.read(placeholderKey) ?? context.getEntityId();
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

interface GetCollectionItemsArgs {
  collectionType: string;
  itemsCount: number;
  page: number;
  orderBy?: string;
  order?: string;
  offset?: number;
  include?: string[];
  exclude?: string[];
}

export const getPostItems = async ({
  collectionType,
  itemsCount,
  page,
  orderBy,
  order,
  offset,
  include,
  exclude,
}: GetCollectionItemsArgs) => {
  const { data, pagination } = await getCollectionItems({
    collection: collectionType,
    itemsCount,
    sortBy: orderBy,
    sort: order,
    offset,
    include,
    exclude,
    currentPage: page,
  });

  const collection = data.map(({ id }) => id);
  const paginationInfo = {
    items_per_page: pagination.items_per_page,
    total: pagination.total,
  };

  return {
    collection,
    paginationInfo,
  };
};
