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

// Theme
export interface Theme {
  colors: {
    "--primary-dark"?: string;
    "--primary-white"?: string;
    "--primary-gray"?: string;
    "--secondary-dark"?: string;
    "--secondary-white"?: string;
    "--tertiary-dark"?: string;
    "--active-color"?: string;
  };
}

export type Response<R> = (r: R) => void;

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
        handler: (res: Response<{ success: string }>, rej: Response<string>) => void;
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
    richText?: (res: Response<DynamicContentOption>, rej: Response<string>) => void;
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
