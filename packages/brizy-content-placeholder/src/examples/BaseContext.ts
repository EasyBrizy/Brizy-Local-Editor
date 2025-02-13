import { ContextInterface } from "../modules/ContextInterface"
import { ContentPlaceholder } from "../modules/ContentPlaceholder"

export class BaseContext implements ContextInterface {
  private attributes: Record<string, unknown> = {}
  private readonly parent: ContextInterface | undefined
  private placeholders: ContentPlaceholder[] = []

  constructor(attributes?: Record<string, unknown>, parent?: ContextInterface) {
    if (attributes) {
      this.attributes = attributes
    }

    this.parent = parent
  }

  getAttributes(): Record<string, unknown> {
    return this.attributes
  }

  getParent(): ContextInterface | undefined {
    return this.parent
  }

  setAttributes(attributes: Record<string, unknown>): void {
    this.attributes = {
      ...this.attributes,
      ...attributes,
    }
  }

  setPlaceholders(placeholders: ContentPlaceholder[]): void {
    this.placeholders = [...this.placeholders, ...placeholders]
  }

  afterExtract(contentPlaceholders: ContentPlaceholder[]): void {
    this.setPlaceholders(contentPlaceholders)
  }

  searchPlaceholderByNameAndAttr(
    name: string,
    attr: string,
    attrValue: string,
  ): ContentPlaceholder | null {
    const placeholder = this.placeholders.find(
      (placeholder) =>
        placeholder.getName() === name &&
        placeholder.getAttributes()?.[attr] === attrValue,
    )

    if (placeholder) {
      return placeholder
    }

    if (this.parent && isBaseContext(this.parent)) {
      return this.parent.searchPlaceholderByNameAndAttr(name, attr, attrValue)
    }

    return null
  }
}

export const isBaseContext = (
  context: ContextInterface,
): context is BaseContext => context instanceof BaseContext
