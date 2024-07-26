import { HOVER, NORMAL } from "../../../utils/stateMode";

export const toolbarAlertIcon = {
  selector: ".brz-ui-ed-alert-icon",
  toolbar: [
    {
      id: "toolbarAlertIconColor",
      type: "popover",
      devices: "desktop",
      config: {
        size: "medium",
        title: "Colors",
        icon: {
          style: {
            backgroundColor: "#000000",
          },
        },
      },
      position: 70,
      options: [
        {
          id: "tabsColor",
          type: "tabs",
          tabs: [
            {
              id: "tabAlertIconColor",
              label: "Color",
              options: [
                {
                  id: "alertIconColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  default: {
                    hex: "#1677ff",
                    opacity: 1,
                    palette: "",
                  },
                  selector: "{{WRAPPER}} .brz-ui-ed-alert-icon",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
