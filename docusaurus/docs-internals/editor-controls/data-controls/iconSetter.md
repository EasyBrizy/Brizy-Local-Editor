---
toc_max_heading_level: 4
---

# Icon Setter

Brizy's `iconSetter` control functions as an icon picker, enabling selection from a pre-populated icon library. This facilitates the integration of existing icons within the design workflow.

Example of the control:

![IconSetter](/img/controls/iconSetter.png)

### Parameters

| Name                | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                      |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                                                                                                                                                                   |    -    | The identifier of the key where the `iconSetter` will save your data                                                                                                                                                               |
| `type`              | `string`                                                                                                                                                                                   |    -    | Type should be `"iconSetter"` to use this control                                                                                                                                                                                |
| `label?`            | `string`                                                                                                                                                                                   |    -    | The label displayed on the left side of the control                                                                                                                                                                              |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles                                                                                                                                                                                                                                                                                                                         |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/)                                                                                                                                                                                                                                                                                                                            |
| `position?`         | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                           |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                           | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`          | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices |
| `disabled?`         | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled                                                                                                                                                           |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`   | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control                                                                                                                                                                                             |
| `helper?.content`   | `string`                                                                                                                                                                                   |    -    | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                     |
| `helper?.position`  | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                         |
| `config.canDelete?` | `boolean`                                                                                                                                                                                  | `false` | Determines whether the icon can be deleted                                                                                                                                                                                       |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value <br/> <br/> <b>`Default: { name: string; type: string; filename: string; }`</b> <br/> <br/> `name` - the name of the control's icon<br/>   `type` - the type of the control's icon <br/> `filename` - the filename of the control's icon <br/>                                                                                                                                                                                                              |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-icon": {`<br/>   `color: value.name === "shape-arrow" ? "red" :` <br/> `  "black"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "icon",
  type: "iconSetter"
}
```

### Return value

Returns an object with the following value:

```js
{
  name: string;
  type: string;
  filename: string;
}
```

`name` - the name of the icon;<br/>
`type` - the type of the icon;<br/>
`filename` - the icon file name;<br/>

Example of value:

```js
{
  name: "shape-arrow",
  type: "outline",
  filename: "Arrow.svg"
}
```

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "icon",
  type: "iconSetter",
  label: "Icon"

}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "icon",
  type: "iconSetter",
  className: "myIconSetter"
}
```

#### Icon example

Adding a "file" icon to the left of the control's label.

```js
{
  id: "icon",
  type: "iconSetter",
  icon: "nc-file"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "icon",
  type: "iconSetter",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "icon",
  type: "iconSetter",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "icon",
  type: "iconSetter",
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
      id: "icon",
      type: "iconSetter",
      disabled: videoType === "custom"
    }
  ];
};
```

#### Display examples

In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "icon",
  type: "iconSetter",
  display: "block"
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "icon",
  type: "iconSetter",
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "icon",
  type: "iconSetter",
  helper: {
    content: "Helper",
    position: "top-start"
  }
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "icon",
  type: "iconSetter",
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "icon",
  type: "iconSetter",
  states: ["normal", "hover", "active"]
}
```

#### Config value for `canDelete` example

The control is configured to allow deletion of the selected icon.

```js
{
  id: "icon",
  type: "iconSetter",
  config: {
    canDelete: true
  }
}
```

#### Default value examples

In this example, the `iconSetter` control that has the `name`, `type`, `filename` by default.

```js
{
  id: "icon",
  type: "iconSetter",
  default: {
    name: "shape-arrow",
    type: "outline",
    filename: ""
  }
}
```

#### CSS examples

Change the border of the `.brz-icon` element with CSS using a `iconSetter` control value. In this example, if `value.type` equals `"outline"`, the border is set to `"1px solid red"`, otherwise, the border is removed.

```js
{
  id: "icon",
  type: "iconSetter",
  style: ({ value }) => {
    if (value.type === "outline") {
      return {
        "{{WRAPPER}} .brz-icon": {
          border: "1px solid red"
        }
      };
    }

    return {
      "{{WRAPPER}} .brz-icon": {
        border: "none"
      }
    };
  }
}
```

#### Usage in HTML example

In the example below, the output values from the `iconSetter` control (`iconType`, `iconFilename`, `iconName`) are used to set and display an icon.

```tsx
import { Brizy } from "@brizy/core";
import { getIconUrl } from "./utils";
import React, { JSX } from "react";

interface Props {
  iconType: string;
  iconFilename: string;
  iconName: string;
}

const Icon = (props: Props): JSX.Element => {
  const { iconType, iconFilename, iconName } = props;

  const src = getIconUrl({
    iconType,
    iconFilename,
    iconName
  });

  const style = {
    mask: `url(${src}) no-repeat center / contain`
  };

  return <div className=".brz-icon"  style={style} />;
};

Brizy.registerComponent({
  id: "ThirdParty.Icon",
  component: { editor: Icon, view: Icon },
  title: "My Icon",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-icon",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-icon",
              title: "Icon"
            },
            devices: "desktop",
            options: [
              {
                id: "icon",
                type: "iconSetter",
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
