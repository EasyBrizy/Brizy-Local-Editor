import { AlphaEmbedCode } from "@brizy/builder-ui";
import { Brizy } from "@brizy/core";
import { helperHTML } from "../utils/constants";
import { HOVER, NORMAL } from "../utils/stateMode";
import { Props } from "./types";
import { JSX } from "react";

export const EmbedCodeEditor = ({ code }: Props): JSX.Element => {
  return (
    <div className="brz-embed-code">
      <AlphaEmbedCode code={code} className="brz-blocked" />
    </div>
  );
};

export const EmbedCodePreview = ({ code }: Props): JSX.Element => {
  return (
    <div className="brz-embed-code">
      <AlphaEmbedCode code={code} ssr />
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.EmbedCode",
  component: { editor: EmbedCodeEditor, view: EmbedCodePreview },
  title: "EmbedCode",
  category: "custom",
  // @ts-ignore
  options: ({ getValue }) => {
    return [
      {
        selector: ".brz-embed-code",
        toolbar: [
          {
            id: "popoverCode",
            type: "popover",
            config: {
              icon: "nc-iframe",
              size: "large",
              title: "Embed",
            },
            devices: "desktop",
            position: 90,
            options: [
              {
                id: "code",
                type: "codeMirror",
                placeholder: "Paste your HTML code here...",
                config: {
                  language: "html",
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
                    id: "tabBackground",
                    label: "Background",
                    options: [
                      {
                        id: "background",
                        type: "backgroundColor",
                        states: [NORMAL, HOVER],
                        selector: "{{WRAPPER}} .brz-ui-ed-embed-content",
                        default: {
                          bgColorType: "solid",
                          bgColorHex: "#ffffff",
                          bgColorOpacity: 0,
                          bgColorPalette: "color2",
                          gradientType: "linear",
                          gradientLinearDegree: 90,
                          gradientRadialDegree: 90,
                          gradientActivePointer: "startPointer",
                          gradientStartPointer: 0,
                          gradientFinishPointer: 100,
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
                        states: [NORMAL, HOVER],
                        selector: "{{WRAPPER}} .brz-embed-code:hover:before",
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
                        selector: "{{WRAPPER}} .brz-embed-code:hover:before",
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
                  min: 1,
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
                    "{{WRAPPER}}:hover": {
                      width: `${value.value}${value.unit || "%"}`,
                    },
                  };
                },
              },
              {
                id: "groupHeightSize",
                type: "group",
                options: [
                  {
                    id: "heightStyle",
                    label: "Height",
                    type: "select",
                    choices: [
                      { title: "Auto", value: "auto" },
                      { title: "Custom", value: "custom" },
                    ],
                    default: {
                      value: "auto",
                    },
                  },
                  {
                    id: "height",
                    type: "slider",
                    disabled: getValue("heightStyle")?.value !== "custom",
                    config: {
                      min: 20,
                      max: 10000,
                      units: [{ value: "px", title: "px" }],
                    },
                    default: {
                      value: 250,
                      suffix: "px",
                    },
                    style: ({ value }) => {
                      return {
                        "{{WRAPPER}} .brz-embed-code": {
                          "min-height":
                            getValue("heightStyle")?.value === "custom" ? `${value.value}${value.unit}` : "100%",
                        },
                      };
                    },
                  },
                ],
              },
              {
                id: "overflow",
                label: "Overflow",
                type: "switch",
                helper: {
                  content: "Shows, in preview only, the content that renders outside the element box.",
                },
                default: {
                  value: "off",
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}} .brz-ui-ed-embed-content": {
                      overflow: value.value === "on" ? "visible" : "hidden",
                    },
                  };
                },
              },
              {
                id: "grid",
                type: "grid",
                config: { separator: true },
                columns: [
                  {
                    id: "grid-settings",
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
                    id: "grid-effects",
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
                            id: "padding",
                            type: "padding",
                            label: "Padding",
                            disabled: true,
                          },
                          {
                            id: "bgPadding",
                            type: "padding",
                            label: "Padding",
                            position: 50,
                            selector: "{{WRAPPER}} .brz-ui-ed-embed-content",
                          },
                          {
                            id: "border",
                            type: "corners",
                            label: "Corner",
                            devices: "desktop",
                            position: 65,
                            selector: "{{WRAPPER}} .brz-embed-code:hover:before, {{WRAPPER}} .brz-ui-ed-embed-content",
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
                            },
                            style: ({ value }) => {
                              return {
                                ["{{WRAPPER}} .brz-embed-code:hover:before, {{WRAPPER}} .brz-ui-ed-embed-content"]: {
                                  "transition-duration": `0.${value.value}s`,
                                  "transition-property": "filter, box-shadow, background, border-radius, border-color",
                                },
                              };
                            },
                          },
                          {
                            id: "customCSS",
                            label: "Custom CSS",
                            type: "codeMirror",
                            position: 50,
                            display: "block",
                            devices: "desktop",
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
                    label: "Padding",
                    devices: "responsive",
                    disabled: true,
                  },
                  {
                    id: "bgPadding",
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
    ];
  },
});
