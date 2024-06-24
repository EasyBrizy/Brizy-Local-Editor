---
sidebar_position: 1
toc_max_heading_level: 4
---
# Padding

The `padding` control in Brizy provides a set of sliders that allow you to adjust the padding of a component in four directions: `top`, `bottom`, `left`, and `right`.

Example of `grouped` control:

![GroupedUnits](/img/controls/paddingGroupUnits.png)
![Grouped](/img/controls/paddingGroup.png)

Example of `ungrouped` control:

![Ungrouped](/img/controls/paddingUngroup.png)

### Parameters

| Name            | Type                                    |    Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:----------------|:----------------------------------------|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`            | `string`                                |       -       | The identifier of the key where the `padding` will save your data                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`          | `string`                                |       -       | Type should be `"padding"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `label?`        | `string`                                |       -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `icon?`         | `string`       |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/).                                                                                                                                                                                                                                                                                                                                                                |
| `position?`     | `number`                                |       -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `roles?`        | `Array<Role>` | - | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`** | string`** |
| `devices?`      | `"all"` \|`"desktop"`  \| `"responsive"`  |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`     | `boolean`       |    `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                             |
| `states?`       | `Array<State>` | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination). |
| `config?.units` | `Array<Unit>`   | `["px","%"]`  | The units of measurement displayed next to the slider value.<br/> Accepts CSS units (`"px"`, `"%"`) <br/> <br/> <b>`type Unit = "px" \| "%"`</b> |
| `default?`      | `Default` | - | The default control value. <br/> <br/> <b>`Default: { type: "grouped" \| "ungrouped"; value: number; suffix: Unit; top: number; topSuffix: Unit; right: number; rightSuffix: Unit; bottom: number; bottomSuffix: Unit; left: number; leftSuffix: Unit;}`</b> <br/> <br/><b> `type Unit = "px" \| "%"`</b> <br/> <br/> `type` - Indicates if the same padding is applied to all spaces (`"grouped"`) or if each space has different padding (`"ungrouped"`); <br/> `value` - The padding value applied to all spaces when `paddingType` is `"grouped"`; <br/> `suffix` - The unit for the uniform padding, either `"px"` for pixels or `"%"` for percentages; <br/> `top` - The padding value applied specifically to the top space; <br/> `topSuffix` - The unit for the top space padding, either `"px"` or `"%"`; <br/> `right` - The padding value applied specifically to the right space; <br/> `rightSuffix` - The unit for the right space padding, either `"px"` or `"%"`; <br/> `bottom` - The padding value applied specifically to the bottom space; <br/> `bottomSuffix` - The unit for the bottom space padding, either `"px"` or `"%"`; <br/> `left` - The padding value applied specifically to the left space; <br/> `leftSuffix ` - The unit for the left space padding, either `"px"` or `"%"`; <br/>|
| `selector?`     | `string` | - | The CSS selector to which the styles will be applied                                                                                                                                                                                                                                                                                                                                                                                                                |
| `style?`        | `function`     |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values.  <pre>`style: ({value}) => { `<br/>   `const {`<br/>   ` top,`<br/>    `topUnit,`<br/>    `right,`<br/>    `rightUnit,`<br/>    `bottom,`<br/>    `bottomUnit,`<br/>    `left,`<br/>    `leftUnit`<br/>  `} = value;`<br/> ` `<br/>  `return {`<br/>  `   "{{WRAPPER}} .brz-text": { `<br/>  `     "padding-top": ${top}${topUnit}, `<br/>  `    "padding-right": ${right}${rightUnit},`<br/>  `    "padding-bottom": ${bottom}${bottomUnit},`<br/>  `    "padding-left": ${left}${leftUnit}`  <br/>  `  }` <br/>`  };`<br/>};</pre> |
### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "padding", 
  type: "padding"
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
  id: "padding", 
  label: "Space",
  type: "padding"
}
```

#### Icon example

Adding a `"padding"` icon to the left of the control's label.

```js
{
  id: "padding",
  type: "padding",
  icon: "nc-padding"
}
```

#### Roles example

Show the control only to users with `admin` and `designer` privileges.

```js
{
  id: "padding",
  type: "padding",
  roles: ["admin", "designer"]
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "padding", 
  type: "padding",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "padding", 
  type: "padding",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "padding", 
  type: "padding",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "padding", 
  type: "padding", 
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
      id: "padding",
      type: "padding",
      disabled: videoType === "custom"
    }
  ]
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "padding",
  type: "padding", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "padding",
  type: "padding", 
  states: ["normal", "hover", "active"]
}
```
#### Config value for `units` examples
The `units` property is set to `"%"`, indicating that the configuration values will be interpreted as percentages relative to the element's dimensions.

```js
{
  id: "padding", 
  type: "padding",
  config: {
    units: ["%"]
  }
}
```

#### Default value examples

In this example, the `padding` control is defined with several default values that specify its initial state. The `id` and `type` properties both indicate that this control deals with `padding` settings. The `default` object within the control contains the properties and their default values.

```js
{
  id: "padding", 
  type: "padding",
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

Configure the CSS `padding` property of the `.brz-container` element using `selector`. All the styles will be
applied automatically.

```js
{
  id: "padding",
  type: "padding",
  selector: ".brz-container"
}
```

This code dynamically adjusts the `padding` style of elements with the class `.brz-container` based on the `type` value. If the `type` is `"ungrouped"`, the elements will have `ungroupedPadding`; otherwise, they will have `groupedPaddings`.

```js
{
  id: "padding",
  type: "padding",
  style: ({ value }) => {
    const { type, value, unit, top, topUnit, bottom , bottomUnit} = value;

    const groupedPadding = `${value}${unit}`;
    const ungroupedPadding = `${top}${topUnit} ${bottom}${bottomUnit}`;
    const padding = type === "grouped" ? groupedPadding : ungroupedPadding;

    return {
      ".brz-container": { padding  }
    }
  }
}
```
#### Usage in HTML example

In the example below, we use the `padding` property values to dynamically set the inline styles for the span element within the button. The `padding` values can be either in `pixels` ("px") or `percentages` ("%"). The button component accepts props for different types of paddings, including a grouped `padding` and individual paddings for each side. These props control the spacing around the button’s label.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

type Unit = "px" | "%";

interface Props {
  paddingType: "grouped" | "ungrouped";
  padding: number;
  paddingSuffix: Unit;
  paddingTop: number;
  paddingTopSuffix: Unit;
  paddingRight: number;
  paddingRightSuffix: Unit;
  paddingBottom: number;
  paddingBottomSuffix: Unit;
  paddingLeft: number;
  paddingLeftSuffix: Unit;
}

const Button = (props: Props): JSX.Element => {
  const {
    paddingType,
    padding,
    paddingSuffix,
    paddingTop,
    paddingTopSuffix,
    paddingRight,
    paddingRightSuffix,
    paddingBottom,
    paddingBottomSuffix,
    paddingLeft,
    paddingLeftSuffix
  } = props;

  const groupedPadding = `${padding}${paddingSuffix}`;
  const ungroupedPadding = `${paddingTop}${paddingTopSuffix} ${paddingRight}${paddingRightSuffix} ${paddingBottom}${paddingBottomSuffix} ${paddingLeft}${paddingLeftSuffix}`;

  return (
    <div className="brz-button">
      <span style={{ padding: paddingType === "grouped" ? groupedPadding : ungroupedPadding }}>Click</span>
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
                    id: "padding",
                    label: "Padding",
                    type: "padding",
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
