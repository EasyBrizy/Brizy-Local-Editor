---
sidebar_position: 2
toc_max_heading_level: 4
---

# Toggle

The toggle control in Brizy functions as a switchable interactive element, enabling users to toggle between multiple states.

Example of the toggle:

![Toggle](/img/controls/toggle-left.png)<br/>
![Toggle](/img/controls/toggle-center.png)<br/>
![Toggle](/img/controls/toggle-right.png)<br/>

### Parameters

| Name        | Type                                     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                     |
|:------------| :--------------------------------------- | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | `string`                                 |    -    | The identifier of the key where the toggle will save your data                                                                                                                                                                                                                                                                                                                                  |
| `type`      | `string`                                 |    -    | Type should be `"toggle"` to use this control                                                                                                                                                                                                                                                                                                                                                   |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                             |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles                                                                                                                                                                                                                                                                                                                         |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                          |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                           | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`  | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                               |
| `disabled?` | `boolean`                                | `false` | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                         |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                               |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                              |
| `choices`   | `Array<Choice>`                          |  `[]`   | Choices is an array of objects, where each object represents a choice with a specific `title`, `value` , and `icon`. <br/><br/><b>`Choice: { title: string, icon: string, value: string }`</b> <br/><br/>`title`: The title of the element, which appears on hover.<br/>`icon`: The icon associated with the element.<br/>`value`: The value returned by the control when a choice is selected. |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                      |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-toggle": {`<br/>   `color: value === "left" ? "red" : "black"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys.
<br/>This control will be displayed on all devices.

```js
{
  id: "align",
  type: "toggle",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```
### Return value

The return value is determined by the options configuration, the `choices.value` property.

```js
{
  value: string;
}
```

Example of value:
```js
{
  value: "center"
}
```

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "align",
  type: "toggle",
  label: "Align",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "align",
  type: "toggle",
  className: "myAlignToggle",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "align",
  type: "toggle",
  roles: ["admin", "designer"],
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "align",
  type: "toggle",
  devices: "all",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "align",
  type: "toggle",
  devices: "desktop",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "align",
  type: "toggle",
  devices: "responsive",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "align",
  type: "toggle",
  disabled: true,
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
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
      id: "align",
      type: "toggle",
      disabled: videoType === "custom",
      choices: [
        { icon: "nc-text-align-left", title: "Left", value: "left" },
        { icon: "nc-text-align-center", title: "Center", value: "center" },
        { icon: "nc-text-align-right", title: "Right", value: "right" }
      ]
    }
  ];
};
```

#### Helper examples
The helper object contains a content property with the value `"help text"`, which will be displayed as additional
guidance or information for the user.

```js
{
  id: "align",
  type: "toggle",
  helper: {
    content: "help text"
  },
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will
be displayed at the top left corner of the icon.

```js
{
  id: "align",
  type: "toggle",
  helper: {
    content: "help text",
    position: "top-start"
  },
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

#### Default value examples

In this example, the toggle control that has the value `"center"` by default.

```js
{
  id: "align",
  type: "toggle",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ],
  default: {
    value: "center"
  }
}
```

#### CSS examples

Change the color of the `.brz-toggle` element with CSS using a `toggle` control value. In this example, if value is `"left"`, set the color to red else set the color to blue.

```js
{
  id: "align",
  type: "toggle",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ],
  style: ({ value }) => {
    if (value.value === "left") {
      return {
        "{{WRAPPER}} .brz-toggle": {
          "justify-content": "start"
        }
      };
    } else if (value.value === "right") {
      return {
        "{{WRAPPER}} .brz-toggle": {
          "justify-content": "end"
        }
      };
    } else {
      return {
        "{{WRAPPER}} .brz-toggle": {
          "justify-content": "center"
        }
      };
    }
  }
}

```

#### Usage in HTML example

In the example below, we use the toggle output value (default is `string`) to determine the alignment of the child elements. When the toggle is set to `"left"`, the label and child elements will be aligned to the left.

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  align: string;
}

const Container = (props: Props): JSX.Element => {

const { align } = props;

  return (
    <div className={`brz-container brz-jc-${align}`}>
      <Icon name="next"/>
    </div>
  );
};

Brizy.registerComponent({
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
              icon: "nc-align",
              title: "Container"
            },
            devices: "desktop",
            options: [
              {
                id: "align",
                type: "toggle",
                devices: "desktop",
                choices: [
                  { icon: "nc-text-align-left", title: "Left", value: "left" },
                  { icon: "nc-text-align-center", title: "Center", value: "center" },
                  { icon: "nc-text-align-right", title: "Right", value: "right" }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
});
```
