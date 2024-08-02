import { usePathname } from "next/navigation";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  const pathname = usePathname();

  return (
    <>
      <SidebarMenuItem icon="category" to="/admin" title="Dashboard" active={pathname === "/admin"} />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-heading uppercase text-2sm font-semibold text-gray-500">Website</span>
        </div>
      </div>

      <SidebarMenuItem icon="profile-circle" to="/admin/pages" title="Pages" active={pathname === "/admin/pages"} />

      <SidebarMenuItem icon="setting-2" to="/admin/blogs" title="Blog" active={pathname === "/admin/blogs"} />

      <SidebarMenuItem icon="profile-user" to="/admin/stories" title="Stories" active={pathname === "/admin/stories"} />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-heading uppercase text-2sm font-semibold text-gray-500">Sections</span>
        </div>
      </div>

      <SidebarMenuItem
        icon="security-user"
        to="/admin/headers"
        title="Headers"
        active={pathname === "/admin/headers"}
      />
      <SidebarMenuItem
        icon="questionnaire-tablet"
        to="/admin/footers"
        title="Footer"
        active={pathname === "/admin/footers"}
      />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-heading uppercase text-2sm font-semibold text-gray-500">Utilities</span>
        </div>
      </div>

      <SidebarMenuItem icon="handcart" to="/admin/popups" title="Popups" active={pathname === "/admin/popups"} />
      <SidebarMenuItem
        icon="some-files"
        to="/admin/system"
        title="System Pages"
        active={pathname === "/admin/system"}
      />
    </>
  );
};

export { SidebarMenuMain };
