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
    view: View
  },
  title: "Map",
  category: "custom",
  options: () => {
    return [
      {
        selector: ".mapThirdComponent",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-pin",
              title: "Map"
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
                          value: "Chisinau"
                        }
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
                            { title: "%", value: "%" }
                          ]
                        },
                        default: {
                          value: 100,
                          suffix: "%"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
});
