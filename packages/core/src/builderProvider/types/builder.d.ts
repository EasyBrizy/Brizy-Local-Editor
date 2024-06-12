import { ParsedThirdParty } from "@/builderProvider/utils/thirdParty";

export {};

type __VISUAL_CONFIG__ = Record<string, unknown>;

declare global {
  interface Window {
    __origin__: string;
    __target__: string;
    __uid__: string | undefined;
    __VISUAL_CONFIG__: __VISUAL_CONFIG__;
    __THIRD_PARTY_ASSETS__: Array<ParsedThirdParty>;
    Brizy?: {
      config?: {
        getAll: () => __VISUAL_CONFIG__;
      };
    };
  }
}
