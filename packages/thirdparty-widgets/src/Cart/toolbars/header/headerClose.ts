import { HOVER, NORMAL } from "../../../utils/stateMode";

export const toolbarHeaderClose = ({ getValue }: any) => {
  return {
    selector: ".brz-ui-ed-cart-header-close",
    toolbar: [
      {
        id: "toolbarHeaderCloseButtonIcon",
        type: "popover",
        config: {
          icon: "nc-star",
          title: "Icon",
        },
        position: 70,
        options: [
          {
            id: "toolbarHeaderCloseButtonIconTabs",
            type: "tabs",
            tabs: [
              {
                id: "tabHeaderCloseIcon",
                label: "Icon",
                options: [
                  {
                    id: "headerCloseSize",
                    type: "slider",
                    label: "Size",
                    config: {
                      min: 8,
                      max: 50,
                      units: [{ title: "px", value: "px" }],
                    },
                    default: {
                      value: 16,
                      suffix: "px",
                    },
                    style: ({ value }) => {
                      return {
                        "{{WRAPPER}} .brz-ui-ed-cart-header-close": {
                          "font-size": `${value.value}${value.unit}`,
                        },
                      };
                    },
                  },
                ],
              },
              {
                id: "tabHeaderCloseBackgroundSize",
                label: "Background",
                options: [
                  {
                    id: "headerCloseBgSize",
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
                        "{{WRAPPER}} .brz-ui-ed-cart-header-close": {
                          "box-sizing": "content-box",
                          padding: `${value.value}${value.unit}`,
                        },
                      };
                    },
                  },
                  {
                    id: "groupHeaderCloseBorderRadiusShape",
                    type: "group",
                    options: [
                      {
                        id: "headerCloseBorderRadiusShape",
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
                            "{{WRAPPER}} .brz-ui-ed-cart-header-close": {
                              "border-radius":
                                value.value === "square" ? `0px` : value.value === "rounded" ? `50px` : 0,
                            },
                          };
                        },
                      },
                      {
                        id: "headerCloseBorderRadius",
                        type: "slider",
                        disabled: getValue("headerCloseBorderRadiusShape")?.value !== "custom",
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
                            "{{WRAPPER}} .brz-ui-ed-cart-header-close": {
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
        id: "toolbarHeaderCloseColor",
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
            id: "tabsColor",
            type: "tabs",
            tabs: [
              {
                id: "tabIcon",
                label: "Icon",
                options: [
                  {
                    id: "headerCloseColor",
                    type: "colorPicker",
                    states: [NORMAL, HOVER],
                    default: {
                      hex: "#000000",
                      opacity: 1,
                      palette: "",
                    },
                    selector: "{{WRAPPER}} .brz-ui-ed-cart-header-close",
                  },
                ],
              },
              {
                id: "tabHeaderCloseBackgroundColor",
                label: "Background",
                options: [
                  {
                    id: "headerCloseBgColor",
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
                    selector: "{{WRAPPER}} .brz-ui-ed-cart-header-close",
                  },
                ],
              },
              {
                id: "tabHeaderCloseBoxShadow",
                label: "Shadow",
                options: [
                  {
                    id: "headerCloseBoxShadow",
                    type: "boxShadow",
                    states: [NORMAL, HOVER],
                    default: {
                      hex: "#000000",
                      opacity: 1,
                      palette: "",
                    },
                    selector: "{{WRAPPER}} .brz-ui-ed-cart-header-close",
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
