// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Murali's Version of Tetragon",
  tagline: 'Tetragon Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // We will update these when we deploy the site.
  url: 'https://murali3007.github.io',
  baseUrl: '/tertragon-updated-site/',

  organizationName: 'Murali3007',
  projectName: 'tertragon-updated-site',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
        },

        // We don't need the Docusaurus blog for this project.
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "Murali's Version of Tetragon",

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/Murali3007/tertragon-updated-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Docs',
                to: '/docs/docs',
              },
              {
                label: 'Features',
                to: '/docs/features',
              },
            ],
          },
          {
            title: 'Source',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Murali3007/tertragon-updated-site',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Murali's Version of Tetragon. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;