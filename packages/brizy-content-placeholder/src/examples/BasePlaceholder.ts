import { ContentPlaceholder } from "../modules/ContentPlaceholder"
import { Replacer } from "../modules/Replacer"
import { PlaceholderInterface } from "../modules/PlaceholderInterface"
import { ContextInterface } from "../modules/ContextInterface"

export class BasePlaceholder
  extends ContentPlaceholder
  implements PlaceholderInterface
{
  replacer: Replacer | null = null

  constructor(name: string, placeholder: string) {
    super(name, placeholder)
  }

  setReplacer(replacer: Replacer): void {
    this.replacer = replacer
  }

  getConfigStructure() {}

  getFallbackValue(): string {
    return ""
  }

  getLabel(): string {
    return ""
  }

  getVaryAttributes(): string {
    return ""
  }

  setLabel(): void {}

  shouldFallbackValue(): boolean {
    return false
  }

  support(placeholderName: string): boolean {
    return placeholderName === this.getPlaceholder()
  }

  getReplacer() {
    return this.replacer
  }

  async getValue(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _context: ContextInterface, _placeholder: ContentPlaceholder,
  ): Promise<string> {
    return ""
  }
}
