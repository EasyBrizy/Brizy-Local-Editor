import { AlphaAlert } from "@brizy/builder-ui";
import { Brizy } from "@brizy/core";
import { HOVER, NORMAL } from "../utils/stateMode";

const helperHTML = `
<p class="brz-p">You can use the following selectors to create targeted CSS.</p>
<p class="brz-p">
  <span class="brz-span brz-ed-tooltip__overlay-code">element</span> {...}
  <br class="brz-br">
  <span class="brz-span brz-ed-tooltip__overlay-code">element .child-element</span> {...}
</p>`;

interface Props {
  closeButtonState: "on" | "off";
  descriptionState: "on" | "off";
}

export const Alert = ({ closeButtonState, descriptionState }: Props) => {
  const isDescriptionEnabled = descriptionState === "on";
  const isCloseButtonEnabled = closeButtonState === "on";

  // delay close icon logic for preview only

  return (
    <AlphaAlert
      description={isDescriptionEnabled ? "Description" : ""}
      message="Title"
      closable={isCloseButtonEnabled}
    />
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Alert",
  component: { editor: Alert, view: Alert },
  title: "Alert",
  category: "custom",
  // @ts-ignore
  options: ({ getValue }) => {
    return [
      {
        selector: ".brz-ui-ed-alert",
        toolbar: [
          {
            id: "toolbarShowHideButton",
            type: "popover",
            config: {
              icon: "nc-alert",
              title: "Alert",
            },
            position: 60,
            options: [
              {
                id: "groupShowCloseButton",
                type: "group",
                devices: "desktop",
                options: [
                  {
                    id: "closeButtonState",
                    type: "switch",
                    label: "Display Close Button",
                    default: {
                      value: "on",
                    },
                  },
                  {
                    id: "showCloseButtonAfter",
                    label: "Delay",
                    type: "slider",
                    disabled: getValue("closeButtonState")?.value !== "on",
                    config: {
                      min: 0,
                      max: 10,
                      units: [{ title: "s", value: "s" }],
                    },
                    default: {
                      value: 0,
                      suffix: "s",
                    },
                  },
                ],
              },
              {
                id: "descriptionState",
                type: "switch",
                label: "Display Description",
                devices: "desktop",
                default: {
                  value: "on",
                },
              },
            ],
          },
          {
            id: "toolbarColor",
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
            position: 70,
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
                        id: "bgColor",
                        type: "backgroundColor",
                        states: [NORMAL, HOVER],
                        default: {
                          bgColorHex: "#1a86f2",
                          bgColorOpacity: 1,
                          bgColorPalette: "",
                          bgColorType: "solid",
                          gradientLinearDegree: 90,
                          gradientRadialDegree: 90,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert",
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
                        states: [NORMAL, HOVER],
                        default: {
                          borderColorHex: "#000000",
                          borderColorOpacity: 1,
                          borderColorPalette: "",
                          borderStyle: "solid",
                          borderWidthType: "",
                          borderWidth: "",
                          borderTopWidth: "",
                          borderRightWidth: "",
                          borderBottomWidth: "",
                          borderLeftWidth: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert",
                      },
                    ],
                  },
                  {
                    id: "tabShadow",
                    label: "Shadow",
                    options: [
                      {
                        id: "containerBoxShadow",
                        type: "boxShadow",
                        states: [NORMAL, HOVER],
                        default: {
                          containerBoxShadow: "",
                          containerBoxShadowColorHex: "#000000",
                          containerBoxShadowColorPalette: "",
                          containerBoxShadowColorOpacity: 1,
                          containerBoxShadowBlur: 0,
                          containerBoxShadowSpread: 0,
                          containerBoxShadowVertical: 0,
                          containerBoxShadowHorizontal: 0,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert",
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
            position: 110,
            options: [
              {
                id: "width",
                label: "Width",
                type: "slider",
                config: {
                  min: getValue("width")?.unit === "px" ? 200 : 15,
                  max: getValue("width")?.unit === "px" ? 1000 : 100,
                  units: [
                    { value: "px", title: "px" },
                    { value: "%", title: "%" },
                  ],
                },
                default: {
                  value: 100,
                  suffix: "%",
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}}": {
                      width: `${value.value}${value.unit}`,
                    },
                  };
                },
              },
              {
                id: "grid",
                type: "grid",
                config: {
                  separator: true,
                },
                columns: [
                  {
                    id: "col-1",
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
          {
            id: "advancedSettings",
            type: "advancedSettings",
            disabled: true,
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
                            id: "padding",
                            type: "padding",
                            devices: "desktop",
                            disabled: true,
                          },
                          {
                            id: "alertPadding",
                            type: "padding",
                            label: "Padding",
                            position: 50,
                            default: {
                              type: "grouped",
                              value: 15,
                              unit: "px",
                              top: 15,
                              topUnit: "px",
                              right: 15,
                              rightUnit: "px",
                              bottom: 15,
                              bottomUnit: "px",
                              left: 15,
                              leftUnit: "px",
                            },
                            selector: "{{WRAPPER}} .brz-ui-ed-alert",
                          },
                          {
                            id: "border",
                            type: "corners",
                            label: "Corner",
                            devices: "desktop",
                            position: 65,
                            default: {
                              type: "grouped",
                              value: 0,
                              topLeft: 0,
                              topLeftUnit: "px",
                              topRight: 0,
                              topRightUnit: "px",
                              bottomRight: 0,
                              bottomRightUnit: "px",
                              bottomLeft: 0,
                              bottomLeftUnit: "px",
                            },
                            selector: "{{WRAPPER}} .brz-ui-ed-alert",
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
                            position: 100,
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
                              return {
                                ["{{WRAPPER}} .brz-ui-ed-alert, {{WRAPPER}} .brz-ui-ed-alert-message, {{WRAPPER}} .brz-ui-ed-alert-content, {{WRAPPER}} .brz-ui-ed-alert-close-icon"]:
                                  {
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
                            helper: { content: helperHTML },
                            placeholder: `element { CSS goes here }`,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "padding",
                    type: "padding",
                    disabled: true,
                  },
                  {
                    id: "alertPadding",
                    type: "padding",
                    label: "Padding",
                    devices: "responsive",
                    position: 50,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        selector: ".brz-ui-ed-alert-message",
        toolbar: [
          {
            id: "toolbarTypography",
            type: "popover",
            config: {
              icon: "nc-font",
              size: "auto",
              title: "Typography",
            },
            position: 70,
            options: [
              {
                id: "gridTypographyParagraph",
                type: "grid",
                config: {
                  separator: true,
                },
                columns: [
                  {
                    id: "col-1",
                    size: 1,
                    align: "center",
                    options: [
                      {
                        id: "title",
                        type: "typography",
                        default: {
                          fontStyle: "",
                          fontFamilyType: "google",
                          fontSize: 20,
                          fontSizeSuffix: "px",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          letterSpacing: 0,
                          variableFontWeight: 400,
                          fontWidth: 100,
                          fontSoftness: 0,
                          bold: false,
                          italic: false,
                          underline: false,
                          strike: false,
                          uppercase: false,
                          lowercase: false,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-message",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "toolbarColor",
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
                    id: "tabTitle",
                    label: "Title",
                    options: [
                      {
                        id: "titleColor",
                        type: "colorPicker",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "",
                          opacity: 1,
                          palette: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-message:hover",
                      },
                    ],
                  },
                  {
                    id: "tabShadow",
                    label: "Shadow",
                    options: [
                      {
                        id: "titleTextShadow",
                        type: "textShadow",
                        states: [NORMAL, HOVER],
                        default: {
                          titleTextShadow: "",
                          blur: 4,
                          hex: "#ff0000",
                          opacity: 0,
                          palette: "",
                          horizontal: 2,
                          vertical: 2,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-message:hover",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "titleHorizontalAlign",
            type: "toggle",
            position: 100,
            choices: [
              { icon: "nc-text-align-left", title: "Align", value: "left" },
              { icon: "nc-text-align-center", title: "Align", value: "center" },
              { icon: "nc-text-align-right", title: "Align", value: "right" },
            ],
            default: {
              value: "left",
            },
            style: ({ value }) => {
              return {
                "{{WRAPPER}} .brz-ui-ed-alert-message": {
                  "text-align": `${value.value}`,
                },
              };
            },
          },
        ],
      },
      {
        selector: ".brz-ui-ed-alert-description",
        toolbar: [
          {
            id: "toolbarTypography",
            type: "popover",
            config: {
              icon: "nc-font",
              size: "auto",
              title: "Typography",
            },
            position: 70,
            options: [
              {
                id: "gridTypographyParagraph",
                type: "grid",
                config: {
                  separator: true,
                },
                columns: [
                  {
                    id: "col-1",
                    size: 1,
                    align: "center",
                    options: [
                      {
                        id: "description",
                        type: "typography",
                        default: {
                          fontFamily: "",
                          fontStyle: "",
                          fontFamilyType: "google",
                          fontSize: 13,
                          fontSizeSuffix: "px",
                          fontWeight: 400,
                          lineHeight: 1.3,
                          letterSpacing: 0,
                          variableFontWeight: 400,
                          fontWidth: 100,
                          fontSoftness: 0,
                          bold: false,
                          italic: false,
                          underline: false,
                          strike: false,
                          uppercase: false,
                          lowercase: false,
                        },
                        selector: ".brz-ui-ed-alert-description",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "toolbarColor",
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
                    id: "tabDescription",
                    label: "Description",
                    options: [
                      {
                        id: "descriptionColor",
                        type: "colorPicker",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "",
                          opacity: 1,
                          palette: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-description",
                      },
                    ],
                  },
                  {
                    id: "tabShadow",
                    label: "Shadow",
                    options: [
                      {
                        id: "descriptionTextShadow",
                        type: "textShadow",
                        states: [NORMAL, HOVER],
                        default: {
                          blur: 4,
                          hex: "#ff0000",
                          opacity: 0,
                          palette: "",
                          horizontal: 2,
                          vertical: 2,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-description",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "descriptionHorizontalAlign",
            type: "toggle",
            position: 100,
            choices: [
              { icon: "nc-text-align-left", title: "Align", value: "left" },
              { icon: "nc-text-align-center", title: "Align", value: "center" },
              { icon: "nc-text-align-right", title: "Align", value: "right" },
            ],
            default: {
              value: "left",
            },
            style: ({ value }) => {
              return {
                "{{WRAPPER}} .brz-ui-ed-alert-description": {
                  "text-align": `${value.value}`,
                },
              };
            },
          },
          {
            id: "toolbarSettings",
            type: "popover",
            config: {
              icon: "nc-cog",
              title: "Settings",
            },
            position: 110,
            options: [
              {
                id: "gap",
                label: "Gap",
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
                    "{{WRAPPER}} .brz-ui-ed-alert-description": {
                      "padding-top": `${value.value}${value.unit}`,
                    },
                  };
                },
              },
            ],
          },
        ],
      },
      {
        selector: ".brz-ui-ed-alert-close-icon",
        toolbar: [
          {
            id: "toolbarCloseButtonIcon",
            type: "popover",
            config: {
              icon: "nc-star",
              title: "Icon",
            },
            position: 70,
            options: [
              {
                id: "toolbarCloseButtonIconTabs",
                type: "tabs",
                tabs: [
                  {
                    id: "tabIcon",
                    label: "Icon",
                    options: [
                      {
                        id: "closeHorizontalPosition",
                        label: "Lateral",
                        type: "slider",
                        config: {
                          min: 0,
                          max: 50,
                          units: [{ title: "px", value: "px" }],
                        },
                        default: {
                          value: 20,
                          suffix: "px",
                        },
                        style: ({ value }) => {
                          return {
                            "{{WRAPPER}} .brz-ui-ed-alert-close-icon": {
                              position: "absolute",
                              right: `${value.value}${value.unit}`,
                            },
                          };
                        },
                      },
                      {
                        id: "closeVerticalPosition",
                        label: "Vertical",
                        type: "slider",
                        config: {
                          min: 0,
                          max: 50,
                          units: [{ title: "px", value: "px" }],
                        },
                        default: {
                          value: 20,
                          suffix: "px",
                        },
                        style: ({ value }) => {
                          return {
                            "{{WRAPPER}} .brz-ui-ed-alert-close-icon": {
                              position: "absolute",
                              top: `${value.value}${value.unit}`,
                            },
                          };
                        },
                      },
                      {
                        id: "groupCloseSize",
                        type: "group",
                        options: [
                          {
                            id: "closeSize",
                            label: "Size",
                            type: "radioGroup",
                            choices: [
                              { value: "small", icon: "nc-16" },
                              { value: "medium", icon: "nc-24" },
                              { value: "large", icon: "nc-32" },
                              { value: "custom", icon: "nc-more" },
                            ],
                            default: {
                              value: "small",
                            },
                            style: ({ value }) => {
                              return {
                                "{{WRAPPER}} .brz-ui-ed-alert-close-icon": {
                                  "pointer-events": "none", // need to disable in preview
                                  "font-size":
                                    value.value === "small"
                                      ? "16px"
                                      : value.value === "medium"
                                      ? "24px"
                                      : value.value === "large"
                                      ? "32px"
                                      : getValue("closeCustomSize")?.value + getValue("closeCustomSize")?.unit,
                                },
                              };
                            },
                          },
                          {
                            id: "closeCustomSize",
                            type: "slider",
                            disabled: getValue("closeSize")?.value !== "custom",
                            config: {
                              min: 8,
                              max: 50,
                              units: [{ title: "px", value: "px" }],
                            },
                            default: {
                              value: 16,
                              suffix: "px",
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "tabBackground",
                    label: "Background",
                    options: [
                      {
                        id: "closeBgSize",
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
                          console.log("VALUE");
                          return {
                            "{{WRAPPER}} .brz-ui-ed-alert-close-icon > svg": {
                              "box-sizing": "content-box",
                              padding: `${value.value}${value.unit}`,
                            },
                          };
                        },
                      },
                      {
                        id: "groupCloseBorderRadiusShape",
                        type: "group",
                        options: [
                          {
                            id: "closeBorderRadiusShape",
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
                                "{{WRAPPER}} .brz-ui-ed-alert-close-icon": {
                                  "border-radius":
                                    value.value === "square" ? `0px` : value.value === "rounded" ? `50px` : 0,
                                },
                              };
                            },
                          },
                          {
                            id: "closeBorderRadius",
                            type: "slider",
                            disabled: getValue("closeBorderRadiusShape")?.value !== "custom",
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
                                "{{WRAPPER}} .brz-ui-ed-alert-close-icon": {
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
            id: "toolbarColor",
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
                        id: "closeColor",
                        type: "colorPicker",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "#000000",
                          opacity: 1,
                          palette: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-close-icon",
                      },
                    ],
                  },
                  {
                    id: "tabBackground",
                    label: "Background",
                    options: [
                      {
                        id: "closeBgColor",
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
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-close-icon",
                      },
                    ],
                  },
                  {
                    id: "tabBoxShadow",
                    label: "Shadow",
                    options: [
                      {
                        id: "boxShadow",
                        type: "boxShadow",
                        states: [NORMAL, HOVER],
                        default: {
                          hex: "#000000",
                          opacity: 1,
                          palette: "",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-alert-close-icon",
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
