---
toc_max_heading_level: 4
---
# Border

The `border` control designed to provide flexible styling options for the border of an element. It allows you to customize the color, style, opacity, and width of the border as a whole, or individually for each side (top, right, bottom, left).

Example of the control:

![Border](/img/controls/border.png)

1. Border style dropdown menu - this dropdown menu allows you to choose which style to apply to the border. By default, it has 9 options.
2. Color selector area - this is where you can pick the exact color by clicking on the desired point within the color gradient.
3. Hue slider - this vertical slider allows you to choose the hue (basic color) you want to work with.
4. Opacity slider - this slider lets you adjust the opacity of the selected color.
5. Color presets - these are preset color options from global styles that you can quickly select.
6. Settings icon - opens sidebar with the global styles.
7. Hex color input - this area shows the hexadecimal color code of the selected color and allows you to input a specific hex code to choose a color directly. The eyedropper icon next to it lets you select any color from anywhere on the page by clicking on it.
8. Border width - this input field allows you to specify the border width.
9. Border width type - this icon allows to choose between changing border width for all sides at once or each side individually.

Example of the control with dropdown to select border style:

![Border Style Dropdown](/img/controls/border-style-dropdown.png)

Example of the control with 4 input fields to specify border width for each side:

![Border Ungrouped Width Inputs](/img/controls/border-width-type.png)

Example of the control with state `"hover"`:

![Border Hover](/img/controls/border-hover.png)

### Parameters

| Name              | Type                                     |                                               Default                                                | Description                                                                                                                                                                                                                                                                                                                                          |
|:------------------|:-----------------------------------------|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`              | `string`                                 |                                                  -                                                   | The identifier of the key where the border will save your data                                                                                                                                                                                                                                                                                       |
| `type`            | `string`                                 |                                                  -                                                   | Type should be `"border"` to use this control                                                                                                                                                                                                                                                                                                        |
| `position?`       | `number`                                 |                                                  -                                                   | The position of the control in toolbar                                                                                                                                                                                                                                                                                                               |
| `devices?`        | `"all"` \| `"desktop"` \| `"responsive"` |                                               `"all"`                                                | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                     |
| `disabled?`       | `boolean`                                |                                               `false`                                                | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                               |
| `states?`         | `Array<State>`                           |                                             `["normal"]`                                             | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)              |
| `config?.styles`  | `Array<Style>`                           | `["none","solid",`<br/>`"dashed","dotted",`<br/>`"double","groove",`<br/>`"ridge","inset","outset"]` | Defines the available border styles that can be applied. By default, it includes 9 styles, which are all CSS `border-style` values <br/> <br/> <b>`Style = "none" \| "solid" \| "dashed" \| "dashed" \| "dotted" \| "double" \| "groove" \| "ridge" \| "inset" \| "outset"`</b>                                                                      |
| `config?.width`   | `Array<WidthType>`                       |                                      `["grouped", "ungrouped"]`                                      | Allows specifying whether the width of the border can be changed individually for each side or as a whole <br/> <br/> <b>`WidthType = "grouped" \| "ungrouped"`</b> <br/><br/> `"grouped"` - allows changing the width of the border for all sides at once, <br/> `"ungrouped"` - allows changing the width of the border individually for each side |
| `config?.opacity` | `boolean`                                |                                                `true`                                                | Controls whether the opacity of the border can be changed                                                                                                                                                                                                                                                                                            |


### Return value

Returns an object with the following values:

```js
{
  bottomWidth: number;
  hex: string;
  leftWidth: number;
  opacity: number;
  palette: string;
  rigthWidth: number;
  style: string;
  topWidth: number;
  width: number;
  widthType: "grouped" | "ungrouped";
}
```

`bottomWidth` - the width of the bottom border; <br/>
`hex` - the color of the border in hexadecimal format; <br/>
`leftWidth` - the width of the left border; <br/>
`opacity` - specifies the opacity of the border; <br/>
`palette` - a predefined palette from global styles; <br/>
`rightWidth` - the width of the right border; <br/>
`style` - the current style of the border; <br/>
`topWidth` - the width of the top border; <br/>
`width` - value which is applied for all sides of the border (changes when `"widthType"` is `"grouped"`); <br/>
`widthType` - the current width type;

### Usage


#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "border", 
  type: "border"
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "border", 
  type: "border",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "border", 
  type: "border",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "border", 
  type: "border",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "border", 
  type: "border", 
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
      id: "border",
      type: "border",
      disabled: videoType === "custom"
    }
  ]
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "border",
  type: "border", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "border",
  type: "border",
  states: ["normal", "hover", "active"]
}
```

#### Config styles example

Defines the available border styles that will be available to select.

```js
{
  id: "border",
  type: "border",
  config: {
    styles: ["none", "solid"]
  }
}
```

#### Config width example

Allows specifying whether the width of the border can be changed individually for each side or as a whole. In this case you will not have a possibility to change the sides of the border separately.

```js
{
  id: "border",
  type: "border",
  config: {
    width: ["grouped"]
  }
}
```

#### Config opacity example

Controls whether the opacity of the border can be changed.

```js
{
  id: "border",
  type: "border",
  config: {
    opacity: false
  }
}
```
