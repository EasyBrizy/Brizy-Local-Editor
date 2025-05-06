"use client";

import { _Config } from "@/hooks/useEditor/types";
import { useRouter } from "next/navigation";
import { FC, createContext, useCallback, useContext, useState } from "react";
import { mergeDeep } from "timm";
import { ConfigContextType, EditorProviderProps } from "./types";
import { getApi, getDynamicContent, getElements, getIntegrations, getUI } from "./utils";

const ConfigContext = createContext<ConfigContextType>({
  config: {} as _Config,
  origin: "",
  setConfig: () => {},
});

export const ConfigProvider: FC<EditorProviderProps> = ({ children, config: baseConfig, origin }) => {
  const router = useRouter();
  const onOpenMenu = useCallback(() => router.push("/admin/menu"), [router]);

  const editorConfig = mergeDeep(baseConfig, {
    api: getApi(),
    dynamicContent: getDynamicContent(baseConfig),
    ui: getUI(origin),
    elements: getElements(onOpenMenu),
    integrations: getIntegrations(origin),
    urls: {
      editorFonts: `${origin}/api/fonts/`,
    },
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
