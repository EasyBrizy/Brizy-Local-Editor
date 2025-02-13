import { AbstractPlaceholder } from "../modules/AbstractPlaceholder.js"
import { PlaceholderInterface } from "../modules/PlaceholderInterface.js"
import { Attr } from "../modules/types.js"

export abstract class MyAbstractClass
  extends AbstractPlaceholder
  implements PlaceholderInterface
{
  protected label: string
  protected placeholder: string
  protected value: string
  protected attributes: Attr | undefined

  constructor(
    label: string,
    placeholder: string,
    value: string,
    attributes?: Attr
  ) {
    super()
    this.label = label
    this.placeholder = placeholder
    this.value = value
    this.attributes = attributes
  }

  setPlaceholder(placeholder: string) {
    this.placeholder = placeholder
  }

  getPlaceholder(): string {
    return this.placeholder
  }

  setAttributes(attrs: Attr) {
    this.attributes = attrs
  }

  getAttributes(): Attr | undefined {
    return this.attributes
  }

  getLabel(): string {
    return this.label
  }

  setLabel(label: string) {
    this.label = label
  }

  support(placeholderName: string): boolean {
    return placeholderName === this.placeholder
  }

  getConfigStructure() {
    return {
      id: this.getUid(),
      label: this.getLabel(),
      name: this.getPlaceholder(),
      placeholder: this.buildPlaceholder(),
      attr: this.getAttributes(),
      varyAttr: this.getVaryAttributes(),
    }
  }
}
