# Brizy Config

Brizy config is the configuration our builder starts with. The config can influence the starter page, global styles, menu, dynamic content etc. <br/>
This config is needed to be able to load the editor in 3 modes: `page`, `popup`, `story` <br/>

<h3>Page</h3>
To load `page`, use: `config.mode = "page"`
<img  class="brz-img--border" src="/img/brizy-local-page.png" /> <br/><br/>

<h3>Popup</h3>
To load `popup`, use: `config.mode = "popup"`
<img  class="brz-img--border" src="/img/brizy-local-popup.png" /> <br/><br/>

<h3>Story</h3>
To load `story`, use: `config.mode = "story"`
<img  class="brz-img--border" src="/img/brizy-local-story.png" /> <br/><br/>

The full config can be seen below:

```ts
type config = {
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  // html: Array of strings with Styles & Scripts
  // json: Array of more granular objects, used when needing to merge multiple pages into one
  // Use this case when you need to create a fully customizable preview HTML
  htmlOutputType: "html" | "json";

  // Page: Static Page view
  // Popup: Static Popup view with conditions(open on exit, open after x minutes)
  // Story: Static story carosuel view
  mode: "page" | "popup" | "story";

  // Menu
  menu?: Array<Menu>;

  // Integration
  integration?: {
    /// Form
    form?: {
      action?: string;
      recaptcha?: {
        siteKey: string;
      };
      fields?: {
        label?: string;
        handler: (res: Response<Array<FormFieldsOption>>, rej: Response<string>) => void;
      };
    };
  };

  // L10n
  l10n?: Record<string, string>;

  // Extensions
  extensions?: Array<Extension>;

  // DynamicContent
  dynamicContent?: {
    groups?: {
      [DCTypes.image]: Array<ConfigDCItem> | DCItemHandler;
      [DCTypes.link]: Array<ConfigDCItem> | DCItemHandler;
      [DCTypes.richText]: Array<ConfigDCItem> | DCItemHandler;
    };
  };

  pagePreview: string;

  // UI
  ui: {
    popupSettings?: {
      displayCondition?: boolean;
      deletePopup?: boolean;
      embedded?: boolean;
      horizontalAlign?: boolean;
      verticalAlign?: boolean;
      backgroundPreviewUrl?: string;
      scrollPageBehind?: boolean;
      clickOutsideToClose?: boolean;
    };

    theme?: Theme;

    leftSidebar?: {
      topTabsOrder?: Array<"cms", "addElements", "reorderBlock", "globalStyle", "deviceMode", "more">;
      bottomTabsOrder?: Array<"cms", "addElements", "reorderBlock", "globalStyle", "deviceMode", "more">;

      more?: {
        options?: Array<{
          type: "link";
          label: string;
          link: string;
          linkTarget?: "_blank" | "_self" | "_parent" | "_top";
        }>;
      };

      cms?: {
        onOpen: (onClose: VoidFunction) => void;
        onClose?: VoidFunction;
      };

      // AddElements
      moduleGroups?: Array<{
        label: string;
        moduleNames: Array<BaseElementTypes | StoryElementTypes>;
      }>;
    };
  };

  // API
  api?: {
    /// Media
    media?: {
      mediaResizeUrl?: string;
      imagePatterns?: ImagePatterns;

      addMedia?: {
        handler: (resolve: Response<AddMediaData>, reject: Response<string>, extra: AddMediaExtra) => void;
      };
    };

    // File
    customFile?: {
      fileUrl?: string;

      addFile?: {
        handler: (res: Response<AddFileData>, rej: Response<string>, extra: AddFileExtra) => void;
      };
    };

    // Default Blocks | Kits | Popups | Stories
    // More information about defaultKits, defaultPopups, defaultLayouts and defaultStories types you can find here: https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/src/types/types.ts
    defaultKits?: DefaultKits;
    defaultPopups?: DefaultPopups;
    defaultLayouts?: DefaultLayouts;

    // Used only in mode: story
    defaultStories?: DefaultStories;

    // Screenshots
    screenshots?: {
      screenshotUrl?: string;
      create?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData) => void;
      update?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData & { id: string }) => void;
    };
  };
  
  // Elements
  elements?: {
    menu?: {
      onOpen?: VoidFunction;
      createMenuLabel?: string;
    };
  };

  onSave?: (data: Output) => void;
  onAutoSave?: (data: AutoSave) => void;
  autoSaveInterval?: number;
  onLoad?: VoidFunction;
};

interface AutoSave {
  pageData?: Record<string, unknown>;
  projectData?: Record<string, unknown>;
}

interface Output {
  pageData: {
    [k: string]: unknown;
    compiled?: {
      html: string;
      scripts: Array<string>;
      styles: Array<string>;
    };
  };
  projectData: {
    [k: string]: unknown;
    compiled?: {
      styles: Array<string>;
    };
  };

  // Only in popup mode
  popupSettings?: {
    verticalAlign: "top" | "bottom" | "center";
    horizontalAlign: "left" | "right" | "center";
  };

  // Error when html will be undefined
  error?: string;
}

// Menu
interface Menu {
  id: string;
  name: string;
  items: Array<MenuItem>;
}

// MenuItem
export interface MenuItem {
  type: "MenuItem";
  value: {
    id: string;
    title: string;
    url: string;
    target?: string;
    classes?: Array<string>;

    // Dropdown
    items?: Array<MenuItem>;
  };
}

// FormFieldsOption
export interface FormFieldsOption {
  title: string;
  value: string;
}

// DynamicContent
export enum DCTypes {
  image = "image",
  link = "link",
  richText = "richText",
}

interface BaseDCItem {
  label: string;
  placeholder: string;
}

export interface ConfigDCItem extends BaseDCItem {
  optgroup?: ConfigDCItem[];
}

interface DCItemHandler {
  handler: (
    res: Response<BaseDCItem>,
    rej: Response<string>,
    extra?: { keyCode?: string; placeholder: string; label: string },
  ) => void;
}

// Media
export interface ImagePatterns {
  original: string;
  split: string;
  full: string;
}
export interface AddMediaData {
  uid: string;
  fileName?: string; // fileName need contain .ext
}

export interface AddMediaExtra {
  acceptedExtensions: Array<string>; // [.jpg, .png, .svg, .etc]
}

// File
export interface AddFileData {
  filename: string;
}

export interface AddFileExtra {
  acceptedExtensions: Array<string>; // [.jpg, .png, .svg, .zip .txs .etc]
}

// ElementTypes
/// Base Elements used in Page | Popup, these elements doesn't work in Story
export enum BaseElementTypes {
  Text = "Text",
  Image = "Image",
  Button = "Button",
  Icon = "Icon",
  Spacer = "Spacer",
  Map = "Map",
  Form2 = "Form2",
  Line = "Line",
  Menu = "Menu",
  ImageGallery = "ImageGallery",
  Video = "Video",
  Audio = "Audio",
  VideoPlaylist = "VideoPlaylist",
  IconText = "IconText",
  Lottie = "Lottie",
  Embed = "Embed",
  StarRating = "StarRating",
  Alert = "Alert",
  Counter = "Counter",
  Countdown2 = "Countdown2",
  ProgressBar = "ProgressBar",
  Calendly = "Calendly",
  Carousel = "Carousel",
  Tabs = "Tabs",
  Accordion = "Accordion",
  Switcher = "Switcher",
  Table = "Table",
  Timeline = "Timeline",
  Facebook = "Facebook",
  Twitter = "Twitter",
  FacebookComments = "FacebookComments",
  Columns = "Columns",
  Row = "Row",
}

/// Story Elements used only in Story mode, these elements doesn't work in Page, Popup
export enum StoryElementTypes {
  StoryButton = "StoryButton",
  StoryIcon = "StoryIcon",
  StoryEmbed = "StoryEmbed",
  StoryText = "StoryText",
  StoryMap = "StoryMap",
  StoryProgressBar = "StoryProgressBar",
  StoryLine = "StoryLine",
  StoryCountdown2 = "StoryCountdown2",
  StoryCounter = "StoryCounter",
  StoryShape = "StoryShape",
  StoryForm2 = "StoryForm2",
  StoryStarRating = "StoryStarRating",
  StoryLottie = "StoryLottie",
  StoryImage = "StoryImage",
  StoryVideo = "StoryVideo",
}

// Theme
export interface Theme {
  colors: {
    "--primary-dark"?: string;
    "--secondary-dark"?: string;
    "--tertiary-dark"?: string;
    "--primary-white"?: string;
    "--secondary-white"?: string;
    "--tertiary-white"?: string;
    "--primary-gray"?: string;
    "--secondary-gray"?: string;
    "--tertiary-gray"?: string;
    "--active-color"?: string;
    "--light-gray"?: string;
  };
}

// Screenshots
export interface ScreenshotData {
  base64: string;
  blockType: "normal" | "global" | "saved" | "layout";
}

// Extenstions
export interface Extension {
  host?: string;
  path: string;
}
```

