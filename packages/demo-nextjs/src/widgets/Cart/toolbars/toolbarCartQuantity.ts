import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarCartQuantity = {
  selector: ".brz-ui-ed-cart-item-wrapper-quantity-input-number",
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
          id: "quantityTypography",
          type: "typography",
          selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-quantity-input-number input",
          config: {
            fontFamily: true,
          },
          default: {
            fontSize: 16,
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
                  id: "quantityBg",
                  type: "backgroundColor",
                  selector:
                    "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-quantity-input-number:hover,{{WRAPPER}} .brz-ui-ed-input-number-handler:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    bgColorType: "solid",
                    bgColorHex: "#ffffff",
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
                  id: "quantityBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-quantity-input-number:hover,{{WRAPPER}} .brz-ui-ed-input-number-handler:hover`,
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    style: "solid",
                    width: 1,
                    colorHex: "#d9d9d9",
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
                  id: "quantityBoxShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-quantity-input-number:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabColor",
              label: "Text",
              options: [
                {
                  id: "quantityTextColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-quantity-input-number input:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabIconColor",
              label: "Icon",
              options: [
                {
                  id: "quantityIconColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-input-number-handler .anticon:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#737373",
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
          id: "quantityWidth",
          label: "Width",
          type: "slider",
          config: {
            min: 0,
            max: 160,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 70,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-quantity-input-number": {
                width: `${value.value}${value.unit}`,
              },
            };
          },
        },
        {
          id: "quantityHeight",
          label: "Height",
          type: "slider",
          config: {
            min: 0,
            max: 200,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 30,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-quantity-input-number": {
                height: `${value.value}${value.unit}`,
              },
            };
          },
        },
        {
          id: "arrowSize",
          label: "Arrow Size",
          type: "slider",
          config: {
            min: 0,
            max: 40,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 10,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-input-number-handler-wrap span.brz-ui-ed-input-number-handler span.anticon": {
                "font-size": `${value.value}${value.unit}`,
              },
            };
          },
        },
      ],
    },
    ...disabledOptions,
  ],
};
