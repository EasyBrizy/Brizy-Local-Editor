---
sidebar_position: 2
toc_max_heading_level: 4
---

# Toggle

The toggle control in Brizy functions as a switchable interactive element, enabling users to toggle between multiple states.

Example of the toggle:

![Toggle](/img/controls/toggle-left.png)<br/>
![Toggle](/img/controls/toggle-center.png)<br/>
![Toggle](/img/controls/toggle-right.png)<br/>

### Parameters

| Name        | Type                                     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                     |
|:------------| :--------------------------------------- | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | `string`                                 |    -    | The identifier of the key where the toggle will save your data                                                                                                                                                                                                                                                                                                                                  |
| `type`      | `string`                                 |    -    | Type should be `"toggle"` to use this control                                                                                                                                                                                                                                                                                                                                                   |
| `position?` | `number`                                 |    -    | The position of the control in toolbar                                                                                                                                                                                                                                                                                                                                                          |
| `devices?`  | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                               |
| `disabled?` | `boolean`                                | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                         |
| `choices`   | `Array<Choice>`                          |  `[]`   | Choices is an array of objects, where each object represents a choice with a specific `title`, `value` , and `icon`. <br/><br/><b>`Choice: { title: string, icon: string, value: string }`</b> <br/><br/>`title`: The title of the element, which appears on hover.<br/>`icon`: The icon associated with the element.<br/>`value`: The value returned by the control when a choice is selected. |

### Return value

The return value is determined by the options configuration, the `choices.value` property.

```js
{
  value: string;
}
```

### Usage

#### Basic example

Standard definition with only the required keys.
<br/>This control will be displayed on all devices.

```js
{
  id: "size",
  type: "toggle",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "size",
  type: "toggle",
  devices: "all",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "size",
  type: "toggle",
  devices: "desktop",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "size",
  type: "toggle",
  devices: "responsive",
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
  ]
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "size",
  type: "toggle",
  disabled: true,
  choices: [
    { icon: "nc-text-align-left", title: "Left", value: "left" },
    { icon: "nc-text-align-center", title: "Center", value: "center" },
    { icon: "nc-text-align-right", title: "Right", value: "right" }
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
      id: "size",
      type: "toggle",
      disabled: videoType === "custom",
      choices: [
        { icon: "nc-text-align-left", title: "Left", value: "left" },
        { icon: "nc-text-align-center", title: "Center", value: "center" },
        { icon: "nc-text-align-right", title: "Right", value: "right" },
      ],
    },
  ];
};
```
