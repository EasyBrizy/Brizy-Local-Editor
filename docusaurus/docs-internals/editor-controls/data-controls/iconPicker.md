---
toc_max_heading_level: 4
---
# Icon Picker

The `iconPicker` control represents a list of radio buttons that can include an icon and a title for greater informativeness.

Example of the control:

![Icon Picker](/img/controls/iconPicker.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                               |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                                   |      -      | The identifier of the key where the `iconPicker` will save your data                                                                                                                                                                                                                                                                                                                                                                      |
| `type`             | `string`                                                                                                                                                                                   |      -      | Type should be `"iconPicker"` to use this control                                                                                                                                                                                                                                                                                                                                                                                         |
| `label?`           | `string`                                                                                                                                                                                   |      -      | The label displayed on the top side of the control                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                      
| `className?`       | `string`                                                                                                                                                                                   |      -      | The custom CSS class name that will be set on the control. It can be used to modify the control styles                                                                                                                                                                                                                                                                                                                                    |
| `icon?`            | `string`                                                                                                                                                                                   |      -      | Icon name that will be rendered on left side of the control's label. View all [icons](/docs-internals/icons/)                                                                                                                                                                                                                                                                                                                                       |
| `position?`        | `number`                                                                                                                                                                                   |      -      | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                    |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -      | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                             |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`   | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                          |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`   | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                                    |
| `states?`          | `Array<State>`                                                                                                                                                                              | `["normal"]` | Allows the control to work in different states. <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -      | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                                          |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`   | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                                         |
| `choices?`         | `Array<Choice>`                                                                                                                                                                            |      -      | A list of radio buttons to display <br/> <br/> <b>`Choice = { icon: string; title: string; value: string; }`</b> <br/> <br/> `icon` - the name of the icon, <br/> `title` - the title of the button to display, <br/> `value` - the unique value for the button                                                                                                                                                                           |
| `default?`         | `Default`                                                                                                                                                                                  |      -      | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                                |
| `style?`           | `function`                                                                                                                                                                                 |      -      | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/> `return {`<br/> ` "{{WRAPPER}} .brz-text": {`<br/> `  display: value.value === "value1" ? "block" : "none"`<br/> ` }`<br/> `}`<br/>`}`</pre> |

### Basic example

Standard definition with the keys necessary for the normal operation of the control. Will be displayed on all devices.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

### Return value

Returns the object where `value` represents the `Choice.value` of the selected button:

```js
{
  value: string;
}
```

Example of the value:

```js
{
  value: "value1"
}
```

### Usage

#### Label example

Adding a label to the top side of the control.

```js
{
  id: "iconPicker",
  type: "iconPicker", 
  label: "Icon Picker"
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "iconPicker",
  type: "iconPicker"
  className: "myIconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Icon example

Adding a "settings" icon to the left of the control's label.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  icon: "nc-cog",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  roles: ["admin", "designer"],
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "all",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "desktop",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  devices: "responsive",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  disabled: true,
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
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
        { title: "Custom", value: "custom" },
      ],
    },
    {
      id: "iconPicker",
      type: "iconPicker",
      disabled: videoType === "custom",
      choices: [
        {
          icon: "nc-star",
          title: "Title 1",
          value: "value1"
        },
        {
          icon: "nc-star",
          title: "Title 2",
          value: "value2"
        },
        {
          icon: "nc-star",
          title: "Title 3",
          value: "value3"
        }
      ]
    },
  ];
};
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "iconPicker",
  type: "iconPicker", 
  states: ["normal", "hover"],
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```
Allows the control to work in normal, hover and active states.

```js
{
  id: "iconPicker",
  type: "iconPicker", 
  states: ["normal", "hover", "active"],
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  helper: {
    content: "help text"
  },
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed in the top left corner of the icon.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  helper: {
    content: "help text",
    position: "top-start"
  },
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Choices example 

A list of radio buttons to display. Renders 3 radio buttons with provided `icon` and `title`. Upon selection, returns the provided `value`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ]
}
```

#### Default value examples

To set the default value, assign an existing `value` from the `choices` to `default.value`.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  choices: [
    {
      icon: "nc-star",
      title: "Title 1",
      value: "value1"
    },
    {
      icon: "nc-star",
      title: "Title 2",
      value: "value2"
    },
    {
      icon: "nc-star",
      title: "Title 3",
      value: "value3"
    }
  ],
  default: {
    value: "value1"
  }
}
```

#### CSS example

Use the control value to change the `background-size` property of a container element that has a background image.

```js
{
  id: "iconPicker",
  type: "iconPicker",
  choices: [
    {
      icon: "nc-cover",
      title: "Cover",
      value: "cover"
    },
    {
      icon: "nc-contain",
      title: "Contain",
      value: "contain"
    },
    {
      icon: "nc-auto",
      title: "Auto",
      value: "auto"
    },
  ],
  style: ({ value }) => {
    return {
      "{{WRAPER}} .brz-bg-image": {
        "background-size": value.value
      }
    }
  }
}
```

#### Usage in HTML example

To retrieve the value of the control from the component's props, you can use its `id`. In this case, the control regulates 
the CSS `display` property, which can be either `flex` or `grid`.

```tsx
import { Brizy } from "@brizy/core";

interface Props {
  layoutType: string;
}

const Component = (props: Props) => {
  const { layoutType } = props;
  
  return <div className="component" style={{ display: layoutType }}>...</div>
}

Brizy.registerComponent({
  id: "ThirdParty.Component",
  component: { editor: Component, view: Component },
  title: "Component",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".component",
        toolbar: [
          {
            id: "toolbarSettings",
            type: "popover",
            config: {
              icon: "nc-cog",
              title: "Settings",
            },
            options: [
              {
                id: "layoutType",
                type: "iconPicker",
                label: "Layout type",
                choices: [
                  {
                    icon: "nc-flex",
                    title: "Flex",
                    value: "flex"
                  },
                  {
                    icon: "nc-grid",
                    title: "Grid",
                    value: "grid"
                  }
                ],
                default: {
                  value: "flex"
                }
              }
            ]
          }
        ]
      }
    ]
  }
});
```
