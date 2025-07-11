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
  Target,
  ShopifyTemplate,
  Help,
  Menu,
} from "./types/types";

export { DCTypes, Modes } from "./types/types";