## About config

To be able to start the builder you need to send valid values in the config in the following required keys:

<ul>
  <li>`container` - the HTMLElement in which the builder will be loaded</li>
  <li>`pageData` - the JSON with current page structure</li>
  <li>`projectData` - the JSON that specifies global styles</li>
  <li>`htmlOutputType` - can be `"json" | "html"` and specifies output type after page update</li>
  <li>`mode` - the builder load mode: `"page" | "popup" | "story"`</li>
  <li>`pagePreview` - link of the preview which will be set on "preview" button in UI of the builder</li>
  <li>`ui` - the object that let us to customize the left sidebar order, links or elements, also let us to customize popup settings and also the color variables of builder UI</li>
</ul>

The other keys like `menu`, `integration`, `l10n` etc. are not required and builder can work without them.

## Explanation

---

Config can be passed as an object when you initialize the editor from the script.

### First level parameters

| Name             | Type                               | Description                                                                                                                                                                                       |
| :--------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `container`      | `HTMLElement`                      | Brizy Plugin will load into HTML element.                                                                                                                                                         |
| `mode`           | `"page"` \| `"popup"` \| `"story"` | Default `"page"`                                                                                                                                                                                  |
| `htmlOutputType` | `"json"`\| `"html"`                | Default `"html"`                                                                                                                                                                                  |
| `pageData`       | `object`                           | Loads the JSON page specified in the pageData parameter.                                                                                                                                          |
| `projectData`    | `object`                           | Loads the JSON project specified in the projectData parameter.                                                                                                                                    |
| `menu`           | `array`                            | Load the array of menu                                                                                                                                                                            |
| `extension`      | `array`                            | Load the array of extension scripts and styles                                                                                                                                                    |
| `l10n`           | `object`                           | A data structure that maps keys to localized strings for localization purposes. All keys available [here](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/l10n.ts) |
| `pagePreview`    | `string`                           | Link of the preview which will be set on "preview" button in UI of the builder                                                                                                                    |

