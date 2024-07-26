import { HOVER, NORMAL } from "../../../utils/stateMode";

export const footerTotalValue = {
  selector: ".brz-ui-ed-cart-footer-total-value",
  toolbar: [
    {
      id: "toolbarFooterTotalValueTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "footerTotalValueTypography",
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
          selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-value",
        },
      ],
    },
    {
      id: "toolbarFooterTotalValueColor",
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
          id: "tabsFooterTotalValueColor",
          type: "tabs",
          tabs: [
            {
              id: "tabFooterTotalValueColor",
              label: "Text",
              options: [
                {
                  id: "footerTotalValueColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-value",
                  default: {
                    hex: "#000000",
                  },
                },
              ],
            },
            {
              id: "tabFooterTotalValueShadow",
              label: "Shadow",
              options: [
                {
                  id: "footerTotalValueTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-total-value",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
