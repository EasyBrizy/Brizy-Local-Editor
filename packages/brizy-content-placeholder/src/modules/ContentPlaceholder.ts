import { Attr } from "./types.js"
import { createUid } from "./utils.js"

export class ContentPlaceholder {
  protected uid: string
  protected placeholder: string
  protected name: string
  protected content: string | undefined
  protected attributes: Attr | undefined

  constructor(
    name: string,
    placeholder: string,
    attributes?: Attr,
    content?: string
  ) {
    this.uid = createUid()
    this.placeholder = placeholder
    this.name = name
    this.attributes = attributes
    this.content = content
  }

  getId(required: boolean = false) {
    return this.getAttribute("id", required)
  }

  getEntityId(required: boolean = false) {
    return this.getId(required)
  }

  getEntityType(required: boolean = false) {
    return this.getAttribute("typeId", required)
  }

  getUid() {
    return this.uid
  }

  setUid(uid: string) {
    this.uid = uid

    return this
  }

  getPlaceholder() {
    return this.placeholder
  }

  setPlaceholder(placeholder: string) {
    this.placeholder = placeholder

    return this
  }

  getName() {
    return this.name
  }

  setName(name: string) {
    this.name = name

    return this
  }

  getAttributes() {
    return this.attributes
  }

  setAttributes(attr?: Attr) {
    this.attributes = attr

    return this
  }

  getAttribute(name: string, throwIfNotFound: boolean = false) {
    if (this.attributes && this.attributes[name]) {
      return this.attributes[name]
    }

    if (throwIfNotFound) {
      throw new Error(`The is not attribute '${name}' set.`)
    }

    return null
  }

  setContent(content?: string) {
    this.content = content

    return this
  }

  getContent() {
    return this.content
  }

  buildPlaceholder() {
    const name = this.getName()
    const attrs = this.buildAttributeString()
    const content = this.getContent()

    let placeholder = `{{${name}${attrs ? ` ${attrs}` : ""}}}`

    if (content?.trim()) {
      placeholder += `${content}{{end_${name}}}`
    }

    return placeholder
  }

  buildAttributeString() {
    const attributes = this.getAttributes()

    return attributes
      ? Object.entries(attributes)
          .map(([key, val]) => `${key}="${val}"`)
          .join(" ")
      : ""
  }
}
