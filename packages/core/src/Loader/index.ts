const css = `@keyframes spin{100%{transform:rotate(360deg)}}.brz__curtain{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#141923;}.brz__curtain-spinner,.brz__curtain-spinner:after,.brz__curtain-spinner:before{content:'';position:absolute;top:50%;left:50%;border:3px solid transparent;border-radius:50%;animation:spin 1s linear infinite}.brz__curtain-spinner{width:100px;height:100px;margin:-50px 0 0 -50px;border-top-color:#22b0da;animation-duration:2.5s}.brz__curtain-spinner:after{width:80px;height:80px;margin:-40px 0 0 -40px;border-right-color:#ed2164;animation-duration:2s}.brz__curtain-spinner:before{width:60px;height:60px;margin:-30px 0 0 -30px;border-bottom-color:#fff}`;

export const loader = (doc: Document): HTMLDivElement => {
  const curtain = doc.createElement("div");
  const spinner = doc.createElement("div");
  const style = doc.createElement("style");

  spinner.className = "brz__curtain-spinner";

  style.innerHTML = css;

  curtain.className = "brz__curtain";
  curtain.appendChild(spinner);
  curtain.appendChild(style);

  return curtain;
};
