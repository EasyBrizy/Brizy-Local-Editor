import { HOVER, NORMAL } from "../../../utils/stateMode";

export type Choice = {
  icon?: {
    name?: string;
    className?: string;
  };
  title: string;
  value: string | number;
};

export const MaskShapes: Choice[] = [
  { title: "None", value: "none" },
  { title: "", value: "circle", icon: { name: "nc-mask-shape-circle" } },
  { title: "", value: "rhombus", icon: { name: "nc-mask-shape-rhombus" } },
  { title: "", value: "star", icon: { name: "nc-mask-shape-star" } },
  { title: "", value: "flower", icon: { name: "nc-mask-shape-flower" } },
  { title: "", value: "square", icon: { name: "nc-mask-shape-square" } },
  { title: "", value: "triangle", icon: { name: "nc-mask-shape-triangle" } },
  { title: "", value: "hexagon", icon: { name: "nc-mask-shape-hexagon" } },
  { title: "", value: "blob1", icon: { name: "nc-mask-shape-blob1" } },
  { title: "", value: "blob2", icon: { name: "nc-mask-shape-blob2" } },
  { title: "", value: "blob3", icon: { name: "nc-mask-shape-blob3" } },
  { title: "", value: "blob4", icon: { name: "nc-mask-shape-blob4" } },
  { title: "", value: "brush1", icon: { name: "nc-mask-shape-brush1" } },
  { title: "", value: "brush2", icon: { name: "nc-mask-shape-brush2" } },
  { title: "", value: "brush3", icon: { name: "nc-mask-shape-brush3" } },
  { title: "", value: "brush4", icon: { name: "nc-mask-shape-brush4" } },
  { title: "", value: "poly1", icon: { name: "nc-mask-shape-poly1" } },
  { title: "", value: "poly2", icon: { name: "nc-mask-shape-poly2" } },
  { title: "", value: "poly3", icon: { name: "nc-mask-shape-poly3" } },
  { title: "", value: "poly4", icon: { name: "nc-mask-shape-poly4" } },
  { title: "Custom", value: "custom" },
];

export const productImage = {
  selector: ".brz-ui-ed-cart-item-image",
  toolbar: [
    {
      id: "toolbarProductImageColor",
      type: "popover",
      devices: "desktop",
      config: {
        size: "medium",
        title: "Colors",
        icon: {
          style: {
            backgroundColor: "#000000",
          },
        },
      },
      position: 80,
      options: [
        {
          id: "tabsProductImageColor",
          type: "tabs",
          tabs: [
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "productImageBorder",
                  type: "border",
                  states: [NORMAL, HOVER],
                  selector: ".brz-ui-ed-cart-item-image",
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "productImageBoxShadow",
                  type: "boxShadow",
                  states: [NORMAL, HOVER],
                  selector: ".brz-ui-ed-cart-item-image",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
