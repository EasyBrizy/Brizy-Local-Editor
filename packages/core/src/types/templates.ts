import { Literal } from "@/utils/types";
import { Response } from "./common";

interface DefaultTemplate<T1> {
  label?: string;
  getMeta: (res: Response<T1>, rej: Response<string>) => void;
}
export interface Block {
  id: string;
  cat: Array<Literal>;
  title: string;
  keywords: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  type: Literal;
  blank?: string;
  position?: number;
  pro?: boolean;
  kitId: string;
}

export interface Categories {
  id: Literal;
  slug: string;
  title: string;
  hidden?: boolean;
}
interface Palette {
  id: string;
  hex: string;
}

type fontSizeUnits = "px" | "%";

interface FontStyle {
  id: Literal;
  title: string;
  deletable: "on" | "off";
  fontFamily: string;
  fontFamilyType: string;
  fontSize: number;
  fontSizeSuffix?: fontSizeUnits;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
  mobileFontSize: number;
  mobileFontSizeSuffix?: fontSizeUnits;
  mobileFontWeight: number;
  mobileLetterSpacing: number;
  mobileLineHeight: number;
  tabletFontSize: number;
  tabletFontSizeSuffix?: fontSizeUnits;
  tabletFontWeight: number;
  tabletLetterSpacing: number;
  tabletLineHeight: number;
}
export interface Style {
  id: string;
  title: string;
  colorPalette: Array<Palette>;
  fontStyles: Array<FontStyle>;
}

//#region DefaultKits
export interface BlockWithThumbs extends Block {
  thumbnailSrc: string;
}

export interface Categories {
  id: Literal;
  slug: string;
  title: string;
  hidden?: boolean;
}

export type Kit = {
  categories: string;
  pro: string;
  theme: string;
  slug: string;
  thumbnail: string;
  keywords: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  blank?: string;
};

export interface Kits {
  blocks: Array<Block>;
  categories: Array<Categories>;
  id: string;
  name: string;
  styles: Array<Style>;
  types: Array<Record<string, unknown>>;
}

export interface BlockWithThumbs extends Block {
  thumbnailSrc: string;
}
export interface KitsWithThumbs extends Omit<Kits, "blocks"> {
  blocks: Array<BlockWithThumbs>;
}

export type KitType = {
  title: string;
  id: string;
  name: string;
  icon: string;
};

export type KitItem = {
  id: string;
  title: string;
};

export interface DefaultKits {
  label?: string;
  getKits: (res: Response<Array<KitItem>>, rej: Response<string>) => void;
  getMeta: (res: Response<KitsWithThumbs>, rej: Response<string>, kit: KitItem) => void;
  getData: (res: Response<Record<string, unknown>>, rej: Response<string>, id: KitItem) => void;
}

export interface KitDataItems {
  items: Array<DefaultBlock>;
}
//#endregion

//#region DefaultPopups
export interface PopupBlock {
  id: string;
  cat: Array<Literal>;
  title: string;
  keywords: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  type: Array<Literal>;
  blank?: string;
  position?: number;
  pro?: boolean;
}

export interface DefaultBlockWithID extends DefaultBlock {
  blockId: string;
}

export interface DefaultBlock {
  type: string;
  value: Record<string, unknown>;
}

export interface PopupBlockWithThumbs extends PopupBlock {
  thumbnailSrc: string;
}

export type APIPopup = {
  id: string;
  categories: string;
  blank?: string;
  order: number;
  pro: string;
  thumbnail: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  title: string;
};

export type PopupDataResult = Array<{
  pageData: string;
}>;

type PopupCategoryId = Symbol;

interface PopupCategory {
  id: PopupCategoryId;
  slug: string;
  title: string;
}

export interface Popup {
  blocks: Array<PopupBlock>;
  categories: Array<PopupCategory>;
}

export interface DefaultPopups extends DefaultTemplate<Popup> {
  getData: (res: Response<DefaultBlockWithID>, rej: Response<string>, kit: KitItem) => void;
}

//#endregion

//#region DefaultLayouts

type LayoutCategoryId = Symbol;

export interface Page {
  id: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailSrc: string;
  title: string;
  keywords: string; // used for search example "home, details, menu, reservation, food, lunch"
  cat: Array<LayoutCategoryId>;
}

interface Layout {
  name: string;
  color: string; // example "#FF7102"
  cat: Array<LayoutCategoryId>;
  pages: Array<Page>;
  styles: Record<string, unknown>; // The global styles
}

export interface Template {
  templates: Array<Layout>;
  categories: Array<Categories>;
}

export interface DefaultLayouts extends DefaultTemplate<Template> {
  getData: (
    res: Response<Record<string, unknown>>,
    rej: Response<string>,
    page: { id: string; layoutId: string },
  ) => void;
}

//#endregion

//#region DefaultStories

type StoryCategoryId = Symbol;

interface StoryPage {
  id: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailSrc: string;
  title: string;
  keywords: string; // used for search example "home, details, menu, reservation, food, lunch"
  cat: Array<StoryCategoryId>;
}

interface Story {
  name: string;
  color: string; // example "#FF7102"
  cat: Array<StoryCategoryId>;
  pages: Array<StoryPage>;
  styles: Record<string, unknown>; // The global styles
}

interface StoryCategory {
  id: StoryCategoryId;
  title: string;
}

export interface StoryTemplate {
  stories: Array<Story>;
  categories: Array<StoryCategory>;
}

export interface DefaultStories extends DefaultTemplate<StoryTemplate> {
  getData: (res: Response<Record<string, unknown>>, rej: Response<string>, id: string) => void;
}

//#endregion
