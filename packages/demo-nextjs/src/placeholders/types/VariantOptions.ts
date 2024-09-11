import { getProductVariantName } from "@/lib/db/shopify/product/variants/getVariant";
import { CollectionContext } from "@/placeholders/context/CollectionContext";
import { isCollectionContext } from "@/placeholders/context/types";
import { getContext, getDCContext } from "@/placeholders/types/utils";
import { ContentPlaceholder, ContextInterface, Extractor } from "@brizy/content-placeholder";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";

export class VariantOptionsPlaceholder extends BasePlaceholder {
  constructor() {
    super("VariantOptions Placeholder", PlaceholderType.VariantOptions);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId } = getContext(context, placeholder);
    const { content_type } = placeholder.getAttributes() ?? {};

    const options = await getProductVariantName(entityId);
    const normalisedOptions = options.map((option: string) => `${option}|||${entityId}`);

    if (isCollectionContext(context)) {
      if (content_type === "html") {
        const replacer = this.getReplacer();

        if (!replacer) {
          return "";
        }

        let html = "";

        for (const option of normalisedOptions) {
          context.setAttributes({ placeholderKey: option, content_type });

          const data = await replacer.replacePlaceholders(placeholder.getContent() ?? "", context);
          html += data;
        }

        return html;
      }
    }

    return JSON.stringify(getDCContext(normalisedOptions, entityId));
  }
}
