---
toc_max_heading_level: 4
---
# Background Color

The `backgroundColor` control provides an interface for selecting and customizing background colors, including solid colors and gradients. This component includes a variety of options to fine-tune the color selection, including opacity, gradient type, and the ability to input specific color values.

Example of the control:

![Background Color](/img/multivalue-controls/background-color.png)

1. Background type dropdown menu - this dropdown menu allows you to choose which type to apply to the background. It has 3 options: `None`, `Solid` and `Gradient`.
2. Color selector area - this is where you can pick the exact color by clicking on the desired point within the color gradient.
3. Hue slider - this vertical slider allows you to choose the hue (basic color) you want to work with.
4. Opacity slider - this slider lets you adjust the opacity of the selected color.
5. Color presets - these are preset color options from global styles that you can quickly select.
6. Settings icon - opens sidebar with the global styles.
7. Hex color input - this area shows the hexadecimal color code of the selected color and allows you to input a specific hex code to choose a color directly. The eyedropper icon next to it lets you select any color from anywhere on the page by clicking on it.

Example of the control with the `Gradient` type:

![Background Color Gradient Type](/img/multivalue-controls/background-color-gradient.png)

1. Gradient colors slider - this horizontal slider shows the current colors used in the gradient.
2. Gradient start handle - this handle allows you to select the starting color of the gradient on the gradient colors slider. It is currently selected, indicated by the circle inside it.
3. Gradient end handle - this handle allows you to select the ending color of the gradient on the gradient colors slider. It is not currently selected.
4. Gradient type dropdown - this dropdown menu allows you to choose gradient type. It has 2 options: `Linear` and `Radial`.
5. Gradient angle - this input field allows you to specify the angle for the gradient.

Example of the control with dropdown opened:

![Background Color Type Dropdown](/img/multivalue-controls/background-color-type-dropdown.png)

Example of the control with state `"hover"`:

![Background Color](/img/multivalue-controls/background-color-hover.png)

### Parameters

| Name               | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                    |
|:-------------------|:-----------------------------------------|:------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                 |      -       | The identifier of the key where the background color will save your data                                                                                                                                                                                                                                                       |
| `type`             | `string`                                 |      -       | Type should be `"backgroundColor"` to use this control                                                                                                                                                                                                                                                                         |
| `position?`        | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                         |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                               |
| `disabled?`        | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                         |
| `states?`          | `Array<State>`                           | [`"normal"`] | Allows the control to work in different states. <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination) |
| `config?.opacity`  | `boolean`                                |    `true`    | Controls whether the opacity of the background color can be changed. If set to `false`, the opacity slider will not be rendered.                                                                                                                                                                                               |
| `config?.withNone` | `boolean`                                |    `true`    | Determines whether the `None` option is included in the dropdown menu for background type                                                                                                                                                                                                                                      |


### Return value

Returns an object with the following values:

```js
{
  active: "start" | "end";
  gradientHex: string;
  gradientOpacity: number;
  gradientPalette: string;
  degree: number;
  end: number;
  gradientType: "linear" | "radial";
  hex: string;
  opacity: number;
  palette: string;
  start: number;
  type: "solid" | "gradient";
}
```

`active` - a string indicating the currently selected handle when changing the start or end color of the gradient. It can be either `"start"` or `"end"`; <br/>
`gradientHex` - a string representing the hex code of the selected color for the end handle of the gradient; <br/>
`gradientOpacity` - the opacity level of the color for the end handle of the gradient, ranging from `0` (completely transparent) to `1` (completely opaque); <br/>
`gradientPalette` - a predefined palette from the global styles for the end handle of the gradient; <br/>
`degree` - a number representing the angle of the gradient in degrees; <br/>
`end` - a number indicating the position of the handle for the end color of the gradient on the gradient colors slider, where `100` represents the end of the slider and `0` represents the start; <br/>
`gradientType` - a string that specifies the type of gradient. It can be either `"linear"` for a linear gradient or `"radial"` for a radial gradient; <br/>
`hex` - a string representing the hex code of the selected color; <br/>
`opacity` - a number representing the opacity level of the selected color, ranging from `0` (completely transparent) to `1` (completely opaque). <br/>
`palette` - a predefined palette from the global styles; <br/>
`start` - a number indicating the position of the handle for the start color of the gradient on the gradient colors slider, where `100` represents the end of the slider and `0` represents the start; <br/>
`type` - a string that specifies the type of background color. It can be either `"solid"` for a solid color or `"gradient"` for a gradient color;

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "backgroundColor", 
  type: "backgroundColor"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "backgroundColor", 
  type: "backgroundColor",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "backgroundColor", 
  type: "backgroundColor",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "backgroundColor", 
  type: "backgroundColor",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "backgroundColor", 
  type: "backgroundColor", 
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
      id: "backgroundColor",
      type: "backgroundColor",
      disabled: videoType === "custom"
    }
  ]
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "backgroundColor",
  type: "backgroundColor", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "backgroundColor",
  type: "backgroundColor", 
  states: ["normal", "hover", "active"]
}
```

#### Config `opacity` example

Controls whether the opacity of the border can be changed. If set to `false`, the opacity slider will not be rendered.

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  config: {
    opacity: false
  }
}
```

#### Config `withNone` example

Determines whether the `None` option is included in the dropdown menu for background type.

```js
{
  id: "backgroundColor",
  type: "backgroundColor",
  config: {
    withNone: false
  }
}
```
