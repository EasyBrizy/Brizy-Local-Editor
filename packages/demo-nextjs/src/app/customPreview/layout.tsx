import React, { ReactElement, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const styles: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#dbd3cc",
  padding: "10px",
};

const CustomPreviewLayout = (props: Props): ReactElement => {
  const { children } = props;
  return (
    <>
      <header style={styles}>
        <h2>Header</h2>
      </header>
      {children}
      <footer style={styles}>
        <h5>Footer</h5>
      </footer>
    </>
  );
};

export default CustomPreviewLayout;
