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
