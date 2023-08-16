export {};
declare global {
  interface Window {
    __origin__: string;
    __target__: string;
    __uid__: string | undefined;
    __VISUAL_CONFIG__: Record<string, unknown>;
  }
}
