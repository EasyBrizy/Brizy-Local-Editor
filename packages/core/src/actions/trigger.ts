import { ActionResolve, Target } from "../types/types";
import { ActionTypes } from "./types";

export const triggerRes = (r: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.triggerRes, data: r }),
});

export const triggerRej = (r: string): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.triggerRej, data: r }),
});
