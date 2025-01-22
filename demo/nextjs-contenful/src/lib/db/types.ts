interface Seo {
  title: string;
  description: string;
  searchVisibility: boolean;
}

interface Sharing {
  title: string;
  description: string;
  preserveSeoTitle: boolean;
  preserveSeoDescription: boolean;
}

interface Code {
  customCss: string;
  codeInjectionFooter: string;
  codeInjectionHeader: string;
}

export interface ProjectSettings {
  seo: Seo;
  sharing: Sharing;
  code: Code;
}

export interface Project {
  id: string;
  data: string;
  settings?: string;
}

export interface Item {
  _id: string;
  title: string;
  slug: {
    collection: string;
    item: string;
  };
  config?: {
    hasPreview?: boolean;
    deletable?: boolean;
    showInMenu?: boolean;
  };
  data?: string;
  createdAt?: string;
}

export enum CollectionTypes {
  system = "system",
  page = "page",
  popup = "popup",
  story = "story",
  menu = "menu",
  header = "header",
  footer = "footer",
  blog = "blog",
}

export type CollectionTypeValue = (typeof CollectionTypes)[keyof typeof CollectionTypes];

export interface Slug {
  collection: CollectionTypeValue;
  item: string;
}
