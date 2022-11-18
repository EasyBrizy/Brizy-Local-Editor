export interface API {
  update: VoidFunction;
}

export interface Config {
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;
  urls: {
    getMedia: string;
    setMedia: string;
    setLeads: string;
    editorAssets: string;
  };
}

type CB = (api: API) => void;

export type Builder = (el: HTMLElement, config: Config, cb: CB) => void;
