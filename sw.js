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
    "url": "webpack-runtime-5357e227d1cc824ca276.js"
  },
  {
    "url": "framework-de237a875aa45b276a9d.js"
  },
  {
    "url": "app-427381d5f84ca43d7601.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1a2e601cc9dcb1f71fec534b19cc0ded"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ad6431e4664bcf916d19.js"
  },
  {
    "url": "polyfill-4c9e5ca557f297a65cac.js"
  },
  {
    "url": "styles.dc8e10d4064b8725cb0a.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-e056d70c170aac366b5b.js"
  },
  {
    "url": "component---src-pages-404-mdx-7841088b275de5fef4f8.js"
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
    "revision": "237608f0006f1b7ff6eec4ad695d875a"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-2e0478d35e1a65971e35.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-f23cac75a1f3ca2263ca.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "690d3d2f86f6e995e1d34a295b3502f4"
  },
  {
    "url": "page-data/sq/d/2878307606.json",
    "revision": "3053852dd0587de6669d55d249d94490"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "4f14ba39a2294b2117d3b9f058180e8d"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "b4d7be55345a23090f35c18de978dfd1"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "20b94a7e537b2cf261d988d8d6e7ddf6"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "54380f8df4aa4c8d94ac0d22df5d1625"
  },
  {
    "url": "component---src-pages-index-jsx-bd73c65007fa54f60791.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ded20c865f29ea5aabf93ee0712734b"
  },
  {
    "url": "page-data/sq/d/3250122160.json",
    "revision": "c3f7ad38c92280c223def7bd9d4414fb"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "4ea981d0768cbe3fa57f626b1f0e143f"
  },
  {
    "url": "page-data/iot/page-data.json",
    "revision": "88516d0f6fc21881ef4662dac1248a96"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "e0c19e3eafe68ed9f2011e86e4ca55af"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "ae18f9a86980c2b45d2b27c210979fd9"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "d9175e0cd21487dcc2aea65a3578e228"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8e32163aca84d2aa5507b57ae82d4c90"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-427381d5f84ca43d7601.js`))) {
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
