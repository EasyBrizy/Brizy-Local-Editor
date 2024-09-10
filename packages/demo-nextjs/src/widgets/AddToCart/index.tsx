import { Brizy } from "@brizy/core";
import { States } from "../utils/states";

export const AddToCart = () => {
  return <button className="addToCartThirdComponent">Add to Cart</button>;
};

Brizy.registerComponent({
  id: "Brizy.ThirdParty.AddToCart",
  component: {
    editor: AddToCart,
    view: AddToCart,
  },
  title: "Add to Cart",
  category: "Ecommerce",
  options: ({ getValue }: { getValue: (key: string) => Record<string, unknown> }) => {
    const isCustomSize = getValue("size")?.value === "custom";
    const isCustomBorderRadius = getValue("borderRadiusType")?.value === "custom";
    const isDefaultFillType = getValue("fillType")?.value === "default";
    const iconName = getValue("icon")?.name ?? "";

    return [
      {
        selector: ".addToCartThirdComponent",
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
                id: "groupProduct",
                type: "group",
                options: [
                  // {
                  //   id: "itemId",
                  //   label: ("Product"),
                  //   type: "select",
                  //   disabled: !sourceItemsHandler || sourceType === "",
                  //   choices: {
                  //     load: () => getSourceIds(sourceType, config),
                  //     emptyLoad: {
                  //       title: t("There are no choices")
                  //     }
                  //   }
                  // }
                ],
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
                              { value: "small", icon: "nc-small" },
                              { value: "medium", icon: "nc-medium" },
                              { value: "large", icon: "nc-large" },
                              { value: "custom", icon: "nc-more" },
                            ],
                            default: {
                              value: "medium",
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
                          { value: "filled", icon: "nc-circle" },
                          { value: "outline", icon: "nc-outline" },
                          { value: "default", icon: "nc-close" },
                        ],
                        default: {
                          value: "filled",
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
                              { value: "square", icon: "nc-corners-square" },
                              { value: "rounded", icon: "nc-corners-round" },
                              { value: "custom", icon: "nc-more" },
                            ],
                            default: {
                              value: "square",
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
                        devices: "desktop",
                        states: [States.NORMAL, States.HOVER],
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
                        devices: "desktop",
                        states: [States.NORMAL, States.HOVER],
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
                        devices: "desktop",
                        states: [States.NORMAL, States.HOVER],
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
  },
});
