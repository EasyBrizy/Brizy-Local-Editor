import { Props } from "../types";
import { camelCase } from "./string";

interface Data {
  score: number;
  title: string;
}

export function getItems(props: Props): Array<Data> {
  const items = props.spinItems || [];

  return items.map(({ id: groupId }) => {
    const titleKey = camelCase(["spinItems", groupId, "title"]);
    const scoreKey = camelCase(["spinItems", groupId, "score"]);
    const title = props[titleKey];
    const score = props[scoreKey];

    return {
      title: `${title}`,
      score: typeof score === "number" ? score : 0,
    };
  });
}
