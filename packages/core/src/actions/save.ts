import { ActionResolve, Target } from "../types/types";

export const save = (): ActionResolve => ({
  target: Target.builder,
  data: JSON.stringify({ type: "save" }),
});
