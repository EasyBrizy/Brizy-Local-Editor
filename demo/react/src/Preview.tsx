import { buildPreviewDocument, STORAGE_KEY_PREFIX, PublishedOutput } from "./utils/buildPreview";

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function statusDocument(title: string, detail: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Preview</title>
<style>
  body {
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-family: system-ui, sans-serif;
    color: #444;
    padding: 40px;
    text-align: center;
    box-sizing: border-box;
  }
</style>
</head>
<body>
<h2>${escapeHtml(title)}</h2>
<p>${escapeHtml(detail)}</p>
</body>
</html>`;
}

// Renders the published page as the top-level document (no iframe). Because this
// is the same origin that serves the copied icons, the page's `<use>` icon refs
// resolve and its scripts run natively.
export function renderPreview(): void {
  const uid = new URLSearchParams(window.location.search).get("uid");

  let html: string | null = null;

  if (!uid) {
    html = statusDocument(
      "Missing uid parameter",
      "Open the editor and click Publish to generate a preview.",
    );
  } else {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${uid}`);
    if (raw) {
      try {
        html = buildPreviewDocument(JSON.parse(raw) as PublishedOutput);
      } catch {
        html = null;
      }
    }
    if (!html) {
      html = statusDocument(
        "Nothing published yet",
        `Session ${uid} has no published data in this browser. Open the editor and click Publish.`,
      );
    }
  }

  document.open();
  document.write(html);
  document.close();
}
