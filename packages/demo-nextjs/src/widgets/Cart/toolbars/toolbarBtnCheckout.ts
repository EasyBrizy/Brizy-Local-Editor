import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarBtnCheckout = {
  selector: ".brz-ui-ed-cart-footer-checkout",
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
          id: "checkoutTextTypography",
          type: "typography",
          selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout",
          config: {
            fontFamily: true,
          },
          default: {
            fontSize: 14,
            lineHeight: 1.25,
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
                  id: "btnCheckoutBg",
                  type: "backgroundColor",
                  selector:
                    "{{WRAPPER}} .brz-ui-ed-cart-footer button.brz-ui-ed-cart-footer-checkout.brz-ui-ed-btn:hover",
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
                  id: "btnCheckoutBorder",
                  type: "border",
                  devices: "desktop",
                  selector:
                    "{{WRAPPER}} .brz-ui-ed-cart-footer button.brz-ui-ed-cart-footer-checkout.brz-ui-ed-btn:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "btnCheckoutBoxShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector:
                    "{{WRAPPER}} .brz-ui-ed-cart-footer button.brz-ui-ed-cart-footer-checkout.brz-ui-ed-btn:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabColor",
              label: "Text",
              options: [
                {
                  id: "checkoutTextColor",
                  type: "colorPicker",
                  selector:
                    "{{WRAPPER}} .brz-ui-ed-cart-footer button.brz-ui-ed-cart-footer-checkout.brz-ui-ed-btn:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#ffffff",
                    opacity: 0.9,
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
          id: "btnCheckoutWidth",
          label: "Width",
          type: "slider",
          config: {
            min: 0,
            max: 100,
            units: [
              { value: "%", title: "%" },
              { value: "px", title: "px" },
            ],
          },
          default: {
            value: 100,
            suffix: "%",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
                width: `${value.value}${value.unit}`,
              },
            };
          },
        },
        {
          id: "btnCheckoutHeight",
          label: "Height",
          type: "slider",
          config: {
            min: 0,
            max: 100,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 45,
            suffix: "px",
          },
          style: ({ value }: { value: { value: number; unit: string } }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
                height: `${value.value}${value.unit}`,
              },
            };
          },
        },
      ],
    },
    {
      id: "horizontalBtnCheckoutAlign",
      type: "toggle",
      choices: [
        { icon: "nc-text-align-left", title: "Align", value: "flex-start" },
        { icon: "nc-text-align-center", title: "Align", value: "center" },
        { icon: "nc-text-align-right", title: "Align", value: "flex-end" },
      ],
      default: {
        value: "center",
      },
      style: ({ value }: { value: { value: string } }) => {
        return {
          "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
            "align-self": value.value,
          },
        };
      },
    },
    ...disabledOptions,
  ],
};
