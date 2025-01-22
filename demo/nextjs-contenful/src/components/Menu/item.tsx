"use client";

import { Handle } from "@/components/Menu/components/Handle";
import { Remove } from "@/components/Menu/components/Remove";
import { UniqueIdentifier } from "@dnd-kit/core";
import { AnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import React, { HTMLAttributes, forwardRef } from "react";
import styles from "./item.module.scss";

export interface ItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: any;
  indicator?: boolean;
  indentationWidth: number;
  value: string;
  onRemove?(): void;
  wrapperRef?(node: HTMLLIElement): void;
}

const MenuItem = forwardRef<HTMLDivElement, ItemProps>(function MenuItem(props, ref) {
  const {
    clone,
    depth,
    wrapperRef,
    indentationWidth,
    disableInteraction,
    disableSelection,
    indicator,
    ghost,
    handleProps,
    value,
    collapsed,
    onRemove,
    style,
    childCount,
    ...rest
  } = props;
  return (
    <li
      className={clsx(
        styles.Wrapper,
        clone && styles.clone,
        ghost && styles.ghost,
        indicator && styles.indicator,
        disableSelection && styles.disableSelection,
        disableInteraction && styles.disableInteraction,
      )}
      ref={wrapperRef}
      style={{ "--spacing": `${indentationWidth * depth}px` } as React.CSSProperties}
      {...rest}
    >
      <div className={styles.TreeItem} ref={ref} style={style}>
        <Handle {...handleProps} />
        <span className={`${styles.Text} capitalize`}>{value}</span>
        {!clone && onRemove && <Remove onClick={onRemove} />}
        {clone && childCount && childCount > 1 ? <span className={styles.Count}>{childCount}</span> : null}
      </div>
    </li>
  );
});

// Sortable Menu Item
interface SortableItemProps extends ItemProps {
  id: UniqueIdentifier;
}

const animateLayoutChanges: AnimateLayoutChanges = ({ isSorting, wasDragging }) =>
  isSorting || wasDragging ? false : true;

export function SortableMenuItem({ id, depth, ...props }: SortableItemProps) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <MenuItem
      ref={setDraggableNodeRef}
      wrapperRef={setDroppableNodeRef}
      style={style}
      depth={depth}
      ghost={isDragging}
      disableInteraction={isSorting}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    />
  );
}
