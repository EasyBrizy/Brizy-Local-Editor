---
toc_max_heading_level: 4
---
# Gallery

The `gallery` control displays a file chooser section that allows the user to upload multiple images from their device storage.

Example of empty `gallery`:

![Gallery Empty](/img/controls/gallery-empty.png)

Example of `gallery` with uploaded images:

![Gallery With Items](/img/controls/gallery-with-items.png)

### Parameters

| Name                    | Type                                                                                                                                                                          | Default | Description                                                                                                                                                                                                                       |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                    | `string`                                                                                                                                                                      |    -    | The identifier of the key where the control will save your data                                                                                                                                                                   |
| `type`                  | `string`                                                                                                                                                                      |    -    | Type should be `"gallery"` to use this control                                                                                                                                                                                    |
| `label?`                | `string`                                                                                                                                                                      |    -    | The label displayed on the left side of the control                                                                                                                                                                               |
| `position?`             | `number`                                                                                                                                                                      |    -    | The position of the control in toolbar                                                                                                                                                                                            |
| `devices?`              | `"all"` \|   `"desktop"`  \| `"responsive"`                                                                                                                                   | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`             | `boolean`                                                                                                                                                                     | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                           |
| `helper?.content`       | `string`                                                                                                                                                                      |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                 |
| `helper?.position`      | `"top-start" \| "top" \| "top-end" \| "right-start" \| "right" \| "right-end" \| "bottom-end" \| "bottom" \| "bottom-start" \| "left-end" \| "left" \| "left-start" \| "top"` | `"top"` | Specifies the position of the tooltip relative to the helper icon                                                                                                                                                                 |
| `config?.canDeleteLast` | `boolean`                                                                                                                                                                     |  `true`  | If provided and set to `false`, the user cannot delete the last item in the gallery.                                                                                                                                              |

### Usage

#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "slides",
  type: "gallery"
},

```

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "slides", 
  type: "gallery",
  label: "Slide Show"
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "slides", 
  type: "gallery",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "slides", 
  type: "gallery",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "slides", 
  type: "gallery",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "slides", 
  type: "gallery", 
  disabled: true
}
```

Control will be disabled when `mediaType` variable will be not `"slideshow"`.
`getValue` is a getter function that allows us to retrieve the value of controls by their id.
`"mediaType"` is the id of the `"radioGroup"` control below.

```js
const getToolbarContols = ({ getValue }) => {
  const mediaType = getValue("media");

  return [
    {
      id: "media",
      type: "radioGroup",
      label: "Type",
      choices: [
        { value: "image", icon: "nc-media-image" },
        { value: "video", icon: "nc-media-video" },
        { value: "slideshow", icon: "nc-reorder" }
      ]
    },
    {
      id: "slides",
      type: "gallery",
      disabled: mediaType !== "slideshow"
    }
  ]
}
```

#### Helper examples

The helper object contains a content property with the value `"Helper"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "slides",
  type: "gallery",
  helper: {
    content: "Helper"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, indicating that the helper text will be displayed at the top start of icon.

```js
{
  id: "slides",
  type: "gallery",
  helper: {
    content: "Helper",
    position: "top-start"
  
}
```

#### Config `canDeleteLast` example

In this example, the user cannot remove the last item in the gallery.

```js
{
  id: "slides",
  type: "gallery",
  config: {
    canDeleteLast: false
  }
}
```

### Return value

Returns a stringified array of objects with the following values:

```js
{
  id: number;
  uid: string;
  fileName: string;
  width: number;
  height: number;
}
```
Example:
```js
{
  value: '[
    {
      "id": 1,
      "uid": "dbe3a79df22c4ef2ac6553aa241d2c5c.jpg",
      "fileName": "image1.jpg",
      "width": 1600,
      "height": 1042
    },
    {
      "id": 2,
      "uid": "a7c45ea83554c81024b84d724fd8286d.jpg",
      "fileName": "image2.jpg",
      "width": 640,
      "height": 359
    }
  ]'
}
```

`id` - The index of the image in the gallery; <br/>
`uid` - The unique identifier of the image; <br/>
`fileName` - The unique identifier of the image; <br/>
`width` - The width of the image; <br/>
`height` - The height of the image; <br/>
