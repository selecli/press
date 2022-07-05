module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  footer: 'MIT Licensed | Copyright © 2018-present Evan You',
  markdown: {
    lineNumbers: true,
  },
  // locales: {
  //   '/': {
  //     lang: 'a',
  //     title: 'VuePress',
  //     description: 'Vue-powered Static Site Generator',
  //   },
  //   '/zh/': {
  //     lang: 'b',
  //     title: '中文标题',
  //     description: 'Vue 驱动的静态网站生成器',
  //   },
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': './components',
      },
    },
  },
  themeConfig: {
    logo: '/assets/status.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/catalog' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          {
            text: 'group1',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' },
            ],
          },
          {
            text: 'group2',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' },
            ],
          },
        ],
      },
    ],
    // catalogUrl: '/catalog',
    // sidebar: {
    //   '/foo/': ['', 'one', 'two'],
    //   '/bar/': ['', 'three', 'four'],
    //   '/': ['', 'contact', 'about'],
    // },
  },
  // theme: 'ting',
}
