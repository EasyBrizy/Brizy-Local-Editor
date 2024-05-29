---
sidebar_position: 5
toc_max_heading_level: 4
---

# Color Picker

Brizy's color picker control offers a user-friendly color picker field with an integrated opacity slider, hue slider, and predefined palette colors.

Example of the color picker:

![ColorPicker](/img/data-controls/colorPicker.png)

Example of the color picker with disabled opacity:

![ColorPicker](/img/data-controls/colorPickerNoOpacity.png)

Example of the color picker with disabled color palette: 

![ColorPicker](/img/data-controls/сolorPickerNoPalette.png)

### Parameters

| Name                      | Type                                     |   Default    | Description                                                                                                                                                                                                                                                                                                                    |
| :------------------------ | :--------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                 |      -       | The identifier of the key where the inputText will save your data                                                                                                                                                                                                                                                              |
| `type`                    | `string`                                 |      -       | Type should be `"colorPicker"` to use this control                                                                                                                                                                                                                                                                             |
| `position?`               | `number`                                 |      -       | The position of the control in toolbar                                                                                                                                                                                                                                                                                         |
| `devices?`                | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`    | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                              |
| `disabled?`               | `boolean`                                |   `false`    | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                        |
| `states?`                 | `Array<State>`                           | `["normal"]` | Allows the control to work in different states. <br/> <br/> <b>`State = "normal" \| "hover" \| "active"`</b> <br/> <br/> `"normal"` - the normal state of an element, <br/> `"hover"` - the state when the element is hovered over, <br/> `"active"` - the state when the element is active (e.g., current page in pagination) |
| `config?.opacity`         | `boolean`                                |    `true`    | Controls whether the opacity of the color can be changed. If set to `false`, the opacity slider will not be rendered.                                                                                                                                                                                                          |
| `config?.isPaletteHidden` | `boolean`                                |   `false`    | Controls whether the palette of the color can be changed. If set to `true`, the color palette will not be rendered.                                                                                                                                                                                                            |

### Return value

Returns an object with the following values:

```js
{
  hex: string;
  opacity: number;
  palette: string | undefined;
}
```

`hex` - defines the color of the shadow in hexadecimal format; <br/>
`opacity` - indicates the opacity of the shadow; <br/>
`palette` - predefined palette from global styles; <br/>

### Usage

#### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "color",
  type: "colorPicker"
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "color",
  type: "colorPicker",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "color",
  type: "colorPicker",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "color",
  type: "colorPicker",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "color",
  type: "colorPicker",
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
      id: "color",
      type: "colorPicker",
      disabled: videoType === "custom",
    },
  ];
};
```

#### States example

Allows the control to work in normal and hover states.

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover"]
}
```

Allows the control to work in normal, hover and active states.

```js
{
  id: "color",
  type: "colorPicker",
  states: ["normal", "hover", "active"]
}
```

#### Config `opacity` example

Turns off the opacity slider

```js
{
  id: "color",
  type: "colorPicker",
  config: {
    opacity: false
  }
}
```

#### Config `isPaletteHidden` example

Turns off the color palette

```js
{
  id: "color",
  type: "colorPicker",
  config: {
    isPaletteHidden: true
  }
}
```
