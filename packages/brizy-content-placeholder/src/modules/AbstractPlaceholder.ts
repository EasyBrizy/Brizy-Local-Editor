import { ContentPlaceholder } from "./ContentPlaceholder.js"
import { ContextInterface } from "./ContextInterface.js"
import { PlaceholderInterface } from "./PlaceholderInterface.js"
import { Attr } from "./types.js"
import { createUid } from "./utils.js"

export abstract class AbstractPlaceholder implements PlaceholderInterface {
  FALLBACK_KEY: string = "_fallback"

  getUid(): string {
    return createUid()
  }

  shouldFallbackValue(value: string): boolean {
    return !value.length
  }

  getFallbackValue(_, placeholder: ContentPlaceholder): string {
    const attributes = placeholder.getAttributes()

    return attributes && attributes[this.FALLBACK_KEY]
      ? (attributes[this.FALLBACK_KEY] as string)
      : ""
  }

  abstract getValue(
    context: ContextInterface,
    placeholder: ContentPlaceholder
  ): Promise<string>

  abstract support(placeholderName: string): boolean

  abstract getConfigStructure()

  abstract getPlaceholder(): string

  abstract setPlaceholder(placeholder: string)

  abstract getLabel(): string

  abstract setLabel(label: string)

  abstract getAttributes(): Attr | undefined

  buildPlaceholder(): string {
    const _placeholder = this.getPlaceholder()

    if (_placeholder) {
      const attrs = this.buildAttributeString()

      return `{{${_placeholder}${attrs ? ` ${attrs}` : ""}}}`
    }

    return ""
  }

  protected buildAttributeString(): string {
    const attributes = this.getAttributes()
    return attributes
      ? Object.entries(attributes)
          .map(([key, val]) => `${key}="${val}"`)
          .join(" ")
      : ""
  }

  getVaryAttributes() {
    return ""
  }
}
