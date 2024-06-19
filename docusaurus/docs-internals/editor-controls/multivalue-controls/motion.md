---
toc_max_heading_level: 4
---
# Motion

The `motion` control provides access to 8 predefined animations that are triggered when the page is scrolled. These animations include vertical movement, horizontal movement, transparency changes, blur effects, rotation, scaling, mouse tracking, and mouse tilting.

Example of the control:

![Motion](/img/multivalue-controls/motion.png)

Example of the control with `"horizontal"` animation selected:

![Motion](/img/multivalue-controls/motion-horizontal.png)

### Parameters

| Name               | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                                                        |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |    -    | The identifier of the key where the `"motion"` will save your data                                                                                                                                                                                                 |
| `type`             | `string`                                                                                                                                                                                   |    -    | Type should be `"motion"` to use this control                                                                                                                                                                                                                      |
| `label?`           | `string`                                                                                                                                                                                   |    -    | The label displayed on the top side of the control                                                                                                                                                                                                                 |
| `position?`        | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                                                             |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                   |
| `disabled?`        | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                             |
| `helper?.content`  | `string`                                                                                                                                                                                   |    -    | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                       |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                  |
| `config?.disabled` | `Array<Effect>`                                                                                                                                                                            |  `[ ]`  | An array of animation names that should be disabled. They will not disappear from the list, but they cannot be selected <br/> <br/> <b>`Effect = "vertical" \| "horizontal" \| "transparency" \| "blur" \| "rotate" \| "scale" \| "mouseTrack" \| "mouseTilt"`</b> |

### Return value

Returns an object with the following values:

```js
{
  active: undefined | "vertical" | "horizontal" | "transparency" | "blur" | "rotate" | "scale" | "mouseTrack" | "mouseTilt";
  vertical: undefined | { speed: number; direction: "up" | "down"; viewport: { bottom: number; top: number; type: "viewport"; } };
  horizontal: undefined | { speed: number; direction: "left" | "right"; viewport: { bottom: number; top: number; type: "viewport"; } };
  transparency: undefined | { direction: "in" | "out" | "outIn" | "inOut"; level: number; viewport: { bottom: number; top: number; type: "viewport"; } };
  blur: undefined | { direction: "in" | "out" | "outIn" | "inOut"; level: number; viewport: { bottom: number; top: number; type: "viewport"; } };
  rotate: undefined | { direction: "left" | "right"; x: "left" | "center" | "right"; y: "top" | "center" | "bottom"; speed: number; viewport: { bottom: number; top: number; type: "viewport"; } };
  scale: undefined | { direction: "up" | "down" | "downUp" | "upDown"; speed: number; x: "left" | "center" | "right"; y: "top" | "center" | "bottom"; viewport: { bottom: number; top: number; type: "viewport"; } };
  mouseTrack: undefined | { direction: "direct" | "opposite"; speed: number; };
  mouseTilt: undefined | { direction: "direct" | "opposite"; speed: number; };
}
```

`active` - indicates the currently selected animation; <br/>

All other object values are the animation names, which contain general parameters:

`speed` - the speed of the animation movement; <br/>
`direction` - the direction of the animation movement; <br/>
`viewport` - information about viewport: offset top and bottom; <br/>
`level` - indicates the effect (transparency, blur) strength; <br/>
`x, y` - indicates on which side of the axis the animation will start;

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "motion",
  type: "motion"
}
```

#### Label example

Adds a label to the top of the list of animations.

```js
{
  id: "motion",
  label: "Motion",
  type: "motion"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "motion",
  type: "motion",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "motion",
  type: "motion",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "motion",
  type: "motion",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "motion",
  type: "motion", 
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
      id: "motion",
      type: "motion",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "motion",
  type: "motion",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed in the top left corner of the icon.

```js
{
  id: "motion",
  type: "motion",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### Config `disabled` example

An array of animation names that should be disabled. In this case, you cannot select `"vertical"` and `"scale"` animations.

```js
{
  id: "motion",
  type: "motion",
  config: {
    disabled: ["vertical", "scale"]
  }
}
```
