//#region Dynamic Content

export const defaultDC = () => ({
  liveInBuilder: false,
  makePlaceholder(p: { name: string }) {
    return p.name;
  },
  explodePlaceholder(p: { name: string }) {
    return { name: p };
  },
});

//#endregion
