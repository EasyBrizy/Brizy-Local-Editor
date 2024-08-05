import { ThemeModeComponent } from "../assets/ts/layout";
import { useLayout } from "../layout/core";

export const toStaticUrl = (pathname: string) => `/${pathname}`;

export const useIllustrationsPath = (illustrationName: string): string => {
  const { config } = useLayout();

  const extension = illustrationName.substring(illustrationName.lastIndexOf("."), illustrationName.length);
  const illustration =
    ThemeModeComponent.getMode() === "dark"
      ? `${illustrationName.substring(0, illustrationName.lastIndexOf("."))}-dark`
      : illustrationName.substring(0, illustrationName.lastIndexOf("."));
  return toStaticUrl(`media/illustrations/${config.illustrations?.set}/${illustration}${extension}`);
};
