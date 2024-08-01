"use client";

import { CompiledData } from "@/lib/db/models";
import { Styles, isStyle } from "@builder/core/build/es/utils/assetManager/types";
import React, { useEffect } from "react";

export function NotFound({ project, pageData }: { project: CompiledData; pageData: CompiledData }) {
  useEffect(() => {
    project.styles.forEach(appendStylesheet);
    pageData.styles.forEach(appendStylesheet);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageData.html }} />;
}

function appendStylesheet(style: Styles): void {
  const { attr } = style;
  const { class: className, ...attributes } = attr;

  const styleSheet = createHTMLStyleElement(style);
  document.head.append(styleSheet);
}

function createHTMLStyleElement(style: Styles): HTMLElement {
  const { attr } = style;
  const { class: className, ...attributes } = attr;

  const stylesheet = document.createElement(style.type);
  if (isStyle(style)) {
    stylesheet.innerHTML = style.html;
  }
  if (className) {
    stylesheet.className = className;
  }

  setAttributes(stylesheet, attributes);
  return stylesheet;
}

const setAttributes = (element: HTMLElement, attributes: Record<string, unknown>): void => {
  for (let [k, v] of Object.entries(attributes)) {
    if (typeof v !== "undefined") {
      element.setAttribute(k, v as string);
    }
  }
};
