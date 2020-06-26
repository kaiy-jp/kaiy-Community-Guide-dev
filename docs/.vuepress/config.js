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
      logo: '/logo_pin.png',
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
              title: 'ヘルプ',
              collapsable: false,
              children: [
                '/guide/help/how-to-enter-the-floor.md',
                '/guide/help/how-to-invite-others.md',
                '/guide/help/how-to-leave-floor.md',
                '/guide/help/how-to-make-a-call.md',
                '/guide/help/how-to-play-youtube-videos-on-kaiy-co-floor.md',
                '/guide/help/how-to-start-the-floor-administration-menu.md',
                '/guide/help/concept-of-bandwidth-during-video-calls.md'
              ]
            },
            {
              title: 'リリースノート',
              collapsable: false,
              children: [
                '/guide/Release-note/Ver-0-1.md',
                '/guide/Release-note/Ver-0-2.md',
                '/guide/Release-note/Ver-0-3.md',
                '/guide/Release-note/Ver-0-4.md',
                '/guide/Release-note/Ver-0-5.md'
              ]
            },
            {
              title: "利用規約",
              collapsable: false,
              children: [
                '/guide/legal/terms-of-service.md'
              ]
            },
          ]
        }
      }
    },
    head: [
      ['link', { rel: 'favicon', type: 'image/png', sizes: '48×48', href: '/favicons/favicon.png'}]
    ]
  }
  