import { ActionResolve, Target } from "../types/types";
import { ActionTypes } from "./types";

export const save = (data: { callback: string }): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.save, data }),
});
