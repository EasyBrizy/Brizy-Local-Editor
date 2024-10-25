import { Getter } from "../../types/options";
import { States } from "../../utils/states";

export const getToolbarBtnCart = (getter: Getter) => {
  const sidebarPosition = getter("sidebarPosition")?.value || "right";
  const sidebarIcon = `nc-hrz-align-${sidebarPosition}`;
  const sidebarWidthSuffix = getter("sidebarWidth")?.unit || "px";

  return {
    selector: ".cart-btn",
    toolbar: [
      {
        id: "toolbarCurrentShortcode",
        type: "popover",
        config: {
          icon: sidebarIcon,
          title: "Sidebar",
        },
        position: 10,
        options: [
          {
            id: "openSidebar",
            type: "switch",
            label: "Open Sidebar",
          },
          {
            id: "sidebarPosition",
            label: "Position",
            type: "radioGroup",
            choices: [
              { title: "Left", value: "left", icon: "nc-hrz-align-left" },
              { title: "Right", value: "right", icon: "nc-hrz-align-right" },
            ],
            default: {
              value: "right",
            },
          },
          {
            id: "sidebarWidth",
            type: "slider",
            label: "Width",
            config: {
              min: 0,
              max: sidebarWidthSuffix === "px" ? 1000 : 100,
              units: [
                { value: "px", title: "px" },
                { value: "%", title: "%" },
              ],
            },
            default: {
              value: 400,
              suffix: "px",
            },
          },
          {
            id: "showCloseBtn",
            type: "switch",
            label: "Show Close Button",
            default: {
              value: "on",
            },
          },
        ],
      },
      {
        id: "toolbarCurrentShortcode",
        type: "popover",
        config: {
          icon: "nc-star",
          title: "Icon",
        },
        position: 70,
        options: [
          {
            id: "sizeGroup",
            type: "group",
            position: 60,
            options: [
              {
                id: "icon",
                type: "iconSetter",
                label: "Icon",
                default: {
                  name: "cart-simple-in",
                  type: "glyph",
                },
              },
              {
                id: "iconSize",
                label: "Size",
                type: "slider",
                config: {
                  min: 14,
                  max: 180,
                  units: [{ title: "px", value: "px" }],
                },
                default: {
                  value: 16,
                  suffix: "px",
                },
                style: ({ value }: { value: { value: number; unit: string } }) => {
                  return {
                    "{{WRAPPER}} .cart-btn svg": {
                      width: `${value.value}${value.unit}`,
                      height: `${value.value}${value.unit}`,
                    },
                  };
                },
              },
            ],
          },
        ],
      },
      {
        id: "toolbarColor",
        type: "popover",
        config: {
          size: "medium",
          title: "Colors",
          icon: {
            style: {
              backgroundColor: "#000000",
            },
          },
        },
        position: 90,
        devices: "desktop",
        options: [
          {
            id: "tabsColor",
            type: "tabs",
            tabs: [
              {
                id: "tabBackground",
                label: "Background",
                options: [
                  {
                    id: "btnCartBg",
                    type: "backgroundColor",
                    selector: "{{WRAPPER}} button.cart-btn.brz-ui-ed-btn.brz-ui-ed-btn-default:hover",
                    states: [States.NORMAL, States.HOVER],
                    default: {
                      bgColorType: "solid",
                      bgColorHex: "#ffffff",
                      bgColorOpacity: 1,
                    },
                  },
                ],
              },
              {
                id: "tabBorder",
                label: "Border",
                options: [
                  {
                    id: "btnCartBorder",
                    type: "border",
                    devices: "desktop",
                    selector: `{{WRAPPER}} button.cart-btn.brz-ui-ed-btn.brz-ui-ed-btn-default:hover`,
                    states: [States.NORMAL, States.HOVER],
                    default: {
                      style: "solid",
                      width: 2,
                      colorHex: "#000000",
                      colorOpacity: 1,
                      topWidth: 2,
                      rightWidth: 2,
                      bottomWidth: 2,
                      leftWidth: 2,
                    },
                  },
                ],
              },
              {
                id: "tabBoxShadow",
                label: "Shadow",
                options: [
                  {
                    id: "btnCartBoxShadow",
                    type: "boxShadow",
                    devices: "desktop",
                    selector: "{{WRAPPER}}:hover .cart-btn",
                    states: [States.NORMAL, States.HOVER],
                  },
                ],
              },
              {
                id: "tabColor",
                label: "Icon",
                options: [
                  {
                    id: "iconColor",
                    type: "colorPicker",
                    selector: "{{WRAPPER}}:hover .cart-btn svg",
                    states: [States.NORMAL, States.HOVER],
                    default: {
                      hex: "#000000",
                      opacity: 1,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "toolbarSettings",
        type: "popover",
        config: {
          icon: "nc-cog",
          title: "Settings",
        },
        position: 100,
        options: [
          {
            id: "btnCartWidth",
            label: "Width",
            type: "slider",
            config: {
              min: 0,
              max: 200,
              units: [{ value: "px", title: "px" }],
            },
            default: {
              value: 45,
              suffix: "px",
            },
            style: ({ value }: { value: { value: number; unit: string } }) => {
              return {
                "{{WRAPPER}} button.cart-btn.brz-ui-ed-btn": {
                  width: `${value.value}${value.unit}`,
                },
              };
            },
          },
          {
            id: "btnCartHeight",
            label: "Height",
            type: "slider",
            config: {
              min: 0,
              max: 200,
              units: [{ value: "px", title: "px" }],
            },
            default: {
              value: 45,
              suffix: "px",
            },
            style: ({ value }: { value: { value: number; unit: string } }) => {
              return {
                "{{WRAPPER}} button.cart-btn.brz-ui-ed-btn": {
                  height: `${value.value}${value.unit}`,
                },
              };
            },
          },
        ],
      },
    ],
  };
};
