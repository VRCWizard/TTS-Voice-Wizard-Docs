// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TTS Voice Wizard',
  tagline: 'A Voice For Everyone',
  favicon: 'img/TTSIcon.ico',

  // Set the production url of your site here
  url: 'https://VRCWizard.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TTS-Voice-Wizard-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VRCWizard', // Usually your GitHub org/user name.
  projectName: 'TTS-Voice-Wizard-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

     
      // Replace with your project's social card
      image: 'img/AVoice4Everyone.png',
      navbar: {
        title: 'TTS Voice Wizard',
        logo: {
          alt: 'TTS Voice Wizard Logo',
          src: 'img/TTSIcon.png',
        },
      items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Updates & Tips', position: 'left'},
          {
            href: 'https://github.com/VRCWizard/TTS-Voice-Wizard',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.patreon.com/ttsvoicewizard',
            label: 'Patreon',
            position: 'right',
          },
          {
            href: 'https://discord.gg/YjgR9SWPnW',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
       footer: {
        style: 'dark',
       /* links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC5e7eigqyhxL6JaS6U4pGvg',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/YjgR9SWPnW',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Wizard_VR',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/VRCWizard/TTS-Voice-Wizard',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/ttsvoicewizard',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/ttsvoicewizard',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} TTS Voice Wizard.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
