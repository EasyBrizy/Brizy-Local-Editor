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

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                               |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the `"motion"` will save your data                                                                                                                                                                                                                                                                                                                                                                        |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"motion"` to use this control                                                                                                                                                                                                                                                                                                                                                                                             |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the top side of the control                                                                                                                                                                                                                                                                                                                                                                                        |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                   |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                    |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                             | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                          |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                                    |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                                              |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                                         |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                   |
| `config?.disabled` | `Array<Effect>`                                                                                                                                                                            |    `[ ]`     | An array of animation names that should be disabled. They will not disappear from the list, but they cannot be selected <br/> <br/> <b>`Effect = "vertical" \| "horizontal" \| "transparency" \| "blur" \| "rotate" \| "scale" \| "mouseTrack" \| "mouseTilt"`</b>                                                                                                                                                                        |
| `default?`         | `Default`                                                                                                                                                                                  |       -      | The default control value. <br/> <br/> <b>`Default: Record<string, any>`</b> <br/> <br/> It's a custom initial value <br/>                                                                                                                                                                                                                                                                                                                |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `display: value?.rotate?.speed > 0 ? "flex" : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

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

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "motion",
  type: "motion",
  className: "myMotion"
}
```

#### Icon example

Adding a "star" icon to the left of the control's label.

```js
{
  id: "motion",
  type: "motion",
  icon: "nc-star"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "motion",
  type: "motion",
  roles: ["admin", "designer"]
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

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "motion",
  type: "motion", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "motion",
  type: "motion", 
  states: ["normal", "hover", "active"]
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

#### Default value examples

In this example, the `motion` control that has the values for `"rotate"` and `"speed"` enabled by default and `"rotate"` is active.
`"rotate"` has `"speed"` = `13` and `"direction"` = `"right"`, `"scale"` has `"speed"` = `7`.

```js
{
  id: "motion", 
  type: "motion",
  default: {
    active: "rotate",
    rotateSpeed: 0.13,
    rotateDirection: "right",
    rotateEnabled: true,
    scaleEnabled: true,
    scaleSpeed: 7
  }
}
```

#### CSS examples

Change the `.brz-text` element color with CSS using a `motion` control value.
If `rotate` speed value >= 0.7, then we will colour `.brz-text` element to red, otherwise it will be blue.

```js
{
  id: "motion",
  type: "motion",
  style: ({ value }) => {
    if (value.rotate.speed >= 0.7) {
      return {
        "{{WRAPPER}} .brz-text": {
          color: "red"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        color: "blue"
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the `motion` output value to determine when to render the label in the button element.
We will render different label depending on `motion?.rotate?.speed`;

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  motion: {
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
}

const Button = (props: Props): JSX.Element => {
  const { motion } = props;

  const renderLabel = (speed?: number) => {
    if (!speed) {
      return <span>Rotation not enabled</span>
    }
    
    if (speed > 0.9) {
      return <span>Critical rotation speed</span>;
    } 
    if (speed > 0.5) {
      return <span>High rotation speed</span>;
    } 
    
     return <span>Normal rotation speed</span>;
  };
  return (
    <div className="brz-button">
      {renderLabel(motion?.rotate?.speed)}
      <Icon name="nc-rotate" />
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Button",
  component: { editor: Button, view: Button },
  title: "My Button",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-button",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-button",
              title: "Button"
            },
            devices: "desktop",
            options: [
              {
                id: "motion",
                type: "motion",
                devices: "desktop"
              }
            ]
          }
        ]
      }
    ];
  }
});
```
