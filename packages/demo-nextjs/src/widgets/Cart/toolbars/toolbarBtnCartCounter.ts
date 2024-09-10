import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarBtnCartCounter = {
  selector: ".brz-ui-ed-badge-count",
  toolbar: [
    {
      id: "popoverTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "large",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "counterTypography",
          type: "typography",
          selector: "{{WRAPPER}} .brz-ui-ed-badge-count",
          config: {
            fontFamily: true,
          },
          default: {
            fontSize: 11,
            fontWeight: 500,
          },
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
            backgroundColor: "#000000",
          },
        },
      },
      position: 90,
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
                  id: "counterBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}}:hover .brz-ui-ed-badge sup.brz-ui-ed-badge-count",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    bgColorType: "solid",
                    bgColorHex: "#2563eb",
                    bgColorOpacity: 1,
                  },
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "counterBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}}:hover .brz-ui-ed-badge sup.brz-ui-ed-badge-count`,
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    bgColorType: "solid",
                    bgColorHex: "#2563eb",
                    bgColorOpacity: 1,
                  },
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "counterBoxShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}}:hover .brz-ui-ed-badge sup.brz-ui-ed-badge-count",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabColor",
              label: "Text",
              options: [
                {
                  id: "counterTextColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}}:hover .brz-ui-ed-badge sup.brz-ui-ed-badge-count",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#ffffff",
                    opacity: 1,
                  },
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
      position: 100,
      options: [
        {
          id: "width",
          label: "Width",
          type: "slider",
          config: {
            min: 0,
            max: 50,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 16,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-badge sup.brz-ui-ed-badge-count": {
                width: `${value.value}${value.unit}`,
              },
            };
          },
        },
        {
          id: "height",
          label: "Height",
          type: "slider",
          config: {
            min: 0,
            max: 50,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 16,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-badge sup.brz-ui-ed-badge-count": {
                height: `${value.value}${value.unit}`,
              },
            };
          },
        },
      ],
    },
    ...disabledOptions,
  ],
};
