import { AssetFont } from "./assets/AssetFont";
import { AssetGroup } from "./assets/AssetGroup";
import { AssetLib } from "./assets/AssetLib";
import { BaseAsset } from "./assets/BaseAsset";
import { FontType } from "./assets/types";
import { removeDuplicates } from "./assets/utils";

export class AssetAggregator {
  private groups: AssetGroup[] = [];

  constructor(groups: AssetGroup[] = []) {
    this.groups = groups;
  }

  addAssetGroup(group: AssetGroup): void {
    this.groups.push(group);
  }

  setAssetsGroups(groups: AssetGroup[]): void {
    this.groups = groups;
  }

  // This will return a list of assets ready to be included in page
  getAssetList(): BaseAsset[] {
    let assets = this.getAggregatedAssets(this.groups);
    const [freeLibMap, proLibMap] = this.getLibMaps(this.groups);
    assets = this.normalizeAssets(assets, freeLibMap ?? [], proLibMap ?? []);

    return this.sortAssets(assets);
  }

  private getLibMaps(groups: AssetGroup[]): [AssetLib[] | null, AssetLib[] | null] {
    let pro: AssetLib[] | null = null;
    let free: AssetLib[] | null = null;

    for (const group of groups) {
      // Ensure group is an instance of AssetGroup
      if (group.getMain() && group.getMain()?.isPro()) {
        pro = group.getLibsMap();
      } else {
        free = group.getLibsMap();
      }

      if (pro && free) {
        return [free, pro];
      }
    }

    return [free, pro];
  }

  private getAggregatedAssets(groups: AssetGroup[]): BaseAsset[] {
    let assets: BaseAsset[] = [];
    let mainAsset: BaseAsset | null = null;

    groups.forEach((group) => {
      // Set main asset and override if there are pro main assets
      if (!mainAsset || group.getMain()?.isPro()) {
        mainAsset = group.getMain();
      }

      // Add generic assets
      assets.push(...group.getGeneric());

      // Add page fonts
      assets.push(...group.getPageFonts());

      // Add page styles
      assets.push(...group.getPageStyles());

      const selectors = group.getLibsSelectors();
      const selectorsCount = selectors.length;
      if (selectorsCount !== 0) {
        const selectedLib = group
          .getLibsMap()
          .find(
            (lib) => lib.getSelectors().filter((selector) => selectors.includes(selector)).length === selectorsCount,
          );

        if (selectedLib) {
          assets.push(selectedLib);
        }
      }

      // Filter out null values
      assets = assets.filter((a) => a !== null);
    });

    // Include main asset if available
    if (mainAsset) {
      assets.push(mainAsset);
    }

    return assets;
  }

  private normalizeAssets(assets: BaseAsset[], freeLibMap: AssetLib[], proLibMap: AssetLib[]): BaseAsset[] {
    // find libs and check if cannot be replaced with a bigger lib to save requests
    const freeLibsFoundNames: string[] = [];
    const freeLibsSelectorsFound: string[] = [];
    const proLibsFoundNames: string[] = [];
    const proLibsSelectorsFound: string[] = [];

    assets.forEach((asset) => {
      if (asset instanceof AssetLib) {
        const selectors = asset.getSelectors();

        if (asset.isPro()) {
          proLibsFoundNames.push(asset.getUid());
          proLibsSelectorsFound.push(...selectors);
        } else {
          freeLibsFoundNames.push(asset.getUid());
          freeLibsSelectorsFound.push(...selectors);
        }
      }
    });

    assets = this.groupLibs(assets, freeLibMap, freeLibsSelectorsFound, freeLibsFoundNames);
    assets = this.groupLibs(assets, proLibMap, proLibsSelectorsFound, proLibsFoundNames);

    assets = this.groupGoogleFonts(assets);
    assets = this.groupUploadedFonts(assets);

    return removeDuplicates(assets);
  }

  private groupLibs(
    assets: BaseAsset[],
    libMap: AssetLib[],
    selectorsFound: string[],
    foundLibUrls: string[],
  ): BaseAsset[] {
    if (foundLibUrls.length !== 0) {
      // Try to find a lib containing all found selectors
      const libsSelectorsFound = Array.from(new Set(selectorsFound));
      const libsSelectorsFoundCount = libsSelectorsFound.length;

      for (const lib of libMap) {
        const intersectCount = lib.getSelectors().filter((selector) => libsSelectorsFound.includes(selector)).length;

        if (intersectCount === libsSelectorsFoundCount) {
          // Filter out the assets at positions in foundLibUrls
          assets = assets.filter((asset) => !foundLibUrls.includes(asset.getUid()));

          // Add the lib object to assets
          assets.push(lib);
          break;
        }
      }
    }

    return assets;
  }

  private groupGoogleFonts(assets: BaseAsset[]): BaseAsset[] {
    return this.groupFonts(
      assets,
      FontType.GOOGLE,
      /\?family=(.*?)(&|\")/,
      (value: string, matchTermination: string) => {
        return `?family=${value}${matchTermination}`;
      },
    );
  }

  private groupUploadedFonts(assets: BaseAsset[]): BaseAsset[] {
    return this.groupFonts(
      assets,
      FontType.UPLOADED,
      /-font=(.*?)(&|\"|$)/,
      (value: string, matchTermination: string) => {
        return `-font=${value}${matchTermination}`;
      },
    );
  }

  private groupFonts(
    assets: BaseAsset[],
    fontType: FontType,
    extractRegex: RegExp,
    replaceRegex: (value: string, matchTermination: string) => string,
  ): BaseAsset[] {
    // Extract font data
    const fonts: { [key: string]: string[] } = {};
    let sampleFont: AssetFont | null = null;
    let matchTermination = "";

    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];

      if (asset instanceof AssetFont && asset.getFontType() === fontType) {
        // Obtain a font copy
        if (!sampleFont) {
          sampleFont = asset;
        }

        const matches = asset.getContentByType()?.match(extractRegex);
        if (matches && matches[1]) {
          const fontString = decodeURIComponent(matches[1]);
          const fontSets = fontString.split("|");

          fontSets.forEach((set) => {
            const [family, weights] = set.split(":");
            const weightList = weights.split(",");

            if (!fonts[family]) {
              fonts[family] = [];
            }

            // Get the current list of weights for the given family
            const currentWeights = fonts[family];

            // Merge the current weights with the new weightList
            const updatedWeights = [...currentWeights, ...weightList];

            // Remove duplicates and update the fonts object
            fonts[family] = Array.from(new Set(updatedWeights));
          });
        }

        // Remove asset from assets
        assets.splice(i, 1);

        // Capture match termination for the URL replacement
        if (matches && matches[2]) {
          matchTermination = matches[2];
        }
      }
    }

    // If no font is found, return assets unchanged
    if (!sampleFont) {
      return assets;
    }

    // Generate font query value
    const fontQueryValue = Object.keys(fonts)
      .map((family) => `${family}:${fonts[family].join(",")}`)
      .join("|");

    const replaceValue = replaceRegex(fontQueryValue, matchTermination);

    // Replace the URL in the sample font
    sampleFont.setUrl((sampleFont?.getUrl() ?? "").replace(extractRegex, replaceValue));

    // Add the updated font back to the assets array
    assets.push(sampleFont);

    return assets;
  }

  private sortAssets(assets: BaseAsset[]): BaseAsset[] {
    return assets.sort((as1, as2) => as1.getScore() - as2.getScore());
  }
}
