---
toc_max_heading_level: 4
---
# AI Text

The `aiText` control in Brizy enables users to generate text based on a given prompt. This feature leverages advanced AI technology to produce contextually relevant and coherent text, enhancing content creation with minimal effort.

Example of `aiText` control:

![AiText](/img/data-controls/aiText.png)


### Parameters

| Name             | Type                                     | Default | Description                                                                                                                                                                                                                       |
|:-----------------|:-----------------------------------------|:-------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`             | `string`                                 |    -    | The identifier of the key where the `aiText` will save your data                                                                                                                                                                  |
| `type`           | `string`                                 |    -    | Type should be `"aiText"` to use this control                                                                                                                                                                                     |
| `position?`      | `number`                                 |    -    | The position of the control in toolbar                                                                                                                                                                                            |
| `devices?`       | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `selectedValue?` | `string`                                 |    -    | The value that will be used as context for generating new text. You can hardcode a default context that will not be overridden by the input context.                                                                                                                                                                  |

### Return value

The return value is a `string` representing the value of the generated text.
```js
{
  value: string;
}
```

### Usage

#### Basic example

Standard definition with only the required keys. This control will be visible on all devices.

```js
{
  id: "text",
  type: "aiText"
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "text",
  type: "aiText",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "text",
  type: "aiText",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "text",
  type: "aiText",
  devices: "responsive"
}
```

#### `selectedValue` example

The `selectedValue` key is used to provide context for the AI text generation.

```js
{
  id: "text",
  type: "aiText",
  selectedValue: "The quick brown fox jumps over the lazy dog."
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "text",
  type: "aiText",
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
      id: "text",
      type: "aiText",
      disabled: videoType === "custom"
    }
  ]
}
```
