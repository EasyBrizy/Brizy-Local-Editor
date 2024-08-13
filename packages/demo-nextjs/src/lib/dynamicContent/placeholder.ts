import { DCPlaceholderObj } from "./types";

export type PlaceholderName = "placeholder";

export const isPlaceholderName = (r: unknown): r is PlaceholderName => r === "placeholder";

export function placeholderObjFromStr(placeholder: string): DCPlaceholderObj | undefined {
  const r1 = /^{{\s*(placeholder)(?:\s(content='.*?')?\s*(.*?))?\s*}}$/;
  const nameAndAttr = r1.exec(placeholder);

  if (!nameAndAttr) {
    return undefined;
  }

  const [, name, _content, attrStr] = nameAndAttr;

  const r2 = /^content='(.+)'$/g;
  const [, contentEncoded] = r2.exec(_content) ?? [];

  if (!isPlaceholderName(name) || !contentEncoded) {
    return undefined;
  }

  const content = atob(contentEncoded);

  if (attrStr === "") {
    return { name, content };
  }

  let attr: Record<string, unknown> | undefined = undefined;
  let match;

  const r3 = /(\w+)=("|'|&quot;|&apos;)(.*?)\2/g;
  while ((match = r3.exec(attrStr.trim()))) {
    attr = attr ?? {};
    attr[match[1]] = unescape(match[3]);
  }

  return attr ? { name, content, attr } : { name, content };
}
