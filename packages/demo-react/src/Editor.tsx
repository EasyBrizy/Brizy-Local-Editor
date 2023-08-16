import { Kit, Popup, StoryTemplate, Template } from "@builder/core/build/es/types/templates";
import React, { useReducer, useRef } from "react";
import { demoConfig } from "./demoConfig";
import { useEditor } from "./hooks/useEditor";
import { Config } from "./hooks/useEditor/types";
import { DynamicContentModal } from "./modals/DynamicContent";
import { reducer } from "./reducers";
import { State } from "./reducers/types";

const token = "demo";

const templates = "https://e-t-cloud.b-cdn.net/1.0.0";

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
      groups: {
        richText: {
          handler(res, rej) {
            dispatch({ type: "modal", res, rej });
          },
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

      defaultKits: {
        async getMeta(res, rej) {
          try {
            const kitsUrl = `${templates}/kits`;
            const meta: Array<Kit> = await fetch(`${kitsUrl}/meta.json`).then((r) => r.json());

            const data = meta.map((kit) => ({
              ...kit,
              blocks: kit.blocks.map((item) => ({
                ...item,
                thumbnailSrc: `${kitsUrl}/thumbs/${item.id}.jpg`,
              })),
            }));

            res(data);
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res, rej, id) {
          const kitsUrl = `${templates}/kits`;
          try {
            const data = await fetch(`${kitsUrl}/resolves/${id}.json`).then((r) => r.json());
            res(data);
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
      },
      defaultPopups: {
        async getMeta(res, rej) {
          const popupsUrl = `${templates}/popups`;

          try {
            const meta: Popup = await fetch(`${popupsUrl}/meta.json`).then((r) => r.json());

            const data = {
              ...meta,
              blocks: meta.blocks.map((item) => ({
                ...item,
                thumbnailSrc: `${popupsUrl}/thumbs/${item.id}.jpg`,
              })),
            };

            res(data);
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res, rej, id) {
          const popupsUrl = `${templates}/popups`;
          try {
            const data = await fetch(`${popupsUrl}/resolves/${id}.json`).then((r) => r.json());
            res(data);
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
      },
      defaultLayouts: {
        async getMeta(res, rej) {
          const layoutsUrl = `${templates}/layouts`;
          try {
            const meta: Template = await fetch(`${layoutsUrl}/meta.json`).then((r) => r.json());

            const data = {
              ...meta,
              templates: meta.templates.map((item) => ({
                ...item,
                thumbnailSrc: `${layoutsUrl}/thumbs/${item.pages[0].id}.jpg`,
                pages: item.pages.map((page) => ({
                  ...page,
                  thumbnailSrc: `${layoutsUrl}/thumbs/${page.id}.jpg`,
                })),
              })),
            };

            res(data);
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res, rej, id) {
          const layoutsUrl = `${templates}/layouts`;
          try {
            const data = await fetch(`${layoutsUrl}/resolves/${id}.json`).then((r) => r.json());

            res(data);
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
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
