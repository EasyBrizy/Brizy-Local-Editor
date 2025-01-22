import { ContentPlaceholder, ContextInterface, Replacer } from "@brizy/content-placeholder";

interface ContextArgs {
  attributes: Record<string, unknown>;
  replacer: Replacer;
}

export class CollectionContext implements ContextInterface {
  private attributes: Record<string, unknown> = {};
  private readonly parentContext: ContextInterface | null = null;
  private placeholders: ContentPlaceholder[] = [];

  constructor(data?: Partial<ContextArgs>, parentContext?: ContextInterface) {
    const { attributes } = data ?? {};

    if (attributes) {
      this.attributes = attributes;
    }

    if (parentContext instanceof CollectionContext) {
      this.parentContext = parentContext;
    }
  }

  setAttributes(attributes: Record<string, unknown>): void {
    this.attributes = {
      ...this.attributes,
      ...attributes,
    };
  }

  setPlaceholders(placeholders: ContentPlaceholder[]): void {
    this.placeholders = [...this.placeholders, ...placeholders];
  }

  getAttributes(): Record<string, unknown> {
    return this.attributes;
  }

  getPlaceholders(): ContentPlaceholder[] {
    return this.placeholders;
  }

  afterExtract(contentPlaceholders: ContentPlaceholder[]): void {
    this.setPlaceholders(contentPlaceholders);
  }

  searchPlaceholderByNameAndAttr(name: string, attr: string, attrValue: string): ContentPlaceholder | null {
    const placeholder = this.getPlaceholders().find(
      (placeholder) => placeholder.getName() === name && placeholder.getAttributes()?.[attr] === attrValue,
    );

    if (placeholder) {
      return placeholder;
    }

    if (this.parentContext instanceof CollectionContext) {
      return this.parentContext.searchPlaceholderByNameAndAttr(name, attr, attrValue);
    }

    return null;
  }
}