### Integration parameters

| Name                                 | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :----------------------------------- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `integration.form.action`            | `string`   | Replace the URL with your own. This is the link where we send the information from the contact form element when the end user submits the form.                                                                                                                                                                                                                                                                                                                                                      |
| `integration.form.recaptcha.siteKey` | `string`   | ReCaptcha Site Key                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `integration.form.fields.label`      | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `integration.form.fields.handler`    | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the `resolve(value)` function to pass it to the editor. In case you want to cancel the operation, call the `reject()` function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. |

### DynamicContent parameters

Builder wrapped all outside placeholder inside builder placeholder `{{ placeholder content='Base64(SOME EXTERNAL PLACEHOLDER)' }}`

#### Builder added extra attributes for `placeholder`

- Featured Image added **cW(Container Width)** **cH(Container Height)** if external service want to crop the image

Example: `{{ placeholder content='Base64( {{ featured_image }} )' cW='200' cH='200' }}`

- Extra Context if dynamicContent.groups is an Array

Example: `{{ placeholder content='Base64( {{ post_title }} )' entityType='pages' entityId='page1' }}`

Dynamic content can be configured in 2 ways

1. Send an array of placeholder in config via:

#### DynamicContent array of choices

| Name                                      | Type    | Description                                                          |
| :---------------------------------------- | :------ | :------------------------------------------------------------------- |
| `dynamicContent.groups[DCTypes.image]`    | `array` | Takes array of ConfigDCItem for all Element what persis ImageUpload  |
| `dynamicContent.groups[DCTypes.link]`     | `array` | Takes array of ConfigDCItem for all Element what persis Link         |
| `dynamicContent.groups[DCTypes.richText]` | `array` | Takes array of ConfigDCItem for all Element what persis Content html |

2. Send a handler function that sends the placeholder over the response function

#### DynamicContent option parameters

| Name                                              | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------------------------------------------------ | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dynamicContent.groups[DCTypes.image].handler`    | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ label:"My_Placeholder", placeholder:"{{ my_placeholder }}" })` ). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. |
| `dynamicContent.groups[DCTypes.link].handler`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ label:"My_Placeholder", placeholder:"{{ my_placeholder }}" })` ). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. |
| `dynamicContent.groups[DCTypes.richText].handler` | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ label:"My_Placeholder", placeholder:"{{ my_placeholder }}" })` ). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. |

### UI parameters

