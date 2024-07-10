import { Asset, AssetLibsMap } from "@/types/common";
import { MValue } from "@/utils/types";

const intersection = <T extends unknown>(a: Array<T>, b: Array<T>): Array<T> => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

export const getAssetBySelector = (assets: Array<AssetLibsMap>, selectors: Array<string>): MValue<Asset> => {
  const mapSelectors = new Set<string>(selectors);

  if (mapSelectors.size > 0) {
    return assets.find((asset) => intersection(asset.selectors, selectors).length === mapSelectors.size);
  }

  return undefined;
};
