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
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-29425482-12'
        }
      ],
      [
        'container',
        {
          type: 'contribute',
          before: () => `<div class="tip custom-block">
            <p><strong>This section could use a little bit of love.</strong></p>
            <p>If you're able to, please consider helping the Vue Community by contributing a PR.</p>
            <p>You'll find a link to edit this page at the bottom.</p>`
          ,
          after: '</div>'
        }
      ],
      ['autometa', autometaOptions]
    ],
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
  