import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Num, Obj, Str } from "@brizy/readers";
import { mPipe } from "fp-utilities";
import { isCollectionContext } from "../context/types";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";
import { getPostItems } from "./utils";

export class PostPlaceholder extends BasePlaceholder {
  constructor(name?: string, type?: PlaceholderType) {
    if (name && type) {
      super(name, type);
    } else {
      super("Posts Placeholder", PlaceholderType.Posts);
    }
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

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { collection = [] } = (await this.getItems(context, placeholder)) ?? {};
    const { content_type } = placeholder.getAttributes() ?? {};

    if (content_type === "json") {
      return JSON.stringify({ collection });
    }

    const content = placeholder.getContent() ?? "";

    return await this.getHtmlContent(collection, content, context);
  }

  protected async getItems(context: ContextInterface, placeholder: ContentPlaceholder) {
    try {
      const { count, include, exclude, collection_type, offset, order, order_by } = placeholder.getAttributes() ?? {};

      const itemsCount = Num.read(count) ?? 1;
      const collectionType = Str.read(collection_type) ?? "";
      const offsetCount = Num.read(offset) ?? 0;
      const orderBy = Str.read(order_by) === "title" ? "name" : "id";
      const orderType = (Str.read(order) ?? "asc").toLowerCase();
      const _include = (Str.read(include) ?? "").replaceAll("&amp;", "&");
      const _exclude = (Str.read(exclude) ?? "").replaceAll("&amp;", "&");
      const includeCollections = this.parseStringToCollections(_include);
      const excludeCollections = this.parseStringToCollections(_exclude);
      const currentPage = this.getCurrentPage(context);

      return await getPostItems({
        collectionType,
        itemsCount,
        orderBy,
        order: orderType,
        offset: offsetCount,
        page: currentPage,
        ...(includeCollections.length > 0 && { include: includeCollections }),
        ...(excludeCollections.length > 0 && { exclude: excludeCollections }),
      });
    } catch (e) {
      console.error("Error : ", e);
    }
  }

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
        context.setEntityId(collection);
        const data = await replacer.replacePlaceholders(content, context);
        html += data;
      }
    }

    return html;
  }
}
