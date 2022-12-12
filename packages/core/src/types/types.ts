export interface Output {
  html: string;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  scripts: Array<string>;
  styles: Array<string>;
}

export enum LeftSidebarOptionsIds {
  addElements = "addElements",
  reorderBlock = "reorderBlock",
  globalStyle = "globalStyle",
  deviceMode = "deviceMode",
  more = "more",
}

export interface Config {
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  //#region Urls

  getMedia: string;
  setMedia: string;
  setLeads: string;
  assets?: string;
  pagePreview?: string;

  //#endregion

  // ui
  ui: {
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
  onSave?: (data: Output) => void;
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

export type Init = (el: HTMLElement, config: Config, cb: CB) => void;

export type Builder = {
  init: Init;
};
