import type { UniqueIdentifier } from "@dnd-kit/core";
import type { MutableRefObject } from "react";

export interface BaseTreeItem {
  id: UniqueIdentifier;
  children: TreeItems;
  name: string;
  collapsed?: boolean;
}

export interface TreeItem extends BaseTreeItem {
  title: string;
  slug: string;
  url: string;
}

export type TreeItems = TreeItem[];

export interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}
