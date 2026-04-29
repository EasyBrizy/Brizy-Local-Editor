# Brizy Third-Party Extensions — Developer Guide

This document explains how `brizy-extends` registers custom widgets into the **Brizy** WordPress page builder, and walks through the full process of building your own extension.

The integration has two halves:

- A **WordPress plugin** (PHP) that tells Brizy "load these extra scripts and styles when the editor opens, and again on the rendered page."
- A **JS bundle** (built from `widgets/`) that registers React components into the editor at runtime.

`brizy-extends/index.php` + `widgets/build/` together are a working reference. This guide describes how the two halves talk to the Brizy plugin.

---

## 1. Architecture

```
WP plugin (PHP)                                Brizy editor (JS)
─────────────────────────────────              ──────────────────────────────────
add_filter('brizy_extensions', …)   ──►        Brizy.registerComponent({…})
       │                                                │
       ▼                                                ▼
Brizy_Editor_ThirdParty_Extension              __VISUAL_CONFIG__.thirdPartyComponents[id]
       │  (parses widgets/build/config.json)           ▲
       ▼                                                │
brizy_pre_editor_enqueue_scripts    ──►  <script src="…/index.editor.js">
brizy_preview_enqueue_scripts       ──►  <script src="…/index.view.js">  (rendered page)
```

The PHP side ships URLs of your assets to the editor and to the front-end. 
The editor loads `index.editor.js`, which calls `Brizy.registerComponent({...})` to inject your React components into the editor's component registry. 
The front-end loads `index.view.js`, which registers the rendered version of the same component.

### How the bridge is wired in the Brizy plugin
You only need to add **one filter** (`brizy_extensions`) and return one (or more) extension instances. Everything else — script tags, style tags, editor config — is wired automatically.

---

## 2. Prerequisites

- The `brizy` plugin installed and activated.
- Node.js (for the widget build pipeline). The bundler is `@brizy/scripts`.
- A WordPress development environment.

---

## 3. Step-by-step: register a third-party extension

### Step 1 — Create the WordPress plugin file

Create a folder under `wp-content/plugins/` (e.g. `my-brizy-extension/`) and add an `index.php` like this:

```php
<?php
/*
Plugin Name: My Brizy Extension
Description: Adds custom widgets to the Brizy editor.
Author: You
Version: 1.0.0
*/

define('PLUGIN_FILE', __FILE__);
define('PLUGIN_PATH', dirname(PLUGIN_FILE));
define('PLUGIN_URL', rtrim(plugin_dir_url(PLUGIN_FILE), '/'));

add_filter('brizy_extensions', 'my_register_brizy_extension');
```

### Step 2 — Hook `brizy_extensions` and instantiate the extension

```php
function my_register_brizy_extension($extensions) {
    $configFile = PLUGIN_PATH . '/widgets/build/config.json';
    $publicUrl  = PLUGIN_URL  . '/widgets/build/';

    try {
        $extensions[] = new Brizy_Editor_ThirdParty_Extension($publicUrl, $configFile);
    } catch (Exception $e) {
        error_log('My Brizy Extension failed to register: ' . $e->getMessage());
    }

    return $extensions;
}
```

Constructor signature: `Brizy_Editor_ThirdParty_Extension($publicUrl, $configFile)`.

- `$publicUrl` — URL base used to resolve **relative** entries inside `config.json`. Must end with the folder that contains `index.editor.js` / `index.view.js`. Trailing slash optional but the sample includes it.
- `$configFile` — absolute filesystem path to the **built** `config.json` (the one in `widgets/build/`, not `widgets/src/`).
- Throws `Exception` if the file is missing or the JSON is invalid. Wrap in `try/catch` for production.

The filter callback must **return** the (modified) `$extensions` array. The filter fires on WP `init`, after the Brizy plugin has bootstrapped.

If you prefer not to use the bundled class, implement `Brizy_Editor_ThirdParty_ExtensionInterface` directly and return your own instances from the filter.

### Step 3 — Scaffold the widgets project

Inside your plugin folder, create a `widgets/` subfolder with a Node project:

```jsonc
// widgets/package.json
{
  "name": "@you/my-brizy-widgets",
  "version": "1.0.0",
  "main": "build/main.js",
  "scripts": {
    "build": "brizy-scripts build",
    "start": "brizy-scripts start"
  },
  "dependencies": {
    "@brizy/core": "^1.0.2"
  },
  "devDependencies": {
    "@brizy/scripts": "^1.0.5",
    "@types/react": "^18.3.3"
  }
}
```

