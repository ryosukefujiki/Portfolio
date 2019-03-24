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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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

