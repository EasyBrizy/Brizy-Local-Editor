export type MValue<A> = A | undefined;
export type Nullish = undefined | null;
export type Literal = string | number;
export type Choice = {
  title: string;
  value: Literal;
};
export type MNullish<T> = T | Nullish;

export type Response<R> = (r: R) => void;

export type Dictionary<T> = {
  [k: string]: T | undefined;
};
