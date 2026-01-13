import {themes as prismThemes} from 'prism-react-renderer';
const organizationName = 'manybrain'
const projectName = 'mailinatordocs'
const repoUrl = `https://github.com/${organizationName}/${projectName}`
const xUrl = `https://x.com/mailinator`
const youtubeUrl = `https://youtube.com/@mailinator5371`
const linkedInUrl = `https://www.linkedin.com/company/manybrain-llc/`

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mailinator',
  tagline: 'Mailinator Documentation',
  favicon: 'img/mavicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mailinator.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem',
          editUrl:
            'https://github.com/manybrain/mailinatordocs/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs',
            to: '/documentation/docs/intro',
          },
        ],
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'mailinator-api',
        docsPluginId: 'classic',
        config: {
          npxmailinator: {
            specPath: '../openapi/mailinator-api.yaml',
            outputDir: 'docs/api/',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
      },
    },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        // title: 'Home',
        logo: {
          alt: 'Mailinator Logo',
          src: 'img/mailinator.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            label: 'Quickstart',
            docId: 'quickstart',
          },
          {
            type: 'doc',
            position: 'left',
            label: 'Docs',
            docId: 'intro',
          },
          {
            label: 'API',
            sidebarId: 'apiSidebar',
            position: 'left',
            type: 'docSidebar',
          },
          {
            label: 'Home',
            position: 'left',
            href: 'https://www.mailinator.com/',
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items: [
              {
                label: 'X',
                href: xUrl,
                target: '_blank',
              },
              {
                label: 'YouTube',
                href: youtubeUrl,
                target: '_blank',
              },
              {
                label: 'LinkedIn',
                href: linkedInUrl,
                target: '_blank',
              },
              {
                label: 'GitHub',
                href: repoUrl,
                target: '_blank',
              }
            ],
          }
          // {
          //   type: 'docsVersionDropdown'
          // }
        ],
      },
      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/mailinator',
        //       },
        //       // {
        //       //   label: 'Discord',
        //       //   href: 'https://discordapp.com/invite/docusaurus',
        //       // },
        //       {
        //         label: 'X',
        //         href: 'https://x.com/mailinator',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/manybrain/mailinatordocs',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Manybrain, LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
