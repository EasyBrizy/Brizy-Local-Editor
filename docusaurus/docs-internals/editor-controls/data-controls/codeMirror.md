---
toc_max_heading_level: 4
---
# Code Mirror

Brizy's code control features a code editor with a textarea interface.

Example of code mirror control:

![Code Mirror](/img/data-controls/codeMirror.png)

### Parameters

| Name               | Type        |    Default    | Description                                                                                                                                                                                                                                                                                                                                  |
|:-------------------|:------------|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`    |       -       | The identifier of the key where the `codeMirror` will save your data                                                                                                                                                                                                                                                                         |
| `type`             | `string`    |       -       | Type should be `"codeMirror"` to use this control                                                                                                                                                                                                                                                                                            |
| `placeholder?`     | `string`    |      -        | The placeholder text displayed in the input field.                                                                                                                                                                                                                                                                                           |
| `label?`           | `string`    |       -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                          |
| `position?`        | `number`    |       -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                       |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`  | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                            |
| `disabled?`        | `boolean`   |    `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                      |
| `helper?.content`  | `string`   |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                            |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                           |
| `config?.size`     | `"short"` \| `"medium"` \| `"large"` \| `"auto"` | `"medium"` | The size of textarea                                                                                                                                                                                                                                                                                                                         |
| `config?.language` | `"html"`  \|  `"css"`   \| `"markdown"`  \| `"xml"`  |   `"css"`   | Specify in which language the code will be written                                                                                                                                                                                                                                                                                           |

### Return value

The return value is a `string` representing the text field value.

```js
{
  value: string;
}
```

### Usage


#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "code", 
  type: "codeMirror"
}
```

#### Placeholder example

Adding the `placeholder` text for the control.

```js
{
  id: "code",
  type: "codeMirror",
  placeholder: "Code..."
}
```

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "code", 
  label: "Custom Css",
  type: "codeMirror"
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "code", 
  type: "codeMirror",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "code", 
  type: "codeMirror",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "code", 
  type: "codeMirror",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "code", 
  type: "codeMirror", 
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
        { title: "Custom", value: "custom" }
      ]
    },
    {
      id: "code",
      type: "codeMirror",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "code",
  type: "codeMirror",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "code",
  type: "codeMirror",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### Config value for `size` examples
When you add the size attribute in the configuration, you define the dimensions of the textarea.

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "short"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "medium"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "large"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "auto"
  }
}
```

#### Config value for `language` examples
In the examples below, we specify the language in which we will write the code.

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "html"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "css"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "markdown"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "xml"
  }
}
```
