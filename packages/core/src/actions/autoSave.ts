import { ActionResolve, Target } from "../types/types";
import { ActionTypes } from "./types";

export const autoSave = (uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.autoSave }),
});
