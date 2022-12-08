export interface Output {
  html: string;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  scripts: Array<string>;
  styles: Array<string>;
}

interface PopupWorkspace {
  popup: {
    toolbar?: {
      displayCondition?: boolean;
      delete?: boolean;
    };
  };
}

type Workspace = PopupWorkspace;

export enum LeftSidebarOptionsIds {
  addElements = "addElements",
  blocks = "blocks",
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

  //#region Workspace

  workspace?: Workspace;

  //#endregion

  // ui
  ui: {
    //#region LeftSidebar

    leftSidebar?: {
      topTabsOrder?: Array<LeftSidebarOptionsIds>;
      bottomTabsOrder?: Array<LeftSidebarOptionsIds>;

      [LeftSidebarOptionsIds.addElements]?: {
        enable?: boolean;
      };
      [LeftSidebarOptionsIds.blocks]?: {
        enable?: boolean;
      };
      [LeftSidebarOptionsIds.globalStyle]?: {
        enable?: boolean;
      };
      [LeftSidebarOptionsIds.deviceMode]?: {
        enable?: boolean;
      };
      [LeftSidebarOptionsIds.more]?: {
        enable?: boolean;
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
