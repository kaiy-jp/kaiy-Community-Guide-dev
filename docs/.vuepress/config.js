  
  const autometaOptions = {
    image: false,
    site: {
      name: 'kaiy Community Guide'
    },
  }

  module.exports = {
    locales: {
      '/': {
        lang: 'ja-JP',
        title: 'kaiy Community Guide',
        description: 'The community guide to kaiy'
      }
    },
    // serviceWorker: true,
    themeConfig: {
      algolia: {
        apiKey: '8c789b5d0ee680a4a383673877be347d',
        indexName: 'kaiy-community'
      },
      logo: '/k-co-logo-pink.svg',
      docsDir: 'docs',
      repo: 'https://github.com/kaiy-jp/kaiy-community',
      editLinks: true,
      sidebarDepth: 3,
      locales: {
        '/': {
          label: 'Japanese',
          selectText: 'Languages',
          editLinkText: 'Edit this page on GitHub',
          nav: [
            {
              text: 'Guide',
              link: '/guide/'
            },
          ],
          sidebar: [
            '/',
            {
              title: 'リリースノート',
              collapsable: false,
              children: [
                '/guide/release-note/ver063.md',
                '/guide/release-note/ver062.md',
                '/guide/release-note/ver061.md',
                '/guide/release-note/ver060.md',
                '/guide/release-note/ver0510.md',
                '/guide/release-note/ver059.md',
                '/guide/release-note/ver058.md',
                '/guide/release-note/ver056.md',
                '/guide/release-note/ver055.md',
                '/guide/release-note/ver050.md',
                '/guide/release-note/ver045.md',
                '/guide/release-note/ver044.md',
                '/guide/release-note/ver043.md',
                '/guide/release-note/ver042.md',
                '/guide/release-note/ver030.md',
                '/guide/release-note/ver020.md',
                '/guide/release-note/ver010.md'
              ]
            },
            {
              title: 'Get Started',
              collapsable: false,
              children: [
                '/guide/get-started/what-is-kaiy.md',
                "/guide/get-started/kaiy's-vision.md",
                '/guide/get-started/kaiy-overview.md'
              ]
            },
            {
              title: 'User Guide',
              collapsable: false,
              children: [
                '/guide/user-guide/user-guide.md'
              ]
            },
            {
              title: 'Developer Guide',
              collapsable: false,
              children: [
                '/guide/developer-guide/developer-guide.md'
              ]
            },
            {
              title: '利用規約',
              collapsable: false,
              children: [
                '/guide/legal/previous.md',
                '/guide/legal/1-apply.md',
                '/guide/legal/2-registration.md',
                '/guide/legal/3-userid-password.md',
                '/guide/legal/4-third-usage-fee-payment.md',
                '/guide/legal/5-prohibitions.md',
                '/guide/legal/6-discontinuation-of-offer.md',
                '/guide/legal/7-usage-restrictions-deregistration.md',
                '/guide/legal/8-unsubscribe.md',
                '/guide/legal/9-disclaimer.md',
                '/guide/legal/10-change-service-content.md',
                '/guide/legal/11-changes-to-terms-and-conditions.md',
                '/guide/legal/12-handling-of-personal-information.md',
                '/guide/legal/13-notification-or-contact.md',
                '/guide/legal/14-prohibition-of-transfer-of-rights-and-obligations.md',
                '/guide/legal/15-governing-law-jurisdiction.md'
              ]
            },
          ]
        }
      }
    },
    head: [
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
      ['link', { rel: 'icon', type: 'image/,png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
      ['link', { rel: 'icon', type: 'image/,png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
      ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
      ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' }],
      ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
      ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
      ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { property: 'og:image', content: '/cover.png' }],
      ['meta', { property: 'twitter:image:src', content: 'https://vue-community.org/cover.png' }]
    ]
  }
