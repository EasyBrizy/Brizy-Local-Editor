import { AlphaLottieHtml, AlphaLottieReact } from "@brizy/builder-ui";
import { Renderer } from "@brizy/builder-ui/lib/elements/AlphaLottie/utils";
import { Brizy } from "@brizy/core";
import { HOVER, NORMAL } from "../utils/stateMode";

interface Props {
  renderer: "svg" | "canvas";
  autoplay: "off" | "on";
  direction: -1 | 1;
  loop: "on" | "off";
  speed: number;
}

export const LottieEditor = ({ renderer, autoplay, loop, speed, direction }: Props) => {
  const isAutoplay = autoplay === "on";
  const isLoop = loop === "on";

  return (
    <AlphaLottieReact
      animationData="https://assets6.lottiefiles.com/private_files/lf30_1KyL2Q.json"
      renderer={renderer === "svg" ? Renderer.svg : Renderer.canvas}
      isAutoplay={isAutoplay}
      isLoop={isLoop}
      direction={direction}
      speed={speed}
    />
  );
};

export const LottiePreview = ({ renderer, autoplay, loop, speed, direction }: Props) => {
  const isAutoplay = autoplay === "on";
  const isLoop = loop === "on";

  return (
    <AlphaLottieHtml
      animationData="https://assets6.lottiefiles.com/private_files/lf30_1KyL2Q.json"
      renderer={renderer === "svg" ? Renderer.svg : Renderer.canvas}
      isAutoplay={isAutoplay}
      isLoop={isLoop}
      direction={direction}
      speed={speed}
    />
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Lottie",
  component: { editor: LottieEditor, view: LottiePreview },
  title: "Lottie",
  category: "custom",
  // @ts-ignore
  options: ({ getValue }) => {
    const isAutoplayOff = getValue("autoplay")?.value === "off";

    return [
      {
        selector: ".brz-ui-ed-lottie",
        toolbar: [
          {
            id: "toolbarCurrentShortcode",
            type: "popover",
            config: {
              icon: "nc-lottie",
              title: "Lottie",
            },
            devices: "desktop",
            position: 70,
            options: [
              {
                id: "animationLink",
                label: "Lottie Link",
                type: "inputText",
                placeholder: "lottie link",
                disabled: getValue("animationFile")?.name !== "",
                helper: {
                  content: "This is Lottie .json URL. Get more from LottieFiles.com.",
                },
                default: {
                  value: "https://assets6.lottiefiles.com/private_files/lf30_1KyL2Q.json",
                },
              },
              {
                id: "animationFile",
                label: "Lottie File",
                type: "fileUpload",
                config: {
                  allowedExtensions: [".json"],
                  componentId: "Lottie",
                },
                default: {
                  value: "",
                },
              },
              {
                id: "renderer",
                type: "select",
                label: "Renderer",
                choices: [
                  { title: "SVG", value: "svg" },
                  { title: "Canvas", value: "canvas" },
                ],
                default: {
                  value: "svg",
                },
              },
              {
                id: "autoplay",
                label: "Autoplay",
                type: "switch",
                default: {
                  value: "on",
                },
              },
              {
                id: "direction",
                label: "Reverse",
                type: "switch",
                disabled: isAutoplayOff,
                config: {
                  on: "-1",
                  off: "1",
                },
                default: {
                  value: "1",
                },
              },
              {
                id: "loop",
                label: "Loop",
                type: "switch",
                disabled: isAutoplayOff,
                default: {
                  value: "on",
                },
              },
              {
                id: "speed",
                type: "slider",
                label: "Speed",
                config: {
                  min: 0.1,
                  max: 5,
                  step: 0.1,
                },
                default: {
                  value: 1,
                },
              },
            ],
          },
          {
            id: "toolbarColor",
            type: "popover",
            position: 80,
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
                        id: "",
                        type: "backgroundColor",
                        states: [NORMAL, HOVER],
                        default: {
                          bgColorType: "solid",
                          bgColorHex: "#fff",
                          bgColorOpacity: 0,
                          bgColorPalette: "color2",
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-lottie",
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
                          style: "solid",
                          colorHex: "#66738d",
                          colorOpacity: 0,
                          colorPalette: "",
                          widthType: "grouped",
                          width: 0,
                          topWidth: 0,
                          rightWidth: 0,
                          bottomWidth: 0,
                          leftWidth: 0,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-lottie",
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
                          type: "none",
                          colorHex: "#000000",
                          colorOpacity: 1,
                          colorPalette: "",
                          blur: 0,
                          spread: 0,
                          vertical: 0,
                          horizontal: 0,
                        },
                        selector: "{{WRAPPER}} .brz-ui-ed-lottie",
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
              title: "Settings",
              icon: "nc-cog",
            },
            position: 110,
            options: [
              {
                id: "width",
                label: "Width",
                type: "slider",
                config: {
                  min: 1,
                  max: getValue("width")?.value === "px" ? 1000 : 100,
                  units: [
                    { value: "px", title: "px" },
                    { value: "%", title: "%" },
                  ],
                },
                default: {
                  value: 75,
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
                            default: {
                              type: "grouped",
                              value: 0,
                              suffix: "px",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              topSuffix: "px",
                              rightSuffix: "px",
                              bottomSuffix: "px",
                              leftSuffix: "px",
                            },
                            selector: "{{WRAPPER}} .brz-ui-ed-lottie svg, {{WRAPPER}} .brz-ui-ed-lottie canvas",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "settingsTabsResponsive",
                    type: "tabs",
                    config: {
                      align: "start",
                    },
                    devices: "responsive",
                    tabs: [
                      {
                        id: "settingsStyling",
                        label: "Basic",
                        position: 10,
                        options: [
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
                            default: {
                              type: "grouped",
                              value: 0,
                              suffix: "px",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              topSuffix: "px",
                              rightSuffix: "px",
                              bottomSuffix: "px",
                              leftSuffix: "px",
                            },
                            selector:
                              "{{WRAPPER}} .brz-ui-ed-lottie svg, {{WRAPPER}} .brz-ui-ed-lottie canvas, {{WRAPPER}} .brz-ui-ed-lottie-anim svg, {{WRAPPER}} .brz-ui-ed-lottie-anim canvas",
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
