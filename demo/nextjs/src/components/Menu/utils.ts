import { BaseTreeItem, FlattenedItem, TreeItem, TreeItems } from "@/components/Menu/types";
import { DragOverEvent, DropAnimation, Over, UniqueIdentifier, defaultDropAnimation } from "@dnd-kit/core";
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
  const root = { id: "root", children: [] };
  const nodes: Record<UniqueIdentifier, BaseTreeItem | TreeItem> = { [root.id]: root };
  const items = flattenedItems.map((item) => ({ ...item, children: [] }));

  for (const item of items) {
    const { id, children, ...rest } = item;
    const parentId = item.parentId ?? root.id;
    const parent = nodes[parentId] ?? findItem(items, parentId);

    nodes[id] = { id, children, ...rest };
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

export interface MenuState {
  activeId: UniqueIdentifier | null;
  overId: UniqueIdentifier | null;
  offsetLeft: number;
  items: TreeItems;
  saveState: APIActionStateType;
}

export enum MenuActions {
  setActiveId = "SET_ACTIVE_ID",
  setOverId = "SET_OVER_ID",
  setOffsetLeft = "SET_OFFSET_LEFT",
  dragStart = "DRAG_START",
  dragEnd = "DRAG_END",
  resetDragState = "RESET_DRAG_STATE",
  setSaveState = "SAVE_STATE",
  addMenuItem = "ADD_MENU_ITEM",
  removeMenuItem = "REMOVE_MENU_ITEM",
}

export enum APIActionState {
  idle = "idle",
  loading = "loading",
  success = "success",
  error = "error",
}

export type APIActionStateType = keyof typeof APIActionState;

type MenuAction =
  | { type: MenuActions.setSaveState; payload: APIActionStateType }
  | { type: MenuActions.resetDragState }
  | { type: MenuActions.setOffsetLeft; payload: number }
  | { type: MenuActions.addMenuItem; payload: TreeItem }
  | { type: MenuActions.removeMenuItem; payload: UniqueIdentifier }
  | { type: MenuActions.dragStart; payload: { activeId: UniqueIdentifier; overId: UniqueIdentifier } }
  | { type: MenuActions.dragEnd; payload: TreeItems }
  | { type: MenuActions.setOverId; payload: DragOverEvent["over"] };

export function menuReducer(state: MenuState, action: MenuAction) {
  switch (action.type) {
    case MenuActions.dragStart:
      return { ...state, activeId: action.payload.activeId, overId: action.payload.overId };
    case MenuActions.dragEnd:
      return { ...state, items: action.payload };
    case MenuActions.setOverId:
      const overId = action.payload?.id ?? null;
      return { ...state, overId };
    case MenuActions.setOffsetLeft:
      return { ...state, offsetLeft: action.payload };

    case MenuActions.resetDragState:
      return { ...state, activeId: null, overId: null, offsetLeft: 0, saveState: APIActionState.idle };
    case MenuActions.setSaveState:
      return { ...state, saveState: action.payload };
    case MenuActions.addMenuItem:
      const id = crypto.randomUUID();
      const item = { ...action.payload, id };
      return { ...state, items: [...state.items, item], saveState: APIActionState.idle };
    case MenuActions.removeMenuItem:
      const items = removeItem(state.items, action.payload);
      return { ...state, items, saveState: APIActionState.idle };

    default:
      return state;
  }
}
