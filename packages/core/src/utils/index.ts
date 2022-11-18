import { Config } from "../types/types";

export const getHTML = (config: Config): string => {
  return `
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="${config.urls.editorAssets}/free/editor/css/editor.css" rel="stylesheet" />
  
      <script>
        window.__VISUAL_CONFIG__ = {
          project: { id: 1 },
          mode: "external_story",
          page: { provider: "collections" },
          user: { role: "admin", isApproved: true },
          urls: {
            pagePreview: "/preview",
            assets: "${config.urls.editorAssets}/free",
            getMedia: "${config.urls.getMedia}",
            worker: "${config.urls.editorAssets}/free/editor/js",
            templateFonts: "${config.urls.editorAssets}free/editor/icons",
          },
          editorVersion: "no-verify",
          menuData: [],
          platform: "cms",
          cms: {},
          pro: {
            urls: {
              assets: "${config.urls.editorAssets}/pro",
            },
          },
        };
      </script>
    </head>
    <body class="brz brz-ed">
      <script>
        window.addEventListener(
          "message",
          (event) => {
            const data = event.data;
            if (data.target !== "@builder") {
              return;
            }
  
            try {
              const action = JSON.parse(data.data);
  
              switch (action.type) {
                case "initPage": {
                  const configData =
                    "configData" in action.data ? action.data.configData : {};
                  window.__VISUAL_CONFIG__.urls = {
                    ...window.__VISUAL_CONFIG__.urls,
                    ...configData.urls,
                  };
                  window.__VISUAL_CONFIG__.applications = {
                    ...window.__VISUAL_CONFIG__.applications,
                    ...configData.applications,
                  };
                  window.__VISUAL_CONFIG__.pageData = action.data.pageData;
                  window.__VISUAL_CONFIG__.projectData = {
                    dataVersion: 1,
                    data: action.data.projectData,
                  };
  
                  const iframe = document.querySelector("#no-script-frame");
                  const root = document.querySelector("#root");
  
                  if (iframe && root) {
                    root.innerHTML = iframe.innerHTML;
                  }
                  break;
                }
                case "update": {
                  const configData =
                    action.data && "configData" in action.data
                      ? action.data.configData
                      : {};
  
                  window.__VISUAL_CONFIG__.onUpdate((res) => {
                    event.source.postMessage({
                      target: "@builder",
                      data: JSON.stringify({
                        type: "update",
                        payload: res,
                      }),
                    });
                  }, configData);
                  break;
                }
                default: {
                  console.warn("Invalid dataType", action.type);
                }
              }
            } catch (e) {
              console.error("Invalid JSON");
            }
          },
          false
        );
      </script>
  
      <div id="root"></div>
  
      <noscript id="no-script-frame">
        <iframe
          id="brz-ed-iframe"
          class="brz-iframe brz-ed-iframe--desktop"
          style="border: 0"
          srcdoc="
            <html>
            <head>
                <link href='${config.urls.editorAssets}/free/editor/css/editor.css' rel='stylesheet'>
                <link href='${config.urls.editorAssets}/pro/css/editor.pro.css' rel='stylesheet'>
                <script>
                    window.__VISUAL_CONFIG__ = window.parent.__VISUAL_CONFIG__;
                </script>
            </head>
            <body class='brz brz-ed brz-ed--desktop'>
                <div id='brz-ed-root'></div>
                <div id='brz-popups'></div>
  
                <script src='${config.urls.editorAssets}/free/editor/js/editor.vendor.js'></script>
                <script src='${config.urls.editorAssets}/free/editor/js/editor.js'></script>
                <script src='${config.urls.editorAssets}/pro/js/editor.pro.js'></script>
            </body>
            </html>
          "
        ></iframe>
      </noscript>
    </body>
  </html>
  `;
};
