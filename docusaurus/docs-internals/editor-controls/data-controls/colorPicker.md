---
sidebar_position: 5
toc_max_heading_level: 4
---

# Color Picker

Brizy's `colorPicker` control offers a user-friendly color picker field with an integrated opacity slider, hue slider, and predefined palette colors.

Example of the `colorPicker`:

![ColorPicker](/img/controls/colorPicker.png)

Example of the `colorPicker` with disabled opacity:

![ColorPicker](/img/controls/colorPickerNoOpacity.png)

Example of the `colorPicker` with disabled color palette:

![ColorPicker](/img/controls/сolorPickerNoPalette.png)

### Parameters

| Name                      | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------------------ | :--------------------------------------- | :----------: |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                      | `string`                                 |      -       | The identifier of the key where the `colorPicker` will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`                    | `string`                                 |      -       | Type should be `"colorPicker"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `className?`              | `string`                                 |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `position?`               | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `roles?`                  | `Array<Role>`                            |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                           |
| `devices?`                | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                       |
| `disabled?`               | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `states?`                 | `Array<State>`                           | `["normal"]` | Allows the control to work in different states. <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                                                                          |
| `config?.opacity`         | `boolean`                                |    `true`    | Controls whether the opacity of the color can be changed. If set to `false`, the opacity slider will not be rendered.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `config?.isPaletteHidden` | `boolean`                                |   `false`    | Controls whether the palette of the color can be changed. If set to `true`, the color palette will not be rendered.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `default?  `              | `Default`                                |      -       | The default control value. <br/> <br/> <b>`Default: { hex: string; palette: string; opacity: number; }`</b> <br/> <br/> `hex` - the control's custom hex value <br/> `palette` - the control's custom palette value <br/> `opacity` - the control's custom opacity value                                                                                                                                                                                                                                                |
| `style?`                  | `function`                               |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `color: value.hex`,<br/> &nbsp; &nbsp; `opacity: value.opacity`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre>                              |

### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "color",
  type: "colorPicker"
}
```

### Return value

Returns an object with the following values:

```js
{
  hex: string;
  opacity: number;
  palette: string | undefined;
}
```

`hex` - defines the color of the shadow in hexadecimal format; <br/>
`opacity` - indicates the opacity of the shadow; <br/>
`palette` - predefined palette from global styles; <br/>

Example of value:

```js
{
  hex: "#ffffff",
  opacity: 1,
  palette: "color5"
}
```

### Usage

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "color",
  type: "colorPicker",
  className: "myClass"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "color",
  type: "colorPicker",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "color",
  type: "colorPicker",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "color",
  type: "colorPicker",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "color",
  type: "colorPicker",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "color",
  type: "colorPicker",
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
      id: "color",
      type: "colorPicker",
      disabled: videoType === "custom"
    }
  ];
};
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover", "active"]
}
```

#### Config `opacity` example

Turns off the opacity slider

```js
{
  id: "color",
  type: "colorPicker",
  config: {
    opacity: false
  }
}
```

#### Config `isPaletteHidden` example

Turns off the color palette

```js
{
  id: "color",
  type: "colorPicker",
  config: {
    isPaletteHidden: true
  }
}
```

#### Default value examples

In this example, the `colorPicker` control that has the value `"#d02213"` by default.

```js
{
  id: "color",
  type: "colorPicker",
  default: {
    hex: "#d02213",
    opacity: 1,
    palette: ""
  }
}
```

#### CSS examples

Change the color of the `.brz-text` element with CSS using custom values from a `colorPicker` control.

```js
{
  id: "color",
  type: "colorPicker",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        color: value.value.hex
      },
      "{{WRAPPER}}":{
        opacity: value.value.opacity
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the colorPicker output value to determine the icon color in the button element.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";
import { Icon } from "./Icon";

interface Props {
  colorHex: string;
  colorOpacity: number;
}

const Button = (props: Props): JSX.Element => {
  const { colorHex, colorOpacity } = props;

  return (
    <div className="brz-button">
      <Icon size={16} color={colorHex} opacity={colorOpacity} />
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
                id: "color",
                type: "colorPicker",
                devices: "desktop"
              },
            ]
          }
        ]
      }
    ]
  }
});
```
