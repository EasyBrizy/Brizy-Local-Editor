import { loader } from "@/Loader";
import { initLoader } from "@/Loader/init";
import { init } from "@/actions/init";
import { ActionResolve, Init, OnCompile, OnSave } from "@/types/types";
import { getHandlers } from "@/utils/config";
import * as Comlink from "comlink";
import { v4 as uuid } from "uuid";

const savedNodeCB = new Map<HTMLElement, OnSave>();
const compiledNodeCB = new Map<HTMLElement, OnCompile>();

type IframeHandlers = {
  init: (data: ActionResolve) => void;
  save: (uid: string) => void;
  compile: (uid: string) => void;
};

export const Core: Init = (token, config, cb) => {
  if (!token) {
    console.error("Token is required");
    return;
  }

  const { container } = config;

  if (!(container instanceof HTMLElement)) {
    console.error("The element must be a valid HTMLElement");
    return;
  }

  const iframe = document.createElement("iframe");
  const spinner = loader(document);

  initLoader(spinner, container);
  const uid = uuid();
  container.dataset.uid = uid;
  iframe.setAttribute("src", `${PUBLIC_HOST}/index.html`);
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.frameBorder = "0";

  iframe.addEventListener("load", async () => {
    const iframeWindow = iframe.contentWindow;

    if (!iframeWindow) {
      console.error("Something went wrong on load iframe");
      return;
    }

    const handlers = getHandlers({
      config,
      iframe,
      container,
      spinner,
      savedNodeCB,
      compiledNodeCB,
      uid,
    });

    Comlink.expose(handlers, Comlink.windowEndpoint(iframeWindow));

    const iframeApi = Comlink.wrap<IframeHandlers>(Comlink.windowEndpoint(iframeWindow));
    await iframeApi.init(init(config, token, uid));

    const save = async (cb?: OnSave) => {
      if (typeof cb === "function") {
        savedNodeCB.set(container, cb);
      }
      await iframeApi.save(uid);
    };

    const compile = async (cb?: OnCompile) => {
      if (typeof cb === "function") {
        compiledNodeCB.set(container, cb);
      }
      await iframeApi.compile(uid);
    };

    const api = {
      save,
      compile,
    };

    cb(api);
  });

  container.appendChild(iframe);
};
