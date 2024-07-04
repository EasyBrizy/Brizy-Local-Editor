---
toc_max_heading_level: 4
---

# Radio Group

The `radioGroup` control in Brizy presents a selection of options. It functions as a sophisticated replacement for standard radio buttons.

Example of the `radioGroup`

![Radio Group](/img/controls/radio-group.png)

Example of the `radioGroup` with label

![Radio Group](/img/controls/radio-group-label.png)

Example of the `radioGroup` with helper

![Radio Group](/img/controls/radio-group-helper.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the `radioGroup` will save your data                                                                                                                                                                                                                                                                                                                                         |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"radioGroup"` to use this control                                                                                                                                                                                                                                                                                                                                                            |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                          |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](/docs-internals/icons/).                                                                                                                                                                                                                                                                                                         |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                       |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br/> <br/> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                  |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                            |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                      |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                          |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                            |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                           |
| `choices`          | `Array<Choice>`                                                                                                                                                                            |      -       | A required property that defines the array of choice objects to render as radio elements.<br/><br/>**`Choice: { title?: string, icon: string, value: string }`**<br/><br/>`title?` - The title of the radio element, which appears on hover.<br/>`icon` - The icon associated with the radio element.<br/>`value` - The value returned by the radio group when this option is selected.                      |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/>**`State = "normal" \| "hover" \| "active"`**<br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                           |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/>**`Default: { value: string; }`**<br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                        |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/>   `"{{WRAPPER}} .brz-text": {`<br/>     `"font-size": value`<br/>   `}`<br/>  `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" }
  ]
}
```

### Return value

The return value is determined by the configuration of the choices properties in the given object.

```js
{
  value: string;
}
```

Example of value:

```js
{
  value: "medium"
}
```

### Usage

#### Label example

Adding a label on the left side of control

```js
{
  id: "size",
  label: "Size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

#### Icon example

Adding a "size" icon to the left of the control's label.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  icon: "nc-size"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "size",
  type: "radioGroup",
  devices: "all",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "size",
  type: "radioGroup",
  devices: "desktop",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "size",
  type: "radioGroup",
  devices: "responsive",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "size",
  type: "radioGroup",
  disabled: true,
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ]
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
      id: "size",
      type: "radioGroup",
      disabled: videoType === "custom",
      choices: [
        { value: "small", icon: "nc-32" },
        { value: "medium", icon: "nc-48" },
        { value: "large", icon: "nc-64" },
        { value: "custom", icon: "nc-more" }
      ]
    }
  ]
}
```

#### Display examples

In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "size",
    type: "radioGroup",
    choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  display: "block"
}
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, indicating that the helper text will be displayed at the top start of icon.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### Choices with title example

Adding a title for radio element which appears on hover.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32", title: "32" },
    { value: "medium", icon: "nc-48", title: "48" },
    { value: "large", icon: "nc-64", title: "64" },
    { value: "custom", icon: "nc-more", title: "custom" }
  ]
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  states: ["normal", "hover"]
}
```

#### Default value examples

In this example, the `radioGroup` that has the value `"medium"` by default will be enabled.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" },
    { value: "custom", icon: "nc-more" }
  ],
  default: {
    value: "medium"
  }
}
```

#### CSS examples

Set the font size of the `.brz-text` element with CSS using a `radioGroup` control value.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    { value: "small", icon: "nc-32" },
    { value: "medium", icon: "nc-48" },
    { value: "large", icon: "nc-64" }
  ],
  style: ({ value }) => {
    if (value.value === "small") {
      return {
        "{{WRAPPER}} .brz-text": {
          "font-size": 32
        }
      }
    }

    if(value.value === "large"){
      return {
        "{{WRAPPER}} .brz-text": {
          "font-size": 64
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        "font-size": 48
      }
    }
  }
}

```

#### Usage in HTML example

In the example below, we use the `radioGroup` output value to determine the size of the icon in the button element.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";
import { Icon } from "./Icon";

interface Props {
  size: number;
}

const Button = (props: Props): JSX.Element => {
  const { size } = props;

  return (
    <div className="brz-button">
      <Icon name="next" size={size} />
    </div>
  )
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
                id: "size",
                type: "radioGroup",
                choices: [
                  { value: 32, icon: "nc-32" },
                  { value: 48, icon: "nc-48" },
                  { value: 64, icon: "nc-64" }
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
