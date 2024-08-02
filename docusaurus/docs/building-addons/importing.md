---
sidebar_position: 4
---
# Importing

After you have finished the custom widgets development, you need to specify which file will be used for what ( `editor` or `view` mode ). <br />

There are only two options:
- `index.editor.ts` - import all necessary files for editor mode in this file. <br />
Example:
```tsx
import "./Map";
import "./Counter"; 
```
The `Map` and `Counter` folders each contain a default React component export.

- `index.view.ts` - import all necessary files for view mode in this file. <br />
Example:
```tsx
import "./Counter/export";
import "./Map/export";
```
Where `export` files contain the plain JavaScript logic required for preview mode.
