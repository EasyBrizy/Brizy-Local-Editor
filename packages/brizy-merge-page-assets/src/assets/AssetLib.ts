import { BaseAsset } from "./BaseAsset";
import { AssetLibsMap } from "./types";

export class AssetLib extends BaseAsset {
  private selectors: string[];

  constructor(data: AssetLibsMap) {
    const { selectors, ...asset } = data;
    super(asset);
    this.selectors = selectors;
  }

  getSelectors(): string[] {
    return this.selectors;
  }

  setSelectors(selectors: string[]): AssetLib {
    this.selectors = selectors;
    return this;
  }
}
