import { Arr, Str } from "@brizy/readers";
import { AssetFont } from "./AssetFont";
import { AssetLib } from "./AssetLib";
import { BaseAsset } from "./BaseAsset";
import { GroupedAssets } from "./types";
import { readAsset, readAssetsArray, readFontAsset, readLibAsset } from "./utils/readers";

export class AssetGroup {
  private main: BaseAsset | null;
  private generic: BaseAsset[];
  private libsMap: AssetLib[];
  private libsSelectors: string[];
  private pageFonts: AssetFont[];
  private pageStyles: BaseAsset[];

  constructor(data: GroupedAssets) {
    const { main, generic, libsMap, libsSelectors, pageFonts, pageStyles } = data;

    this.main = main;
    this.generic = generic;
    this.libsMap = libsMap;
    this.libsSelectors = libsSelectors;
    this.pageFonts = pageFonts;
    this.pageStyles = pageStyles;
  }

  static instanceFromJsonData(data: Record<string, unknown>) {
    const mainData = readAsset(data.main);
    const genericData = readAssetsArray(data.generic, readAsset);
    const libsMapData = readAssetsArray(data.libsMap, readLibAsset);
    const pageFontsData = readAssetsArray(data.pageFonts, readFontAsset);
    const pageStylesData = readAssetsArray(data.pageStyles, readAsset);

    if (!mainData) {
      throw new Error("Invalid main asset data provided");
    }

    // Create main asset
    const main = new BaseAsset(mainData);

    // Create generic assets
    const generic = genericData.map((asset) => new BaseAsset(asset));

    // Create libsMap assets
    const libsMap = libsMapData.map((asset) => new AssetLib(asset));

    // Create libsSelectors
    const libsSelectors = Arr.readWithItemReader(Str.read)(data.libsSelectors) ?? [];

    // Create pageFonts assets
    const pageFonts = pageFontsData.map((asset) => new AssetFont(asset));

    // Create pageStyles assets
    const pageStyles = pageStylesData.map((asset) => new BaseAsset(asset));

    return new AssetGroup({ main, generic, libsMap, libsSelectors, pageFonts, pageStyles });
  }

  getMain(): BaseAsset | null {
    return this.main;
  }

  setMain(main: BaseAsset): AssetGroup {
    this.main = main;
    return this;
  }

  getGeneric(): BaseAsset[] {
    return this.generic;
  }

  setGeneric(generic: BaseAsset[]): AssetGroup {
    this.generic = generic;
    return this;
  }

  getLibsMap(): AssetLib[] {
    return this.libsMap;
  }

  setLibsMap(libsMap: AssetLib[]): AssetGroup {
    this.libsMap = libsMap;
    return this;
  }

  getLibsSelectors(): string[] {
    return this.libsSelectors;
  }

  setLibsSelectors(libsSelectors: string[]): AssetGroup {
    this.libsSelectors = libsSelectors;
    return this;
  }

  getPageFonts(): AssetFont[] {
    return this.pageFonts;
  }

  setPageFonts(pageFonts: AssetFont[]): AssetGroup {
    this.pageFonts = pageFonts;
    return this;
  }

  getPageStyles(): BaseAsset[] {
    return this.pageStyles;
  }

  setPageStyles(pageStyles: BaseAsset[]): AssetGroup {
    this.pageStyles = pageStyles;
    return this;
  }
}
