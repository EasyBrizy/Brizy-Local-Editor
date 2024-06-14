---
sidebar_position: 3
toc_max_heading_level: 4
---

# Textarea

The Brizy `textarea` control offers a traditional textarea field with the ability to set the number of rows.

Example of the `textarea`:

![Textarea](/img/data-controls/textarea.png)

Example of the `textarea` with placeholder and 2 lines:

![TextareaWithPlaceholder](/img/data-controls/textareaPlaceholder.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the textarea will save your data                                                                                                                                                                                                                                                                                                                                                                                                       |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"textarea"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                                                |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                                                                   |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                          |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                      |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                                                                    |
| `placeholder?`     | `string`                                                                                                                                                                                   |      -       | The placeholder text displayed in the input field.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                      |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                |
| `config?.lines`    | `number`                                                                                                                                                                                   |      -       | Specifies the number of rows for the textarea component.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `config?.size`     | `"short"` \| `"medium"` \| `"large"` \| `"auto"`                                                                                                                                           |   `"auto"`   | A string that specifies the size of the input field.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `default?  `       | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                                                             |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/> &nbsp;`"{{WRAPPER}} .brz-text": {`<br/> &nbsp; &nbsp; `display: value === "none" ? "none" : "block"`<br/> &nbsp; &nbsp; `}`<br/> &nbsp; `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "description",
  type: "textarea"
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
  value: "demo example value"
}
```

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "description",
  type: "textarea",
  label: "Description"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "description",
  type: "textarea",
  className: "myClass"
}
```

#### Icon example

Adding a "repeat" icon to the left of the control's label.

```js
{
  id: "description",
  type: "textarea",
  icon: "nc-repeat"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "description",
  type: "textarea",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "description",
  type: "textarea",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "description",
  type: "textarea",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "description",
  type: "textarea",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "description",
  type: "textarea",
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
      id: "description",
      type: "textarea",
      disabled: videoType === "custom"
    }
  ];
};
```

#### Display examples

In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "description",
  type: "textarea",
  display: "block"
}
```

#### Placeholder example

Adding the placeholder text for the control.

```js
{
  id: "description",
  type: "textarea",
  placeholder: "Start typing here..."
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "description",
  type: "textarea",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "description",
  type: "textarea",
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
  id: "description",
  type: "textarea",
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "description",
  type: "textarea",
  states: ["normal", "hover", "active"]
}
```

#### Config values for `lines` example

Specifies the number of lines for the textarea component. This determines the visible height of the textarea input field.

```js
{
  id: "description",
  type: "textarea",
  config: {
    lines: 3
  }
}
```

#### Config `size` example

The size property is set to `"medium"`, indicating that the input field will be rendered with medium dimensions.

```js
{
  id: "description",
  type: "textarea",
  config: {
    size: "medium"
  }
}
```

#### Default value examples

In this example, the textarea control that has the value `"Default text"` by default.

```js
{
  id: "description",
  type: "textarea",
  default: {
    value: "Default text"
  }
}
```

#### CSS examples

Change the content of the `.brz-text::after` element with CSS using custom values from a `textarea` control.

```js
{
  id: "description",
  type: "textarea",
  style: ({ value }) => {
    return {
      "{{WRAPPER}} .brz-text::after": {
        content: value.value
      }
    }
  }
}
```

#### Usage in HTML example

In the example below, we use the textarea output value to determine the content for the label in the Text element.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  description: string;
}

const Text = (props: Props): JSX.Element => {
  const { description } = props;

  return (
    <div className="brz-text">
      <span>{description}</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Text",
  component: { editor: Text, view: Text },
  title: "My Text",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-text",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-text",
              title: "Text"
            },
            devices: "desktop",
            options: [
              {
                id: "description",
                type: "textarea",
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
