module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Ryosuke Fujiki Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'keywords', content: 'Ryosuke Fujiki,藤木 良祐,Ryosuke,Fujiki' },
      { property: 'fb:app_id', content: '828074940735241' },
      { property: 'og:description', content: 'Ryosuke Fujiki Portfolio' },
      { property: 'og:image', content: 'https://ryosukefujiki.design/home/ogp.png' },
      { property: 'og:site_name', content: 'Ryosuke Fujiki Portfolio' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@totepo18' },
      { property: 'twitter:description', content: 'Ryosuke Fujiki Portfolio' },
      { property: 'twitter:image', content: 'https://ryosukefujiki.design/home/ogp.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700i'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css'},
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"}
    ]
  },
  css: [
    // プロジェクト内の CSS ファイル
    '@/assets/css/reset.css',
  ],
  /*
  ** Customize the progress bar color
  */
 loading: {
  color: '#d2dadf',
  height: '10px'
},

  plugins: [
    '~/plugins/mixin',
    '~plugins/scroll.js',
    '~/plugins/vue-scrollto.js'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-100786231-2'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

