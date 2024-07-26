import { HOVER, NORMAL } from "../../../utils/stateMode";

export const alertClose = ({ getValue }: any) => {
  return {
    selector: ".brz-ui-ed-alert-close-icon",
    toolbar: [
      {
        id: "toolbarAlertCloseIcon",
        type: "popover",
        config: {
          icon: "nc-star",
          title: "Icon",
        },
        position: 70,
        options: [
          {
            id: "toolbarAlertCloseIconTabs",
            type: "tabs",
            tabs: [
              {
                id: "tabAlertCloseIcon",
                label: "Icon",
                options: [
                  {
                    id: "alertCloseIconSize",
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
                        "{{WRAPPER}} .brz-ui-ed-alert-close-icon": {
                          "font-size": `${value.value}${value.unit}`,
                        },
                      };
                    },
                  },
                ],
              },
              {
                id: "tabAlertCloseIconBackgroundSize",
                label: "Background",
                options: [
                  {
                    id: "alertCloseIconBgSize",
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
                        "{{WRAPPER}} .brz-ui-ed-alert-close-icon": {
                          "pointer-events": "none", // disable in preview
                          "box-sizing": "content-box",
                          padding: `${value.value}${value.unit}`,
                        },
                      };
                    },
                  },
                  {
                    id: "groupAlertCloseIconBorderRadiusShape",
                    type: "group",
                    options: [
                      {
                        id: "alertCloseIconBorderRadiusShape",
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
                        id: "alertCloseIconBorderRadius",
                        type: "slider",
                        disabled: getValue("alertCloseIconBorderRadiusShape")?.value !== "custom",
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
        id: "toolbarAlertCloseIconColor",
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
            id: "tabsAlertCloseIconColor",
            type: "tabs",
            tabs: [
              {
                id: "tabAlertCloseIcon",
                label: "Icon",
                options: [
                  {
                    id: "alertCloseIconColor",
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
                id: "tabAlertCloseIconBackgroundColor",
                label: "Background",
                options: [
                  {
                    id: "alertCloseIconBgColor",
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
                id: "tabAlertCloseIconBoxShadow",
                label: "Shadow",
                options: [
                  {
                    id: "alertCloseIconBoxShadow",
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
  };
};
