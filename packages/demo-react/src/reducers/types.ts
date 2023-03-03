import type { DynamicContentOption, Response } from "@builder/core/build/es/types/types";

export type Action =
  | {
      type: "update";
      data: string;
    }
  | {
      type: "modal";
      res: Response<DynamicContentOption>;
      rej: Response<string>;
    }
  | {
      type: "resolvePlaceholder";
      data: string;
    }
  | {
      type: "rejectPlaceholder";
      data: string;
    };

export interface State {
  output: string;
  modal: {
    opened: boolean;
    resolve: Response<DynamicContentOption>;
    reject: Response<string>;
  };
}
