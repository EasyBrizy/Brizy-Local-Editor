import {
  BaseElementTypes,
  LeftSidebarMoreOptionsIds,
  LeftSidebarOptionsIds,
  StoryElementTypes,
} from "@/types/leftSidebar";

const defaultUI = (mode: string): Record<string, unknown> => {
  const topTabsOrder: Array<LeftSidebarOptionsIds> = [
    LeftSidebarOptionsIds.addElements,
    LeftSidebarOptionsIds.reorderBlock,
    LeftSidebarOptionsIds.globalStyle,
  ];
  const bottomTabsOrder: Array<LeftSidebarOptionsIds> = [LeftSidebarOptionsIds.deviceMode, LeftSidebarOptionsIds.more];
  const defaultPopupSettings = {
    displayCondition: false,
    clickOutsideToClose: true,
    embedded: false,
    horizontalAlign: true,
    verticalAlign: true,
    scrollPageBehind: true,
  };

  switch (mode) {
    case "internal_popup":
    case "external_popup": {
      return {
        leftSidebar: {
          topTabsOrder,
          bottomTabsOrder,
          more: {
            options: [
              {
                type: LeftSidebarMoreOptionsIds.shortcuts,
                label: "Shortcuts",
              },
            ],
          },
          moduleGroups: [
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
        popupSettings: {
          ...defaultPopupSettings,
          displayCondition: true,
          deletePopup: true,
        },
      };
    }
    case "internal_story":
    case "external_story": {
      return {
        leftSidebar: {
          topTabsOrder,
          bottomTabsOrder,
          more: {
            options: [
              {
                type: LeftSidebarMoreOptionsIds.shortcuts,
                label: "Shortcuts",
              },
            ],
          },
          moduleGroups: [
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
        popupSettings: defaultPopupSettings,
      };
    }
  }

  return {
    leftSidebar: {
      topTabsOrder,
      bottomTabsOrder,
      more: {
        options: [
          {
            type: LeftSidebarMoreOptionsIds.shortcuts,
            label: "Shortcuts",
          },
        ],
      },
      moduleGroups: [
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
    popupSettings: defaultPopupSettings,
  };
};

export const getUi = (mode: string, config: Record<string, unknown>): Record<string, unknown> => {
  const oldUI = defaultUI(mode);
  const _ui = config.ui as Record<string, unknown> | undefined;
  const ui = _ui ? _ui : oldUI;
  const popupSettings = Object.assign({}, oldUI.popupSettings, ui.popupSettings);
  const leftSidebar = Object.assign({}, oldUI.leftSidebar, ui.leftSidebar);

  return {
    ...ui,
    popupSettings,
    leftSidebar,
  };
};
