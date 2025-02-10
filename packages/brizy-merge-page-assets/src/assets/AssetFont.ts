import { BaseAsset } from "./BaseAsset";
import { AssetFonts } from "./types";

export class AssetFont extends BaseAsset {
  private fontType: string;

  constructor(data: AssetFonts) {
    const { type, ...asset } = data;
    super(asset);
    this.fontType = type;
  }

  getFontType(): string {
    return this.fontType;
  }

  setFontType(fontType: string): this {
    this.fontType = fontType;
    return this;
  }

  getContentByType() {
    switch (this.getType()) {
      case BaseAsset.TYPE_INLINE:
      case BaseAsset.TYPE_CODE:
        return this.getContent();
      case BaseAsset.TYPE_FILE:
        return this.getUrl();
    }
  }
}
