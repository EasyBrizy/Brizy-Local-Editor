import { Config } from "./types/types";
import { getHTML } from "./utils";

interface Payload {
  data: string;
}

export class BuilderC {
  contentWindow: Window;

  constructor(el: HTMLElement, config: Config) {
    if (!(el instanceof HTMLElement)) {
      throw "Element must be a HTMLElement";
    }

    const w = el.ownerDocument.defaultView ?? window;
    const iframe = el.ownerDocument.createElement("iframe");

    iframe.srcdoc = getHTML({ ...config, urls: { ...config.urls, editorAssets: "dist" } });
    iframe.width = "100%";

    iframe.addEventListener("load", () => {
      const contentWindow = iframe.contentWindow;

      if (!contentWindow) {
        console.error("Something went wrong");
        return;
      }

      this.contentWindow = contentWindow;
      this.init(config);
    });

    const onUpdate = (payload: Payload) => {
      console.log(payload);
    };

    const updates = {
      update: onUpdate,
    };

    w.addEventListener("message", (event) => {
      const data = event.data;
      if (data.target !== "@builder") {
        return;
      }

      try {
        const action = JSON.parse(data.data);
        //@ts-expect-error: temporary
        updates[action.type](action.payload);
      } catch (e) {
        console.error("Invalid Event Data");
      }
    });

    el.appendChild(iframe);
  }

  static init(el: HTMLElement, config: Config) {
    return new BuilderC(el, config);
  }

  private init(config: Config) {
    this.contentWindow.postMessage({
      target: "@builder",
      data: JSON.stringify({
        type: "initPage",
        data: {
          pageData: config.pageData,
          projectData: config.projectData,
          configData: {
            urls: config.urls,
          },
        },
      }),
    });
  }

  public update() {
    this.contentWindow.postMessage({
      target: "@builder",
      data: JSON.stringify({ type: "update" }),
    });
  }
}
