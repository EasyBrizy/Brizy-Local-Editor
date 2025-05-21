import { AssetLib } from "../assets/AssetLib";
import { AssetLibsMap, AssetType } from "../assets/types";

const assets: AssetLibsMap[] = [
  {
    name: "main",
    score: 10,
    content: {
      content: "content",
      type: AssetType.Code,
    },
    pro: false,
    selectors: ["selector1", "selector2"],
  },
  {
    name: "secondary",
    score: 20,
    content: {
      content: "content2",
      type: AssetType.Inline,
    },
    pro: true,
    selectors: ["selector2", "selector4"],
  },
  {
    name: "third",
    score: 30,
    content: {
      type: AssetType.File,
      url: "http://localhost:8080/file.css",
    },
    pro: true,
    selectors: ["selector1", "selector4"],
  },
];

test.each(assets)("Test AssetLib instanceFromJsonData", (data) => {
  const asset = new AssetLib(data);

  expect(asset.getName()).toBe(data.name);
  expect(asset.getScore()).toBe(data.score);
  expect(asset.isPro()).toBe(data.pro);
  expect(asset.getSelectors()).toStrictEqual(data.selectors);
});
