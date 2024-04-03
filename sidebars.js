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
    "whats-new-in-docs",
    "questions-and-answers",
    {
      type: "category",
      label: "Learn Bittensor Concepts",
      collapsible: true,
      collapsed: false,
      items: [
        "learn/introduction",
        "learn/bittensor-building-blocks",
        "learn/anatomy-of-incentive-mechanism",
      ],
    },
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
      label: "Subnet Tutorials",
      collapsible: true,
      collapsed: false,
      items: [
        "tutorials/basic-subnet-tutorials",
        "tutorials/ocr-subnet-tutorial",
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
      ],
    },
    {
      type: "category",
      label: "Mining",
      collapsible: true,
      collapsed: false,
      items: [
        "mining/miner",
        "mining/register",
        "mining/validator"
      ],
    },

    "btcli",
    "api-ref",
    "module",
    // "reference/bittensor-api-ref",
    "yuma-consensus",
    "governance",
    "senate",
    "glossary",
  ],
};

module.exports = sidebars;
