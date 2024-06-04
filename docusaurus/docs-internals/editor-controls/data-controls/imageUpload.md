---
toc_max_heading_level: 4
---

# Image Upload

The `imageUpload` control displays a image selection interface, enabling the user to choose one image from their device storage.

Example of the `imageUpload` control:

![Image Upload](/img/data-controls/imageUpload.png)

Example of uploaded image in control:

![Image Upload Add](/img/data-controls/imageUpload-image.png)

Example of uploaded image without the possibility to delete it:

![Image Upload Can't Delete](/img/data-controls/imageUpload-can-not-delete.png)

Example of a dropdown menu for selecting image sizes:

![Image Upload Dropdown](/img/data-controls/imageUpload-dropdown.png)

Example of uploaded image without sizes dropdown:

![Image Upload Without Dropdown](/img/data-controls/imageUpload-no-dropdown.png)

### Parameters

| Name                              | Type                |    Default    | Description                                                                                                                                                                                                                                                                                                                                                                                        |
|:----------------------------------|:--------------------|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                              | `string`            |       -       | The identifier of the key where the imageUpload will save your data                                                                                                                                                                                                                                                                                                                                |
| `type`                            | `string`            |       -       | Type should be `"imageUpload"` to use this control                                                                                                                                                                                                                                                                                                                                                 |
| `label?`                          | `string`            |       -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                |
| `position?`                       | `number`            |       -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                             |
| `devices?`                        | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`                       | `boolean`           |    `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                            |
| `helper?.content`      | `string`                                                                                                                                                                                   |      -      | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                     |
| `helper?.position`     | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`   | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                |
| `config?.pointer`                 | `boolean`           |    `true`     | The pointer you see after adding an image serves as a visual indicator for determining the center of the image. By moving this pointer, you can accurately select where you want the center of the image to be positioned. This feature allows you to precisely align and position the image within the frame or designated area, ensuring it is perfectly centered according to your preferences. |
| `config?.edit`                    | `boolean`           |    `true`     | Deactivate the possibility to delete an uploaded photo.                                                                                                                                                                                                                                                                                                                                            |
| `config?.disableSizes`            | `boolean `          |    `false`    | This is used to enable or disable a dropdown menu (top left corner) for selecting image sizes related to an uploaded image.                                                                                                                                                                                                                                                                        |
| `config?.acceptedExtensions`      | `Array<Extensions>` |       -       | Specifies the accepted image extensions. <br/><br/> <b> Extensions = `"svg"` \| `"png"` \| `"jpg"` \| `"jpeg"` \| `"gif"` \| `"webp"` </b> |

### Return value

Returns an object with the following values:

```js
{
  imageSrc: string;
  imageFileName: string;
  imageExtension: string;
  imageWidth: number;
  imageHeight: number;
  imageType: "internal" | "external" | "unsplash"
}
```

`imageSrc`- specifies the full path to the asset, including the directory structure where the image is stored. <br/>
`imageFileName` - denotes the name of the asset file, providing a unique identifier for the image within its directory. <br/>
`imageExtension` - indicates the file format of the asset, such as `.svg`, `.png`, `.gif` and others, determining how the image is encoded. <br/>
`imageWidth` - represents the width of the asset in pixels, defining the horizontal dimension of the image. <br/>
`imageHeight` - represents the height of the asset in pixels, defining the vertical dimension of the image. <br/>
`imageType` - describes the source of the asset, which can be one of three types: `"internal"` for images stored within the project's assets, `"external"` for images hosted on external websites, or `"unsplash"` for images sourced from the Unsplash platform. <br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be visible on all devices. 

```js
{
  id: "image",
  type: "imageUpload"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "image",
  type: "imageUpload",
  label: "Asset"
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "image",
  type: "imageUpload",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "image",
  type: "imageUpload",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "image",
  type: "imageUpload",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "image",
  type: "imageUpload",
  disabled: true
}
```

Control will be disabled when `videoType` variable will be `"custom"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"videoType"` is the id of the `"select"` control below.

```js
const getToolbarContols = ({ getValue }) => {
  const videoType = getValue("videoType");

  return [
    {
      id: "videoType",
      type: "select",
      choices: [
        { title: "Youtube", value: "youtube" },
        { title: "Custom", value: "custom" },
      ],
    },
    {
      id: "image",
      type: "imageUpload",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "image",
  type: "imageUpload",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "image", 
  type: "imageUpload",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### Config `pointer` examples

The config object has a `pointer` property set to `false`. This property will not display the pointer from the uploaded image and will not allow you to locate the center of the asset.

```js
{
  id: "image",
  type: "imageUpload",
  config: {
    pointer: false
  }
}
```


#### Config `edit` examples

The config object has an `edit` property set to `false`. This setting will not allow you to delete uploaded asset.

```js
{
  id: "image",
  type: "imageUpload",
  config: {
    edit: false
  }
}
```


#### Config `disableSizes` examples

The config object has the `disableSizes` property set to `true`, so the top-left dropdown will not be visible.

```js
{
  id: "image",
  type: "imageUpload",
  config: {
    disableSizes: true
  }
}
```

#### Config `acceptedExtensions` examples

The `acceptedExtensions` property set to `["svg", "png"]` means that we can upload only `".svg"` or `".png"` files.

```js
{
  id: "image",
  type: "imageUpload",
  config: {
    acceptedExtensions: ["svg", "png"]
  }
}
```
