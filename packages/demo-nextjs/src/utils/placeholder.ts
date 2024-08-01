import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";

export class NavPlaceholder extends ContentPlaceholder {
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

  public getValue(context: ContextInterface, placeholder: any): string {
    // console.log("context__: ", context);
    // console.log("Placeholder__: ", placeholder);
    return "";
  }
}
