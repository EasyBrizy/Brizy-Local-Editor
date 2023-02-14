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

export const formActionRes = (r: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.formActionRes, data: r }),
});

export const formActionRej = (r: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.formActionRej, data: r }),
});
