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

// External SVG `<use xlink:href="http://…/foo.svg">` references are blocked by
// the browser's same-origin policy when the page is rendered through an
// `srcDoc` iframe (origin `about:srcdoc`). Browsers also refuse cross-origin
// external `<use>` regardless of CORS headers. To make the icons render we
// fetch each referenced SVG and inline it as a hidden `<symbol>` sprite,
// rewriting the `<use>` references to local `#fragment` ids.
async function inlineExternalSvgUses(html: string): Promise<string> {
  // Matches xlink:href / href pointing at an absolute .svg URL, optional #frag.
  const refRe = /(xlink:href|href)="(https?:\/\/[^"#]+\.svg)(#[^"]*)?"/g;

  const urls: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = refRe.exec(html)) !== null) {
    if (urls.indexOf(m[2]) === -1) urls.push(m[2]);
  }
  refRe.lastIndex = 0;
  if (urls.length === 0) return html;

  const idByUrl = new Map<string, string>();
  const symbols: string[] = [];

  await Promise.all(
    urls.map(async (url, i) => {
      try {
        const res = await fetch(url);
        if (!res.ok) return;
        const text = await res.text();
        const id = `brz-inline-icon-${i}`;
        // Each glyph file is a full `<svg …>inner</svg>` with no internal id;
        // turn its root into a <symbol> carrying over viewBox so <use> works.
        const viewBox = /viewBox="([^"]*)"/.exec(text)?.[1] ?? "0 0 24 24";
        const inner = /<svg[^>]*>([\s\S]*?)<\/svg>/i.exec(text)?.[1];
        if (inner == null) return;
        idByUrl.set(url, id);
        symbols.push(`<symbol id="${id}" viewBox="${viewBox}">${inner}</symbol>`);
      } catch {
        /* leave the original reference untouched on failure */
      }
    }),
  );

  if (symbols.length === 0) return html;

  const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols.join("")}</svg>`;
  const rewritten = html.replace(refRe, (full, attr: string, url: string) => {
    const id = idByUrl.get(url);
    return id ? `${attr}="#${id}"` : full;
  });

  return sprite + rewritten;
}

export async function buildPreviewDocument(output: PublishedOutput): Promise<string | null> {
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

  const bodyHtml = await inlineExternalSvgUses(page.html);
  const styleTags = styleAssets.map((a) => assetToTag(a, "css")).join("\n");
  const scriptTags = scriptAssets.map((a) => assetToTag(a, "js")).join("\n");

  // Hide the `alt` text that browsers render when an image fails to load.
  // Making the text transparent / zero-size keeps loaded images untouched
  // while suppressing the fallback text for broken ones.
  const hideAltTextStyle = `<style>img{color:transparent;font-size:0;}</style>`;

  // <base> resolves relative asset URLs (icons, fonts) against the CDN
  return `<!doctype html>
<html lang="en">
<head>
<base href="${ASSET_BASE}" />
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Preview</title>
<style>html,body{margin:0;padding:0;}</style>
${hideAltTextStyle}
${styleTags}
</head>
<body>
${bodyHtml}
${scriptTags}
</body>
</html>`;
}

export const STORAGE_KEY_PREFIX = "brizy-page-";
