import { getConfig } from "@/config";
import { Builder } from "@builder/core/build/es/types/types";
import { useEffect, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { ActionKind, Config, Instance, State } from "./types";

export const useEditor = (token: string, config: Config): [State, Instance | undefined] => {
  const [state, dispatch] = useReducer(reducer, {
    status: ActionKind.idle,
  });
  const builderInstance = useRef<Instance>();
  const builderGlobal = useRef<Builder>();
  const builderScript = useRef<HTMLScriptElement>();

  useEffect(() => {
    const builder = window.Builder;
    const builderScriptsRef = builderScript.current;

    if (!builder && !builderScriptsRef) {
      const script = document.createElement("script");
      script.src = getConfig().editorUrl;
      document.body.appendChild(script);
      builderScript.current = script;

      script.onload = () => {
        dispatch({ type: ActionKind.init });
        builderGlobal.current = window.Builder;
      };
      script.onerror = (e) => {
        dispatch({
          type: ActionKind.error,
          error: "failed to load builder",
        });
      };
    }
  }, []);

  useEffect(() => {
    if (state.status === ActionKind.init) {
      const builder = builderGlobal.current;
      const node = config.container;

      if (!node) {
        dispatch({
          type: ActionKind.error,
          error: "Invalid Node ref",
        });
        return;
      }

      if (!builder) {
        dispatch({
          type: ActionKind.error,
          error: "Something went wrong",
        });
        return;
      }

      const instance = (api: Instance) => {
        builderInstance.current = api;
      };

      const _onLoad = () => {
        dispatch({ type: ActionKind.ready });
        config.onLoad?.();
      };

      const _config = {
        ...config,
        container: node,
        onLoad: _onLoad,
      };

      dispatch({ type: ActionKind.load });
      builder.init(token, _config, instance);
    }
  }, [state, token, config]);

  return [state, builderInstance.current];
};
