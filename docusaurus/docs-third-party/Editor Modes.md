Brizy Editor provides two distinct modes for working with your pages: **Editor Mode** and **Preview Mode**. Each mode serves a specific purpose in the page-building process, allowing you to edit and visualize content effectively.

## 1. Editor Mode
### Overview
Editor Mode is the default mode where users can create, edit, and customize pages dynamically. This mode provides a flexible drag-and-drop interface, allowing users to add elements, modify their content, and adjust styling options through various tools.

### Features
- **Adding Elements:** Users can insert various design elements such as text blocks, images, buttons, sections, and widgets.
- **Content Editing:** Every element on the page is editable, allowing customization of text, images, and other content.
- **Toolbar & Sidebar Customization:** A set of tools, including text formatting, alignment, spacing, and styling options, is available for advanced customization.
- **Global Styles:** Users can define and apply global styles, ensuring design consistency across the page.
- **Dynamic Components:** Some elements, such as forms and sliders, have interactive properties that function within the editor.

### Technical Implementation
- **Rendered Inside an Iframe:** The Brizy Editor is built as a React application that runs inside an iframe, ensuring isolation and compatibility across different environments.
- **State Management:** User interactions are tracked within the React state, allowing real-time updates to the page structure and appearance.
- **Autosave & Undo/Redo:** The editor provides an autosave mechanism and undo/redo capabilities to prevent accidental data loss and streamline workflow.

## 2. Preview Mode
### Overview
Preview Mode allows users to view the final rendering of the page as it will be seen by end-users. Unlike Editor Mode, Preview Mode is read-only and does not include the React application, ensuring a static representation of the page.

### Features
- **Read-Only View:** Users can navigate and inspect the page layout without editing capabilities.
- **Static HTML Output:** The preview is generated as a static HTML page, ensuring fast and accurate visualization.
- **Performance Optimization:** Since React is not included in this mode, pages load faster, mimicking real-world performance.

### Handling Interactive Elements
Since Preview Mode does not include the React application, any interactive elements (such as accordions, buttons, forms, and animations) that rely on React state or event handling will not function automatically. To ensure these elements work in Preview Mode, developers must:
- **Include Custom JavaScript:** Manually add JavaScript to enable interactivity in Preview Mode.

## Implementing a third-party component for Editor and Preview Modes

The `registerComponent` method of the `Brizy` class from the `@brizy/core` library allows you to add a custom component to the Brizy Editor. To integrate a custom component, you need to create two React components:

1. **Editor Mode Component** – This is used when editing content inside the Brizy Editor.
2. **Preview Mode Component** – This is used when viewing the content in preview mode. Since Preview Mode does not include the React application, interactive behavior must be handled with JavaScript.

### Switcher Component for Editor Mode
The `SwitcherEditor` component is a React component that provides an interactive switch element within the Brizy Editor.

```tsx
// SwitcherEditor.tsx

import React, { useState } from "react";

const SwitcherEditor = () => {
  const [checked, setChecked] = useState(false);

  return (
    <button
      className={`switch ${checked ? "switch-checked" : ""}`}
      onClick={() => setChecked(!checked)}
    >
      <div className={`switch-toggle ${checked ? "toggle-checked" : ""}`} />
    </button>
  );
};

export default SwitcherEditor;
```

### Switcher Component for Preview Mode
The `SwitcherPreview` component is a simplified version of the switcher that is used when previewing the page. Since Preview Mode does not have access to React, it only renders the static HTML structure.

```tsx
// SwitcherPreview.tsx

import React from "react";

const SwitcherPreview = ({ checked }: { checked: boolean }) => {
  return (
    <div data-checked={checked} className="switch-wrapper">
      <button className="switch">
        <div className="switch-toggle" />
      </button>
    </div>
  );
};

export default SwitcherPreview;
```

### Enabling Interactivity in Preview Mode
To enable interactivity in Preview Mode, a separate JavaScript (or TypeScript) file must be created to handle the toggling functionality. Since the Preview Mode does not use React, the following script ensures the switcher remains interactive.

```ts
// export.ts

document.addEventListener("DOMContentLoaded", () => {
  const switchers = document.querySelectorAll(".switch-wrapper");

  switchers.forEach((switcher) => {
    const isChecked = switcher.dataset.checked === "true";
    const button = switcher.querySelector(".switch");
    const toggle = switcher.querySelector(".switch-toggle");
    
    if (isChecked) {
      button?.classList.add("switch-checked");
      toggle?.classList.add("toggle-checked");
    }

    button?.addEventListener("click", () => {
      button.classList.toggle("switch-checked");
      toggle?.classList.toggle("toggle-checked");
    });
  });
});
```

### Including the JavaScript File in Preview Mode
To ensure the `export.ts` script is executed in Preview Mode, import it in the `index.view.ts` file:

```ts
// index.view.ts
import "./export";
```
More details about the `index.view.ts` file can be found in the [Creating Your First Widget ](/docs/development/creating-your-first-addon) guide.

This ensures that when the page is loaded in Preview Mode, the JavaScript file is executed, adding interactivity to the switcher component.

## Understanding Editor Mode vs. Preview Mode
### Editor Mode
- Fully interactive.
- Uses React components and state management.
- Enables users to directly modify component properties within the Brizy Editor.

### Preview Mode
- Renders static HTML elements.
- Does not include React, requiring vanilla JavaScript for interactivity.
- Provides a closer representation of how the component will appear in the final published page.

By understanding these differences, you can efficiently design and implement components in Brizy Editor, ensuring both an intuitive editing experience and a functional preview.

