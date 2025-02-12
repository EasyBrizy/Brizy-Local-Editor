import { PlaceholderInterface } from "./PlaceholderInterface.js"
import { RegistryInterface } from "./RegistryInterface.js"

export class Registry implements RegistryInterface {
  public placeholders: PlaceholderInterface[] = []

  public registerPlaceholder(instance: PlaceholderInterface): void {
    this.placeholders.push(instance)
  }

  public getPlaceholders(): PlaceholderInterface[] {
    return this.placeholders
  }

  public getPlaceholderSupportingName(
    name: string
  ): PlaceholderInterface | undefined {
    return this.placeholders.find((placeholder) => placeholder.support(name))
  }
}
