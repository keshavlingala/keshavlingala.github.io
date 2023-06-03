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
    "url": "webpack-runtime-02f6b015b5ab517ace28.js"
  },
  {
    "url": "framework-8de36d3fd07627b19105.js"
  },
  {
    "url": "app-1d5e1956297590e486f0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b810bf6daf074a7b916ee2ef5368380d"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d949a7cd525de9463f1c.js"
  },
  {
    "url": "polyfill-c52e951fbd5d4c567e58.js"
  },
  {
    "url": "styles.dc8e10d4064b8725cb0a.css"
  },
  {
    "url": "styles-29147cbc04bbc833f6a0.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-c481093177e6f742f270.js"
  },
  {
    "url": "eaed999c7eb065486e6ce61a2bc53a5cd506c14c-e697f025bf646850b5ee.js"
  },
  {
    "url": "component---src-pages-404-mdx-eb27598bcdd9b3db990f.js"
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
    "revision": "750335451a4ad563225ce27c03aafc65"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-10572931c691aea2aa7d.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-167c88be5bc2a527c406.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "1c39a8c53ea32d86f745205e6d77a1cf"
  },
  {
    "url": "page-data/sq/d/2878307606.json",
    "revision": "4cb749beb31b59ec33f3b25903e5f68f"
  },
  {
    "url": "page-data/admin-dashboard/page-data.json",
    "revision": "20545f4cb1ac1bdfc96d06243cef12a5"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "99ce82e4048e7720ddf266e425cd6a32"
  },
  {
    "url": "page-data/bigdata/page-data.json",
    "revision": "1843fdb2176a86eb0824d36fec3272a2"
  },
  {
    "url": "page-data/block-vote/page-data.json",
    "revision": "f66d109d8747a6ac6943417d9e4d100c"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "8056d343b4a61031652e05e935962494"
  },
  {
    "url": "page-data/chainreaction/page-data.json",
    "revision": "2e25d18af7d3c779c380a3260f51ebb6"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "0bcc882fcd31080f4a9fa568fad1442b"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "977b1a8965b860f7c8b623eff8cc296d"
  },
  {
    "url": "component---src-pages-index-jsx-c61eb7c2b818b8e5cb65.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e22185bed55bf6989c92e5fba05c0854"
  },
  {
    "url": "page-data/sq/d/1568960894.json",
    "revision": "ccc731a4dede9ecf652236082791dd71"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "d582dffe9797ccfc54f4cff41b452732"
  },
  {
    "url": "page-data/iot/page-data.json",
    "revision": "b1f07daa4ea15ca58394ea9fbbd60f75"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "37ea5ce9d8e76e2f8a3e189fa9d32f6b"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "0fe649f60770a78080fd11ac427fee91"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "63ff8bc37ec99613984d51a4ff944015"
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
  if (!resources || !(await caches.match(`/app-1d5e1956297590e486f0.js`))) {
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
