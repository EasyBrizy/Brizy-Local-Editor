export const toHashCode = (value: string): string => {
  let hash = 0;
  let chr;

  for (let i = 0; i < value.length; i++) {
    chr = value.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  return String(hash);
};
