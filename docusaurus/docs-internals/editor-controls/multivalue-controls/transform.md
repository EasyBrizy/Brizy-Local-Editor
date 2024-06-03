---
toc_max_heading_level: 4
---

# Transform

Brizy's `transform` control provides users with the ability to quickly and easily adjust the position of any component within their design. This feature streamlines the editing process, allowing for precise placement and real-time adjustments to enhance the overall layout and user experience.

Example of the `transform`:

![Transform](/img/multivalue-controls/transform.png)

### Parameters

| Name               | Type          |    Default    | Description                                                                                               |
|:-------------------|:--------------|:-------------:|:----------------------------------------------------------------------------------------------------------|
| `id`               | `string`      |       -       | The identifier of the key where the transform will save your data                                         |
| `type`             | `string`      |       -       | Type should be `"transform"` to use this control                                                          |
| `label?`           | `string`      |       -       | The label displayed on the left side of the control                                                       |
| `position?`        | `number`      |       -       | The position of the control in toolbar                                                                    |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`  | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`        | `boolean`     |    `false`    | Configure the condition under which the control is disabled or enabled.                                   |
| `config?.disabled` | `Array<Effect>` |     `[]`      | Given a list within which you could disable the effect. <br/> <br/> <b> Effect = `"vertical"` \| `"horizontal"` \| `"transparency"` \| `"blur"` \| `"rotate"` \| `"scale"` \| `"mouseTrack"` \| `"mouseTilt"` </b> |

### Return value

Returns an object with the following values:

```js
{
  active: undefined | "rotate" | "offset" | "skew" | "scale" | "flip";
  rotate: undefined | { rotate: number, rotate3D: boolean, rotateX: number, rotateY: number, rotatePerspective: number };
  offset: undefined | { offsetX: number, offsetY: number };
  skew: undefined | { skewX: number, skewY: number };
  scale: undefined | { scaleX: number, scaleY: number, scalePreserveSize: boolean, scaleXY: number };
  flip: undefined | { flipHorizontal: boolean, flipHorizontal: boolean };
}
```

- `active` - indicates the currently selected transformation, which can be `"rotate"`, `"offset"`, `"skew"`, `"scale"`, `"flip"`, or `undefined`. <br/>
- `rotate` - the property in CSS, applies a rotation transformation to an element by a specified angle around a default fixed point, typically the center of the element. <br/>
  - `rotate` - the angle of rotation in degrees. <br/>
  - `rotate3D` - indicating if 3D rotation is enabled. <br/>
  - `rotateX` - angle for rotation around the X axis. <br/>
  - `rotateY` - angle for rotation around the Y axis. <br/>
  - `rotatePerspective` - perspective value for the 3D rotation. <br/>
- `offset` - defines parameters for moving an object horizontally and vertically. <br/>
  - `offsetX` - the degree of horizontal offset. <br/>
  - `offsetY` - the degree of vertical offset. <br/>
- `skew` - defines parameters for skewing an object along the X and Y axes. <br/>
  - `skewX` - the skew angle along the X axis. <br/>
  - `skewY` - the skew angle along the Y axis. <br/>
- `scale` - defines parameters for scaling an object. <br/>
  - `scaleX` - the scale factor along the X axis. <br/>
  - `scaleY` - the scale factor along the Y axis. <br/>
  - `scalePreserveSize` - indicating if the size should be preserved during scaling. <br/>
  - `scaleXY` - a uniform scale factor applied to both axes. <br/>
- `flip` - defines parameters for flipping an object horizontally or vertically. <br/>
  - `flipHorizontal` - indicating if the object should be flipped horizontally. <br/>
  - `flipVertical` - indicating if the object should be flipped vertically. <br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "effect",
  type: "transform"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "effect",
  type: "transform",
  label: "Transform"
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "effect",
  type: "transform",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "effect",
  type: "transform",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "effect",
  type: "transform",
  devices: "responsive"
}
```

#### Disabled example

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "effect",
  type: "transform",
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
      id: "effect",
      type: "transform",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Config `disabled` example

The effects `"skew"` and `"flip"` will be disabled.

```js
{
 id: "effect",
 type: "transform",
 config: {
   disabled: ["skew", "flip"]
 }
}
```