| Name                                    | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :-------------------------------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ui.popupSettings.displayCondition`     | `boolean`  | Takes true or false values and lets you turn on or off the global [display conditions](https://user-images.githubusercontent.com/10077249/206892163-024f4fcd-d127-4c28-8a60-ea21e3982b3c.png) option together with the [display conditions popup](https://user-images.githubusercontent.com/10077249/206892176-23ed85ee-4f66-4c83-8ebb-a64117daa124.png).                                                                                                                                                                |
| `ui.popupSettings.deletePopup`          | `boolean`  | Takes true or false values and lets you turn on or off the [delete popup option](https://user-images.githubusercontent.com/10077249/206904265-7e79f65f-0288-4473-be14-afb5dcea6fbb.png). Turn off the delete option when you want to load your json templates in the pageDate parameter. Turning off the delete option will also remove the posibility to [access the premade Brizy templates](https://user-images.githubusercontent.com/10077249/206904279-f55a472a-5508-4594-b40f-6c9d20a90bd9.png) inside the editor. |
| `ui.popupSettings.embedded`             | `boolean`  | Takes true of false values and lets you turn on or off [Vertical align, Horizontal align, Scroll Page Behind and Close Button](https://user-images.githubusercontent.com/18303258/212686108-a43883df-574f-4b30-b795-5d48e93b3d08.png).                                                                                                                                                                                                                                                                                   |
| `ui.popupSettings.verticalAlign`        | `boolean`  | Takes true or false values and lets you turn on or off the [Vertical align](https://user-images.githubusercontent.com/5760683/216273483-955e0a09-5acc-4124-bc94-0a05f2bbbb58.png).                                                                                                                                                                                                                                                                                                                                       |
| `ui.popupSettings.horizontalAlign`      | `boolean`  | Takes true or false values and lets you turn on or off the [Horizontal align](https://user-images.githubusercontent.com/5760683/216273441-a50bf80e-5894-4e5f-b764-20ee1552b0f6.png).                                                                                                                                                                                                                                                                                                                                     |
| `ui.popupSettings.scrollPageBehind`     | `boolean`  | Takes true or false values and lets you turn on or off the [Scroll Page Behind](https://user-images.githubusercontent.com/18303258/227510068-694a4dc7-d168-4416-9058-9fb3d0801669.png).                                                                                                                                                                                                                                                                                                                                  |
| `ui.popupSettings.clickOutsideToClose`  | `boolean`  | Takes true or false values and lets you turn on or off the [Click Outside To Close](https://user-images.githubusercontent.com/18303258/227510345-89b4bfb2-56ae-49a5-aab1-1c929309dadf.png).                                                                                                                                                                                                                                                                                                                              |
| `ui.popupSettings.backgroundPreviewUrl` | `string`   | Lets you control the preview background url                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `ui.leftSidebar.topTabsOrder`           | `Array`    | Lets you control the order and turning on or off the [icons in the left sidebar at the top](https://user-images.githubusercontent.com/10077249/206904478-d11e2fb3-addb-48c1-8dce-123868e8d8ac.png). Can take the values: "**addElements**", "**reorderBlock**", "**globalStyle**", "**deviceMode**" and "**more**". Leave "**blank**" if you want to disable one of the icons.                                                                                                                                           |
| `ui.leftSidebar.bottomTabsOrder`        | `Array`    | Lets you control the order and turning on or off the [icons in the left sidebar at the bottom](https://user-images.githubusercontent.com/10077249/206904746-f23a8b8d-ed58-4c20-b036-d204efc94437.png). Can take the values: "**addElements**", "**reorderBlock**", "**globalStyle**", "**deviceMode**" and "**more**". Leave "**blank**" if you want to disable one of the icons.                                                                                                                                        |
| `ui.leftSidebar.more.options`           | `Array`    | Lets you add more links in the [More dropdown](https://user-images.githubusercontent.com/10077249/206904832-5af03a48-991a-4c90-aead-2d7dea82c9d5.png) in the left sidebar.                                                                                                                                                                                                                                                                                                                                               |
| `ui.leftSidebar.moduleGroups`           | `Array`    | Lets you control the elements and turing on or off the [icons in the addElements](https://user-images.githubusercontent.com/18303258/230393691-1f0e5198-43e7-43ee-ab06-8d8d0f5f9c03.png) in the left sidebar. The default arrangement you can see [here](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/self-hosted.MD#default-modulesgroup)                                                                                                                                             |
| `ui.leftSidebar.cms.onOpen`             | `function` | Is a function for Opening External Modals with onClose Callback for CMS Icon Deactivation you can see [here](https://github.com/EasyBrizy/Brizy-Local-Editor/assets/18303258/bd0e52df-9143-4986-9152-6397324bc2ff).                                                                                                                                                                                                                                                                                                      |
| `ui.leftSidebar.cms.onClose`            | `function` | Is a function for Closing External Modals                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `ui.theme.colors`                       | `object`   | We can customize the color variables in builder's UI                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### API parameters

| Name                             | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api.media.mediaResizeUrl`       | `string`   | This is the URL for the image resizer service. There are two image resizer service options: hosted by Brizy and self hosted. If you choose to use the image resizer service hosted by Brizy, you don't have to change the media.brizylocal.com URL. For the self hosted version you need to replace the media.brizylocal.com with the URL of your image resizer service. Setup your own image resizer service like [this](https://github.com/EasyBrizy/Brizy-Local-Image-Resizer#image-resizer)                                                                                                                              |
| `api.media.imagePatterns`        | `object`   | This is an object with `full`, `original`, and `split` keys. It's used to control the final URLs for all builder resize and crop operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `api.media.addMedia.handler`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor. In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                             |
| `api.customFile.fileUrl`         | `string`   | This is the URL for your resources the final URL will be `api.customFile.fileUrl/${fileName}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `api.customFile.addFile.handler` | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor. In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                             |
| `api.defaultKits.label`          | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `api.defaultKits.getKits`        | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ Array of kits ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                         |
| `api.defaultKits.getMeta`        | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ Array of kits with blocks ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                             |
| `api.defaultKits.getData`        | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve(block.json)`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                |
| `api.defaultPopups.label`        | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `api.defaultPopups.getMeta`      | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ blocks: [ Array of blocks with screenshots and id] })`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                    |
| `api.defaultPopups.getData`      | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve(popup.json)`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                |
| `api.defaultLayouts.label`       | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `api.defaultLayouts.getMeta`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ templates: [ Array of layouts with pages and every page must have screenshots and id] })`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. |
| `api.defaultLayouts.getData`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ page.json ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                             |
| `api.defaultStories.label`       | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `api.defaultStories.getMeta`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ stories: [ Array of stories, every story must have screenshots and id] })`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                |
| `api.defaultStories.getData`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ story.json ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                            |
| `api.screenshots.screenshotUrl`  | `string`   | This is the base URL used to retrieve the screenshots. The final URL will be `${urls.screenshot}${id}?t=${timestamp}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `api.screenshots.create`         | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ id: screenshot id })`). In case you want to cancel the operation, call the reject() function.                                                                                                                                                                                                                                                                         |
| `api.screenshots.update`         | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ id: screenshot id })`). In case you want to cancel the operation, call the reject() function.                                                                                                                                                                                                                                                                         |
| `api.onSave`                     | `JSON`     | Fired when the Save button is clicked                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `api.onAutoSave`                 | `JSON`     | Fired after Auto Save happened in editor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `api.onLoad`                     | `JSON`     | Fired when the builder is loaded                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `api.autoSaveInterval`           | `number`   | Default `2000`. Set a `ms` delay for `onAutoSave` function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Elements parameters

| Name                            | Type       | Description                                                                                                                                                                                                                                                                      |
|:--------------------------------|:-----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `elements.menu.createMenuLabel` | `string`   | Allows you to customize the placeholder text shown in the editor when no menu has been created. If left unspecified, the editor will default to displaying `'Create a menu'`.                                                                                                    |
| `elements.menu.onOpen`          | `function` | This function is triggered when the placeholder labeled `createMenuLabel` is clicked for a menu that hasn't been created yet. It should contain the main logic for creating the menu, which will then be passed into the editor configuration to display the newly created menu. |

## Examples

---

### Example Media Handler

```ts
const config = {
  api: {
    media: {
      handler(resolve, reject, extra) {
        // extra: { acceptedExtensions: Array<string> }
        resolve({
          uid: "1234",
          fileName: "picture.png",
        });
      },
    },
  },
};
```

### Example Media Handler with Brizy Image Resizer & AWS S3

The builder uses two keys: `uid` and `fileName`, or only `uid` (with file extensions).
The main idea is to resolve problems with the duplication of images.
If the duplication was resolved by some media upload gallery, then send only `fileName` to `uid`.
For example: `resolve({uid: "picture.png"})`.

### Image Patterns

Used to specify where the crop params from the builder need to be included in the URL.
The `imagePatterns` object contains 3 keys: `full`, `original`, `split`.
The value of every key must be send the placeholders
The placeholder has syntax: `{{ oY=[oY] }}`

Support placeholders:

- `[baseUrl]`: the base URL sent via `api.media.mediaResizeUrl`
- `[iW]`: the original image width (`number` or `any`)
- `[iH]`: the original image height (`number` or `any`)
- `[oX]`: the pointer X (`number`)
- `[oY]`: the pointer Y (`number`)
- `[cW]`: the container width, used to crop image (`number`)
- `[cH]`: the container height, used to crop image (`number`)
- `[uid]`: the UID of the image
- `[fileName]`: optional placeholder; it would be used if `resolve({uid: "1234", fileName: "picture.png"})`

Example:

```ts
const config = {
  api: {
    media: {
      mediaResizeUrl: "http://localhost:7788/media", // HOST
      imagePatterns: {
        full: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}&{{ oX=[oX] }}&{{ oY=[oY] }}&{{ cW=[cW] }}&{{ cH=[cH] }}/{{ [uid] }}/{{ [fileName] }}",
        original: "{{ [baseUrl] }}/{{ [sizeType] }}/{{ [uid] }}/{{ [fileName] }}",
        split: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}/{{ [uid] }}/{{ [fileName] }}",
      },
    },
  },
};
```

Full:

```html
<img src="http://localhost:7788/media/iW=1808&iH=1017&oX=448&oY=53&cW=515&cH=605/1234/picture.jpg" />
```

Original:

```html
<img src="http://localhost:7788/media/original/1234/picture.jpg" />
```

Split:

```html
<img src="http://localhost:7788/media/iW=5000&iH=any/1234/picture.jpg" />
```

[ImageKit](https://imagekit.io) example:

```ts
const config = {
  api: {
    media: {
      mediaResizeUrl: "https://ik.imagekit.io/demo", // ImageKit HOST
      imagePatterns: {
        full: "{{ [baseUrl] }}/tr:{{ w-[cW] }},{{ h-[cH] }},c-maintain-ratio/{{ [fileName] }}",
        split: "{{ [baseUrl] }}/tr:{{ w-[iW] }},c-at_max/{{ [fileName] }}",
        original: "{{ [baseUrl] }}/tr:orig-true/{{ [fileName] }}",
      },
    },
  },
};
```

**Full**: Used inside the Image element where cropping or resizing of the image is needed.
**Original**: Used when the builder tries to access the original URL of the image, for example, as a background for Section, Column, or Row.
**Split**: Used when the builder tries to access the resized URL for the image, for example, as a background.

> This case(split) is usually used when the client uploads very large images (e.g., 10MB), and we need to resize them to a smaller size (e.g., 1MB). In this case iH=any

```ts
// In HTML
// <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.24.min.js"></script>

