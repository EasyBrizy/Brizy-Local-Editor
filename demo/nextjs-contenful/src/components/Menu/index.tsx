"use client";

import { Pages } from "@/components/Menu/components/Pages";
import { SortableMenuItem } from "@/components/Menu/item";
import { FlattenedItem, TreeItem, TreeItems } from "@/components/Menu/types";
import {
  MenuActions,
  buildTree,
  dropAnimationConfig,
  flattenTree,
  getChildCount,
  getProjection,
  menuReducer,
  removeChildrenOf,
  removeItem,
} from "@/components/Menu/utils";
import MenuItemOverlay from "@/components/modals/MenuItemOverlay";
import { updateMenu } from "@/lib/admin";
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

interface Props {
  items: TreeItems;
  updateMenu?: (menu: TreeItems) => Promise<void>;
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
  });

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

      <div className="col-md-6 card ">
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
                {flattenedItems.map(({ id, name, children, collapsed, depth }) => {
                  return (
                    <SortableMenuItem
                      key={id}
                      id={id}
                      depth={id === state.activeId && projected ? projected.depth : depth}
                      indentationWidth={indentationWidth}
                      value={name}
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
                        value={activeItem.name}
                        childCount={getChildCount(state.items, state.activeId) + 1}
                        indentationWidth={indentationWidth}
                      />
                    ) : null}
                  </DragOverlay>
                </MenuItemOverlay>
              </SortableContext>
            </DndContext>
          )}
        </div>
      </div>
    </div>
  );

  async function handleAddMenuItem(_item: TreeItem) {
    const id = crypto.randomUUID();
    const item = { ..._item, id };
    const newItems = [...state.items, item];
    dispatch({ type: MenuActions.setItems, payload: newItems });

    try {
      await updateMenu(newItems);
    } catch (e) {
      console.error("Update Menu: " + e);
    }
  }

  function handleDragStart({ active: { id: activeId } }: DragStartEvent) {
    dispatch({ type: MenuActions.dragStart, payload: { activeId, overId: activeId } });

    document.body.style.setProperty("cursor", "grabbing");
  }

  function handleDragMove({ delta }: DragMoveEvent) {
    dispatch({ type: MenuActions.setOffsetLeft, payload: delta.x });
  }

  function handleDragOver(props: DragOverEvent) {
    const { over } = props;
    dispatch({ type: MenuActions.setOverId, payload: over?.id ?? null });
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

      dispatch({ type: MenuActions.setItems, payload: newItems });

      try {
        await updateMenu(newItems);
      } catch (e) {
        console.error("Update Menu: " + e);
      }
    }
  }

  function handleDragCancel() {
    resetState();
  }

  async function handleRemove(id: UniqueIdentifier) {
    const newItems = removeItem(state.items, id);

    dispatch({ type: MenuActions.setItems, payload: newItems });

    try {
      await updateMenu(newItems);
    } catch (e) {
      console.error("Update Menu: " + e);
    }
  }

  function resetState() {
    dispatch({ type: MenuActions.resetDragState });

    document.body.style.setProperty("cursor", "");
  }
}
