---
toc_max_heading_level: 4
---

# Order

The `order` control is designed to reorder items within a container, either horizontally or vertically. It consists of two arrows that allow users to change the position of an item.

Example of the control with horizontal arrows:

![Order Horizontal](/img/controls/order-horizontal.png)

Example of the control with vertical arrows:

![Order Vertical](/img/controls/order-vertical.png)

### Parameters

| Name               | Type                                        |      Default      | Description                                                                                                                                                                                                                                                                                                                                          |
|:-------------------|:--------------------------------------------|:-----------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`                                    |         -         | The identifier of the key where the `order` will save your data                                                                                                                                                                                                                                                                                     |
| `type`             | `string`                                    |         -         | Type should be `"order"` to use this control                                                                                                                                                                                                                                                                                                         |
| `className?`       | `string`                                    |         -         | The custom CSS class name that will be set on the control. It can be used to modify the control styles                                                                                                                                                                                                                                               |
| `position?`        | `number`                                    |         -         | The position of the control in toolbar                                                                                                                                                                                                                                                                                                               |
| `roles?`           | `Array<Role>`                               |         -         | Render the control only if the current user's role matches one of the roles in the provided array. <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                                                                                                                                        |
| `devices?`         | `"all"` \| `"desktop"` \| `"responsive"`    |      `"all"`      | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices                                                                                                                     |
| `disabled?`        | `boolean`                                   |      `false`      | Configure the condition under which the control is disabled or enabled                                                                                                                                                                                                                                                                               |
| `config?.disable`  | `"prev"` \| `"next"` \| `"all"` \| `"none"` |     `"none"`      | Determines which arrow will be disabled                                                                                                                                                                                                                                                                                                              |
| `config?.onChange` | `function`                                  | `() => undefined` | Called when one of the arrows is clicked. Allows customization of the reordering logic <br/> <br/> <b>`Function = (value: "next" \| "prev") => void`</b> <br/> <br/>  `value` - the direction of the reorder action, which can be either `"prev"` (indicating a move to the previous position) or `"next"` (indicating a move to the next position). |
| `config?.align`    | `"horizontal"` \| `"vertical"`              |  `"horizontal"`   | Determines the alignment of the arrows                                                                                                                                                                                                                                                                                                               |

### Basic example

Standard definition with the keys necessary for the normal operation of the control. Will be displayed on all devices.

```js
{
  id: "order", 
  type: "order",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```

### Return value

Does not return anything

### Usage

#### Class name example

Adding a CSS class to the control's DOM node.

```js
{
  id: "order",
  type: "order",
  className: "myOrder"
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```

#### Roles example

Show the control only to users with admin and designer privileges.

```js
{
  id: "order",
  type: "order",
  className: "myOrder"
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```

#### Devices examples

It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "order", 
  type: "order",
  devices: "all",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "order", 
  type: "order",
  devices: "desktop",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "order", 
  type: "order",
  devices: "responsive",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "order", 
  type: "order", 
  disabled: true,
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
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
      id: "order",
      type: "order",
      disabled: videoType === "custom",
      config: {
        disable: itemIndex === 0
          ? "prev"
          : itemIndex === items.length - 1
            ? "next"
            : undefined,
        onChange: (v) => {
          switch (v) {
            case "prev":
              // logic to reorder item
              break;
            case "next":
              // logic to reorder item
              break;
          }
        }
      }
    }
  ]
}
```

#### Config `disable` example

Determines which arrow will be disabled. In this case one of the arrows is dynamically disabled: the `"prev"` arrow is disabled if the `itemIndex` is the first item, the `"next"` arrow is disabled if the `itemIndex` is the last item.

```js
{
  id: "order",
  type: "order",
  config: {
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```

#### Config `onChange` example

Invoked when one of the arrows is clicked. Allows customization of the reordering logic.

```js
{
  id: "order",
  type: "order",
  config: {
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    },
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined
  }
}
```

#### Config `align` example

Determines the alignment of the arrows. In this case the arrows will display one above the other.

```js
{
  id: "order",
  type: "order",
  config: {
    align: "vertical",
    disable: itemIndex === 0
      ? "prev"
      : itemIndex === items.length - 1
        ? "next"
        : undefined,
    onChange: (v) => {
      switch (v) {
        case "prev":
          // logic to reorder item
          break;
        case "next":
          // logic to reorder item
          break;
      }
    }
  }
}
```
