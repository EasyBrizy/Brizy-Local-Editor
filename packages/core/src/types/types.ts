import { PageData, ProjectData } from "./common";
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
  popup = "popup",
  page = "page",
  story = "story",
}

export interface BuilderOutput {
  pageData: PageData;
  projectData: ProjectData;
  styles?: Array<string>;
  scripts?: Array<string>;
  html?: string;
  error?: string;
  mode: Modes;
}

export interface AutoSaveOutput {
  pageData: PageData;
  projectData: ProjectData;
}

export type OnSave<T extends HtmlOutputType> = (output: Output<T>) => void;
export type OnAutoSave<T extends HtmlOutputType> = (output: Output<T>) => void;

export interface Config<T extends HtmlOutputType> {
  mode?: Modes;
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  htmlOutputType: T;

  //#region Urls

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
  };

  //#endregion

  //#region Events

  onSave?: OnSave<T>;
  onAutoSave?: OnAutoSave<T>;
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

export type Init<T extends HtmlOutputType> = (token: string, config: Config<T>, cb: CB) => void;

export type Builder<T extends HtmlOutputType> = {
  init: Init<T>;
};
