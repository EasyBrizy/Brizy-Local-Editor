import { ExposedHandlers } from "@/builderProvider/types/type";
import { getIn, setIn } from "timm";
import { getPostHandler } from "./posts";

export const getElements = (elements: Record<string, unknown>, handlers: ExposedHandlers, uid: string) => {
  const isEnabledMenu = getIn(elements, ["menu", "enable"]);
  const isEnabledPosts = getIn(elements, ["posts", "enable"]);

  if (isEnabledMenu) {
    elements = setIn(elements, ["menu", "onOpen"], () => handlers.onOpenMenu(uid)) as Record<string, unknown>;
  }

  if (isEnabledPosts) {
    elements = setIn(elements, ["posts", "handler"], getPostHandler(handlers.postsHandler, uid)) as Record<
      string,
      unknown
    >;
  }

  return elements;
};
