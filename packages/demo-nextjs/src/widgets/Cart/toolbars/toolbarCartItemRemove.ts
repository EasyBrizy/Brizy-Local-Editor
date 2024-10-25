import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarCartItemRemove = {
  selector: ".brz-ui-ed-cart-item-wrapper-remove-button",
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
              id: "removeIconSize",
              label: "Size",
              type: "slider",
              config: {
                min: 14,
                max: 50,
                units: [{ title: "px", value: "px" }],
              },
              default: {
                value: 16,
                suffix: "px",
              },
              style: ({ value }: { value: { value: number; unit: string } }) => {
                return {
                  "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button": {
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
                  id: "closeItemIconBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "closeItemIconBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button:hover`,
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "closeItemIconShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabColor",
              label: "Icon",
              options: [
                {
                  id: "closeItemIconColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-remove-button:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#000000",
                    opacity: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    ...disabledOptions,
  ],
};