Then `npm install`. The reference `widgets/package.json` in this repo can be copied verbatim.

### Step 4 — Author `widgets/src/config.json`

This is the **source** form (singular `editorScript` / `viewScript`, with `file:./…` references). The build step rewrites it into the plural array form Brizy reads at runtime.

```json
{
  "name": "@you/my-brizy-widgets",
  "title": "My Widgets",
  "version": "1.0.0",
  "category": "custom",
  "keywords": ["custom", "third party"],
  "componentIds": [
    "@you/my-brizy-widgets.Map",
    "@you/my-brizy-widgets.Counter"
  ],
  "publicPath": "{{ PUBLIC_PATH }}",

  "editorScript": "file:./index.editor.ts",
  "viewScript":   "file:./index.view.ts",
  "editorStyle":  "file:./index.editor.css",
  "viewStyle":    "file:./index.view.css"
}
```

After `npm run build`, `widgets/build/config.json` will look like:

```json
{
  "name": "@you/my-brizy-widgets",
  "title": "My Widgets",
  "version": "1.0.0",
  "category": "custom",
  "keywords": ["custom", "third party"],
  "componentIds": [
    "@you/my-brizy-widgets.Map",
    "@you/my-brizy-widgets.Counter"
  ],
  "publicPath": "{{ PUBLIC_PATH }}",
  "editorScripts": ["index.editor.js", "https://code.jquery.com/jquery-3.7.1.slim.min.js"],
  "viewScripts":   ["index.view.js"],
  "editorStyles":  ["index.editor.css"],
  "viewStyles":    ["index.view.css"]
}
```

Field reference (built form):

| Field | Type | Purpose |
|---|---|---|
| `name` | string | Logical extension name. Used in script handles, `thirdPartyComponentHosts[].name`, and as a namespace for component IDs. |
| `title` | string | Human-readable label. |
| `version` | string | Used as the cache-busting `ver` query param when WP enqueues your scripts. Bump on every deploy. |
| `category` | string | Default category bucket. Individual components can override via the JS `category` field. |
| `keywords` | string[] | Free-form tags. Currently informational. |
| `componentIds` | string[] | Every `id` you pass to `Brizy.registerComponent`. Must match exactly. |
| `publicPath` | string | `{{ PUBLIC_PATH }}` is replaced by the bundler. |
| `editorScripts` | string[] | Loaded inside the editor iframe. Relative entries are prefixed with `$publicUrl`; absolute `http(s)` URLs are passed through unchanged (see jQuery example above). |
| `viewScripts` | string[] | Loaded on the rendered front-end page. Same relative/absolute rule. |
| `editorStyles` | string[] | Editor stylesheet URLs. Same rule. |
| `viewStyles` | string[] | Front-end stylesheet URLs. Same rule. |

> **Tip:** putting an absolute CDN URL into `editorScripts` is the supported way to load a third-party library (jQuery, Lodash, …) without bundling it.

### Step 5 — Write the editor entry: `widgets/src/index.editor.ts`

This entry is the file the editor loads. Its only job is to import each component module so each one calls `Brizy.registerComponent({...})`.

```ts
// widgets/src/index.editor.ts
import "./Map";
import "./Counter/export";
```

Inside each component module, register it:

```tsx
// widgets/src/Map/index.tsx
import { Brizy } from "@brizy/core";

const MapEmbed = ({ address, zoom = 13, style }) => {
  const src =
    `https://www.google.com/maps/embed/v1/place` +
    `?key=YOUR_KEY&q=${address}&zoom=${zoom}`;
  return (
    <div className="mapThirdComponent" style={style}>
      <iframe src={src} title="map" />
    </div>
  );
};

