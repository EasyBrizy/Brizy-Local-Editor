import clsx from "clsx";
import React from "react";
import { KTIcon, WithChildren } from "../../../../helpers";
import { useLayout } from "../../../core";

type Props = {
  title: string;
  icon?: string;
  fontIcon?: string;
  active?: boolean;
  hasBullet?: boolean;
};

const SidebarMenuItemWithSub: React.FC<Props & WithChildren> = ({
  children,
  title,
  icon,
  fontIcon,
  hasBullet,
  active,
}) => {
  const { config } = useLayout();
  const { app } = config;

  return (
    <div className={clsx("menu-item", { "here show": true }, "menu-accordion")} data-kt-menu-trigger="click">
      <span className="menu-link">
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {icon && app?.sidebar?.default?.menu?.iconType === "svg" && (
          <span className="menu-icon">
            <KTIcon iconName={icon} className="fs-2" />
          </span>
        )}
        {fontIcon && app?.sidebar?.default?.menu?.iconType === "font" && <i className={clsx("bi fs-3", fontIcon)}></i>}
        <span className="menu-title">{title}</span>
        <span className="menu-arrow"></span>
      </span>
      <div className={clsx("menu-sub menu-sub-accordion", { "menu-active-bg": active })}>{children}</div>
    </div>
  );
};

export { SidebarMenuItemWithSub };
