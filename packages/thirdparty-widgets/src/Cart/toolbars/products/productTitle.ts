import { HOVER, NORMAL } from "../../../utils/stateMode";

export const productTitle = {
  selector: ".brz-ui-ed-cart-item-wrapper-details-item-title",
  toolbar: [
    {
      id: "toolbarProductTitleTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "productTitleTypography",
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
          selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title",
        },
      ],
    },
    {
      id: "toolbarProductTitleColor",
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
          id: "tabsProductTitleColor",
          type: "tabs",
          tabs: [
            {
              id: "tabProductTitleColor",
              label: "Text",
              options: [
                {
                  id: "productTitleColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title",
                  default: {
                    hex: "#000000e0",
                  },
                },
              ],
            },
            {
              id: "tabProductTitleShadow",
              label: "Shadow",
              options: [
                {
                  id: "productTitleTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-item-title",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
