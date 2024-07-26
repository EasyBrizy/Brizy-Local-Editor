import { HOVER, NORMAL } from "../../../utils/stateMode";

export const footerCheckoutButton = ({ getValue }: any) => ({
  selector: ".brz-ui-ed-cart-footer-checkout",
  toolbar: [
    {
      id: "toolbarFooterCheckoutButton",
      type: "popover",
      config: {
        icon: "nc-button",
        title: "Button",
      },
      position: 20,
      options: [
        {
          id: "tabsFooterCheckoutButton",
          type: "tabs",
          tabs: [
            {
              id: "tabFooterCheckoutButton",
              label: "Button",
              options: [
                {
                  id: "sizeGroup",
                  type: "group",
                  position: 10,
                  options: [
                    {
                      id: "width",
                      label: "Width",
                      type: "slider",
                      config: {
                        min: 0,
                        max: getValue("width")?.suffix === "px" ? 500 : 100,
                        units: [
                          { title: "px", value: "px" },
                          { title: "%", value: "%" },
                        ],
                      },
                      default: {
                        value: 100,
                        suffix: "%",
                      },
                      style: ({ value }) => {
                        return {
                          "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
                            width: `${value.value}${value.unit}`,
                          },
                        };
                      },
                    },
                    {
                      id: "height",
                      label: "Height",
                      type: "slider",
                      config: {
                        min: 0,
                        max: 100,
                        units: [{ title: "px", value: "px" }],
                      },
                      default: {
                        value: 40,
                        suffix: "px",
                      },
                      style: ({ value }) => {
                        return {
                          "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
                            height: `${value.value}${value.unit}`,
                          },
                        };
                      },
                    },
                  ],
                },
                {
                  id: "fillType",
                  label: "Fill",
                  devices: "desktop",
                  type: "radioGroup",
                  position: 20,
                  choices: [
                    { value: "filled", icon: "nc-circle" },
                    { value: "outline", icon: "nc-outline" },
                    { value: "default", icon: "nc-close" },
                  ],
                  default: {
                    value: "filled",
                  },
                  style: ({ value }) => {
                    return {
                      "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
                        background: value.value !== "filled" ? "transparent" : "",
                        "background-color": value.value !== "filled" ? "transparent" : "",
                        border: value.value === "default" ? 0 : "",
                        "box-shadow": value.value === "default" ? "none" : "",
                      },
                    };
                  },
                },
                {
                  id: "borderRadiusTypeGroup",
                  type: "group",
                  devices: "desktop",
                  disabled: getValue("fillType")?.value === "default",
                  position: 30,
                  options: [
                    {
                      id: "borderRadiusType",
                      label: "Corner",
                      type: "radioGroup",
                      choices: [
                        { value: "square", icon: "nc-corners-square" },
                        { value: "rounded", icon: "nc-corners-round" },
                        { value: "custom", icon: "nc-more" },
                      ],
                      default: {
                        value: "square",
                      },
                      style: ({ value }) => {
                        return {
                          "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
                            "border-radius":
                              value.value === "square"
                                ? 0
                                : value.value === "rounded"
                                ? "100px"
                                : getValue("borderRadius")?.value,
                          },
                        };
                      },
                    },
                    {
                      id: "borderRadius",
                      type: "slider",
                      disabled: getValue("borderRadiusType")?.value !== "custom",
                      config: {
                        min: 0,
                        max: 100,
                        units: [{ title: "px", value: "px" }],
                      },
                      default: {
                        value: 0,
                        suffix: "px",
                      },
                      style: ({ value }) => {
                        return {
                          "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout": {
                            "border-radius": `${value.value}${value.unit}`,
                          },
                        };
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
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
          id: "gridTypography",
          type: "grid",
          className: "brz-typography-grid",
          config: {
            separator: true,
          },
          columns: [
            {
              id: "col-1",
              size: 1,
              align: "center",
              options: [
                {
                  id: "",
                  type: "typography",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout",
                  default: {
                    fontFamily: "",
                    fontStyle: "",
                    fontFamilyType: "google",
                    fontSize: 14,
                    fontSizeSuffix: "px",
                    fontWeight: 400,
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
                },
              ],
            },
          ],
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
      roles: ["admin"],
      position: 80,
      options: [
        {
          id: "tabsColor",
          className: "",
          type: "tabs",
          tabs: [
            {
              id: "tabBg",
              label: "Bg",
              options: [
                {
                  id: "",
                  type: "backgroundColor",
                  states: [NORMAL, HOVER],
                  disabled: getValue("fillType")?.value !== "filled",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout",
                  default: {
                    bgColorType: "solid",
                    bgColorHex: "#1677ff",
                    hoverBgColorHex: "#1677ff",
                    bgColorOpacity: 1,
                  },
                },
              ],
            },
            {
              id: "tabText",
              label: "Text",
              options: [
                {
                  id: "color",
                  type: "colorPicker",
                  states: [NORMAL, HOVER],
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout",
                  default: {
                    hex: "#fff",
                  },
                },
              ],
            },
            {
              id: "tabBorder",
              label: "Border",
              options: [
                {
                  id: "border",
                  type: "border",
                  states: [NORMAL, HOVER],
                  disabled: getValue("fillType")?.value === "default",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout",
                },
              ],
            },
            {
              id: "tabBoxShadow",
              label: "Shadow",
              options: [
                {
                  id: "boxShadow",
                  type: "boxShadow",
                  states: [NORMAL, HOVER],
                  disabled: getValue("fillType")?.value === "default",
                  selector: "{{WRAPPER}} .brz-ui-ed-cart-footer-checkout",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
