---
sidebar_position: 2
---

# Installation

Install the package via npm:

```bash
npm install @brizy/builder
```


## Available Components

### 1. Editor Component
The `useEditor` hook enables rendering the editor mode, complete with the toolbar and sidebar for editing functionality.

#### Example Usage
```tsx
import React from "react";
import { useEditor } from "@brizy/builder/editor";

const config = {
  mode: "page",
  pageData: {},
  projectData: {}
};

const Editor: React.FC = () => {
  const { setNodeRef } = useEditor("demo", config);

  return (
    <div ref={setNodeRef} style={{ height: "100vh", overflow: "hidden" }} />
  );
};

export default Editor;
```

### 2. Preview Component
The `Preview` component allows you to render content in preview mode without editor modules such as the toolbar or sidebar.

#### Example Usage
```tsx
import { Preview } from "@brizy/builder/preview";
import "@brizy/builder/previewCSS.css";

const previewConfig = {
  mode: "page",
  config:{
    // configuration of menu and integrations
  },
  pageData: {
    // your page data, such as widget types and their values
  },
  projectData: {
    // your project data, such as styles, fonts, pinned elements, etc.
  }
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Preview Mode</h1>
      <Preview {...previewConfig}/>
    </div>
  );
};

export default App;
```
The `projectData` and `pageData` [example](https://github.com/EasyBrizy/Brizy-Local-Editor/blob/master/demo/react/src/demoConfig.ts#L23)

## Features
- **Editor Mode:** Fully interactive editor with a customizable toolbar and sidebar.
- **Preview Mode:** Render content for viewing purposes without editing features.


## Deployment 
- Vercel
- Netlify
- Render
- NextJS
- Remix
