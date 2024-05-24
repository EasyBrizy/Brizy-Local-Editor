---
toc_max_heading_level: 4
---
# Filters

The control provides a user interface for adjusting CSS `filter` properties. It features four sliders, each responsible for modifying a specific filter property: `hue`, `brightness`, `contrast`, and `saturation`.

Example of control:

![Filters](/img/multivalue-controls/filters.png)

Example of control with state `"hover"`:

![Filters](/img/multivalue-controls/filters-hover.png)

### Parameters

| Name        | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                     |
|:------------|:-----------------------------------------|:------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                 |      -       | The identifier of the key where the switch will save your data                                                                                                                                                                                                                                                                  |
| `type`      | `string`                                 |      -       | Type should be `"filters"` to use this control                                                                                                                                                                                                                                                                                  |
| `position?` | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                          |
| `devices?`  | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                |
| `disabled?` | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                         |
| `states?`   | `Array<State>`                           | [`"normal"`] | Allow usage of this control in different states. <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination) |

### Return value

Control returns an object with current values for each filter property.

```js
{
  hue: number;
  brightness: number;
  contrast: number;
  saturation: number;
}
```

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "filters",
  type: "filters"
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "filters",
  type: "filters",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "filters",
  type: "filters",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "filters",
  type: "filters",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "filters",
  type: "filters", 
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
      id: "filters",
      type: "filters",
      disabled: videoType === "custom"
    }
  ]
}
```

#### States example

Use the control in the `normal` and `hover` states independently.

```js
{
  id: "filters",
  type: "filters", 
  states: ["normal", "hover"]
}
```
