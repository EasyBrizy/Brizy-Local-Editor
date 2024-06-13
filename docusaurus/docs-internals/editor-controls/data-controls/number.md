---
sidebar_position: 3
toc_max_heading_level: 4
---

# Number

The number control in Brizy provides a straightforward number input field, allowing you to set minimum and maximum value limits and define the step size for value adjustments.

Example of number control:

![Number](/img/data-controls/number.png)

Example of large number control:

![NumberLarge](/img/data-controls/numberLarge.png)

Example of number control with disabled spinner:

![NumberNoSpinner](/img/data-controls/numberNoSpinner.png)

### Parameters

| Name                 | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                       |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `string`                                                                                                                                                                                   |    -    | The name of the key where the switch will save your data                                                                                                                                                                          |
| `type`               | `string`                                                                                                                                                                                   |    -    | Type should be `"number"` to use this control                                                                                                                                                                                     |
| `label?`             | `string`                                                                                                                                                                                   |    -    | The text that appears in left side of control                                                                                                                                                                                     |
| `position?`          | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                            |
| `devices?`           | `string`                                                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`          | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                           |
| `config?.min`        | `number`                                                                                                                                                                                   |   `0`   | The minimum number                                                                                                                                                                                                                |
| `config?.max`        | `number`                                                                                                                                                                                   |  `100`  | The maximum number                                                                                                                                                                                                                |
| `config?.step`       | `number`                                                                                                                                                                                   |   `1`   | The intervals value that will be incremented or decremented when using the controls’ spinners.                                                                                                                                    |
| `config?.spinner`    | `boolean`                                                                                                                                                                                  | `true`  | Enables or disables the display of arrows that increment or decrement a number                                                                                                                                                    |
| `config?.updateRate` | `number`                                                                                                                                                                                   |  `50`   | The rate at which the component updates its value, specified in milliseconds. This can control how frequently changes to the input value are propagated                                                                           |
| `config?.size`       | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           | `"short"` | A string that specifies the size of the input field. Common values might include: .                                                                                                                                               |
| `helper?.content`    | `string`                                                                                                                                                                                   |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                 |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                |

### Return value

The return value is a `number` representing the text field value.

```js
{
  value: number;
}
```

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "rows",
  type: "number"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "rows",
  type: "number",
  label: "Number"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "rows",
  type: "number",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "rows",
  type: "number",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "rows",
  type: "number",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "rows",
  type: "number",
  disabled: true
}
```

Control will be disabled when `switchId` variable will be `"on"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"switchId"` is the id of the `"switch"` control below.

```js
const getToolbarContols = ({ getValue }) => {
  const switchId = getValue("switchId");

  return [
    {
      id: "switchId",
      type: "switch",
    },
    {
      id: "rows",
      type: "number",
      disabled: switchId === "on",
    },
  ];
};
```

#### Config values for `min` example

The `min` property is set to `100`, indicating that the minimum input field value will be `100`.

```js
{
  id: "rows",
  type: "number",
  config: {
    min: 100
  }
}
```

#### Config values for `max` example

The `max` property is set to `1000`, indicating that the maximum input field value will be `1000`.

```js
{
  id: "rows",
  type: "number",
  config: {
    max: 1000
  }
}
```

#### Config values for `step` example

The `step` property is set to `100`, indicating that the input field will increase or decrease with 100 each time.

```js
{
  id: "rows",
  type: "number",
  config: {
    step: 100
  }
}
```

#### Config values for `spinner` example

The `spinner` property is set to `false`, indicating that the input field will render without spinner arrows.

```js
{
  id: "rows",
  type: "number",
  config: {
    spinner: false
  }
}
```

#### Config values for `updateRate` example

The `updateRate` property is set to `60`, indicating that the input field will update in `60` milliseconds.

```js
{
  id: "rows",
  type: "number",
  config: {
    updateRate: 60
  }
}
```

#### Config size example

The size property is set to `"medium"`, indicating that the input field will be rendered with medium dimensions.

```js
{
  id: "rows",
  type: "number",
  config: {
    size: "medium"
  }
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "rows",
  type: "number",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "rows",
  type: "number",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```
