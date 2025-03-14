import { BuilderModes } from "@/actions/init";
import { PostsSources } from "@/types/posts";
import { CollectionItems } from "./collectionItems";
import { CollectionTypes } from "./collectionTypes";
import { PageDataOutput, ProjectDataOutput, Response } from "./common";
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

export interface Output {
  pageData?: PageDataOutput;
  projectData?: ProjectDataOutput;
  error?: string;
  popupSettings?: {
    verticalAlign: "top" | "bottom" | "center";
    horizontalAlign: "left" | "right" | "center";
  };
}

export interface RequiredOutput {
  pageData: PageDataOutput;
  projectData: ProjectDataOutput;
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
  Page = "shopify-page",
}

export interface BuilderOutput {
  mode: BuilderModes;
  pageData?: PageDataOutput;
  projectData?: ProjectDataOutput;
  error?: string;
}

export interface CompileBuilderOutput {
  mode: BuilderModes;
  pageData: PageDataOutput;
  projectData: ProjectDataOutput;
  error?: string;
}

export interface AutoSaveOutput {
  pageData?: PageDataOutput;
  projectData?: ProjectDataOutput;
}

export type OnSave = (output: Output) => void;
export type OnAutoSave = (output: AutoSaveOutput) => void;

export type OnCompile = (output: RequiredOutput) => void;

export interface Extension {
  host?: string;
  path: string;
}

export interface Config {
  mode?: Modes;
  isRTL?: boolean;
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

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
    publish?: Publish;
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

  onSave?: OnSave;
  onAutoSave?: OnAutoSave;
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
    ProductList?: {
      collectionTypeId?: string;
      component?: string;
      source?: string;
    };
    Posts?: {
      _version?: number;
      items?: Array<Record<string, unknown>>;
      source?: string;
      orderBy?: string;
      order?: string;
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
    posts?: {
      handler?: (res: Response<PostsSources>, rej: Response<string>) => void;
      exclude?: boolean;
      includeQueryMultiOptions?: boolean;
      offset?: boolean;
      orderBy?: boolean;
      order?: boolean;
      querySource?: boolean;
    };
  };

  // #endregion
}

export interface API {
  save: VoidFunction;
  compile: (cb?: OnCompile) => void;
}

type CB = (api: API) => void;

export enum Target {
  builder = "@builder",
}

export type ActionResolve = {
  uid: string;
  data: string;
};

export type Init = (token: string, config: Config, cb: CB) => void;

export type Builder = {
  init: Init;
};
