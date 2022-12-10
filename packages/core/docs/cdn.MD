## Usage

Find out how to initialise the Editor from Brizy's CDN infrastructure from the video below:

[![](https://i.imgur.com/wrO4h6S.png)](https://youtu.be/iKaLF9N-QRg)

```shell
# Builder Container
<div id="editor" style="height: 85vh; width: 100vw"></div>

# Update button
<button id="update">Update</button>

# Story CDN version: <script src="https://cdn.brizylocal.com/story/2.0.0/index.js"></script>
# Popup CDN version: <script src="https://cdn.brizylocal.com/popup/2.0.0/index.js"></script>
# Pages CDN version: <script src="https://cdn.brizylocal.com/pages/2.0.0/index.js"></script>
<script src="https://cdn.brizylocal.com/pages/2.0.0/index.js"></script>

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

```ts
type config = {
    pageData: Record<string, unknown>,
    projectData: Record<string, unknown>,

    getMedia: string;
    setMedia: string;
    setLeads: string;
    pagePreview: string;
    
    ui: {
        popupSettings?: {
            displayCondition?: boolean;
            deletePopup?: boolean;
        };
        leftSidebar?: {
            topTabsOrder?: Array<"addElements" , "reorderBlock" , "globalStyle", "deviceMode", "more">;
            bottomTabsOrder?: Array<"addElements", "reorderBlock", "globalStyle", "deviceMode", "more">;

            addElements?: boolean;
            reorderBlock?: boolean;
            globalStyle?: boolean;
            deviceMode?: boolean;
            more?: {
                options?: Array<{
                    type: "link";
                    label: string;
                    link: string;
                    linkTarget?: "_blank" | "_self" | "_parent" | "_top";
                }>;
            };
        };
    };

    onSave?: (data: Output) => void;
    onLoad?: VoidFunction
}
```

Config can be passed object when you initialize builder from script.

| Name        | Type  | Description                                       |
|:------------|:-------------|:------------------------------------------|
| pageData    | object | Loads the JSON page specified in the pageData parameter. |
| projectData | object | Loads the JSON project specified in the projectData parameter. |
| getMedia    | string | This is the URL for the image resizer service. There are two image resizer service options: hosted by Brizy and self hosted. If you choose to use the image resizer service hosted by Brizy, you don't have to change the media.brizylocal.com URL. For the self hosted version you need to replace the media.brizylocal.com with the URL of your image resizer service. Setup your own image resizer service like [this](https://github.com/EasyBrizy/Brizy-Local-Image-Resizer#image-resizer)                 |
| setMedia    | string | Replace the URL with your own. This is the server where you want to store the images. |
| setLeads    | string | Replace the URL with your own. This is the link where we send the information from the contact form element when the end user submits the form. |
| ui.popupSettings.displayCondition | boolean | on off pentru global display conditions (img demo cu display condition)  |
| ui.popupSettings.deletePopup | boolean | on off pentru delete option from popup () |
| ui.leftSidebar.topTabsOrder | Array | poti sa controlezi unde apar icons din left sidebar in partea de sus |
| ui.leftSidebar.bottomTabsOrder | Array | poti sa controlezi unde apar icons din left sidebar in partea de jos  |
| ui.leftSidebar.addElements | boolean |   |
| ui.leftSidebar.reorderBlock | boolean |   |
| ui.leftSidebar.globalStyle | boolean |   |
| ui.leftSidebar.deviceMode | boolean |   |
| ui.leftSidebar.more.options | Array |   |
 

### Config Events

Config can be passed object when you initialize builder from script.

| Name     | Description                           | Returned values         |
|:---------|:--------------------------------------|:------------------------|
| onSave   | Fired when the Save button is clicked | JSON and HTML documents |
| onLoad   | Fired when the builder is loaded      | -                       |

See more details in TS [see below](https://github.com/EasyBrizy/Brizy-Local/blob/master/packages/core/src/types/types.ts)
