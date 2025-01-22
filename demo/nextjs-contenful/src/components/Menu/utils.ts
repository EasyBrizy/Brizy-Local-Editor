import { BaseTreeItem, FlattenedItem, TreeItem, TreeItems } from "@/components/Menu/types";
import { DropAnimation, UniqueIdentifier, defaultDropAnimation } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function getDragDepth(offset: number, indentationWidth: number) {
  return Math.round(offset / indentationWidth);
}

export function getProjection(
  items: FlattenedItem[],
  activeId: UniqueIdentifier,
  overId: UniqueIdentifier,
  dragOffset: number,
  indentationWidth: number,
) {
  const overItemIndex = items.findIndex(({ id }) => id === overId);
  const activeItemIndex = items.findIndex(({ id }) => id === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = getDragDepth(dragOffset, indentationWidth);
  const projectedDepth = activeItem.depth + dragDepth;
  const maxDepth = getMaxDepth({
    previousItem,
  });
  const minDepth = getMinDepth({ nextItem });
  let depth = projectedDepth;

  if (projectedDepth >= maxDepth) {
    depth = maxDepth;
  } else if (projectedDepth < minDepth) {
    depth = minDepth;
  }

  return { depth, maxDepth, minDepth, parentId: getParentId() };

  function getParentId() {
    if (depth === 0 || !previousItem) {
      return null;
    }

    if (depth === previousItem.depth) {
      return previousItem.parentId;
    }

    if (depth > previousItem.depth) {
      return previousItem.id;
    }

    const newParent = newItems
      .slice(0, overItemIndex)
      .reverse()
      .find((item) => item.depth === depth)?.parentId;

    return newParent ?? null;
  }
}

function flatten(items: TreeItems, parentId: UniqueIdentifier | null = null, depth = 0): FlattenedItem[] {
  return items.reduce<FlattenedItem[]>((acc, item, index) => {
    return [...acc, { ...item, parentId, depth, index }, ...flatten(item.children, item.id, depth + 1)];
  }, []);
}

export function flattenTree(items: TreeItems): FlattenedItem[] {
  return flatten(items);
}

function getMaxDepth({ previousItem }: { previousItem: FlattenedItem }) {
  if (previousItem) {
    return previousItem.depth + 1;
  }

  return 0;
}

function getMinDepth({ nextItem }: { nextItem: FlattenedItem }) {
  if (nextItem) {
    return nextItem.depth;
  }

  return 0;
}

export function removeChildrenOf(items: FlattenedItem[], ids: UniqueIdentifier[]) {
  const excludeParentIds = [...ids];

  return items.filter((item) => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.children.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }
    return true;
  });
}

export function buildTree(flattenedItems: FlattenedItem[]): TreeItems {
  const root = { id: "root", children: [], name: "Root Item" };
  const nodes: Record<UniqueIdentifier, BaseTreeItem | TreeItem> = { [root.id]: root };
  const items = flattenedItems.map((item) => ({ ...item, children: [] }));

  for (const item of items) {
    const { id, children, name } = item;
    const parentId = item.parentId ?? root.id;
    const parent = nodes[parentId] ?? findItem(items, parentId);

    nodes[id] = { id, children, name };
    parent.children.push(item);
  }

  return root.children;
}

export function findItem(items: TreeItem[], itemId: UniqueIdentifier) {
  return items.find(({ id }) => id === itemId);
}

export function removeItem(items: TreeItems, id: UniqueIdentifier) {
  const newItems = [];

  for (const item of items) {
    if (item.id === id) {
      continue;
    }

    if (item.children.length) {
      item.children = removeItem(item.children, id);
    }

    newItems.push(item);
  }

  return newItems;
}

export function getChildCount(items: TreeItems, id: UniqueIdentifier) {
  const item = findItemDeep(items, id);

  return item ? countChildren(item.children) : 0;
}

function findItemDeep(items: TreeItems, itemId: UniqueIdentifier): TreeItem | undefined {
  for (const item of items) {
    const { id, children } = item;

    if (id === itemId) {
      return item;
    }

    if (children.length) {
      const child = findItemDeep(children, itemId);

      if (child) {
        return child;
      }
    }
  }

  return undefined;
}

function countChildren(items: TreeItem[], count = 0): number {
  return items.reduce((acc, { children }) => {
    if (children.length) {
      return countChildren(children, acc + 1);
    }

    return acc + 1;
  }, count);
}

export const dropAnimationConfig: DropAnimation = {
  keyframes({ transform }) {
    return [
      { opacity: 1, transform: CSS.Transform.toString(transform.initial) },
      {
        opacity: 0,
        transform: CSS.Transform.toString({
          ...transform.final,
          x: transform.final.x + 5,
          y: transform.final.y + 5,
        }),
      },
    ];
  },
  easing: "ease-out",
  sideEffects({ active }) {
    active.node.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: defaultDropAnimation.duration,
      easing: defaultDropAnimation.easing,
    });
  },
};

export enum MenuActions {
  setActiveId = "SET_ACTIVE_ID",
  setOverId = "SET_OVER_ID",
  setOffsetLeft = "SET_OFFSET_LEFT",
  dragStart = "DRAG_START",
  resetDragState = "RESET_DRAG_STATE",
  setItems = "SET_ITEMS",
}
type MenuAction =
  | { type: MenuActions.resetDragState }
  | { type: MenuActions.setOffsetLeft; payload: number }
  | { type: MenuActions.setItems; payload: TreeItems }
  | { type: MenuActions.dragStart; payload: { activeId: UniqueIdentifier; overId: UniqueIdentifier } }
  | {
      type: MenuActions.setActiveId | MenuActions.setOverId;
      payload: UniqueIdentifier | null;
    };

export interface MenuState {
  activeId: UniqueIdentifier | null;
  overId: UniqueIdentifier | null;
  offsetLeft: number;
  items: TreeItems;
}

export function menuReducer(state: MenuState, action: MenuAction) {
  switch (action.type) {
    case MenuActions.dragStart:
      return { ...state, activeId: action.payload.activeId, overId: action.payload.overId };
    case MenuActions.setActiveId:
      return { ...state, activeId: action.payload };
    case MenuActions.setOverId:
      return { ...state, overId: action.payload };
    case MenuActions.setOffsetLeft:
      return { ...state, offsetLeft: action.payload };
    case MenuActions.setItems:
      return { ...state, items: action.payload };
    case MenuActions.resetDragState:
      return { ...state, activeId: null, overId: null, offsetLeft: 0 };
    default:
      return state;
  }
}