const bucketName = "AWS_BUCKET_NAME";
const bucketRegion = "AWS_REGION";
const identityPoolId = "AWS_IDENTITY_POOL_ID";
const AWS = window.AWS;

// More details about AWS you can see here https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html
AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: identityPoolId,
  }),
});
const s3 = new AWS.S3({
  params: {
    Bucket: bucketName,
  },
});

const config = {
  api: {
    media: {
      // You need to start a Brizy Image Resize
      /// for more information on how you can do that see here https://github.com/EasyBrizy/Brizy-Local-Image-Resizer#readme
      /// ORIGIN_MEDIA_URL=https://${AWS_BUKET_NAME}/media
      mediaResizeUrl: "http://localhost:7788/media", // HOST [Brizy Image Resizer]
      handler(resolve, reject, extra) {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";

        input.addEventListener("change", function (e) {
          const { files } = e.target;

          if (files && files.length) {
            const file = files[0];
            const fileName = file.name;
            const uid = crypto.randomUUID();
            const filePath = `media/${uid}/${fileName}`;
            const s3Config = {
              Key: filePath,
              Body: file,
            };

            // Upload to S3
            s3.upload(s3Config, (err) => {
              if (err) {
                reject(`Wrong Upload to S3 ${err.message}`);
              } else {
                resolve({ uid, fileName });
              }
            });
          }
        });

        // Open Upload Window
        input.click();
      },
    },
  },
};
```

### Default ModulesGroup

```ts
// Popup
const defaultConfigModulesGroupForPopup = {
  ui: {
    leftSidebar: {
      moduleGroups: [
        {
          label: "grid",
          moduleNames: ["Columns", "Row"],
        },
        {
          label: "essentials",
          moduleNames: ["Text", "Image", "Button", "Icon", "Spacer", "Map", "Form2", "Line"],
        },
        {
          label: "media",
          moduleNames: ["ImageGallery", "Video", "Audio", "VideoPlaylist"],
        },
        {
          label: "content",
          moduleNames: [
            "IconText",
            "Embed",
            "StarRating",
            "Alert",
            "Counter",
            "Countdown2",
            "ProgressBar",
            "Calendly",
            "Carousel",
            "Tabs",
            "Accordion",
            "Switcher",
            "Table",
            "Timeline",
          ],
        },
        {
          label: "social",
          moduleNames: ["Facebook", "Twitter", "FacebookComments"],
        },
      ],
    },
  },
};

