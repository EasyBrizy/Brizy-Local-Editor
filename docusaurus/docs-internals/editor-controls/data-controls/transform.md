---
toc_max_heading_level: 4
---

# Transform

Brizy's `transform` control provides users with the ability to quickly and easily adjust the position of any component within their design. This feature streamlines the editing process, allowing for precise placement and real-time adjustments to enhance the overall layout and user experience.

Example of the `transform`:

![Transform](/img/controls/transform.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the `transform` will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"transform"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `config?.disabled` | `Array<Effect>`                                                                                                                                                                            |     `[]`     | Given a list within which you could disable the effect. <br/> <br/> <b> Effect = `"vertical"` \| `"horizontal"` \| `"transparency"` \| `"blur"` \| `"rotate"` \| `"scale"` \| `"mouseTrack"` \| `"mouseTilt"` </b>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { active: Active; rotateRotate: number; rotateRotate3D: boolean; rotateRotateX: number; rotateRotateY: number; rotateRotatePerspective: number; rotateEnabled: boolean; offsetOffsetX: number; offsetOffsetY: number; offsetEnabled: boolean; skewSkewX: number; skewSkewY: number; skewEnabled: boolean; scaleScaleX: number; scaleScaleY: number; scaleScaleXY: number; scaleScalePreservedSize: boolean; scaleEnabled: boolean; flipFlipHorizontal: boolean; flipFLipVertical: boolean; flipEnabled: boolean;}` </b><br/><br/>`active` - indicates the currently selected transformation, which can be `"rotate"`, `"offset"`, `"skew"`, `"scale"`, `"flip"`, or `undefined` <br/> `Active: {undefined \| "rotate" \| "offset" \| "skew" \| "scale" \| "flip"}`<br/><br/> `rotateRotate`- the angle of rotation in degrees. <br/> `rotateRotate3D` - indicating if 3D rotation is enabled. <br/> `rotateRotateX`- angle for rotation around the X axis. <br/> `rotateRotateY` - angle for rotation around the Y axis. <br/> `rotateRotatePerspective` - perspective value for the 3D rotation. <br/> `rotateEnabled` - indicating if rotate effect is enabled. <br/><br/> `offsetOffsetX` - the degree of horizontal offset. <br/> `offsetOffsetY` - the degree of vertical offset. <br/>`offsetEnabled` - indicating if offset effect is enabled. <br/><br/> `skewSkewX`- the skew angle along the X axis. <br/> `skewSkewY` - the skew angle along the Y axis. <br/> `skewEnabled` - indicating if skew effect is enabled. <br/><br/> `scaleScaleX` - the scale factor along the X axis. <br/> `scaleScaleY` - the scale factor along the Y axis. <br/> `scaleScalePreservedSize` - indicating if the size should be preserved during scaling. <br/> `scaleXY` - a uniform scale factor applied to both axes. <br/> `scaleEnabled` - indicating if scale effect is enabled. <br/><br/> `flipFlipHorizontal` - indicating if the object should be flipped horizontally. <br/> `flipFlipVertical` - indicating if the object should be flipped vertically. `flipEnabled` - indicating if flip effect is enabled.           |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `transform: scale(${value.scale.scaleX},${value.scale.scaleY}) `<br/>  `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "effect",
  type: "transform"
}
```

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

Example of value when the option `"rotate"` is selected:

```js
{
  active: "rotate",
  rotateEnabled: true  
}
```

When the settings of `"rotate"` are changed:

```js
{
  rotateRotate: 100,
  rotateRotate3D: false,
  rotateRotatePerspective: 1000,
  rotateRotateX: 0, 
  rotateRotateY: 0
}
```

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "effect",
  type: "transform",
  label: "Transform"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "effect",
  type: "transform"
  className: "brz-transform"
}
```

#### Icon example

Adding an "effects" icon to the left of the control's label.

```js
{
  id: "effect",
  type: "transform",
  icon: "nc-effects"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "effect",
  type: "transform",
  roles: ["admin", "designer"]
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
#### Helper examples
The helper object contains a content property with the value `"help text"`, which will be displayed as additional
guidance or information for the user.

```js
{
  id: "effect",
  type: "transform",
  helper: {
    content: "this is the transform control"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will
be displayed at the top left corner of the icon.

```js
{
  id: "effect",
  type: "transform",
  helper: {
    content: "help text",
    position: "top-start"
  }
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


#### Default value example

In this example, the `transform` control that has the value `{active: "rotate"}` will have the option rotate active

```js
{
  id: "effect",
  type: "transform",
  default: {
    active: "rotate"
  }
}
```

The `transform` control with all the default values set look like this:

```js
{
  id: "effect",
  type: "transform",
  default: {
    active: "offset",
    offsetOffsetX: 2,
    offsetOffsetY: 3,
    offsetEnabled: true,
    rotateRotate: 35,
    rotateRotate3D: true,
    rotateRotateX: 0,
    rotateRotateY: 0,
    rotateRotatePerspective: 0,
    rotateEnabled: true,
    skewEnabled: true,
    skewSkewX: 10,
    skewSkewY: 2,
    scaleEnabled: false,
    scaleScaleX: 0.3,
    scaleScaleY: 0.1,
    flipFlipHorizontal: false,
    flipFlipVertical: true,
    flipEnabled: false
  }
}
```

#### CSS example
Add transform rotate value to wrapper element . 
  
```js
  {
    id: "effect",
    type: "transform",
    style: ({ value }) => {
      const { offset, flip, rotate, scale, skew } = value;
      let transform = "";
  
      if (offset)
        transform += `translate(${offset.offsetX}px, ${offset.offsetY}px)`;
      if (rotate) transform += `rotate(${rotate.rotate}deg)`;
      if (scale)
        transform += `scale(${scale.scaleX}, ${scale.scaleY})`;
      if (skew)
        transform += `skew(${skew.skewX}deg, ${skew.skewY}deg)`;
      if (flip)
        transform += `scaleX(${flip.flipHorizontal ? -1 : 1}) scaleY(${flip.flipVerical ? -1 : 1})`;
  
      return { "{{WRAPPER}}": { transform } };
    }
  }
```

#### Usage in HTML example

In the example below, we use the `transform` output value for rotate and offset effects to add transform style in html element .

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  effectRotateRotate: number;
  effectOffsetOffsetX: number;
  effectOffsetOffsetY: number;
}

const Component = (props: Props): JSX.Element => {
  const { effectRotateRotate, effectOffsetOffsetX, effectOffsetOffsetY } = props;

  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    transform: `rotate(${effectRotateRotate}deg) translate(${effectOffsetOffsetX}px, ${effectOffsetOffsetY}px)`
  };

  return (
    <div className="brz-wrapper-transform">
      <div style={style}>Content</div>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Component",
  component: { editor: Component, view: Component },
  title: "My Component",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-wrapper-transform",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            devices: "desktop",
            options: [
              {
                id: "effect",
                type: "transform",
              }
            ]
          }
        ]
      }
    ];
  }
});
```