Brizy.registerComponent({
  id: "@you/my-brizy-widgets.Map",
  title: "Map",
  category: "custom",
  component: {
    editor: ({ address, zoom, width, widthSuffix }) => (
      <MapEmbed
        address={address}
        zoom={zoom}
        style={{ pointerEvents: "none", width: `${width}${widthSuffix}` }}
      />
    ),
    view: ({ address, zoom, width, widthSuffix }) => (
      <MapEmbed address={address} zoom={zoom} style={{ width: `${width}${widthSuffix}` }} />
    ),
  },
  options: () => [
    {
      selector: ".mapThirdComponent",
      toolbar: [
        {
          id: "toolbarCurrentElement",
          type: "popover",
          config: { icon: "nc-pin", title: "Map" },
          devices: "desktop",
          position: 90,
          options: [
            {
              id: "tabsCurrentElement",
              type: "tabs",
              tabs: [
                {
                  id: "tabCurrentElement",
                  label: "Map",
                  options: [
                    {
                      id: "address",
                      label: "Address",
                      type: "inputText",
                      placeholder: "Enter address",
                      default: { value: "Chisinau" },
                    },
                    {
                      id: "width",
                      label: "Width",
                      type: "slider",
                      config: {
                        min: 0,
                        max: 100,
                        units: [
                          { title: "px", value: "px" },
                          { title: "%", value: "%" },
                        ],
                      },
                      default: { value: 100, suffix: "%" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
```

Rules:

- Every `id` must appear in `componentIds` of `config.json`.
- `component.editor` is rendered inside the editor; `component.view` is rendered on the published page.
- `options` is a function returning the toolbar/sidebar option tree (Brizy's standard option DSL).
- The `id` is used by Brizy as the React key for your widget on the page; do not change it after a component has been used in saved content.

> **Toolbar deep-dive.** This file shows the Map example end-to-end. For the full toolbar / option-types DSL — `popover`, `tabs`, `inputText`, `slider`, `switch`, `select`, `colorPicker`, `toolbarPlacement`, `devices`, `position`, etc. — and a second worked widget (Counter), see the official Brizy docs:
>
> - Building widgets — overview: <https://builder-docs.brizy.io/building-widgets/introduction>
> - Toolbar configuration / option types: <https://builder-docs.brizy.io/building-widgets/toolbar-configuration>
> - Widget model (`id` ↔ prop mapping, `onChange`, defaults): <https://builder-docs.brizy.io/building-widgets/model>
> - Registering widgets (`category`, `categoryOrder`, `truncate`): <https://builder-docs.brizy.io/building-widgets/registering>
> - Editor controls full reference: <https://builder-docs.brizy.io/docs-internals/brizy-editor/introduction>

### Step 6 — Write the view entry: `widgets/src/index.view.ts`

The same idea, but limited to what the rendered page needs:

```ts
// widgets/src/index.view.ts
import "./Counter/export";
```

You can register the same component in both entries (with the same `id`), or split them — for components that don't need any front-end JS (pure HTML/CSS output), you can skip them in `index.view.ts`.

### Step 7 — Build

```bash
cd widgets
npm install
npm run build
```

Output:

```
widgets/build/
├── config.json          ← consumed by Brizy_Editor_ThirdParty_Extension
├── index.editor.js
├── index.editor.css
├── index.view.js
└── index.view.css
```

### Step 8 — Verify in the editor

1. Activate the new plugin in WP admin.
2. Open any Brizy page. The editor's add-element panel should list your widget under its `category`.
3. Drag it onto the page. The toolbar/options you defined in `options()` should appear.
4. Save and view the page on the front-end. Your `view` component (and `viewScripts` / `viewStyles`) should render.

If the widget is missing or broken, see **Troubleshooting** below.

---

## 4. Reference: WordPress hooks

You only ever subscribe to `brizy_extensions`. The other three are owned by the Brizy plugin and are documented here so you understand how your assets reach the page.

| Hook | Type | Purpose |
|---|---|---|
| `brizy_extensions` | filter | You append `Brizy_Editor_ThirdParty_ExtensionInterface` instances to the array and return it. Fires on WP `init`. |
| `brizy_pre_editor_enqueue_scripts` | action (Brizy → manager) | Brizy fires this when the editor is about to load. The third-party manager listens and `wp_enqueue_script`s your `editorScripts`/`editorStyles`, with deps `[brizy-editor-vendor, brizy-react-vendor, brizy-react-dom-vendor]`. |
| `brizy_preview_enqueue_scripts` | action (Brizy → manager) | Same, for the rendered front-end page. Enqueues `viewScripts`/`viewStyles`. |
| `brizy_editor_config` | filter (Brizy → manager) | The manager injects `thirdPartyUrls[]` and `thirdPartyComponentHosts[]` into the editor client config. |

---

## 5. Reference: PHP API

### `Brizy_Editor_ThirdParty_ExtensionInterface`

```php
public function getPublicPath();
public function getName();
public function getTitle();
public function getCategory();
public function getEditorScripts(); // string[]
public function getViewScripts();   // string[]
public function getEditorStyles();  // string[]
public function getViewStyles();    // string[]
public function getVersion();
```

Implement this directly if you want to source your config from somewhere other than a JSON file (a PHP array, a remote endpoint, etc.).

### `Brizy_Editor_ThirdParty_Extension`

```php
new Brizy_Editor_ThirdParty_Extension($publicUrl, $configFile);
```

- Reads `$configFile` as JSON.
- Throws `\Exception` if the file is missing or the JSON does not decode.
- For each entry in `editorScripts` / `viewScripts` / `editorStyles` / `viewStyles`:
  - If the entry starts with `http`, it is used as-is.
  - Otherwise it is prefixed with `$publicUrl`.

---

## 6. Reference: JavaScript API

Available via `import { Brizy } from "@brizy/core"` (which the bundler resolves against the editor's exposed runtime).

### `Brizy.registerComponent({ id, title, category, component, options })`

```ts
Brizy.registerComponent({
  id: "@you/my-brizy-widgets.Map",
  title: "Map",
  category: "custom",
  component: { editor, view },  // both are React components
  options: () => OptionTree,    // Brizy's option DSL
});
```

Extra `registerComponent` knobs (`truncate`, `categoryOrder`) and the full `OptionTree` DSL (toolbar, sidebar, all option types) are documented upstream:

- Registering widgets — <https://builder-docs.brizy.io/building-widgets/registering>
- Toolbar / option types — <https://builder-docs.brizy.io/building-widgets/toolbar-configuration>
- Widget model + `onChange` — <https://builder-docs.brizy.io/building-widgets/model>

---

## 7. How pages are compiled — and why widget hosting matters

Brizy has **two separate compile paths**. They produce the same final markup, but they run in very different environments and have very different consequences for third-party widgets.

### Path A — Browser compile (no problem for extensions)

While the user edits a page, the Brizy editor compiles in the **browser**. 
**This path always works regardless of where your widget is hosted.**

### Path B — Server compile via the Brizy Node compiler service

For some cases (usually after a plugin upgrade), WordPress hands the page off to a remote **Node-based compiler service** hosted by Brizy. 
This service does not have your `Brizy.registerComponent` call already in memory — it has to **fetch your editor JS over HTTP** and execute it before it can render the page.

This is the path that suffers when the host serving your widget assets is slow, flaky, or unreachable from the public internet. Everything below in this section describes Path B.

### The Path B compile flow

1. Brizy plugin runs `Brizy_Editor_Compiler::compilePost($post, $editorConfig)` (`brizy/editor/compiler.php`).
2. That method `POST`s to the compiler endpoint configured in `Brizy_Config::getCompilerUrls()`:
3. The body includes `config_json` — the full editor config. This is the same config the `brizy_editor_config` filter passes through. Inside it the widgets scripts are already injected.
4. The compiler reads and **fetches each widget script over HTTP**. It needs the actual JS to know how every `Brizy.ThirdParty.*` component should be rendered into the final page output.
5. Once the compiler has all the scripts loaded, it returns the compiled `page` / `project` / `globalBlocks` payload. Brizy stores it on the post and that is what visitors see.

```
┌────────────────────┐  POST config_json   ┌──────────────────────────────┐
│  WP (PHP)          │ ──────────────────► │  compiler.brizy.io (Node)    │
│  Brizy_Editor_     │                     │                              │
│  Compiler::        │                     │   reads config_json          │
│  compilePost()     │                     │     ↓                        │
│                    │                     │   for each thirdPartyUrls[]: │
│                    │                     │     GET https://your-site/   │
│                    │                     │         …/index.editor.js    │ ◄── must be reachable & fast
│                    │                     │     ↓                        │
│                    │ ◄────── compiled ── │   render & emit HTML/CSS     │
└────────────────────┘                     └──────────────────────────────┘
```

### Why this matters for third-party extension developers

Path B downloads your widget JS **on every compile** (subject to its own caching, which you do not control). Path A is unaffected by everything in this list — but you do not get to choose which path runs, so design for Path B. The implications:

- **Your `editorScripts` URLs must be reachable from the public internet.** Anything behind Basic Auth, a VPN, `127.0.0.1`, a private network, or a browser-only auth cookie will fail to compile.
- **Hosting speed directly drives compile latency.** A slow CDN/origin → slow compile → user perceives "Brizy is slow to publish." A flaky host → intermittent compile failures.
- **Soft failures still block the page.** If the compiler cannot fetch a script (timeout, 5xx, DNS), the affected component cannot be rendered. Symptoms range from missing widgets to a hard compiler error. Note that the page may have looked fine in the editor (Path A succeeded) and then break only on publish (Path B failed) — this is the most common confusing case.
- **Cache by version, not by URL hash.** Brizy passes `version` from `config.json` as the WP enqueue cache-buster, but the compiler typically caches the **URL**. If you ship a new build to the same URL without changing the URL, the compiler may serve the old script for a while. Either:
  - bump the `version` field **and** include the version in the script path (e.g. `widgets/build/1.0.1/index.editor.js`), or
  - use a CDN that respects normal cache-control headers and configure short TTLs while iterating.
- **Treat absolute CDN URLs in `editorScripts` the same way.** If you reference, say, `https://code.jquery.com/jquery-3.7.1.slim.min.js`, the compiler needs to fetch it too. Pin to a fast, highly-available CDN.
- **For local development (`BRIZY_DEVELOPMENT`),** the compiler still needs to reach your dev URL. `localhost` will not work — use a tunnel (ngrok, Cloudflare Tunnel) or a publicly resolvable dev domain.

### Recommended hosting checklist

- Serve `widgets/build/` over HTTPS from a CDN or a fast origin.
- Set sane `Cache-Control` headers (e.g. `public, max-age=31536000, immutable` when you version paths).
- Keep the JS bundle small. The compiler downloads it sequentially per extension; large bundles add up across multiple extensions.
- Monitor compile latency. If publishing slows down after adding an extension, check the response time of `index.editor.js` from outside your network.
- Avoid hard-coding redirects on the asset path. The compiler's HTTP client may not follow them the same way browsers do.

---

## 8. Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| Widget missing from the editor's add-element panel | `id` in `Brizy.registerComponent` does not appear in `componentIds` of `config.json`. They must match exactly. |
| 404 on `index.editor.js` / `index.view.js` | The first arg passed to `Brizy_Editor_ThirdParty_Extension` (`$publicUrl`) does not end with the folder that contains those files. |
| `File … does not exist` on plugin activation | The second constructor arg (absolute path to `config.json`) is wrong. Confirm `widgets/build/config.json` exists — run `npm run build` first. |
| `Invalid config object provided` | `config.json` failed `json_decode`. Validate it. |
| Editor renders nothing where the widget should be | Your `component.editor` returned `undefined` or threw. Test the React component standalone first. |
| Front-end renders nothing | Component not registered in `index.view.ts`, or `viewScripts` missing from the built `config.json`. |
| Stale assets after a rebuild | Bump `version` in `src/config.json`. Brizy passes it as the WP enqueue version, which busts browser cache. |
| `Builder is outside of Brizy` in console | Your bundle was loaded outside the editor (e.g. on the WP admin dashboard). Harmless, but check that your WP plugin is only enqueuing inside Brizy contexts (the bundled `Brizy_Editor_ThirdParty_Main` already handles this; only worry if you bypassed it). |
| Publish takes a long time after adding an extension | The compiler is downloading your `editorScripts` on each compile. Move the assets to a faster host/CDN. See [§7](#7-how-pages-are-compiled--and-why-widget-hosting-matters). |
| Publish times out / compiler returns an error | Your widget host is unreachable from `compiler.brizy.io`. Verify the URL resolves over the public internet (not localhost / not behind auth) and responds within a few seconds. |
| Old version of the widget rendered after a redeploy | Compiler-side cache served the previous bundle. Bump `version` in `config.json` and include the version in the script path so the URL itself changes. |

---

## 9. Reference repository layout

```
brizy-extends/
├── index.php                        ← WP plugin entry, hooks brizy_extensions
├── DEVELOPERS.md                    ← this file
├── README.md
└── widgets/
    ├── package.json                 ← @brizy/scripts build pipeline
    ├── src/
    │   ├── config.json              ← source config (singular fields)
    │   ├── index.editor.ts          ← imports each component
    │   ├── index.view.ts
    │   ├── Map/
    │   └── Counter/
    └── build/                       ← produced by `npm run build`
        ├── config.json              ← built config (plural arrays) — read by PHP
        ├── index.editor.js
        ├── index.editor.css
        ├── index.view.js
        └── index.view.css
```

Use `brizy-extends/index.php` and `widgets/build/config.json` as the canonical example when in doubt.
