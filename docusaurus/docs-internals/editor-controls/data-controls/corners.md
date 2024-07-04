---
toc_max_heading_level: 4
---

# Corners

The `corners` control provides an interface to modify the CSS `border-radius` property of elements.

Example of grouped `corners`:<br/>
![CornersGrouped](/img/controls/cornerGrouped.png)<br/>
![CornersGrouped](/img/controls/cornerGroupedSecond.png)<br/><br/>
Example of ungrouped `corners`:<br/>
![CornersUngrouped](/img/controls/cornerUngrouped.png)

### Parameters

| Name               | Type                                                                                                                                                                                       |   Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                                   |      -       | The identifier of the key where the control will save your data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `type`             | `string`                                                                                                                                                                                   |      -       | Type should be `"corners"` to use this control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `label?`           | `string`                                                                                                                                                                                   |      -       | The label displayed on the left side of the control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `icon?`            | `string`                                                                                                                                                                                   |      -       | Icon name that will be rendered on left side of the control's label. View all [icons](../../icons/)                                                                                                                                                                                                                                                                                                                            |
| `position?`        | `number`                                                                                                                                                                                   |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `roles?`           | `Array<Role>`                                                                                                                                                                              |      -       | Render the control only if the current user's role matches one of the roles in the provided array <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                                   |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `disabled?`        | `boolean`                                                                                                                                                                                  |   `false`    | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `helper?.content`  | `string`                                                                                                                                                                                   |      -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` |   `"top"`    | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `states?`          | `Array<State>`                                                                                                                                                                             | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination)                                                                                         |
| `config?.units`    | `Array<Unit>`                                                                                                                                                                              | `["px","%"]` | The units of measurement displayed next to the slider value.<br/> Accepts CSS units (`"px"`, `"%"`) <br/> <br/> <b>`Unit = "px" \| "%"`</b>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `default?`         | `Default`                                                                                                                                                                                  |      -       | The default control value. <br/> <br/> <b>`Default: { value: {radiusType: string; radius: number; radiusSuffix: string; topLeftRadius: number; topLeftRadiusSuffix: string; topRightRadius: number; topRightRadiusSuffix: string; bottomRightRadius: number; bottomRightRadiusSuffix: string; bottomLeftRadius: number; bottomLeftRadiusSuffix: string;}; }`</b> <br/> <br/> `radiusType`- Indicates if the same radius is applied to all corners(`"grouped"`) or if each corner has a different radius (`"ungrouped"`); <br/>`radius`- The radius value applied to all corners when `radiusType` is `"grouped"`; <br/>`radiusSuffix` - The unit for the uniform radius, either `"px"` for pixels or `"%"` for percentages; <br/>`topLeftRadius` - The radius value applied specifically to the top-left corner; <br/>`topLeftRadiusSuffix`- The unit for the top-left corner radius, either `"px"` or `"%"`; <br/>`topRightRadius`- The radius value applied specifically to the top-right corner; <br/>`topRightRadiusSuffix` - The unit for the top-right corner radius, either `"px"` or `"%"`; <br/>`bottomRightRadius` - The radius value applied specifically to the bottom-right corner; <br/>`bottomRightRadiusSuffix` - The unit for the bottom-right corner radius, either `"px"` or `"%"`; <br/>`bottomLeftRadius` - The radius value applied specifically to the bottom-left corner; <br/>`bottomLeftRadiusSuffix` - The unit for the bottom-left corner radius, either `"px"` or `"%"`; <br/> |
| `selector?` | `string` | - | The CSS selector to which the styles will be applied |
| `style?`           | `function`                                                                                                                                                                                 |      -       | This function generates CSS output based on the value from the control. The parameter is an object containing a `value` key, which holds the current value of the control. The function returns an object with a CSS selector key and CSS property values. <pre>`style: ({value}) => {`<br/>  `return {`<br/>  `"{{WRAPPER}} .brz-ui-ed-map-content": {`<br/>  `display: value.type === "grouped" ? "flex" : "none"`<br/>  `}`<br/> `}`<br/>`}`</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "radius",
  type: "corners"
}
```

### Return value

Returns an object with the following values:

```js
{
  radiusType: "grouped" | "ungrouped",
  radius: number,
  radiusSuffix: "px" | "%",
  topLeftRadius: number,
  topLeftRadiusSuffix: "px" | "%",
  topRightRadius: number,
  topRightRadiusSuffix: "px" | "%",
  bottomRightRadius: number,
  bottomRightRadiusSuffix: "px" | "%",
  bottomLeftRadius: number,
  bottomLeftRadiusSuffix: "px" | "%"
}
```

Example of value:

`radiusType`- Indicates if the same radius is applied to all corners (`"grouped"`) or if each corner has a different radius (`"ungrouped"`); <br/>
`radius`- The radius value applied to all corners when `radiusType` is `"grouped"`; <br/>
`radiusSuffix` - The unit for the uniform radius, either `"px"` for pixels or `"%"` for percentages; <br/>
`topLeftRadius` - The radius value applied specifically to the top-left corner; <br/>
`topLeftRadiusSuffix`- The unit for the top-left corner radius, either `"px"` or `"%"`; <br/>
`topRightRadius`- The radius value applied specifically to the top-right corner; <br/>
`topRightRadiusSuffix` - The unit for the top-right corner radius, either `"px"` or `"%"`; <br/>
`bottomRightRadius` - The radius value applied specifically to the bottom-right corner; <br/>
`bottomRightRadiusSuffix` - The unit for the bottom-right corner radius, either `"px"` or `"%"`; <br/>
`bottomLeftRadius` - The radius value applied specifically to the bottom-left corner; <br/>
`bottomLeftRadiusSuffix` - The unit for the bottom-left corner radius, either `"px"` or `"%"`; <br/>

```js
{
  radiusType: "ungrouped",
  radius: 10,
  radiusSuffix: "%",
  topLeftRadius: 10,
  topLeftRadiusSuffix: "px",
  topRightRadius: 20,
  topRightRadiusSuffix: "%",
  bottomRightRadius: 20,
  bottomRightRadiusSuffix: "px",
  bottomLeftRadius: 10,
  bottomLeftRadiusSuffix: "px"
}
```

### Usage

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "radius",
  type: "corners",
  label: "Corner"
}
```

