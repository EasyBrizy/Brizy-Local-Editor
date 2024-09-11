import { ContentPlaceholder, ContextInterface, Replacer } from "@brizy/content-placeholder";

export class BasePlaceholder extends ContentPlaceholder {
  private replacer: Replacer | null = null;

  constructor(name: string, placeholder: string) {
    super(name, placeholder);
  }
  support(placeholderName: string): boolean {
    return placeholderName === this.placeholder;
  }
  setLabel(label: string) {
    this.name = label;
  }
  getLabel(): string {
    return this.name;
  }
  getVaryAttributes(): string {
    return "";
  }
  getConfigStructure() {
    return {
      id: this.getUid(),
      label: this.getLabel(),
      name: this.getPlaceholder(),
      placeholder: this.buildPlaceholder(),
      attr: this.getAttributes(),
      varyAttr: this.getVaryAttributes(),
    };
  }
  getFallbackValue() {
    return "fallBack Value";
  }
  shouldFallbackValue() {
    return false;
  }

  setReplacer(replacer: Replacer) {
    this.replacer = replacer;
  }

  getReplacer() {
    return this.replacer;
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    return "";
  }
}
