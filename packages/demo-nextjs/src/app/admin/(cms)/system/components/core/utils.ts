import { ComponentTab } from "../layout/types";
import { Code, Seo, Sharing, SystemPages } from "../tabs";

export const componentsTabs: ComponentTab[] = [
  { id: "seo", Component: Seo },
  { id: "sharing", Component: Sharing },
  { id: "system-pages", Component: SystemPages },
  { id: "code", Component: Code },
];

export const tabs = [
  {
    title: "SEO",
    href: "#seo",
  },
  {
    title: "Sharing",
    href: "#sharing",
  },
  {
    title: "System Pages",
    href: "#system-pages",
  },
  {
    title: "Code",
    href: "#code",
  },
];
