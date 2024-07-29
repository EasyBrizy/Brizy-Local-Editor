---
toc_max_heading_level: 4
---
# Margin

The `margin` control in Brizy provides a set of sliders that allow you to adjust the margin of a component in four directions: `top`, `bottom`, `left`, and `right`.

Example of `grouped` control:

![GroupedUnits](/img/controls/marginGroupedUnits.png)
![Grouped](/img/controls/marginGrouped.png)

Example of `ungrouped` control:

![Ungrouped](/img/controls/marginUngrouped.png)

### Parameters

| Name            | Type           |       Default       | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:----------------|:---------------|:-------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`            | `string`       |          -          | The identifier of the key where the `margin` will save your data.                                                                                                                                                                                                                                                                                                                                                             |
| `type`          | `string`       |          -          | Type should be `"margin"` to use this control.                                                                                                                                                                                                                                                                                                                                                                                |
| `label?`        | `string`       |          -          | The label displayed on the left side of the control.                                                                                                                                                                                                                                                                                                                                                                          |
| `icon?`         | `string`       |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                          |
| `position?`     | `number`       |          -          | The position of the control in toolbar.                                                                                                                                                                                                                                                                                                                                                                                       |
| `roles?`        | `Array<Role>`  |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`** | string`**  |
| `devices?`      | `"all"` \|   `"desktop"`  \| `"responsive"`   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`     | `boolean`      |       `false`       | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                       |
| `states?`       | `Array<State>` | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination).                                                                            |
| `config?.edges` | `"all"` \|      `"vertical"` \| `"horizontal"`  |   `"all"`    | The edges configuration value determines which axis actions are enabled. When set to horizontal, it enables actions along the x-axis. When set to vertical, it enables actions along the y-axis.                                                                                                                                                                                  |
| `config?.units` | `Array<Unit>`  |    `["px","%"]`     | The units of measurement displayed next to the slider value.<br/> Accepts CSS units (`"px"`, `"%"`) <br/> <br/> <b>`type Unit = "px" \| "%"`</b> |
| `default?`      | `Default`      |      -       | The default control value. <br/> <br/> <b>`Default: { type: "grouped" \| "ungrouped"; value: number; suffix: Unit; top: number; topSuffix: Unit; right: number; rightSuffix: Unit; bottom: number; bottomSuffix: Unit; left: number; leftSuffix: Unit;}`</b> <br/> <br/>  <b>`type Unit = "px" \| "%"`</b> <br/> <br/> `type` - Indicates if the same margin is applied to all spaces (`"grouped"`) or if each space has different margin (`"ungrouped"`); <br/> `value` - The margin value applied to all spaces when `type` is `"grouped"`; <br/> `value` - The unit for the uniform margin, either `"px"` for pixels or `"%"` for percentages; <br/> `top` - The margin value applied specifically to the top space; <br/> `topSuffix` - The unit for the top space margin, either `"px"` or `"%"`; <br/> `right` - The margin value applied specifically to the right space; <br/> `rightSuffix` - The unit for the right space margin, either `"px"` or `"%"`; <br/> `bottom` - The margin value applied specifically to the bottom space; <br/> `bottomSuffix` - The unit for the bottom space margin, either `"px"` or `"%"`; <br/> `left` - The margin value applied specifically to the left space; <br/> `leftSuffix` - The unit for the left space margin, either `"px"` or `"%"`; <br/>|
| `selector?`     | `string`       | - | The CSS selector to which the styles will be applied                                                                                                                                                                                                                                                                                                                                                                          |
| `style?`        | `function`     |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => { `<br/>   `const {`<br/>   ` top,`<br/>    `topUnit,`<br/>    `right,`<br/>    `rightUnit,`<br/>    `bottom,`<br/>    `bottomUnit,`<br/>    `left,`<br/>    `leftUnit`<br/>  `} = value;`<br/> ` `<br/>  `return {`<br/>  `   "{{WRAPPER}} .brz-text": { `<br/>  `     "margin-top": ${top}${topUnit}, `<br/>  `    "margin-right": ${right}${rightUnit},`<br/>  `    "margin-bottom": ${bottom}${bottomUnit},`<br/>  `    "margin-left": ${left}${leftUnit}`  <br/>  `  }` <br/>`  };`<br/>};</pre> |

### Basic example
Standard definition with only the required keys. This control will be displayed on all devices. Suffix

```js
{
  id: "margin", 
  type: "margin"
}
```

### Return value

Returns an object with the following values:

```js
{
  type: "grouped" | "ungrouped";
  value: number;
  unit: "px" | "%";
  top: number;
  topUnit: "px" | "%";
  right: number;
  rightUnit: "px" | "%";
  bottom: number;
  bottomUnit: "px" | "%";
  left: number;
  leftUnit: "px" | "%";
}
```

Example of value:

```js
{
  type: "grouped",
  value: 10,
  unit: "px",
  top: 0,
  topUnit: "px",
  right: 0,
  rightUnit: "px",
  bottom: 0,
  bottomUnit: "px",
  left: 0,
  leftUnit: "px"
}
```

### Usage

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "margin", 
  label: "Space",
  type: "margin"
}
```

#### Icon example

Adding a `"margin"` icon to the left of the control's label.

```js
{
  id: "margin",
  type: "margin",
  icon: "nc-margin"
}
```

#### Roles example

Show the control only to users with `admin` and `designer` privileges.

```js
{
  id: "margin",
  type: "margin",
  roles: ["admin", "designer"]
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "margin", 
  type: "margin",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "margin", 
  type: "margin",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "margin", 
  type: "margin",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "margin", 
  type: "margin", 
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
      id: "margin",
      type: "margin",
      disabled: videoType === "custom"
    }
  ]
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "margin",
  type: "margin", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "margin",
  type: "margin", 
  states: ["normal", "hover", "active"]
}
```

#### Config value for `units` examples
The `units` property is set to `"%"`, indicating that the configuration values will be interpreted as percentages relative to the element's dimensions.

```js
{
  id: "margin", 
  type: "margin",
  config: {
    units: ["%"]
  }
}
```

#### Config value for `edges` examples
When the `edges` is `horizontal`, it will enable actions for `x` axis.
When the `edges` is `vertical`, it will enable actions for `y` axis.

```js
{
  id: "margin",
  type: "margin", 
  config: {
    edges: "horizontal"
  }
}
```

```js
{
  id: "margin",
  type: "margin", 
  config: {
    edges: "vertical"
  }
}
```

#### Default value examples

In this example, the `margin` control is defined with several default values that specify its initial state. The `id` and `type` properties both indicate that this control deals with `margin` settings. The `default` object within the control contains the properties and their default values.

```js
{
  id: "margin", 
  type: "margin",
  default: {
    type: "ungrouped",
    value: 10,
    suffix: "px",
    top: 0,
    topSuffix: "px",
    right: 0,
    rightSuffix: "px",
    bottom: 0,
    bottomSuffix: "px",
    left: 0,
    leftSuffix: "px"
  }
}
```

#### CSS examples (`selector`, `style`)

Configure the CSS `margin` property of the `.brz-container` element using `selector`. All the styles will be
applied automatically.

```js
{
  id: "margin",
  type: "margin",
  selector: ".brz-container"
}
```

This code dynamically adjusts the `margin` style of elements with the class `.brz-container` based on the `type` value. If the `type` is `"ungrouped"`, the elements will have `ungroupedMargin`; otherwise, they will have `groupedMargin`.

```js
{
  id: "margin",
  type: "margin",
  style: ({ value }) => {
    const { type, value, unit, top, topUnit, bottom , bottomUnit} = value;

    const groupedMargin = `${value}${unit}`;
    const ungroupedMargin = `${top}${topUnit} ${bottom}${bottomUnit}`;
    const margin = type === "grouped" ? groupedMargin : ungroupedMargin;

   return {
      ".brz-container": { margin  }
     }
   }
}
```

#### Usage in HTML example

In the example below, we use the `margin` property values to dynamically set the inline styles for the span element within the button. The `margin` values can be either in `pixels` ("px") or `percentages` ("%"). The button component accepts props for different types of margins, including a grouped `margin` and individual margins for each side. These props control the spacing around the button’s label.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

type Unit = "px" | "%";

interface Props {
  marginType: "grouped" | "ungrouped";
  margin: number;
  marginSuffix: Unit;
  marginTop: number;
  marginTopSuffix: Unit;
  marginRight: number;
  marginRightSuffix: Unit;
  marginBottom: number;
  marginBottomSuffix: Unit;
  marginLeft: number;
  marginLeftSuffix: Unit;
}

const Button = (props: Props): JSX.Element => {
  const {
    marginType,
    margin,
    marginSuffix,
    marginTop,
    marginTopSuffix,
    marginRight,
    marginRightSuffix,
    marginBottom,
    marginBottomSuffix,
    marginLeft,
    marginLeftSuffix
  } = props;

  const groupedMargin = `${margin}${marginSuffix}`;
  const ungroupedMargin = `${marginTop}${marginTopSuffix} ${marginRight}${marginRightSuffix} ${marginBottom}${marginBottomSuffix} ${marginLeft}${marginLeftSuffix}`;

  return (
    <div className="brz-button">
      <span style={{ margin: marginType === "grouped" ? groupedMargin : ungroupedMargin }}>Click</span>
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
            id: "settingsTabs",
            type: "tabs",
            tabs: [
              {
                id: "settingsStyling",
                label: "Basic",
                icon: "nc-styling",
                options: [
                  {
                    id: "margin",
                    label: "Margin",
                    type: "margin",
                    devices: "desktop"
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
