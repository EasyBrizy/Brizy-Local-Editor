import { HOVER, NORMAL } from "../../../utils/stateMode";

export const productPrice = {
  selector: ".brz-ui-ed-price",
  toolbar: [
    {
      id: "toolbarProductPriceTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "productPriceTypography",
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
          selector: "{{WRAPPER}} .brz-ui-ed-price",
        },
      ],
    },
    {
      id: "toolbarProductPriceColor",
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
          id: "tabsProductPriceColor",
          type: "tabs",
          tabs: [
            {
              id: "tabProductPriceColor",
              label: "Text",
              options: [
                {
                  id: "productPriceColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-price",
                  default: {
                    hex: "#000000e0",
                  },
                },
              ],
            },
            {
              id: "tabProductPriceTextShadow",
              label: "Shadow",
              options: [
                {
                  id: "productPriceTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-price",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