#### Icon example

Adding a "round" icon to the left of the control's label.

```js
{
  id: "radius",
  type: "corners",
  icon: "nc-round"
}
```
#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "radius",
  type: "corners",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "radius",
  type: "corners",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "radius",
  type: "corners",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "radius",
  type: "corners",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "radius",
  type: "corners",
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
      id: "radius",
      type: "corners",
      disabled: videoType === "custom"
    }
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"Border Radius"`, which will be displayed as additional
guidance or information for the user.

```js
{
  id: "radius",
  type: "corners",
  helper: {
    content: "Border Radius"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will
be displayed at the top left corner of the icon.

```js
{
  id: "radius",
  type: "corners",
  helper: {
    content: "Border Radius",
    position: "top-start"
  }
}
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "radius",
  type: "corners",
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "radius",
  type: "corners",
  states: ["normal", "hover", "active"]
}
```

#### Config `units` example

The `config.units` property is set to `"%"`, indicating that the configuration values will be interpreted as percentages relative to the element's dimensions.

```js
{
  id: "radius",
  type: "corners",
  config: {
    units: ["%"]
  }
}
```

#### Default value examples

In this example, the corners is `ungrouped` with default values specified for each corner of the element.

```js
{
  id: "radius",
  type: "corners",
  default: {
    radiusType: "ungrouped",
    topLeftRadius: 10,
    topLeftRadiusSuffix: "px",
    topRightRadius: 20,
    topRightRadiusSuffix: "%",
    bottomRightRadius: 20,
    bottomRightRadiusSuffix: "px",
    bottomLeftRadius: 10,
    bottomLeftRadiusSuffix: "px"
  }
}
```

In this example, the corners is `grouped` with a single radius for the border radius and a suffix of `"px"`.

```js
{
  id: "radius",
  type: "corners",
  default: {
   radiusType: "grouped",
   radius: "10",
   radiusSuffix: "px"
  }
}
```

#### CSS examples (`selector`, `style`)

Configure the CSS `border-radius` property of the `.brz-ui-ed-map-content` element using `selector`. All the styles will be applied automatically.

```js
{
  id: "radius",
  type: "corners",
  selector: "{{WRAPPER}} .brz-ui-ed-map-content"
}
```

Show or hide the `.brz-ui-ed-map-content` element with CSS using a corners control value.

```js
{
  id: "radius",
  type: "corners",
  style: ({ value }) => {
    if (value.type === "grouped") {
      return {
        "{{WRAPPER}} .brz-ui-ed-map-content": {
          display: "block"
        }
      }
    }

    return {
      "{{WRAPPER}} .brz-ui-ed-map-content": {
        display: "none"
      }
    }
  }
}

```

Change the `pointer-events` and `display` properties of the `.brz-ui-ed-map-content` and `.brz-map` elements with CSS.

```js
{
  id: "radius",
  type: "corners",
  style: ({ value }) => {
    const isEnabled = value.unit === "px" && value.value.length > 0;

    return {
      "{{WRAPPER}} .brz-ui-ed-map-content, {{WRAPPER}} .brz-map": {
        "pointer-events": isEnabled ? "all" : "none",
        "display": isEnabled ? "flex": "block"
      }
    }
  }
}
```

The style function dynamically generates the CSS based on whether the control is `grouped` or `ungrouped`. If the control is `ungrouped`, individual values and units are applied to each corner. If the control is `grouped`, a single value and unit are applied to all corners.

```js
{
  id: "radius",
  type: "corners",
  style: ({ value }) => {
    if (value.type === "ungrouped") {
      return {
        "{{WRAPPER}} .brz-ui-ed-map-content": {
          "border-top-left-radius": `${value.topLeft}${value.topLeftUnit}`,
          "border-top-right-radius": `${value.topRight}${value.topRightUnit}`,
          "border-bottom-left-radius": `${value.bottomLeft}${value.bottomLeftUnit}`,
          "border-bottom-right-radius": `${value.bottomRight}${value.bottomRightUnit}`
        }
      };
    }

    return {
      "{{WRAPPER}} .brz-ui-ed-map-content": {
        "border-radius": `${value.value}${value.unit}`
      }
    };
  }
}

```

#### Usage in HTML example

The `corners` control is a React functional component designed to manage and display corner values with units. It extracts various properties from the value prop, including corner dimensions and their respective units, and organizes them into a structured object.

```tsx
import { Brizy } from "@brizy/core";
import React, { JSX } from "react";

interface Props {
  borderRadiusType: "ungrouped" | "grouped",
  borderRadius: number,
  borderRadiusSuffix: "%" | "px",
  borderTopLeftRadius: number,
  borderTopLeftRadiusSuffix: "%" | "px",
  borderTopRightRadius: number,
  borderTopRightRadiusSuffix: "%" | "px",
  borderBottomRightRadius: number,
  borderBottomRightRadiusSuffix: "%" | "px",
  borderBottomLeftRadius: number,
  borderBottomLeftRadiusSuffix: "%" | "px"
}

export const Corners = (props: Props): JSX.Element => {
  const {
    borderRadiusType,
    borderRadius,
    borderRadiusSuffix,
    borderTopLeftRadius,
    borderTopLeftRadiusSuffix,
    borderTopRightRadius,
    borderTopRightRadiusSuffix,
    borderBottomRightRadius,
    borderBottomRightRadiusSuffix,
    borderBottomLeftRadius,
    borderBottomLeftRadiusSuffix,
    children
  } = props;

  const groupedStyle = {
    borderRadius: `${borderRadius}${borderRadiusSuffix}`
  };

  const ungroupedStyle = {
    borderTopLeftRadius: `${borderTopLeftRadius}${borderTopLeftRadiusSuffix}`,
    borderTopRightRadius: `${borderTopRightRadius}${borderTopRightRadiusSuffix}`,
    borderBottomRightRadius: `${borderBottomRightRadius}${borderBottomRightRadiusSuffix}`,
    borderBottomLeftRadius: `${borderBottomLeftRadius}${borderBottomLeftRadiusSuffix}`
  };

  return (
    <div style={borderRadiusType === "grouped" ? groupedStyle : ungroupedStyle}>
      {children}
    </div>
  );
};

Brizy.registerComponent(Corners, {
  id: "ThirdParty.Corners",
  component: { editor: Corners, view: Corners },
  title: "Border Radius",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".brz-ui-ed-map-content",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-radius",
              title: "Border Radius"
            },
            devices: "desktop",
            options: [
              {
                id: "border",
                type: "corners",
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
