import { getFeaturedImage } from "@/api/collections/featuredImage";
import { getContext } from "@/placeholders/types/utils";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Num } from "@brizy/readers";
import { BasePlaceholder } from "../BasePlaceholder";
import { PlaceholderType } from "../types";

export class FeaturedImagePlaceholder extends BasePlaceholder {
  constructor() {
    super("Featured Image Placeholder", PlaceholderType.FeaturedImage);
  }

  support(placeholderName: string): boolean {
    return super.support(placeholderName);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId, entityType } = getContext(context, placeholder);
    const { cW, cH } = placeholder.getAttributes() ?? {};

    const _cW = Num.read(cW) ?? 0;
    const _cH = Num.read(cH) ?? 0;

    return getFeaturedImage(entityId, entityType, {
      cW: _cW,
      cH: _cH,
    });
  }
}
