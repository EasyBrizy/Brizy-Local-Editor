---
toc_max_heading_level: 4
---
# File Upload

The `fileUpload` control displays a file chooser section that allows the user to choose one or more files from their device storage.

Example of the `fileUpload` without selected file:

![FileUpload without file](/img/controls/fileupload-without-file.png)

Example of the `fileUpload` with selected file:

![FileUpload without file](/img/controls/fileupload-with-file.png)

### Parameters

| Name                        | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                        | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the control will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `type`                      | `string`                                                                                                                                                                                   |      -       | Type should be `"fileUpload"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `label?`                    | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `icon?`                     | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](/docs-internals/icons/).                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `position?`                 | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `roles?`                    | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                   | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`                  | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                               |
| `disabled?`                 | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `display?`                  | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                                                                                                                                             |
| `helper?.content`           | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `helper?.position`          | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `states?`                   | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                                                                                         |
| `config?.allowedExtensions` | `Array<string>`                                                                                                                                                                            |      -       | An array of strings that specifies the file extensions allowed for upload. This configuration ensures that only files matching the specified extensions can be uploaded, enhancing security and maintaining control over the types of files that users can upload. <br/><br/>For example: <br/>**`["video/*", ".jpg", ".png]`**<br/><br/>This setup allows for the upload of any video format, as well as JPEG, JPG and PNG image formats.<br/><br/> If `config?.allowedExtensions` not provided, then user allowed to upload any type of file. |
| `default?`                  | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { id: string; name: string }`</b> <br/> <br/> `Default` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                                                                                                                          |
| `style?`                    | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-download": {`<br/>   `display: value ? "flex" : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre>                                                                                                     |

### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "file",
  type: "fileUpload"
}
```

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

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "file",
  type: "fileUpload",
  label: "File"
}
```

#### Icon example

Adding a "star" icon to the left of the control's label.

```js
{
  id: "file",
  type: "fileUpload",
  icon: "nc-star"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "file",
  type: "fileUpload",
  roles: ["admin", "designer"]
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

#### Display examples
In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "file",
  type: "fileUpload",
  display: "block"
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

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "file",
  type: "fileUpload", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "file",
  type: "fileUpload", 
  states: ["normal", "hover", "active"]
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

#### CSS examples

Change the `.brz-download` element color with CSS using a `multiSelect` control value.
If `value` exist, then the color of `.brz-download` will be `green`.

```js
{
  id: "file",
  type: "fileUpload",
  style: ({ value }) => {
    if (value) {
      return {
        "{{WRAPPER}} .brz-download": {
          color: "green"
        }
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the video output value to determine when to render the label in the button element.
When the video is uploaded, we will render the label.
We also use the same video values to add the `"data-disabled"` HTML attribute to the `.brz-button` and to create a `props.size` value for the `<Icon />` component.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  file: string
}

const Button = (props: Props): JSX.Element => {
  const { file } = props;
    
  const isDisabled = !file;
  
  const buttonClassName = isDisabled ? "brz-button brz-button-disabled" : "brz-button";
  
  return (
    <button className={buttonClassName} disabled={isDisabled}>
      Submit
    </button>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Button",
  component: { editor: Button, view: Button },
  title: "My Button",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-button",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-button",
              title: "Button"
            },
            devices: "desktop",
            options: [
              {
                id: "file",
                type: "fileUpload",
                devices: "desktop"
              }
            ]
          }
        ]
      }
    ];
  }
});
```
