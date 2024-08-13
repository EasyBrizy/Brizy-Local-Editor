// Provider for Builder
// Used for transform core api to builder internal api
import { compiler } from "./defaults";
import { subscriber } from "./subscriber";

(function (w: Window) {
  const origin = w.__origin__;
  const mode = "page";

  window.__VISUAL_CONFIG__ = {
    mode,
    project: {
      id: 1,
      status: {
        locked: false,
      },
    },
    page: {
      provider: "collections",
    },
    user: {
      role: "admin",
      isApproved: true,
    },
    compiler: compiler(),
    urls: {
      assets: origin + "/dist/free",
      worker: origin + "/dist/free/editor/js",
      templateFonts: origin + "/dist/free/editor/icons",
      templateIcons: origin + "/dist/free/editor/icons",
      compileTemplateIcons: origin + "/dist/free/editor/icons",
    },
    editorVersion: "no-verify",
    menuData: [],
    platform: "shopify",
    templateType: "shopify-page",
    contentDefaults: {
      ProductMetafield: {
        sourceType: "shopify-product",
      },
      PostTitle: {
        textPopulation: "{{brizy_dc_post_title}}",
        textPopulationEntityType: "",
        textPopulationEntityId: "",
        _population: {
          name: "brizy_dc_post_title",
          placeholder: "{{brizy_dc_post_title}}",
        },
      },
      PostContent: {
        textPopulation: "{{brizy_dc_post_content}}",
        textPopulationEntityType: "",
        textPopulationEntityId: "",
        _population: {
          name: "brizy_dc_post_content",
          placeholder: "{{brizy_dc_post_content}}",
        },
      },
      AddToCart: {
        sourceType: "shopify-product",
      },
      Quantity: {
        sourceType: "shopify-product",
      },
      Variant: {
        sourceType: "shopify-product",
      },
      FeaturedImage: {
        linkSource: "shopify-page",
      },
    },
    cms: {},
    pro: {
      urls: {
        assets: origin + "/dist/pro",
      },
    },
    api: {},
  };

  // Attach Message Subscriber
  window.addEventListener("message", subscriber, false);
})(window);
