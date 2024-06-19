---
toc_max_heading_level: 4
---

# Group

Brizy's `group` control simplifies the interface by removing the divider line between controls, creating a more
streamlined
and cohesive layout.

### Parameters

| Name        | Type                                     | Default | Description                                                                                                                                                                                                                       |
|:------------|:-----------------------------------------|:-------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                 |    -    | The identifier of the key where the switch will save your data                                                                                                                                                                    |
| `type`      | `string`                                 |    -    | Type should be `"group"` to use this control                                                                                                                                                                                      |
| `position?` | `number`                                 |    -    | The position of the control in toolbar                                                                                                                                                                                            |
| `devices?`  | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?` | `boolean`                                | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                           |
| `options`   | `Array<ControlItem>`                     |    -    | An array of controls that will be grouped together.  <br/><br/> **```ControlItem : {id: number; type: string; disabled: boolean; position: number; devices: "all"` \| `"desktop"` \| `"responsive"}```**                          |

Example of controls wrapped in `group` control:

![Group](/img/group-controls/grouped-controls.png)

Example of the same controls without `group` control:

![NoGroup](/img/group-controls/no-grouped-controls.png)

### Usage

#### Basic example

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



### Return value
This control does not return a value.
