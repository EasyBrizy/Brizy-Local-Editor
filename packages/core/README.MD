## Requirements

- node >= 16
- npm >= 7

## Installation

Run `npm intall` inside root folder.

## Usage

```shell
# Build and start the server
npm start

# Only build
npm run build

# Only server
npm run server
```

## Initialize Editor

```shell
import "@builder/core";
```

```shell

<div>
  # SERVER URLS when start the server via `npm run server`
  <iframe id="editor" src="{SERVER URLS}"></iframe>
</div>

<script src="build.js"></script>

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