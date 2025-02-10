import { Arr, Bool, Err, Num, Obj, pipe, Str } from "@brizy/readers";
import { mPipe, parseStrict, pass } from "fp-utilities";
import {
  Asset,
  AssetContent,
  AssetFonts,
  AssetLibsMap,
  FontType,
  isAssetCodeContent,
  isAssetFileContent,
  isAssetInlineContent,
} from "../types";

const readFontType = (data: unknown): FontType | undefined => {
  switch (data) {
    case FontType.GOOGLE:
    case FontType.UPLOADED:
      return data;
  }
};

const readContent = (data: Record<string, unknown>): AssetContent | null => {
  const content = data as unknown as AssetContent;

  if (isAssetFileContent(content) || isAssetCodeContent(content) || isAssetInlineContent(content)) {
    return content;
  }

  return null;
};

const readSelectors = pipe(Obj.readKey("selectors"), Arr.readWithItemReader(Str.read));
const readType = pipe(Obj.read, Obj.readKey("type"), readFontType);

const readAssetData = parseStrict<Record<string, unknown>, Asset>({
  name: pipe(Obj.readKey("name"), Str.read, Err.throwOnNullish("Invalid name")),
  score: pipe(Obj.readKey("score"), Num.read, Err.throwOnNullish("Invalid score")),
  pro: pipe(Obj.readKey("pro"), Bool.read, Err.throwOnNullish("Invalid pro")),
  content: pipe(mPipe(Obj.readKey("content"), Obj.read, readContent), Err.throwOnNullish("Invalid content")),
});

const readAssetLibData = parseStrict<Record<string, unknown>, AssetLibsMap>({
  name: pipe(Obj.readKey("name"), Str.read, Err.throwOnNullish("Invalid name")),
  score: pipe(Obj.readKey("score"), Num.read, Err.throwOnNullish("Invalid score")),
  pro: pipe(Obj.readKey("pro"), Bool.read, Err.throwOnNullish("Invalid pro")),
  content: pipe(mPipe(Obj.readKey("content"), Obj.read, readContent), Err.throwOnNullish("Invalid content")),
  selectors: pipe(readSelectors, Err.throwOnNullish("Invalid selectors")),
});

const readAssetFontsData = parseStrict<Record<string, unknown>, AssetFonts>({
  name: pipe(Obj.readKey("name"), Str.read, Err.throwOnNullish("Invalid name")),
  score: pipe(Obj.readKey("score"), Num.read, Err.throwOnNullish("Invalid score")),
  pro: pipe(Obj.readKey("pro"), Bool.read, Err.throwOnNullish("Invalid pro")),
  content: pipe(
    mPipe(Obj.readKey("content"), Obj.read, readContent, pass(isAssetFileContent)),
    Err.throwOnNullish("Invalid content"),
  ),
  type: pipe(readType, Err.throwOnNullish("Invalid type")),
});

const processAssetData = <T>(data: unknown, readFunction: (data: Record<string, unknown>) => T): T | null => {
  const _data = Obj.read(data);

  if (!_data) {
    return null;
  }

  try {
    return readFunction(_data);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const readAsset = (data: unknown): Asset | null => processAssetData(data, readAssetData);

export const readLibAsset = (data: unknown): AssetLibsMap | null => processAssetData(data, readAssetLibData);

export const readFontAsset = (data: unknown): AssetFonts | null => processAssetData(data, readAssetFontsData);

export const readAssetsArray = <T>(data: unknown, itemReader: (item: unknown) => T | null): T[] => {
  const arr = Arr.readWithItemReader(itemReader)(data);

  if (!arr) {
    return [];
  }

  return arr.filter(Err.isT);
};
