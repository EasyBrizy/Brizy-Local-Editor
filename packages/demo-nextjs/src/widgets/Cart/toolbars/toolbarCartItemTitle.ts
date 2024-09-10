import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarCartItemTitle = {
  selector: ".brz-ui-ed-cart-item-wrapper-details-item-title",
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
          id: "itemTitleTypography",
          type: "typography",
          selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title",
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
                  id: "itemTitleBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "itemTitleBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title:hover`,
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "itemTitleShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabColor",
              label: "Text",
              options: [
                {
                  id: "itemTitleColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title:hover",
                  states: [States.NORMAL, States.HOVER],
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
