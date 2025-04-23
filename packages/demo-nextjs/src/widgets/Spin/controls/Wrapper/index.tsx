import { ReactElement } from "react";
import { Props } from "./types";

export const Wrapper = ({ children }: Props): ReactElement => <div className="spin-wheel-container">{children}</div>;
