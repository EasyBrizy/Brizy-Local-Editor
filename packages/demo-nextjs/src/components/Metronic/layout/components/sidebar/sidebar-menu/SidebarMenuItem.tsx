import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { KTIcon, WithChildren } from "../../../../helpers";
import { useLayout } from "../../../core";

type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  active?: boolean;
  hasBullet?: boolean;
  iconClassName?: string;
};

const SidebarMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  active,
  iconClassName,
  hasBullet = false,
}) => {
  const { config } = useLayout();
  const { app } = config;

  const _iconClassName = clsx("fs-2", iconClassName);

  return (
    <div className="menu-item">
      <Link className={clsx("menu-link without-sub", { active })} href={to}>
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {icon && app?.sidebar?.default?.menu?.iconType === "svg" && (
          <span className="menu-icon">
            {" "}
            <KTIcon iconName={icon} className={_iconClassName} iconType="outline" />
          </span>
        )}
        {fontIcon && app?.sidebar?.default?.menu?.iconType === "font" && <i className={clsx("bi fs-3", fontIcon)}></i>}
        <span className="menu-title">{title}</span>
      </Link>
      {children}
    </div>
  );
};

export { SidebarMenuItem };
