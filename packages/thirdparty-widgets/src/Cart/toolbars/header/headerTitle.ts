import { HOVER, NORMAL } from "../../../utils/stateMode";

export const toolbarHeaderTitle = {
  selector: ".brz-ui-ed-cart-header-title",
  toolbar: [
    {
      id: "toolbarTypography",
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
            fontSize: 16,
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
          selector: "{{WRAPPER}} .brz-ui-ed-cart-header-title",
        },
      ],
    },
    {
      id: "toolbarColor",
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
          id: "tabsColor",
          type: "tabs",
          tabs: [
            {
              id: "tabTitle",
              label: "Title",
              options: [
                {
                  id: "titleColor",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-header-title",
                  default: {
                    hex: "#000000e0",
                  },
                },
              ],
            },
            {
              id: "tabShadow",
              label: "Shadow",
              options: [
                {
                  id: "titleTextShadow",
                  type: "textShadow",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-header-title",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
