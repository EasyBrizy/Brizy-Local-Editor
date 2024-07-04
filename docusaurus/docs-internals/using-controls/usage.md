---
sidebar_position: 1
---
# Usage
Controls are UI components that help us build the toolbar.

These controls enable end users to input their data, which is subsequently stored. This stored data is then utilized to generate, for example, CSS, or for further use in components based on the user's selections.

### Adding Controls
To add a Brizy control, define the control using a JavaScript object and add it to the function that returns toolbar items. Here's an example: <br/>

```js
const getToolbarItems = () => {
  return [
    {
      id: "settings",
      type: "popover",
      config: { icon: "nc-cog", title: "Settings" },
      options: [
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
      ]
    }
  ]
}
```

We previously added a `popover` and `slider` control to allow users to set the width of a component. <br/>
You can read more about it [here](./regular-control).

### Data saving

The control value is saved in a key named by the value of the `id` property. However, for tablets and mobile devices, a prefix is added to this key. Here's an example:
```js
{
  id: "loop",
  type: "switch"
}
```

When a user changes the switch state:
<ul>
 <li>The desktop value is stored in the `"loop"` key</li>
 <li>The tablet value is stored in the `"tabletLoop"` key</li>
 <li>The mobile value is stored in the `"mobileLoop"` key</li>
</ul>

How it looks in the code: <br/>

Desktop:
```js
{
  loop: "on"
}
```
Tablet:
```js
{
  tabletLoop: "on"
}
```
Mobile:
```js
{
  mobileLoop: "off"
}
```
---
The control's return values' keys are also prefixed by the control's `id`. <br/>
As an example, we have the following control:
```js
{
  id: "margin",
  type: "margin"
}
```
His default return value is:
```js
{
  type: "grouped" | "ungrouped",
  value: number,
  suffix: "px" | "%",
  top: number,
  topSuffix: "px" | "%",
  right: number,
  rightSuffix: "px" | "%",
  bottom: number,
  bottomSuffix: "px" | "%",
  left: number,
  leftSuffix: "px" | "%"
}
```
In our example, because of `id: "margin"`, the keys will be prefixed with `"margin"`. <br/>
Only `value` key will be replaced with control's `id`, in our case with `"margin"`.
```js
{
  marginType: "grouped",
  margin: 0,
  marginSuffix: "px",
  marginTop: 0,
  marginTopSuffix: "px",
  marginRight: 0,
  marginRightSuffix: "px",
  marginBottom: 0,
  marginBottomSuffix: "px",
  marginLeft: 0,
  marginLeftSuffix: "px"
}
```
