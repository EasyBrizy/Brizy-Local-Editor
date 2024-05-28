---
sidebar_position: 1
toc_max_heading_level: 4
---

# Switch

The switcher control in Brizy presents an `on` \| `off` toggle. It functions as a sophisticated replacement for standard
checkboxes.

Example of the switch when it is disabled:

![Switch Off](/img/data-controls/switch-off.png)

Example of the switch when it is enabled:

![Switch On](/img/data-controls/switch-on.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the switch will save your data                                                                                                                                                                                                                                                                                                                                                                  |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"switch"` to use this control                                                                                                                                                                                                                                                                                                                                                                                   |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                             |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                         |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                            |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                          |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                           | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                               |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                         |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`   | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                             |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                               |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                              |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                         |
| `config?.on`       | `string`                                                                                                                                                                                   |    `"on"`    | The return value of the control when it is enabled                                                                                                                                                                                                                                                                                                                                                                              |
| `config?.off`      | `string`                                                                                                                                                                                   |   `"off"`    | The return value of the control when it is disabled                                                                                                                                                                                                                                                                                                                                                                             |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                      |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `display: value === "on" ? "flex" : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre> |


### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "loop",
  type: "switch"
}
```

### Return value

The return value is determined by the configuration of on/off properties. By default, it is `"on"` when the switch is
enabled and `"off"` when the switch is disabled.

```js
{
  value: string;
}
```

Example of value:
```js
{
  value: "on"
}
```

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "loop",
  label: "Loop",
  type: "switch"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "loop",
  type: "switch"
  className: "mySwitch"
}
```

#### Icon example

Adding a "repeat" icon to the left of the control's label.

```js
{
  id: "loop",
  type: "switch"
  icon: "nc-repeat"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "loop",
  type: "switch",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "loop",
  type: "switch",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "loop",
  type: "switch",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "loop",
  type: "switch",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "loop",
  type: "switch",
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
      id: "loop",
      type: "switch",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Display examples
In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "autoplay",
  type: "switch"
  display: "block"
}
```

#### Helper examples
The helper object contains a content property with the value `"help text"`, which will be displayed as additional
guidance or information for the user.

```js
{
  id: "autoplay",
  type: "switch",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will
be displayed at the top left corner of the icon.

```js
{
  id: "autoplay",
  type: "switch",
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
  id: "display",
  type: "switch", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "display",
  type: "switch", 
  states: ["normal", "hover", "active"]
}
```


#### Config value for `on` | `off` examples

When the `switch` is enabled, it will return `"true"`.
When the `switch` is disabled, it will return `"false"`.

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "true",
    off: "false"
  }
}
```

When the `switch` is enabled, it will return `"1"`.
When the `switch` is disabled, it will return `"0"`.

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "1",
    off: "0"
  }
}
```

When the `switch` is enabled, it will return `"round"`.
When the `switch` is disabled, it will return `"square"`.

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "round",
    off: "square"
  }
}
```

#### Default value examples

In this example, the switch control that has the value `"on"` by default will be enabled.

```js
{
  id: "autoPlay", 
  type: "switch",
  default: {
    value: "on"
  }
}
```

The switch control that has the value `"off"` by default will be disabled.

```js
{
  id: "autoPlay", 
  type: "switch",
  default: {
    value: "off"
  }
}
```

The switch control that has the value `"disabled"` and by default also will be disabled.

```js
{
  id: "autoPlay", 
  type: "switch",
  default: {
    value: "disabled"
  }
}
```

This switch will be disabled by default because the default value matches `config.off`.

```js
{
  id: "loop",
  type: "switch",
  default: {
    value: "false"
  },
  config: {
    on: "true",
    off: "false"
  }
}
```

This switch will be enabled by default because the default value matches `config.on`.

```js
{
  id: "loop",
  type: "switch",
  default: {
    value: "1"
  },
  config: {
    on: "1",
    off: "0"
  }
}
```

#### CSS examples

Show or hide the `.brz-text` element with CSS using a switch control value.
If `config.on` and `config.off` are not provided, then the default values for the switch are `"on"` or `"off"`.

```js
{
  id: "loop",
  type: "switch",
  style: ({ value }) => {
    if (value.value === "on") {
      return {
        "{{WRAPPER}} .brz-text": {
          display: "block"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        display: "none"
      }
    }
  }
}

```

Change the opacity of the `.brz-text` element with CSS using custom values from a `switch` control.
The values for the switch were provided in the `config`, and now the values are `"1"` or `"0"`.

```js
{
  id: "loop",
  type: "switch",
  config: {
    on: "1",
    off: "0"
  },
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        opacity: value.value
      }
    }
  }
}
```

Change the `pointer-events` and `display` properties of the `.brz-text` and `.brz-map` elements with CSS.

```js
{
  id: "accesibility",
  type: "switch",
  style: ({ value }) => {
    const isEnabled = value.value === "on";
    
    return {
      "{{WRAPPER}} .brz-text, {{WRAPPER}} .brz-map": {
        "pointer-events": isEnabled ? "all" : "none",
        "display": isEnabled ? "flex": "block"
      }
    }
  }
}
```

Get the normal and hover CSS for opacity for the `.brz-list` element.
If we enable the switch in the normal state and disable it in the hover state, hovering will result in a small fade effect.

```js
{
  id: "loop",
  type: "switch",
  states: ["normal", "hover"],
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-list:hover": {
        opacity: value.value === "on" ? 1 : 0
      }
    }
  }
}
```

Get the normal and active CSS for color for the `.brz-list-item` element.
For example, if we enable the switch in the normal state and disable it for the active state,
then `.brz-list-item` will have a black color and `.brz-list-item.active` will have a red color.

```js
{
  id: "loop",
  type: "switch",
  states: ["normal", "active"],
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-list-item": {
        color: value.value === "on" ? "black" : "red"
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the switch output value (default is `"on"` | `"off"`) to determine when to render the label in the button element.
When the switch is enabled (`"on"`), we will render the label.
We also use the same switch value to add the `"data-disabled"` HTML attribute to the `.brz-button` and to create a `props.size` value for the `<Icon />` component.

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  showLabel: "on" | "off";
}

const Button = (props: Props): JSX.Element => {
  const { showLabel } = props;

  const attributes = {
    "data-disabled": showLabel === "off"
  }
  
  return (
    <div className="brz-button" {...attributes}>
      {showLabel === "on" && <span>Click</span>}
      <Icon name="next" size={showLabel === "on" ? 16 : 24} />
    </div>
  );
};

Brizy.registerComponent(Button, {
  id: "ThirdParty.Button",
  title: "My Button",
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
                id: "showLabel",
                type: "switch",
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
