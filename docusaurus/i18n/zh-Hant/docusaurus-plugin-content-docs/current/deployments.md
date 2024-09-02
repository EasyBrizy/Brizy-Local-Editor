---
sidebar_position: 3
---

# 部署

## CDN 版本

Brizy Local 的 CDN 版本是由 Brizy 的伺服器託管的。如果你不想自行託管編輯器，可以選擇這個版本。這樣你可以在自己的端初始化編輯器，但 Brizy 會在其 CDN 基礎設施上託管它。

[![影片](/img/deployment.jpg)](https://user-images.githubusercontent.com/10077249/206906576-cc654003-9b6d-4661-88dd-affb63ba538d.mp4)

> 如需有關如何使用編輯器的 CDN 版本的更多信息，請查閱 [`packages/core`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/docs/cdn.MD) 文件。

## 自託管版本

Brizy Local 的自託管版本是由你自己託管的。如果你想在自己的伺服器上本地託管編輯器，可以選擇這個版本。

[![影片](/img/deployment.jpg)](https://user-images.githubusercontent.com/10077249/206906566-1d2087fc-847c-4530-8760-9b169dd3ed65.mp4)

> 如需有關如何使用編輯器的自託管版本的更多信息，請查閱 [`packages/core`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/docs/self-hosted.MD) 的 README 文件，或查看 [`packages/demo`](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/demo/README.MD) 中的演示。

## Vercel

你可以使用以下部署按鈕，部署一個全新的 Brizy Local 項目，並設置 Git 存儲庫：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EasyBrizy/Brizy-Local-Editor&project-name=brizy-local-editor&repository-name=brizy-local-editor&output-directory=packages/demo/public)

## 第三方

### 創建應用程式

```shell
npx @brizy/create-thirdparty
cd < my-app >
npm run build
```

閱讀更多關於 [第三方](/docs-third-party/brizy-widgets/introduction) 的內容。

### 使用方式

在建置好第三方庫後，你可以通過 HTTP URL 將其發送到編輯器配置。以下是具體步驟：

1. 在一個可通過 HTTP 訪問的伺服器上託管已建置的庫文件。
2. 獲取已建置的 JavaScript 文件（如 `main.js`）的 HTTP URL。
3. 在編輯器配置中指定這些 URL 來加載庫文件：

```typescript
const config = {
  // 配置的其他鍵...

  thirdPartyUrls: [
    {
      scriptUrl: "http://<the-build-host-of-library>/main.js",
    },
  ],
};
```

> 更多有關 [`config`](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/cdn.MD#config) 的信息

將 `https://<the-build-host-of-library>/main.js` 替換為你建置的庫文件的實際 HTTP URL。通過將這個 URL 添加到編輯器配置中的 `thirdPartyUrls` 陣列中，該庫將被加載並可在編輯器環境中使用。