// Story
const defaultConfigModulesGroupForStory = {
  ui: {
    leftSidebar: {
      moduleGroups: [
        {
          label: "essentials",
          moduleNames: [
            "StoryButton",
            "StoryIcon",
            "StoryEmbed",
            "StoryText",
            "StoryMap",
            "StoryProgressBar",
            "StoryLine",
            "StoryCountdown2",
            "StoryCounter",
            "StoryShape",
            "StoryForm2",
            "StoryStarRating",
            "StoryLottie",
          ],
        },
        {
          label: "media",
          moduleNames: ["StoryImage", "StoryVideo"],
        },
      ],
    },
  },
};

// Page
const defaultConfigModulesGroupForPages = {
  ui: {
    leftSidebar: {
      moduleGroups: [
        {
          label: "grid",
          moduleNames: ["Columns", "Row"],
        },
        {
          label: "essentials",
          moduleNames: ["Text", "Image", "Button", "Icon", "Spacer", "Map", "Form2", "Line", "Menu"],
        },
        {
          label: "media",
          moduleNames: ["ImageGallery", "Video", "Audio", "VideoPlaylist"],
        },
        {
          label: "content",
          moduleNames: [
            "IconText",
            "Embed",
            "StarRating",
            "Alert",
            "Counter",
            "Countdown2",
            "ProgressBar",
            "Calendly",
            "Carousel",
            "Tabs",
            "Accordion",
            "Switcher",
            "Table",
            "Timeline",
          ],
        },
        {
          label: "social",
          moduleNames: ["Facebook", "Twitter", "FacebookComments"],
        },
      ],
    },
  },
};
```

### Example API Default Kits

```ts
export type KitItem = {
  id: string;
  title: string;
};

