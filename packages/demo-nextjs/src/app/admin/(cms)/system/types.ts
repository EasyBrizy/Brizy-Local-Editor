interface Seo {
  title: string;
  description: string;
  searchVisibility: boolean;
}

export interface ContextData {
  seo: Seo;
}

export interface ProjectSettingsContextModel {
  data: ContextData | null;
  updateSettings: (data: ContextData) => Promise<void>;
}
