---
sidebar_position: 3
toc_max_heading_level: 4
---

# Textarea

The Brizy textarea control offers a traditional textarea field with the ability to set the number of rows.

Example of the textarea:

![Textarea](/img/data-controls/textarea.png)

Example of the textarea with placeholder and 2 lines:

![TextareaWithPlaceholder](/img/data-controls/textareaPlaceholder.png)

### Parameters

| Name            | Type                                                                         | Default  | Description                                                                                                                                                                                                                       |
|:----------------|:-----------------------------------------------------------------------------| :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `string`                                                                     |    -     | The identifier of the key where the textarea will save your data                                                                                                                                                                  |
| `type`          | `string`                                                                     |    -     | Type should be `"textarea"` to use this control                                                                                                                                                                                   |
| `label?`        | `string`                                                                     |    -     | The label displayed on the left side of the control                                                                                                                                                                               |
| `position?`     | `number`                                                                     |    -     | The position of the control in toolbar                                                                                                                                                                                            |
| `devices?`      | `"all"` \| `"desktop"` \| `"responsive"`                                     | `"all"`  | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`     | `boolean`                                                                    | `false`  | Configure the condition under which the control is disabled or enabled.                                                                                                                                                           |
| `placeholder?`  | `string`                                                                     |    -     | The placeholder text displayed in the input field.                                                                                                                                                                                |
| `helper?.content`  | `string`                                                                                                                                                                        |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                 |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                |
| `config?.lines` | `number`                                                                     |    -     | Specifies the number of rows for the textarea component.                                                                                                                                                                          |
| `config?.size`  | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                             | `"auto"` | A string that specifies the size of the input field.                                                                                                                                                                              |

### Return value

The return value is a `string` representing the text field value.

```js
{
  value: string;
}
```

### Usage

#### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "description",
  type: "textarea"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "description",
  type: "textarea",
  label: "loop"
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "description",
  type: "textarea",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "description",
  type: "textarea",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "description",
  type: "textarea",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "description",
  type: "textarea",
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
      id: "description",
      type: "textarea",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Placeholder example

Adding the placeholder text for the control.

```js
{
  id: "description",
  type: "textarea",
  placeholder: "Start typing here..."
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "description",
  type: "textarea",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "description",
  type: "textarea",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### Config values for `lines` example

Specifies the number of lines for the textarea component. This determines the visible height of the textarea input field.

```js
{
  id: "description",
  type: "textarea",
  config: {
    lines: 3
  }
}
```

#### Config `size` example

The size property is set to `"medium"`, indicating that the input field will be rendered with medium dimensions.

```js
{
  id: "description",
  type: "textarea",
  config: {
    size: "medium"
  }
}
```
