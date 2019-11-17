module.exports = {
  plugins: ['@vuepress/blog'],
  locales: {
    '/': {
      lang: 'ja' // サイトの言語
    }
  },
  // markdown: {
  //   //mdファイル内のURLを自動でリンク化
  //   extendMarkdown: md => {
  //     md.set({ linkify: true });
  //   }
  // },
  //base:
  title: 'Front Stock', // サイトのタイトル
  description: 'Webフロントエンド周りについて学んだことや考えのストック', // サイトの説明
  head: [
    // head内に記載するタグ（サイト全体）
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'og:url', content: 'https://front-stock.com/' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Front Stock' }],
    [
      'meta',
      {
        name: 'og:description',
        content: 'Webフロントエンド周りについて学んだことや考えのストック'
      }
    ],
    ['meta', { name: 'og:image', content: '/assets/img/og.png' }][
      ('meta', { name: 'twitter:card', content: 'summary' })
  ],

  themeConfig: {
    // サイトのテーマに関する設定
    logo: '/assets/svg/logo.svg',
    nav: [
      // ナビメニューに表示する項目
      { text: 'Home ', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Posts',
        items: [
          { text: '全記事一覧', link: '/posts/' },
          { text: 'HTML', link: '/posts/html/' },
          { text: 'CSS', link: '/posts/css/' },
          { text: 'JavaScript', link: '/posts/js/' },
          { text: 'イベント', link: '/posts/events/' }
        ]
      },
      { text: 'Twitter', link: 'https://twitter.com/kyswm' },
      { text: 'GitHub', link: 'https://github.com/kyswm' },
      { text: 'Instagram', link: 'https://www.instagram.com/kysw.m' }
    ],
    sidebar: 'auto',
    sidebarDepth: 2 // サイドバーに表示する階層
  }
};
