import {
  BlocksArray,
  DefaultBlock,
  DefaultBlockWithID,
  Kit,
  KitItem,
  KitsWithThumbs,
  LayoutsPages,
  LayoutsWithThumbs,
  Popup,
  StoriesWithThumbs,
} from "@/types/templates";
import { ActionResolve, Target } from "@/types/types";
import { ActionTypes } from "./types";

//#region Kits
export const templateKitsRes = (r: Array<KitItem>, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateKitsRes, data: r }),
});
export const templateKitsRej = (r: Array<Kit>, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateKitsRej, data: r }),
});

export const templateKitsMetaRes = (r: KitsWithThumbs, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateKitsMetaRes, data: r }),
});

export const templateKitsMetaRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateKitsMetaRej, data: r }),
});

export const templateKitsDataRes = (r: Record<string, unknown>, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateKitsDataRes, data: r }),
});

export const templateKitsDataRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateKitsDataRej, data: r }),
});

//#endregion

//#region Popups

export const templatePopupsMetaRes = (r: Popup, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templatePopupsMetaRes, data: r }),
});

export const templatePopupsMetaRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templatePopupsMetaRej, data: r }),
});

export const templatePopupsDataRes = (r: DefaultBlockWithID, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templatePopupsDataRes, data: r }),
});

export const templatePopupsDataRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templatePopupsDataRej, data: r }),
});

//#endregion

//#region Layouts

export const templateLayoutsMetaRes = (r: LayoutsWithThumbs, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateLayoutsMetaRes, data: r }),
});

export const templateLayoutsMetaRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateLayoutsMetaRej, data: r }),
});

export const templateLayoutsDataRes = (r: BlocksArray<DefaultBlockWithID>, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateLayoutsDataRes, data: r }),
});

export const templateLayoutsDataRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateLayoutsDataRej, data: r }),
});

export const templateLayoutsPagesRes = (r: LayoutsPages, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateLayoutsPagesRes, data: r }),
});

export const templateLayoutsPagesRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateLayoutsPagesRej, data: r }),
});

//#endregion

//#region Stories

export const templateStoriesMetaRes = (r: StoriesWithThumbs, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateStoriesMetaRes, data: r }),
});

export const templateStoriesMetaRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateStoriesMetaRej, data: r }),
});

export const templateStoriesDataRes = (r: BlocksArray<DefaultBlock>, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateStoriesDataRes, data: r }),
});

export const templateStoriesDataRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateStoriesDataRej, data: r }),
});

export const templateStoriesPagesRes = (r: LayoutsPages, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateStoriesPagesRes, data: r }),
});

export const templateStoriesPagesRej = (r: string, uid: string): ActionResolve => ({
  uid,
  target: Target.builder,
  data: JSON.stringify({ type: ActionTypes.templateStoriesPagesRej, data: r }),
});

//#endregion
