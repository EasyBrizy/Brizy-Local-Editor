import { ActionTypes } from "@/actions/types";
import { ScreenshotRes } from "@/types/screenshots";
import { ActionResolve, Target } from "@/types/types";

//#region Create

export const createScreenshotsRes = (r: ScreenshotRes, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.createScreenshotsRes, data: r }),
});

export const createScreenshotsRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.createScreenshotsRej, data: r }),
});

//#endregion

//#region Update

export const updateScreenshotsRes = (r: ScreenshotRes, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.updateScreenshotsRes, data: r }),
});

export const updateScreenshotsRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.updateScreenshotsRej, data: r }),
});

//#endregion
