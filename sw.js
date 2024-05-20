/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b28eb61760281a635e19.js"
  },
  {
    "url": "framework-4ce5382688c7c66a6d68.js"
  },
  {
    "url": "app-62118b4d229d5e512ca9.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b5cf345a1d428573c083f42d0bea8487"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-73eb8154f41d356e5f76.js"
  },
  {
    "url": "polyfill-0090b00b5741e99aa84b.js"
  },
  {
    "url": "styles.4a2e0b0ebeda9dbe8fcc.css"
  },
  {
    "url": "styles-29147cbc04bbc833f6a0.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-681488072600b38d1670.js"
  },
  {
    "url": "component---src-pages-404-mdx-d6372686831856e11033.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "1625a5f96647d3b572727a9420747b1e"
  },
  {
    "url": "page-data/sq/d/2719584231.json",
    "revision": "737c520573fb3fe3ab88cd94fd3e7e6c"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e8ce0cdf89865fe4ac5edc0ffb3b31a4"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-517c5243ebd2a401a6ca.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-ae590d87176f4db9cdc7.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "d2f12adeb67aefc187177dfea3fbb2e1"
  },
  {
    "url": "page-data/sq/d/275038021.json",
    "revision": "c9291cd88435dd2cd8200758f5efd8fe"
  },
  {
    "url": "page-data/admin-dashboard/page-data.json",
    "revision": "24f3310b633bb8034ca863aa2f56b819"
  },
  {
    "url": "page-data/algorithm-analyzer/page-data.json",
    "revision": "3e5e8436588f5b0284c46231a93c2e29"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "0d8c097cdff54b5b0cbb944386788152"
  },
  {
    "url": "page-data/bigdata/page-data.json",
    "revision": "06a891e3dca540b4bcf2553e8d5ca889"
  },
  {
    "url": "page-data/block-vote/page-data.json",
    "revision": "8fcf7d0fa5b2c60ad69d15bc368302d1"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "4e09bffe4ad9beb2630c99eaace0df08"
  },
  {
    "url": "page-data/chainreaction/page-data.json",
    "revision": "01a22a252d6467b64e54c0a9c30568b1"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "b376982821cac8e42ae90e745560ce3d"
  },
  {
    "url": "page-data/floyd-visualizer/page-data.json",
    "revision": "af00494da079c04b64bbfb3593e6ba2c"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "6010516e34d5895d61580e17956598ae"
  },
  {
    "url": "component---src-pages-index-jsx-aa19d9d7821bee7735ca.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "00e56ca4862759c03d9d6f40571a1791"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "78688a79c0d95c208be27cadedb75766"
  },
  {
    "url": "page-data/mylocaltask/page-data.json",
    "revision": "5bd90be2c6e213b94cad2ce8a2ca561f"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "d8a3f61af691f21e02cb6cc526cb5ff1"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "612f5175c953bf4ad407f1f8dcfb7641"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "87a4f815ab9f95eab9adb02670c4c8f2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8e32163aca84d2aa5507b57ae82d4c90"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-62118b4d229d5e512ca9.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
