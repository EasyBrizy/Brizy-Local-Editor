import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { renderPreview } from "./Preview";

// The preview route renders the published page as the whole document (no React,
// no iframe). Everything else mounts the editor app.
if (window.location.pathname === "/preview") {
  renderPreview();
} else {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
