import { ContentPlaceholder } from "./ContentPlaceholder.js"

export type Attr = Record<string, string | string[]>
export type ExtractorCallback = (placeholder: ContentPlaceholder) => string
