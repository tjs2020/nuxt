import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _847e9264 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _ee4d6cfa = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _daefa176 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _2b3f7af6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _1a2fc272 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _9c1c45de = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _5daaf45c = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _847e9264,
    children: [{
      path: "",
      component: _ee4d6cfa,
      name: "home"
    }, {
      path: "/login",
      component: _daefa176,
      name: "login"
    }, {
      path: "/register",
      component: _daefa176,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2b3f7af6,
      name: "profile"
    }, {
      path: "/settings",
      component: _1a2fc272,
      name: "settings"
    }, {
      path: "/editor",
      component: _9c1c45de,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _5daaf45c,
      name: "article"
    }]
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
