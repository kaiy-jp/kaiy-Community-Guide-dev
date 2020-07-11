  
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
              collapsable: false,
              children: [
                '/guide/Release-note/release-note.md'
              ]
            },
            {
              title: 'ヘルプ',
              collapsable: false,
              children: [
                '/guide/help/help.md',
              ]
            },
            {
              collapsable: false,
              children: [
                '/guide/webrtc-debug/webrtc-debug.md'
              ]
            },
            {
              collapsable: false,
              children: [
                '/guide/glossary/glossary.md'
              ]
            },
            {
              collapsable: false,
              children: [
                '/guide/legal/legal.md'
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
