import { HOVER, NORMAL } from "../../../utils/stateMode";

export const productDetailsTitle = {
  selector: ".brz-ui-ed-cart-item-wrapper-details-variants-title",
  toolbar: [
    {
      id: "toolbarProductDetailTitleTypography",
      type: "popover",
      config: {
        icon: "nc-font",
        size: "auto",
        title: "Typography",
      },
      position: 70,
      options: [
        {
          id: "productDetailTitleTypography",
          type: "typography",
          default: {
            fontFamily: "",
            fontStyle: "",
            fontFamilyType: "google",
            fontSize: 12,
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
          selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-title",
        },
      ],
    },
    {
      id: "toolbarProductDetailTitleColor",
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
          id: "tabsProductDetailColor",
          type: "tabs",
          tabs: [
            {
              id: "tabProductDetailTitleColor",
              label: "Text",
              options: [
                {
                  id: "productDetailTitleColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-title",
                  default: {
                    hex: "#000000e0",
                  },
                },
              ],
            },
            {
              id: "tabProductDetailTitleShadow",
              label: "Shadow",
              options: [
                {
                  id: "productDetailTitleTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-item-wrapper-details-variants-title",
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
