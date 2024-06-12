---
toc_max_heading_level: 4
---

# Grid

The `grid` control in Brizy enables users to arrange other options in a structured grid format, providing a clean and
organized layout.
Customize the number of columns, adjust spacing, and ensure responsive design for all devices. Ideal for creating
balanced and visually appealing designs.

Example of the `grid` control that arrange two other controls in a grid format:

With separator:

![Grid](/img/ui-controls/grid-with-separator.png)

Without separator:

![Grid](/img/ui-controls/grid-without-separator.png)

### Parameters

| Name                | Type                                     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:--------------------|:-----------------------------------------|:-------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                | `string`                                 |    -    | The unique identifier to delimit the `grid` control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `type`              | `string`                                 |    -    | Type should be `"grid"` to use this control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `position?`         | `number`                                 |    -    | The position of the control in toolbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `devices?`          | `"all"` \| `"desktop"` \| `"responsive"` | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `disabled?`         | `boolean`                                | `false` | Configure the condition under which the control is disabled or enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `columns`           | `Array<ColumnItem>`                      |    -    | Defines the number and configuration of columns in the grid layout. Each column is represented by an object. <br/><br/> <b> `ColumnItem : { id: string, size?: 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| "auto", align?: "start" \| "end" \| "center", options: ControlItem[], className?: string }`</b> <br/><br/> `id` - the unique identifier for each individual column <br/> `size` - defines the size of the column in grid layout. <br/> `align` - Specifies the alignment of the column item within its grid cell. <br/> `className` - defines the CSS class or classes to be applied to the column  <br/> `options` - an array of objects representing the content associated with each column <br/><br/> <b> `ControlItem: { id: string; type: string; title?: string; label?: string; position?: number; }`</b> <br/><br/> `id` - this property uniquely identifies each control item and is derived from a saved option value. It represents an identifier associated with a specific configuration or option selected <br/> `title` - the title displayed on the control, representing the content section associated with that Column Item <br/> `label` - an additional label or description for the control, providing further context or information about the content section it represents <br/> `position` - specifies the position of the control within the Column Item <br/> `type` - type of control |  
| `config?.separator` | `boolean`                                | `false` | If the value is `true` then a separator will be applied between the columns.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Usage

#### Basic example

In this example, we implemented the `grid` control that have two columns each of column render a different control.

```js
const getToolbarItems = () => {
  return [
    {
      id: "grid-control",
      type: "grid",
      columns: [
        {
          id: "grid-settings",
          size: 1,
          options: [
            {
              id: "styles",
              type: "sidebarTabsButton"
            }
          ]
        },
        {
          id: "grid-effects",
          size: 1,
          options: [
            {
              id: "effects",
              type: "sidebarTabsButton"
            }
          ]
        }
      ]
    }
  ];
};
```

#### Separator example

In this example, we implemented the `grid` control that have two columns divided by a separator.
```js
{
  id: "grid-group",
  type: "grid",
  config: {
    separator: true
  },
  columns: [
    {
      id: "grid-settings",
      size: 1,
      options: [
        {
          id: "styles",
          type: "sidebarTabsButton"
        }
      ]
    },
    {
      id: "grid-effects",
      size: 1,
      options: [
        {
          id: "effects",
          type: "sidebarTabsButton"
        }
      ]
    }
  ]
};
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "gridControl",
  type: "grid",
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
      id: "gridControl",
      type: "grid",
      disabled: videoType === "custom",
      columns: [
        {
          id: "grid-settings",
          size: 1,
          options: [
            {
              id: "styles",
              type: "sidebarTabsButton"
            }
          ]
        },
        {
          id: "grid-effects",
          size: 1,
          options: [
            {
              id: "effects",
              type: "sidebarTabsButton"
            }
          ]
        }
      ]
    }
  ]
}
```


### Return value

This control does not return any value.
