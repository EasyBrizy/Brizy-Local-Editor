---
toc_max_heading_level: 4
---

# Group

Brizy's `group` control simplifies the interface by removing the divider line between controls, creating a more
streamlined
and cohesive layout.

Example of controls wrapped in `group` control:

![Group](/img/controls/grouped-controls.png)

Example of the same controls without `group` control:

![NoGroup](/img/controls/no-grouped-controls.png)

### Parameters

| Name         | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                             |
|:-------------|:-----------------------------------------|:------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`         | `string`                                 |      -       | The identifier of the key where the switch will save your data                                                                                                                                                                                                                                                                          |
| `type`       | `string`                                 |      -       | Type should be `"group"` to use this control                                                                                                                                                                                                                                                                                            |
| `position?`  | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                                  |
| `className?` | `string`                                 |      -       | The custom CSS class name that will be set on the control. It can be used to modify the control styles.                                                                                                                                                                                                                                 |
| `roles?`     | `Array<Role>`                            |      -       | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                           | string`**                                                                                                                                                                                                                                                                                                  |
| `devices?`   | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                       |
| `states?`    | `Array<State>`                           | [`"normal"`] | Allows for different styles based on the element's state <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination) |
| `disabled?`  | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                 |
| `options`    | `Array<ControlItem>`                     |      -       | An array of controls that will be grouped together.  <br/><br/> **```ControlItem : {id: number; type: string; disabled: boolean; position: number; devices: "all"` \| `"desktop"` \| `"responsive"}```**                                                                                                                                |

### Basic example

In this example, we implemented the group control with two options wrapped in it.

```js
const getToolbarItems = ({ getValue }) => {
  const closeButtonState = getValue("closeButtonState");

  return [
    {
      id: "groupCloseButton",
      type: "group",
      devices: "desktop",
      options: [
        {
          id: "closeButtonState",
          type: "switch",
          label: "Display Close Button"
        },
        {
          id: "delay",
          label: "Delay",
          type: "slider",
          disabled: closeButtonState === "off",
          config: {
            min: 0,
            max: 10,
            units: [{ title: "s", value: "s" }]
          }
        }
      ]
    }
  ]
}
```

### Return value
This control does not return a value.

### Usage

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "borderRadiusTypeGroup",
  type: "group",
  className: "brz-radius-group",
  options: [
    {
      id: "borderRadiusType",
      label: "Corner",
      type: "radioGroup",
      choices: [
          { value: "square", icon: "nc-corners-square" },
          { value: "rounded", icon: "nc-corners-round" },
          { value: "custom", icon: "nc-more" }
      ]
    },
    {
      id: "borderRadius",
      type: "slider"
    }
  ]
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "groupControl",
  type: "group",
  roles: ["admin", "designer"]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "groupControl",
  type: "group",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "groupControl",
  type: "group",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "groupControl",
  type: "group",
  devices: "responsive"
}
```


#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "groupControl",
  type: "group", 
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "groupControl",
  type: "group", 
  states: ["normal", "hover", "active"]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "groupControl", 
  type: "group",
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
      id: "groupCloseButton",
      type: "group",
      devices: "desktop",
      disabled: videoType === "custom",
      options: [
        {
          id: "closeButtonState",
          type: "switch",
          label: "Display Close Button"
        },
        {
          id: "delay",
          label: "Delay",
          type: "slider",
          disabled: closeButtonState === "off",
          config: {
            min: 0,
            max: 10,
            units: [{ title: "s", value: "s" }]
          }
        }
      ]
    }
  ]
}
```
