"use client";

import { ItemDataParsed } from "@/utils/converters/item";
import { ProjectDataParsed } from "@/utils/converters/project";
import { appendStylesheet } from "@/utils/dom";
import React, { useEffect, useMemo } from "react";

type Props = {
  project: ProjectDataParsed["data"];
  item: ItemDataParsed["data"];
};

export function NotFound(props: Props) {
  const project = useMemo(() => props.project.compiled, [props.project]);
  const item = useMemo(() => props.item.compiled, [props.item]);
  const projectStyles = useMemo(() => project?.styles ?? [], [project]);
  const itemStyles = useMemo(() => item?.styles ?? [], [item]);

  useEffect(() => {
    projectStyles.forEach(appendStylesheet);
    itemStyles.forEach(appendStylesheet);
  }, [projectStyles, itemStyles]);

  if (!item?.html) {
    return <h1>Not found</h1>;
  }

  return <div dangerouslySetInnerHTML={{ __html: item.html }} />;
}
