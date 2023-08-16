import { Response } from "./common";

interface DefaultTemplate<T1, T2> {
  label?: string;
  getMeta: (res: Response<T1>, rej: Response<string>) => void;
  getData: (res: Response<T2>, rej: Response<string>, blockId: string) => void;
}

//#region DefaultKits

type KitTypeID = Symbol;
type KitCategoryID = Symbol;

interface KitBlock {
  id: string;
  title: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailSrc: string;
  type: KitTypeID;
  cat: Array<KitCategoryID>;
}

interface KitType {
  id: KitTypeID;
  name: string;
  title: string;
  icon: string;
}

interface KitCategory {
  id: KitCategoryID;
  slug: string;
  title: string;
}

export interface Kit {
  id: string;
  name: string;
  blocks: Array<KitBlock>;
  types: Array<KitType>;
  categories: Array<KitCategory>;
}

export type DefaultKits = DefaultTemplate<Array<Kit>, Record<string, unknown>>;

//#endregion

//#region DefaultPopups

type PopupCategoryId = Symbol;

interface PopupBlock {
  id: string;
  cat: Array<PopupCategoryId>;
  title: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailSrc: string;
}

interface PopupCategory {
  id: PopupCategoryId;
  slug: string;
  title: string;
}

export interface Popup {
  blocks: Array<PopupBlock>;
  categories: Array<PopupCategory>;
}

export type DefaultPopups = DefaultTemplate<Popup, Record<string, unknown>>;

//#endregion

//#region DefaultLayouts

type LayoutCategoryId = Symbol;

interface Page {
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

interface LayoutCategory {
  id: LayoutCategoryId;
  title: string;
}

export interface Template {
  templates: Array<Layout>;
  categories: Array<LayoutCategory>;
}

export type DefaultLayouts = DefaultTemplate<Template, Record<string, unknown>>;

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

export type DefaultStories = DefaultTemplate<StoryTemplate, Record<string, unknown>>;

//#endregion
