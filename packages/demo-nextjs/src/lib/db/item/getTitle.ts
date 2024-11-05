import { getItem } from "./getItem";

export const getItemTitle = async (itemId: string) => {
  const data = await getItem({
    id: itemId,
  });

  return data.slug.item;
};
