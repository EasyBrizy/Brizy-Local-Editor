import { FC } from "react";
import { getLayoutFromLocalStorage } from "../../layout/core";
import icons from "../icons-config/icons";

type Props = {
  className?: string;
  iconType?: "duotone" | "solid" | "outline";
  iconName: string;
};

const KTIcon: FC<Props> = ({ className = "", iconType, iconName }) => {
  if (!iconType) {
    iconType = getLayoutFromLocalStorage().main?.iconType;
  }

  return (
    <i className={`ki-${iconType} ki-${iconName}${className && " " + className}`}>
      {iconType === "duotone" &&
        [...Array(icons[iconName])].map((_e, i) => {
          return <span key={`${iconType}-${iconName}-${className}-path-${i + 1}`} className={`path${i + 1}`}></span>;
        })}
    </i>
  );
};

export { KTIcon };
