import { AlphaPrice } from "@brizy/builder-ui";
import { Brizy } from "@brizy/core";
import { HOVER, NORMAL } from "../utils/stateMode";
import "./index.css";

const helperHTML = `
<p class="brz-p">You can use the following selectors to create targeted CSS.</p>
<p class="brz-p">
  <span class="brz-span brz-ed-tooltip__overlay-code">element</span> {...}
  <br class="brz-br">
  <span class="brz-span brz-ed-tooltip__overlay-code">element .child-element</span> {...}
</p>`;

interface Props {
  priceStyle: "style-1" | "style-2" | "style-3";
}

export const Price = ({ priceStyle }: Props) => {
  console.log(priceStyle);
  switch (priceStyle) {
    case "style-1": {
      return (
        <div className="container">
          <AlphaPrice price="50" compareAtPrice="20" />
        </div>
      );
    }
    case "style-2": {
      return (
        <div className="container">
          <AlphaPrice price="50" />
        </div>
      );
    }
    case "style-3": {
      return (
        <div className="container">
          <AlphaPrice compareAtPrice="20" />
        </div>
      );
    }
  }
};

Brizy.registerComponent({
  id: "ThirdParty.Price",
  component: { editor: Price, view: Price },
  title: "Price",
  category: "custom",
  // @ts-ignore
  options: ({ getValue }) => {
    const style1 = getValue("priceStyle")?.value === "style-1";

    return [
      {
        selector: ".brz-ui-ed-price",
        toolbar: [
          {
            id: "toolbarCurrentShortcode",
            type: "popover",
            // disabled: device !== "desktop",
            config: {
              icon: "nc-woo-price",
              title: "Style",
            },
            position: 1,
            options: [
              {
                id: "priceStyle",
                label: "Style",
                type: "radioGroup",
                choices: [
                  { value: "style-1", icon: "t2-shopify-price-style1" },
                  { value: "style-2", icon: "t2-shopify-price-style2" },
                  { value: "style-3", icon: "t2-shopify-price-style3" },
                ],
                default: {
                  value: "style-1",
                },
              },
            ],
          },
          {
            id: "toolbarTypography",
            type: "popover",
            config: {
              icon: "nc-font",
              size: "large", // DEVICE
              title: "Typography",
            },
            position: 8,
            options: [
              {
                id: "typographyPrice",
                type: "typography",
                // config: {
                //   fontFamily: device === "desktop"
                // }
                default: {
                  fontSize: 18,
                  fontSizeSuffix: "px",
                  lineHeight: 1.3,
                },
                selector: "{{WRAPPER}} .brz-ui-ed-price:hover",
              },
            ],
          },
          {
            id: "toolbarColor",
            type: "popover",
            config: {
              size: "auto",
              title: "Colors",
              icon: {
                style: {
                  backgroundColor: "#fff",
                },
              },
            },
            position: 9,
            devices: "desktop",
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
                        id: "bgPriceColor",
                        type: "colorPicker",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "#ffffff",
                          opacity: "1",
                          palette: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price:hover",
                      },
                    ],
                  },
                  {
                    id: "tabText",
                    label: "Text",
                    options: [
                      {
                        id: "textColorPrice",
                        type: "colorPicker",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "#000000",
                          opacity: 1,
                          palette: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price:hover",
                      },
                    ],
                  },
                  {
                    id: "tabBorder",
                    label: "Border",
                    options: [
                      {
                        id: "priceBorder",
                        type: "border",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "",
                          opacity: 1,
                          style: "solid",
                          palette: "",
                          width: 1,
                          widthType: "grouped",
                          topWidth: 1,
                          rightWidth: 1,
                          bottomWidth: 1,
                          leftWidth: 1,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price:hover",
                      },
                    ],
                  },
                  {
                    id: "tabBoxShadow",
                    label: "Shadow",
                    options: [
                      {
                        id: "priceSBoxShadow",
                        type: "boxShadow",
                        states: [NORMAL, HOVER],
                        default: {
                          vertical: 0,
                          horizontal: 0,
                          spread: 0,
                          blur: 0,
                          colorHex: "#00000",
                          colorOpacity: 1,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price:hover",
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
            config: { icon: "nc-cog", title: "Settings" },
            position: 110,
            options: [
              {
                id: "priceWidth",
                label: "Width",
                type: "slider",
                config: {
                  min: 0,
                  max: 100,
                  units: [{ value: "px", title: "px" }],
                },
                default: {
                  value: 60,
                  suffix: "px",
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}} .brz-ui-ed-price:hover": {
                      width: `${value.value}${value.unit}`,
                    },
                  };
                },
              },
              {
                id: "priceHeight",
                label: "Height",
                type: "slider",
                config: {
                  min: 0,
                  max: 100,
                  units: [{ value: "px", title: "px" }],
                },
                default: {
                  value: 0,
                  suffix: "px",
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}} .brz-ui-ed-price:hover": {
                      "min-height": `${value.value}${value.unit}`,
                    },
                  };
                },
              },
              {
                id: "spacing",
                label: "Spacing",
                type: "slider",
                disabled: !style1,
                config: {
                  min: 0,
                  max: 100,
                  units: [{ value: "px", title: "px" }],
                },
                default: {
                  value: 5,
                  suffix: "px",
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}} .brz-ui-ed-price:hover": {
                      "margin-right": `${value.value}${value.unit}`,
                    },
                  };
                },
              },
              {
                id: "grid",
                type: "grid",
                config: { separator: true },
                devices: "desktop",
                columns: [
                  {
                    id: "col-1",
                    size: 1,
                    options: [
                      {
                        id: "styles",
                        type: "sidebarTabsButton",
                        config: {
                          tabId: "styles",
                          text: "Styling",
                          icon: "nc-cog",
                        },
                      },
                    ],
                  },
                  {
                    id: "col-2",
                    size: 1,
                    options: [
                      {
                        id: "effects",
                        type: "sidebarTabsButton",
                        config: {
                          tabId: "effects",
                          text: "Effects",
                          icon: "nc-flash",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        sidebar: [
          {
            id: "sidebarTabs",
            type: "sidebarTabs",
            tabs: [
              {
                id: "styles",
                title: "Styling",
                label: "Styling",
                options: [
                  {
                    id: "settingsTabs",
                    type: "tabs",
                    config: {
                      align: "start",
                    },
                    devices: "desktop",
                    tabs: [
                      {
                        id: "settingsStyling",
                        label: "Basic",
                        options: [
                          {
                            id: "eqwe",
                            type: "inputText",
                          },
                          {
                            id: "priceBorder",
                            type: "corners",
                            label: "Corner",
                            position: 65,
                            selector: "{{WRAPPER}} .brz-ui-ed-price:hover",
                            default: {
                              colorHex: "",
                              bottomWidth: 1,
                              colorOpacity: 1,
                              colorPalette: "",
                              leftWidth: 1,
                              rightWidth: 1,
                              style: "solid",
                              topWidth: 1,
                              width: 1,
                              widthType: "grouped",
                            },
                          },
                        ],
                      },
                      {
                        id: "moreSettingsAdvanced",
                        label: "Advanced",
                        options: [
                          {
                            id: "hoverTransition",
                            label: "Hover Transition",
                            devices: "desktop",
                            type: "slider",
                            config: {
                              min: 0,
                              max: 99,
                              units: [{ title: "ms", value: "ms" }],
                            },
                            default: {
                              value: 50,
                              suffix: "ms",
                            },
                            style: ({ value }) => {
                              console.log(value);
                              return {
                                "{{WRAPPER}} .brz-ui-ed-price:hover": {
                                  "transition-property": "filter, color, background, border-color, box-shadow;",
                                  "transition-duration": `0.${value.value}s`,
                                },
                              };
                            },
                          },
                          {
                            id: "customCSS",
                            label: "Custom CSS",
                            type: "codeMirror",
                            position: 45,
                            display: "block",
                            devices: "desktop",
                            helper: { content: helperHTML },
                            placeholder: `element { CSS goes here }`,
                          },
                        ],
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
        selector: ".brz-ui-ed-price-compare-at",
        toolbar: [
          {
            id: "toolbarCurrentShortcode",
            type: "popover",
            // disabled: device !== "desktop",
            config: {
              icon: "nc-woo-price",
              title: "Style",
            },
            position: 1,
            options: [
              {
                id: "priceStyle",
                label: "Style",
                type: "radioGroup",
                choices: [
                  { value: "style-1", icon: "t2-shopify-price-style1" },
                  { value: "style-2", icon: "t2-shopify-price-style2" },
                  { value: "style-3", icon: "t2-shopify-price-style3" },
                ],
                default: {
                  value: "style-1",
                },
              },
            ],
          },
          {
            id: "toolbarTypography",
            type: "popover",
            config: {
              icon: "nc-font",
              size: "large", // DEVICE
              title: "Typography",
            },
            position: 8,
            options: [
              {
                id: "typographyThroughPrice",
                type: "typography",
                // config: {
                //   // fontFamily: device === "desktop"
                // },
                selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover",
                default: {
                  fontSize: 18,
                  fontSizeSuffix: "px",
                  lineHeight: 1.3,
                },
              },
            ],
          },
          {
            id: "toolbarColor",
            type: "popover",
            config: {
              title: "Colors",
              icon: {
                style: {
                  backgroundColor: "#fff",
                },
              },
            },
            position: 9,
            devices: "desktop",
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
                        id: "bgThroughPriceColor",
                        type: "backgroundColor",
                        states: [NORMAL, HOVER],
                        default: {
                          bgColorHex: "#ffffff",
                          bgColorOpacity: 1,
                          bgColorPalette: "",
                          bgColorType: "solid",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover",
                      },
                    ],
                  },
                  {
                    id: "tabText",
                    label: "Text",
                    options: [
                      {
                        id: "textColorThroughPrice",
                        type: "colorPicker",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "#000000",
                          opacity: 1,
                          palette: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover",
                      },
                    ],
                  },
                  {
                    id: "tabBorder",
                    label: "Border",
                    options: [
                      {
                        id: "throughPriceBorder",
                        type: "border",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "",
                          opacity: 1,
                          style: "solid",
                          palette: "",
                          width: 1,
                          widthType: "grouped",
                          topWidth: 1,
                          rightWidth: 1,
                          bottomWidth: 1,
                          leftWidth: 1,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover",
                      },
                    ],
                  },
                  {
                    id: "tabBoxShadow",
                    label: "Shadow",
                    options: [
                      {
                        id: "priceThroughSBoxShadow",
                        type: "boxShadow",
                        states: [NORMAL, HOVER],
                        default: {
                          vertical: 0,
                          horizontal: 0,
                          spread: 0,
                          blur: 0,
                          colorHex: "#00000",
                          colorOpacity: 1,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover",
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
            config: { icon: "nc-cog", title: "Settings" },
            position: 110,
            options: [
              {
                id: "thoughPriceWidth",
                label: "Width",
                type: "slider",
                config: {
                  min: 0,
                  max: 100,
                  units: [{ value: "px", title: "px" }],
                },
                default: {
                  value: 60,
                  suffix: "px",
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover": {
                      width: `${value.value}${value.unit}`,
                    },
                  };
                },
              },
              {
                id: "thoughPriceHeight",
                label: "Height",
                type: "slider",
                config: {
                  min: 0,
                  max: 100,
                  units: [{ value: "px", title: "px" }],
                },
                default: {
                  value: 0,
                  suffix: "px",
                },
                style: ({ value }) => {
                  console.log("height", value);
                  return {
                    "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover": {
                      "min-height": `${value.value}${value.unit}`,
                    },
                  };
                },
              },
              {
                id: "spacing",
                label: "Spacing",
                type: "slider",
                disabled: !style1,
                config: {
                  min: 0,
                  max: 100,
                  units: [{ value: "px", title: "px" }],
                },
                default: {
                  value: 5,
                  suffix: "px",
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}} .brz-ui-ed-price:hover": {
                      "margin-right": `${value.value}${value.unit}`,
                    },
                  };
                },
              },
              {
                id: "grid",
                type: "grid",
                config: { separator: true },
                devices: "desktop",
                columns: [
                  {
                    id: "col-1",
                    size: 1,
                    options: [
                      {
                        id: "styles",
                        type: "sidebarTabsButton",
                        config: {
                          tabId: "styles",
                          text: "Styling",
                          icon: "nc-cog",
                        },
                      },
                    ],
                  },
                  {
                    id: "col-2",
                    size: 1,
                    options: [
                      {
                        id: "effects",
                        type: "sidebarTabsButton",
                        config: {
                          tabId: "effects",
                          text: "Effects",
                          icon: "nc-flash",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        sidebar: [
          {
            id: "sidebarTabs",
            type: "sidebarTabs",
            tabs: [
              {
                id: "styles",
                title: "Styling",
                label: "Styling",
                options: [
                  {
                    id: "settingsTabs",
                    type: "tabs",
                    config: {
                      align: "start",
                    },
                    devices: "desktop",
                    tabs: [
                      {
                        id: "settingsStyling",
                        label: "Basic",
                        options: [
                          {
                            id: "eqwe",
                            type: "inputText",
                          },
                          {
                            id: "priceThroughBorder",
                            type: "corners",
                            label: "Corner",
                            position: 65,
                            selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover",
                            default: {
                              colorHex: "",
                              bottomWidth: 1,
                              colorOpacity: 1,
                              colorPalette: "",
                              leftWidth: 1,
                              rightWidth: 1,
                              style: "solid",
                              topWidth: 1,
                              width: 1,
                              widthType: "grouped",
                            },
                          },
                        ],
                      },
                      {
                        id: "moreSettingsAdvanced",
                        label: "Advanced",
                        options: [
                          {
                            id: "hoverTransition",
                            label: "Hover Transition",
                            devices: "desktop",
                            type: "slider",
                            config: {
                              min: 0,
                              max: 99,
                              units: [{ title: "ms", value: "ms" }],
                            },
                            default: {
                              value: 50,
                              suffix: "ms",
                            },
                            style: ({ value }) => {
                              console.log(value);
                              return {
                                "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover": {
                                  "transition-property": "filter, color, background, border-color, box-shadow;",
                                  "transition-duration": `0.${value.value}s`,
                                },
                              };
                            },
                          },
                          {
                            id: "customCSS",
                            label: "Custom CSS",
                            type: "codeMirror",
                            position: 45,
                            display: "block",
                            devices: "desktop",
                            helper: { content: helperHTML },
                            placeholder: `element { CSS goes here }`,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});
