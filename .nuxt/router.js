import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c4c0dc0 = () => interopDefault(import('../pages/essay/index.vue' /* webpackChunkName: "pages/essay/index" */))
const _1b71600c = () => interopDefault(import('../pages/front-end/index.vue' /* webpackChunkName: "pages/front-end/index" */))
const _2a1d044d = () => interopDefault(import('../pages/travel/index.vue' /* webpackChunkName: "pages/travel/index" */))
const _e37dfd2c = () => interopDefault(import('../pages/essay/articles/_id.vue' /* webpackChunkName: "pages/essay/articles/_id" */))
const _4308ac20 = () => interopDefault(import('../pages/front-end/articles/_id.vue' /* webpackChunkName: "pages/front-end/articles/_id" */))
const _1e95023d = () => interopDefault(import('../pages/travel/articles/_id.vue' /* webpackChunkName: "pages/travel/articles/_id" */))
const _0a84a6d2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/essay",
    component: _4c4c0dc0,
    name: "essay"
  }, {
    path: "/front-end",
    component: _1b71600c,
    name: "front-end"
  }, {
    path: "/travel",
    component: _2a1d044d,
    name: "travel"
  }, {
    path: "/essay/articles/:id?",
    component: _e37dfd2c,
    name: "essay-articles-id"
  }, {
    path: "/front-end/articles/:id",
    component: _4308ac20,
    name: "front-end-articles-id"
  }, {
    path: "/travel/articles/:id?",
    component: _1e95023d,
    name: "travel-articles-id"
  }, {
    path: "/",
    component: _0a84a6d2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
