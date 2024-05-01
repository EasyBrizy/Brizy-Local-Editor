export type Response<R> = (r: R) => void;

export interface HtmlOutput {
  html: string;
  styles: Array<string>;
  scripts: Array<string>;
}

export type ProjectData = {
  [key: string]: unknown;
  compiled?: HtmlOutput;
};

export type PageData = {
  [key: string]: unknown;
  compiled?: HtmlOutput;
};
