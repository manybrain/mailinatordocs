import {themes as prismThemes} from 'prism-react-renderer';
const organizationName = 'manybrain'
const projectName = 'mailinatordocs'
const repoUrl = `https://github.com/${organizationName}/${projectName}`
const xUrl = `https://x.com/mailinator`
const youtubeUrl = `https://youtube.com/@mailinator5371`

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
  baseUrl: '/',

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
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Mailinator Logo',
          src: 'img/mailinator.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'API',
            position: 'left',
            to: '/docs/api/intro'
          },
          {
          href: xUrl,
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-twitter',
          'aria-label': 'X',
          target: '_blank',
          label: 'X',
          },
          {
          href: repoUrl,
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-github',
          'aria-label': 'GitHub repository',
          target: '_blank',
          label: 'GitHub',
          },
          {
            href: youtubeUrl,
            label: 'YouTube',
            position: 'right',
          },
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
