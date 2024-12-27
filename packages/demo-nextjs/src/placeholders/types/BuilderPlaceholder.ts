import { BasePlaceholder } from "@/placeholders/types/BasePlaceholder";
import { PlaceholderType } from "@/placeholders/types/types";
import { ContentPlaceholder, ContextInterface, Extractor } from "@brizy/content-placeholder";
import { Str } from "@brizy/readers";

export class BuilderPlaceholder extends BasePlaceholder {
  constructor() {
    super("Builder Placeholder", PlaceholderType.Builder);
  }

  async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { content, ...attrs } = placeholder.getAttributes() ?? {
      content: "",
    };

    if (!Str.is(content)) {
      return super.getValue(context, placeholder);
    }

    const decodedContent = atob(content);
    const extractor = new Extractor();

    const [contentPlaceholders] = extractor.extractIgnoringRegistry(decodedContent, null, true);

    if (contentPlaceholders.length === 0) {
      return "";
    }

    const contentPlaceholder = contentPlaceholders[0];
    const placeholderAttrs = contentPlaceholder.getAttributes();

    contentPlaceholder.setAttributes({
      ...placeholderAttrs,
      ...attrs,
    });

    return contentPlaceholder.buildPlaceholder();
  }
}
