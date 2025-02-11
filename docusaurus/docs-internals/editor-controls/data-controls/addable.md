---
toc_max_heading_level: 4
---

# Addable

The `addable` Control is a highly configurable UI component designed for dynamic management of structured data. It
allows users to:

- Define a specific shape (structure) for items.
- Dynamically add new items based on the defined shape.
- Remove existing items.
- Reorder items as needed.

This control is particularly useful for creating dynamic lists or collections of items with consistent attributes, such
as forms, tables, or task management interfaces.

![Addable Option](/img/controls/addable-overview.png);

### Parameters

| Name                | Type                                     |   Default   | Description                                                                                                                                                                                                                      |
|:--------------------|:-----------------------------------------|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                | `string`                                 |      -      | The identifier of the key where the addable save data                                                                                                                                                                            |
| `type`              | `string`                                 |      -      | The type should be `"addable"` to use this control                                                                                                                                                                               |
| `shape`             | `Array<ControlItem>`                     |      -      | An Array of [**data controls**](/docs-internals/editor-controls/data-controls/internalLink) ex: `"inputText"`, `"number"`, `"textarea"`,`"backgroundColor"` . . .                                                                |
| `roles?`            | `Array<Role>`                            |      -      | Render the control only if the current user's role matches one of the roles in the provided array <br /> <br /> **`type Role = "admin" \| "viewer" \| "editor" \| "designer" \| "manager"`**                                     |
| `devices?`          | `"all"` \| `"desktop"` \| `"responsive"` |   `"all"`   | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices |
| `disabled?`         | 	`boolean`                               |  	`false`   | 	Configure the condition under which the control is disabled or enabled                                                                                                                                                          |
| `config?.title`     | `string`                                 |  option id  | Setup title                                                                                                                                                                                                                      |
| `config?.icon`      | `string`                                 | `nc-iframe` | Setup icon                                                                                                                                                                                                                       |
| `config?.showCount` | `boolean`                                |    false    | Enable / Disable Message of the number of items                                                                                                                                                                                  |

### Example of control definition: {#shape-definition}

```jsx
{
  id: "myAddable",
  type: "addable",
  config: {
    title: "MyAddableTitle",
    icon:  "nc-hover-move",
    showCount: true,
  },
  shape: [
    {
      id: "description",
      label: t("description label"),
      type: "inputText",
    },
    {
      id: "score",
      label: t("score label"),
      type: "number",
    },
  ],
}
```

## Return Value

The Addable returns an array of Groups, with the Following structure:

```ts
Array<{
  id: string;
  title: string;
}>
```

Using the group IDs, we can collect data based on this predefined structure [(shape)](#shape-definition), ensuring
accurate identification and processing of each group.

The array of group's also represents the order in which they will be displayed in Sidebar.

Example of returned value :

```js
[
  {
    "id": "zTLVWZ",
    "title": "Widget 0"
  },
  {
    "id": "ellf5q",
    "title": "Widget 1"
  },
  {
    "id": "rp7YOA",
    "title": "Widget 2"
  },
  {
    "id": "zmYmSn",
    "title": "Widget 3"
  }
]
```

## Key Generation

Each control within the group returns its respective value based on its type and configuration, as described in the "
Return Value" section of each control's documentation.
The keys for the returned values are generated using the following pattern:

`${addableID}${capitalize(controlIdFromShape)}_${groupID}`

- AddableID: The id of the Addable Control (e.g., myAddable).
- shapeControlId: The id of the individual control in the shape (e.g., score).
- groupID: A unique identifier for each item added to the collection () (e.g., e32QiR).

![Addable item key generate](/img/controls/addable-keys.png)

## Example: Get values and Render a list

```js
import React from "react";

function List(props) {
  const { myAddable } = props; // myAddable= ["zTLVWZ","ellf5q"]

  const values = myAddable?.map(({ id }) => ({
    description: v[`myAddableDescription_${id}`],
    score: v[`myAddableScore_${id}`],
  }));

  return (
    <ul>
      {values.map((item) => (
        <li>
          desc: {item.description} score:{item.score}
        </li>
      ))}
    </ul>
  )
}
``` 
