import { getItem } from "@/lib/db/item/getItem";
import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { Num, Obj, Str } from "@brizy/readers";
import { mPipe } from "fp-utilities";
import { isCollectionContext } from "../context/types";
import { BasePlaceholder } from "./BasePlaceholder";
import { PlaceholderType } from "./types";
import { getContext, getPostItems } from "./utils";

export class PostUrlPlaceholder extends BasePlaceholder {
  constructor() {
    super("PostUrl Placeholder", PlaceholderType.PostUrl);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { entityId } = getContext(context, placeholder);

    const { slug } = await getItem({
      id: entityId,
    });

    const { item, collection } = slug;

    return `/${collection}/${item}`;
  }
}
