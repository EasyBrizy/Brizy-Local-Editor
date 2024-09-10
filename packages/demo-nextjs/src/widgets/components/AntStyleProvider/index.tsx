import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { FC, ReactNode, useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";

interface Props {
  children: ReactNode;
}

export const AntStyleProvider: FC<Props> = ({ children }) => {
  const cache = useMemo(() => createCache(), []);

  renderToStaticMarkup(<StyleProvider cache={cache}>{children}</StyleProvider>);
  const style = extractStyle(cache);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      {children}
    </>
  );
};
