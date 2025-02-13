import { ContentPlaceholder } from "./ContentPlaceholder.js"
import { PlaceholderInterface } from "./PlaceholderInterface.js"

export interface ContextInterface {
  // This will be called right after all placeholder are extracted from content
  afterExtract(
    contentPlaceholders: ContentPlaceholder[],
    instancePlaceholders: PlaceholderInterface[],
    contentAfterExtractor: string
  )
}
