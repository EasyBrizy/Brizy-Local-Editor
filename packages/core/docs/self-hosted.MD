## Requirements

- node >= 16
- npm >= 7

## Installation

https://user-images.githubusercontent.com/10077249/206906566-1d2087fc-847c-4530-8760-9b169dd3ed65.mp4

We have 3 different editors:
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

Config can be passed as an object when you initialize the editor from the script.

| Name        | Type  | Description                                       |
|:------------|:-------------|:------------------------------------------|
| pageData    | object | Loads the JSON page specified in the pageData parameter. |
| projectData | object | Loads the JSON project specified in the projectData parameter. |
| getMedia    | string | This is the URL for the image resizer service. There are two image resizer service options: hosted by Brizy and self hosted. If you choose to use the image resizer service hosted by Brizy, you don't have to change the media.brizylocal.com URL. For the self hosted version you need to replace the media.brizylocal.com with the URL of your image resizer service. Here is how to [setup your own image resizer service](https://github.com/EasyBrizy/Brizy-Local-Image-Resizer#image-resizer). |
| setMedia    | string | Replace the URL with your own. This is the server where you want to store the images. |
| setLeads    | string | Replace the URL with your own. This is the link where we send the information from the contact form element when the end user submits the form. |

### UI parameters

| Name        | Type  | Description                                       |
|:------------|:-------------|:------------------------------------------|
| ui.popupSettings.displayCondition | boolean | Takes true or false values and lets you turn on or off the global [display conditions](https://user-images.githubusercontent.com/10077249/206892163-024f4fcd-d127-4c28-8a60-ea21e3982b3c.png) option together with the [display conditions popup](https://user-images.githubusercontent.com/10077249/206892176-23ed85ee-4f66-4c83-8ebb-a64117daa124.png).  |
| ui.popupSettings.deletePopup | boolean | Takes true or false values and lets you turn on or off the [delete popup option](https://user-images.githubusercontent.com/10077249/206904265-7e79f65f-0288-4473-be14-afb5dcea6fbb.png). Turn off the detele option when you want to load your json templates in the pageDate parameter. Turning off the delete option will also remove the posibility to [access the premade Brizy templates](https://user-images.githubusercontent.com/10077249/206904279-f55a472a-5508-4594-b40f-6c9d20a90bd9.png) inside the editor. |
| ui.leftSidebar.topTabsOrder | Array | Lets you control the order and turning on or off the [icons in the left sidebar at the top](https://user-images.githubusercontent.com/10077249/206904478-d11e2fb3-addb-48c1-8dce-123868e8d8ac.png). Can take the values: "**addElements**", "**reorderBlock**", "**globalStyle**", "**deviceMode**" and "**more**". Leave "**blank**" if you want to disable one of the icons.  |
| ui.leftSidebar.bottomTabsOrder | Array | Lets you control the order and turning on or off the [icons in the left sidebar at the bottom](https://user-images.githubusercontent.com/10077249/206904746-f23a8b8d-ed58-4c20-b036-d204efc94437.png). Can take the values: "**addElements**", "**reorderBlock**", "**globalStyle**", "**deviceMode**" and "**more**". Leave "**blank**" if you want to disable one of the icons.  |
| ui.leftSidebar.more.options | Array | Lets you add more links in the [More dropdown](https://user-images.githubusercontent.com/10077249/206904832-5af03a48-991a-4c90-aead-2d7dea82c9d5.png) in the left sidebar. |
 

### Events

Config can be passed as an object when you initialize builder from script.

| Name   | Description                           | Returned values         |
|:-------|:--------------------------------------|:------------------------|
| onSave | Fired when the Save button is clicked | JSON and HTML documents |
| onLoad | Fired when the builder is loaded      | -                       |

See more details in TS [see below](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/src/types/types.ts)
