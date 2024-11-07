import { WithChildren } from "@/components/Metronic/helpers";
import { _Config } from "@/hooks/useEditor/types";

export interface ConfigContextType {
  config: _Config;
  origin: string;
  setConfig: (config: _Config) => void;
}

export interface Reference {
  collectionId: string;
  collectionType: string;
}

export type ConfigWithReference = _Config & {
  reference?: Reference;
};

export interface EditorProviderProps extends WithChildren {
  config: ConfigWithReference;
  origin: string;
}