const config = {
  api: {
    defaultKits: {
      async getKits(res, rej) {
        try {
          const kits = await fetch("https://example.com/kits").then((r) => r.json());

          res([
            {
              id: "kit001",
              title: "Kit #1",
            },
            {
              id: "kit002",
              title: "Kit #2",
            },
          ]);
        } catch (e) {
          rej("Failed to load Kits");
        }
      },
      async getMeta(res, rej, kit) {
        try {
          const meta = await fetch(`https://example.com/kits/${id}`).then((r) => r.json());
          res({
            blocks: [
              {
                id: "Kit2Starter",
                cat: [0],
                title: "Kit2Starter0Dark",
                type: 1,
                keywords: "start",
                thumbnailHeight: 311,
                thumbnailWidth: 600,
                thumbnailSrc: "https://example.com/kits/images/thumb_1.jpg",
                pro: false,
                kitId: "kit001",
                blank: "blank",
              },
              {
                id: "block2kit9081",
                cat: [2, 16],
                title: "block2kit9081",
                type: 1,
                keywords: "forms,hero,image",
                thumbnailHeight: 327,
                thumbnailWidth: 600,
                thumbnailSrc: "https://example.com/kits/images/thumb_2.jpg",
                pro: false,
                kitId: "kit001",
              },
            ],
            categories: [
              {
                id: 0,
                slug: "blank",
                title: "Blank",
                hidden: true,
              },
              {
                id: 16,
                slug: "hero",
                title: "Hero",
              },
            ],
            id: "kit001",
            name: "Kit #2",
            styles: [
              {
                id: "style042",
                title: "Overpass",
                colorPalette: [
                  {
                    id: "color1",
                    hex: "#A170D9",
                  },
                  {
                    id: "color2",
                    hex: "#1C1C1C",
                  },
                ],
                fontStyles: [
                  {
                    id: "paragraph",
                    title: "Paragraph",
                    fontFamily: "overpass",
                    fontFamilyType: "google",
                    fontSize: 16,
                    fontSizeSuffix: "px",
                    fontWeight: 400,
                    lineHeight: 1.9,
                  },
                ],
              },
            ],
            types: [
              {
                id: 1,
                name: "dark",
                title: "Dark",
                icon: "nc-dark",
              },
            ],
          });
        } catch (e) {
          rej("Failed to get json");
        }
      },
      async getData(res, rej, kit) {
        try {
          const data = await fetch(`https://example.com/blocks/${kit.id}.json`).then((r) => r.json());
          res(data);
        } catch (e) {
          rej("Failed to load resolves for selected DefaultKits");
        }
      },
    },
  },
};
```

### Example API Default Popups

```ts
const config = {
  api: {
    defaultPopups: {
      async getMeta(res, rej) {
        try {
          const popups = await fetch("https://example.com/popups").then((r) => r.json());

          res({
            blocks: [
              {
                id: "popup2000",
                thumbnailWidth: 600,
                thumbnailHeight: 417,
                title: "popup2000",
                keywords: "",
                cat: [1493],
                type: 0,
                pro: true,
                thumbnailSrc: "https://example.com/popups/images/thumb_1.jpg",
              },
              {
                id: "popup1773",
                thumbnailWidth: 600,
                thumbnailHeight: 364,
                title: "popup1773",
                keywords: "",
                cat: [1579],
                type: 0,
                pro: true,
                thumbnailSrc: "https://example.com/popups/images/thumb_2.jpg",
              },
            ],
            categories: [
              {
                id: 1579,
                slug: "features",
                title: "Features",
              },
              {
                id: 1493,
                slug: "sale",
                title: "Sale",
              },
            ],
          });
        } catch (e) {
          rej("Failed to get json");
        }
      },
      async getData(res, rej, kit) {
        try {
          const data = await fetch(`https://example.com/popups/${kit.id}.json`).then((r) => r.json());
          res(data);
        } catch (e) {
          rej("Failed to load resolves for selected DefaultPopups");
        }
      },
    },
  },
};
```

### Example API Default Layouts

```ts
const config = {
  api: {
    defaultLayouts: {
      async getMeta(res, rej) {
        try {
          const meta = await fetch("https://example.com/layouts").then((r) => r.json());

          const page = {
            id: "page1",
            thumbnailWidth: 680,
            thumbnailHeight: 1282,
            thumbnailSrc: "https://example/com/page1/picture.png",
            title: "Homepage",
            keywords: "home, details, menu, reservation, food, lunch",
            cat: [100],
          };
          const layout = {
            name: "Template Name",
            color: "#FF7102",
            cat: [100],
            pages: [page],
            styles: [], // Global Style JSON
          };
          const data = {
            templates: [layout],
            categories: [
              {
                id: 100,
                title: "Business",
              },
              {
                id: 200,
                title: "Travel",
              },
            ],
          };

          res(data);
        } catch (e) {
          rej("Failed to get json");
        }
      },
      async getData(res, rej, id) {
        try {
          const data = await fetch(`https://example.com/layouts/${id}.json`).then((r) => r.json());
          res(data);
        } catch (e) {
          rej("Failed to load resolves for selected DefaultLayouts");
        }
      },
    },
  },
};
```

### Example API Default Stories

```ts
const config = {
  api: {
    defaultStories: {
      async getMeta(res, rej) {
        try {
          const meta = await fetch("https://example.com/stories").then((r) => r.json());
          const page = {
            id: "story1",
            thumbnailWidth: 680,
            thumbnailHeight: 1282,
            thumbnailSrc: "https://example/com/story1/picture.png",
            title: "Homepage",
            keywords: "home, details, menu, reservation, food, lunch",
            cat: [100],
          };
          const story = {
            name: "Story Name",
            color: "#FF7102",
            cat: [100],
            pages: [page],
            styles: [], // Global Style JSON
          };
          const data = {
            stories: [story],
            categories: [
              {
                id: 100,
                title: "Business",
              },
              {
                id: 200,
                title: "Travel",
              },
            ],
          };

          res(data);
        } catch (e) {
          rej("Failed to get json");
        }
      },
      async getData(res, rej, id) {
        try {
          const data = await fetch(`https://example.com/story/${id}.json`).then((r) => r.json());
          res(data);
        } catch (e) {
          rej("Failed to load resolves for selected DefaultStories");
        }
      },
    },
  },
};
```

### Example API Screenshots

```ts
export interface ScreenshotData {
  base64: string;
  blockType: "normal" | "global" | "saved" | "layout";
}

