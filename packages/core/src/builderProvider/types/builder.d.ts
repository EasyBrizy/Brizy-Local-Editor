export {};

type __VISUAL_CONFIG__ = Record<string, unknown>;

declare global {
  interface Window {
    __origin__: string;
    __target__: string;
    __uid__: string | undefined;
    __VISUAL_CONFIG__: __VISUAL_CONFIG__;
    Brizy?: {
      config?: {
        getAll: () => __VISUAL_CONFIG__;
      };
    };
  }
}
