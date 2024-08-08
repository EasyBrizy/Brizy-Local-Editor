import { HOVER, NORMAL } from "../../../utils/stateMode";

export const footerText = {
  selector: ".brz-ui-ed-cart-footer-text",
  toolbar: [
    {
      id: "toolbarFooterTextTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "footerTextTypography",
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
          selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-text",
        },
      ],
    },
    {
      id: "toolbarFooterTextColor",
      type: "popover",
      devices: "desktop",
      config: {
        size: "medium",
        title: "Colors",
        icon: {
          style: {
            backgroundColor: "#000000e0",
          },
        },
      },
      position: 90,
      options: [
        {
          id: "tabsFooterTextColor",
          type: "tabs",
          tabs: [
            {
              id: "tabFooterTextColor",
              label: "Text",
              options: [
                {
                  id: "footerTextColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-text",
                  default: {
                    hex: "#000000e0",
                  },
                },
              ],
            },
            {
              id: "tabFooterTextShadow",
              label: "Shadow",
              options: [
                {
                  id: "footerTextTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
