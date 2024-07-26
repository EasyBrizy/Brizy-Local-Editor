import { HOVER, NORMAL } from "../../../utils/stateMode";

export const productPreviousPrice = {
  selector: ".brz-ui-ed-price-compare-at",
  toolbar: [
    {
      id: "toolbarProductPreviousPriceTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "productPreviousPriceTypography",
          type: "typography",
          default: {
            fontFamily: "",
            fontStyle: "",
            fontFamilyType: "google",
            fontSize: 12,
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
          selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at",
        },
      ],
    },
    {
      id: "toolbarProductPreviousPriceColor",
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
          id: "tabsProductPreviousPriceColor",
          type: "tabs",
          tabs: [
            {
              id: "tabProductPreviousPriceColor",
              label: "Text",
              options: [
                {
                  id: "productPreviousPriceColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at",
                  default: {
                    hex: "#6a6a6a",
                  },
                },
              ],
            },
            {
              id: "tabProductPreviousPriceTextShadow",
              label: "Shadow",
              options: [
                {
                  id: "productPreviousPriceTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-price-compare-at",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
