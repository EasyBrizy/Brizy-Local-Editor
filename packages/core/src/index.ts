import { Core } from "./core";

(function (w: Window) {
  w.Builder = {
    init: Core,
  };
})(window);

export type { AddMediaExtra, AddMediaData, Media } from "./types/media";
export type {
  Builder,
  OnSave,
  Init,
  OnCompile,
  API,
  Config,
  BuilderOutput,
  Output,
  OnAutoSave,
  AutoSaveOutput,
  RequiredOutput,
  Extension,
  ActionResolve,
  Modes,
  Target,
  ShopifyTemplate,
} from "types/types";
