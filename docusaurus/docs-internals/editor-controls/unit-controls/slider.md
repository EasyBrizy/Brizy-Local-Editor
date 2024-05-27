---
toc_max_heading_level: 4
---
# Slider

Slider control allows users to select a numerical value by dragging a slider handle. Developers can set minimum and maximum values, step intervals, and units of measurement. Additionally, the component supports both immediate and debounced updates to optimize performance and user experience.

Example of slider:

![Slider](/img/unit-controls/slider.png)

Example of slider with multiple units provided:

![Slider Pixels](/img/unit-controls/slider-px.png) ![Slider Pixels Dropdown](/img/unit-controls/slider-px-dropdown.png)

### Parameters

| Name                     | Type                                                                                                                                                                                       | Default  | Description                                                                                                                                                                                                                                                                                                                       |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                     | `string`                                                                                                                                                                                   |    -     | The identifier of the key where the slider will save your data                                                                                                                                                                                                                                                                    |
| `type`                   | `string`                                                                                                                                                                                   |    -     | Type should be `"slider"` to use this control                                                                                                                                                                                                                                                                                     |
| `label?`                 | `string`                                                                                                                                                                                   |    -     | The label displayed on the left side of the control                                                                                                                                                                                                                                                                               |
| `position?`              | `number`                                                                                                                                                                                   |    -     | The position of the control in toolbar                                                                                                                                                                                                                                                                                            |
| `devices?`               | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"`  | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                  |
| `disabled?`              | `boolean`                                                                                                                                                                                  | `false`  | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                            |
| `helper?.content`        | `string`                                                                                                                                                                                   |    -     | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                      |
| `helper?.position`       | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"`  | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                  |
| `config?.min`            | `number`                                                                                                                                                                                   |   `0`    | The minimum value that can be obtained by dragging the slider handle                                                                                                                                                                                                                                                              |
| `config?.max`            | `number`                                                                                                                                                                                   |  `100`   | The maximum value that can be obtained by dragging the slider handle                                                                                                                                                                                                                                                              |
| `config?.inputMin`       | `number`                                                                                                                                                                                   |    -     | The minimum value that can be entered directly into the input field. If the user inputs a value lower than this, it will be automatically corrected to this minimum value                                                                                                                                                         |
| `config?.inputMax`       | `number`                                                                                                                                                                                   |    -     | The maximum value that can be entered directly into the input field. If the user inputs a value higher than this, it will be automatically corrected to this maximum value                                                                                                                                                        |
| `config?.step`           | `number`                                                                                                                                                                                   |   `1`    | The step interval for changing the slider value                                                                                                                                                                                                                                                                                   |
| `config?.units`          | `Array<Unit>`                                                                                                                                                                              |  `[ ]`   | The units of measurement displayed next to the slider value. Accepts all possible CSS units (`"px"`, `"%"`, `"em"` and others) and your custom values <br/> <br/> <b>`Unit: { value: string; title: string; }`</b> <br/> <br/> `value` - a valid CSS unit or your custom value <br/> `title` - a text representation of the value |
| `config?.size`           | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           | `"auto"` | The size of the slider component                                                                                                                                                                                                                                                                                                  |
| `config?.debounceUpdate` | `boolean`                                                                                                                                                                                  | `false`  | Determines whether the UI is updated using debouncing instead of throttling                                                                                                                                                                                                                                                       |
| `config?.updateRate`     | `number`                                                                                                                                                                                   |   `50`   | The delay in milliseconds after which the UI responds to value changes                                                                                                                                                                                                                                                            |

### Return value

Control returns an object where `value` is the current `slider` value and `unit` is the current selected unit from the dropdown, if multiple units are available.

```js
{
  value: number;
  unit: string;
}
```

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "width",
  type: "slider"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "width",
  label: "Width",
  type: "slider"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "width",
  type: "slider", 
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "width",
  type: "slider", 
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "width",
  type: "slider", 
  devices: "responsive"
}
```

#### Disabled example

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "width",
  type: "slider", 
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
      id: "width",
      type: "slider",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Helper example

`content` serves as the tooltip's content and also determines whether the icon, which triggers the tooltip on hover, will be visible. If `content` is an empty string the icon will not display.

```js
{
  id: "width",
  type: "slider",
  helper: {
    content: "Helper" 
  }
}
```

`position` specifies the position of the tooltip relative to the icon.

```js
{
  id: "width",
  type: "slider",
  helper: {
    content: "Helper",
    position: "top-start"  
  }
}
```

#### Config minimum value example

The minimum value that can be obtained by dragging the slider handle.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    min: 0
  }
}
```

#### Config maximum value example

The maximum value that can be obtained by dragging the slider handle.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    max: 0
  }
}
```

#### Config input minimum value example

Specifies the minimum number you can type in input field. If the user inputs a value lower than this, it will be automatically corrected to this minimum value.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    inputMin: 0
  }
}
```

#### Config input maximum value example

Specifies the maximum number you can type in input field. If the user inputs a value higher than this, it will be automatically corrected to this maximum value.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    inputMax: 100
  }
}
```

#### Config step example

The step interval for changing the slider value by dragging the slider handle.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    step: 2
  }
}
```

#### Config multiple units example

The units of measurement displayed next to the slider value. Accepts CSS units like `"px"`, `"em"`, `"%"`, `"vh"`, `"vw"`, and so on.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    units: [{ value: "px", title: "px" }, { value: "%", title: "%" }]
  }
}
```

#### Config size example

The size of the slider component, can be `"small"`, `"medium"`, or `"large"`.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    size: "medium"
  }
}
```

#### Config debounce update and update rate example

Determines whether the slider value is updated using debouncing instead of throttling. When set to `true`, the slider value will update only after a period of inactivity, defined by updateRate.

```js
{
  id: "width",
  type: "slider", 
  config: { 
    debounceUpdate: true, 
    updateRate: 500
  }
}
```
