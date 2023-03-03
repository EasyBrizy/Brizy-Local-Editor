import { ActionResolve, Target } from "../types/types";
import { ActionTypes } from "./types";

export const save = (uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.save }),
});
