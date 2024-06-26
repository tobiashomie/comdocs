/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  bittensorSidebar: [
    // 	{
    // 	type: 'link',
    // 	href: 'https://docs.bittensor.com',
    // 	label: "Search",
    // 	className: 'sidebarSearch', //  based on Class name it will add search component
    // },
    "index",
    "questions-and-answers",
    {
      type: "category",
      label: "Get Started",
      collapsible: true,
      collapsed: false,
      items: [
        "getting-started/installation",
        "getting-started/features",
      ],
    },

    {
      type: "category",
      label: "Subspace",
      collapsible: true,
      collapsed: false,
      items: [
        "subspace/staking",
        "subspace/subnets",        
        "subspace/miner",
        "subspace/register",
        "subspace/validator"
      ],
    },
    {
      type: "category",
      label: "Module",
      collapsible: true,
      collapsed: false,
      items: [
        "module/cli",
        "module/module",
        "module/key_management",
        "module/serve_a_module",
        "module/making_an_app",
        "module/tree"
      ],
    },
    {
      type: "category",
      label: "Notebooks",
      collapsible: true,
      collapsed: false,
      items: [
        "notebooks/key_management",
        "notebooks/module_basics",
        "notebooks/navigate_the_network",
        "notebooks/run_a_model"

      ],
    },
    {
      type: "category",
      label: "Blackpaper",
      collapsible: true,
      collapsed: false,
      items: [
        "blackpaper/module",
        "blackpaper/emissions",
        "blackpaper/validator",
        "blackpaper/staking",
        "blackpaper/profit_sharing_emissions",
        "blackpaper/tokens",
        "blackpaper/multichain",
        "blackpaper/module_filesystem"
      ],
    },
    // "reference/bittensor-api-ref",

  ],
};

module.exports = sidebars;
