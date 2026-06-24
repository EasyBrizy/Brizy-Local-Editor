// Builds a self-contained preview HTML string from the editor's publish Output.
// Ported from Brizy-Parser server/src/preview/assemble.ts

type AssetContent =
  | { type: "file"; url: string; attr?: Record<string, string> }
  | { type: "inline"; content: string; attr?: Record<string, string> }
  | { type: "code"; content: string };

type Asset = {
  name: string;
  score: number;
  content: AssetContent;
  pro: boolean;
};

type StyleGroup = {
  main?: Asset;
  generic?: Asset[];
  libsMap?: Asset[];
  pageFonts?: Asset[];
  pageStyles?: Asset[];
};

type ScriptGroup = {
  main?: Asset;
  generic?: Asset[];
  libsMap?: Asset[];
};

type PageCompiled = {
  html: string;
  assets: {
    freeStyles?: StyleGroup;
    proStyles?: StyleGroup;
    freeScripts?: ScriptGroup;
    proScripts?: ScriptGroup;
  };
};

type ProjectCompiled = { styles?: Asset[] };

export type PublishedOutput = {
  pageData?: { compiled?: PageCompiled };
  projectData?: { compiled?: ProjectCompiled };
};

// Must match the CDN version loaded in public/index.html
const ASSET_BASE = "https://cdn.brizylocal.com/pages/3.1.10/";

function attrString(attr?: Record<string, string>): string {
  if (!attr) return "";
  return Object.entries(attr)
    .map(([k, v]) => ` ${k}="${String(v).replace(/"/g, "&quot;")}"`)
    .join("");
}

function assetToTag(asset: Asset | undefined, kind: "css" | "js"): string {
  if (!asset) return "";
  const c = asset.content;
  if (c.type === "code") return c.content;
  if (c.type === "file") {
    return kind === "css"
      ? `<link rel="stylesheet" href="${c.url}"${attrString(c.attr)} />`
      : `<script src="${c.url}"${attrString(c.attr)}></script>`;
  }
  return kind === "css"
    ? `<style${attrString(c.attr)}>${c.content}</style>`
    : `<script${attrString(c.attr)}>${c.content}</script>`;
}

function styleGroupAssets(group?: StyleGroup): Asset[] {
  if (!group) return [];
  return [
    ...(group.libsMap ?? []),
    ...(group.main ? [group.main] : []),
    ...(group.generic ?? []),
    ...(group.pageStyles ?? []),
    ...(group.pageFonts ?? []),
  ];
}

function scriptGroupAssets(group?: ScriptGroup): Asset[] {
  if (!group) return [];
  return [
    ...(group.libsMap ?? []),
    ...(group.main ? [group.main] : []),
    ...(group.generic ?? []),
  ];
}

export function buildPreviewDocument(output: PublishedOutput): string | null {
  const page = output.pageData?.compiled;
  if (!page?.html) return null;

  const project = output.projectData?.compiled;

  const styleAssets: Asset[] = [
    ...styleGroupAssets(page.assets?.freeStyles),
    ...styleGroupAssets(page.assets?.proStyles),
    ...(project?.styles ?? []),
  ];
  const scriptAssets: Asset[] = [
    ...scriptGroupAssets(page.assets?.freeScripts),
    ...scriptGroupAssets(page.assets?.proScripts),
  ];

  const styleTags = styleAssets.map((a) => assetToTag(a, "css")).join("\n");
  const scriptTags = scriptAssets.map((a) => assetToTag(a, "js")).join("\n");

  // <base> resolves relative asset URLs (icons, fonts) against the CDN
  return `<!doctype html>
<html lang="en">
<head>
<base href="${ASSET_BASE}" />
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Preview</title>
<style>html,body{margin:0;padding:0;}</style>
${styleTags}
</head>
<body>
${page.html}
${scriptTags}
</body>
</html>`;
}

export const STORAGE_KEY_PREFIX = "brizy-page-";
