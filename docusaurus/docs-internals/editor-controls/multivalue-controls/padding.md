---
sidebar_position: 1
toc_max_heading_level: 4
---
# Padding

The padding control in Brizy provides a set of sliders that allow you to adjust the padding of a component in four directions: top, bottom, left, and right.

Example of grouped control:

![GroupedUnits](/img/multivalue-controls/paddingGroupUnits.png)
![Grouped](/img/multivalue-controls/paddingGroup.png)

Example of ungrouped control:

![Ungrouped](/img/multivalue-controls/paddingUngroup.png)

### Parameters

| Name            | Type                                    |    Default    | Description                                                                                                                    |
|:----------------|:----------------------------------------|:-------------:|:-------------------------------------------------------------------------------------------------------------------------------|
| `id`            | `string`                                |       -       | The identifier of the key where the padding will save your data                                                                |
| `type`          | `string`                                |       -       | Type should be `"padding"` to use this control                                                                                 |
| `label?`        | `string`                                |       -       | The label displayed on the left side of the control                                                                            |
| `position?`     | `number`                                |       -       | The position of the control in toolbar                                                                                         |
| `devices?`      | `"all"` \|`"desktop"`  \|    `"responsive"`  |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`     | `boolean`                               |    `false`    | Configure the condition under which the control is disabled or enabled.                                                        |
| `config?.units` | `Array<Unit>`                    | `["px","%"]`  | The units of measurement displayed next to the slider value.<br/> Accepts CSS units (`"px"`, `"%"`) <br/> <br/> `Unit = "px" \| "%"` |

### Return value

Returns an object with the following values:

```js
{
  paddingType: "grouped" | "ungrouped";
  padding: number;
  paddingSuffix: "px" | "%";
  paddingTop: number;
  paddingTopSuffix: "px" | "%";
  paddingRight: number;
  paddingRightSuffix: "px" | "%";
  paddingBottom: number;
  paddingBottomSuffix: "px" | "%";
  paddingLeft: number;
  paddingLeftSuffix: "px" | "%";
}
```

`paddingType` - Indicates if the same padding is applied to all spaces (`"grouped"`) or if each space has different padding (`"ungrouped"`); <br/>
`padding` - The padding value applied to all spaces when `paddingType` is `"grouped"`; <br/>
`paddingSuffix` - The unit for the uniform padding, either `"px"` for pixels or `"%"` for percentages; <br/>
`paddingTop` - The padding value applied specifically to the top space; <br/>
`paddingTopSuffix` - The unit for the top space padding, either `"px"` or `"%"`; <br/>
`paddingRight` - The padding value applied specifically to the right space; <br/>
`paddingRightSuffix` - The unit for the right space padding, either `"px"` or `"%"`; <br/>
`paddingBottom` - The padding value applied specifically to the bottom space; <br/>
`paddingBottomSuffix` - The unit for the bottom space padding, either `"px"` or `"%"`; <br/>
`paddingLeft` - The padding value applied specifically to the left space; <br/>
`paddingLeftSuffix` - The unit for the left space padding, either `"px"` or `"%"`; <br/>

### Usage

#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "padding", 
  type: "padding"
}
```

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "padding", 
  label: "Space",
  type: "padding"
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "padding", 
  type: "padding",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "padding", 
  type: "padding",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "padding", 
  type: "padding",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "padding", 
  type: "padding", 
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
      id: "padding",
      type: "padding",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Config value for `units` examples
The `units` property is set to `"%"`, indicating that the configuration values will be interpreted as percentages relative to the element's dimensions.

```js
{
  id: "padding", 
  type: "padding",
  config: {
    units: ["%"]
  }
}
```
