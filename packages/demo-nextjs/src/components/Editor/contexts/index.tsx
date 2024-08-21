"use client";

import { ConfigContextType, EditorProviderProps } from "@/components/Editor/contexts/types";
import { getApi, getDynamicContent, getUI } from "@/components/Editor/contexts/utils";
import { _Config } from "@/hooks/useEditor/types";
import { FC, createContext, useContext, useState } from "react";
import { mergeDeep } from "timm";

const ConfigContext = createContext<ConfigContextType>({
  config: {} as _Config,
  origin: "",
  setConfig: () => {},
});

export const ConfigProvider: FC<EditorProviderProps> = ({ children, config: baseConfig, origin }) => {
  const editorConfig = mergeDeep(baseConfig, {
    api: getApi(),
    dynamicContent: getDynamicContent(baseConfig),
    ui: getUI(origin),
  }) as _Config;

  const [config, setConfig] = useState<_Config>(editorConfig);

  const value = {
    config,
    setConfig,
    origin,
  };

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export const useConfig = () => useContext(ConfigContext);
