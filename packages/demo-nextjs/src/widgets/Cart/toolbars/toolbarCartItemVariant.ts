import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarCartItemVariant = {
  selector: ".brz-ui-ed-cart-item-wrapper-details-variants .brz-ui-ed-row",
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
              id: "tabTypographyVariantTitle",
              label: "Title",
              options: [
                {
                  id: "titleTypography",
                  type: "typography",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-title",
                  config: {
                    fontFamily: true,
                  },
                  default: {
                    fontSize: 13,
                    lineHeight: 1.25,
                    bold: true,
                  },
                },
              ],
            },
            {
              id: "tabTypographyVariantValue",
              label: "Value",
              options: [
                {
                  id: "valueTypography",
                  type: "typography",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-value",
                  config: {
                    fontFamily: true,
                  },
                  default: {
                    fontSize: 13,
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
                  id: "itemVariantBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants .brz-ui-ed-row:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "itemVariantBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants .brz-ui-ed-row:hover`,
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "itemVariantShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants .brz-ui-ed-row:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabTitleColor",
              label: "Title",
              options: [
                {
                  id: "itemVariantTitleColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-title:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabValueColor",
              label: "Value",
              options: [
                {
                  id: "itemVariantValueColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-value:hover",
                  states: [States.NORMAL, States.HOVER],
                  default: {
                    hex: "#a3a3a3",
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
