// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { themes } = require("prism-react-renderer");
const lightTheme = themes.shadesOfPurple;
const darkTheme = themes.dracula;

// KaTex stuff
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Commune AI",
  tagline: "Developer Documentation",
  favicon: "img/favicon.png",
  // Set the production url of your site here
  url: "https://docs.communeai.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tobiashomie", // Usually your GitHub org/user name.
  projectName: "comdocs", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  customFields: {
    enableIssueLinks: true, // Set to true to enable issue links
    enableEditUrlLinks: true, // Set to true to enable edit url links
    issueBaseUrl: "https://github.com/tobiashomie/comdocs/issues",
    enableFeedback: false, // Set to false to disable feedback
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "docs",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          showLastUpdateTime: false,
          docItemComponent: "@theme/DocItem",
          editUrl: "https://github.com/tobiashomie/comdocs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    "@gracefullight/docusaurus-plugin-vercel-analytics",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: []
      },
    ],
  ],
  // scripts: [
  //   // String format.
  //   // 'https://docusaurus.io/script.js',
  //   // Object format.
  //   {
  //     src: "/static/feedbug-widjet.js",
  //     async: true,
  //   },
  // ],
  // clientModules: ["/static/feedbug-widjet.js"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/bittensor-dev-docs-social-card.png",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: false,
        },
      },

      navbar: {
        logo: {
          alt: "Commune AI",
          src: "img/com-logo.gif",
          srcDark: "img/com-logo.gif",
          href: "https://communeai.org",
          style: {
            objectFit: "contain",
            width: 16.5,
          },
        },
        items: [
   
          {
            type: "search",
            position: "left",
            className: "custom_algolia",
          },
          {
            href: "https://github.com/tobiashomie/comdocs/",
            label: "Docs GitHub",
            position: "right",
          },
        ],
      },

      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash", "python", "diff", "json"],
      },
      algolia: {
        appId: "9GDT03N6QI",
        apiKey: "c8b2fa17d5fad15f544f40a9e29f7f74",
        indexName: "new--alpha",
        contextualSearch: true,
        insights: true,
        debug: false,
      },
      footer: {
        copyright: `
					<div className="copyRight">
						© ${new Date().getFullYear()} <a href="https://communeai.org">Commune AI</a> • Open Community. <span>all rights reserved.</span>
					</div>
					<a href='https://communeai.org'>
					<img src="/img/com-logo.gif" width=50px alt="logo"/>
					</a>
				`,
      },
    }),
};

module.exports = config;
