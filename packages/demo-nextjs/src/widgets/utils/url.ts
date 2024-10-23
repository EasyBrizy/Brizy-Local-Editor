export const getBaseUrl = (url: string): string => {
  const match = url.match(/^.+?[^\/:](?=[?\/]|$)/);
  return match?.[0] || url;
};
