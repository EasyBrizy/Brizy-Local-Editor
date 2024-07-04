---
toc_max_heading_level: 4
---

# Range

A `range` input, commonly known as a `range` slider, is an interactive control enabling users to select a span of values within a specified numerical interval.

Example of the `range`:<br/>
![Range](/img/controls/range.png)<br/>
Example of the `range` with unit:<br/>
![Range](/img/controls/rangeUnit.png)<br/>
Example of the `range` with helper:<br/>
![Range](/img/controls/rangeHelp.png)<br/>
Example of the `range` with start and end label:<br/>
![Range](/img/controls/rangeLabel.png)<br/>

### Parameters

| Name                 | Type                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                      |
|:---------------------| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `string`                                                                                                                                                                                   |    -    | The identifier of the key where the `range` will save your data                                                                                                                                                                    |
| `type`               | `string`                                                                                                                                                                                   |    -    | Type should be `"range"` to use this control                                                                                                                                                                                     |
| `label?`             | `string`                                                                                                                                                                                   |    -    | The label displayed on the left side of the control                                                                                                                                                                              |
| `className?`       | `string`                                                                                                                                                                                   |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles                                                                                                                                                                                                                                                                                                                         |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/)                                                                                                                                                                                                                                                                                                                           |
| `position?`          | `number`                                                                                                                                                                                   |    -    | The position of the control in toolbar                                                                                                                                                                                           |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                           | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`           | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices |
| `disabled?`          | `boolean`                                                                                                                                                                                  | `false` | Configure the condition under which the control is disabled or enabled                                                                                                                                                           |
| `display?`         | `"inline" \| "block"`                                                                                                                                                                      |  `"inline"`   | Configure how the control and its label will be arranged. If `display` is `"inline"` then label and control will be in one row, if `display` is `"block"` then label will be in one row, and the next row down will be the control.                                                                                                                                                                                             |
| `helper?.content`    | `string`                                                                                                                                                                                   |    -    | If provided, displays an icon next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                     |
| `helper?.position`   | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                         |
| `config?.min`        | `number`                                                                                                                                                                                   |   `0`   | The minimum value allowed on the range scale                                                                                                                                                                                     |
| `config?.max`        | `number`                                                                                                                                                                                   |  `100`  | The maximum value allowed on the range scale                                                                                                                                                                                     |
| `config?.step`       | `number`                                                                                                                                                                                   |   `1`   | The incremental step between values on the range scale                                                                                                                                                                           |
| `config?.updateRate` | `number`                                                                                                                                                                                   |  `50`   | The frequency of value updates, typically in milliseconds                                                                                                                                                                        |
| `config?.unit`       | `string`                                                                                                                                                                                   |    -    | The unit of measurement for the values displayed on the range scale                                                                                                                                                              |
| `config?.startLabel` | `string`                                                                                                                                                                                   |    -    | The label indicating the starting point of the range                                                                                                                                                                             |
| `config?.endLabel`   | `string`                                                                                                                                                                                   |    -    | The label indicating the ending point of the range                                                                                                                                                                               |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { from: number;  to: number;}`</b> <br/> <br/> `from` - the control's start value <br/>                                                                  `to` - the control's end value <br/>                                                                                                                                                                                                                                                                                                                |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => {`<br/> `return {`<br/>  `"{{WRAPPER}} .brz-range": {`<br/>   `background: value.from >= 10 ? "red" : "green"`<br/>  `}`<br/> `}`<br/>`}`</pre> |

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

Example of value:
```js
{
  from: 10,
  to: 90
}
```

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
  type: "range",
  className: "myRange"
}
```

#### Icon example

Adding a "range" icon to the left of the control's label.

```js
{
  id: "interval",
  type: "range",
  icon: "nc-range"
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
        { title: "Custom", value: "custom" }
      ]
    },
    {
      id: "interval",
      type: "range",
      disabled: videoType === "custom"
    }
  ];
};
```

#### Display examples
In this example, with `display: "block"`, the label will be rendered on the first row and the control on the second.

```js
{
  id: "interval",
  type: "range",
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

In this example, the default values for the `range` control will start with a from value of `10` and a to value of `100`.

```js
{
  id: "interval",
  type: "range",
  default: {
    from: 10,
    to: 100
  }
}
```

#### CSS examples

Change the background color of the `.brz-range` element using a range control value. If `value.from` is greater than or equal to 20, the color is red; otherwise, the color is green.

```js
{
  id: "interval",
  type: "range",
  style: ({ value }) => {
    if (value.from >= 20) {
      return {
        "{{WRAPPER}} .brz-range": {
          background: "red"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-range": {
        background: "green"
      }
    }
  }
}

```


#### Usage in HTML example

In the example below, we use the Range output values ( `priceFrom` and `priceTo` ). The Range component will render a `range` input control with a minimum value of `priceFrom` and a maximum value of `priceTo`.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  priceFrom: number;
  priceTo: number;
}

const Price = (props: Props): JSX.Element => {
  const { priceFrom, priceTo } = props;

  return (
    <div>
      <h3>Filtering price range</h3>
      <span>From: {priceFrom}</span>
      <span>To: {priceTo}</span>
    </div>
  );
};

Brizy.registerComponent({
  id: "ThirdParty.Price",
  component: { editor: Price, view: Price },
  title: "My Price",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-range",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-price",
              title: "Range"
            },
            devices: "desktop",
            options: [
              {
                id: "price",
                type: "range",
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