const config = {
  api: {
    screenshots: {
      screenshotUrl: "https://example.com/screenshots",
      async create(res, rej, data: ScreenshotData) {
        try {
          const screenshot = await fetch("https://example.com/api/screenshot", {
            method: "POST",
            body: JSON.stringify({ image: data.base64 }),
          }).then((r) => r.json());

          res({ id: screenshot.id });
        } catch (e) {
          rej("Failed create the screenshot");
        }
      },
      async update(res, rej, data: ScreenshotData & { id: string }) {
        try {
          const data = await fetch(`https://example.com/api/screenshot/${data.id}`, {
            method: "PUT",
            body: JSON.stringify({ image: data.base64 }),
          }).then((r) => r.json());

          res(data);
        } catch (e) {
          rej("Failed to update screenshot");
        }
      },
    },
  },
};
```

##### How to Use Screenshots:

1. In your configuration, add `urls.screenshot` with the base URL for storing screenshots.
2. Add `api.screenshots.create` and `api.screenshots.update` in the configuration to specify the handlers for managing screenshots.
3. Each handler will receive an extra parameter, `base64`, which contains the screenshot in `base64` format. In these handlers:
  - Save the screenshot on your server at the specified `urls.screenshot` location.
  - Return the `id` of the saved screenshot.
  - The `update` handler will also receive an additional `id` parameter, which identifies the screenshot to be updated.
4. The editor will generate the screenshot URL by concatenating `urls.screenshot` with the screenshot’s `id` and appending a query parameter with the current timestamp to bypass caching.
5. The resulting URL format will be: `${urls.screenshot}${id}?t=${timestamp}`.
