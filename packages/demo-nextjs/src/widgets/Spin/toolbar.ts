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
                title: "Prizes",
                showCount: true,
              },
              default: {
                value: [
                  {
                    id: "prize1",
                    title: "Prize 1",
                    defaults: {
                      score: { value: 10 },
                      title: { value: "%" },
                    },
                  },
                  {
                    id: "prize2",
                    title: "Prize 2",
                    defaults: { score: { value: 25 } },
                  },
                  {
                    // No defaults — falls back to the shape defaults below
                    id: "prize3",
                    title: "Prize 3",
                  },
                ],
              },
              shape: [
                {
                  id: "score",
                  label: t("Amount"),
                  type: "number",
                  default: {
                    value: 5,
                  },
                },
                {
                  id: "title",
                  label: t("Suffix"),
                  type: "inputText",
                  default: {
                    value: "%",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];
};
