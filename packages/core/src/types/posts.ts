export interface Sources {
  id: string;
  title: string;
  orderBy: { id: string; title: string }[];
}

export interface PostsSources {
  sources: Sources[];
  refsById: unknown[];
}
