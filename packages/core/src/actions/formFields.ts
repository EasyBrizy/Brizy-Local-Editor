import { ActionResolve, FormFieldsOption, Target } from "../types/types";
import { ActionTypes } from "./types";

export const formFieldsRes = (r: Array<FormFieldsOption>, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.formFieldsRes, data: r }),
});

export const formFieldsRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.formFieldsRej, data: r }),
});
