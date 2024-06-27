---
toc_max_heading_level: 4
---

# Box Shadow

The `boxshadow` control provides an interface to modify the CSS `box-shadow` property of elements.

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

### Parameters

| Name              | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :---------------- | :--------------------------------------- | :----------: |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`              | `string`                                 |      -       | The identifier of the key where the box shadow will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `type`            | `string`                                 |      -       | Type should be `"boxShadow"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `className?` | `string` | - | The custom CSS class name that will be set on the control. It can be used to modify the control styles                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |`string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                         |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`        | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `disabled?`       | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `states?`         | `Array<State>`                           | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `config?.type`    | `"none"` \| `"inset"` \| `"outset"`      |   `"none"`   | Specifies the type of box shadow. It determines how the shadow is displayed around the element. The types are: <br/> <br/> `"none"` - no shadow. <br/> `"inset"` - shadow is inside the element. <br/> `"outset"` - shadow is outside the element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `config?.opacity` | `boolean`                                |    `true`    | Indicates whether the opacity setting is enabled for the box shadow. It determines if the box shadow's opacity can be adjusted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `default?` | `Default` | - | The default control value. <br/> <br/> <b>`Default: { value: {blur: number; value: string; spread: number; hex: string; horizontal: string; opacity: string; palette: string; vertical: string; }; }`</b> <br/> <br/>   `blur` - specifies the blur radius for the shadow; <br/>   `value` - indicates the current type of box shadow. It can take one of the following values: `"none"`, `"inset"` and `"outset"`;<br/>  `spread` - defines the spread radius of the shadow. Positive values will cause the shadow to expand and grow larger, while negative values will cause it to shrink;<br/> `hex` - defines the color of the shadow in hexadecimal format; <br/>  `horizontal` - horizontal offset of the shadow; <br/> `opacity` - indicates the opacity of the element itself, not the shadow; <br/> `palette` - predefined palette from global styles; <br/> `vertical` - vertical offset of the shadow; <br/> |
| `selector?` | `string` | - | The CSS selector to which the styles will be applied                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/>  `return {`<br/>  `"{{WRAPPER}} .brz-container": {`<br/>   `"box-shadow": value.value === "inset" ? ` <br/> `  "rgba(" + hexToRgba(value.hex, value.opacity) + ") 10px"  : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                        |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "boxShadow",
  type: "boxShadow"
}
```
### Return value

Returns an object with the following values:

```js
{
  blur: number;
  value: "none" | "inset" | "outset";
  spread: number;
  hex: string;
  horizontal: string;
  opacity: number;
  palette: string | undefined;
  vertical: number;
}
```
Example of value:

`blur` - specifies the blur radius for the shadow; <br/>
`value` - indicates the current type of box shadow. It can take one of the following values: `"none"`, `"inset"` and `"outset"`;<br/>
`spread` - defines the spread radius of the shadow. Positive values will cause the shadow to expand and grow larger, while negative values will cause it to shrink;<br/>
`hex` - defines the color of the shadow in hexadecimal format; <br/>
`horizontal` - horizontal offset of the shadow; <br/>
`opacity` - indicates the opacity of the element itself, not the shadow; <br/>
`palette` - predefined palette from global styles; <br/>
`vertical` - vertical offset of the shadow; <br/>

```js
{
  blur: "10",
  value: "inset",
  spread: "5",
  hex: "#ffffff",
  horizontal: "0",
  opacity: "50",
  palette: "default",
  vertical: "0"
}
```

### Usage

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  className: "myBoxShadow"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  roles: ["admin", "designer"]
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
        { title: "Custom", value: "custom" } 
      ]
    },
    {
      id: "boxShadow",
      type: "boxShadow",
      disabled: videoType === "custom"
    }
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

#### Default value examples

In this example, the `boxShadow` control has default values specified for its properties.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  default: {
    blur: "10",
    value: "inset",
    spread: "5",
    hex: "#ffffff",
    horizontal: "0",
    opacity: "50",
    palette: "default",
    vertical: "0"
  }
}
```

#### CSS examples (`selector`, `style`)

Configure the CSS `box-shadow` property of the `.brz-image` element using `selector`. All the styles will be
applied automatically.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  states: ["normal", "hover"],
  selector: "{{WRAPPER}}:hover .brz-image"
}
```

This example demonstrates how to dynamically apply a `boxShadow` style. The style function generates the appropriate CSS based on the value property.

```js
{
  id: "boxShadow",
  type: "boxShadow",
  style: ({ value }) => {
    if (value.value !== "none") {
      return {
        "{{WRAPPER}} .brz-container": {
          "box-shadow": `${value.horizontal}px 
          ${value.vertical}px ${value.blur}px ${value.spread}px ${hexToRgba(value.hex,value.opacity)}`
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-container": {
        "box-shadow": "none"
      }
    }
  }
}

```

#### Usage in HTML example

To obtain values for the CSS `box-shadow` property, access the necessary values from the component's props using the 
following rule: concatenate the `id` of the `boxShadow` control with the value you wish to extract. The example below 
demonstrates how to extract all possible values from the `boxShadow` control and use them to add the shadow to the `div` element.

```tsx
import { Brizy } from "@brizy/core";
import { hexToRgba } from "./utils";
import React, { JSX } from "react";

interface Props {
  boxShadow: "none" | "inset" | "outset";
  boxShadowBlur: number;
  boxShadowSpread: number;
  boxShadowColorHex: string;
  boxShadowHorizontal: string;
  boxShadowColorOpacity: number;
  boxShadowColorPalette: string | undefined;
  boxShadowVertical: number;
}

const Container = (props: Props): JSX.Element => {
  const { 
    boxShadow,
    boxShadowColorOpacity,
    boxShadowColorHex,
    boxShadowHorizontal,
    boxShadowVertical,
    boxShadowBlur,
    boxShadowSpread,
    children
  } = props;

  return (
    <div 
      style={{ 
        boxShadow: `${boxShadow} ${boxShadowHorizontal}px ${boxShadowVertical}px 
        ${boxShadowBlur}px ${boxShadowSpread}px ${hexToRgba(boxShadowColorHex,boxShadowColorOpacity)}`
      }}
    >
      {children}
    </div>
  );
};

Brizy.registerComponent(Container, {
  id: "ThirdParty.Container",
  component: { editor: Container, view: Container },
  title: "My Container",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-container",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-container",
              title: "Container"
            },
            devices: "desktop",
            options: [
              {
                id: "boxShadow",
                type: "boxShadow",
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
