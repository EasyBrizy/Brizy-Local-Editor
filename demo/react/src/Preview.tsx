import React, { useMemo } from "react";
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

  const previewHtml = useMemo(() => {
    if (!uid) return null;
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${uid}`);
    if (!raw) return null;
    try {
      return buildPreviewDocument(JSON.parse(raw) as PublishedOutput);
    } catch {
      return null;
    }
  }, [uid]);

  if (!uid) {
    return (
      <div style={centeredStyle}>
        <h2>Missing uid parameter</h2>
        <p>Open the editor and click <strong>Publish</strong> to generate a preview.</p>
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
