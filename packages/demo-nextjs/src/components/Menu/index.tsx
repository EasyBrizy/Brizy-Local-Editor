"use client";

import { Pages } from "@/components/Menu/components/Pages";
import { SaveButton } from "@/components/Menu/components/SaveButton";
import { SortableMenuItem } from "@/components/Menu/item";
import { FlattenedItem, TreeItem, TreeItems } from "@/components/Menu/types";
import {
  APIActionState,
  MenuActions,
  buildTree,
  dropAnimationConfig,
  flattenTree,
  getChildCount,
  getProjection,
  menuReducer,
  removeChildrenOf,
} from "@/components/Menu/utils";
import MenuItemOverlay from "@/components/modals/MenuItemOverlay";
import { updateMenu } from "@/lib/admin";
import type { Item } from "@/lib/db/types";
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import React, { useMemo, useReducer } from "react";
import type { Props as SaveButtonProps } from "./components/SaveButton/SaveButton";

interface Props {
  items: TreeItems;
  updateMenu?: (menu: TreeItems) => Promise<Item>;
  getMenu?: () => Promise<TreeItems>;
  allItems: TreeItems;
}

export function Menu(props: Props) {
  const indentationWidth = 50;
  const removable = true;

  const [state, dispatch] = useReducer(menuReducer, {
    activeId: null,
    overId: null,
    offsetLeft: 0,
    items: props.items,
    saveState: APIActionState.idle,
  });

  const saveButtonType: SaveButtonProps["type"] = useMemo(() => {
    switch (state.saveState) {
      case "success":
        return "success";
      case "error":
        return "error";
      default:
        return "primary";
    }
  }, [state.saveState]);

  const flattenedItems = useMemo(() => {
    if (!Array.isArray(state.items)) {
      return [];
    }

    const flattenedTree = flattenTree(state.items);
    const collapsedItems = flattenedTree.reduce<UniqueIdentifier[]>(
      (acc, { children, collapsed, id }) => (collapsed && children.length ? [...acc, id] : acc),
      [],
    );

    return removeChildrenOf(flattenedTree, state.activeId ? [state.activeId, ...collapsedItems] : collapsedItems);
  }, [state.activeId, state.items]);

  const projected =
    state.activeId && state.overId
      ? getProjection(flattenedItems, state.activeId, state.overId, state.offsetLeft, indentationWidth)
      : null;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const activeItem = state.activeId ? flattenedItems.find(({ id }) => id === state.activeId) : null;

  return (
    <div className="row">
      <Pages items={props.allItems} addMenuItem={handleAddMenuItem} />

      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title fs-1">Menu</h3>
          </div>

          <div className="card-body ">
            {state.items && (
              <DndContext
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragMove={handleDragMove}
                onDragOver={handleDragOver}
                onDragCancel={handleDragCancel}
                collisionDetection={closestCenter}
                sensors={sensors}
              >
                <SortableContext items={state.items}>
                  {flattenedItems.map(({ id, title, children, collapsed, depth }) => {
                    return (
                      <SortableMenuItem
                        key={id}
                        id={id}
                        depth={id === state.activeId && projected ? projected.depth : depth}
                        indentationWidth={indentationWidth}
                        value={title}
                        collapsed={Boolean(collapsed && children.length)}
                        onRemove={removable ? () => handleRemove(id) : undefined}
                      />
                    );
                  })}
                  <MenuItemOverlay>
                    <DragOverlay dropAnimation={dropAnimationConfig}>
                      {state.activeId && activeItem ? (
                        <SortableMenuItem
                          clone
                          id={state.activeId}
                          depth={activeItem.depth}
                          key={state.activeId}
                          value={activeItem.title}
                          childCount={getChildCount(state.items, state.activeId) + 1}
                          indentationWidth={indentationWidth}
                        />
                      ) : null}
                    </DragOverlay>
                  </MenuItemOverlay>
                </SortableContext>
              </DndContext>
            )}
            <SaveButton type={saveButtonType} onClick={handleSaveMenu} loading={state.saveState === "loading"} />
          </div>
        </div>
      </div>
    </div>
  );

  async function handleAddMenuItem(item: TreeItem) {
    dispatch({ type: MenuActions.addMenuItem, payload: item });
  }

  function handleDragStart({ active: { id: activeId } }: DragStartEvent) {
    dispatch({ type: MenuActions.dragStart, payload: { activeId, overId: activeId } });

    document.body.style.setProperty("cursor", "grabbing");
  }

  function handleDragMove({ delta }: DragMoveEvent) {
    dispatch({ type: MenuActions.setOffsetLeft, payload: delta.x });
  }

  function handleDragOver({ over }: DragOverEvent) {
    dispatch({ type: MenuActions.setOverId, payload: over });
  }

  async function handleDragEnd({ active, over }: DragEndEvent) {
    resetState();

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: FlattenedItem[] = JSON.parse(JSON.stringify(flattenTree(state.items)));
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);

      dispatch({ type: MenuActions.dragEnd, payload: newItems });
    }
  }

  function handleDragCancel() {
    resetState();
  }

  async function handleRemove(id: UniqueIdentifier) {
    dispatch({ type: MenuActions.removeMenuItem, payload: id });
  }

  function resetState() {
    dispatch({ type: MenuActions.resetDragState });

    document.body.style.setProperty("cursor", "");
  }

  async function handleSaveMenu() {
    dispatch({ type: MenuActions.setSaveState, payload: APIActionState.loading });
    try {
      const response = await updateMenu(state.items);
      if (response) {
        dispatch({ type: MenuActions.setSaveState, payload: APIActionState.success });
      }
    } catch (e) {
      console.error("Update Menu: " + e);
      dispatch({ type: MenuActions.setSaveState, payload: APIActionState.error });
    }
  }
}
