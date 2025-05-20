export const mergeGoogleFont = (a: string, b: string): string => {
  const aUrl = new URL(a);
  const bUrl = new URL(b);
  const aParams = [...aUrl.searchParams];
  const bParams = [...bUrl.searchParams];
  const fonts = new Set<string>();
  const newUrl = new URL(aUrl.pathname, aUrl.origin);

  aParams.forEach(([attr, value]) => {
    if (attr === "family") {
      fonts.add(value);
    } else {
      newUrl.searchParams.set(attr, value);
    }
  });
  bParams.forEach(([attr, value]) => {
    if (attr === "family") {
      fonts.add(value);
    } else {
      newUrl.searchParams.set(attr, value);
    }
  });

  let family = "";
  for (let font of fonts) {
    family += font;
  }

  newUrl.searchParams.set("family", family);

  return decodeURIComponent(`${newUrl}`);
};
