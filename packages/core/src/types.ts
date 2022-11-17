interface API {
  update: VoidFunction;
}

type CB = (api: API) => void;

export type Builder = (el: HTMLElement, cb: CB) => void;
