import { ParsedThirdParty } from "@/builderProvider/utils/thirdParty";
import { Config } from "@/types/types";

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
      applyFilter?: (fn: string) => __VISUAL_CONFIG__;
    };
  }
}
