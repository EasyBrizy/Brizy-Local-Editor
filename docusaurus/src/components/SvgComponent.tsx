import React, { FC } from "react";

interface Props {
  icon: string;
}

export const SvgComponent: FC<Props> = ({ icon }) => (
  <span style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
    <svg width={28} height={28} style={{ marginRight: 10 }}>
      <use xlinkHref={`/img/icons.svg#${icon}`} />
    </svg>
    {icon}
  </span>
);
