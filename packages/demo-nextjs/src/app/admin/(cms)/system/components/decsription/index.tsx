import React, { FC } from "react";

interface Props {
  title: string;
}

export const Description:FC<Props> = ({ title }) => {
  return <span className="fs-7 text-gray-600">{title}</span>;
};
