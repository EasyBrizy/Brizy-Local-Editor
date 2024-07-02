---
sidebar_position: 3
---
# Responsive Control
Responsive controls differ from regular ones in a key way: they allow users to define device-specific values (based on screen size). To restrict a control to responsive layouts only, use the `"devices"` property.

For example, if we want to use a `number` control for all device types, then we will define:
```js
{
  id: "rows",
  type: "number"
}
```

To restrict the number control to responsive layouts (tablets and mobiles), use the `"devices"` property with the value `"responsive"`:
```js
{
  id: "rows",
  type: "number",
  devices: "responsive"
}
```
