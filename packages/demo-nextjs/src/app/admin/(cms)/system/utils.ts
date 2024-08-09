import { Code } from "./components/code";
import { Seo } from "./components/seo";
import { Sharing } from "./components/sharing";
import { SystemPages } from "./components/systemPages";

export const componentsTabs = [
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
