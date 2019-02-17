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
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'},
      {src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'},
      {src: '/js/flex.js'}
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
    '@/assets/css/base.scss',
    'bootstrap/dist/css/bootstrap.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require ('postcss-px2rem') ({
        remUnit: 16
      })
    ],
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
