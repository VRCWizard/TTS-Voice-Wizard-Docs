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
  url: 'https://ttsvoicewizard.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VRCWizard', // Usually your GitHub org/user name.
  projectName: 'TTS-Voice-Wizard-Docs', // Usually your repo name.
  trailingSlash: false,

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
      // ...
        // Add 'regenerator-runtime/runtime' to the clientModules array
          clientModules: [
            require.resolve('regenerator-runtime/runtime'), //need this here for speech recognition
          ],
        

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

     /* algolia: {
        // The application ID provided by Algolia
        appId: 'WU8HXYSO5J',
  
        // Public API key: it is safe to commit it
        apiKey: '7c407078ff6534ab96f6316326a0812e',
  
        indexName: 'ttsvoicewizard',

        insights: true, // Optional, automatically send insights when user interacts with search results
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },*/

     
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
          {to: '/WebApp', label: 'Web App (Beta)', position: 'left'},
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
        links: [
          {
            title: 'TTS Voice Wizard',
            items: [
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
          {
            title: 'Socials',
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
                label: 'Getting Started',
                href: '/docs/intro',
              },
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'Web App',
                to: '/WebApp',
              },
            ],
          },
        
        ],
        
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
