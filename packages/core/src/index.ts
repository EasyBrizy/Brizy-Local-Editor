import { Builder } from "./types";

(function (w: Window) {
  const Builder: Builder = (el, cb): void => {};

  // Attach to current window
  w.Builder = Builder;
})(window);
