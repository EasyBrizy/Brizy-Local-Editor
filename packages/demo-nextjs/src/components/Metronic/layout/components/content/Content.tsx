import clsx from "clsx";
import { useEffect } from "react";
import { DrawerComponent } from "../../../assets/ts/components";
import { WithChildren } from "../../../helpers";
import { useLayout } from "../../core";

const Content = ({ children }: WithChildren) => {
  const { config, classes } = useLayout();

  useEffect(() => {
    DrawerComponent.hideAll();
  }, []);

  const appContentContainer = config.app?.content?.container;
  return (
    <div
      id="kt_app_content"
      className={clsx("app-content flex-column-fluid", classes.content.join(" "), config?.app?.content?.class)}
    >
      {appContentContainer ? (
        <div
          id="kt_app_content_container"
          className={clsx("app-container", classes.contentContainer.join(" "), {
            "container-xxl": appContentContainer === "fixed",
            "container-fluid": appContentContainer === "fluid",
          })}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export { Content };
