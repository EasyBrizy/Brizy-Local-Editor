import { Getter } from "../types/options";
import { States } from "../utils/states";
import { FillTypes, RadiusType, Sizes } from "./types";
import { getProductsChoices } from "./utils";

export const getToolbar = ({ getValue }: { getValue: Getter }) => {
  const isCustomSize = getValue("size")?.value === "custom";
  const isCustomBorderRadius = getValue("borderRadiusType")?.value === "custom";
  const isDefaultFillType = getValue("fillType")?.value === "default";

  const iconName = getValue("icon")?.name ?? "";
  const iconPosition = getValue("iconPosition");

  return [
    {
      selector: ".add-to-cart-third-party",
      toolbar: [
        {
          id: "toolbarCart",
          type: "popover",
          position: 50,
          config: {
            size: "auto",
            title: "Products",
            icon: "nc-woo-add-to-cart",
          },
          devices: "desktop",
          options: [
            {
              id: "title",
              label: "Title",
              type: "inputText",
              default: "Add to cart",
            },
            {
              id: "itemId",
              label: "Product",
              type: "select",
              choices: {
                load: getProductsChoices,
                emptyLoad: {
                  title: "There are no choices",
                },
              },
            },
          ],
        },
        {
          id: "toolbarButtonAndIconOptions",
          type: "popover",
          config: {
            icon: "nc-button",
            title: "Button",
          },
          position: 60,
          options: [
            {
              id: "",
              type: "tabs",
              tabs: [
                {
                  id: "tabButton",
                  label: "Button",
                  options: [
                    {
                      id: "sizeGroup",
                      type: "group",
                      position: 10,
                      options: [
                        {
                          id: "size",
                          label: "Size",
                          type: "radioGroup",
                          choices: [
                            { value: Sizes.Small, icon: "nc-small" },
                            { value: Sizes.Medium, icon: "nc-medium" },
                            { value: Sizes.Large, icon: "nc-large" },
                            { value: Sizes.Custom, icon: "nc-more" },
                          ],
                          default: {
                            value: "medium",
                          },
                          style: ({ value }: { value: { value: Sizes } }) => {
                            switch (value.value) {
                              case Sizes.Small:
                                return {
                                  "{{WRAPPER}} .add-to-cart-third-party": {
                                    padding: "11px 26px",
                                  },
                                };
                              case Sizes.Medium:
                                return {
                                  "{{WRAPPER}} .add-to-cart-third-party": {
                                    padding: "14px 42px",
                                  },
                                };
                              case Sizes.Large:
                                return {
                                  "{{WRAPPER}} .add-to-cart-third-party": {
                                    padding: "19px 44px",
                                  },
                                };
                              case Sizes.Custom:
                                return "";
                            }
                          },
                        },
                        {
                          id: "width",
                          label: "Width",
                          type: "slider",
                          disabled: !isCustomSize,
                          config: {
                            min: 1,
                            max: 100,
                            units: [{ value: "px", title: "px" }],
                          },
                          default: {
                            value: 20,
                            suffix: "px",
                          },
                          style: ({ value }: { value: { value: number; unit: string } }) => {
                            const padding = `${value.value / 2}${value.unit}`;
                            return {
                              "{{WRAPPER}} .add-to-cart-third-party": {
                                "padding-left": padding,
                                "padding-right": padding,
                              },
                            };
                          },
                        },
                        {
                          id: "height",
                          label: "Height",
                          type: "slider",
                          disabled: !isCustomSize,
                          config: {
                            min: 1,
                            max: 100,
                            units: [{ value: "px", title: "px" }],
                          },
                          default: {
                            value: 10,
                            suffix: "px",
                          },
                          style: ({ value }: { value: { value: number; unit: string } }) => {
                            const padding = `${value.value / 2}${value.unit}`;
                            return {
                              "{{WRAPPER}} .add-to-cart-third-party": {
                                "padding-top": padding,
                                "padding-bottom": padding,
                              },
                            };
                          },
                        },
                      ],
                    },
                    {
                      id: "fillType",
                      label: "Fill",
                      devices: "desktop",
                      type: "radioGroup",
                      position: 20,
                      choices: [
                        { value: FillTypes.Filled, icon: "nc-circle" },
                        { value: FillTypes.Outline, icon: "nc-outline" },
                        { value: FillTypes.Default, icon: "nc-close" },
                      ],
                      default: {
                        value: "filled",
                      },
                      style: ({ value }: { value: { value: FillTypes } }) => {
                        switch (value.value) {
                          case FillTypes.Outline:
                            return {
                              "{{WRAPPER}} .add-to-cart-third-party": {
                                "background-color": "transparent!important;",
                              },
                            };
                          case FillTypes.Filled:
                            return {
                              "{{WRAPPER}} .add-to-cart-third-party": {},
                            };
                          case FillTypes.Default:
                            return {
                              "{{WRAPPER}} .add-to-cart-third-party": {
                                border: "0!important;",
                                "background-color": "transparent!important;",
                                "box-shadow": "none!important;",
                              },
                            };
                        }
                      },
                    },
                    {
                      id: "borderRadiusTypeGroup",
                      type: "group",
                      devices: "desktop",
                      disabled: isDefaultFillType,
                      position: 30,
                      options: [
                        {
                          id: "borderRadiusType",
                          label: "Corner",
                          type: "radioGroup",
                          choices: [
                            { value: RadiusType.Square, icon: "nc-corners-square" },
                            { value: RadiusType.Rounded, icon: "nc-corners-round" },
                            { value: RadiusType.Custom, icon: "nc-more" },
                          ],
                          default: {
                            value: "square",
                          },
                          style: ({ value }: { value: { value: RadiusType } }) => {
                            switch (value.value) {
                              case RadiusType.Square:
                                return {
                                  "{{WRAPPER}} .add-to-cart-third-party": {
                                    "border-radius": 0,
                                  },
                                };
                              case RadiusType.Rounded:
                                return {
                                  "{{WRAPPER}} .add-to-cart-third-party": {
                                    "border-radius": "100px",
                                  },
                                };
                              case RadiusType.Custom: {
                                return {};
                              }
                            }
                          },
                        },
                        {
                          id: "borderRadius",
                          type: "slider",
                          disabled: !isCustomBorderRadius,
                          config: {
                            min: 0,
                            max: 100,
                            units: [{ title: "px", value: "px" }],
                          },
                          default: {
                            value: 10,
                            suffix: "px",
                          },
                          style: ({ value }: { value: { value: string; unit: string } }) => {
                            return {
                              "{{WRAPPER}} .add-to-cart-third-party": {
                                "border-radius": value.value + "px",
                              },
                            };
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "tabIcon",
                  label: "Icon",
                  options: [
                    {
                      id: "icon",
                      label: "Icon",
                      type: "iconSetter",
                      config: { canDelete: true },
                      default: {
                        name: "cart-simple-in",
                        type: "glyph",
                      },
                    },
                    {
                      id: "iconPosition",
                      label: "Position",
                      type: "radioGroup",
                      disabled: iconName === "",
                      choices: [
                        { value: "left", icon: "nc-align-left" },
                        { value: "right", icon: "nc-align-right" },
                      ],
                      default: {
                        value: "left",
                      },
                      style: ({ value }: { value: { value: "left" | "right" } }) => {
                        switch (value.value) {
                          case "left":
                            return "";
                          case "right":
                            return {
                              "{{WRAPPER}} .add-to-cart-third-party": {
                                "flex-direction": "row-reverse",
                              },
                            };
                        }
                      },
                    },
                    {
                      id: "iconCustomSize",
                      label: "Size",
                      type: "slider",
                      disabled: iconName === "",
                      config: {
                        min: 1,
                        max: 100,
                        units: [{ title: "px", value: "px" }],
                      },
                      default: {
                        value: 16,
                        suffix: "px",
                      },
                      style: ({ value }: { value: { value: string; unit: string } }) => {
                        return {
                          "{{WRAPPER}} .brz-icon-svg": {
                            "font-size": value.value + "px",
                          },
                        };
                      },
                    },
                    {
                      id: "iconSpacing",
                      label: "Spacing",
                      type: "slider",
                      disabled: iconName === "",
                      config: {
                        min: 0,
                        max: 100,
                        units: [{ title: "px", value: "px" }],
                      },
                      default: {
                        value: 10,
                        suffix: "px",
                      },
                      style: ({ value }: { value: { value: number; unit: string } }) => {
                        return iconPosition.value === "left"
                          ? {
                              "{{WRAPPER}} .brz-icon-svg": {
                                "margin-right": value.value + value.unit,
                              },
                            }
                          : {
                              "{{WRAPPER}} .brz-icon-svg": {
                                "margin-left": value.value + value.unit,
                              },
                            };
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "toolbarTypography",
          type: "popover",
          config: {
            icon: "nc-font",
            size: "large",
            title: "Typography",
          },
          position: 70,
          options: [
            {
              id: "text",
              type: "typography",
              selector: "{{WRAPPER}}:hover .add-to-cart-third-party span",
              default: {
                lineHeight: 1.6,
                fontWeight: 700,
              },
            },
          ],
        },
        {
          id: "popoverColor",
          type: "popover",
          config: {
            size: "medium",
            title: "Colors",
            icon: {
              style: {
                backgroundColor: "#000",
              },
            },
          },
          devices: "desktop",
          position: 90,
          options: [
            {
              id: "tabsColor",
              type: "tabs",
              tabs: [
                {
                  id: "tabBg",
                  label: "Bg",
                  options: [
                    {
                      id: "",
                      type: "backgroundColor",
                      selector: "{{WRAPPER}}.brz-third-party:hover button.add-to-cart-third-party.brz-ui-ed-btn",
                      devices: "desktop",
                      states: [States.NORMAL, States.HOVER],
                      default: {
                        bgColorType: "solid",
                        bgColorPalette: "color3",
                        bgColorOpacity: 1,
                      },
                    },
                  ],
                },
                {
                  id: "buttonColorTab",
                  label: "Text",
                  options: [
                    {
                      id: "color",
                      type: "colorPicker",
                      selector: "{{WRAPPER}}:hover .add-to-cart-third-party span",
                      devices: "desktop",
                      states: [States.NORMAL, States.HOVER],
                      default: {
                        hex: "#ffffff",
                        opacity: 1,
                      },
                    },
                  ],
                },
                {
                  id: "tabBorder",
                  label: "Border",
                  options: [
                    {
                      id: "border",
                      type: "border",
                      selector: "{{WRAPPER}}:hover .add-to-cart-third-party",
                      devices: "desktop",
                      states: [States.NORMAL, States.HOVER],
                      default: {
                        style: "solid",
                        widthType: "grouped",
                        width: 1,
                        colorHex: "#0000ff",
                        colorOpacity: 1,
                      },
                    },
                  ],
                },
                {
                  id: "tabShadow",
                  label: "Shadow",
                  options: [
                    {
                      id: "boxShadow",
                      type: "boxShadow",
                      selector: "{{WRAPPER}}:hover .add-to-cart-third-party",
                      devices: "desktop",
                      states: [States.NORMAL, States.HOVER],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "advancedSettings",
          type: "advancedSettings",
          position: 110,
        },
      ],
    },
  ];
};
