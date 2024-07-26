import { HOVER, NORMAL } from "../../../utils/stateMode";

export const productDetailsValue = {
  selector: ".brz-ui-ed-cart-item-wrapper-details-variants-value",
  toolbar: [
    {
      id: "toolbarProductDetailsValueTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "productDetailsValueTypography",
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
          selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-value",
        },
      ],
    },
    {
      id: "toolbarProductDetailsTitleColor",
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
          id: "tabsProductDetailsValueColor",
          type: "tabs",
          tabs: [
            {
              id: "tabProductDetailsValueColor",
              label: "Text",
              options: [
                {
                  id: "productDetailsValueColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-value",
                  default: {
                    hex: "#000000e0",
                  },
                },
              ],
            },
            {
              id: "tabProductDetailsValueShadow",
              label: "Shadow",
              options: [
                {
                  id: "productDetailsValueTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-value",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "toolbarProductDetailsTitleSettings",
      type: "popover",
      config: {
        icon: "nc-cog",
        title: "Settings",
      },
      position: 110,
      options: [
        {
          id: "productDetailsTitleSpacing",
          label: "Spacing",
          type: "slider",
          config: {
            min: 0,
            max: 20,
            units: [{ value: "px", title: "px" }],
          },
          default: {
            value: 5,
            suffix: "px",
          },
          style: ({ value }) => {
            return {
              "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-title": {
                "margin-right": `${value.value}${value.unit}`,
              },
            };
          },
        },
      ],
    },
  ],
};
