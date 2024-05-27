---
toc_max_heading_level: 4
---
# Text Shadow

The `textShadow` control provides an interface to modify the CSS `text-shadow` property of text elements.

Example of the control:

![Text Shadow](/img/multivalue-controls/text-shadow.png)

1. Shadow dropdown menu - this dropdown menu allows you to choose whether to apply a shadow to the text or not. It has two options: `None` and `Shadow`. 
2. Color selector area - this is where you can pick the exact color by clicking on the desired point within the color gradient.
3. Hue slider - this vertical slider allows you to choose the hue (basic color) you want to work with.
4. Opacity slider - this slider lets you adjust the opacity of the selected color.
5. Color presets - these are preset color options from the global styles that you can quickly select.
6. Settings icon - opens sidebar with the global styles.
7. Hex color input - this area shows the hexadecimal color code of the selected color and allows you to input a specific hex code to choose a color directly. The eyedropper icon next to it lets you select any color from anywhere on the page by clicking on it.
8. Blur radius - this input field allows to specify the blur radius for the shadow.
9. Vertical offset - this input field allows to specify the vertical offset of the shadow.
10. Horizontal offset - this input field allows to specify the horizontal offset of the shadow.

Example of the control with state `"hover"`:

![Text Shadow Hover](/img/multivalue-controls/text-shadow-hover.png)

Example of the control with dropdown opened:

![Text Shadow](/img/multivalue-controls/text-shadow-dropdown.png)

| Name        | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                             |
|:------------|:-----------------------------------------|:------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                 |      -       | The identifier of the key where the text shadow will save your data                                                                                                                                                                                                                                                                     |
| `type`      | `string`                                 |      -       | Type should be `"textShadow"` to use this control                                                                                                                                                                                                                                                                                       |
| `position?` | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                  |
| `devices?`  | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                        |
| `disabled?` | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                  |
| `states?`   | `Array<State>`                           | [`"normal"`] | Allows the control to work in different states. <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination) |

### Return value

Returns an object with the following values:

```js
{
  blur: number;
  hex: string;
  horizontal: string;
  opacity: number;
  palette: string | undefined;
  vertical: number;
}
```
`blur` - specifies the blur radius for the shadow; <br/>
`hex` - defines the color of the shadow in hexadecimal format; <br/>
`horizontal` - horizontal offset of the shadow; <br/>
`opacity` - indicates the opacity of the shadow; <br/>
`palette` - predefined palette from global styles; <br/>
`vertical` - vertical offset of the shadow; <br/>


### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "textShadow",
  type: "textShadow"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "textShadow",
  type: "textShadow",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "textShadow",
  type: "textShadow",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "textShadow",
  type: "textShadow",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "textShadow",
  type: "textShadow", 
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
      id: "textShadow",
      type: "textShadow",
      disabled: videoType === "custom"
    }
  ]
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "textShadow",
  type: "textShadow", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "textShadow",
  type: "textShadow", 
  states: ["normal", "hover", "active"]
}
```
