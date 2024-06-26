---
toc_max_heading_level: 4
---

# Range

A `range` input, commonly known as a `range` slider, is an interactive control enabling users to select a span of values within a specified numerical interval.

Example of the `range`:<br/>
![Range](/img/unit-controls/range.png)<br/>
Example of the `range` with unit:<br/>
![Range](/img/unit-controls/rangeUnit.png)<br/>
Example of the `range` with helper:<br/>
![Range](/img/unit-controls/rangeHelp.png)<br/>
Example of the `range` with start and end label:<br/>
![Range](/img/unit-controls/rangeLabel.png)<br/>

### Parameters

| Name                 | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:---------------------| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                 | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the range will save your data                                                                                                                                                                                                                                                                                                                                                                   |
| `type`               | `string`                                                                                                                                                                                   |      -       | Type should be `"range"` to use this control                                                                                                                                                                                                                                                                                                                                                                                    |
| `label?`             | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                             |
| `className?`         | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                                                                                                         |
| `icon?`              | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                            |
| `position?`          | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                          |
| `roles?`             | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                   | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`           | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                |
| `disabled?`          | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                          |
| `display?`           | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`  | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                             |
| `helper?.content`    | `string`                                                                                                                                                                                   |      -       | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                                    |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                               |
| `states?`            | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                         |
| `config?.min`        | `number`                                                                                                                                                                                   |     `0`      | The minimum value allowed on the range scale                                                                                                                                                                                                                                                                                                                                                                                    |
| `config?.max`        | `number`                                                                                                                                                                                   |    `100`     | The maximum value allowed on the range scale                                                                                                                                                                                                                                                                                                                                                                                    |
| `config?.step`       | `number`                                                                                                                                                                                   |     `1`      | The incremental step between values on the range scale                                                                                                                                                                                                                                                                                                                                                                          |
| `config?.updateRate` | `number`                                                                                                                                                                                   |     `50`     | The frequency of value updates, typically in milliseconds                                                                                                                                                                                                                                                                                                                                                                       |
| `config?.unit`       | `string`                                                                                                                                                                                   |      -       | The unit of measurement for the values displayed on the range scale                                                                                                                                                                                                                                                                                                                                                             |
| `config?.startLabel` | `string`                                                                                                                                                                                   |      -       | The label indicating the starting point of the range                                                                                                                                                                                                                                                                                                                                                                            |
| `config?.endLabel`   | `string`                                                                                                                                                                                   |      -       | The label indicating the ending point of the range                                                                                                                                                                                                                                                                                                                                                                              |
| `default?`           | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { from: number; to: number }`</b> <br/> <br/> `value` - the control's custom initial value <br/>                                                                                                                                                                                                                                                                            |
| `style?`             | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-text": {`<br/>   `color: value.from >= 50 ? "red" : "black"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "interval",
  type: "range"
}
```

### Return value

The return value of the range control represents the current selected range of values.<br/>

```js
{
  from: number;
  to: number;
}
```

`from` - the starting value of the range;<br/>
`to` - the ending value of the range;<br/>

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "interval",
  type: "range",
  label: "Range"
}
```

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "interval",
  type: "range"
  className: "myRange"
}
```

#### Icon example

Adding a "repeat" icon to the left of the control's label.

```js
{
  id: "interval",
  type: "range"
  icon: "nc-repeat"
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "interval",
  type: "range",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "interval",
  type: "range",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "interval",
  type: "range",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "interval",
  type: "range",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "interval",
  type: "range",
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
        { title: "Custom", value: "custom" },
      ],
    },
    {
      id: "interval",
      type: "range",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Display examples
In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "interval",
  type: "range"
  display: "block"
}
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "interval",
  type: "range",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "interval",
  type: "range",
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
  id: "interval",
  type: "range", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "interval",
  type: "range", 
  states: ["normal", "hover", "active"]
}
```

#### Config `min` example

Defines the minimum value allowed on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    min: 10
  }
}
```

#### Config `max` example

Defines the maximum value allowed on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    max: 50
  }
}
```

#### Config `step` example

Specifies the incremental step between values on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    step: 10
  }
}
```

#### Config `updateRate` example

Determines the frequency of value updates, typically in milliseconds.

```js
{
  id: "interval",
  type: "range",
  config: {
    updateRate: 100
  }
}
```

#### Config `unit` example

Specifies the unit of measurement for the values displayed on the range scale.

```js
{
  id: "interval",
  type: "range",
  config: {
    unit: "%"
  }
}
```

#### Config `startLabel` example

Specifies the label indicating the starting point of the range.

```js
{
  id: "interval",
  type: "range",
  config: {
    startLabel: "10"
  }
}
```

#### Config `endLabel` example

Specifies the label indicating the ending point of the range.

```js
{
  id: "interval",
  type: "range",
  config: {
    endLabel: "50"
  }
}
```

#### Default value examples

In this example, the `range` control has the value `{ from: 50; to: 150 }` by default.

```js
{
  id: "interval", 
  type: "range",
  default: {
    from: 50,
    to: 150
  }
}
```

#### CSS examples

Change the `.brz-text` element color with CSS using a `range` control value.

```js
{
  id: "interval",
  type: "range",
  style: ({ value }) => {
    if (value.from >= 30) {
      return {
        "{{WRAPPER}} .brz-text": {
          color: "orange"
        }
      }
    }
    
    if (value.from >= 60) {
      return {
        "{{WRAPPER}} .brz-text": {
          color: "red"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-text": {
        color: "green"
      }
    }
  }
}

```

#### Usage in HTML example

In the example below, we use the `range` output value to determine which element to render.
We will render `Alert` component with different content value depending on current `range` value.
`"Pa"` is a unit of pressure in example context.

```tsx
import { Brizy } from "@brizy/core";
import { Icon } from "./Icon";
import React, { JSX, ReactElement } from "react";

interface Props {
  pressure: {
    from: number;
    to: number;
  };
}

const Button = (props: Props): JSX.Element => {
  const { from } = props.status;

  const renderAlert = (value: number): ReactElement => {
    if (value >= 80) {
      return <Alert content="Critical Pressure"/>
    }

    if (value >= 50) {
      return <Alert content="Danger Pressure"/>
    }

    return <Alert content="Normal Pressure"/>
  }

  return (
    <button className="button" onClick={() => renderAlert(from)}>
      <span>Current Temperature: {from}</span>
      <Icon name="nc-pressure"/>
    </button>
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
                id: "pressure",
                type: "range",
                config: {
                  min: 0,
                  max: 100,
                  unit: "Pa"
                }
              }
            ]
          }
        ]
      }
    ];
  }
});
```
