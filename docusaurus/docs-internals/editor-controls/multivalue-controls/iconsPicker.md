---
toc_max_heading_level: 4
---

# Icons Picker

The `iconsPicker` control in Brizy functions similarly to checkboxes but features a distinct user interface. Users can select by icons for various purposes, and the blue checkmarks visually indicate which icons are currently active or chosen.

Example of the `iconsPicker`

![Icons Picker](/img/data-controls/iconsPicker.png)

Example of checked `iconsPicker`

![Icons Picker Checked](/img/data-controls/iconsPickerChecked.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the iconsPicker will save your data                                                                                                                                                                                                                                                                                                                                                                                                    |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"iconsPicker"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                      |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                      |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |      -       | A required property that defines the array of choice objects to render as icons elements.<br/><br/><b>`Choice: { title: string, icon: string, value: string }`</b> <br/><br/>`title` - the title of the icon element.<br/>`icon` - the icon associated with the icon element.<br/>`value` - the value returned by the `iconsPicker` when this option is selected.                                                                                                      |

### Return value

The return value of the `iconsPicker` control is an array os strings, which is value of selected icons

```js
{
  value: string;
  active: string;
}
```

Example of value:

```js
{
  value: `["value-1", "value-2"]`,
  active: "value-1"
}
```

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices

```js
{
  id: "icns",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
  ]
}
```

#### Label example

Adding a label on the left side of control

```js
{
  id: "icns",
  label: "Style",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
  ]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "icns",
  type: "iconsPicker",
  devices: "all",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "icns",
  type: "iconsPicker",
  devices: "desktop",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "icns",
  type: "iconsPicker",
  devices: "responsive",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "icns",
  type: "iconsPicker",
  disabled: true,
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
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
        { title: "Custom", value: "custom" },
      ],
    },
    {
      id: "icns",
      type: "iconsPicker",
      disabled: videoType === "custom",
      choices: [
        {
          title: "Item 1",
          value: "val1",
          icon: "nc-star",
        },
        {
          title: "Item 2",
          value: "val2",
          icon: "nc-line",
        },
      ],
    },
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "icns",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
  ],
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, indicating that the helper text will be displayed at the top start of icon.

```js
{
  id: "icns",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    },
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
``` 
