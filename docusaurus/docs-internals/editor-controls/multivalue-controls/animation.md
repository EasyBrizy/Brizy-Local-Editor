---
toc_max_heading_level: 4
---
# Animation

The `animation` control provides access to 13 pre-built animations that can be applied to elements in both their normal state and on hover. It allows customization of parameters such as duration, delay, direction, and more.

Example of the control:

![Animation](/img/multivalue-controls/animation.png)

Example of the control with `"fade"` animation selected:

![Animation Fade](/img/multivalue-controls/animation-fade.png)

Example of the control with animations usually used on `"hover"`:

![Animation Hover](/img/multivalue-controls/animation-hover.png)

### Parameters

| Name                        | Type                                                                                                                                                                                       |                               Default                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                        | `string`                                                                                                                                                                                   |                                  -                                   | The identifier of the key where the `animation` will save your data                                                                                                                                                                                                                                                                                                                                                                                      |
| `type`                      | `string`                                                                                                                                                                                   |                                  -                                   | Type should be `"animation"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                         |
| `label?`                    | `string`                                                                                                                                                                                   |                                  -                                   | The label displayed on the top side of the control                                                                                                                                                                                                                                                                                                                                                                                                       |
| `className?`                | `string`                                                                                                                                                                                   |                                  -                                   | The custom CSS class name that will be set on the control. It can be used to modify the control styles                                                                                                                                                                                                                                                                                                                                                   |
| `icon?`                     | `string`                                                                                                                                                                                   |                                  -                                   | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/)                                                                                                                                                                                                                                                                                                                                                      |
| `position?`                 | `number`                                                                                                                                                                                   |                                  -                                   | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `roles?`                    | `Array<Role>`                                                                                                                                                                              |                                  -                                   | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                            |
| `devices?`                  | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |                               `"all"`                                | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                                         |
| `disabled?`                 | `boolean`                                                                                                                                                                                  |                               `false`                                | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                                                   |
| `helper?.content`           | `string`                                                                                                                                                                                   |                                  -                                   | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                                                             |
| `helper?.position?`         | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |                               `"top"`                                | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                                                        |
| `config?.type`              | `Array<EffectType>`                                                                                                                                                                        | `["none", "bounce", "fade", "rotate", "slide", "zoom", "attention"]` | Specifies the list of animation types that will be available for use <br/><br/> <b>`EffectType = "none" \| "bounce" \| "fade" \| "rotate" \| "slide" \| "zoom" \| "attention" \| "pulse" \| "wobble" \| "buzz" \| "scale" \| "skew" \| "move"`</b>                                                                                                                                                                                                       |
| `config?.replay`            | `boolean`                                                                                                                                                                                  |                                `true`                                | Enables the ability to replay the animation by clicking a special button. If `false` the button will not render                                                                                                                                                                                                                                                                                                                                          |
| `config?.infiniteAnimation` | `boolean`                                                                                                                                                                                  |                                `true`                                | Allows the animation to loop indefinitely. This can be toggled using a special switch toggler. If `false` the switch will not render                                                                                                                                                                                                                                                                                                                     |
| `config?.delay`             | `boolean`                                                                                                                                                                                  |                                `true`                                | Enables the ability to change the delay of the animation using a special slider. If `false` the slider will not render                                                                                                                                                                                                                                                                                                                                   |
| `default?`                  | `Default`                                                                                                                                                                                  |                                  -                                   | The default control value.    <br/> <br/> <b>`Default: { name: EffectType; duration: number; delay: number; infiniteAnimation: boolean; big?: boolean; direction?: string; style?: string; }`</b> <br/> <br/> `name` - the name of the animation. All other properties are described in [return value](#return-value) <br/>                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `style?`                    | `function`                                                                                                                                                                                 |                                  -                                   | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}} .brz-ui-ed-iframe": {`<br/> `  "background-color": value.type === "pulse" ? "red" : "black"`<br/> ` }`<br/> `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "animation",
  type: "animation"
}
```

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

