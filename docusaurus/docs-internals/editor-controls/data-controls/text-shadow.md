---
toc_max_heading_level: 4
---
# Text Shadow

The `textShadow` control provides an interface to modify the CSS `text-shadow` property of text elements.

Example of the control:

![Text Shadow](/img/controls/text-shadow.png)

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

![Text Shadow Hover](/img/controls/text-shadow-hover.png)

Example of the control with dropdown opened:

![Text Shadow](/img/controls/text-shadow-dropdown.png)

### Parameters

| Name         | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:-------------|:-----------------------------------------|:------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`         | `string`                                 |      -       | The identifier of the key where the text shadow will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`       | `string`                                 |      -       | Type should be `"textShadow"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `className?` | `string`                                 |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `position?`  | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `roles?`     | `Array<Roles>`                           |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                         |
| `devices?`   | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                                                                                                      |
| `disabled?`  | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `states?`    | `Array<State>`                           | [`"normal"`] | Allows the control to work in different states. <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                                                                        |
| `default?`   | `Default`                                |      -       | The default control value. <br/> <br/> <b>`Default: { palette: string; hex: string; opacity: number; blur: number; horizontal: number; vertical: number; }`</b> <br/> <br/> `blur` - specifies the blur radius for the shadow <br/> `hex` - defines the color of the shadow in hexadecimal format <br/> `horizontal` - horizontal offset of the shadow <br/> `opacity` - indicates the opacity of the shadow <br/> `palette` - predefined palette from global styles <br/> `vertical` - vertical offset of the shadow |
| `selector?`  | `string`                                 |      -       | The CSS selector to which the styles will be applied                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `style?`     | `function`                               |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/> `"{{WRAPPER}}:hover .brz-text": {`<br/> `  "text-shadow": ${value.horizontal}px ${value.vertical}px ${value.blur}px ${value.hex}`<br/> ` }`<br/> `}`<br/>`}`</pre>                                      |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "textShadow",
  type: "textShadow"
}
```

### Return value

Returns an object with the following values:

```js
{
  blur: number;
  hex: string;
  horizontal: number;
  opacity: number;
  palette: string | undefined;
  vertical: number;
}
```

`blur` - specifies the blur radius for the shadow; <br/>
`hex` - defines the color of the shadow in hexadecimal format; <br/>
`horizontal` - horizontal offset of the shadow; <br/>
`opacity` - indicates the opacity of the shadow (from 0 to 1); <br/>
`palette` - predefined palette from global styles; <br/>
`vertical` - vertical offset of the shadow; <br/>

Example of the value:

```js
{
  blur: 4;
  hex: "#dd4949";
  horizontal: 1;
  opacity: 1;
  palette: undefined;
  vertical: 2;
}
```

### Usage

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "textShadow",
  type: "textShadow"
  className: "myTextShadow"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "textShadow",
  type: "textShadow",
  roles: ["admin", "designer"]
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

#### Default value example

In the `default` object you can set the default values for any `textShadow` properties.

```js
{
  id: "textShadow",
  type: "textShadow",
  default: {
    blur: 5,
    hex: "#000000",
    horizontal: 2,
    opacity: 0.5,
    palette: undefined,
    vertical: 1
  }
}
```

#### CSS examples (`selector`, `style`)

Configure the CSS `text-shadow` property of the `.brz-text` element using the `style` function.

```js
{
  id: "textShadow",
  type: "textShadow",
  states: ["normal", "hover"],
  style: ({ value }) => {
    return {
      "{{WRAPPER}}:hover .brz-text": {
        "text-shadow": `${value.horizontal}px ${value.vertical}px ${value.blur}px ${value.hex}`
      }
    }
  }
}
```

Configure the CSS `text-shadow` property of the `.brz-text` element using `selector`. All the styles will be
applied automatically.

```js
{
  id: "textShadow",
  type: "textShadow",
  states: ["normal", "hover"],
  selector: "{{WRAPPER}}:hover .brz-text"
}
```

#### Usage in HTML example

To obtain values for the CSS `text-shadow` property, access the necessary values from the component's props using the 
following rule: concatenate the `id` of the `textShadow` control with the value you wish to extract. The example below 
demonstrates how to extract all possible values from the `textShadow` control and use them to add the shadow to the text
inside a `p` element.

```tsx
import { Brizy } from "@brizy/core";

interface Props {
  textShadowColorHex: string;
  textShadowBlur: number;
  textShadowHorizontal: number;
  textShadowVertical: number;
  textShadowColorOpacity: number;
  textShadowColorPalette: string;
}

const Component = (props: Props): JSX.Element => {
  const { textShadowColorHex, textShadowBlur, textShadowHorizontal, textShadowVertical } = props;

  return <div className="component">
    <p style={{ textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColorHex}` }}>
      text
    </p>
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
        toolbar: [
          {
            id: "toolbarColor",
            type: "popover",
            config: {
              size: "medium",
              title: "Colors",
              icon: {
                style: {
                  backgroundColor: "#000000"
                }
              },
            },
            devices: "desktop",
            options: [
              {
                id: "tabsColor",
                type: "tabs",
                tabs: [
                  {
                    id: "textShadow",
                    type: "textShadow",
                    states: ["normal", "hover"]
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
