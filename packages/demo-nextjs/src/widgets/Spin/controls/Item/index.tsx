import { ReactElement } from "react";
import { Props } from "./types";

export const Item = (props: Props): ReactElement => {
  const { children, style, attributes } = props;
  return (
    <li className="wheel-item" style={style} {...attributes}>
      {children}
    </li>
  );
};
