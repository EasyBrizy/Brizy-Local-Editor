import { ToolbarConfig, ToolbarGetter } from "@brizy/core";

type GetToolbar = (props: ToolbarGetter) => ToolbarConfig[];

export const getToolbar: GetToolbar = ({ t }) => {
  return [
    {
      selector: ".spin-wheel-container",
      toolbar: [
        {
          id: "toolbarCurrentElement",
          type: "popover",
          config: {
            icon: "nc-counter-outline",
            title: "Spin",
          },
          // Only for desktop devices
          devices: "desktop",
          position: 90,
          options: [
            {
              id: "spinItems",
              type: "addable",
              config: {
                title: "Spin",
                showCount: true,
              },
              shape: [
                {
                  id: "score",
                  label: t("Score"),
                  type: "number",
                },
                {
                  id: "title",
                  label: t("Title"),
                  type: "inputText",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
};
