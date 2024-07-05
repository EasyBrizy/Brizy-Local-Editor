import React, { ReactElement, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const CustomPreviewLayout = (props: Props): ReactElement => {
  const { children } = props;
  return (
    <>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default CustomPreviewLayout;
