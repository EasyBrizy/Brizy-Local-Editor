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

//#region Form

export interface FormFieldsOption {
  title: string;
  value: string;
}

//#endregion

//#region DynamicContent

export interface DynamicContentOption {
  label: string;
  placeholder: string;
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
      action?: {
        url: string;
        handler: (res: Response<string>, rej: Response<string>) => void;
      };
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
    richText?: {
      useCustomPlaceholder?: boolean;
      handler: (res: Response<DynamicContentOption>, rej: Response<string>) => void;
    };
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
  data: string;
};

export type Init<T extends HtmlOutputType> = (token: string, config: Config<T>, cb: CB) => void;

export type Builder<T extends HtmlOutputType> = {
  init: Init<T>;
};
