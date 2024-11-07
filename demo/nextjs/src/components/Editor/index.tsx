"use client";

import { Response } from "@/types";
import { DynamicContentModal } from "@/components/modals/DynamicContent";
import { getConfig } from "@/config";
import { useEditor } from "@/hooks/useEditor";
import { Config } from "@/hooks/useEditor/types";
import { BaseDCItem } from "@builder/core/build/es/types/dynamicContent";
import { LeftSidebarOptionsIds } from "@builder/core/build/es/types/leftSidebar";
import { PublishData } from "@builder/core/build/es/types/publish";
import { HtmlOutputType, Output } from "@builder/core/build/es/types/types";
import { useRouter } from "next/navigation";
import React, { useReducer, useRef } from "react";
import { mergeDeep } from "timm";
import { useConfig } from "./contexts";
import { reducer } from "./reducers";
import { State } from "./reducers/types";
import "./styles/index.css";

const token = getConfig().editorToken;

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
  const { config: baseConfig, origin } = useConfig();

  const containerRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const config = mergeDeep(baseConfig, {
    container: containerRef.current,
    dynamicContent: {
      groups: {
        richText: {
          handler(res: Response<BaseDCItem>, rej: Response<string>) {
            dispatch({ type: "modal", res, rej });
          },
        },
      },
    },
    ui: {
      leftSidebar: {
        [LeftSidebarOptionsIds.cms]: {
          onClose() {},
          onOpen() {
            router.push("/admin");
          },
        },
      },
      publish: {
        async handler(res: Response<PublishData<HtmlOutputType>>, rej: Response<string>, data: Output<HtmlOutputType>) {
          try {
            if (data.pageData) {
              await fetch("/api/items", {
                method: "PUT",
                body: JSON.stringify({
                  id: baseConfig.pageData.id,
                  pageData: data.pageData,
                }),
              });
            }
            if (data.projectData) {
              await fetch("/api/project", {
                method: "PUT",
                body: JSON.stringify({
                  id: baseConfig.projectData.id,
                  projectData: data.projectData,
                }),
              });
            }

            dispatch({
              type: "update",
              data: JSON.stringify(data),
            });
            res(data);
          } catch (e) {
            dispatch({
              type: "error",
              message: "Failed to update projectData, pageData",
            });
            rej("Failed to update projectData, pageData");
          }
        },
      },
    },
    elements: {
      menu: {
        onOpen: () => {
          router.push("/admin/menu");
        },
      },
    },
    extensions: [{ host: origin, path: "/widgets" }],
  }) as Config;

  const [builderState] = useEditor(token, config);

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
    <>
      {state.error && <div style={{ backgroundColor: "red", color: "#fff" }}>{state.error}</div>}

      <div className="container">
        {builderState.status === "error" ? (
          builderState.error
        ) : (
          <div className="container__editor" ref={containerRef} />
        )}
        <DynamicContentModal opened={state.modal.opened} onAdd={handleAdd} onClose={handleClose} />
      </div>
    </>
  );
};
