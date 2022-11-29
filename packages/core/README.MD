## Requirements

- node >= 16
- npm >= 7

## Installation

Run `npm install` inside root folder.

## Usage

```shell
# Build and start the server with watch
npm start

# Only build
npm run build

# Only server
npm run server
```

## Initialize Editor

```shell
# Were editor render
<div id="editor"></div>

# Update button
<button id="update">Update</button>

# SERVER URLS when start the server via `npm run server`
<script src="http://localhost:8001/index.js"></script>

<script>
  # config
  const config = {};
  const iframe = document.querySelector("#editor");
  const update = document.querySelector("#update");

  const Builder = window.Builder;
  let builderAPI;

  Builder.init(iframe, config, (api) => {
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

## Self-hosted build
For those who want to store build on itself see below

## Usage

```shell
# Build core
# npm run build:prod -- --env PUBLIC_HOST=`host where the build will be hosted`

# Example on S3
npm run build:prod -- --env PUBLIC_HOST=https://s3.amazonaws.com/${AWS_BUCKET}/build
```

After this command you can see `build` folder, copy/paste this folder on your local server or
store them on AWS S3

Upload to S3
```shell
aws s3 cp build s3://${{ secrets.AWS_BUCKET }}/build --recursive
```

The `PUBLIC_HOST` env argument is required, and it's used to indicate host from where it would be accessible

Example to use editor

```shell
<body>
  <div id="editor"></div>

  # After build
  <script src="https://s3.amazonaws.com/${AWS_BUCKET}/build/index.js">

  # Initialize Builder
  # See bellow on Initialize Editor
</body>
```
