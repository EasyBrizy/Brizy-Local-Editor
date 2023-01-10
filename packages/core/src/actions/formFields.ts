import { ActionResolve, FormFieldsOption, Target } from "../types/types";
import { ActionTypes } from "./types";

export const formFieldsRes = (r: Array<FormFieldsOption>): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.formFieldsRes, data: r }),
});

export const formFieldsRej = (r: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.formFieldsRej, data: r }),
});
