export type HtmlOutputType = "monolith" | "partial";

export interface OutputType {
  monolith: {
    root: string;
  };
  partial: {
    root: string;
    styles: Array<string>;
    scripts: Array<string>;
  };
}

export interface Output<T extends HtmlOutputType> {
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  html?: OutputType[T];
  error?: string;
  popupSettings?: {
    verticalAlign: "top" | "bottom" | "center";
    horizontalAlign: "left" | "right" | "center";
  };
}

export enum Modes {
  popup = "external_popup",
  page = "page",
  story = "external_story",
}

export interface BuilderOutput {
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  styles?: Array<string>;
  scripts?: Array<string>;
  html?: string;
  error?: string;
  mode: Modes;
}

export interface MenuItem {
  type: "MenuItem";
  value: {
    id: string;
    title: string;
    url: string;
    target?: string;
    classes?: Array<string>;

    // For Dropdown next level
    items?: Array<MenuItem>;
  };
}

export enum LeftSidebarOptionsIds {
  addElements = "addElements",
  reorderBlock = "reorderBlock",
  globalStyle = "globalStyle",
  deviceMode = "deviceMode",
  more = "more",
}

//#region Media

export interface AddMediaData {
  fileName: string;
}

export interface AddMediaExtra {
  acceptedExtensions: Array<string>;
}

//#endregion

//#region File

export interface AddFileData {
  filename: string;
}

export interface AddFileExtra {
  acceptedExtensions: Array<string>;
}

//#endregion

//#region Form

export interface FormFieldsOption {
  title: string;
  value: string;
}

//#endregion

//#region DynamicContent

export enum DCTypes {
  image = "image",
  link = "link",
  richText = "richText",
}

export interface BaseDCItem {
  label: string;
  placeholder: string;
}

export interface ConfigDCItem extends BaseDCItem {
  optgroup?: ConfigDCItem[];
}

export interface DCHandlerExtra {
  keyCode?: string;
  placeholder : string,
}

interface DCItemHandler {
  handler: (res: Response<BaseDCItem>, rej: Response<string>, extra?: DCHandlerExtra) => void;
}

interface DCGroups {
  [DCTypes.image]?: Array<ConfigDCItem> | DCItemHandler;
  [DCTypes.link]?: Array<ConfigDCItem> | DCItemHandler;
  [DCTypes.richText]?: Array<ConfigDCItem> | DCItemHandler;
}

//#endregion

//#region Theme

export interface Theme {
  colors: {
    "--primary-dark"?: string;
    "--secondary-dark"?: string;
    "--tertiary-dark"?: string;
    "--primary-white"?: string;
    "--secondary-white"?: string;
    "--tertiary-white"?: string;
    "--primary-gray"?: string;
    "--secondary-gray"?: string;
    "--tertiary-gray"?: string;
    "--active-color"?: string;
  };
}

//#endregion

//#region ElementTypes

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

//#endregion

export type Response<R> = (r: R) => void;

export type OnSave = <T extends HtmlOutputType>(output: Output<T>) => void;

export interface Config<T extends HtmlOutputType> {
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  htmlOutputType: T;

  //#region Urls

  assets?: string;
  pagePreview?: string;

  //#endregion

  // Menu
  menu?: Array<{
    id: string;
    name: string;
    items: Array<MenuItem>;
  }>;

  // Integration
  integration?: {
    form?: {
      action?: string;
      recaptcha?: {
        siteKey: string;
      };
      fields?: {
        label?: string;
        handler: (res: Response<Array<FormFieldsOption>>, rej: Response<string>) => void;
      };
    };
  };

  // DynamicContentOption
  dynamicContent?: {
    useCustomPlaceholder?: boolean;
    groups?: DCGroups;
  };

  // UI
  ui?: {
    //#region Popup

    popupSettings?: {
      displayCondition?: boolean;
      deletePopup?: boolean;
      embedded?: boolean;
      horizontalAlign?: boolean;
      verticalAlign?: boolean;
      backgroundPreviewUrl?: string;
      scrollPageBehind?: boolean;
      clickOutsideToClose?: boolean;
    };

    //#endregion

    theme?: Theme;

    //#region LeftSidebar

    leftSidebar?: {
      topTabsOrder?: Array<LeftSidebarOptionsIds>;
      bottomTabsOrder?: Array<LeftSidebarOptionsIds>;

      [LeftSidebarOptionsIds.more]?: {
        options?: Array<{
          type: "link";
          label: string;
          link: string;
          linkTarget?: "_blank" | "_self" | "_parent" | "_top";
        }>;
      };

      modulesGroups?: Array<{
        label: string;
        modulesNames: Array<BaseElementTypes | StoryElementTypes>;
      }>;
    };

    //#endregion
  };

  // API
  api?: {
    //#region Media

    media?: {
      mediaResizeUrl?: string;

      addMedia?: {
        handler: (res: Response<AddMediaData>, rej: Response<string>, extra: AddMediaExtra) => void;
      };
    };

    //#ednregion

    //#region File

    customFile?: {
      fileUrl?: string;

      addFile?: {
        handler: (res: Response<AddFileData>, rej: Response<string>, extra: AddFileExtra) => void;
      };
    };

    //#endregion
  };

  // events
  onSave?: OnSave;
  onLoad?: VoidFunction;
}

export interface API {
  save: VoidFunction;
}

type CB = (api: API) => void;

export enum Target {
  builder = "@builder",
}

export type ActionResolve = {
  target: Target;
  uid: string;
  data: string;
};

export type Init<T extends HtmlOutputType> = (token: string, config: Config<T>, cb: CB) => void;

export type Builder<T extends HtmlOutputType> = {
  init: Init<T>;
};
