---
toc_max_heading_level: 4
---
# Select

The `select` control serves as an advanced replacement for a traditional `select` box, delivering a more sophisticated and intuitive selection interface.

Example of the `select` when it is closed:

![Select Closed](/img/controls/select-closed.png)

Example of the `select` when it is opened:

![Select Opened](/img/controls/select-opened.png)

Example of the `select` with helper:

![Select Helper](/img/controls/select-helper.png)


### Parameters

| Name               | Type                                                                                                                                                                                  |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                                                                                                                                                              |      -       | The identifier of the key where the control will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `type`             | `string`                                                                                                                                                                              |      -       | Type should be `"select"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `label?`           | `string`                                                                                                                                                                              |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `className?`       | `string`                                                                                                                                                                              |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `icon?`            | `string`                                                                                                                                                                              |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](/docs-internals/icons/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `position?`        | `number`                                                                                                                                                                              |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `roles?`           | `Array<Role>`                                                                                                                                                                         |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                              |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `disabled?`        | `boolean`                                                                                                                                                                             |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                 |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `helper?.content`  | `string`                                                                                                                                                                              |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `helper?.position` | `"top-start" \| "top" \| "top-end" \| "right-start" \| "right" \| "right-end" \| "bottom-end" \| "bottom" \| "bottom-start" \| "left-end" \| "left" \| "left-start" \| "top"`         |   `"top"`    | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `states?`          | `Array<State>`                                                                                                                                                                        | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `choices`          | `ChoicesSync \| ChoicesAsync`                                                                                                                                                         |      -       | The `choices` property can be configured to either synchronously or asynchronously provide a list of selectable options for a given component. This property can take two forms: `ChoicesSync` or `ChoicesAsync`.<br/><br/>**ChoicesSync**<br/><br/>`ChoicesSync` is an array of `Choice` objects that are directly provided to the component.<br/><br/>**`Choice: { icon?: { name?: string; className?: string; }; title: string; value: string; }`**<br/><br/> Each `Choice` object defines the following properties:<br/>`icon?.name` - The name of the icon.<br/>`icon?.className` - The CSS class name for styling the icon.<br/>`title` - A string representing the display title of the choice.<br/>`value` - A string value representing the choice. This value is returned when the choice is selected.<br/><br/>**ChoicesAsync**<br/><br/>`ChoicesAsync` is used to load the choices dynamically via an asynchronous function. It is an object that defines the following properties:<br/><br/>**`ChoiceAsync: { load: (abortSignal?: AbortSignal) => Promise<Choice[]>; emptyLoad?: { title?: string; }; }`**<br/><br/>`load` - A function that returns a `Promise` resolving to an array of `Choice` objects. This function can optionally take an `AbortSignal` to handle aborting the loading process.<br/>`emptyLoad?.title` - A string representing the text to display when the choices list is empty. |
| `onLoad?`          | `function`                                                                                                                                                                            |      -       | A void function that will be executed once the async choices have been successfully loaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `default?`         | `Default`                                                                                                                                                                             |      -       | The default control value. <br/> <br/> <b>`Default: { value: string; }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `style?`           | `function`                                                                                                                                                                            |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `display: value === "on" ? "flex" : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "navIcon",
  type: "select",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

### Return value

Returns the selected option value.
```js
{
  value: string;
}
```

Example of value:
```js
{
  value: "round"
}
```

### Usage

#### Label example
Adding a label on the left side of the control.


```js
{
  id: "navIcon",
  type: "select",
  label: "Icon",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "navIcon",
  type: "select",
  className: "mySelect",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### Icon example

Adding a "star" icon to the left of the control's label.

```js
{
  id: "navIcon",
  type: "select",
  icon: "nc-star",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "navIcon",
  type: "select",
  roles: ["admin", "manager"],
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "navIcon",
  type: "select",
  devices: "all",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "navIcon",
  type: "select",
  devices: "desktop",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "navIcon",
  type: "select",
  devices: "responsive",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "navIcon",
  type: "select",
  disabled: true,
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

Control will be disabled when `videoType` variable will be `"custom"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"videoType"` is the id of the first `"select"` control below.

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
      id: "navIcon",
      type: "select",
      disabled: videoType === "custom",
      choices: [
        {
          value: "none",
          title: "None"
        },
        {
          value: "thin",
          title: "Thin"
        },
        {
          value: "heavy",
          title: "Heavy"
        }
      ]
    }
  ]
}
```

#### Display examples
In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "navIcon",
  type: "select",
  display: "block",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "size",
  type: "radioGroup",
  choices: [
    {
      value: "small",
      title: "Small"
    },
    {
      value: "medium",
      title: "Medium"
    },
    {
      value: "large",
      title: "Large"
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
  id: "size",
  type: "radioGroup",
  choices: [
    {
      value: "small",
      title: "Small"
    },
    {
      value: "medium",
      title: "Medium"
    },
    {
      value: "large",
      title: "Large"
    }
  ],
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
  id: "navIcon",
  type: "select", 
  states: ["normal", "hover"],
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "navIcon",
  type: "select", 
  states: ["normal", "hover", "active"],
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### Async choices example

`getChoices`: This function is an asynchronous function designed to fetch a list of choices from a given URL. The function takes an AbortSignal as an argument, which allows the fetch operation to be aborted if necessary.

```js
const getChoices = async (abortSignal: AbortSignal): Promise<Choice[]> => {
  const response = await fetch(URL, { signal: abortSignal });

  return response.json();
};

{
  id: "navIcon",
  type: "select",
  choices: {
    load: getChoices,
    emptyLoad: {
      title: "There are no choices"
    }
  }
}
```

#### Choice with icon example

```js
{
  id: "border",
  type: "select",
  choices: [
    { value: "solid", icon: { name: "nc-solid" }, title: "solid" },
    { value: "dashed", icon: { name: "nc-dashed" }, title: "dashed" },
    { value: "dotted", icon: { name: "nc-dotted" }, title: "dotted" }
  ]
}
```

#### `onLoad` example

```js
{
  id: "navIcon",
  type: "select",
  choices: {
    load: getChoices,
    emptyLoad: {
      title: "There are no choices"
    }
  },
  onLoad: () => { console.log("Choices Loaded") }
}
```

#### Default value examples

In this example, the `select` control that has the value `"thin"` by default will be selected.

```js
{
  id: "navIcon",
  type: "select",
  default: {
    value: "thin"
  },
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

The `select` control that has the value `"heavy"` by default will be selected.

```js
{
  id: "navIcon",
  type: "select",
  default: {
    value: "heavy"
  },
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ]
}
```

#### CSS examples

Change the `.brz-text` element color with CSS using a `select` control value.

```js
{
  id: "navIcon",
  type: "select",
  choices: [
    {
      value: "none",
      title: "None"
    },
    {
      value: "thin",
      title: "Thin"
    },
    {
      value: "heavy",
      title: "Heavy"
    }
  ],
  style: ({ value }) => {
    if (value.value === "thin") {
      return {
        "{{WRAPPER}} .brz-text": {
          color: "blue"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        color: "grey"
      }
    }
  }
}
```


#### Usage in HTML example

In the example below, we use the `select` output value to determine which icon to render in the button element.
When the selected value is `"male"`, we will render the male icon inside the button and the female icon if the `"female"` value is selected.

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX } from "react";

interface Props {
  gender: "male" | "female";
}

const Button = (props: Props): JSX.Element => {
  const { gender } = props;

  return (
    <div className="brz-button">
      <Icon name={gender === "male" ? "nc-male" : "nc-female"}/>
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
                id: "gender",
                type: "select",
                choices: [
                  {
                    title: "Female",
                    value: "female"
                  },
                  {
                    title: "Male",
                    value: "male"
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
