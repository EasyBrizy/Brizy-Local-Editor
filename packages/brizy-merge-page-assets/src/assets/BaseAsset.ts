import { v4 as uuid } from "uuid";
import { Asset, AssetType, isAssetCodeContent, isAssetFileContent } from "./types";

export class BaseAsset {
  static TYPE_INLINE = AssetType.Inline;
  static TYPE_CODE = AssetType.Code;
  static TYPE_FILE = AssetType.File;

  protected uid: string;
  protected name: string;
  protected score: number;
  protected type: AssetType;
  protected content: string | null = null;
  protected url: string | null = null;
  protected attrs: Record<string, string> = {};
  protected pro: boolean;

  constructor(asset: Asset) {
    const { name, score, content, pro } = asset;
    const { type } = content;

    this.uid = uuid();
    this.name = name;
    this.score = score;
    this.type = type;
    this.pro = pro;

    if (isAssetFileContent(content)) {
      this.url = content.url;
    } else {
      this.content = content.content;
    }

    if (!isAssetCodeContent(content) && content.attr) {
      this.attrs = content.attr;
    }
  }

  getUid(): string {
    return this.uid;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  getScore(): number {
    return this.score;
  }

  setScore(score: number): this {
    this.score = score;
    return this;
  }

  getContent(): string | null {
    return this.content;
  }

  setContent(content: string | null): this {
    if (content) {
      this.content = content;
    }
    return this;
  }

  isPro(): boolean {
    return this.pro;
  }

  setPro(pro: boolean): this {
    this.pro = pro;
    return this;
  }

  getType(): AssetType {
    return this.type;
  }

  setType(type: AssetType): this {
    this.type = type;
    return this;
  }

  getUrl(): string | null {
    return this.url;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  getAttrs(): Record<string, unknown> {
    return this.attrs;
  }

  setAttrs(attrs: Record<string, string>): this {
    this.attrs = attrs;
    return this;
  }
}
