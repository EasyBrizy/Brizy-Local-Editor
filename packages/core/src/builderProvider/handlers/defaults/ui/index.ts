import {
  BaseElementTypes,
  LeftSidebar,
  LeftSidebarMoreOptionsIds,
  LeftSidebarOption,
  LeftSidebarOptionsIds,
  StoryElementTypes,
  isLeftSidebarAddElementsType,
} from "@/types/leftSidebar";
import { Publish } from "@/types/publish";
import { Config } from "@/types/types";
import { getIn, setIn } from "timm";
import { ExposedHandlers } from "../../../types/type";
import { getOpenCMS } from "./cms";
import { getPublish } from "./publish";

interface Data {
  mode: string;
  config: Record<string, unknown>;
  handlers: ExposedHandlers;
  uid: string;
}

const defaultUI = (
  mode: string,
  configUi: Config["ui"],
): {
  ui: Config["ui"];
  leftSidebar: LeftSidebar;
} => {
  const topTabsOrder: Array<LeftSidebarOption> = [
    {
      id: LeftSidebarOptionsIds.reorderBlock,
      type: LeftSidebarOptionsIds.reorderBlock,
    },
    {
      id: LeftSidebarOptionsIds.globalStyle,
      type: LeftSidebarOptionsIds.globalStyle,
    },
  ];

  const bottomTabsOrder: Array<LeftSidebarOption> = [
    { id: LeftSidebarOptionsIds.deviceMode, type: LeftSidebarOptionsIds.deviceMode },
    { id: LeftSidebarOptionsIds.more, type: LeftSidebarOptionsIds.more },
  ];

  const defaultPopupSettings = {
    displayCondition: false,
    clickOutsideToClose: true,
    embedded: false,
    horizontalAlign: true,
    verticalAlign: true,
    scrollPageBehind: true,
  };

  let ui: Config["ui"] = {
    leftSidebar: {
      topTabsOrder: [
        {
          id: LeftSidebarOptionsIds.addElements,
          type: LeftSidebarOptionsIds.addElements,
          elements: [
            {
              label: "grid",
              moduleNames: [BaseElementTypes.Columns, BaseElementTypes.Row],
            },
            {
              label: "essentials",
              moduleNames: [
                BaseElementTypes.Text,
                BaseElementTypes.Image,
                BaseElementTypes.Button,
                BaseElementTypes.Icon,
                BaseElementTypes.Spacer,
                BaseElementTypes.Map,
                BaseElementTypes.Form2,
                BaseElementTypes.Line,
                BaseElementTypes.Menu,
              ],
            },
            {
              label: "media",
              moduleNames: [
                BaseElementTypes.ImageGallery,
                BaseElementTypes.Video,
                BaseElementTypes.Audio,
                BaseElementTypes.VideoPlaylist,
              ],
            },
            {
              label: "content",
              moduleNames: [
                BaseElementTypes.IconText,
                BaseElementTypes.Embed,
                BaseElementTypes.StarRating,
                BaseElementTypes.Alert,
                BaseElementTypes.Counter,
                BaseElementTypes.Countdown2,
                BaseElementTypes.ProgressBar,
                BaseElementTypes.Calendly,
                BaseElementTypes.Carousel,
                BaseElementTypes.Tabs,
                BaseElementTypes.Accordion,
                BaseElementTypes.Switcher,
                BaseElementTypes.Table,
                BaseElementTypes.Timeline,
              ],
            },
            {
              label: "blog",
              moduleNames: [BaseElementTypes.Posts],
            },
            {
              label: "social",
              moduleNames: [BaseElementTypes.Facebook, BaseElementTypes.Twitter, BaseElementTypes.FacebookComments],
            },
          ],
        },
        ...topTabsOrder,
      ],
      bottomTabsOrder,
      more: {
        options: [
          {
            type: LeftSidebarMoreOptionsIds.shortcuts,
            label: "Shortcuts",
            link: "",
          },
        ],
      },
    },
    popupSettings: defaultPopupSettings,
  };

  switch (mode) {
    case "internal_popup":
    case "external_popup": {
      ui = {
        leftSidebar: {
          topTabsOrder: [
            {
              id: LeftSidebarOptionsIds.addElements,
              type: LeftSidebarOptionsIds.addElements,
              elements: [
                {
                  label: "grid",
                  moduleNames: [BaseElementTypes.Columns, BaseElementTypes.Row],
                },
                {
                  label: "essentials",
                  moduleNames: [
                    BaseElementTypes.Text,
                    BaseElementTypes.Image,
                    BaseElementTypes.Button,
                    BaseElementTypes.Icon,
                    BaseElementTypes.Spacer,
                    BaseElementTypes.Map,
                    BaseElementTypes.Form2,
                    BaseElementTypes.Line,
                  ],
                },
                {
                  label: "media",
                  moduleNames: [
                    BaseElementTypes.ImageGallery,
                    BaseElementTypes.Video,
                    BaseElementTypes.Audio,
                    BaseElementTypes.VideoPlaylist,
                  ],
                },
                {
                  label: "content",
                  moduleNames: [
                    BaseElementTypes.IconText,
                    BaseElementTypes.Embed,
                    BaseElementTypes.StarRating,
                    BaseElementTypes.Alert,
                    BaseElementTypes.Counter,
                    BaseElementTypes.Countdown2,
                    BaseElementTypes.ProgressBar,
                    BaseElementTypes.Calendly,
                    BaseElementTypes.Carousel,
                    BaseElementTypes.Tabs,
                    BaseElementTypes.Accordion,
                    BaseElementTypes.Switcher,
                    BaseElementTypes.Table,
                    BaseElementTypes.Timeline,
                  ],
                },
                {
                  label: "social",
                  moduleNames: [BaseElementTypes.Facebook, BaseElementTypes.Twitter, BaseElementTypes.FacebookComments],
                },
              ],
            },
            ...topTabsOrder,
          ],
          bottomTabsOrder,
          more: {
            options: [
              {
                type: LeftSidebarMoreOptionsIds.shortcuts,
                label: "Shortcuts",
                link: "",
              },
            ],
          },
        },
        popupSettings: {
          ...defaultPopupSettings,
          displayCondition: true,
          deletePopup: true,
        },
      };
      break;
    }
    case "internal_story":
    case "external_story": {
      ui = {
        leftSidebar: {
          topTabsOrder: [
            {
              id: LeftSidebarOptionsIds.addElements,
              type: LeftSidebarOptionsIds.addElements,
              elements: [
                {
                  label: "essentials",
                  moduleNames: [
                    StoryElementTypes.StoryButton,
                    StoryElementTypes.StoryIcon,
                    StoryElementTypes.StoryEmbed,
                    StoryElementTypes.StoryText,
                    StoryElementTypes.StoryMap,
                    StoryElementTypes.StoryProgressBar,
                    StoryElementTypes.StoryLine,
                    StoryElementTypes.StoryCountdown2,
                    StoryElementTypes.StoryCounter,
                    StoryElementTypes.StoryShape,
                    StoryElementTypes.StoryForm2,
                    StoryElementTypes.StoryStarRating,
                    StoryElementTypes.StoryLottie,
                  ],
                },
                {
                  label: "media",
                  moduleNames: [StoryElementTypes.StoryImage, StoryElementTypes.StoryVideo],
                },
              ],
            },
            ...topTabsOrder,
          ],
          bottomTabsOrder,
          more: {
            options: [
              {
                type: LeftSidebarMoreOptionsIds.shortcuts,
                label: "Shortcuts",
                link: "",
              },
            ],
          },
        },
        popupSettings: defaultPopupSettings,
      };
      break;
    }
  }

  const leftSidebar = Object.assign({}, ui.leftSidebar, configUi?.leftSidebar);
  // Find the index of the addElements tab
  const addElementsTabIndex = leftSidebar?.topTabsOrder?.findIndex(
    (tab) => tab.id === LeftSidebarOptionsIds.addElements,
  );

  if (addElementsTabIndex !== undefined && addElementsTabIndex !== -1) {
    const addElementsTab = leftSidebar.topTabsOrder?.[addElementsTabIndex];

    if (addElementsTab) {
      const isAddElementsTab = isLeftSidebarAddElementsType(addElementsTab);

      // Retrieve elements from the current tab
      let elements = isAddElementsTab ? addElementsTab.elements : [];

      // Use default elements if current elements are empty
      if (!elements?.length) {
        const defaultTab = ui.leftSidebar?.topTabsOrder?.find((tab) => tab.id === LeftSidebarOptionsIds.addElements);

        if (defaultTab && isLeftSidebarAddElementsType(addElementsTab) && isLeftSidebarAddElementsType(defaultTab)) {
          addElementsTab.elements = defaultTab.elements;
        }
      }
    }
  }

  return {
    ui,
    leftSidebar,
  };
};

export const getUi = (data: Data): Record<string, unknown> => {
  const { mode, config, handlers, uid } = data;
  const _ui = config.ui as Record<string, unknown> | undefined;
  let { ui: oldUI = {}, leftSidebar } = defaultUI(mode, _ui);
  const ui = _ui ? _ui : oldUI;
  const popupSettings = Object.assign({}, oldUI.popupSettings, ui.popupSettings);
  const enabledCMS = getIn(leftSidebar, ["cms", "enable"]);
  const enabledPublish = getIn(ui, ["publish", "enable"]);
  let publish: Partial<Publish> = {};

  if (enabledCMS) {
    const { onOpenCMS, onCloseCMS } = handlers;
    leftSidebar = setIn(leftSidebar, ["cms"], {
      onOpen: getOpenCMS(onOpenCMS, uid),
      onClose: () => onCloseCMS(uid),
    }) as Record<string, unknown>;
  }

  if (enabledPublish) {
    publish = getPublish({ publishHandler: handlers.publish, uid });
  }

  return {
    ...ui,
    publish,
    popupSettings,
    leftSidebar,
  };
};
