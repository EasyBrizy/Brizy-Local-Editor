---
sidebar_position: 2
toc_max_heading_level: 4
---

# Paypal

The `paypal` control in Brizy allows users to easily make payments through PayPal. To connect PayPal, users need to insert an API key, which they can obtain from their PayPal account settings. This ensures secure and seamless transactions directly from the Brizy interface.

Example of the `paypal` integration button:

![Paypal](/img/data-controls/paypal-integration-button.png)

Example of the `paypal` connect popup:

![Paypal](/img/data-controls/paypal.png)


### Parameters

| Name               | Type                                                                                                                                                                            | Default | Description                                                                                                                                                                                                                       |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                                                                                                                                                        |    -    | The identifier of the key where the paypal will save your data                                                                                                                                                                 |
| `type`             | `string`                                                                                                                                                                        |    -    | Type should be `"paypal"` to use this control                                                                                                                                                                                  |
| `label?`           | `string`                                                                                                                                                                        |    -    | The label displayed on the left side of the control                                                                                                                                                                               |
| `position?`        | `number`                                                                                                                                                                        |    -    | The position of the control in toolbar                                                                                                                                                                                            |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`                                                                                                                                        | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`        | `boolean`                                                                                                                                                                       | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                           |
| `helper?.content`  | `string`                                                                                                                                                                        |    -    | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears.                                                                                                 |
| `helper?.position` | `"top-start"` \| `"top"` \| `"top-end"` \| `"right-start"` \| `"right"` \| `"right-end"` \| `"bottom-end"` \| `"bottom"` \| `"bottom-start"` \| `"left-end"` \| `"left"` \| `"left-start"` | `"top"` | Specifies the position of the tooltip relative to the helper icon.                                                                                                                                                                |

### Return value

The return value is a `string` representing the text field value, which is used to store the API key.
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
  id: "account",
  type: "paypal"
}
```

#### Label example

Adding a label on the left side of the control.

```js
{
  id: "account",
  type: "paypal",
  label: "Paypal"
}
```

#### Devices examples

It will be rendered on all devices. This value can be omitted since it defaults to `"all"`.

```js
{
  id: "account",
  type: "paypal",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "account",
  type: "paypal",
  devices: "desktop"
}
```

The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "account",
  type: "paypal",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "account",
  type: "paypal",
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
      id: "account",
      type: "paypal",
      disabled: videoType === "custom",
    },
  ];
};
```

#### Helper examples

The helper object contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "account",
  type: "paypal",
  helper: {
    content: "help text"
  }
}
```

When the helper object contains a position property with the value `"top-start"`, it indicates that the helper text will be displayed at the top left corner of the icon.

```js
{
  id: "account",
  type: "paypal",
  helper: {
    content: "help text",
    position: "top-start"
  }
}
```
