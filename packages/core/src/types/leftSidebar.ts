export enum BaseElementTypes {
  Text = "Text",
  Image = "Image",
  Button = "Button",
  Icon = "Icon",
  Spacer = "Spacer",
  Map = "Map",
  Form2 = "Form2",
  Line = "Line",
  Menu = "Menu",
  ImageGallery = "ImageGallery",
  Video = "Video",
  Audio = "Audio",
  VideoPlaylist = "VideoPlaylist",
  IconText = "IconText",
  Lottie = "Lottie",
  Embed = "Embed",
  StarRating = "StarRating",
  Alert = "Alert",
  Counter = "Counter",
  Countdown2 = "Countdown2",
  ProgressBar = "ProgressBar",
  Calendly = "Calendly",
  Carousel = "Carousel",
  Tabs = "Tabs",
  Accordion = "Accordion",
  Switcher = "Switcher",
  Table = "Table",
  Timeline = "Timeline",
  Facebook = "Facebook",
  Twitter = "Twitter",
  FacebookComments = "FacebookComments",
  Columns = "Columns",
  Row = "Row",
}

export enum StoryElementTypes {
  StoryButton = "StoryButton",
  StoryIcon = "StoryIcon",
  StoryEmbed = "StoryEmbed",
  StoryText = "StoryText",
  StoryMap = "StoryMap",
  StoryProgressBar = "StoryProgressBar",
  StoryLine = "StoryLine",
  StoryCountdown2 = "StoryCountdown2",
  StoryCounter = "StoryCounter",
  StoryShape = "StoryShape",
  StoryForm2 = "StoryForm2",
  StoryStarRating = "StoryStarRating",
  StoryLottie = "StoryLottie",
  StoryImage = "StoryImage",
  StoryVideo = "StoryVideo",
}

export enum ShopifyElementTypes {
  ProductTitle = "ProductTitle",
  ProductDescription = "ProductDescription",
  ProductImage = "ProductImage",
  ProductMetafield = "ProductMetafield",
  ProductList = "ProductList",
  AddToCart = "AddToCart",
  Price = "Price",
  Quantity = "Quantity",
  Variant = "Variant",
  Vendor = "Vendor",
}

export enum LeftSidebarOptionsIds {
  addElements = "addElements",
  reorderBlock = "reorderBlock",
  globalStyle = "globalStyle",
  deviceMode = "deviceMode",
  more = "more",
  cms = "cms",
}

export interface LeftSidebarOptionBase {
  id: string;
  icon?: string;
  title?: string;
}

interface LeftSidebarCommonOption extends LeftSidebarOptionBase {
  type:
    | LeftSidebarOptionsIds.cms
    | LeftSidebarOptionsIds.reorderBlock
    | LeftSidebarOptionsIds.globalStyle
    | LeftSidebarOptionsIds.deviceMode
    | LeftSidebarOptionsIds.more;
}

export interface LeftSidebarAddElementsType extends LeftSidebarOptionBase {
  type: LeftSidebarOptionsIds.addElements;
  elements: {
    label: string;
    moduleNames: Array<BaseElementTypes | StoryElementTypes | ShopifyElementTypes>;
  }[];
}

export type LeftSidebarOption = LeftSidebarCommonOption | LeftSidebarAddElementsType;

export enum LeftSidebarMoreOptionsIds {
  link = "link",
  shortcuts = "shortcuts",
}

export interface LeftSidebarMoreOptions {
  type: LeftSidebarMoreOptionsIds;
  label: string;
  link: string;
  icon?: string;
  linkTarget?: "_blank" | "_self" | "_parent" | "_top";
  roles?: Array<string>;
}

export interface LeftSidebar {
  topTabsOrder?: Array<LeftSidebarOption>;
  bottomTabsOrder?: Array<LeftSidebarOption>;

  [LeftSidebarOptionsIds.more]?: {
    options?: Array<LeftSidebarMoreOptions>;
  };

  [LeftSidebarOptionsIds.cms]?: {
    onOpen: (onClose: VoidFunction) => void;
    onClose: VoidFunction;
    icon?: string;
  };
}

export const isLeftSidebarAddElementsType = (option: LeftSidebarOption): option is LeftSidebarAddElementsType =>
  option.type === LeftSidebarOptionsIds.addElements;
