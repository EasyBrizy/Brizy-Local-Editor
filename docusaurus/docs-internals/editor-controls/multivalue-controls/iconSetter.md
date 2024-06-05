---
toc_max_heading_level: 4
---

# Icon Setter

Brizy's `iconSetter` control functions as an icon picker, enabling selection from a pre-populated icon library. This facilitates the integration of existing icons within the design workflow.

Example of the control:

![IconSetter](/img/multivalue-controls/iconSetter.png)

### Parameters

| Name                | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                      |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                                                                                                                                                                   |    -    | The identifier of the key where the iconSetter will save your data                                                                                                                                                               |
| `type`              | `string`                                                                                                                                                                                   |    -    | Type should be `"iconSetter"` to use this control                                                                                                                                                                                |
| `label?`            | `string`                                                                                                                                                                                   |    -    | The label displayed on the left side of the control                                                                                                                                                                              |
| `position?`         | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                           |
| `devices?`          | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices |
| `disabled?`         | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled                                                                                                                                                           |
| `helper?.content`   | `string`                                                                                                                                                                                   |    -    | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                     |
| `helper?.position`  | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                |
| `config.canDelete?` | `boolean`                                                                                                                                                                                  | `false` | Determines whether the icon can be deleted                                                                                                                                                                                       |

### Return value

Returns an object with the following value:

```js
{
  value: {
    name: string;
    type: string;
    filename: string;
  }
}
```

`name` - the name of the icon;<br/>
`type` - the type of the icon;<br/>
`filename` - the icon file name;<br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "icon",
  type: "iconSetter"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "icon",
  type: "iconSetter",
  label: "Icon"

}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "icon",
  type: "iconSetter",
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
      id: "icon",
      type: "iconSetter",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "icon",
  type: "iconSetter",
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "icon",
  type: "iconSetter",
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### Config value for `canDelete` example

The control is configured to allow deletion of the selected icon.

```js
{
  id: "icon",
  type: "iconSetter",
  config: {
    canDelete: true
  }
}
```
