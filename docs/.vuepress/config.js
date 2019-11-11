module.exports = {
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  //base: '/foo/',
  title: 'Front Stock for better practice', // サイトのタイトル
  description:
    'Web制作,フロントエンドについて学んだことや考えをアウトプットするためのサイトです。', // サイトの説明明
  head: [
    // head内に記載するタグ(サイト全体)
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'og:url', content: 'https://example.com/' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Front Stock' }],
    [
      'meta',
      { name: 'og:description', content: 'VuePress で作成したサンプルサイト' }
    ],
    ['meta', { name: 'og:image', content: '/og.png' }]
  ],
  themeConfig: {
    // サイトのテーマに関する設定、詳細は後述
    logo: '/assets/img/logo.png',
    nav: [
      // ナビメニューに表示する項目
      { text: 'Home', link: '/' },
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'JS', link: '/js/' }
    ],
    sidebar: [
      // サイドバーに表示する項目
      '/html/',
      '/css/',
      '/js/'
    ],
    sidebarDepth: 2,
    sidebar: 'auto'
  }
};
