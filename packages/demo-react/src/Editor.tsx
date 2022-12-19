import React, { useRef, useState } from "react";
import { useEditor } from "./hooks/useEditor";
import { Config } from "./hooks/useEditor/types";
import { demoConfig } from "./demoConfig";

const token = "demo";

export const Editor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const config: Config<"monolith"> = {
    ...demoConfig,
    container: containerRef.current,
    onSave: (data) => {
      setOutput(JSON.stringify(data));
    },
  };
  const [output, setOutput] = useState("");

  const [builderState, builderInstance] = useEditor(token, config);

  const handleUpdate = () => {
    builderInstance?.save();
  };

  return (
    <div className="container">
      {builderState.status === "error" ? (
        builderState.error
      ) : (
        <div className="container__editor" ref={containerRef} />
      )}

      <div className="container__output">
        <button className="btn" onClick={handleUpdate}>
          Update
        </button>
        <textarea className="output" defaultValue={output} />
      </div>
    </div>
  );
};
