---
sidebar_position: 3
---

# Registering

Third-party widgets are registered in Brizy using the `registerComponent` method of the Brizy class from the `@brizy/core` library (included by default).<br />
Component registration informs the builder of additional available widgets beyond the default set. Accurate parameter values are crucial for this process to function correctly.

Example:
```tsx
import { Brizy } from "@brizy/core";

const WidgetEditor = () => <div />;
const WidgetView = () => <div />;

Brizy.registerComponent({
  id: "Brizy.ThirdParty.Container",
  component: {
    editor: WidgetEditor,
    view: WidgetView
  },
  title: "Container",
  category: "custom",
  options: () => []
});
```

## Parameters of `registerComponent`

- `id` - the unique component ID. While invisible to the user, it's essential for the builder to distinguish this widget from others.
- `component` - an object containing editor and view keys, each specifying the React component to be rendered in the respective mode.
- `title` - the widget's display name within the user interface.
- `category` - the widget category where your custom widget will be grouped.
- `options` - specifies the toolbar controls. Read more [here](/docs-internals/editor-controls/introduction).
