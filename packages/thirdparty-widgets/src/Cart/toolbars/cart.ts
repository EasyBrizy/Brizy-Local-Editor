export const toolbarCart = {
  selector: ".brz-ui-ed-cart",
  toolbar: [
    {
      id: "toolbarSettings",
      type: "popover",
      config: {
        icon: "nc-cog",
        title: "Settings",
      },
      position: 110,
      options: [
        {
          id: "width",
          label: "Width",
          type: "slider",
          config: {
            min: 0,
            max: 100,
            units: [{ value: "%", title: "%" }],
          },
          default: {
            value: 100,
            suffix: "%",
          },
          style: ({ value }) => {
            return {
              "{{WRAPPER}}": {
                width: `${value.value}${value.unit}`,
              },
            };
          },
        },
        {
          id: "grid",
          type: "grid",
          config: {
            separator: true,
          },
          columns: [
            {
              id: "col-1",
              options: [
                {
                  id: "styles",
                  type: "sidebarTabsButton",
                  config: {
                    tabId: "styles",
                    text: "Styling",
                    icon: "nc-cog",
                  },
                },
              ],
            },
            {
              id: "col-2",
              options: [
                {
                  id: "effects",
                  type: "sidebarTabsButton",
                  config: {
                    tabId: "effects",
                    text: "Effects",
                    icon: "nc-flash",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "advancedSettings",
      type: "advancedSettings",
      disabled: true,
    },
  ],
};
