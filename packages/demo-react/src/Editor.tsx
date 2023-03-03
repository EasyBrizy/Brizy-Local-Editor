import React, { useReducer, useRef } from "react";
import { demoConfig } from "./demoConfig";
import { useEditor } from "./hooks/useEditor";
import { Config } from "./hooks/useEditor/types";
import { DynamicContentModal } from "./modals/DynamicContent";
import { reducer } from "./reducers";
import { State } from "./reducers/types";

const token = "demo";

const noop = () => {};

const initialState: State = {
  output: "",
  modal: {
    opened: false,
    resolve: noop,
    reject: noop,
  },
};

export const Editor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const config: Config<"monolith"> = {
    ...demoConfig,
    container: containerRef.current,

    dynamicContent: {
      richText: {
        handler(res, rej) {
          dispatch({ type: "modal", res, rej });
        },
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
      dispatch({
        type: "update",
        data: JSON.stringify(data),
      });
    },
  };

  const [builderState, builderInstance] = useEditor(token, config);

  const handleUpdate = () => {
    builderInstance?.save();
  };

  const handleAdd = (value: string) => {
    dispatch({
      type: "resolvePlaceholder",
      data: value,
    });
  };

  const handleClose = () => {
    dispatch({
      type: "rejectPlaceholder",
      data: "Placeholder not added",
    });
  };

  return (
    <div className="container">
      {builderState.status === "error" ? builderState.error : <div className="container__editor" ref={containerRef} />}

      <DynamicContentModal opened={state.modal.opened} onAdd={handleAdd} onClose={handleClose} />

      <div className="container__output">
        <button className="btn" onClick={handleUpdate}>
          Update
        </button>
        <textarea className="output" defaultValue={state.output} />
      </div>
    </div>
  );
};