EffectType = "none" | "bounce" | "fade" | "rotate"* | "rotate2"* | "slide" | "zoom" | "attention" | "pulse" 
  | "wobble" | "buzz" | "scale" | "skew" | "move"
```

`type` - the type of the animation (`"rotate"` is usually used on the elements when they enter the viewport, while `"rotate2"` is used to add a hover animation); <br/>
`duration` - the duration of the animation in milliseconds; <br/>
`delay` - the delay before the animation starts, in milliseconds; <br/>
`infiniteAnimation` - indicates whether the animation should loop indefinitely; <br/>
`big?` - specific to the `"fade"` animation, specifies if the animation will start outside the viewport; <br/>
`direction?` - returned for all animations except `"attention"`, indicates the direction from which or to which the animation will be executed; <br/>
`style?` - specific to the `"attention"` animation, variants of the `"attention"` animation; <br/>

Example of the value: 

```js
{
  delay: 0,
  direction: "up",
  duration: 600,
  infiniteAnimation: true,
  type: "move"
}
```

### Usage

#### Label example

Adds a label to the top of the list of animations.

```js
{
  id: "animation",
  label: "Animations",
  type: "animation"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "animation",
  type: "animation"
  className: "myAnimation"
}
```

#### Icon example

Adding a "settings" icon to the left of the control's label.

```js
{
  id: "animation",
  type: "animation"
  icon: "nc-cog"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "animation",
  type: "animation",
  roles: ["admin", "designer"]
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

#### Default value example

In the `default` object you can set the default values for any `animation` properties.

```js
{
  id: "animation",
  type: "animation",
  default: {
    delay: 1000,
    direction: "none",
    duration: 1000,
    infiniteAnimation: false,
    name: "bounce"
  }
}
```

#### CSS example

This is an abstract example, and usually, you will not manually control any animation. In this case the `map` background 
color will be red if the animation type is `"pulse"`, otherwise it will be black.

```js
{
  id: "animation",
  type: "animation",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-ui-ed-iframe": {
        "background-color": value.type === "pulse" ? "red" : "black"
      }
    }
  }
}
```

#### Usage in HTML example 

To retrieve the control's return value, access the necessary values from the component's props using the following rule:
concatenate the `id` of the `animation` control with the value you wish to extract. The example below demonstrates
how to extract all the values and use `hoverName` to change the color of the text.

```tsx
import { Brizy } from "@brizy/core";

interface Props {
  hoverName: string;
  hoverDelay: number;
  hoverInfiniteAnimation: boolean;
  hoverDuration: number;
}

const Component = (props) => {
  const { hoverName, hoverDelay, hoverInfiniteAnimation, hoverDuration } = props;
  
  return <div className="component">
    <p style={{ color: hoverName === "pulse" ? "red" : "black" }}>Text</p>
  </div>
}

Brizy.registerComponent({
  id: "ThirdParty.Component",
  component: { editor: Component, view: Component },
  title: "Component",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".component",
        sidebar: [
          {
            id: "sidebarTabs",
            type: "sidebarTabs",
            tabs: [
              {
                id: "effects",
                title: "Effects",
                label: "Effects",
                options: [
                  {
                    id: "tabs",
                    type: "tabs",
                    config: {
                      align: "start"
                    },
                    tabs: [
                      {
                        id: "entrance",
                        label: "Entrance",
                        options: []
                      },
                      {
                        id: "tabHover",
                        label: "Hover",
                        options: [
                          {
                            id: "hover",
                            type: "animation",
                            config: {
                              types: ["wobble", "pulse", "buzz", "skew", "scale", "move", "rotate2"],
                              replay: false,
                              infiniteAnimation: true,
                              delay: false
                            },
                            default: {
                              name: "none",
                              duration: 0,
                              delay: 0,
                              infiniteAnimation: false
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
})
```
