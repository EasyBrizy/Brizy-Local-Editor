import { Scripts, Styles } from "@builder/core/build/es/utils/assetManager/types";
import mongoose from "mongoose";

export enum CollectionTypes {
  system = "system",
  page = "page",
  popup = "popup",
  story = "story",
  menu = "menu",
}
export type CollectionTypeValue = (typeof CollectionTypes)[keyof typeof CollectionTypes];

function isCollectionType(value: unknown): value is CollectionTypes {
  return Object.values(CollectionTypes).includes(value as CollectionTypes);
}

export interface Slug {
  collection: CollectionTypeValue;
  item: string;
}

export interface CompiledData {
  html: string;
  scripts: Array<Scripts>;
  styles: Array<Styles>;
}

export interface ParsedItemData {
  // in future meybe need other keys from item
  status: "publish" | "draft";
  compiled: CompiledData;
}

const ItemSchemaType = {
  slug: {
    item: String,
    collection: String,
  },
  config: {
    hasPreview: Boolean,
  },
  data: {
    type: String,
    required: false,
    trim: true,
  },
} as const;

type Item = typeof ItemSchemaType;
export type ParsedItem = Omit<Item, "data"> & { data: ParsedItemData };

const ItemSchema = new mongoose.Schema(ItemSchemaType, {
  timestamps: true,
});

export interface Project {
  id: string;
  data: {
    styles: Array<Styles>;
  };
}

const ProjectSchema = new mongoose.Schema<Project>(
  {
    id: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// const MenuSchemaType = {
//   data: String,
//   // id: { type: String, required: true },
//   // children: Array,
// };
// export type Menu = typeof MenuSchemaType;
//
// const MenuSchema = new mongoose.Schema(MenuSchemaType);

const Items = mongoose.models.Items || mongoose.model("Items", ItemSchema);
const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
// const Menu = mongoose.models.Menu || mongoose.model("Menu", MenuSchema);

const models = {
  Items,
  Project,
  // Menu,
};

export default models;
