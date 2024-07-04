---
sidebar_position: 1
toc_max_heading_level: 4
---
# Margin

The margin control in Brizy provides a set of sliders that allow you to adjust the margin of a component in four directions: top, bottom, left, and right.

Example of grouped control:

![GroupedUnits](/img/controls/marginGroupedUnits.png)
![Grouped](/img/controls/marginGrouped.png)

Example of ungrouped control:

![Ungrouped](/img/controls/marginUngrouped.png)

### Parameters

| Name            | Type                             |       Default       | Description                                                                                                                    |
|:----------------|:---------------------------------|:-------------------:|:-------------------------------------------------------------------------------------------------------------------------------|
| `id`            | `string`                         |          -          | The identifier of the key where the margin will save your data                                                                 |
| `type`          | `string`                         |          -          | Type should be `"margin"` to use this control                                                                                  |
| `label?`        | `string`                         |          -          | The label displayed on the left side of the control                                                                            |
| `position?`     | `number`                         |          -          | The position of the control in toolbar                                                                                         |
| `devices?`      | `"all"` \|   `"desktop"`  \| `"responsive"`  |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`     | `boolean`                        |       `false`       | Configure the condition under which the control is disabled or enabled.                                                        |
| `config?.edges` | `"all"` \|      `"vertical"` \|  `"horizontal"`  |   `"all"`    | The edges configuration value determines which axis actions are enabled. When set to horizontal, it enables actions along the x-axis. When set to vertical, it enables actions along the y-axis.                                                                                                                                                                                                                   |
| `config?.units` | `Array<Unit>`                    |    `["px","%"]`     | The units of measurement displayed next to the slider value.<br/> Accepts CSS units (`"px"`, `"%"`) <br/> <br/> `Unit = "px" \| "%"` |

### Return value

Returns an object with the following values:

```js
{
  marginType: "grouped" | "ungrouped";
  margin: number;
  marginSuffix: "px" | "%";
  marginTop: number;
  marginTopSuffix: "px" | "%";
  marginRight: number;
  marginRightSuffix: "px" | "%";
  marginBottom: number;
  marginBottomSuffix: "px" | "%";
  marginLeft: number;
  marginLeftSuffix: "px" | "%";
}
```

`marginType` - Indicates if the same margin is applied to all spaces (`"grouped"`) or if each space has different margin (`"ungrouped"`); <br/>
`margin` - The margin value applied to all spaces when `marginType` is `"grouped"`; <br/>
`marginSuffix` - The unit for the uniform margin, either `"px"` for pixels or `"%"` for percentages; <br/>
`marginTop` - The margin value applied specifically to the top space; <br/>
`marginTopSuffix` - The unit for the top space margin, either `"px"` or `"%"`; <br/>
`marginRight` - The margin value applied specifically to the right space; <br/>
`marginRightSuffix` - The unit for the right space margin, either `"px"` or `"%"`; <br/>
`marginBottom` - The margin value applied specifically to the bottom space; <br/>
`marginBottomSuffix` - The unit for the bottom space margin, either `"px"` or `"%"`; <br/>
`marginLeft` - The margin value applied specifically to the left space; <br/>
`marginLeftSuffix` - The unit for the left space margin, either `"px"` or `"%"`; <br/>

### Usage

#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "margin", 
  type: "margin"
}
```

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "margin", 
  label: "Space",
  type: "margin"
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "margin", 
  type: "margin",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "margin", 
  type: "margin",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "margin", 
  type: "margin",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "margin", 
  type: "margin", 
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
      id: "margin",
      type: "margin",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Config value for `units` examples
The `units` property is set to `"%"`, indicating that the configuration values will be interpreted as percentages relative to the element's dimensions.

```js
{
  id: "margin", 
  type: "margin",
  config: {
    units: ["%"]
  }
}
```

#### Config value for `edges` examples
When the `edges` is `horizontal`, it will enable actions for `x` axis.
When the `edges` is `vertical`, it will enable actions for `y` axis.

```js
{
  id: "margin",
  type: "margin", 
  config: {
    edges: "horizontal"
  }
}
```

```js
{
  id: "margin",
  type: "margin", 
  config: {
    edges: "vertical"
  }
}
```
