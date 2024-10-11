import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarFooterItemSubtotal = {
  selector: ".brz-ui-ed-cart-footer-total",
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
          id: "tabsTypography",
          type: "tabs",
          tabs: [
            {
              id: "tabTypographyFooterSubtotal",
              label: "Subtotal",
              options: [
                {
                  id: "subtotalTypography",
                  type: "typography",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-title",
                  config: {
                    fontFamily: true,
                  },
                  default: {
                    fontSize: 16,
                    lineHeight: 1.25,
                    bold: true,
                  },
                },
              ],
            },
            {
              id: "tabTypographyPrice",
              label: "Price",
              options: [
                {
                  id: "priceFooterTypography",
                  type: "typography",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-value",
                  config: {
                    fontFamily: true,
                  },
                  default: {
                    fontSize: 14,
                    lineHeight: 1.25,
                    bold: true,
                  },
                },
              ],
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
                  id: "itemFooterTitleBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "itemFooterTitleBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}} .brz-ui-ed-cart-footer-total:hover`,
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "itemFooterTitleShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabTitleColor",
              label: "Subtotal",
              options: [
                {
                  id: "itemFooterTitleColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-title:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#a3a3a3",
                    opacity: 1,
                  },
                },
              ],
            },
            {
              id: "tabPriceColor",
              label: "Price",
              options: [
                {
                  id: "itemFooterPriceColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-value:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#000000",
                    opacity: 0.88,
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
