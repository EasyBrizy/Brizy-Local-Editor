import { HOVER, NORMAL } from "../../../utils/stateMode";

export const productRemoveButton = ({ getValue }: any) => {
  return {
    selector: ".brz-ui-ed-cart-item-wrapper-remove-button",
    toolbar: [
      {
        id: "toolbarProductRemoveButton",
        type: "popover",
        config: {
          icon: "nc-star",
          title: "Icon",
        },
        position: 70,
        options: [
          {
            id: "toolbarProductRemoveButtonTabs",
            type: "tabs",
            tabs: [
              {
                id: "tabProductRemoveButtonIcon",
                label: "Icon",
                options: [
                  {
                    id: "productRemoveButtonSize",
                    type: "slider",
                    label: "Size",
                    config: {
                      min: 8,
                      max: 50,
                      units: [{ title: "px", value: "px" }],
                    },
                    default: {
                      value: 14,
                      suffix: "px",
                    },
                    style: ({ value }) => {
                      return {
                        "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button": {
                          width: `${value.value}${value.unit}`,
                          height: `${value.value}${value.unit}`,
                        },
                      };
                    },
                  },
                ],
              },
              {
                id: "tabProductRemoveButtonBackgroundSize",
                label: "Background",
                options: [
                  {
                    id: "productRemoveButtonBgSize",
                    label: "Size",
                    type: "slider",
                    config: {
                      min: 0,
                      max: 30,
                      units: [{ title: "px", value: "px" }],
                    },
                    default: {
                      value: 0,
                      suffix: "px",
                    },
                    style: ({ value }) => {
                      return {
                        "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button": {
                          "pointer-events": "none", // disable in preview
                          "box-sizing": "content-box",
                          padding: `${value.value}${value.unit}`,
                        },
                      };
                    },
                  },
                  {
                    id: "groupProductRemoveButtonBorderRadiusShape",
                    type: "group",
                    options: [
                      {
                        id: "productRemoveButtonBorderRadiusShape",
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
                        style: ({ value }) => {
                          return {
                            "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button": {
                              "border-radius":
                                value.value === "square" ? `0px` : value.value === "rounded" ? `50px` : 0,
                            },
                          };
                        },
                      },
                      {
                        id: "productRemoveButtonBorderRadius",
                        type: "slider",
                        disabled: getValue("productRemoveButtonBorderRadiusShape")?.value !== "custom",
                        config: {
                          min: 0,
                          max: 50,
                          units: [{ title: "px", value: "px" }],
                        },
                        default: {
                          value: 0,
                          suffix: "px",
                        },
                        style: ({ value }) => {
                          return {
                            "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button": {
                              "border-radius": `${value.value}${value.unit}`,
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
        ],
      },
      {
        id: "toolbarProductRemoveButtonColor",
        type: "popover",
        devices: "desktop",
        config: {
          size: "medium",
          title: "Colors",
          icon: {
            style: {
              backgroundColor: "#000",
            },
          },
        },
        position: 90,
        options: [
          {
            id: "tabsProductRemoveButtonColor",
            type: "tabs",
            tabs: [
              {
                id: "tabProductRemoveButtonColor",
                label: "Icon",
                options: [
                  {
                    id: "productRemoveButtonColor",
                    type: "colorPicker",
                    states: [NORMAL, HOVER],
                    default: {
                      hex: "#000000",
                      opacity: 1,
                      palette: "",
                    },
                    selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button",
                  },
                ],
              },
              {
                id: "tabProductRemoveButtonBackgroundColor",
                label: "Background",
                options: [
                  {
                    id: "productRemoveButtonBgColor",
                    type: "backgroundColor",
                    states: [NORMAL, HOVER],
                    default: {
                      bgColorHex: "#000000",
                      bgColorOpacity: 0,
                      bgColorPalette: "",
                      bgColorType: "solid",
                      gradientLinearDegree: 90,
                      gradientRadialDegree: 90,
                    },
                    selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button",
                  },
                ],
              },
              {
                id: "tabProductRemoveButtonBoxShadow",
                label: "Shadow",
                options: [
                  {
                    id: "productRemoveButtonBoxShadow",
                    type: "boxShadow",
                    states: [NORMAL, HOVER],
                    default: {
                      hex: "#000000",
                      opacity: 1,
                      palette: "",
                    },
                    selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
};
