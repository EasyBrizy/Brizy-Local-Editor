export type MValue<A> = A | undefined;
export type Literal = string | number;

export type Response<R> = (r: R) => void;

export type Dictionary<T> = {
  [k: string]: T | undefined;
};
