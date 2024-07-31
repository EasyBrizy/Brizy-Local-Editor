---
sidebar_position: 3
toc_max_heading_level: 4
---

# Number

The `number` control in Brizy provides a straightforward number input field, allowing you to set minimum and maximum value limits and define the step size for value adjustments.

Example of `number` control:

![Number](/img/controls/number.png)

Example of large `number` control:

![NumberLarge](/img/controls/numberLarge.png)

Example of `number` control with disabled spinner:

![NumberNoSpinner](/img/controls/numberNoSpinner.png)

### Parameters

| Name                 | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                 | `string`                                                                                                                                                                                   |      -       | The name of the key where the `number` will save your data                                                                                                                                                                                                                                                                                                                                                                                 |
| `type`               | `string`                                                                                                                                                                                   |      -       | Type should be `"number"` to use this control                                                                                                                                                                                                                                                                                                                                                                                            |
| `label?`             | `string`                                                                                                                                                                                   |      -       | The text that appears in left side of control                                                                                                                                                                                                                                                                                                                                                                                            |
| `className?`         | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                  |
| `icon?`              | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](/docs-internals/icons/).                                                                                                                                                                                                                                                                                                                           |
| `position?`          | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                   |
| `roles?`             | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                            |
| `devices?`           | `string`                                                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                        |
| `disabled?`          | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                  |
| `display?`           | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                                      |
| `config?.min`        | `number`                                                                                                                                                                                   |     `0`      | The minimum number                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `config?.max`        | `number`                                                                                                                                                                                   |    `100`     | The maximum number                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `config?.step`       | `number`                                                                                                                                                                                   |     `1`      | The intervals value that will be incremented or decremented when using the controls’ spinners.                                                                                                                                                                                                                                                                                                                                           |
| `config?.spinner`    | `boolean`                                                                                                                                                                                  |    `true`    | Enables or disables the display of arrows that increment or decrement a number                                                                                                                                                                                                                                                                                                                                                           |
| `config?.updateRate` | `number`                                                                                                                                                                                   |     `50`     | The rate at which the component updates its value, specified in milliseconds. This can control how frequently changes to the input value are propagated                                                                                                                                                                                                                                                                                  |
| `config?.size`       | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           |  `"short"`   | A string that specifies the size of the input field. Common values might include: .                                                                                                                                                                                                                                                                                                                                                      |
| `helper?.content`    | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                        |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                       |
| `states?`            | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                  |
| `default?`           | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { value: number; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                               |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `opacity: value`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "rows",
  type: "number"
}
```

### Return value

The return value is a `number` representing the text field value.

```js
{
  value: number;
}
```

Example of value:

```js
{
  value: 33
}
```

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "rows",
  type: "number",
  label: "Number"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "rows",
  type: "number",
  className: "myCustomClass"
}
```

#### Icon example

Adding a "numbers" icon to the left of the control's label.

```js
{
  id: "rows",
  type: "number",
  icon: "nc-numbers"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "rows",
  type: "number",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "rows",
  type: "number",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "rows",
  type: "number",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "rows",
  type: "number",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "rows",
  type: "number",
  disabled: true
}
```

Control will be disabled when `switchId` variable will be `"on"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"switchId"` is the id of the `"switch"` control below.

```js
const getToolbarContols = ({ getValue }) => {
  const switchId = getValue("switchId");

  return [
    {
      id: "switchId",
      type: "switch"
    },
    {
      id: "rows",
      type: "number",
      disabled: switchId === "on"
    }
  ];
};
```

#### Display examples

In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "rows",
  type: "number",
  display: "block"
}
```

#### Config values for `min` example

The `min` property is set to `100`, indicating that the minimum input field value will be `100`.

```js
{
  id: "rows",
  type: "number",
  config: {
    min: 100
  }
}
```

#### Config values for `max` example

The `max` property is set to `1000`, indicating that the maximum input field value will be `1000`.

```js
{
  id: "rows",
  type: "number",
  config: {
    max: 1000
  }
}
```

#### Config values for `step` example

The `step` property is set to `100`, indicating that the input field will increase or decrease with 100 each time.

```js
{
  id: "rows",
  type: "number",
  config: {
    step: 100
  }
}
```

#### Config values for `spinner` example

The `spinner` property is set to `false`, indicating that the input field will render without spinner arrows.

```js
{
  id: "rows",
  type: "number",
  config: {
    spinner: false
  }
}
```

#### Config values for `updateRate` example

The `updateRate` property is set to `60`, indicating that the input field will update in `60` milliseconds.

```js
{
  id: "rows",
  type: "number",
  config: {
    updateRate: 60
  }
}
```

#### Config size example

The size property is set to `"medium"`, indicating that the input field will be rendered with medium dimensions.

```js
{
  id: "rows",
  type: "number",
  config: {
    size: "medium"
  }
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "rows",
  type: "number",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "rows",
  type: "number",
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
  id: "rows",
  type: "number",
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "rows",
  type: "number",
  states: ["normal", "hover", "active"]
}
```

#### Default value examples

In this example, the number control that has the value `33` by default.

```js
{
  id: "rows",
  type: "number",
  default: {
    value: 33
  }
}
```

#### CSS examples

Set the font size for the `.brz-text` element with CSS using a `number` control value.

```js
{
  id: "rows",
  type: "number",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        "font-size": `${value.value}px`
      }
    }
  }
}
```

Change the opacity of the `.brz-text` element with CSS using custom values from a `number` control.

```js
{
  id: "rows",
  type: "number",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text": {
        opacity: value.value
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the `number` output value to set the icon size for the button element.

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
      <span>Click</span>
      <Icon name="next" size={size} />
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
                id: "size",
                type: "number",
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
