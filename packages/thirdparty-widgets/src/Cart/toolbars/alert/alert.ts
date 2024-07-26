import { HOVER, NORMAL } from "../../../utils/stateMode";

export const toolbarAlert = {
  selector: ".brz-ui-ed-cart-alert",
  toolbar: [
    {
      id: "toolbarAlertContainerColor",
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
          id: "tabsAlertContainerColor",
          type: "tabs",
          tabs: [
            {
              id: "tabAlertContainerBackground",
              label: "Background",
              options: [
                {
                  id: "alertContainerBgColor",
                  type: "backgroundColor",
                  states: [NORMAL, HOVER],
                  default: {
                    bgColorHex: "#e6f4ff",
                    bgColorOpacity: 1,
                    bgColorPalette: "",
                    bgColorType: "solid",
                    gradientLinearDegree: 90,
                    gradientRadialDegree: 90,
                  },
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-alert",
                },
              ],
            },
            {
              id: "tabAlertContainerBorder",
              label: "Border",
              options: [
                {
                  id: "alertContainerBorder",
                  type: "border",
                  states: [NORMAL, HOVER],
                  default: {
                    borderColorHex: "#91caff",
                    borderColorOpacity: 1,
                    borderColorPalette: "",
                    borderStyle: "solid",
                    borderWidthType: "",
                    borderWidth: "1",
                    borderTopWidth: "1",
                    borderRightWidth: "1",
                    borderBottomWidth: "1",
                    borderLeftWidth: "1",
                  },
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-alert",
                },
              ],
            },
            {
              id: "tabAlertContainerShadow",
              label: "Shadow",
              options: [
                {
                  id: "alertContainerBoxShadow",
                  type: "boxShadow",
                  states: [NORMAL, HOVER],
                  default: {
                    colorHex: "#000000",
                    colorPalette: "",
                    colorOpacity: 1,
                    blur: 0,
                    spread: 0,
                    vertical: 0,
                    horizontal: 0,
                  },
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-alert",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
