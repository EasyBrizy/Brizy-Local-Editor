---
toc_max_heading_level: 4
---

# Saved Block

Brizy's control `savedBlock` features a panel button that can trigger a click event based on user interaction.

Example of the `savedBlock`:

![Button](/img/ui-controls/savedBlock.png)

### Parameters

| Name                     | Type                                     |       Default       | Description                                                                                                                                                                                                                       |
| :----------------------- | :--------------------------------------- | :-----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                                 |          -          | The identifier of the key where the savedBlockOption will save your data.                                                                                                                                                         |
| `type`                   | `string`                                 |          -          | Type should be `"savedBlock"` to use this control.                                                                                                                                                                                |
| `position?`              | `number`                                 |          -          | The position of the control in toolbar.                                                                                                                                                                                           |
| `devices?`               | `"all"` \| `"desktop"` \| `"responsive"` |       `"all"`       | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`              | `boolean`                                |       `false`       | Configure the condition under which the control is disabled or enabled                                                                                                                                                            |
| `config?.icon`           | `string`                                 | `"nc-save-section"` | The icon to be displayed for the control                                                                                                                                                                                          |
| `config?.tooltipContent` | `string`                                 |          -          | The tooltip text to be displayed when hovering over the control                                                                                                                                                                   |
| `config?.title`          | `string`                                 |       `"Add"`       | The title text to be displayed on the control                                                                                                                                                                                     |
| `config?.blockId`        | `string`                                 |          -          | The identifier of the block to be saved                                                                                                                                                                                           |
| `config?.blockType`      | `"normal"` \| `"popup"`                  |     `"normal"`      | The type of the block to be saved, either `"normal"` for standard blocks or `"popup"` for popup blocks                                                                                                                            |

### Usage

#### Basic example

Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
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
      id: "duplicate",
      type: "button",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Config `icon` example

The `icon` property specifies the icon to be used for the savedBlock button.<br/> Here, `"nc-add"` is the name of the icon.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  config: {
    icon: "nc-add"
  }
}
```

#### Config `tooltipContent` example

The `tooltipContent` property defines the text that will appear as a tooltip when the user hovers over the savedBlock.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  config: {
   tooltipContent: "Saved",
  }
}
```

#### Config `title` example

The `title` property specifies the tooltip text for the savedBlock button.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  config: {
    title: "Saved"
  }
}
```

#### Config `blockId` example

The `blockId` property assigns a unique identifier to the saved block.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  config: {
    blockId: "makeItSaved"
  }
}
```

#### Config `blockType` example

The `blockType` property specifies the type of the block to be saved, which can either be `"normal"` for standard blocks or `"popup"` for popup blocks.

```js
{
  id: "makeItSaved",
  type: "savedBlock",
  config: {
    blockType: "popup"
  }
}
```

### Return value

The `savedBlock` control does not return a value. Instead, it functions as an interactive element that triggers a specific action or event when clicked.
