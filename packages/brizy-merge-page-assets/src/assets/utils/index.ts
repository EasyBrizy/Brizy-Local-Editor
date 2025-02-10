import { BaseAsset } from "../BaseAsset";

const isIdenticalAsset = (a: BaseAsset, b: BaseAsset) => {
  if (a.getName() !== b.getName()) {
    return false;
  }

  if (a.getType() !== b.getType()) {
    return false;
  }

  if (a.getContent() !== b.getContent()) {
    return false;
  }

  if (a.getUrl() !== b.getUrl()) {
    return false;
  }

  const aAttrs = a.getAttrs();
  const bAttrs = b.getAttrs();

  if (Object.keys(aAttrs).length !== Object.keys(bAttrs).length) {
    return false;
  }

  for (const key in aAttrs) {
    if (aAttrs[key] !== bAttrs[key]) {
      return false;
    }
  }

  return true;
};

export const removeDuplicates = (assets: BaseAsset[]): BaseAsset[] => {
  const tmp: BaseAsset[] = []; // Temporary array to track unique objects

  return assets.filter((asset) => {
    // Check if the asset has been encountered before by comparing with `tmp`
    if (!tmp.some((item) => isIdenticalAsset(item, asset))) {
      tmp.push(asset); // Add unique object to `tmp`
      return true; // Keep this asset
    }
    return false; // Skip the duplicate asset
  });
};
