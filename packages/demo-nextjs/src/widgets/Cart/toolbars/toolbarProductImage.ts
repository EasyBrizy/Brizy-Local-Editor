import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarProductImage = {
  selector: ".brz-ui-ed-cart-item-image",
  toolbar: [
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
              label: "Overlay",
              options: [
                {
                  id: "productImageBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item .brz-ui-ed-image:after:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    bgColorType: "solid",
                  },
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "productImageBorder",
                  type: "border",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-image:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    style: "solid",
                    width: 1,
                    colorHex: "#D3D3D3",
                    colorOpacity: 1,
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
                  id: "productImageBoxShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-image:hover",
                  states: [States.NORMAL, States.HOVER],
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
          id: "productImageWidth",
          label: "Width",
          type: "slider",
          config: {
            min: 0,
            max: 200,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 100,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-cart-item-image.brz-ui-ed-cart-item-image": {
                width: `${value.value}${value.unit}`,
              },
            };
          },
        },
        {
          id: "productImageHeight",
          label: "Height",
          type: "slider",
          config: {
            min: 0,
            max: 200,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 100,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-cart-item-image.brz-ui-ed-cart-item-image": {
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
