# 📦 Brizy Cloud Image Uploader

A lightweight, framework-agnostic class that enables seamless image uploading, management, and insertion into the Brizy editor via Brizy Cloud.

🌟 Features

- Zero Configuration Setup: Initialize in seconds with only a clientID.
- Flexible Mounting: Optionally attach the modal to any HTMLElement or default to document.body.
- Batch Operations: Upload multiple images at once, select or multi-select for deletion, and rename images inline.
- Intuitive UX: Clean, modal-driven interface matches Brizy’s look and feel.
- Seamless Integration: Returns a handler for api.media in the Brizy editor configuration.
- Dual Module Support: Ships in both ESM and CommonJS formats.
- Development: Enables development mode, which provides additional logs for debugging purposes.

## 🚀 Installation

```bash
npm install @brizy/cloud-media-upload
# or
yarn add @brizy/cloud-media-upload
```

## ⚙️ Quick Start

```ts
// ESM import
import MediaUpload from "@brizy/cloud-media-upload";
import "@brizy/cloud-media-upload/dist/style.css";

// CommonJS require
// const BrizyCloudUploader = require('@brizy/cloud-media-upload').default;

// Initialize uploader
const node = document.querySelector<HTMLElement>(".myContainer");

const uploader = new MediaUpload({
  clientId: "YOUR_CLIENT_ID", // required
  node, // optional
  isDev: false, // optional
});

// Inject into Brizy editor config
config = {
  // ...otherKeys
  api: {
    // ...otherKeys
    media: uploader.mediaConfig,
  },
};
```

🧩 API Reference

| Option     | Type               | Required | Default                                                                    | Description                                                                                                                                                                                                       |
| ---------- | ------------------ | -------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `node`     | `HTMLDivElement`   | No       | Automatically created in document.body as <div class="cloud-media-upload"> | DOM node where the media uploader interface will be mounted. If not provided, the uploader will automatically create a <div class="cloud-media-upload"> inside document.body and use it as the default container. |
| `clientId` | `string \| number` | Yes      | –                                                                          | Unique client identifier used to authenticate.                                                                                                                                                                    |
| `isDev`    | `boolean`          | No       | `false`                                                                    | Enables development mode with additional logs .                                                                                                                                                                   |

```ts
new MediaUpload({
  clientId: 40302010,
});
```

## Properties

`resizeUrl: string`
Returns the image resize service URL. Chooses between production and development URLs based on isDev.

`resizePatterns: Array`
Returns the set of image resize patterns depending on the environment.

`addMedia: { handler: Function }`
Returns an object containing the media insertion handler function.

`mediaConfig: { addMedia, mediaResizeUrl, imagePatterns }`
Returns the complete media configuration object for Brizy editor.

## 🖼️ Modal UI Workflow

1. Open Modal: Triggered by the editor’s image toolbar button.
2. Add Files: Click “Add Files” to select one or more images.
3. Manage Images:
   - Select: Single-click to choose images.
   - Bulk Delete: Multi-select and click “Delete”.
   - Rename: Click on an image name to edit.
4. Insert: Select image and click “Insert File” to inject into the editor.

## 🔧 Development Mode

Toggle sandbox environment for testing:

```ts
const uploader = new MediaUpload({
  clientID: "DEV_ID",
  isDev: true,
});
```

## 🛠️ Build & Distribution

Distributed as both ESM and CJS:
ESM: dist/esm/index.js
CJS: dist/cjs/index.js

No additional bundler configuration needed.

## 🙋‍♂️ Support

If you find a bug or want to suggest a feature, feel free
to [open an issue](https://github.com/EasyBrizy/Brizy-Local-Editor) (or other repo?).

## 📄 License

Need to review
