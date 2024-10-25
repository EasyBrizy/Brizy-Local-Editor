import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarFooterDescription = {
  selector: ".brz-ui-ed-cart-footer-text",
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
          id: "itemFooterDescriptionTypography",
          type: "typography",
          selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-text",
          config: {
            fontFamily: true,
          },
          default: {
            fontSize: 14,
            lineHeight: 1.25,
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
                  id: "itemFooterDescriptionBg",
                  type: "backgroundColor",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-text:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "itemFooterDescriptionBorder",
                  type: "border",
                  devices: "desktop",
                  selector: `{{WRAPPER}} .brz-ui-ed-cart-footer-text:hover`,
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "itemFooterDescriptionShadow",
                  type: "boxShadow",
                  devices: "desktop",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-text:hover",
                  states: [States.NORMAL, States.HOVER],
                },
              ],
            },
            {
              id: "tabColor",
              label: "Text",
              options: [
                {
                  id: "itemFooterDescriptionColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-text:hover",
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
