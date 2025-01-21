---
sidebar_position: 2
toc_max_heading_level: 4
---
# Regular Controls

Regular controls are basic and commonly used controls for building the toolbar UI and gathering data from users. <br/>
By default, all Brizy controls work across all devices (desktop, tablet, and mobile). To limit a control to specific devices, use the `"devices"` property

### Control definition
All controls are defined as JavaScript objects with only two required keys:

<ul>
  <li>**`id`** - the identifier of the key where the control will save your data</li>
  <li>**`type`** - the control name that we are supposed to use</li>
</ul>

Implement the following code snippet to create a control:
```js
{
  id: "link",
  type: "inputText"
}
```

In the above example, we'll use the `inputText` control. The value entered in the `inputText` control will be saved under the `"link"` key.

### Controls
- [Internal Link](/docs-internals/editor-controls/data-controls/internalLink)
- [Padding](/docs-internals/editor-controls/data-controls/padding)
- [Switch](/docs-internals/editor-controls/data-controls/switch)
- [Input Text](/docs-internals/editor-controls/data-controls/inputText)
- [Paypal](/docs-internals/editor-controls/data-controls/paypal)
- [Toggle](/docs-internals/editor-controls/data-controls/toggle)
- [Number](/docs-internals/editor-controls/data-controls/number)
- [Textarea](/docs-internals/editor-controls/data-controls/textarea)
- [Color Picker](/docs-internals/editor-controls/data-controls/colorPicker)
- [AI Text](/docs-internals/editor-controls/data-controls/aiText)
- [Animation](/docs-internals/editor-controls/data-controls/animation)
- [Background Color](/docs-internals/editor-controls/data-controls/background-color)
- [Border](/docs-internals/editor-controls/data-controls/border)
- [Box Shadow](/docs-internals/editor-controls/data-controls/box-shadow)
- [Button](/docs-internals/editor-controls/data-controls/Button)
- [Code Mirror](/docs-internals/editor-controls/data-controls/codeMirror)
- [Corners](/docs-internals/editor-controls/data-controls/corners)
- [Editable Select](/docs-internals/editor-controls/data-controls/editableSelect)
- [File Upload](/docs-internals/editor-controls/data-controls/fileUpload)
- [Filters](/docs-internals/editor-controls/data-controls/filters)
- [Gallery](/docs-internals/editor-controls/data-controls/gallery)
- [Icon Picker](/docs-internals/editor-controls/data-controls/iconPicker)
- [Icon Setter](/docs-internals/editor-controls/data-controls/iconSetter)
- [Icons Picker](/docs-internals/editor-controls/data-controls/iconsPicker)
- [Image Upload](/docs-internals/editor-controls/data-controls/imageUpload)
- [Margin](/docs-internals/editor-controls/data-controls/margin)
- [Motion](/docs-internals/editor-controls/data-controls/motion)
- [Multi Select](/docs-internals/editor-controls/data-controls/multiselect)
- [Radio Group](/docs-internals/editor-controls/data-controls/radiogroup)
- [Range](/docs-internals/editor-controls/data-controls/range)
- [Select](/docs-internals/editor-controls/data-controls/select)
- [Sidebar Tabs Button](/docs-internals/editor-controls/data-controls/sidebarTabsButton)
- [Slider](/docs-internals/editor-controls/data-controls/slider)
- [Text Shadow](/docs-internals/editor-controls/data-controls/text-shadow)
- [Toggle Button](/docs-internals/editor-controls/data-controls/toggle-button)
- [Transform](/docs-internals/editor-controls/data-controls/transform)
- [Typography](/docs-internals/editor-controls/data-controls/typography)
- [Order](/docs-internals/editor-controls/data-controls/order)

### Examples
---

#### Input text

In the following example, we'll add an input field with a label and placeholder that will allow users to set the link to any page.

```js
{
  id: "link",
  type: "inputText"
  label: "Link"
  placeholder: "Enter the link..."
}
```

#### Select

Example using a `select` control to choose predefined HTML tag names.

```js
{
  id: "tagName",
  label: "HTML Tag",
  type: "select",
  choices: [
    { title: "Span", value: "span" },
    { title: "Div", value: "div" },
    { title: "P", value: "p" }
  ]
}
```

#### Slider

Using a draggable range slider with a minimum value of `0`, a maximum value of `100`, and units of `"px"`, set the width of the element.

```js
{
  id: "width",
  label: "Width",
  type: "slider",
  config: {
    min: 0,
    max: 100,
    units: [{ value: "px", title: "px" }]
  }
}
```



