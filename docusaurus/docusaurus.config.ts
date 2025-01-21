import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Brizy",
  tagline: "White label Cloud and Self-hosted builder",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.brizy-docs.brizy.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  organizationName: "brizy",
  projectName: "brizy-local",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/EasyBrizy/Brizy-Local-Editor/tree/master/docusaurus",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "Brizy",
        src: "img/logo.svg"
      },
      items: [
        //#region Internals

        {
          to: "/docs-internals/brizy-editor/introduction",
          label: "Internals",
          position: "right",
          activeBaseRegex: `/docs-internals/`,
        },

        //#endregion

        //#region Third party

        {
          to: "/docs-third-party/brizy-widgets/introduction",
          label: "Third Party",
          position: "right",
          activeBaseRegex: `/docs-third-party/`,
        },

        //#endregion

        //#region Others

        {
          href: "https://github.com/EasyBrizy/Brizy-Local-Editor",
          label: "GitHub",
          position: "right",
        },

        //#endregion
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "/docs/getting-started/what-is-brizy",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Support",
              href: "https://support.brizy.io/hc/en-us",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/EasyBrizy/Brizy-Local-Editor",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brizy`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-internals",
        path: "docs-internals",
        routeBasePath: "docs-internals",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-third-party",
        path: "docs-third-party",
        routeBasePath: "docs-third-party",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};

export default config;
