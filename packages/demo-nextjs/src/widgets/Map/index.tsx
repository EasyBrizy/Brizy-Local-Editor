import { Brizy } from "@brizy/core";
import { Editor } from "./Editor";
import { View } from "./View";
import "./index.scss";

const Map = { Editor, View };

export default Map;

Brizy.registerComponent({
  id: "Brizy.ThirdParty.Map",
  component: {
    editor: Editor,
    view: View,
  },
  title: "Map",
  category: "custom",
  options: () => {
    return [
      {
        selector: ".brz-ui-ed-map-content",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-pin",
              title: "Map",
            },
            devices: "desktop",
            position: 90,
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
                        id: "width",
                        label: "Width",
                        type: "slider",
                        config: {
                          min: 0,
                          max: 100,
                          units: [
                            { title: "px", value: "px" },
                            { title: "%", value: "%" },
                          ],
                        },
                        default: {
                          value: 100,
                          suffix: "%",
                        },
                        style: ({ value }: { value: { value: number; unit: string } }) => {
                          const { value: width, unit } = value;

                          return {
                            "{{WRAPPER}}.brz-third-party .brz-ui-ed-map-content": { width: `${width}${unit}` },
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
            id: "advancedSettings", // Sidebar trigger
            type: "advancedSettings",
            title: "Settings",
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
                    config: { align: "start" },
                    tabs: [
                      {
                        id: "settingsStyling",
                        label: "Basic",
                        options: [
                          {
                            id: "hoverTransition",
                            type: "slider",
                            label: "Hover Transition",
                            position: 100
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ];
  },
});
