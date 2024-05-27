---
toc_max_heading_level: 4
---

# Box Shadow

The `BoxShadow` control provides an interface to modify the CSS `box-shadow` property of elements.

Example of the control:

![Text Shadow Info](/img/multivalue-controls/boxShadowInfo.png)

1. Shadow dropdown menu - this dropdown menu allows you to choose whether to apply a shadow to the element or not. It has three options: `none` , `inset` and `outset`.
2. Color selector area - this is where you can pick the exact color by clicking on the desired point within the color gradient.
3. Hue slider - this vertical slider allows you to choose the hue (basic color) you want to work with.
4. Opacity slider - this slider lets you adjust the opacity of the selected color.
5. Color presets - these are preset color options from the global styles that you can quickly select.
6. Settings icon - opens sidebar with the global styles.
7. Hex color input - this area shows the hexadecimal color code of the selected color and allows you to input a specific hex code to choose a color directly. The eyedropper icon next to it lets you select any color from anywhere on the page by clicking on it.
8. Blur radius - this input field allows to specify the blur radius for the shadow.
9. Vertical offset - this input field allows to specify the vertical offset of the shadow.
10. Horizontal offset - this input field allows to specify the horizontal offset of the shadow.
11. Opacity offset - this input field allows to specify the opacity offset of the shadow.

Example of control with state `"normal"`:

![Box Shadow Normal](/img/multivalue-controls/boxShadow.png)

Example of control with state `"hover"`:

![Element Shadow Hover](/img/multivalue-controls/boxShadowHover.png)

Example of the control with dropdown opened:

![Element Shadow](/img/multivalue-controls/boxShadowDropdown.png)

| Name              | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                             |
| :---------------- | :--------------------------------------- | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`              | `string`                                 |      -       | The identifier of the key where the box shadow will save your data                                                                                                                                                                                                                                                                      |
| `type`            | `string`                                 |      -       | Type should be `"boxShadow"` to use this control                                                                                                                                                                                                                                                                                        |
| `position?`       | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                  |
| `devices?`        | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                        |
| `disabled?`       | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                  |
| `states?`         | `Array<State>`                           | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination) |
| `config?.type`    | `"none"` \| `"inset"` \| `"outset"`      |   `"none"`   | Specifies the type of box shadow. It determines how the shadow is displayed around the element. The types are: <br/> <br/> `"none"` - no shadow. <br/> `"inset"` - shadow is inside the element. <br/> `"outset"` - shadow is outside the element.                                                                                      |
| `config?.opacity` | `boolean`                                |    `true`    | Indicates whether the opacity setting is enabled for the box shadow. It determines if the box shadow's opacity can be adjusted.                                                                                                                                                                                                         |

### Return value

Returns an object with the following values:

```js
{
  blur: number;
  value: string;
  spread: number;
  hex: string;
  horizontal: string;
  opacity: number;
  palette: string | undefined;
  vertical: number;
}
```

`blur` - specifies the blur radius for the shadow; <br/>
`value` - indicates the current type of box shadow. It can take one of the following values: `"none"`, `"inset"` and `"outset"`;<br/>
`spread` - defines the spread radius of the shadow. Positive values will cause the shadow to expand and grow larger, while negative values will cause it to shrink;<br/>
`hex` - defines the color of the shadow in hexadecimal format; <br/>
`horizontal` - horizontal offset of the shadow; <br/>
`opacity` - indicates the opacity of the element itself, not the shadow; <br/>
`palette` - predefined palette from global styles; <br/>
`vertical` - vertical offset of the shadow; <br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "boxShadow",
  type: "boxShadow"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "boxShadow",
  type: "boxShadow",
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
      id: "boxShadow",
      type: "boxShadow",
      disabled: videoType === "custom",
    },
  ];
};
```

#### States examples

Allows the control to work in `"normal`" and `"hover"` states.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  states: ["normal", "hover"]
}
```

Allows the control to work in `"normal`", `"hover"` and `"active"` states.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  states: ["normal", "hover", "active"]
}
```

#### Config `type` example

The `config.type` parameter determines the type of shadow effect.<br/>
When the type is set to `"outset"`, the dropdown menu will only include `None` and `Outset` options.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  config: {
    type: "outset"
  }
}
```

#### Config `opacity` example

The `config.opacity` is set to `false`, indicating that the opacity setting for the box shadow is disabled.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  config: {
    opacity: false
  }
}
```
