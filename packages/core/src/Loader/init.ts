const cache = new Map<HTMLElement, string>();

export const initLoader = (loader: HTMLElement, parent: HTMLElement): void => {
  cache.set(parent, parent.style.position);
  parent.style.position = "relative";
  parent.appendChild(loader);
};

export const destroyLoader = (loader: HTMLElement, parent: HTMLElement): void => {
  const parentPosition = cache.get(parent);

  if (parentPosition !== undefined) {
    parent.style.position = parentPosition;
  }

  parent.removeChild(loader);
};
