---
toc_max_heading_level: 4
---
# File Upload

The `fileUpload` control displays a file chooser section that allows the user to choose one or more files from their device storage.

Example of the `fileUpload` without selected file:

![FileUpload without file](/img/data-controls/fileupload-without-file.png)

Example of the `fileUpload` with selected file:

![FileUpload without file](/img/data-controls/fileupload-with-file.png)

### Parameters

| Name                        | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                        | `string`                                                                                                                                                                                   |    -    | The identifier of the key where the switch will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `type`                      | `string`                                                                                                                                                                                   |    -    | Type should be `"fileUpload"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `label?`                    | `string`                                                                                                                                                                                   |    -    | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `position?`                 | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `devices?`                  | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                               |
| `disabled?`                 | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `helper?.content`           | `string`                                                                                                                                                                                   |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `helper?.position`          | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `config?.allowedExtensions` | `Array<string>`                                                                                                                                                                            |    -    | An array of strings that specifies the file extensions allowed for upload. This configuration ensures that only files matching the specified extensions can be uploaded, enhancing security and maintaining control over the types of files that users can upload. <br/><br/>For example: <br/>**`["video/*", ".jpg", ".png]`**<br/><br/>This setup allows for the upload of any video format, as well as JPEG, JPG and PNG image formats.<br/><br/> If `config?.allowedExtensions` not provided, then user allowed to upload any type of file. |

### Return value

The return value is a `string` that contains the file's `ID` and `name`, separated by "|||".

```js
{
  value: string;
}
```

Example of value:
```js
{
  value: "a8e41e74c4cba914345096f1|||eagle.jpg"
}
```

### Usage


#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "file",
  type: "fileUpload",
}
```

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "file",
  type: "fileUpload",
  label: "File"
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "file",
  type: "fileUpload",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "file", 
  type: "fileUpload",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "file", 
  type: "fileUpload",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "file", 
  type: "fileUpload", 
  disabled: true
}
```

Control will be disabled when `selectType` variable will be `"youtube"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"selectType"` is the id of the `"select"` control below.

```js
const getToolbarContols = ({ getValue }) => {
  const selectType = getValue("selectType");

  return [
    {
      id: "selectType",
      type: "select",
      choices: [
        { title: "Youtube", value: "youtube" },
        { title: "Custom", value: "custom" }
      ]
    },
    {
      id: "file",
      type: "fileUpload",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "file",
  type: "fileUpload",
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "file",
  type: "fileUpload",
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### Config `allowedExtensions` example

In this case, the `fileUpload` control allows uploading only `.png,` `.jpg,` `.jpeg,` and `.mp4` files.

```js
{
  id: "file",
  type: "fileUpload",
  config: {
    allowedExtensions: [".png", ".jpg", ".mp4"]
  }
}
```
