---
toc_max_heading_level: 4
---
# Radio Group

The Radio Group control in Brizy presents a selection of options. It functions as a sophisticated replacement for standard radio buttons.

Example of the radio group

![Radio Group](/img/data-controls/radio-group.png)

Example of the radio group with label

![Radio Group](/img/data-controls/radio-group-label.png)

Example of the radio group with helper

![Radio Group](/img/data-controls/radio-group-helper.png)

### Parameters

| Name          | Type                                     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------|:-----------------------------------------|:-------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`          | `string`                                 |    -    | The identifier of the key where the radio group will save your data                                                                                                                                                                                                                                                                                                                                  |
| `type`        | `string`                                 |    -    | Type should be `"radioGroup"` to use this control                                                                                                                                                                                                                                                                                                                                                    |
| `label?`      | `string`                                 |    -    | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                  |
| `position?`   | `number`                                 |    -    | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                               |
| `devices?`    | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                    |
| `disabled?`   | `boolean`                                |  `false`  | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                              |
| `helper?.content`  | `string`                                                                                                                                                                        |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                    |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                   |
| `choices`          | `Array<Choice>`                                                                                                                                                               |    -    | A required property that defines the array of choice objects to render as radio elements.<br/><br/><b>`Choice: { title?: string, icon: string, value: string }`</b> <br/><br/>`title?` - The title of the radio element, which appears on hover.<br/>`icon` - The icon associated with the radio element.<br/>`value` - The value returned by the radio group when this option is selected.          |

### Return value 

The return value is determined by the configuration of the choices properties in the given object.

```js
{
  id: "size", 
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" }
  ]
}
```

When the first choice with the `"nc-32"` icon is selected, the value will be `"small"`, and when the choice with the `"nc-48"` icon is selected, the value will be `"medium"`.

### Usage

#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices

```js
{
  id: "size", 
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" }
  ]
}
```

#### Label example
Adding a label on the left side of control

```js
{
  id: "size",
  label: "Size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "size", 
  type: "radioGroup",
  devices: "all",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "size",
  type: "radioGroup",
  devices: "desktop",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "size",
  type: "radioGroup",
  devices: "responsive",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "size",
  type: "radioGroup",
  disabled: true,
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
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
      id: "size",
      type: "radioGroup",
      disabled: videoType === "custom",
      choices: [
        { value: "small", icon: "nc-32" },
        { value: "medium", icon: "nc-48" },
        { value: "large", icon: "nc-64" },
        { value: "custom", icon: "nc-more" }
      ]
    }
  ]
}

```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, indicating that the helper text will be displayed at the top start of icon.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### Choices with title example
Adding a title for radio element which appears on hover.
```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32", title: "32" },
    { value: "medium", icon: "nc-48", title: "48" },
    { value: "large", icon: "nc-64", title: "64" },
    { value: "custom", icon: "nc-more", title: "custom" }
  ]
}
```
