import { BuilderModes } from "@/actions/init";
import { BuilderOutput, Output } from "@/types/types";
import { getIn } from "timm";

export const createPopupSettings = ({
  pageData,
  mode,
}: {
  pageData: BuilderOutput["pageData"];
  mode: BuilderOutput["mode"];
}): Output["popupSettings"] | undefined => {
  if (mode !== BuilderModes.externalPopup || !pageData) {
    return undefined;
  }

  const verticalAlign = getIn(pageData, ["data", "items", "0", "value", "verticalAlign"]) ?? "center";
  const horizontalAlign = getIn(pageData, ["data", "items", "0", "value", "horizontalAlign"]) ?? "center";

  return { verticalAlign, horizontalAlign } as Output["popupSettings"];
};

export const createOutput = (output: BuilderOutput): Output => {
  const { pageData, projectData, error, mode } = output;
  const popupSettings = createPopupSettings({ pageData, mode });
  const data = {
    pageData,
    projectData,
    ...(popupSettings && { popupSettings }),
  };

  return { ...data, error } as Output;
};
