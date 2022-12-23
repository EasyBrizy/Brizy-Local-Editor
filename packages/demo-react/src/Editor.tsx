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
    api: {
      media: {
        mediaResizeUrl: "https://media.brizylocal.com/media",
        addMedia: {
          handler(res, rej, extra) {
            setTimeout(() => {
              res({
                uid: "c3d7d131eed7b1d91623a11672e909fd",
                fileName: "my-custom-image.png",
              });
            }, 1000);

            // On Error
            //setTimeout(() => {
            //   rej("My custom error message");
            // }, 1000);
          },
        },
      },
    },
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
