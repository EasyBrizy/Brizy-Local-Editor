import { ContentPlaceholder } from "./ContentPlaceholder.js"
import { RegistryInterface } from "./RegistryInterface.js"
import { createLexer, Token } from "leac"
import { Attr, ExtractorCallback } from "./types.js"
import { PlaceholderInterface } from "./PlaceholderInterface.js"

enum TokenType {
  PLACEHOLDER = "T_PLACEHOLDER",
  END_PLACEHOLDER = "T_END_PLACEHOLDER",
  TEXT = "T_TEXT",
}

type ContentPlaceholderType = ContentPlaceholder

interface Placeholder {
  name: string
  original: string
  attributes: string
  content?: string
}

export class Extractor {
  private static readonly ATTRIBUTE_REGEX: RegExp =
    /(?<attr_name>\w+)\s*=\s*(?<quote>'|"|&quot;|&apos;|&#x27;)(?<attr_value>.*?)\2/g

  private registry: RegistryInterface | null = null

  constructor(registry?: RegistryInterface) {
    if (registry) {
      this.registry = registry
    }
  }

  stripPlaceholders(content: string): string {
    const [contentPlaceholders] = this.extractIgnoringRegistry(content)

    contentPlaceholders.forEach((placeholder) => {
      const placeholderString = placeholder.getPlaceholder()
      const pos = content.indexOf(placeholderString)

      if (pos !== -1) {
        const length = placeholderString.length
        content = content.slice(0, pos) + content.slice(pos + length)
      }
    })

    return content
  }

  private extractPlaceholders(
    content: string,
    options: {
      useRegistry: boolean
      callback?: ExtractorCallback
      extractEndPlaceholder?: boolean
    },
  ): [ContentPlaceholder[], PlaceholderInterface[], string] {
    const tokens = this.extractTokens(content)
    const placeholders: Placeholder[] = []
    const contentPlaceholders: ContentPlaceholder[] = []
    const placeholderInstances: PlaceholderInterface[] = []

    const { useRegistry, extractEndPlaceholder, callback } = options
    const tokenTypes = extractEndPlaceholder
      ? [TokenType.PLACEHOLDER, TokenType.END_PLACEHOLDER]
      : [TokenType.PLACEHOLDER]

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]
      const { name } = token

      if (tokenTypes.includes(name)) {
        const [placeholder, newIndex] = this.extractPlaceholder(
          tokens,
          i,
          content,
        )
        placeholders.push(placeholder)
        i = newIndex // Skip processed tokens
      }
    }

    placeholders.forEach((placeholder) => {
      const {
        name,
        original,
        content: placeholderContent,
        attributes,
      } = placeholder

      let instance: PlaceholderInterface | null = null

      if (useRegistry) {
        instance = this.registry?.getPlaceholderSupportingName(name) ?? null
        if (!instance) return // Ignore unknown placeholders
        placeholderInstances.push(instance)
      }

      const contentPlaceholder = new ContentPlaceholder(
        name,
        original,
        attributes ? this.getPlaceholderAttributes(attributes) : {},
        placeholderContent ?? "",
      )
      contentPlaceholders.push(contentPlaceholder)

      const pos = content.indexOf(contentPlaceholder.getPlaceholder())
      const length = contentPlaceholder.getPlaceholder().length

      if (pos !== -1) {
        const replacement = useRegistry
          ? contentPlaceholder.getUid()
          : (callback?.(contentPlaceholder) ?? "")
        content =
          content.slice(0, pos) + replacement + content.slice(pos + length)
      }
    })

