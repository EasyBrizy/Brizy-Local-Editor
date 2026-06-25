// Copies the editor icon/font assets into the React demo's public dir so the
// demo can serve them same-origin (needed for the preview: browsers block
// external SVG `<use>` icon refs cross-origin). Runs on `npm start` (prestart)
// and is a no-op when the icons are already present.
const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "../public/dist/free/editor/icons");
const dest = path.resolve(__dirname, "../../../demo/react/public/dist/free/editor/icons");

if (!fs.existsSync(src)) {
  console.warn(`[copy-demo-icons] source not found, skipping: ${src}`);
  process.exit(0);
}

if (fs.existsSync(dest)) {
  console.log("[copy-demo-icons] demo icons already present, skipping copy.");
  process.exit(0);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.cpSync(src, dest, { recursive: true });
console.log(`[copy-demo-icons] copied icons -> ${dest}`);
