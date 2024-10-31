import { getIn, setIn } from "timm";

export const getElements = (elements: Record<string, unknown>, onOpenMenu: (uid: string) => void, uid: string) => {
  const menu = getIn(elements, ["menu"]);

  if (menu) {
    elements = setIn(elements, ["menu", "onOpen"], () => onOpenMenu(uid)) as Record<string, unknown>;
  }

  return elements;
};
