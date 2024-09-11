import { getProductVariantValues } from "@/lib/db/shopify/product/variants/getVariant";
import { getDCContext } from "@/placeholders/types/utils";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";
import { isCollectionContext } from "../context/types";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

export class VariantOptionValuesPlaceholder extends BasePlaceholder {
  constructor() {
    super("VariantOptionValues Placeholder", PlaceholderType.VariantOptionValues);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    if (isCollectionContext(context)) {
      const { placeholderKey, content_type } = context.getAttributes();

      if (typeof placeholderKey !== "string") {
        return "";
      }

      const [name, entityId] = placeholderKey.split("|||");

      const values = await getProductVariantValues(entityId, Str.read(name) ?? "");

      if (content_type === "html") {
        const replacer = this.getReplacer();

        if (!replacer) {
          return "";
        }

        let html = "";

        for (const value of values) {
          context.setAttributes({ placeholderKey: value });

          const data = await replacer.replacePlaceholders(placeholder.getContent() ?? "", context);
          html += data;
        }

        return html;
      }

      return values.length ? JSON.stringify(getDCContext(values, entityId)) : "";
    }

    return "";
  }
}
