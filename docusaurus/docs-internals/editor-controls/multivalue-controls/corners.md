---
toc_max_heading_level: 4
---

# Corners

The `corners` control provides an interface to modify the CSS `border-radius` property of elements.

Example of grouped control:<br/>
![CornersGrouped](/img/multivalue-controls/cornerGrouped.png)<br/>
![CornersGrouped](/img/multivalue-controls/cornerGroupedSecond.png)<br/><br/>
Example of ungrouped control:<br/>
![CornersUngrouped](/img/multivalue-controls/cornerUngrouped.png)

| Name            | Type                                     |   Default    | Description                                                                                                                                                                                                                      |
| :-------------- | :--------------------------------------- | :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `string`                                 |      -       | The identifier of the key where the corners will save your data                                                                                                                                                                  |
| `type`          | `string`                                 |      -       | Type should be `"corners"` to use this control                                                                                                                                                                                   |
| `label?`        | `string`                                 |      -       | The label displayed on the left side of the control                                                                                                                                                                              |
| `position?`     | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                           |
| `devices?`      | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices |
| `disabled?`     | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                           |
| `config?.units` | `Array<Unit>`                            | `["px","%"]` | The units of measurement displayed next to the slider value.<br/> Accepts CSS units (`"px"`, `"%"`) <br/> <br/> <b>`Unit = "px" \| "%"`</b>                                                                                      |

### Return value

Returns an object with the following values:

```js
{
  radiusType: "grouped" | "ungrouped",
  radius: number,
  radiusSuffix: "px" | "%",
  topLeftRadius: number,
  topLeftRadiusSuffix: "px" | "%",
  topRightRadius: number,
  topRightRadiusSuffix: "px" | "%",
  bottomRightRadius: number,
  bottomRightRadiusSuffix: "px" | "%",
  bottomLeftRadius: number,
  bottomLeftRadiusSuffix: "px" | "%"
}
```

`radiusType`- Indicates if the same radius is applied to all corners (`"grouped"`) or if each corner has a different radius (`"ungrouped"`); <br/>
`radius`- The radius value applied to all corners when `radiusType` is `"grouped"`; <br/>
`radiusSuffix` - The unit for the uniform radius, either `"px"` for pixels or `"%"` for percentages; <br/>
`topLeftRadius` - The radius value applied specifically to the top-left corner; <br/>
`topLeftRadiusSuffix`- The unit for the top-left corner radius, either `"px"` or `"%"`; <br/>
`topRightRadius`- The radius value applied specifically to the top-right corner; <br/>
`topRightRadiusSuffix` - The unit for the top-right corner radius, either `"px"` or `"%"`; <br/>
`bottomRightRadius` - The radius value applied specifically to the bottom-right corner; <br/>
`bottomRightRadiusSuffix` - The unit for the bottom-right corner radius, either `"px"` or `"%"`; <br/>
`bottomLeftRadius` - The radius value applied specifically to the bottom-left corner; <br/>
`bottomLeftRadiusSuffix` - The unit for the bottom-left corner radius, either `"px"` or `"%"`; <br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "radius",
  type: "corners"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "radius",
  type: "corners",
  label: "Corner"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "radius",
  type: "corners",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "radius",
  type: "corners",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "radius",
  type: "corners",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "radius",
  type: "corners",
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
      id: "radius",
      type: "corners",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Config units example

The `config.units` property is set to `"%"`, indicating that the configuration values will be interpreted as percentages relative to the element's dimensions.

```js
{
  id: "radius",
  type: "corners",
  config: {
    units: ["%"]
  }
}
```
