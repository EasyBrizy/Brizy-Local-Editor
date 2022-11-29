
## Editor build version
We have 3 different mode in editor:
- Story mode on branch `story`
- Popup mode on branch `popup`
- Page mode on branch `pages`

## You can use a builder from the CDN version
- Story from https://cdn.brizylocal.com/pages/2.0.0/index.js
- Popup from https://cdn.brizylocal.com/story/2.0.0/index.js
- Pages from https://cdn.brizylocal.com/popup/2.0.0/index.js

> For more information on how you can use the Editor see in README `packages/core` or see a demo in `packages/demo`

Live demo
- Story http://story.demo.brizylocal.com
- Popup http://popup.demo.brizylocal.com
- Pages http://pages.demo.brizylocal.com

## Self Hosted build
For those who want to store build on itself see below

First of all, you need to clone this repository

## Requirements

- node >= 16
- npm >= 7

## Installation

Run `npm install`

## Usage

```shell
# Build core
# npm run build:core -- -- --env PUBLIC_HOST=`host where the build will be hosted`

# Example
npm run build:core -- -- --env PUBLIC_HOST=http://localhost:8080
```

After this command you can see `build` folder inside `packages/core`, copy/paste this folder on your local server or 
store them on AWS S3

The `PUBLIC_HOST` env argument is required, and it's used to indicate host from where it would be accessible

Example to use editor

```shell
<body>
  <div id="editor"></div>

  # After build
  <script src="http://localhost:8080/index.js">
  
  # Initialize Builder
  <script>
    const editor = document.querySelector("#editor");
    const Builder = window.Builder;
    let builderAPI;

    Builder.init(editor, config, (api) => {
      builderAPI = api;
    });
  </script>
</body>
```

More information about API Builder you can see [here](https://github.com/bagrinsergiu/demo-editor-partners/blob/master/packages/core/README.MD#config)