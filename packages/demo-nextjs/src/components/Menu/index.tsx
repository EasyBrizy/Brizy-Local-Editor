"use client";

import { SortableMenuItem } from "@/components/Menu/item";
import { FlattenedItem, TreeItem, TreeItems } from "@/components/Menu/types";
import {
  buildTree,
  flattenTree,
  getProjection,
  removeChildrenOf,
  removeItem,
  setProperty,
} from "@/components/Menu/utils";
import { KTIcon } from "@/components/Metronic/helpers";
import Root from "@/components/Metronic/layout/Root";
import { Content } from "@/components/Metronic/layout/components/content";
import { PageTitle } from "@/components/Metronic/layout/core";
import { getMenu, updateMenu } from "@/lib/admin";
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  defaultDropAnimation,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const dropAnimationConfig: DropAnimation = {
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

export function Menu(props: {
  items: TreeItems;
  indentationWidth?: number;
  collapsible?: boolean;
  removable?: boolean;
  updateMenu?: (menu: TreeItems) => Promise<void>;
  getMenu?: () => Promise<TreeItems>;
  allItems: TreeItems;
}) {
  const indentationWidth = 50;
  const collapsible = true;
  const removable = true;

  const [items, setItems] = useState(() => {
    return props.items;
  });
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [currentPosition, setCurrentPosition] = useState<{
    parentId: UniqueIdentifier | null;
    overId: UniqueIdentifier;
  } | null>(null);

  const flattenedItems = useMemo(() => {
    if (!Array.isArray(items)) {
      return [];
    }
    // console.log("ITEMS: useMemo ", items);

    const flattenedTree = flattenTree(items);
    const collapsedItems = flattenedTree.reduce<string[]>(
      (acc, { children, collapsed, id }) => (collapsed && children.length ? [...acc, id] : acc),
      [],
    );

    return removeChildrenOf(flattenedTree, activeId ? [activeId, ...collapsedItems] : collapsedItems);
  }, [activeId, items]);

  const projected =
    activeId && overId ? getProjection(flattenedItems, activeId, overId, offsetLeft, indentationWidth) : null;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  console.log("All Items:", props.allItems);
  const activeItem = activeId ? items.find(({ id }) => id === activeId) : null;
  console.log("state items:", items);

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
      onDragOver={handleDragOver}
      onDragCancel={handleDragCancel}
      collisionDetection={closestCenter}
      sensors={sensors}
    >
      <div className="row">
        <div className="col-md-3 card bg-light">
          <ul className="card-body">
            <h2 className="fs-1 text-gray-800 w-bolder mb-6">All pages:</h2>
            {props.allItems?.map((item) => {
              return (
                <li key={item.id} className="d-flex align-items-center mb-5">
                  <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">{item.name}</span>
                  <button
                    onClick={() => handleAddMenuItem(item)}
                    className="badge badge-circle badge-secondary cursor-pointer"
                  >
                    <KTIcon iconName="plus" className="fs-3" iconType="duotone" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-md-5">
          {items && (
            <SortableContext items={items}>
              {flattenedItems.map(({ id, name, children, collapsed, depth }) => {
                return (
                  <SortableMenuItem
                    key={id}
                    id={id}
                    depth={id === activeId && projected ? projected.depth : depth}
                    indentationWidth={indentationWidth}
                    value={name}
                    collapsed={Boolean(collapsed && children.length)}
                    onCollapse={collapsible && children.length ? () => handleCollapse(id) : undefined}
                    onRemove={removable ? () => handleRemove(id) : undefined}
                  />
                );
              })}
              {createPortal(
                <DragOverlay dropAnimation={dropAnimationConfig}>
                  {activeId && activeItem ? (
                    <SortableMenuItem
                      clone
                      id={activeId}
                      depth={activeItem.depth}
                      key={activeId}
                      value={items[activeId]?.name}
                    />
                  ) : null}
                </DragOverlay>,
                document.body,
              )}
            </SortableContext>
          )}

          <div>
            <button
              type="button"
              className="btn btn-warning"
              onClick={async () => {
                try {
                  const items = await getMenu().then((r) => JSON.parse(r));
                  if (items.length > 0) {
                    setItems(() => items);
                  }
                  console.log("Menu items:", items);
                } catch (e) {
                  console.log("error to get menu: ", e);
                }
              }}
            >
              Get Menu from DB
            </button>

            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={async () => {
                await updateMenu(items);
              }}
            >
              Save Menu
            </button>
          </div>
        </div>
      </div>
    </DndContext>
  );

  async function handleAddMenuItem(_item: TreeItem) {
    const id = crypto.randomUUID();
    const item = { ..._item, id };
    const newitems = [...items, item];
    setItems(newitems);
    await updateMenu(newitems);
  }

  function handleDragStart({ active: { id: activeId } }: DragStartEvent) {
    setActiveId(activeId);
    setOverId(activeId);

    const activeItem = items.find(({ id }) => id === activeId);

    if (activeItem) {
      setCurrentPosition({
        parentId: activeItem.parentId,
        overId: activeId,
      });
    }
    document.body.style.setProperty("cursor", "grabbing");
  }
  function handleDragMove({ delta }: DragMoveEvent) {
    setOffsetLeft(delta.x);
  }

  function handleDragOver({ over }: DragOverEvent) {
    setOverId(over?.id ?? null);
  }

  async function handleDragEnd({ active, over }: DragEndEvent) {
    resetState();

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: FlattenedItem[] = JSON.parse(JSON.stringify(flattenTree(items)));
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);
      setItems(newItems);
      await updateMenu(newItems);
    }
  }

  function handleDragCancel() {
    resetState();
  }

  async function handleRemove(id: UniqueIdentifier) {
    const newItems = removeItem(items, id);
    setItems(newItems);
    await updateMenu(newItems);
  }

  function resetState() {
    setOverId(null);
    setActiveId(null);
    setOffsetLeft(0);
    setCurrentPosition(null);

    document.body.style.setProperty("cursor", "");
  }

  function handleCollapse(id: UniqueIdentifier) {
    setItems((items) =>
      setProperty(items, id, "collapsed", (value) => {
        return !value;
      }),
    );
  }
}
