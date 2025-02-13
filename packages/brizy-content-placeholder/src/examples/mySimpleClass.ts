import { Attr } from "../modules/types.js"
import { MyAbstractClass } from "./myAbstractClass.js"

export class mySimpleClass extends MyAbstractClass {
  protected value: string

  constructor(label: string, placeholder: string, value: string, attrs?: Attr) {
    super(label, placeholder, value, attrs)
    this.setLabel(label)
    this.setPlaceholder(placeholder)
    this.value = value
    if (attrs) this.setAttributes(attrs)
  }

  public async getValue(): Promise<string> {
    return this.value
  }
}
