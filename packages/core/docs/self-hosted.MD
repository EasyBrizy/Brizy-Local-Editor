## Requirements

- node >= 16
- npm >= 7

## Installation

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

| Name        | Description                                            |
|:------------|:-------------------------------------------------------|
| pageData    | (object) page JSON data structure of elements          |
| projectData | (object) project JSON data Global Styles, Global Fonts |
| getMedia    | (string) where to GET image by UID                     |
| setMedia    | (string) where to POST image                           |
| setLeads    | (string) where to send forms leads                     |

### Config Events

Config can be passed object when you initialize builder from script.

| Name          | Description                                            |
|:--------------|:-------------------------------------------------------|
| onSave        | (optional) Called when builder are saved               |

See more details in TS [see below](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/src/types/types.ts)
