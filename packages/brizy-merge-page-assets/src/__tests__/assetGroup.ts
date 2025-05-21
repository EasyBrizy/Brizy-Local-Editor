import { AssetFont } from "../assets/AssetFont";
import { AssetGroup } from "../assets/AssetGroup";
import { AssetLib } from "../assets/AssetLib";
import { BaseAsset } from "../assets/BaseAsset";
import page from "./data/page.json";

test("Test AssetGroup instanceFromJsonData", () => {
  const data = page.blocks.freeStyles;
  const asset = AssetGroup.instanceFromJsonData(data);
  const { libsSelectors, pageFonts, pageStyles } = data;

  expect(asset.getMain()).toBeInstanceOf(BaseAsset);

  asset.getGeneric().forEach((item) => {
    expect(item).toBeInstanceOf(BaseAsset);
  });

  asset.getLibsMap().forEach((item) => {
    expect(item).toBeInstanceOf(AssetLib);
  });

  expect(asset.getLibsSelectors()).toEqual(libsSelectors);

  if (pageFonts) {
    asset.getPageFonts().forEach((item) => {
      expect(item).toBeInstanceOf(AssetFont);
    });
  }

  if (pageStyles) {
    asset.getPageStyles().forEach((item) => {
      expect(item).toBeInstanceOf(BaseAsset);
    });
  }
});
