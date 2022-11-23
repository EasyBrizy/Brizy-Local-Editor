import "@builder/core";

const iframe = document.querySelector<HTMLIFrameElement>("#editor");

if (iframe) {
  iframe.src = import.meta.env.CORE_HOST ?? "";
}
