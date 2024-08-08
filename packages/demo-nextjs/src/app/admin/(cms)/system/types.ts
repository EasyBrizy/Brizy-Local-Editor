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

export interface ContextData {
  seo: Seo;
  sharing: Sharing;
}

export type ContextDataItem = Partial<Pick<ContextData, keyof ContextData>>;

export interface ProjectSettingsContextModel {
  data: ContextData | null;
  updateSettings: (data: ContextDataItem) => Promise<void>;
  isFetching: boolean;
}
