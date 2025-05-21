import { Asset, AssetFonts, AssetLibsMap } from "@/types/common";
import { Str } from "@brizy/readers";
import { merge } from "es-toolkit";
import { mergeGoogleFont } from "./mergeGoogleFont";

export const mergeArrayAsset = (
  asset: string | Asset | AssetLibsMap | AssetFonts,
  simpleAsset: Set<string>,
  recordAsset: Map<string, AssetFonts | Asset>,
): void => {
  if (Str.is(asset)) {
    simpleAsset.add(asset);
    return;
  }

  if ("type" in asset) {
    switch (asset.type) {
      case "google-font": {
        const oldFont = recordAsset.get(asset.name);

        if (oldFont && "url" in oldFont.content) {
          const font = merge(asset, {
            content: {
              url: mergeGoogleFont(asset.content.url, oldFont.content.url),
            },
          });
          recordAsset.set(asset.name, font);
        } else {
          recordAsset.set(asset.name, asset);
        }
        break;
      }
      case "uploaded-font": {
        break;
      }
      case "adobe-font": {
        break;
      }
    }

    return;
  }

  recordAsset.set(asset.name, asset);
};
