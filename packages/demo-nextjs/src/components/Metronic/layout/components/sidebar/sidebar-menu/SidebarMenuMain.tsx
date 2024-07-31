import { usePathname } from "next/navigation";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  const pathname = usePathname();

  return (
    <>
      <SidebarMenuItem icon="element-11" to="/admin" title="Dashboard" active={pathname === "/admin"} />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Website</span>
        </div>
      </div>

      <SidebarMenuItem icon="element-11" to="/admin/pages" title="Pages" active={pathname === "/admin/pages"} />

      <SidebarMenuItem icon="element-11" to="/admin/blogs" title="Blog" active={pathname === "/admin/blogs"} />

      <SidebarMenuItem icon="element-11" to="/admin/stories" title="Stories" active={pathname === "/admin/stories"} />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Sections</span>
        </div>
      </div>

      <SidebarMenuItem icon="element-11" to="/admin/headers" title="Headers" active={pathname === "/admin/headers"} />
      <SidebarMenuItem icon="element-11" to="/admin/footers" title="Footer" active={pathname === "/admin/footers"} />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Utilities</span>
        </div>
      </div>

      <SidebarMenuItem icon="element-11" to="/admin/popups" title="Popups" active={pathname === "/admin/popups"} />
      <SidebarMenuItem
        icon="element-11"
        to="/admin/popups"
        title="System Pages"
        active={pathname === "/admin/system-pages"}
      />
    </>
  );
};

export { SidebarMenuMain };
