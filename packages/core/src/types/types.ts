import { BuilderModes } from "@/actions/init";
import { CollectionItems } from "./collectionItems";
import { CollectionTypes } from "./collectionTypes";
import { PageData, PageDataOutput, ProjectData, ProjectDataOutput } from "./common";
import { CustomFile } from "./customFile";
import { DynamicContent } from "./dynamicContent";
import { Form, FormInputTypes } from "./form";
import { LeftSidebar } from "./leftSidebar";
import { Media } from "./media";
import { Menu } from "./menu";
import { Publish } from "./publish";
import { Screenshots } from "./screenshots";
import { DefaultKits, DefaultLayouts, DefaultPopups, DefaultStories } from "./templates";
import { Theme } from "./theme";
import { VideoTypes } from "./video";

export interface Output<T extends HtmlOutputType> {
  pageData?: PageDataOutput<T>;
  projectData?: ProjectDataOutput<T>;
  error?: string;
  popupSettings?: {
    verticalAlign: "top" | "bottom" | "center";
    horizontalAlign: "left" | "right" | "center";
  };
}

export enum Modes {
  popup = "popup",
  page = "page",
  story = "story",
}

export enum ShopifyTemplate {
  Product = "shopify-product",
  Page = "shopify-page",
  Collection = "shopify-collection",
  Article = "shopify-article",
  Blog = "shopify-blog",
}

export interface BuilderOutput<T extends HtmlOutputType> {
  pageData?: PageData<T>;
  projectData?: ProjectData<T>;
  error?: string;
  mode: BuilderModes;
}

export interface AutoSaveOutput<T extends HtmlOutputType> {
  pageData?: PageData<T>;
  projectData?: ProjectData<T>;
}

export type OnSave<T extends HtmlOutputType> = (output: Output<T>) => void;
export type OnAutoSave<T extends HtmlOutputType> = (output: AutoSaveOutput<T>) => void;

export interface Extension {
  host?: string;
  path: string;
}

export type HtmlOutputType = "html" | "json";

export interface Config<T extends HtmlOutputType> {
  mode?: Modes;
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  htmlOutputType: T;

  //#region Extensions

  extensions?: Array<Extension>;

  //#endregion

  //#region Urls

  urls?: {
    compileTemplateIcons?: string;
  };

  assets?: string;
  pagePreview?: string;

  //#endregion

  //#region Menu

  menu?: Menu;

  //#endregion

  //#region Integrations

  integrations?: {
    form?: Form;
  };

  //#endregion

  //#region l10n

  l10n?: Record<string, string>;

  //#endregion

  //#region DynamicContent

  dynamicContent?: DynamicContent;

  //#endregion

  //#region ThirdParty

  thirdPartyUrls?: Array<{ scriptUrl: string; styleUrl?: string }>;

  //#endregion

  //#region UI

  ui?: {
    // Popup
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

    // Theme
    theme?: Theme;

    // LeftSidebar
    leftSidebar?: LeftSidebar;

    // Publish
    publish?: Publish<T>;
  };

  //#endregion

  //#region API

  api?: {
    // Media
    media?: Media;

    // CustomFile
    customFile?: CustomFile;

    // Default Kits
    defaultKits?: DefaultKits;

    // Default Popups
    defaultPopups?: DefaultPopups;

    // Default Layouts
    defaultLayouts?: DefaultLayouts;

    // Default Stories
    defaultStories?: DefaultStories;

    // Screenshots
    screenshots?: Screenshots;

    // CollectionTypes
    collectionTypes?: CollectionTypes;

    // CollectionItems
    collectionItems?: CollectionItems;
  };

  //#endregion

  //#region Events

  onSave?: OnSave<T>;
  onAutoSave?: OnAutoSave<T>;
  autoSaveInterval?: number;
  onLoad?: VoidFunction;

  //#endregion

  // #region platform
  platform?: "shopify" | "cms";

  // #endregion

  // #region contentDefaults
  contentDefaults?: {
    PostTitle?: {
      textPopulation?: string;
      textPopulationEntityType?: string;
      textPopulationEntityId?: string;
      linkSource?: string;
      linkType?: string;
    };
    PostContent?: {
      textPopulation?: string;
      textPopulationEntityType?: string;
      textPopulationEntityId?: string;
    };
    Quantity?: {
      sourceType?: string;
    };
    Price?: {
      sourceType?: string;
    };
    AddToCart?: {
      sourceType?: string;
    };
    Vendor?: {
      sourceType?: string;
      linkSource?: string;
      linkType?: string;
    };
    Variant?: {
      sourceType?: string;
    };
    FeaturedImage?: {
      linkSource?: string;
      linkType?: string;
    };
  };

  // #endregion

  // #region templateType
  templateType?: {
    id: string;
    type: ShopifyTemplate;
  };

  // #endregion

  // #region elements
  elements?: {
    menu?: {
      createMenuLabel?: string;
      onOpen?: VoidFunction;
    };
    form?: {
      inputTypes?: Array<FormInputTypes>;
    };
    video?: {
      types?: Array<VideoTypes>;
    };
  };

  // #endregion
}

export interface API {
  save: VoidFunction;
}

type CB = (api: API) => void;

export enum Target {
  builder = "@builder",
}

export type ActionResolve = {
  uid: string;
  data: string;
};

export type Init<T extends HtmlOutputType> = (token: string, config: Config<T>, cb: CB) => void;

export type Builder<T extends HtmlOutputType> = {
  init: Init<T>;
};
