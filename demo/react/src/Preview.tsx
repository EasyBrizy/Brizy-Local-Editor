import React, { useEffect, useState } from "react";
import { buildPreviewDocument, STORAGE_KEY_PREFIX, PublishedOutput } from "./utils/buildPreview";

const centeredStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  fontFamily: "system-ui, sans-serif",
  color: "#444",
  padding: 40,
  textAlign: "center",
};

export function Preview() {
  const uid = new URLSearchParams(window.location.search).get("uid");
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setPreviewHtml(null);

    (async () => {
      if (!uid) return;
      const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${uid}`);
      if (!raw) return;
      try {
        const html = await buildPreviewDocument(JSON.parse(raw) as PublishedOutput);
        if (!cancelled) setPreviewHtml(html);
      } catch {
        /* leave previewHtml null to show the empty state */
      }
    })().finally(() => {
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [uid]);

  if (!uid) {
    return (
      <div style={centeredStyle}>
        <h2>Missing uid parameter</h2>
        <p>Open the editor and click <strong>Publish</strong> to generate a preview.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={centeredStyle}>
        <h2>Loading preview…</h2>
      </div>
    );
  }

  if (!previewHtml) {
    return (
      <div style={centeredStyle}>
        <h2>Nothing published yet</h2>
        <p>Session <code>{uid}</code> has no published data in this browser.</p>
        <p>Open the editor and click <strong>Publish</strong>.</p>
      </div>
    );
  }

  return (
    <iframe
      srcDoc={previewHtml}
      style={{ border: "none", width: "100%", height: "100vh", display: "block" }}
      title="Page preview"
    />
  );
}
