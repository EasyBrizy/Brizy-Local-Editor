export type Response<R> = (r: R) => void;

export interface ProjectCompiled {
  styles: Array<string>;
}

export interface PageCompiled {
  html: string;
  styles: Array<string>;
  scripts: Array<string>;
}

export type ProjectData = {
  [key: string]: unknown;
  compiled?: ProjectCompiled;
};

export type PageData = {
  [key: string]: unknown;
  compiled?: PageCompiled;
};
