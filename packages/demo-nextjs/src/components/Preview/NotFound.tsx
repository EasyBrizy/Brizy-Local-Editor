"use client";

import { CompiledData } from "@/lib/db/models";
import { appendStylesheet } from "@/utils/dom";
import React, { useEffect } from "react";

type Props = {
  project: CompiledData;
  pageData: CompiledData;
};

export function NotFound(props: Props) {
  const { project, pageData } = props;

  useEffect(() => {
    project.styles.forEach(appendStylesheet);
    pageData.styles.forEach(appendStylesheet);
  }, [pageData.styles, project.styles]);

  return <div dangerouslySetInnerHTML={{ __html: pageData.html }} />;
}
