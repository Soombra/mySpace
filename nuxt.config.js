const pkg = require ('./package')
const webpack = require ('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '康哥的个人博客，专注于前端技术沉淀，分享户外游记，记录生活点滴'},
      {hid: 'keywords', name: 'keywords', content: '前端，户外，川藏线'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: '/js/flex.js'},
      {src: '/js/snow1.js'},
      {src: '/js/echarts.min.js'},
      {src: '/js/china.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/base.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/element-ui'],

  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-px2rem' : {remUnit: 16}
        }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      plugins: [
        new webpack.ProvidePlugin ({
          '$': 'jquery',
          jQuery: "jquery"
        })
      ]
    }
  }

}
