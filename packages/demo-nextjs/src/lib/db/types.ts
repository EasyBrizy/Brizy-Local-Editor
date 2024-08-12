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

export interface ProjectSettings {
  seo: Seo;
  sharing: Sharing;
  code: Code;
}
