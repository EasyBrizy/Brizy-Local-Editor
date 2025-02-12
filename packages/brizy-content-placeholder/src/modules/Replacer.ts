import { ContentPlaceholder } from "./ContentPlaceholder.js"
import { ContextInterface } from "./ContextInterface.js"
import { Extractor } from "./Extractor.js"
import { PlaceholderInterface } from "./PlaceholderInterface.js"
import { RegistryInterface } from "./RegistryInterface.js"

export class Replacer {
  private registry: RegistryInterface

  constructor(registry: RegistryInterface) {
    this.registry = registry
  }

  async replacePlaceholders(
    content: string,
    context: ContextInterface,
  ): Promise<string> {
    const extractor = new Extractor(this.registry)
    const [contentPlaceholders, instancePlaceholders, contentAfterExtractor] =
      extractor.extract(content)

    context.afterExtract(
      contentPlaceholders,
      instancePlaceholders,
      contentAfterExtractor,
    )

    if (contentPlaceholders.length > 0 && instancePlaceholders.length > 0) {
      return this.replaceWithExtractedData(
        contentPlaceholders,
        instancePlaceholders,
        contentAfterExtractor,
        context,
      )
    }

    return content
  }

  async replaceWithExtractedData(
    contentPlaceholders: ContentPlaceholder[],
    instancePlaceholders: PlaceholderInterface[],
    contentAfterExtractor: string,
    context: ContextInterface,
  ): Promise<string> {
    const toReplace: string[] = []
    const toReplaceWithValues: string[] = []

    const result = await Promise.all(
      contentPlaceholders.map(async (contentPlaceholder, index) => {
        try {
          const uid = contentPlaceholder.getUid()
          const instancePlaceholder = instancePlaceholders[index]
          let value = ""

          if (instancePlaceholder) {
            value = await instancePlaceholder.getValue(
              context,
              contentPlaceholder,
            )

            if (
              instancePlaceholder.shouldFallbackValue(
                value,
                context,
                contentPlaceholder,
              )
            ) {
              value = instancePlaceholder.getFallbackValue(
                context,
                contentPlaceholder,
              )
            }
          }

          return { index, uid, value }
        } catch (e) {
          return { index, uid: null, value: null }
        }
      }),
    )

    result.forEach(({ uid, value }) => {
      if (uid !== null) {
        toReplace.push(uid)
        toReplaceWithValues.push(value)
      }
    })

    return contentAfterExtractor.replace(
      new RegExp(toReplace.join("|"), "g"),
      (match) => {
        const index = toReplace.indexOf(match)
        return index !== -1 ? toReplaceWithValues[index] : match
      },
    )
  }
}
