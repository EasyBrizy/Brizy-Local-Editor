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
}

export interface BuilderOutput {
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  styles?: Array<string>;
  scripts?: Array<string>;
  html?: string;
  error?: string;
}

export enum LeftSidebarOptionsIds {
  addElements = "addElements",
  reorderBlock = "reorderBlock",
  globalStyle = "globalStyle",
  deviceMode = "deviceMode",
  more = "more",
}

export interface Config<T extends HtmlOutputType> {
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  htmlOutputType: T;

  //#region Urls

  getMedia: string;
  setMedia: string;
  setLeads: string;
  assets?: string;
  pagePreview?: string;

  //#endregion

  // ui
  ui?: {
    //#region Popup

    popupSettings?: {
      displayCondition?: boolean;
      deletePopup?: boolean;
    };

    //#endregion

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
    };

    //#endregion
  };

  // events
  onSave?: (data: Output<T>) => void;
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
  data: string;
};

export type Init<T extends HtmlOutputType> = (token: string, config: Config<T>, cb: CB) => void;

export type Builder<T extends HtmlOutputType> = {
  init: Init<T>;
};
