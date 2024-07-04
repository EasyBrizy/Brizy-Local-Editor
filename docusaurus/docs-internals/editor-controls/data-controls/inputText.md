---
sidebar_position: 2
toc_max_heading_level: 4
---

# Input Text

Brizy's `inputText` control offers a straightforward input field for text entry, allowing users to effortlessly input and edit text.

Example of the `inputText`:

![InputText](/img/controls/inputText.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the control will save your data                                                                                                                                                                                                                                                                                                                                                                   |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"inputText"` to use this control                                                                                                                                                                                                                                                                                                                                                                                  |
| `placeholder?`     | `string`                                                                                                                                                                                   |      -       | The placeholder text displayed in the input field                                                                                                                                                                                                                                                                                                                                                                                 |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                               |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                           |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](/docs-internals/icons/).                                                                                                                                                                                                                                                                                                                    |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                            |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                     |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                  |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                            |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control                                                                                                                                                                                                |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                                  |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                                 |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                           |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                        |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-border": {`<br/>  `display: value.length > 0 ? "block" : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "link",
  type: "inputText"
}
```

### Return value

The return value is a `string` representing the text field value.

```js
{
  value: string;
}
```

Example of value:

```js
{
  value: "text inside an input"
}
```

### Usage

#### Placeholder example

Adding the placeholder text for the control.

```js
{
  id: "link",
  type: "inputText",
  placeholder: "http://"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "link",
  type: "inputText",
  label: "Link"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "link",
  type: "inputText",
  className: "myInputText"
}
```
#### Icon example

Adding a "link" icon to the left of the control's label.

```js
{
  id: "link",
  type: "inputText",
  icon: "nc-link"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "link",
  type: "inputText",
  roles: ["admin", "designer"]
}
```


#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "link",
  type: "inputText",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "link",
  type: "inputText",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "link",
  type: "inputText",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "link",
  type: "inputText",
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
      ],
    },
    {
      id: "link",
      type: "inputText",
      disabled: videoType === "custom"
    }
  ];
};
```

#### Display example

In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "link",
  type: "inputText",
  display: "block"
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "link",
  type: "inputText",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "link",
  type: "inputText",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### States examples

Allows the control to work in normal and hover states.

```js
{
  id: "link",
  type: "inputText",
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "link",
  type: "inputText",
  states: ["normal", "hover", "active"]
}
```

#### Default value example

In this example, the inputText control has an initial value of `"https://www.google.com/"` by default.

```js
{
  id: "link",
  type: "inputText",
  default: {
    value: "https://www.google.com/"
  }
}
```

#### CSS example

Show or hide the `.brz-border` element with CSS using a `inputText` control value.

```js
{
  id: "link",
  type: "inputText",
  style: ({ value }) => {
    if (value.value.length > 0) {
      return {
        "{{WRAPPER}} .brz-border": {
          display: "block"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-border": {
        display: "none"
      }
    }
  }
}

```

#### Usage in HTML example

The provided code defines a React functional component named `Input`. This component serves as a customizable input control, which can be used in forms or other user interfaces where text input is required.

```tsx
import classNames from "classnames";
import React, { JSX } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export const Input = (props: Props): JSX.Element => {
  const { value, onChange } = props;
  return (
    <div className="brz-input">
      <input type="text" value={value} onChange={({ target: { value } }): void => onChange(value)} />
    </div>
  );
};

Brizy.registerComponent(Input, {
  id: "ThirdParty.Input",
  title: "My Input",
  options: (props) => {
    return [
      {
        selector: ".brz-input",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-input",
              title: "Input"
            },
            devices: "desktop",
            options: [
              {
                id: "link",
                type: "inputText",
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
