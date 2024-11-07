import clsx from "clsx";
import { ThemeModeComponent } from "../../../assets/ts/layout";
import { KTIcon } from "../../../helpers";
import { ThemeModeType, useThemeMode } from "./ThemeModeProvider";

type Props = {
  toggleBtnClass?: string;
  toggleBtnIconClass?: string;
  menuPlacement?: string;
  menuTrigger?: string;
};

const systemMode = ThemeModeComponent.getSystemMode() as "light" | "dark";

const ThemeModeSwitcher = ({
  toggleBtnClass = "",
  toggleBtnIconClass = "fs-1",
  menuPlacement = "bottom-end",
  menuTrigger = "{default: 'click', lg: 'hover'}",
}: Props) => {
  const { mode, menuMode, updateMode, updateMenuMode } = useThemeMode();
  const calculatedMode = mode === "system" ? systemMode : mode;
  const switchMode = (_mode: ThemeModeType) => {
    updateMenuMode(_mode);
    updateMode(_mode);
  };

  return (
    <>
      {/* begin::Menu toggle */}
      <a
        href="#"
        className={clsx("btn btn-icon ", toggleBtnClass)}
        data-kt-menu-trigger={menuTrigger}
        data-kt-menu-attach="parent"
        data-kt-menu-placement={menuPlacement}
      >
        {calculatedMode === "dark" && (
          <KTIcon iconName="moon" className={clsx("theme-light-hide", toggleBtnIconClass)} />
        )}

        {calculatedMode === "light" && (
          <KTIcon iconName="night-day" className={clsx("theme-dark-hide", toggleBtnIconClass)} />
        )}
      </a>
      {/* begin::Menu toggle */}

      {/* begin::Menu */}
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
        data-kt-menu="true"
      >
        {/* begin::Menu item */}
        <div className="menu-item px-3 my-0">
          <a
            href="#"
            className={clsx("menu-link px-3 py-2", { active: menuMode === "light" })}
            onClick={() => switchMode("light")}
          >
            <span className="menu-icon" data-kt-element="icon">
              <KTIcon iconName="night-day" className="fs-1" />
            </span>
            <span className="menu-title">Light</span>
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className="menu-item px-3 my-0">
          <a
            href="#"
            className={clsx("menu-link px-3 py-2", { active: menuMode === "dark" })}
            onClick={() => switchMode("dark")}
          >
            <span className="menu-icon" data-kt-element="icon">
              <KTIcon iconName="moon" className="fs-1" />
            </span>
            <span className="menu-title">Dark</span>
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className="menu-item px-3 my-0">
          <a
            href="#"
            className={clsx("menu-link px-3 py-2", { active: menuMode === "system" })}
            onClick={() => switchMode("system")}
          >
            <span className="menu-icon" data-kt-element="icon">
              <KTIcon iconName="screen" className="fs-1" />
            </span>
            <span className="menu-title">System</span>
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  );
};

export { ThemeModeSwitcher };
