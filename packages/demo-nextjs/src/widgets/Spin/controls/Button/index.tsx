import { ReactElement } from "react";
import { Props } from "./types";

export const Button = ({ children, onClick, disabled }: Props): ReactElement => (
  <button className="spin-button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
