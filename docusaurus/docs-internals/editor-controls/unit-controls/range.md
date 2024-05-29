---
toc_max_heading_level: 4
---

# Range

The range, often referred to as a range slider, is a user interface element that allows users to select a range of values within a predefined numerical range.

Example of the range:<br/>
![Range](/img/unit-controls/range.png)<br/>
Example of the range with unit:<br/>
![Range](/img/unit-controls/rangeUnit.png)<br/>
Example of the range with helper:<br/>
![Range](/img/unit-controls/rangeHelp.png)<br/>
Example of the range with start and end label:<br/>
![Range](/img/unit-controls/rangeLabel.png)<br/>

### Parameters

| Name                 | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                      |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `string`                                                                                                                                                                                   |    -    | The identifier of the key where the range will save your data                                                                                                                                                                    |
| `type`               | `string`                                                                                                                                                                                   |    -    | Type should be `"range"` to use this control                                                                                                                                                                                     |
| `label?`             | `string`                                                                                                                                                                                   |    -    | The label displayed on the left side of the control                                                                                                                                                                              |
| `position?`          | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                           |
| `devices?`           | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices |
| `disabled?`          | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled                                                                                                                                                           |
| `helper?.content`    | `string`                                                                                                                                                                                   |    -    | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                     |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                |
| `config.min?`        | `number`                                                                                                                                                                                   |   `0`   | The minimum value allowed on the range scale                                                                                                                                                                                     |
| `config.max?`        | `number`                                                                                                                                                                                   |  `100`  | The maximum value allowed on the range scale                                                                                                                                                                                     |
| `config.step?`       | `number`                                                                                                                                                                                   |   `1`   | The incremental step between values on the range scale                                                                                                                                                                           |
| `config.updateRate?` | `number`                                                                                                                                                                                   |  `50`   | The frequency of value updates, typically in milliseconds                                                                                                                                                                        |
| `config.unit?`       | `string`                                                                                                                                                                                   |    -    | The unit of measurement for the values displayed on the range scale                                                                                                                                                              |
| `config.startLabel?` | `string`                                                                                                                                                                                   |    -    | The label indicating the starting point of the range                                                                                                                                                                             |
| `config.endLabel?`   | `string`                                                                                                                                                                                   |    -    | The label indicating the ending point of the range                                                                                                                                                                               |

### Return value

The return value of the range control represents the current selected range of values.<br/>

```js
{
  from: number;
  to: number;
}
```

`from` - the starting value of the range;<br/>
`to` - the ending value of the range;<br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "interval",
  type: "range"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "interval",
  type: "range",
  label: "Range"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "interval",
  type: "range",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "interval",
  type: "range",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "interval",
  type: "range",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "interval",
  type: "range",
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
      id: "interval",
      type: "range",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "interval",
  type: "range",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "interval",
  type: "range",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### Config `min` example

Defines the minimum value allowed on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    min: 10
  }
}
```

#### Config `max` example

Defines the maximum value allowed on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    max: 50
  }
}
```

#### Config `step` example

Specifies the incremental step between values on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    step: 10
  }
}
```

#### Config `updateRate` example

Determines the frequency of value updates, typically in milliseconds.

```js
{
  id: "interval",
  type: "range",
  config: {
    updateRate: 100
  }
}
```

#### Config `unit` example

Specifies the unit of measurement for the values displayed on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    unit: "%"
  }
}
```

#### Config `startLabel` example

Specifies the label indicating the starting point of the range.

```js
{
  id: "interval",
  type: "range",
  config: {
    startLabel: "10"
  }
}
```

#### Config `endLabel` example

Specifies the label indicating the ending point of the range.

```js
{
  id: "interval",
  type: "range",
  config: {
    endLabel: "50"
  }
}
```
