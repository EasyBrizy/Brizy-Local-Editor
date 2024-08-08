import { HOVER, NORMAL } from "../../../utils/stateMode";

export const alertText = {
  selector: ".brz-ui-ed-alert-message",
  toolbar: [
    {
      id: "toolbarAlertTextTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "cartHeaderTitle",
          type: "typography",
          default: {
            fontFamily: "",
            fontStyle: "",
            fontFamilyType: "google",
            fontSize: 14,
            fontSizeSuffix: "px",
            fontWeight: 400,
            lineHeight: 1.3,
            letterSpacing: 0,
            variableFontWeight: 400,
            fontWidth: 100,
            fontSoftness: 0,
            bold: false,
            italic: false,
            underline: false,
            strike: false,
            uppercase: false,
            lowercase: false,
          },
          selector: "{{WRAPPER}} .brz-ui-ed-alert-message",
        },
      ],
    },
    {
      id: "toolbarAlertTextColor",
      type: "popover",
      devices: "desktop",
      config: {
        size: "medium",
        title: "Colors",
        icon: {
          style: {
            backgroundColor: "#000",
          },
        },
      },
      position: 90,
      options: [
        {
          id: "tabsAlertTextColor",
          type: "tabs",
          tabs: [
            {
              id: "tabAlertText",
              label: "Text",
              options: [
                {
                  id: "alertTextColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-alert-message",
                  default: {
                    hex: "#000000e0",
                  },
                },
              ],
            },
            {
              id: "tabAlertTextTextShadow",
              label: "Shadow",
              options: [
                {
                  id: "alertTextTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-alert-message",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
