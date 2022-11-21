export interface Output {
  html: string;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  scripts: Array<string>;
  styles: Array<string>;
}

export interface Config {
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  urls: {
    getMedia: string;
    setMedia: string;
    setLeads: string;
  };
  onSave?: (data: Output) => void;
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

export type Init = (el: HTMLIFrameElement, config: Config, cb: CB) => void;

export type Builder = {
  init: Init;
};
