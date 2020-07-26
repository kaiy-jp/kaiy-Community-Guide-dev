const autometaOptions = {
  image: false,
  site: {
    name: 'kaiy Community Guide',
  },
}

module.exports = {
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'kaiy Community Guide',
      description: 'The community guide to kaiy',
    },
  },
  // serviceWorker: true,
  themeConfig: {
    algolia: {
      apiKey: '8c789b5d0ee680a4a383673877be347d',
      indexName: 'kaiy-community',
    },
    logo: '/k_gray.svg',
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
            link: '/guide/',
          },
        ],
        sidebar: [
          '/',
          {
            title: 'リリースノート',
            collapsable: true,
            children: ['/guide/release-note/release-note.md'],
          },
          {
            title: 'Get Started',
            collapsable: true,
            children: [
              '/guide/get-started/what-is-kaiy.md',
              "/guide/get-started/kaiy's-vision.m",
              '/guide/get-started/kaiy-overview.md',
            ],
          },
          {
            title: 'よくあるご質問（FAQ)',
            collapsable: true,
            children: [
              '/guide/faq/faq.md',                                                              
             ],
          },
          {
            title: 'User Guide',
            collapsable: true,
            children: ['/guide/user-guide/user-guide.md'],
          },
          {
            title: "Developer's Guide",
            collapsable: true,
            children: [
              '/guide/developers-guide/developers-tutorial.md',
              '/guide/developers-guide/developers-debug.md',
              '/guide/developers-guide/developers-protocol.md',                                                                 
              ],
          },
          {
            title: '利用規約',
            collapsable: true,
            children: ['/guide/legal/legal.md'],
          },
          {
            title: '利用ライセンス',
            collapsable: true,
            children: ['/guide/licence/licence.md'],
          },
        ],
      },
    },
  },
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/,png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/,png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    [
      'meta',
      { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
    ],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:image', content: '/cover.png' }],
    [
      'meta',
      {
        property: 'twitter:image:src',
        content: 'https://docs.kaiy.co/k_gray.svg',
      },
    ],
  ],
}
