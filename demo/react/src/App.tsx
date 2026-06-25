import React, { useRef } from "react";
import { Editor } from "./Editor";

function App() {
  // Stable UUID for this editor session — a new one is generated on each full page load
  const uid = useRef(crypto.randomUUID());

  return (
    <div className="App">
      <Editor uid={uid.current} />
    </div>
  );
}

export default App;
