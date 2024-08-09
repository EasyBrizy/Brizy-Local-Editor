import { WithChildren } from "@/components/Metronic/helpers";
import React, { FC } from "react";

export const Description: FC<WithChildren> = ({ children }) => (
  <span className="fs-7 text-gray-600 fw-bold">{children}</span>
);
