// Provider for Builder
// Used for transform core api to builder internal api
import { defaultDC } from "./defaults";
import { subscriber } from "./subscriber";

(function (w: Window) {
  const origin = w.__origin__;
  const mode = "external_story";

  window.__VISUAL_CONFIG__ = {
    mode,
    project: { id: 1 },
    page: { provider: "collections" },
    user: { role: "admin", isApproved: true },
    urls: {
      assets: origin + "/dist/free",
      worker: origin + "/dist/free/editor/js",
      templateFonts: origin + "/dist/free/editor/icons",
    },
    editorVersion: "no-verify",
    menuData: [],
    platform: "cms",
    cms: {},
    pro: {
      urls: {
        assets: origin + "/dist/pro",
      },
    },
    dynamicContent: defaultDC(),
    api: {},
  };

  // Attach Message Subscriber
  window.addEventListener("message", subscriber, false);
})(window);
