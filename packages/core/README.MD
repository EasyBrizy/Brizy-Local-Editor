## Editor
We have 3 different mode in editor:
- Story on branch `story`
- Popup on branch `popup`
- Page on branch `pages`

## Requirements

- node >= 16
- npm >= 7

## Installation

Run `npm install` inside root folder.

## Usage

### 1. Build core
```shell
# Build core
# npm run build:prod -- --env PUBLIC_HOST=`host where the build will be hosted`

# Example on S3
npm run build:prod -- --env PUBLIC_HOST=https://s3.amazonaws.com/${AWS_BUCKET}/build
```

### 2. Store `build` folder on AWS S3

```shell
aws s3 cp build s3://${{ secrets.AWS_BUCKET }}/build --recursive
```

## Initialize Editor

```shell
# Builder Container
<div id="editor"></div>

# Update button
<button id="update">Update</button>

# S3
<script src="https://s3.amazonaws.com/${AWS_BUCKET}/build/index.js"></script>

<script>
  # config
  const config = {};
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

See more details in TS [see below](https://github.com/bagrinsergiu/demo-editor-partners/blob/master/packages/core/src/types/types.ts)
