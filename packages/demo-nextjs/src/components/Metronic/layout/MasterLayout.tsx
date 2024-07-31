import { ReactNode, useEffect } from "react";
import { reInitMenu } from "../helpers";
import { ActivityDrawer, DrawerMessenger } from "../partials";
import { RightToolbar } from "../partials/layout/RightToolbar";
import { FooterWrapper } from "./components/footer";
import { HeaderWrapper } from "./components/header";
import { ScrollTop } from "./components/scroll-top";
import { Sidebar } from "./components/sidebar";
import { PageDataProvider } from "./core";

interface Props {
  children: ReactNode;
}

const MasterLayout = ({ children }: Props) => {
  useEffect(() => {
    reInitMenu();
  }, []);

  return (
    <PageDataProvider>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <HeaderWrapper />
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <Sidebar />
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
              <div className="d-flex flex-column flex-column-fluid">{children}</div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <RightToolbar />
      <DrawerMessenger />
      {/* end:: Drawers */}

      <ScrollTop />
    </PageDataProvider>
  );
};

export { MasterLayout };
