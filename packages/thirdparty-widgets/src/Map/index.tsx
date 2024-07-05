import { AlphaMap2 } from "@brizy/builder-ui";
import "@brizy/builder-ui/lib/components/AlphaMap2/style/index.css";
import { Brizy } from "@brizy/core";
import { JSX } from "react";
import { helperHTML } from "../utils/constants";
import { OutputOptionStyle } from "../utils/cssStyle/types";
import { HOVER, NORMAL } from "../utils/stateMode";
import { Props } from "./types";

export const MapEditor = ({ address, zoom }: Props): JSX.Element => <AlphaMap2 address={address} zoom={zoom} />;

export const MapPreview = ({ address, zoom }: Props): JSX.Element => (
  <AlphaMap2 address={address} zoom={zoom} isPreview />
);

Brizy.registerComponent({
  id: "myComp",
  component: { editor: MapEditor, view: MapPreview },
  title: "map",
  category: "custom",
  options: ({ getValue }) => {
    return [
      {
        selector: ".brz-ui-ed-map",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            position: 1,
            config: {
              icon: "nc-pin",
              title: "Map",
            },
            devices: "desktop",
            options: [
              {
                id: "tabsCurrentElement",
                type: "tabs",
                tabs: [
                  {
                    id: "tabCurrentElement",
                    label: "Map",
                    options: [
                      {
                        id: "address",
                        label: "Address",
                        type: "inputText",
                        placeholder: "Enter address",
                        default: {
                          value: "Chisinau",
                        },
                      },
                      {
                        id: "zoom",
                        label: "Zoom",
                        type: "slider",
                        default: {
                          value: 15,
                        },
                        config: {
                          min: 1,
                          max: 21,
                        },
                      },
                    ],
                  },
                  {
                    id: "filters",
                    label: "Filters",
                    options: [
                      {
                        id: "filter",
                        type: "filters",
                        default: {
                          saturation: 100,
                          brightness: 100,
                          contrast: 100,
                        },
                        states: [NORMAL, HOVER],
                        selector: "{{WRAPPER}}:hover .brz-ui-ed-iframe",
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
            position: 2,
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
                        selector: "{{WRAPPER}}:hover .brz-ui-ed-iframe",
                        states: [NORMAL, HOVER],
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
                        selector: `{{WRAPPER}}:hover .brz-ui-ed-map:before`,
                        states: [NORMAL, HOVER],
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
                        devices: "desktop",
                        selector: "{{WRAPPER}}:hover .brz-ui-ed-map-content",
                        states: [NORMAL, HOVER],
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
            position: 101,
            config: {
              icon: "nc-cog",
              title: "Settings",
            },
            options: [
              {
                id: "width",
                label: "Width",
                type: "slider",
                default: {
                  value: 100,
                  suffix: "%",
                },
                config: {
                  min: 1,
                  max: getValue("size")?.unit === "px" ? 1000 : 100,
                  units: [
                    { value: "px", title: "px" },
                    { value: "%", title: "%" },
                  ],
                },
                style: ({ value }) => {
                  return {
                    "{{WRAPPER}}": {
                      width: `${value.value}${value.unit || "%"}`,
                    },
                  };
                },
              },
              {
                id: "height",
                label: "Height",
                type: "slider",
                default: {
                  value: 400,
                  suffix: "px",
                },
                config: {
                  min: 5,
                  max: getValue("height")?.unit === "%" ? 100 : 999,
                  units: [
                    { value: "px", title: "px" },
                    { value: "%", title: "%" },
                  ],
                },
                style: ({ value }) => {
                  const percentOutput: OutputOptionStyle = {
                    "{{WRAPPER}}:after": {
                      content: "",
                      display: "block",
                      width: 0,
                      "padding-top": `${value.value}${value.unit}`,
                    },

                    "{{WRAPPER}}": {
                      height: "unset",
                    },
                  };

                  if (value.unit === "%") {
                    return percentOutput;
                  }

                  return {
                    "{{WRAPPER}}": {
                      height: `${value.value}${value.unit || "px"}`,
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
                            selector: "{{WRAPPER}} .brz-ui-ed-iframe",
                          },
                          {
                            id: "border",
                            type: "corners",
                            label: "Corner",
                            devices: "desktop",
                            selector: `{{WRAPPER}} .brz-ui-ed-map-content, {{WRAPPER}} .brz-ui-ed-map:before`,
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
                            default: {
                              value: 50,
                            },
                            config: {
                              min: 0,
                              max: 99,
                              units: [{ title: "ms", value: "ms" }],
                            },
                            style: ({ value }) => {
                              return {
                                [`{{WRAPPER}} .brz-ui-ed-map-content, {{WRAPPER}} .brz-ui-ed-iframe, {{WRAPPER}} .brz-ui-ed-map:before`]:
                                  {
                                    "transition-duration": `0.${value.value}s`,
                                    "transition-property":
                                      "filter, box-shadow, background, border-radius, border-color",
                                  },
                              };
                            },
                          },
                          {
                            id: "customCSS",
                            label: "Custom CSS",
                            type: "codeMirror",
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
