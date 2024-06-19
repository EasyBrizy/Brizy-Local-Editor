---
toc_max_heading_level: 4
---
# Animation

The `animation` control provides access to 13 pre-built animations that can be applied to elements in both their normal state and on hover. It allows customization of parameters such as duration, delay, direction, and more.

Example of the control:

![Slider](/img/multivalue-controls/animation.png)

Example of the control with `"fade"` animation selected:

![Slider](/img/multivalue-controls/animation-fade.png)

Example of the control with animations usually used on `"hover"`:

![Slider](/img/multivalue-controls/animation-hover.png)

### Parameters

| Name                        | Type                                                                                                                                                                                       |                               Default                                | Description                                                                                                                                                                                                                                        |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                        | `string`                                                                                                                                                                                   |                                  -                                   | The identifier of the key where the `"animation"` will save your data                                                                                                                                                                              |
| `type`                      | `string`                                                                                                                                                                                   |                                  -                                   | Type should be `"animation"` to use this control                                                                                                                                                                                                   |
| `label?`                    | `string`                                                                                                                                                                                   |                                  -                                   | The label displayed on the top side of the control                                                                                                                                                                                                 |
| `position?`                 | `number`                                                                                                                                                                                   |                                  -                                   | The position of the control in toolbar                                                                                                                                                                                                             |
| `devices?`                  | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |                               `"all"`                                | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                   |
| `disabled?`                 | `boolean`                                                                                                                                                                                  |                               `false`                                | Configure the condition under which the control is disabled or enabled                                                                                                                                                                             |
| `helper?.content`           | `string`                                                                                                                                                                                   |                                  -                                   | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                       |
| `helper?.position?`         | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |                               `"top"`                                | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                  |
| `config?.type`              | `Array<EffectType>`                                                                                                                                                                        | `["none", "bounce", "fade", "rotate", "slide", "zoom", "attention"]` | Specifies the list of animation types that will be available for use <br/><br/> <b>`EffectType = "none" \| "bounce" \| "fade" \| "rotate" \| "slide" \| "zoom" \| "attention" \| "pulse" \| "wobble" \| "buzz" \| "scale" \| "skew" \| "move"`</b> |
| `config?.replay`            | `boolean`                                                                                                                                                                                  |                                `true`                                | Enables the ability to replay the animation by clicking a special button. If `false` the button will not render                                                                                                                                    |
| `config?.infiniteAnimation` | `boolean`                                                                                                                                                                                  |                                `true`                                | Allows the animation to loop indefinitely. This can be toggled using a special switch toggler. If `false` the switch will not render                                                                                                               |
| `config?.delay`             | `boolean`                                                                                                                                                                                  |                                `true`                                | Enables the ability to change the delay of the animation using a special slider. If `false` the slider will not render                                                                                                                             |

### Return value

Returns an object with the following values: 

```js
{
  type: EffectType;
  duration: number;
  delay: number;
  infiniteAnimation: false;
  big?: boolean;
  direction?: string;
  style?: string;
}

EffectType = "none" | "bounce" | "fade" | "rotate" | "slide" | "zoom" | "attention" | "pulse" 
  | "wobble" | "buzz" | "scale" | "skew" | "move"
```

`type` - the type of the animation; <br/>
`duration` - the duration of the animation in milliseconds; <br/>
`delay` - the delay before the animation starts, in milliseconds; <br/>
`infiniteAnimation` - indicates whether the animation should loop indefinitely; <br/>
`big?` - specific to the `"fade"` animation, specifies if the animation will start outside the viewport; <br/>
`direction?` - returned for all animations except `"attention"`, indicates the direction from which or to which the animation will be executed; <br/>
`style?` - specific to the `"attention"` animation, variants of the `"attention"` animation; <br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "animation",
  type: "animation"
}
```

#### Label example

Adds a label to the top of the list of animations.

```js
{
  id: "animation",
  label: "Animations",
  type: "animation"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "animation",
  type: "animation", 
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "animation",
  type: "animation", 
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "animation",
  type: "animation", 
  devices: "responsive"
}
```

#### Disabled example

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "animation",
  type: "animation", 
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
      id: "animation",
      type: "animation",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Helper example

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "animation",
  type: "animation",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed in the top left corner of the icon.

```js
{
  id: "animation",
  type: "animation",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### Config `types` example

Specifies the list of animation types that will be available for use.

```js
{
  id: "animation",
  type: "animation", 
  config: {
    types: ["wobble", "buzz", "scale"]
  }
}
```

#### Config `replay` example

Enables the ability to replay the animation by clicking a special button. In this case the button will not render.

```js
{
  id: "animation",
  type: "animation", 
  config: {
    replay: false
  }
}
```

#### Config `infiniteAnimation` example

Allows the animation to loop indefinitely. This can be toggled using a special switch toggler. In this case the switch will not render.

```js
{
  id: "animation",
  type: "animation", 
  config: {
    infiniteAnimation: false
  }
}
```

#### Config `delay` example

Enables the ability to change the delay of the animation using a special slider. In this case the slider will not render and animation will not have a delay.

```js
{
  id: "animation",
  type: "animation", 
  config: {
    delay: false
  }
}
```
