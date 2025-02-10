import { AssetAggregator } from "../AssetAggregator";
import { AssetGroup } from "../assets/AssetGroup";
import page from "./data/page.json";

describe("Testing AssetAggregator", () => {
  test("Testing if score of assets is sorted ascending", () => {
    const assets = [];
    const { freeScripts, proScripts } = page.blocks;

    const freeGroup = AssetGroup.instanceFromJsonData(freeScripts);
    const proGroup = AssetGroup.instanceFromJsonData(proScripts);

    assets.push(freeGroup, proGroup);

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
    const assets = [];
    const { freeScripts, proScripts, freeStyles, proStyles } = page.blocks;

    const freeScriptsGroup = AssetGroup.instanceFromJsonData(freeScripts);
    const proScriptsGroup = AssetGroup.instanceFromJsonData(proScripts);
    const freeStylesGroup = AssetGroup.instanceFromJsonData(freeStyles);
    const proStylesGroup = AssetGroup.instanceFromJsonData(proStyles);

    assets.push(
      freeScriptsGroup,
      proScriptsGroup,
      freeStylesGroup,
      proStylesGroup,
      freeScriptsGroup,
      freeScriptsGroup,
      proScriptsGroup,
    );

    const scriptAggregator = new AssetAggregator(assets);
    const assetList = scriptAggregator.getAssetList();

    const assetIds = assetList.map((asset) => asset.getName());
    const uniqueIds = [...new Set(assetIds)];

    expect(assetIds).toEqual(uniqueIds);
  });
});
