import { BuilderModes } from "@/actions/init";
import { HtmlOutput, PageData, ProjectData } from "./common";
import { CustomFile } from "./customFile";
import { DynamicContent } from "./dynamicContent";
import { Form } from "./form";
import { LeftSidebar } from "./leftSidebar";
import { Media } from "./media";
import { Menu } from "./menu";
import { Publish } from "./publish";
import { Screenshots } from "./screenshots";
import { DefaultKits, DefaultLayouts, DefaultPopups, DefaultStories } from "./templates";
import { Theme } from "./theme";

export interface Output {
  pageData: {
    [key: string]: unknown;
    compiled?: HtmlOutput;
  };
  projectData: {
    [key: string]: unknown;
    compiled?: HtmlOutput;
  };
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

export interface BuilderOutput {
  pageData: PageData;
  projectData: ProjectData;
  error?: string;
  mode: BuilderModes;
}

export interface AutoSaveOutput {
  pageData?: PageData;
  projectData?: ProjectData;
}
export type OnSave = (output: Output) => void;
export type OnAutoSave = (output: AutoSaveOutput) => void;

export interface Config {
  mode?: Modes;
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

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

  //#region Integration

  integration?: {
    form?: Form;
  };

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
  };

  //#endregion

  //#region Events

  onSave?: OnSave;
  onAutoSave?: OnAutoSave;
  autoSaveInterval?: number;
  onLoad?: VoidFunction;

  //#endregion
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

export type Init = (token: string, config: Config, cb: CB) => void;

export type Builder = {
  init: Init;
};
