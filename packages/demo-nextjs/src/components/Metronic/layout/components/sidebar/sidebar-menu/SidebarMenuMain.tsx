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

      <SidebarMenuItem icon="book" to="/admin/pages" title="Pages" active={pathname === "/admin/pages"} />

      <SidebarMenuItem icon="text-bold" to="/admin/blogs" title="Blog" active={pathname === "/admin/blogs"} />

      <SidebarMenuItem icon="book-open" to="/admin/stories" title="Stories" active={pathname === "/admin/stories"} />

      <SidebarMenuItem icon="handcart" to="/admin/products" title="Products" active={pathname === "/admin/products"} />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-heading uppercase text-2sm font-semibold text-gray-500">Template</span>
        </div>
      </div>

      <SidebarMenuItem icon="element-9" to="/admin/headers" title="Header" active={pathname === "/admin/headers"} />
      <SidebarMenuItem
        icon="element-9"
        to="/admin/footers"
        title="Footer"
        active={pathname === "/admin/footers"}
        iconClassName="rotate-180"
      />

      <SidebarMenuItem icon="menu" to="/admin/menu" title="Menu" active={pathname === "/admin/menu"} />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-heading uppercase text-2sm font-semibold text-gray-500">Utilities</span>
        </div>
      </div>

      <SidebarMenuItem
        icon="notification-status"
        to="/admin/popups"
        title="Popup"
        active={pathname === "/admin/popups"}
      />
      <SidebarMenuItem icon="filter" to="/admin/leads" title="Leads" active={pathname === "/admin/leads"} />
    </>
  );
};

export { SidebarMenuMain };
