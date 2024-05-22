---
toc_max_heading_level: 4
---
# Toggle Button

The ToggleButton component is a simple `on` | `off` toggle that can display an icon and change its appearance based on its type. This component supports customization through various props to control alignment, appearance, and behavior.

Example of the toggle button when it is disabled | enabled:

![Toggle Button Off](/img/data-controls/toggle-button-off.png) ![Toggle Button On](/img/data-controls/toggle-button-on.png)

### Parameters

| Name                   | Type                                                                                                                                                                                       |   Default   | Description                                                                                                                                                                                                                      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                   | `string`                                                                                                                                                                                   |      -      | The identifier of the key where the toggle button will save your data                                                                                                                                                            |
| `type`                 | `string`                                                                                                                                                                                   |      -      | Type should be `"toggleButton"` to use this control                                                                                                                                                                              |
| `label?`               | `string`                                                                                                                                                                                   |      -      | The label displayed on the left side of the control                                                                                                                                                                              |
| `position?`            | `number`                                                                                                                                                                                   |      -      | The position of the control in toolbar                                                                                                                                                                                           |
| `devices?`             | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`   | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices |
| `disabled?`            | `boolean`                                                                                                                                                                                  |   `false`   | Configure the condition under which the control is disabled or enabled                                                                                                                                                           |
| `align?`               | `"left"` \| `"center"` \| `"right"`                                                                                                                                                        | `"center"`  | Specifies the alignment of the content within the button. This controls how the icon is positioned inside the button                                                                                                             |
| `helper?.content`      | `string`                                                                                                                                                                                   |      -      | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                     |
| `helper?.position`     | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`   | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                |
| `config.icon`          | `string`                                                                                                                                                                                   |      -      | The name of the icon to display                                                                                                                                                                                                  |
| `config?.title`        | `string`                                                                                                                                                                                   |      -      | Sets the title attribute of the button, which typically provides additional information when the user hovers over the button                                                                                                     |
| `config?.type`         | `"square"` \| `"default"`                                                                                                                                                                  | `"default"` | Determines the styling of the button: <br/> `"default"` - displays only the icon <br/> `"square"` - adds a background to the parent element of the icon                                                                          |
| `config?.reverseTheme` | `boolean`                                                                                                                                                                                  |   `true`    | If enabled, reverses the color theme of the icon. Works only with type `"default"`                                                                                                                                               |
| `config?.on`           | `string`                                                                                                                                                                                   |   `"on"`    | The return value of the control when it is enabled                                                                                                                                                                               |
| `config?.off`          | `string`                                                                                                                                                                                   |   `"off"`   | The return value of the control when it is disabled                                                                                                                                                                              |

### Return value

Control returns an object where `value` is `"on"` | `"off"` by default or your value passed in `config.on` and `config.off`.

```js
{
  value: config.on | config.off
}
```

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  label: "Flip",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "all",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "desktop",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "responsive",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Disabled example

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  disabled: true,
  config: {
    icon: "nc-flip-horizontal"
  }
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
      id: "shapeTopHorizontal",
      type: "toggleButton",
      disabled: videoType === "custom",
      config: {
        icon: "nc-flip-horizontal"
      }
    }
  ]
}
```

#### Align example

Specifies the alignment of the content within the button. This controls how the icon is positioned inside the button.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  align: "left",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Helper example

`content` serves as the tooltip's content and also determines whether the icon, which triggers the tooltip on hover, will be visible. If `content` is an empty string the icon will not display.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  helper: {
    content: "Helper"
  },
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

`position` specifies the position of the tooltip relative to the icon.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  helper: {
    content: "Helper",
    position: "top-start"
  },
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Config title example

Sets the title attribute of the button, which typically provides additional information when the user hovers over the button.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    title: "Title"
  }
}
```

#### Config type example

Determines the styling of the button, in this case type `"square"` adds a background to the parent element of the icon.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    type: "square"
  }
}
```

Can be used without `icon` just to display an `on` | `off` button.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    type: "square"
  }
}
```

#### Config reverse theme example

If enabled, reverses the color theme of the icon.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    reverseTheme: false
  }
}
```

#### Config value for `on` | `off` examples

When the `toggleButton` is enabled, it will return `"1"`.
When the `toggleButton` is disabled, it will return `"0"`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "1",
    off: "0"
  }
}
```

When the `toggleButton` is enabled, it will return `"true"`.
When the `toggleButton` is disabled, it will return `"false"`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "true",
    off: "false"
  }
}
```

When the `toggleButton` is enabled, it will return `"enabled"`.
When the `toggleButton` is disabled, it will return `"disabled"`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "enabled",
    off: "disabled"
  }
}
```
