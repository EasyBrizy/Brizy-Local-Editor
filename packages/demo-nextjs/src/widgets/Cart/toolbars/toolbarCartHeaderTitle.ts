import { States } from "../../utils/states";
import { disabledOptions } from "./disabledOptions";

export const toolbarCartHeaderTitle = {
  selector: ".brz-ui-ed-drawer-html .brz-ui-ed-drawer-html-title",
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
          id: "cartHeaderTitleTypography",
          type: "typography",
          selector: "{{WRAPPER}} .brz-ui-ed-drawer-html-title",
          config: {
            fontFamily: true,
          },
          default: {
            fontSize: 18,
            fontWeight: 700,
          },
        },
      ],
    },
    {
      id: "popoverInput",
      type: "popover",
      config: {
        icon: "nc-hrz-align-right",
        title: "Typography",
      },
      position: 10,
      options: [
        {
          id: "cartHeaderTitle",
          type: "inputText",
          label: "Title",
          default: {
            value: "My cart",
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
              id: "tabColor",
              options: [
                {
                  id: "cartHeaderColor",
                  type: "colorPicker",
                  selector: "{{WRAPPER}} .brz-ui-ed-drawer-html-title:hover",
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
