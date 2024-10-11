import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarCartHeaderClose = {
  selector: ".brz-ui-ed-drawer-html-extra",
  toolbar: [
    {
      id: "toolbarCurrentShortcode",
      type: "popover",
      config: {
        icon: "nc-star",
        title: "Icon",
      },
      position: 70,
      options: [
        {
          id: "sizeGroup",
          type: "group",
          position: 60,
          options: [
            {
              id: "closeIconSize",
              label: "Size",
              type: "slider",
              config: {
                min: 14,
                max: 180,
                units: [{ title: "px", value: "px" }],
              },
              default: {
                value: 24,
                suffix: "px",
              },
              style: ({ value }: { value: { value: number; unit: string } }) => {
                return {
                  "{{WRAPPER}} .brz-ui-ed-drawer-html-extra svg": {
                    width: `${value.value}${value.unit}`,
                    height: `${value.value}${value.unit}`,
                  },
                };
              },
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
                  id: "closeIconBg",
                  type: "backgroundColor",
                  selector:
                    "{{WRAPPER}} .brz-ui-ed-drawer-html-header .brz-ui-ed-drawer-html-extra button.brz-ui-ed-btn:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "closeIconBorder",
                  type: "border",
                  devices: "desktop",
                  selector:
                    "{{WRAPPER}} .brz-ui-ed-drawer-html-header .brz-ui-ed-drawer-html-extra button.brz-ui-ed-btn:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    colorHex: "#D3D3D3",
                    colorOpacity: 1,
                    style: "solid",
                    width: 1,
                    topWidth: 1,
                    rightWidth: 1,
                    bottomWidth: 1,
                    leftWidth: 1,
                  },
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "closeIconShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-drawer-html-extra button:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabColor",
              label: "Icon",
              options: [
                {
                  id: "closeIconColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-drawer-html-extra:hover svg",
                  states: [States.NORMAL, States.HOVER],
                  // default: {
                  //   hex: "#ffffff",
                  //   opacity: 1,
                  // },
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
          id: "closeWidth",
          label: "Width",
          type: "slider",
          config: {
            min: 0,
            max: 200,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 45,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-drawer-html-extra button": {
                "min-width": `${value.value}${value.unit}`,
              },
            };
          },
        },
        {
          id: "closeHeight",
          label: "Height",
          type: "slider",
          config: {
            min: 0,
            max: 200,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 45,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-drawer-html-extra button": {
                "min-height": `${value.value}${value.unit}`,
              },
            };
          },
        },
      ],
    },
    ...disabledOptions,
  ],
};
