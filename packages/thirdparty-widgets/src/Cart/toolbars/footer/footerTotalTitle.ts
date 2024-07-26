import { HOVER, NORMAL } from "../../../utils/stateMode";

export const footerTotalTitle = {
  selector: ".brz-ui-ed-cart-footer-total-title",
  toolbar: [
    {
      id: "toolbarFooterTotalTitleTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "footerTotalTitleTypography",
          type: "typography",
          default: {
            fontFamily: "",
            fontStyle: "",
            fontFamilyType: "google",
            fontSize: 14,
            fontSizeSuffix: "px",
            fontWeight: 600,
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
          selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-title",
        },
      ],
    },
    {
      id: "toolbarFooterTotalTitleColor",
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
          id: "tabsFooterTotalTitleColor",
          type: "tabs",
          tabs: [
            {
              id: "tabFooterTotalTitleColor",
              label: "Text",
              options: [
                {
                  id: "footerTotalTitleColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-title",
                  default: {
                    hex: "#000000",
                  },
                },
              ],
            },
            {
              id: "tabFooterTotalTitleShadow",
              label: "Shadow",
              options: [
                {
                  id: "footerTotalTitleTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-title",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
