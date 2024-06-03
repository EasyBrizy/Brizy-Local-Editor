---
sidebar_position: 1
toc_max_heading_level: 4
---
# Internal Link

Brizy's `internalLink` control lets you easily redirect users to any page within your website. This feature enhances navigation, improving user experience by seamlessly guiding visitors to related content or important sections.

Example of the `internalLink`:

![Internal Link](/img/data-controls/internalLink.png)

Example of the `internalLink`  search:

![Internal Link Search](/img/data-controls/internalLinkSearch.png)

Example of the `internalLink`  result:

![Internal Link Result](/img/data-controls/internalLinkResult.png)

### Parameters

| Name               | Type         |    Default    | Description                                                                                                                       |
|:-------------------|:-------------|:-------------:|:----------------------------------------------------------------------------------------------------------------------------------|
| `id`               | `string`     |       -       | The identifier of the key where the internalLink will save your data                                                              |
| `type`             | `string`     |       -       | Type should be `"internalLink"` to use this control                                                                               |
| `placeholder?`     | `string`     |     -         | The placeholder text displayed in the input field.                                                                                |
| `label?`           | `string`     |       -       | The label displayed on the left side of the control                                                                               |
| `position?`        | `number`     |       -       | The position of the control in toolbar                                                                                            |
| `devices?`         | `"all"`   \| `"desktop"` \| `"responsive"`  | `"all"` | Define the devices where the control will be rendered. `"all"` renders the control on all devices. `"desktop"` renders the control only on desktop devices. `"responsive"` renders the control on both tablet and mobile devices. |
| `disabled?`        | `boolean`    |    `false`    | Configure the condition under which the control is disabled or enabled.                                                           |
| `config?.size`     | `"short"`  \| `"medium"` \| `"large"` \| `"auto"`  |   `"medium"`   | A string that specifies the size of the input field.                                                                                                                                                                                                                  |
| `config?.helper`   | `string`     |       -       | If provided, an icon is displayed next to the label. When hovering over this icon, a tooltip with additional information appears. |
| `config?.sourceLabel`   | `string`     |   `"Type"`    | The label for the first select is displayed on the left side of the control.                                                              |

### Return value

Returns an object with the following values:

```js
{
  value: string;
  title: string;
  source: string;
}
```

`value` - the actual selected value. <br/>
`title` - the label of the selected value. <br/>
`source` - the collection from where we try to find a link. This indicates the dataset or collection used to locate and retrieve the selected value and its corresponding title.

### Usage


#### Basic example
Standard definition with only the required keys. This control will be displayed on all devices.

```js
{
  id: "link", 
  type: "internalLink"
}
```

#### Placeholder example

Adding the placeholder text for the control.

```js
{
  id: "link",
  type: "internalLink",
  placeholder: "Find page"
}
```

#### Label example
Adding a label on the left side of the control.

```js
{
  id: "link", 
  label: "Redirect",
  type: "internalLink"
}
```

#### Devices examples
It will be rendered on all devices. This value can be skipped because it is set to `"all"` by default.

```js
{
  id: "link", 
  type: "internalLink",
  devices: "all"
}
```

Rendering will occur only on `desktop`.

```js
{
  id: "link", 
  type: "internalLink",
  devices: "desktop"
}
```
The display is limited to responsive modes, specifically `tablet` and `mobile`.

```js
{
  id: "link", 
  type: "internalLink",
  devices: "responsive"
}
```

#### Disabled examples

Control will be disabled. Normally, here should be your dynamic condition.

```js
{
  id: "link", 
  type: "internalLink", 
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
      id: "link",
      type: "internalLink",
      disabled: videoType === "custom"
    }
  ]
}
```

#### Config `size` examples
When you add the size attribute in the configuration, you define the dimensions of the textarea.

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "short"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "medium"
  }
}
```

```js
{
  id: "code", 
  type: "codeMirror",
  config: {
    size: "large"
  }
}
```

#### Config `helper` example

The helper contains a content property with the value `"help text"`, which will be displayed as additional guidance or information for the user.

```js
{
  id: "link",
  type: "internalLink",
  config: {
    helper: "help text"
  }
}
```

#### Config `sourceLabel` examples

Label for the first dropdown on the left.

```js
{
  id: "link",
  type: "internalLink",
  config: {
    sourceLabel: "Source"
  }
}
```
