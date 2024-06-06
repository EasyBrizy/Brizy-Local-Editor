export const convertExtension = (path: string): string => {
  return path.replace(/\.m?(j|t)sx?$/, ".js");
};
