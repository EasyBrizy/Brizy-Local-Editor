import { BRZ_CURRENT_CONTEXT } from "@/constants/EntityType";
import { getCollectionItems } from "@/lib/db/item/getCollectionItems";
import { getProductsId } from "@/lib/db/shopify/getProductsCollection";
import { CollectionTypes } from "@/lib/db/types";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Num, Obj, Str } from "@brizy/readers";
import { mPipe } from "fp-utilities";
import { isCollectionContext } from "../context/types";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

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

export class PostPlaceholder extends BasePlaceholder {
  constructor(name = "Posts Placeholder", type = PlaceholderType.Posts) {
    super(name, type);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { collection = [] } = (await this.getItems(context, placeholder)) ?? {};
    const { content_type } = placeholder.getAttributes() ?? {};

    if (content_type === "json") {
      return JSON.stringify({ collection });
    }

    const content = placeholder.getContent() ?? "";

    return await this.getHtmlContent(collection, content, context);
  }

  protected getCurrentPage(context: ContextInterface) {
    let currentPage = 1;

    if (isCollectionContext(context)) {
      const { searchParams } = context.getAttributes();
      const page = mPipe(Obj.read, Obj.readKey("page"), Num.read)(searchParams);

      if (page && page > 0) {
        currentPage = page;
      }
    }

    return currentPage;
  }

  protected async getItems(context: ContextInterface, placeholder: ContentPlaceholder) {
    try {
      const { itemsCount, collectionType, offsetCount, orderBy, order, includeCollections, excludeCollections } =
        this.getPlaceholderAttributes(placeholder);

      const currentPage = this.getCurrentPage(context);

      if (collectionType === CollectionTypes.product) {
        return await this.getProductItems({
          itemsCount,
          include: includeCollections,
          exclude: excludeCollections,
          offset: offsetCount,
          order,
          orderBy,
          page: currentPage,
        });
      }

      return await this.getPostItems({
        collectionType,
        itemsCount,
        orderBy,
        order,
        offset: offsetCount,
        page: currentPage,
        ...(includeCollections.length > 0 && { include: includeCollections }),
        ...(excludeCollections.length > 0 && { exclude: excludeCollections }),
      });
    } catch (e) {
      console.error("Error :", e);
    }
  }

  private getPlaceholderAttributes(placeholder: ContentPlaceholder) {
    const { count, include, exclude, collection_type, offset, order, order_by, component } =
      placeholder.getAttributes() ?? {};

    const itemsCount = Num.read(count) ?? 1;
    const componentType = Str.read(component) ?? "";
    const collectionType = Str.read(collection_type) ?? "";
    const effectiveCollectionType = collectionType === BRZ_CURRENT_CONTEXT ? componentType : collectionType;
    const offsetCount = Num.read(offset) ?? 0;
    const orderBy = Str.read(order_by) ?? "";
    const _order = Str.read(order) ?? "";
    const { orderBy: resolvedOrderBy, order: resolvedOrder } = this.getOrderAndOrderBy(
      orderBy,
      _order,
      effectiveCollectionType,
    );
    const includeCollections = this.parseStringToCollections((Str.read(include) ?? "").replaceAll("&amp;", "&"));
    const excludeCollections = this.parseStringToCollections((Str.read(exclude) ?? "").replaceAll("&amp;", "&"));

    return {
      itemsCount,
      collectionType: effectiveCollectionType,
      offsetCount,
      orderBy: resolvedOrderBy,
      order: resolvedOrder,
      includeCollections,
      excludeCollections,
    };
  }

  private getOrderAndOrderBy(orderBy: string, order: string, collectionType: string) {
    let orderByValue;

    const orderType = (order ?? "asc").toLowerCase();
    if (collectionType === CollectionTypes.product) {
      orderByValue = orderBy === "title" ? "TITLE" : "ID";
    } else {
      orderByValue = orderBy === "title" ? "name" : "id";
    }

    return {
      orderBy: orderByValue,
      order: orderType,
    };
  }

  private getPostItems = async ({
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

    const collection = data.map(({ id }) => `${id}|||${collectionType}`);
    const paginationInfo = {
      items_per_page: pagination.items_per_page,
      total: pagination.total,
    };

    return {
      collection,
      paginationInfo,
    };
  };

  private getProductItems = async ({
    itemsCount,
    include,
    exclude,
    offset,
    order,
    orderBy,
    page,
  }: Omit<GetCollectionItemsArgs, "collectionType">) => {
    const { collection, totalItems } = await getProductsId({
      page,
      include,
      exclude,
      offset,
      order,
      count: itemsCount,
      sortBy: orderBy,
    });

    return {
      collection,
      paginationInfo: {
        items_per_page: itemsCount,
        total: totalItems,
      },
    };
  };

  private parseStringToCollections(str: string) {
    const collections = [];
    const params = new URLSearchParams(str);
    let i = 0;

    // The input string follows a format like:
    // "manual[0][collectionId]=collection1&manual[0][fieldId]=value1&manual[1][collectionId]=collection2&manual[1][fieldId]=value2"
    // We need to parse this string and extract an array of strings in the format:
    // ["collection1:value1", "collection2:value2"]

    while (params.has(`manual[${i}][collectionId]`)) {
      const collectionId = params.get(`manual[${i}][collectionId]`);
      const fieldId = params.get(`manual[${i}][fieldId]`);

      if (fieldId) {
        collections.push(`${collectionId}:${fieldId}`);
      } else {
        collections.push(`${collectionId}`);
      }

      i++;
    }

    return collections;
  }

  private async getHtmlContent(collections: string[], content: string, context: ContextInterface) {
    let html = "";
    const replacer = this.getReplacer();

    if (!replacer) {
      return "";
    }

    if (isCollectionContext(context)) {
      for (const collection of collections) {
        const [contextEntityId, contextEntityType] = collection.split("|||");

        context.setEntityId(contextEntityId);

        if (contextEntityType) {
          context.setEntityType(contextEntityType);
        }

        const data = await replacer.replacePlaceholders(content, context);
        html += data;
      }
    }

    return html;
  }
}
