import { demoConfig } from "./demoConfig";
import { useEditor } from "./hooks/useEditor";
import { Config } from "./hooks/useEditor/types";
import type {
  Response,
  DynamicContentOption,
} from "@builder/core/build/es/types/types";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

const token = "demo";

const DynamicContentModalExample = ({
  node,
  onClick,
}: {
  node: HTMLDivElement | null;
  onClick: (value: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (!node) return null;

  return ReactDOM.createPortal(
    <div
      className="brz-react-portal"
      style={{
        position: "absolute",
        top: "38%",
        left: "33%",
      }}
    >
      <span>
        <input type="text" ref={inputRef} placeholder="Placeholder label..." />
      </span>
      <span style={{ marginLeft: "10px" }}>
        <button onClick={() => onClick(inputRef.current?.value ?? "")}>
          Add
        </button>
      </span>
    </div>,
    node
  );
};

export const Editor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const richTextDCCallback = useRef<Response<DynamicContentOption>>();

  const config: Config<"monolith"> = {
    ...demoConfig,
    container: containerRef.current,

    dynamicContent: {
      richText(res, rej) {
        setIsOpen(true);
        richTextDCCallback.current = res;
      },
    },

    api: {
      media: {
        mediaResizeUrl: "https://media.brizylocal.com/media",
        addMedia: {
          handler(res, rej, extra) {
            setTimeout(() => {
              res({
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
  const [isOpen, setIsOpen] = useState(false);
  const [builderState, builderInstance] = useEditor(token, config);

  const handleUpdate = () => {
    builderInstance?.save();
  };

  return (
    <div className="container">
      {builderState.status === "error" ? (
        builderState.error
      ) : (
        <>
          <div className="container__editor" ref={containerRef} />
          {isOpen && (
            <DynamicContentModalExample
              node={containerRef.current}
              onClick={(value) => {
                if (typeof richTextDCCallback.current === "function") {
                  richTextDCCallback.current({
                    label: value,
                    placeholder: "{{test_placeholder}}",
                  });
                }
                setIsOpen(false);
              }}
            />
          )}
        </>
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
