---
toc_max_heading_level: 4
---

# Icons Picker

The `iconsPicker` control in Brizy functions similarly to checkboxes but features a distinct user interface. Users can select by icons for various purposes, and the blue checkmarks visually indicate which icons are currently active or chosen.

Example of the `iconsPicker`

![Icons Picker](/img/data-controls/iconsPicker.png)

Example of checked `iconsPicker`

![Icons Picker Checked](/img/data-controls/iconsPickerChecked.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the `iconsPicker` will save your data                                                                                                                                                                                                                                                                                                                                                                                                  |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"iconsPicker"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                                                |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                                                                   |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                          |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                      |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                      |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |      -       | A required property that defines the array of choice objects to render as icons elements.<br/><br/><b>`Choice: { title: string, icon: string, value: string }`</b> <br/><br/>`title` - the title of the icon element.<br/>`icon` - the icon associated with the icon element.<br/>`value` - the value returned by the `iconsPicker` when this option is selected.                                                                                                      |
| `default?  `       | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { value: string; active: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/> `active` - the active icon by default                                                                                                                                                                                                                                                                       |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `display: value === "none" ? "none" : "block"`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

### Return value

The return value of the `iconsPicker` control is an object with two properties:`value`: a string representing some value.
`active`: a string indicating the currently active state.

```js
{
  value: string;
  active: string;
}
```

Example of value:

```js
{
  value: '["value-1", "value-2"]',
  active: "value-1"
}
```

### Usage

#### Label example

Adding a label on the left side of control

```js
{
  id: "icons",
  label: "Style",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  className: "myClass"
}
```

#### Icon example

Adding a "repeat" icon to the left of the control's label.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  icon: "nc-repeat"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "icons",
  type: "iconsPicker",
  devices: "all",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "icons",
  type: "iconsPicker",
  devices: "desktop",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "icons",
  type: "iconsPicker",
  devices: "responsive",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "icons",
  type: "iconsPicker",
  disabled: true,
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ]
}
```

Control will be disabled when `videoType` variable will be `"custom"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"videoType"` is the id of the `"select"` control below.

```js
const getToolbarContols = ({ getValue }) => {
  const videoType = getValue("videoType")

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
      id: "icons",
      type: "iconsPicker",
      disabled: videoType === "custom",
      choices: [
        {
          title: "Item 1",
          value: "val1",
          icon: "nc-star"
        },
        {
          title: "Item 2",
          value: "val2",
          icon: "nc-line"
        }
      ]
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, indicating that the helper text will be displayed at the top start of icon.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### States examples

Allows the control to work in normal and hover states.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  states: ["normal", "hover", "active"]
}
```

#### Default value examples

In this example, the `iconsPicker` control that has the value `"val1"` by default. And `"val2"` item will be active by default.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Item 1",
      value: "val1",
      icon: "nc-star"
    },
    {
      title: "Item 2",
      value: "val2",
      icon: "nc-line"
    }
  ],
  default: {
    value: '["val1"]',
    active: "val2"
  }
}
```

#### CSS examples

Change the fontSize of the `.brz-text` element with CSS using custom values from a `iconsPicker` control.

```js
{
  id: "icons",
  type: "iconsPicker",
  choices: [
    {
      title: "Small",
      value: "small",
      icon: "nc-small"
    },
    {
      title: "Big",
      value: "big",
      icon: "nc-big"
    }
  ],
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        "font-size": value.value === "small" ? 12 : 15
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the `iconsPicker` output value to determine the decoration for button text.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";
import { Icon } from "./Icon";

interface Props {
  style: string;
}

const Button = (props: Props): JSX.Element => {
  const { style } = props

  const styleClass = style ? JSON.parse(style).join(" ") : ""

  const className = "brz-button" + " " + styleClass

  return <div className={className}>Click</div>
}

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
                id: "style",
                type: "iconsPicker",
                choices: [
                  {
                    title: "Underline",
                    value: "underline",
                    icon: "nc-underline"
                  },
                  {
                    title: "Bold",
                    value: "bold",
                    icon: "nc-bold"
                  },
                  {
                    title: "Italic",
                    value: "italic",
                    icon: "nc-italic"
                  }
                ],
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
