---
toc_max_heading_level: 4
---
# Code Mirror

Brizy's `codeMirror` control features a code editor with a textarea interface.

Example of `codeMirror` control:

![Code Mirror](/img/controls/codeMirror.png)

### Parameters


| Name             | Type            |   Default   | Description                                                                                             |
|:-----------------|:----------------|:-----------:|:--------------------------------------------------------------------------------------------------------|
| `id`             | `string`        |      -      | The identifier of the key where the `aiText` will save your data                                        |
| `type`           | `string`        |      -      | Type should be `"aiText"` to use this control                                                           |
| `placeholder`  | `string`        |      -      | The placeholder text displayed in the input field.                                                      |
| `label?`  | `string`        |      -      | The label displayed on the left side of the control.                                                    |
| `className?`  | `string`        |      -      | The custom CSS class name that will be set on the control. It can be used to modify the control styles. |
| `icon?`  | `string`        |      -      | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).    |
| `position?`  | `number`        |      -      | The position of the control in toolbar.        |
| `roles?`  | `Array<Role>`   |      -      | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**  | string`**        |
| `devices?`  | `"all"` \| `"desktop"` \| `"responsive"`  |      `"all"`      | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.        |
| `disabled?`  | `boolean`       |      `false`      | Configure the condition under which the control is disabled or enabled.        |
| `display?`  | `"inline"` \|   `"block"`  |      `"inline"`      | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.        |
| `helper?.content`  | `string`        |      -      | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.        |
| `helper?.position`  | `"top-start"` \|   `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"`  |      `"top"`      | Specifies the position of the tooltip relative to the helper icon.        |
| `states?`  | `Array<State>`  |      [`"normal"`]      | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination).        |
| `config?.size?`  | `"short"` \| `"medium"` \| `"large"` \| `"auto"`  |      `"medium"`      | The size of textarea.         |
| `config?.language`  | `"html"`  \| `"css"`   \| `"markdown"`  \| `"xml"`  |  `"css"`  | Specify in which language the code will be written.  |
| `default?`  | `Default` |  -  | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>  |
| `style?`  | `function` |  -  | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control.The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `display: value === "on" ? "flex" : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre>|


### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "code", 
  type: "codeMirror"
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
  "value": ".brz-btn {\n  width: 100px;\n  height: 100px;\n}"
}
```

### Usage

#### Placeholder example

Adding the `placeholder` text for the control.

```js
{
  id: "code",
  type: "codeMirror",
  placeholder: "Code..."
}
```

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "code", 
  label: "Custom Css",
  type: "codeMirror"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "code",
  type: "codeMirror",
  className: "myCode"
}
```

#### Icon example

Adding a `"code"` icon to the left of the control's label.

```js
{
  id: "code",
  type: "codeMirror",
  icon: "nc-code"
}
```

#### Roles example

Show the control only to users with `admin` and `designer` privileges.

```js
{
  id: "code",
  type: "codeMirror",
  roles: ["admin", "designer"]
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "code", 
  type: "codeMirror",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "code", 
  type: "codeMirror",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "code", 
  type: "codeMirror",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "code", 
  type: "codeMirror", 
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
      id: "code",
      type: "codeMirror",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Display examples
In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "code",
  type: "codeMirror",
  display: "block"
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "code",
  type: "codeMirror",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "code",
  type: "codeMirror",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```

#### States example

Allows the control to work in `normal` and `hover` states.

```js
{
  id: "code",
  type: "codeMirror", 
  states: ["normal", "hover"]
}
```

Allows the control to work in `normal`, `hover` and `active` states.

```js
{
  id: "code",
  type: "codeMirror", 
  states: ["normal", "hover", "active"]
}
```

#### Config value for `size` examples
When you add the size attribute in the configuration, you define the dimensions of the textarea.

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "short"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "medium"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "large"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "auto"
  }
}
```

#### Config value for `language` examples
In the examples below, we specify the language in which we will write the code.

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "html"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "css"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "markdown"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    language: "xml"
  }
}
```

#### Default value examples

In this example, the `codeMirror` control, with the default value `".brz-button { background-color: purple; }"`.

```js
{
  id: "code", 
  type: "codeMirror",
  default: {
    value: ".brz-button { background-color: purple; }" 
  }
}
```


#### CSS examples

Alter the appearance of `.brz-text` elements dynamically using CSS based on the content of a `codeMirror` control. When the component's length is `0`, the text color changes to `green` with `underlined` styling. Otherwise, the text color switches to `blue` with `italic` formatting within the specified wrapper (`{{WRAPPER}}`).

```js
{
  id: "code",
  type: "codeMirror",
  style: ({ value }) => {
    if (value.value.length > 0) {
      return {
        "{{WRAPPER}} .brz-button": {
          "color": "green",
          "text-decoration": "underline"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-button": {
        "color": "blue",
        "font-style": "italic"
      }
    }
  }
}
```

Retrieve the CSS styles `normal` and `active` for the display of the `.brz-button` element. For example, if a value is filled in the `normal` state and removed in the `active` state, then `.brz-button` will have a `block` display, and `.brz-button.active` will have a `none` display.

```js
{
  id: "code",
  type: "codeMirror",
  states: ["normal", "active"],
  style: ({ value }) => {
  return {
    "{{WRAPPER}} .brz-text": {
      display: value.value.length === 0 ? "none" : "block"
    }
   }
  }
}
```

#### Usage in HTML example

In the example below, a custom `Container` component for the Brizy editor is defined that supports customization through the injection of custom HTML.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  customHtml: string
}

const Container = (props: Props): JSX.Element => {
  const { customHtml } = props;
  
  return (
    <div className="brz-container">
      {value ? <div dangerouslySetInnerHTML={{ __html: customHtml }} /> : <p>No content</p>}
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Container",
  component: { editor: Container, view: Container },
  title: "My Container",
  category: "essentials",
  options: (props) => {
    return [
      {
        selector: ".brz-container",
        toolbar: [
          {
            id: "sidebarTabs",
            type: "sidebarTabs",
            tabs: [
              {
                id: "moreSettingsAdvanced",
                label: "Advanced",
                icon: "nc-code",
                options: [
                  {
                    id: "customHtml",
                    label: "Custom HTML",
                    type: "codeMirror",
                    config: {
                      language: "html"
                    }
                  }
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
