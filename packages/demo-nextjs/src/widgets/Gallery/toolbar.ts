import { ToolbarConfig, ToolbarGetter } from "@brizy/core";

export default function getToolbar({ t }: ToolbarGetter): ToolbarConfig[] {
  return [
    {
      selector: ".gallery",
      toolbar: [
        {
          id: "toolbarCurrentElement",
          type: "popover",
          config: {
            icon: "nc-woo-gallery",
            title: "Gallery",
          },
          // Only for desktop devices
          devices: "desktop",
          position: 90,
          options: [
            {
              id: "galleryItems",
              type: "addable",
              config: {
                title: "Images",
                showCount: true,
              },
              shape: [
                {
                  id: "title",
                  label: t("ImageTitle"),
                  type: "inputText",
                },
                {
                  id: "img",
                  type: "imageUpload",
                  config: {
                    pointer: false,
                    disableSizes: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
