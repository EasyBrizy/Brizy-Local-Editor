import { Styles, isStyle } from "@builder/core/build/es/utils/assetManager/types";

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
    if (v !== undefined) {
      element.setAttribute(k, v as string);
    }
  }
};

export function appendStylesheet(style: Styles): void {
  const styleSheet = createHTMLStyleElement(style);
  document.head.append(styleSheet);
}
