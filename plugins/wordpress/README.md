# Brizy Extends

A reference WordPress plugin that adds third-party widgets (Map, Counter) to the [Brizy](https://brizy.io) page builder. Use it as a working starting point for your own Brizy editor extensions.

For full integration details — how the plugin hooks into Brizy, the JSON config schema, the PHP and JS APIs, and a step-by-step guide to registering your own extension — see **[DEVELOPERS.md](./DEVELOPERS.md)**.

## Layout

- `index.php` — WP plugin entry; registers the extension via the `brizy_extensions` filter.
- `widgets/` — TypeScript/React source for the editor components, built with `@brizy/scripts`.
- `widgets/build/` — produced by `npm run build`; consumed at runtime by the Brizy plugin.

## Quick start

```bash
# 1. Build the widget bundle
cd widgets
npm install
npm run build

# 2. Activate the plugin in WordPress alongside the brizy plugin.
```

Open any Brizy page in the editor — the Map widget appears in the add-element panel under the `custom` category.
