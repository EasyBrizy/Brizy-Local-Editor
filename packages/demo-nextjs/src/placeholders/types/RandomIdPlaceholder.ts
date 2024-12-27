import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

export class RandomIdPlaceholder extends BasePlaceholder {
  private keys = new Map<string, string>();
  constructor() {
    super("RandomId Placeholder", PlaceholderType.RandomId);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { key: _key } = placeholder.getAttributes() ?? {};
    const key = Str.read(_key) ?? "";

    if (key) {
      if (!this.keys.has(key)) {
        this.keys.set(key, crypto.randomUUID());
      }
      return this.keys.get(key) ?? "";
    }

    return crypto.randomUUID();
  }
}
