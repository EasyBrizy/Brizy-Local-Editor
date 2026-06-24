import React, { useRef } from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";

function App() {
  const isPreview = window.location.pathname === "/preview";

  // Stable UUID for this editor session — a new one is generated on each full page load
  const uid = useRef(crypto.randomUUID());

  if (isPreview) {
    return <Preview />;
  }

  return (
    <div className="App">
      <Editor uid={uid.current} />
    </div>
  );
}

export default App;
