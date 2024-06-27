---
toc_max_heading_level: 4
---

# Toggle Button

The `toggleButton` component is a simple `on` | `off` toggle that can display an icon and change its appearance based on its type. This component supports customization through various props to control alignment, appearance, and behavior.

Example of the `toggleButton` when it is disabled or enabled:

![Toggle Button Off](/img/data-controls/toggle-button-off.png) ![Toggle Button On](/img/data-controls/toggle-button-on.png)

### Parameters

| Name                   | Type                                                                                                                                                                                       |   Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                   | `string`                                                                                                                                                                                   |      -      | The identifier of the key where the `toggleButton` will save your data                                                                                                                                                                                                                                                                                                                                                     |
| `type`                 | `string`                                                                                                                                                                                   |      -      | Type should be `"toggleButton"` to use this control                                                                                                                                                                                                                                                                                                                                                                        |
| `label?`               | `string`                                                                                                                                                                                   |      -      | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                        |
| `className?`           | `string`                                                                                                                                                                                   |      -      | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                    |
| `icon?`                | `string`                                                                                                                                                                                   |      -      | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                       |
| `position?`            | `number`                                                                                                                                                                                   |      -      | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                     |
| `roles?`               | `Array<Role>`                                                                                                                                                                              |      -      | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                              |
| `devices?`             | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`   | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                           |
| `disabled?`            | `boolean`                                                                                                                                                                                  |   `false`   | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                     |
| `display?`             | `"inline" \| "block"`                                                                                                                                                                      | `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                        |
| `align?`               | `"left"` \| `"center"` \| `"right"`                                                                                                                                                        | `"center"`  | Specifies the alignment of the content within the button. This controls how the icon is positioned inside the button                                                                                                                                                                                                                                                                                                       |
| `helper?.content`      | `string`                                                                                                                                                                                   |      -      | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                               |
| `helper?.position`     | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`   | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                          |
| `config.icon`          | `string`                                                                                                                                                                                   |      -      | The name of the icon to display                                                                                                                                                                                                                                                                                                                                                                                            |
| `config?.title`        | `string`                                                                                                                                                                                   |      -      | Sets the title attribute of the button, which typically provides additional information when the user hovers over the button                                                                                                                                                                                                                                                                                               |
| `config?.type`         | `"square"` \| `"default"`                                                                                                                                                                  | `"default"` | Determines the styling of the button: <br/> `"default"` - displays only the icon <br/> `"square"` - adds a background to the parent element of the icon                                                                                                                                                                                                                                                                    |
| `config?.reverseTheme` | `boolean`                                                                                                                                                                                  |   `true`    | If enabled, reverses the color theme of the icon. Works only with type `"default"`                                                                                                                                                                                                                                                                                                                                         |
| `config?.on`           | `string`                                                                                                                                                                                   |   `"on"`    | The return value of the control when it is enabled                                                                                                                                                                                                                                                                                                                                                                         |
| `config?.off`          | `string`                                                                                                                                                                                   |   `"off"`   | The return value of the control when it is disabled                                                                                                                                                                                                                                                                                                                                                                        |
| `default?`             | `Default`                                                                                                                                                                                  |      -      | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                 |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/>   `"{{WRAPPER}} .brz-text": {`<br/>     `display: value === "on" ? "flex" : "none"`<br/>   `}`<br/>  `}`<br/>`}`</pre>                                   |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

### Return value

Control returns an object where `value` is `"on"` | `"off"` by default or your value passed in `config.on` and `config.off`.

```js
{
  value: config.on | config.off;
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
  id: "shapeTopHorizontal",
  type: "toggleButton",
  label: "Flip",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  className: "myCustomClass"
}
```

#### Icon example

Adding a "repeat" icon to the left of the control's label.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  icon: "nc-repeat"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "all",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "desktop",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  devices: "responsive",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Disabled example

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  disabled: true,
  config: {
    icon: "nc-flip-horizontal"
  }
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
      id: "shapeTopHorizontal",
      type: "toggleButton",
      disabled: videoType === "custom",
      config: {
        icon: "nc-flip-horizontal"
      }
    }
  ]
}
```

#### Display examples

In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  display: "block"
}
```

#### Align example

Specifies the alignment of the content within the button. This controls how the icon is positioned inside the button.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  align: "left",
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Helper example

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  helper: {
    content: "help text"
  },
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed in the top left corner of the icon.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  helper: {
    content: "help text",
    position: "top-start"
  },
  config: {
    icon: "nc-flip-horizontal"
  }
}
```

#### Config title example

Sets the title attribute of the button, which typically provides additional information when the user hovers over the button.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    title: "Title"
  }
}
```

#### Config type example

Determines the styling of the button, in this case type `"square"` adds a background to the parent element of the icon.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    type: "square"
  }
}
```

Can be used without `icon` just to display an `on` | `off` button.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    type: "square"
  }
}
```

#### Config reverse theme example

If enabled, reverses the color theme of the icon.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    reverseTheme: false
  }
}
```

#### Config value for `on` | `off` examples

When the `toggleButton` is enabled, it will return `"1"`.
When the `toggleButton` is disabled, it will return `"0"`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "1",
    off: "0"
  }
}
```

When the `toggleButton` is enabled, it will return `"true"`.
When the `toggleButton` is disabled, it will return `"false"`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "true",
    off: "false"
  }
}
```

When the `toggleButton` is enabled, it will return `"enabled"`.
When the `toggleButton` is disabled, it will return `"disabled"`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal",
    on: "enabled",
    off: "disabled"
  }
}
```

#### Default value examples

In this example, the `toggleButton` control that has the value `"on"` by default will be enabled.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  default: {
    value: "on"
  }
}
```

The `toggleButton` control that has the value `"off"` by default will be disabled.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
  default: {
    value: "off"
  }
}
```

#### CSS examples

Show or hide the `.brz-text` element with CSS using a `toggleButton` control value.
If `config.on` and `config.off` are not provided, then the default values for the `toggleButton` are `"on"` or `"off"`.

```js
{
  id: "shapeTopHorizontal",
  type: "toggleButton",
  config: {
    icon: "nc-flip-horizontal"
  },
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


#### Usage in HTML example

In the example below, we use the `toggleButton` output value (default is `"on"` | `"off"`) to determine when to render the label in the button element.
When the `toggleButton` is enabled (`"on"`), we will render the label.

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  showLabel: "on" | "off";
}

const Button = (props: Props): JSX.Element => {
  const { showLabel } = props;
  
  return (
    <div className="brz-button">
      {showLabel === "on" && <span>Click</span>}
      <Icon name="next" size={showLabel === "on" ? 16 : 24} />
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
                id: "showLabel",
                type: "toggleButton",
                config: {
                  icon: "nc-flip-horizontal"
                },
                devices: "desktop"
              }
            ]
          }
        ]
      }
    ]
  }
})
```
