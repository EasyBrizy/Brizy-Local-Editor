import { BuilderModes } from "@/actions/init";
import { BuilderOutput, HtmlOutputType, Output } from "@/types/types";
import { getIn } from "timm";

const createPopupSettings = ({
  pageData,
  mode,
}: {
  pageData: BuilderOutput<HtmlOutputType>["pageData"];
  mode: BuilderOutput<HtmlOutputType>["mode"];
}): Output<HtmlOutputType>["popupSettings"] | undefined => {
  if (mode !== BuilderModes.externalPopup || !pageData) {
    return undefined;
  }

  const verticalAlign = getIn(pageData, ["data", "items", "0", "value", "verticalAlign"]) ?? "center";
  const horizontalAlign = getIn(pageData, ["data", "items", "0", "value", "horizontalAlign"]) ?? "center";

  return { verticalAlign, horizontalAlign } as Output<HtmlOutputType>["popupSettings"];
};

export const createOutput = <T extends HtmlOutputType>(output: BuilderOutput<T>): Output<T> => {
  const { pageData, projectData, error, mode } = output;
  const popupSettings = createPopupSettings({ pageData, mode });
  const data = {
    pageData,
    projectData,
    ...(popupSettings && { popupSettings }),
  };

  return { ...data, error } as Output<T>;
};
