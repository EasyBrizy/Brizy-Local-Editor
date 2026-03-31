import { AssetAggregator } from "../AssetAggregator";
import { AssetGroup } from "../assets/AssetGroup";
import pages from "./data/page.json";

describe("Testing AssetAggregator", () => {
  test("Testing if score of assets is sorted ascending", () => {
    const assets: AssetGroup[] = [];

    for (const page of pages) {
      const { freeScripts, proScripts } = page.blocks;

      const freeGroup = freeScripts && AssetGroup.instanceFromJsonData(freeScripts);
      const proGroup = proScripts && AssetGroup.instanceFromJsonData(proScripts);

      if (freeGroup) {
        assets.push(freeGroup);
      }
      if (proGroup) {
        assets.push(proGroup);
      }
    }

    const aggregator = new AssetAggregator(assets);
    const assetList = aggregator.getAssetList();

    let score = 0;

    assetList.forEach((asset) => {
      const currentScore = asset.getScore();
      expect(currentScore).toBeGreaterThanOrEqual(score);
      score = currentScore;
    });
  });

  test("Testing if assets are not duplicated", () => {
    const assets: AssetGroup[] = [];

    for (const page of pages) {
      const { freeScripts, proScripts, freeStyles, proStyles } = page.blocks;
      const freeScriptsGroup = freeScripts && AssetGroup.instanceFromJsonData(freeScripts);
      const proScriptsGroup = proScripts && AssetGroup.instanceFromJsonData(proScripts);
      const freeStylesGroup = freeStyles && AssetGroup.instanceFromJsonData(freeStyles);
      const proStylesGroup = proStyles && AssetGroup.instanceFromJsonData(proStyles);
      if (freeScriptsGroup) {
        assets.push(freeScriptsGroup);

        // Duplicate some assets
        assets.push(freeScriptsGroup);
      }
      if (proScriptsGroup) {
        assets.push(proScriptsGroup);
      }
      if (freeStylesGroup) {
        assets.push(freeStylesGroup);
      }
      if (proStylesGroup) {
        assets.push(proStylesGroup);

        // Duplicate some assets
        assets.push(proStylesGroup);
      }
    }
    const scriptAggregator = new AssetAggregator(assets);
    const assetList = scriptAggregator.getAssetList();

    // Deduplication is based on the full asset identity (name + type + content + url + attrs),
    // not name alone — e.g. "main.base.min.css" and "main.base.pro.min.css" share the name "main"
    // but are distinct assets. Build a composite key that mirrors the isIdenticalAsset logic.
    const assetKeys = assetList.map((asset) => {
      const attrs = asset.getAttrs();
      const attrsKey = Object.keys(attrs)
        .sort()
        .map((k) => `${k}=${attrs[k]}`)
        .join(",");

      return `${asset.getName()}|${asset.getType()}|${asset.getContent()}|${asset.getUrl()}|${attrsKey}`;
    });

    const uniqueKeys = [...new Set(assetKeys)];

    expect(assetKeys).toEqual(uniqueKeys);
  });
});
