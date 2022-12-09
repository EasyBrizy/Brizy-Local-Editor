## Requirements

- node >= 16
- npm >= 7

## Installation

[![](https://i.imgur.com/wrO4h6S.png)](https://youtu.be/OHnr2pWWrU8)

We have 3 different mode in editor:
- Story on branch `story`
- Popup on branch `popup`
- Page on branch `pages`

#### 1. Git clone
#### 2. Change branch to [story, popup, pages]
#### 3. Run `npm install` inside root folder.
#### 4. Build core

Inside `packages/core`

```shell
# Build core
# npm run build:prod -- --env PUBLIC_HOST=`host where the build will be hosted`

# Example on S3
npm run build:prod -- --env PUBLIC_HOST=https://s3.amazonaws.com/${AWS_BUCKET}/build
```

#### 5. Store `build` folder on AWS S3

```shell
AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY} AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} aws s3 cp build s3://${AWS_BUCKET}/build --recursive
```

## Usage

```shell
# Builder Container
<div id="editor" style="height: 85vh; width: 100vw"></div>

# Update button
<button id="update">Update</button>

# Self-hosted S3 version
<script src="https://s3.amazonaws.com/${AWS_BUCKET}/build/index.js"></script>

<script>
  # Story Config Example: https://github.com/EasyBrizy/Brizy-Local/blob/story/packages/demo/public/index.html
  # Popup Config Example: https://github.com/EasyBrizy/Brizy-Local/blob/popup/packages/demo/public/index.html
  # Pages Config Example: https://github.com/EasyBrizy/Brizy-Local/blob/pages/packages/demo/public/index.html
  const config = {...};
  const editor = document.querySelector("#editor");
  const update = document.querySelector("#update");

  const Builder = window.Builder;
  let builderAPI;

  Builder.init(editor, config, (api) => {
    builderAPI = api;
  });

  update.addEventListener("click", () => {
    builderAPI.save();
  });
</script>

```

## Config

Config can be passed object when you initialize builder from script.

| Name        | Type  | Description                                       |
|:------------|:-------------|:------------------------------------------|
| pageData    | object | Loads the JSON page specified in the pageData parameter. |
| projectData | object | Loads the JSON project specified in the projectData parameter. |
| getMedia    | string | This is the URL for the image resizer service. There are two image resizer service options: hosted by Brizy and self hosted. If you choose to use the image resizer service hosted by Brizy, you don't have to change the media.brizylocal.com URL. For the self hosted version you need to replace the media.brizylocal.com with the URL of your image resizer service. Setup your own image resizer service like [this](https://github.com/EasyBrizy/Brizy-Local-Image-Resizer#image-resizer)                 |
| setMedia    | string | Replace the URL with your own. This is the server where you want to store the images. |
| setLeads    | string | Replace the URL with your own. This is the link where we send the information from the contact form element when the end user submits the form. |

### Config Events

Config can be passed object when you initialize builder from script.

| Name   | Description                           | Returned values         |
|:-------|:--------------------------------------|:------------------------|
| onSave | Fired when the Save button is clicked | JSON and HTML documents |
| onLoad | Fired when the builder is loaded      | -                       |

See more details in TS [see below](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/src/types/types.ts)
