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

## Config Page

```ts
type config = {
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  // Page: Static Page view
  mode: "page"

  // Menu
  menu?: Array<Menu>;

  // Integrations
  integrations?: {
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

  // isRTL
  isRTL?: boolean;

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
    theme?: Theme;

    leftSidebar?: {
      topTabsOrder?: Array<LeftSidebarOption>;
      bottomTabsOrder?: Array<LeftSidebarOption>;

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
    };

    publish?: {
      handler: (res: Response<void>, rej: Response<string>, extra: Output) => void;
    };
    
    features?: {
      link?: {
        internalLink?: boolean;
        linkExternal?: boolean;
        linkUpload?: boolean;
        linkAnchor?: boolean;
        linkPopup?: boolean;
      };
    }
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

    // Default Blocks | Kits | Popups
    defaultKits?: DefaultKits; // More information about the type types/types.ts
    defaultPopups?: DefaultPopups; // More information about the type types/types.ts
    defaultLayouts?: DefaultLayouts; // More information about the type types/types.ts

    // Screebnshots
    screenshots?: {
      screenshotUrl?: string;
      create?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData) => void;
      update?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData & { id: string }) => void;
    };
  };

  onSave?: (data: Output) => void;
  onAutoSave?: (data: AutoSave) => void;
  autoSaveInterval?: number;
  onLoad?: VoidFunction;
  elements?: {
    menu?: {
      onOpen?: VoidFunction;
      createMenuLabel?: string;
    };
    form?: {
      inputTypes?: Array<FormInputTypes>;
    };
    video?: {
      types?: Array<VideoTypes>;
    };
    posts?: {
      includeQueryMultiOptions?: boolean;
      exclude?: boolean;
      offset?: boolean;
      orderBy?: boolean;
      order?: boolean;
      handler: (
        res: Response<PostsSources>,
        ref: Response<string>
      ) => void;
    };
  };
};
````

## Config Popup

```ts
type config = {
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  // Popup: Static Popup view with conditions(open on exit, open after x minutes)
  mode: "popup";

  // Menu
  menu?: Array<Menu>;

  // Integrations
  integrations?: {
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

  // isRTL
  isRTL?: boolean;

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
      topTabsOrder?: Array<LeftSidebarOption>;
      bottomTabsOrder?: Array<LeftSidebarOption>;

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
    };

    publish?: {
      handler: (res: Response<void>, rej: Response<string>, extra: Output) => void;
    };

    features?: {
      link?: {
        internalLink?: boolean;
        linkExternal?: boolean;
        linkUpload?: boolean;
        linkAnchor?: boolean;
        linkPopup?: boolean;
      };
    }
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

    // Default Popups
    defaultPopups?: DefaultPopups; // More information about the type types/types.ts

    // Screebnshots
    screenshots?: {
      screenshotUrl?: string;
      create?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData) => void;
      update?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData & { id: string }) => void;
    };
  };

  onSave?: (data: Output) => void;
  onAutoSave?: (data: AutoSave) => void;
  autoSaveInterval?: number;
  onLoad?: VoidFunction;
  elements?: {
    menu?: {
      onOpen?: VoidFunction;
      createMenuLabel?: string;
    };
    form?: {
      inputTypes?: Array<FormInputTypes>;
    };
    video?: {
      types?: Array<VideoTypes>;
    };
    posts?: {
      includeQueryMultiOptions?: boolean;
      exclude?: boolean;
      offset?: boolean;
      orderBy?: boolean;
      order?: boolean;
      handler: (
        res: Response<PostsSources>,
        ref: Response<string>
      ) => void;
    };
  };
};
```

## Config Stories

```ts
type config = {
  container: HTMLElement;
  pageData: Record<string, unknown>;
  projectData: Record<string, unknown>;

  // Story: Static story carosuel view
  mode: "story";

  // Integrations
  integrations?: {
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

  // isRTL
  isRTL?: boolean;

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
    theme?: Theme;

    leftSidebar?: {
      topTabsOrder?: Array<LeftSidebarOption>;
      bottomTabsOrder?: Array<LeftSidebarOption>;

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
    };

    publish?: {
      handler: (res: Response<void>, rej: Response<string>, extra: Output) => void;
    };

    features?: {
      link?: {
        internalLink?: boolean;
        linkExternal?: boolean;
        linkUpload?: boolean;
        linkAnchor?: boolean;
        linkPopup?: boolean;
      };
    }
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

    defaultStories?: DefaultStories; // More information about the type types/types.ts

    // Screebnshots
    screenshots?: {
      screenshotUrl?: string;
      create?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData) => void;
      update?: (res: Response<{ id: string }>, rej: Response<string>, extra: ScreenshotData & { id: string }) => void;
    };
  };

  onSave?: (data: Output) => void;
  onAutoSave?: (data: AutoSave) => void;
  autoSaveInterval?: number;
  onLoad?: VoidFunction;
  elements?: {
    menu?: {
      onOpen?: VoidFunction;
      createMenuLabel?: string;
    };
    form?: {
      inputTypes?: Array<FormInputTypes>;
    };
    video?: {
      types?: Array<VideoTypes>;
    };
    posts?: {
      includeQueryMultiOptions?: boolean;
      exclude?: boolean;
      offset?: boolean;
      orderBy?: boolean;
      order?: boolean;
      handler: (
        res: Response<PostsSources>,
        ref: Response<string>
      ) => void;
    };
  };
};
```

## About config

To be able to start the builder you need to send valid values in the config in the following required keys:

<ul>
  <li>`container` - the HTMLElement in which the builder will be loaded</li>
  <li>`pageData` - the JSON with current page structure</li>
  <li>`projectData` - the JSON that specifies global styles</li>
  <li>`mode` - the builder load mode: `"page" | "popup" | "story"`</li>
  <li>`pagePreview` - link of the preview which will be set on "preview" button in UI of the builder</li>
  <li>`ui` - the object that let us to customize the left sidebar order, links or elements, also let us to customize popup settings and also the color variables of builder UI</li>
</ul>

The other keys like `menu`, `integration`, `l10n` etc. are not required and builder can work without them.

## Explanation

---

Config can be passed as an object when you initialize the editor from the script.

### First level parameters

| Name          | Type                               | Description                                                                                                                                                                                                                                                                                                           |
| :------------ | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container`   | `HTMLElement`                      | Brizy Plugin will load into HTML element.                                                                                                                                                                                                                                                                             |
| `mode`        | `"page"` \| `"popup"` \| `"story"` | Default `"page"`                                                                                                                                                                                                                                                                                                      |
| `pageData`    | `object`                           | Loads the JSON page specified in the pageData parameter.                                                                                                                                                                                                                                                              |
| `projectData` | `object`                           | Loads the JSON project specified in the projectData parameter.                                                                                                                                                                                                                                                        |
| `menu`        | `array`                            | Load the array of menu                                                                                                                                                                                                                                                                                                |
| `extension`   | `array`                            | Load the array of extension scripts and styles                                                                                                                                                                                                                                                                        |
| `l10n`        | `object`                           | A data structure maps keys to localized strings for localization, with available keys listed [here](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/docs/l10n.ts) and existing translations [here](https://github.com/EasyBrizy/Brizy-Local-Editor/tree/master/packages/core-translations). |
| `isRTL`       | `boolean`                          | Enables right-to-left (RTL) layout when set to true. Default false.                                                                                                                                                                                                                                                   |
| `pagePreview` | `string`                           | Link of the preview which will be set on "preview" button in UI of the builder                                                                                                                                                                                                                                        |

### Integrations parameters

| Name                                  | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------------------------------| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `integrations.form.action`            | `string`   | Replace the URL with your own. This is the link where we send the information from the contact form element when the end user submits the form.                                                                                                                                                                                                                                                                                                                                                      |
| `integrations.form.recaptcha.siteKey` | `string`   | ReCaptcha Site Key                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `integrations.form.fields.label`      | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `integrations.form.fields.handler`    | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the `resolve(value)` function to pass it to the editor. In case you want to cancel the operation, call the `reject()` function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. |

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

| Name                                    | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------------------------|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ui.popupSettings.displayCondition`     | `boolean`  | Takes true or false values and lets you turn on or off the global [display conditions](https://user-images.githubusercontent.com/10077249/206892163-024f4fcd-d127-4c28-8a60-ea21e3982b3c.png) option together with the [display conditions popup](https://user-images.githubusercontent.com/10077249/206892176-23ed85ee-4f66-4c83-8ebb-a64117daa124.png).                                                                                                                                                                                                                                                                                                                                                                                           |
| `ui.popupSettings.deletePopup`          | `boolean`  | Takes true or false values and lets you turn on or off the [delete popup option](https://user-images.githubusercontent.com/10077249/206904265-7e79f65f-0288-4473-be14-afb5dcea6fbb.png). Turn off the delete option when you want to load your json templates in the pageDate parameter. Turning off the delete option will also remove the posibility to [access the premade Brizy templates](https://user-images.githubusercontent.com/10077249/206904279-f55a472a-5508-4594-b40f-6c9d20a90bd9.png) inside the editor.                                                                                                                                                                                                                            |
| `ui.popupSettings.embedded`             | `boolean`  | Takes true of false values and lets you turn on or off [Vertical align, Horizontal align, Scroll Page Behind and Close Button](https://user-images.githubusercontent.com/18303258/212686108-a43883df-574f-4b30-b795-5d48e93b3d08.png).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `ui.popupSettings.verticalAlign`        | `boolean`  | Takes true or false values and lets you turn on or off the [Vertical align](https://user-images.githubusercontent.com/5760683/216273483-955e0a09-5acc-4124-bc94-0a05f2bbbb58.png).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `ui.popupSettings.horizontalAlign`      | `boolean`  | Takes true or false values and lets you turn on or off the [Horizontal align](https://user-images.githubusercontent.com/5760683/216273441-a50bf80e-5894-4e5f-b764-20ee1552b0f6.png).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `ui.popupSettings.scrollPageBehind`     | `boolean`  | Takes true or false values and lets you turn on or off the [Scroll Page Behind](https://user-images.githubusercontent.com/18303258/227510068-694a4dc7-d168-4416-9058-9fb3d0801669.png).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `ui.popupSettings.clickOutsideToClose`  | `boolean`  | Takes true or false values and lets you turn on or off the [Click Outside To Close](https://user-images.githubusercontent.com/18303258/227510345-89b4bfb2-56ae-49a5-aab1-1c929309dadf.png).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `ui.popupSettings.backgroundPreviewUrl` | `string`   | Lets you control the preview background url                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `ui.leftSidebar.topTabsOrder`           | Array      | Lets you control the order and visibility of the [icons in the left sidebar at the top](https://user-images.githubusercontent.com/10077249/206904478-d11e2fb3-addb-48c1-8dce-123868e8d8ac.png). This property accepts an array of objects in the format: `[{ id: string, type: LeftSidebarOption }]` If the type is `"addElements"`, an additional key, `elements`, must be provided. The `elements` key accepts an array that specifies the elements to display within the current tab [icons in the addElements](https://user-images.githubusercontent.com/18303258/230393691-1f0e5198-43e7-43ee-ab06-8d8d0f5f9c03.png).                                                                                                                          |
| `ui.leftSidebar.bottomTabsOrder`        | Array      | Lets you control the order and visibility of the [icons in the left sidebar at the top](https://user-images.githubusercontent.com/10077249/206904478-d11e2fb3-addb-48c1-8dce-123868e8d8ac.png). This property accepts an array of objects in the format: `[{ id: string, type: LeftSidebarOption }]` If the type is `"addElements"`, an additional key, `elements`, must be provided. The `elements key accepts an array that specifies the elements to display within the current tab [icons in the addElements](https://user-images.githubusercontent.com/18303258/230393691-1f0e5198-43e7-43ee-ab06-8d8d0f5f9c03.png).                                                                                                                           |
| `ui.leftSidebar.more.options`           | `Array`    | Lets you add more links in the [More dropdown](https://user-images.githubusercontent.com/10077249/206904832-5af03a48-991a-4c90-aead-2d7dea82c9d5.png) in the left sidebar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `ui.leftSidebar.cms.onOpen`             | `function` | Is a function for Opening External Modals with onClose Callback for CMS Icon Deactivation you can see [here](https://github.com/EasyBrizy/Brizy-Local-Editor/assets/18303258/bd0e52df-9143-4986-9152-6397324bc2ff).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `ui.leftSidebar.cms.onClose`            | `function` | Is a function for Closing External Modals                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `ui.theme.colors`                       | `object`   | We can customize the color variables in builder's UI                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `ui.features.link`                      | `object`   | Allows you to control which link options are enabled in the toolbar. It accepts the following keys: `internalLink`, `linkExternal`, `linkUpload`, `linkAnchor`, and `linkPopup`. Any key set to `true` will be enabled in the toolbar for elements. If this object is null, all link options will be enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `ui.features.link.linkUpload`           | `boolean`  | Allows you to enable or disable the [LinkUpload option](https://github.com/user-attachments/assets/5c1b0a88-9638-42f4-8ae6-1d6481a03fb8) in the toolbar for all link elements. By default, this option is turned off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `ui.features.link.internalLink`         | `boolean`  | Allows you to enable or disable the [InternalLink option](https://github.com/user-attachments/assets/af3fcfda-701c-4cae-ba3c-3734da625cd4) in the toolbar for all link elements. By default, this option is turned off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `ui.features.link.linkExtenal`          | `boolean`  | Allows you to enable or disable the [LinkExternal option](https://github.com/user-attachments/assets/394e9f13-8fe3-434a-8323-1c4d3a29f6e1) in the toolbar for all link elements. By default, this option is turned off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `ui.features.link.linkAnchor`           | `boolean`  | Allows you to enable or disable the [LinkAnchor option](https://github.com/user-attachments/assets/5f7c9188-0605-4427-8740-50b56ca849a3) in the toolbar for all link elements. By default, this option is turned off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `ui.features.link.linkPopup`            | `boolean`  | Allows you to enable or disable the [LinkPopup option](https://github.com/user-attachments/assets/dabe41bb-358f-4304-a0c6-522db1ded999) in the toolbar for all link elements. By default, this option is turned off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `ui.publish.handler`                    | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: resolve() ). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. The `extra` argument includes the properties `projectData` and `pageData`, with values that can either be the respective data or `undefined`. If a property is not being modified, its value will be `undefined` |

### API parameters

| Name                             | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `api.media.mediaResizeUrl`       | `string`   | This is the URL for the image resizer service. There are two image resizer service options: hosted by Brizy and self hosted. If you choose to use the image resizer service hosted by Brizy, you don't have to change the media.brizylocal.com URL. For the self hosted version you need to replace the media.brizylocal.com with the URL of your image resizer service. Setup your own image resizer service like [this](https://github.com/EasyBrizy/Brizy-Local-Image-Resizer#image-resizer)                                                                                                                                                                                                             |
| `api.media.imagePatterns`        | `object`   | This is an object with `full`, `original`, and `split` keys. It's used to control the final URLs for all builder resize and crop operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `api.media.addMedia.handler`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor. In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. In the `resolve` function, you can pass both the `uid` and `fileName` parameters. If the `uid` is not provided, it will default to the value of `fileName`, as the editor requires a `uid` to be provided. |
| `api.customFile.fileUrl`         | `string`   | This is the URL for your resources the final URL will be `api.customFile.fileUrl/${fileName}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `api.customFile.addFile.handler` | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor. In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                                                                                                            |
| `api.defaultKits.label`          | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `api.defaultKits.getKits`        | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ Array of kits ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                                                        |
| `api.defaultKits.getMeta`        | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ Array of kits with blocks ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                                            |
| `api.defaultKits.getData`        | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve(block.json)`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                                                               |
| `api.defaultPopups.label`        | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `api.defaultPopups.getMeta`      | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ blocks: [ Array of blocks with screenshots and id] })`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                   |
| `api.defaultPopups.getData`      | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve(popup.json)`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                                                               |
| `api.defaultLayouts.label`       | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `api.defaultLayouts.getMeta`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ templates: [ Array of layouts with pages and every page must have screenshots and id] })`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                |
| `api.defaultLayouts.getData`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ page.json ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                                                            |
| `api.defaultStories.label`       | `string`   | Defines the text displayed in the editor UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `api.defaultStories.getMeta`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ stories: [ Array of stories, every story must have screenshots and id] })`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                               |
| `api.defaultStories.getData`     | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve([ story.json ])`). In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor.                                                                                                                                                           |
| `api.screenshots.screenshotUrl`  | `string`   | This is the base URL used to retrieve the screenshots. The final URL will be `${api.screenshots.screenshotUrl}${id}?t=${timestamp}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `api.screenshots.create`         | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ id: screenshot id })`). In case you want to cancel the operation, call the reject() function.                                                                                                                                                                                                                                                                                                                                                        |
| `api.screenshots.update`         | `function` | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor ( example of resolve: `resolve({ id: screenshot id })`). In case you want to cancel the operation, call the reject() function.                                                                                                                                                                                                                                                                                                                                                        |
| `api.onSave`                     | `JSON`     | Fired when the Save button is clicked. The parameter of this function includes the properties `projectData` and `pageData`, with values that can either be the respective data or `undefined`. If a property is not being modified, its value will be `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `api.onAutoSave`                 | `JSON`     | Fired after Auto Save happened in editor. The parameter of this function includes the properties `projectData` and `pageData`, with values that can either be the respective data or `undefined`. If a property is not being modified, its value will be `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `api.onLoad`                     | `JSON`     | Fired when the builder is loaded                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `api.autoSaveInterval`           | `number`   | Default `2000`. Set a `ms` delay for `onAutoSave` function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Elements parameters

| Name                            | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:--------------------------------|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `elements.menu.createMenuLabel` | `string`                | Allows you to customize the placeholder text shown in the editor when no menu has been created. If left unspecified, the editor will default to displaying `'Create a menu'`.                                                                                                                                                                                                                                                                                                                    |
| `elements.menu.onOpen`          | `function`              | This function is triggered when the placeholder labeled `createMenuLabel` is clicked for a menu that hasn't been created yet. It should contain the main logic for creating the menu, which will then be passed into the editor configuration to display the newly created menu.                                                                                                                                                                                                                 |
| `elements.form.inputTypes`      | `Array<FormInputTypes>` | Defines the input types available in the `Form` toolbar. If no value is specified, all input types will be displayed by default.                                                                                                                                                                                                                                                                                                                                                                 |
| `elements.video.types`          | `Array<VideoTypes>`     | Specifies the video type options available in the `Video` toolbar.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| elements.posts.handler          | function                | Is a function with a Promise-like signature. This function lets you use your own logic to retrieve the desired value. Once the value is available, you must call the resolve(value) function to pass it to the editor. In case you want to cancel the operation, call the reject() function. A resolve or reject call is mandatory. If you miss this step, the editor will remain in waiting mode. Error management on the host application must call the reject function to unblock the editor. |
| elements.posts.exclude          | boolean                 | Takes true or false values and lets you turn on or off the `Exclude by` option from toolbar.                                                                                                                                                                                                                                                                                                                                                                                                     |
| elements.posts.offset           | boolean                 | Takes true or false values and lets you turn on or off the `Offset` option from toolbar.                                                                                                                                                                                                                                                                                                                                                                                                         |
| elements.posts.orderBy          | boolean                 | Takes true or false values and lets you turn on or off the `Order by` option from toolbar.                                                                                                                                                                                                                                                                                                                                                                                                       |
| elements.posts.order            | boolean                 | Takes true or false values and lets you turn on or off the `Order` option from toolbar.                                                                                                                                                                                                                                                                                                                                                                                                          |
| elements.posts.querySource      | boolean                 | Takes true or false values and lets you turn on or off the `Source` option from toolbar.                                                                                                                                                                                                                                                                                                                                                                                                         |
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

#### Default LeftSidebar TabsOrder

```ts
// Popup
const defaultConfigModulesGroupForPopup = {
  ui: {
    leftSidebar: {
      bottomTabsOrder: [
        {
          id: "deviceMode",
          type: "deviceMode",
        },
        {
          id: "more",
          type: "more",
        },
      ],
      topTabsOrder: [
        {
          id: "addElements",
          type: "addElements",
          elements: [
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
        {
          id: "globalStyle",
          type: "globalStyle",
        },
      ],
    },
  },
};

// Story
const defaultConfigModulesGroupForStory = {
  ui: {
    leftSidebar: {
      bottomTabsOrder: [
        {
          id: "more",
          type: "more",
        },
      ],
      topTabsOrder: [
        {
          id: "addElements",
          type: "addElements",
          elements: [
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
        {
          id: "globalStyle",
          type: "globalStyle",
        },
      ],
    },
  },
};

// Page
const defaultConfigModulesGroupForPages = {
  ui: {
    leftSidebar: {
      bottomTabsOrder: [
        {
          id: "deviceMode",
          type: "deviceMode",
        },
        {
          id: "more",
          type: "more",
        },
      ],
      topTabsOrder: [
        {
          id: "addElements",
          type: "addElements",
          elements: [
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
        {
          id: "reorderBlock",
          type: "reorderBlock",
        },
        {
          id: "globalStyle",
          type: "globalStyle",
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

1. In your configuration, add `api.screenshots.screenshotUrl` with the base URL for storing screenshots.
2. Add `api.screenshots.create` and `api.screenshots.update` in the configuration to specify the handlers for managing screenshots.
3. Each handler will receive an extra parameter, `base64`, which contains the screenshot in `base64` format. In these handlers:
  - Save the screenshot on your server at the specified `api.screenshots.screenshotUrl` location.
  - Return the `id` of the saved screenshot.
  - The `update` handler will also receive an additional `id` parameter, which identifies the screenshot to be updated.
4. The editor will generate the screenshot URL by concatenating `api.screenshots.screenshotUrl` with the screenshot’s `id` and appending a query parameter with the current timestamp to bypass caching.
5. The resulting URL format will be: `${api.screenshots.screenshotUrl}${id}?t=${timestamp}`.

### Example: Localization (`l10n`)  

To use localization, import one of the files from [/packages/core-translations](https://github.com/EasyBrizy/Brizy-Local-Editor/tree/master/packages/core-translations) and include it in the Brizy configuration:  

```ts
import l10nUK from "/path/to/editor.uk.json";

const config = {
  l10n: l10nUK,
};
```
### Example: Right to left (`isRTL`)

```ts
const config = {
  isRTL: true,
};
```

### Video Types

```ts
export enum VideoTypes {
  Youtube = "youtube",
  Vimeo = "vimeo",
  Custom = "custom",
  URL = "url",
}
```

### Themes

```ts
export interface Theme {
  colors: {
    "--ui-main-color": string,                   // UI main color
    "--active-color": string,                    // Highlight color
    "--icons-color": string,                     // Icons color
    "--toolbars-icons-separators": string,       // Toolbar icons separators

    "--sidebar-background": string,              // Sidebars left and right background
    "--sidebar-header": string,                  // Sidebars left and right headers
    "--sidebar-separators": string,              // Sidebars separators
    "--borders": string,                         // Borders for the elements in the left sidebar

    "--inputs-bg": string,                       // All inputs background
    "--input-placeholder-text": string,          // Placeholder default text in inputs
    "--text-labels": string,                     // Text labels

    "--column-lvl1-border": string,              // Border for the lvl 1 column in the editor (optional)
    "--column-lvl2-border": string,              // Border for the lvl 2 column in the editor (optional)
    "--row-and-default-elements-border": string, // Border for the row and default elements in the editor (optional)
    "--draggable-block-padding-bg": string,      // Block top and bottom draggable padding in editor (optional)
    "--ui-shadows": string,                      // UI shadows for toolbars and sidebars
  }
}
```

### Form Input Types

```ts
export type FormInputTypes =
  | "Text"
  | "Email"
  | "Number"
  | "Paragraph"
  | "Select"
  | "Radio"
  | "Checkbox"
  | "Date"
  | "Url"
  | "Time"
  | "FileUpload"
  | "Hidden"
  | "Tel"
  | "Password";
```

### Using Output data from `onSave` and `publish` functions
The `onSave` and `publish` functions retrieve the editor's output data. This data has the following structure:

```typescript
interface Output {
  pageData: PageDataOutput;
  projectData: ProjectDataOutput;
  error?: string;
  popupSettings?: {
    verticalAlign: "top" | "bottom" | "center";
    horizontalAlign: "left" | "right" | "center";
  };
}

interface Style {
  type: "style";
  attr: Record<string, string>;
  html: string;
}

interface Link {
  type: "link";
  attr: Record<string, string>;
}

interface StylesFree {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
  pageFonts: AssetFonts[];
  pageStyles: Asset[];
}

interface StylesPro {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
}

interface ScriptsFree {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
}

interface ScriptsPro {
  main: Asset;
  generic: Asset[];
  libsMap: AssetLibsMap[];
  libsSelectors: string[];
}

type PageDataOutput = {
  [k: string]: unknown;
  compiled?: {
    html: string;
    assets: {
      freeStyles: StylesFree;
      freeScripts: ScriptsFree;
      proStyles?: StylesPro;
      proScripts?: ScriptsPro;
    };
  };
};

type ProjectDataOutput = {
  [k: string]: unknown;
  compiled?: {
    styles: Array<Style | Link>;
  };
};
```

For more information about the `Assets` types see [here](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/packages/core/src/types/common.ts#L3)

#### Normalizing `pageData` and `projectData`
To normalize and aggregate pageData and projectData, use the @brizy/merge-page-assets library. Here is the process:

```ts
import { AssetAggregator, AssetGroup } from "@brizy/merge-page-assets";

const { freeStyles, freeScripts, proStyles, proScripts } = pageData.compiled.assets;
const { styles } = projectData.compiled;

// Merge project styles into free page styles
freeStyles.pageStyles = [...freeStyles.pageStyles, ...styles];

// Create asset groups for scripts and styles
const scriptsAssets = [AssetGroup.instanceFromJsonData(freeScripts)];
const stylesAssets = [AssetGroup.instanceFromJsonData(freeStyles)];

if (proStyles) stylesAssets.push(AssetGroup.instanceFromJsonData(proStyles));
if (proScripts) scriptsAssets.push(AssetGroup.instanceFromJsonData(proScripts));

// Function to aggregate asset lists
const getAggregatedAssetList = (assets: AssetGroup[]) => {
  const assetAggregator = new AssetAggregator(assets);
  return assetAggregator.getAssetList();
};

// Aggregated lists
const scriptAssetList = getAggregatedAssetList(scriptsAssets);
const styleAssetList = getAggregatedAssetList(stylesAssets);
```

#### Output: Aggregated Asset Lists
The `scriptAssetList` and `styleAssetList` now contain normalized, unique, and prioritized assets ready for use.

`Example`: Style AssetsList:

```json
[
  {
    "uid": "a42ab5f9-b53e-4cea-b06d-2c7ee87aaa44",
    "name": "metaViewport",
    "score": 10,
    "type": "code",
    "content": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
    "url": null,
    "attrs": {},
    "pro": false
  },
  {
    "uid": "e4427079-483f-41e3-9d8c-d5d0baa27a96",
    "name": "projectPrefetchFonts",
    "score": 10,
    "type": "code",
    "content": "<link class=\"brz-link brz-link-bunny-fonts-prefetch\" rel=\"dns-prefetch\" href=\"//fonts.bunny.net\"> <link class=\"brz-link brz-link-bunny-fonts-preconnect\" rel=\"preconnect\" href=\"https://fonts.bunny.net/\" crossorigin>",
    "url": null,
    "attrs": {},
    "pro": false
  },
  {
    "uid": "c980d743-4b43-4ece-adf6-7e16074e0c67",
    "name": "google",
    "score": 10,
    "type": "file",
    "content": null,
    "url": "https://fonts.bunny.net/css?family=Inter:100,200,300,regular,500,600,700,800,900|Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic&subset=arabic,bengali,cyrillic,cyrillic-ext,devanagari,greek,greek-ext,gujarati,hebrew,khmer,korean,latin-ext,tamil,telugu,thai,vietnamese&display=swap",
    "attrs": {
      "class": "brz-link brz-link-google",
      "type": "text/css",
      "rel": "stylesheet"
    },
    "pro": false,
    "fontType": "google-font"
  },
  {
    "uid": "b993c0db-3a69-43a6-8ed1-ca872814acfd",
    "name": "main",
    "score": 30,
    "type": "file",
    "content": null,
    "url": "http://localhost:8001/dist/pro/css/preview.pro.min.css",
    "attrs": {
      "class": "brz-link brz-link-preview-pro",
      "rel": "stylesheet"
    },
    "pro": true
  },
  {
    "uid": "30c7ed46-b666-4f83-b8ae-86fd24d2cc67",
    "name": "132799660",
    "score": 50,
    "type": "inline",
    "content": ".brz .brz-css-u5nxF{z-index: auto;margin:0;}.brz .brz-css-u5nxF.brz-section .brz-section__content{min-height: auto;display:flex;}",
    "url": null,
    "attrs": {
      "class": "brz-style"
    },
    "pro": false
  },
  {
    "uid": "23158f61-9713-4ff9-8a3c-43f25b0851c5",
    "name": "thirdPartyStyle",
    "score": 60,
    "type": "file",
    "content": null,
    "url": "http://localhost:3000/widgets/index.view.css",
    "attrs": {
      "class": "brz-link brz-link-thirdparty",
      "rel": "stylesheet"
    },
    "pro": false
  }
]
```

#### Usage in HTML Document:
Iterate over these lists to create script and style tags in the HTML document:

`Example` : Generating Scripts Tags using React:

```tsx
import { BaseAsset, AssetContent, AssetType  } from "@brizy/merge-page-assets";
import { DomUtils, parseDocument } from "htmlparser2";

const getAssetElement = (asset: BaseAsset) => {
  const content = asset.getContent() ?? "";
  const assetType = asset.getType();
  const attr = asset.getAttrs();
  const url = asset.getUrl() ?? "";

  return makeStyle({ content, type: assetType, attr, url });
};

const makeScript = (data: AssetContent) => {
  const { type } = data;
  switch (type) {
    case AssetType.Inline: {
      const { content, attr } = data;
      const { class: _class, ..._attr } = attr ?? {};
      const className = _class ? `${_class}` : undefined;

      return <script {..._attr} className={className} dangerouslySetInnerHTML={{ __html: content }} />;
    }
    case AssetType.File: {
      const { url, attr } = data;
      const { class: _class, ..._attr } = attr ?? {};
      const className = _class ? `${_class}` : undefined;

      return <script {..._attr} src={url} className={className} />;
    }
    case AssetType.Code: {
      const { content } = data;

      const doc = parseDocument(content);

      const scriptElements = DomUtils.findAll((elem) => elem.name === "script", doc.children);

      const scriptComponents = scriptElements.map((scriptElem, index) => {
        const { attribs } = scriptElem;
        const innerHTML = DomUtils.textContent(scriptElem);

        if ("src" in attribs) {
          return <script key={`script-${index}`} {...attribs} />;
        }

        return (
          <script key={`script-${index}`} {...attribs}>
        {innerHTML}
        </script>
      );
      });

      return <>{scriptComponents}</>;
    }
  }
};
```

Now, you can use the `getAssetElement` function to generate the script and style tags in the HTML document.

### 🎨 Customize Builder UI Themes

You can customize the Brizy Builder UI by overriding default color variables via the `config.ui.colors` object. 
This allows you to fully theme the editor to match your branding or design system.

```js
const config = {
  // ... other config keys
  ui: {
    colors: {
      "--ui-main-color": "#ffffff",                           // UI main color
      "--active-color": "#3dbfe8",                            // Highlight color
      "--icons-color": "#37352F",                             // Icons color
      "--toolbars-icons-separators": "#E6E6E5",               // Toolbar icons separators
  
      "--sidebar-background": "#ffffff",                         // Sidebars left and right background
      "--sidebar-header": "#f2f2f2",                          // Sidebars left and right headers
      "--sidebar-separators": "#E6E6E5",                      // Sidebars separators
      "--borders": "#e0e0e0",                                 // Borders for the elements in the left sidebar
  
      "--inputs-bg": "#f2f2f2",                               // All inputs background
      "--input-placeholder-text": "#545454",                  // Placeholder default text in inputs
      "--text-labels": "#3a3a3a",                             // Text labels
  
      "--column-lvl1-border": "#3dbfe8",                      // Border for the lvl 1 column in the editor (optional)
      "--column-lvl2-border": "#ed2164",                      // Border for the lvl 2 column in the editor (optional)
      "--row-and-default-elements-border": "#879294",         // Border for the row and default elements in the editor (optional)
      "--draggable-block-padding-bg": "rgba(61,191,232,.15)", // Block top and bottom draggable padding in editor (optional)
  
      "--ui-shadows": "rgba(0,0,0, 0.2)"                      // UI shadows for toolbars and sidebars
    }
  }
};
```

> 💡 These CSS variables follow the internal structure used by Brizy, so your customizations apply consistently across the UI.

---

#### 🖼️ Screenshots

#### Default UI
<img  class="brz-img--border" src="/img/theme-default-ui.jpg" />

#### Customized Theme

```js
const config = {
  // ... other config keys
  ui: {
    colors: {
      "--ui-main-color": "#ffffff",                           // UI main color
      "--active-color": "#3dbfe8",                            // Highlight color
      "--icons-color": "#37352F",                             // Icons color
      "--toolbars-icons-separators": "#E6E6E5",               // Toolbar icons separators
  
      "--sidebar-background": "#ffffff",                      // Sidebars left and right background
      "--sidebar-header": "#f2f2f2",                          // Sidebars left and right headers
      "--sidebar-separators": "#E6E6E5",                      // Sidebars separators
      "--borders": "#e0e0e0",                                 // Borders for the elements in the left sidebar
  
      "--inputs-bg": "#f2f2f2",                               // All inputs background
      "--input-placeholder-text": "#545454",                  // Placeholder default text in inputs
      "--text-labels": "#3a3a3a",                             // Text labels
  
      "--column-lvl1-border": "#3dbfe8",                      // Border for the lvl 1 column in the editor (optional)
      "--column-lvl2-border": "#ed2164",                      // Border for the lvl 2 column in the editor (optional)
      "--row-and-default-elements-border": "#879294",         // Border for the row and default elements in the editor (optional)
      "--draggable-block-padding-bg": "rgba(61, 191, 232, 0.15)", // Block top and bottom draggable padding in editor (optional)
  
      "--ui-shadows": "rgba(0, 0, 0, 0.2)"                      // UI shadows for toolbars and sidebars
    }
  }
};
````

<img class="brz-img--border" src="/img/theme-light-ui.jpg" />
