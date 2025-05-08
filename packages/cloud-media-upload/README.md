# 📦 Brizy Cloud Image Uploader

A minimal and powerful utility for uploading images to Brizy Cloud and using them in the Brizy editor.

This package exports a single class that provides an easy-to-use interface for uploading images to your Brizy Cloud
project and retrieving media for use in the editor interface.

🚀 Features
✅ Upload images via File
🔐 Authenticated via API token
🧱 Perfect for custom component integrations

# 📦 Installation

```bash
npm install @brizy/cloud-media-upload
# or
yarn add @brizy/cloud-media-upload
```

#📘 Usage

1. Initialize the Uploader

```ts
import { MediaUpload } from "@brizy/cloud-media-upload";

const node = document.querySelector<HTMLElement>(".myContainer");
const clientID = 2968143;

const mediaUpload = new MediaUpload({ node, clientId: clientID, isDev: true });
```

2. Pass the mediaUpload config to editor Config

```ts
config = {
  // ...otherKeys
  api: {
    // ...otherKeys
    media: mediaUpload.mediaConfig,
  },
};
```

# 🔧 Configuration

`new BrizyImageUploader(options)`

| Option     | Type               | Required | Default                                                                    | Description                                                                                                                                                                                                       |
| ---------- | ------------------ | -------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `node`     | `HTMLDivElement`   | No       | Automatically created in document.body as <div class="cloud-media-upload"> | DOM node where the media uploader interface will be mounted. If not provided, the uploader will automatically create a <div class="cloud-media-upload"> inside document.body and use it as the default container. |
| `clientId` | `string \| number` | Yes      | –                                                                          | Unique client identifier used to authenticate.                                                                                                                                                                    |
| `isDev`    | `boolean`          | No       | `false`                                                                    | Enables development mode with additional logs .                                                                                                                                                                   |

🙋‍♂️ Support
If you find a bug or want to suggest a feature, feel free
to [open an issue](https://github.com/EasyBrizy/Brizy-Local-Editor) (or other repo?).