    return [contentPlaceholders, placeholderInstances, content]
  }

  // Public method using the registry
  extract(
    content: string,
  ): [ContentPlaceholderType[], PlaceholderInterface[], string] {
    const [contentPlaceholders, placeholderInstances, modifiedContent] =
      this.extractPlaceholders(content, {
        useRegistry: true,
      })

    return [contentPlaceholders, placeholderInstances, modifiedContent]
  }

  // Public method ignoring the registry
  extractIgnoringRegistry(
    content: string,
    callback?: ExtractorCallback | null,
    extractEndPlaceholder?: boolean,
  ): [ContentPlaceholder[], string] {
    if (!callback || typeof callback !== "function") {
      callback = (placeholder: ContentPlaceholder) => placeholder.getUid()
    }
    const [contentPlaceholders, , modifiedContent] = this.extractPlaceholders(
      content,
      {
        useRegistry: false,
        extractEndPlaceholder,
        callback,
      },
    )

    return [contentPlaceholders, modifiedContent]
  }

  private extractPlaceholder(
    tokens: Token[],
    start: number,
    content: string,
  ): [placeholder: Placeholder, index: number] {
    const continueIndex = start
    let token = tokens[start]
    const count = tokens.length
    const placeholder = this.getPlaceholderFromToken(token)

    if (content.indexOf(`end_${placeholder.name}`) === -1) {
      return [placeholder, continueIndex]
    }

    let placeholderContent = ""

    for (let i = start + 1; i < count; i++) {
      token = tokens[i]
      const { name } = token
      switch (name) {
        case TokenType.PLACEHOLDER:
          const pName = this.getPlaceholderTokenValue(token)
          if (pName === placeholder.name) {
            const [aPlaceholder, newIndex] = this.extractPlaceholder(
              tokens,
              i,
              content,
            )
            placeholderContent += aPlaceholder.original
            i = newIndex
          } else {
            placeholderContent += token.text
          }
          break
        case TokenType.END_PLACEHOLDER:
          const endPlaceholderName = this.getPlaceholderTokenValue(token)
          if (endPlaceholderName === `end_${placeholder.name}`) {
            placeholder.content = placeholderContent
            placeholder.original += placeholderContent + token.text
            return [placeholder, i]
          } else {
            placeholderContent += token.text
          }
          break
        default:
          placeholderContent += token.text
          break
      }
    }

    return [placeholder, continueIndex]
  }

  private getPlaceholderFromToken(token: Token): Placeholder {
    const name = this.getPlaceholderTokenValue(token)
    const original = token.text
    const attributes = this.getPlaceholderAttrTokenValue(token)

    return {
      name,
      original,
      attributes,
    }
  }

  private extractTokens(content: string): Token[] {
    const lex = createLexer([
      {
        name: TokenType.END_PLACEHOLDER,
        regex: /{{\s*(?<placeholderName>end_.*?)\s*}}/,
      },
      {
        name: TokenType.PLACEHOLDER,
        regex: /{{\s*[^{}]+?\s*}}/,
      },
      {
        name: TokenType.TEXT,
        regex: /[^{}]+|[^{]+|[^}]+/,
      },
    ])

    const { tokens } = lex(content)
    return tokens
  }

  private getPlaceholderAttrTokenValue(token: Token): string {
    const regex = /(\w+)=["']([^"']+)["']/g
    const attributes: string[] = []
    let match

    while ((match = regex.exec(token.text)) !== null) {
      attributes.push(`${match[1]}="${match[2]}"`)
    }

    return attributes.join(", ")
  }

  private getPlaceholderTokenValue(token: Token): string {
    const match = token.text.match(/{{\s*([^{}\s]+)/)
    return match ? match[1] : ""
  }

  //Split the attributes from attribute string
  getPlaceholderAttributes(attributeString: string): Attr {
    const attributes: Attr = {}
    const attributeMatches = [
      ...attributeString.matchAll(RegExp(Extractor.ATTRIBUTE_REGEX, "g")),
    ]

    for (const match of attributeMatches) {
      const attrName = match.groups?.attr_name ?? ""
      if (!attrName) continue

      const attrValue =
        match.groups?.attr_value_quoted ||
        match.groups?.attr_value_single_quoted ||
        match.groups?.attr_value_unquoted ||
        match.groups?.attr_value

      if (!attributes[attrName]) {
        attributes[attrName] = []
      }

      if (match.groups?.attr_value_quoted) {
        attributes[attrName] = attrValue ?? ""
      } else {
        attributes[attrName] = decodeURIComponent(attrValue ?? "")
      }
    }

    return attributes
  }
}
