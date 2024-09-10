import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarCartItemPrice = {
  selector: ".brz-ui-ed-cart-item-wrapper-details-price",
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
              id: "tabTypographyPrice",
              label: "Current",
              options: [
                {
                  id: "priceTypography",
                  type: "typography",
                  selector: "{{WRAPPER}} .brz-ui-ed-price",
                  config: {
                    fontFamily: true,
                  },
                  default: {
                    lineHeight: 1.25,
                    letterSpacing: 0.5,
                    bold: true,
                    fontSize: 14,
                  },
                },
              ],
            },
            {
              id: "tabTypographyOldPrice",
              label: "Old",
              options: [
                {
                  id: "oldPriceTypography",
                  type: "typography",
                  selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at",
                  config: {
                    fontFamily: true,
                  },
                  default: {
                    fontSize: 12,
                    lineHeight: 1.25,
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
                  id: "itemPriceBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-price:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "itemPriceBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-price:hover`,
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "itemPriceShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-price:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabPriceColor",
              label: "Current",
              options: [
                {
                  id: "itemPriceColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-price:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabOldPriceColor",
              label: "Old",
              options: [
                {
                  id: "itemOldPriceColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#000000",
                    opacity: 0.65,
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
