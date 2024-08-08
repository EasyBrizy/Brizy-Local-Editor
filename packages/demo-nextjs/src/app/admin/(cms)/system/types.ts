interface Seo {
  title: string;
  description: string;
  searchVisibility: boolean;
}

interface Sharing {
  title: string;
  description: string;
  preserveSeoTitle: boolean;
  preserveSeoDescription: boolean;
}

interface Code {
  customCss: string;
  codeInjectionFooter: string;
  codeInjectionHeader: string;
}

export interface ContextData {
  seo: Seo;
  sharing: Sharing;
  code: Code;
}

export type ContextDataItem = Partial<Pick<ContextData, keyof ContextData>>;

export interface ProjectSettingsContextModel {
  data: ContextData | null;
  updateSettings: (data: ContextDataItem) => Promise<void>;
  isFetching: boolean;
}
