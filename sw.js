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
    "url": "webpack-runtime-94638417b5bf989906a3.js"
  },
  {
    "url": "framework-8de36d3fd07627b19105.js"
  },
  {
    "url": "app-1d5e1956297590e486f0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2e5f4f3ec0303cd114215d5bcdae1741"
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
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-926dfef8bb10e6a254c4.js"
  },
  {
    "url": "eaed999c7eb065486e6ce61a2bc53a5cd506c14c-3429a9d1fa082dfa9837.js"
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
    "revision": "54f3cf8a8d0603fdd84fcdb1703d4098"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-ed5b54c25c49792bd95e.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-167c88be5bc2a527c406.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "d290443370c9a834e93f4d7d65ce69f1"
  },
  {
    "url": "page-data/sq/d/275038021.json",
    "revision": "7937bb3b5b1f48ffc60fa2b8e88a739e"
  },
  {
    "url": "page-data/admin-dashboard/page-data.json",
    "revision": "fd9d4a465ff19d6dde9e685020d05c41"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "dc6273efeaf2b2a1e17af18ecb48afa7"
  },
  {
    "url": "page-data/bigdata/page-data.json",
    "revision": "16b91139059edd983376dd11a430b11a"
  },
  {
    "url": "page-data/block-vote/page-data.json",
    "revision": "f116144e9ff1ed2323cbb90052e1b0dc"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "f94d58a56a168d030f29af59800ad78b"
  },
  {
    "url": "page-data/chainreaction/page-data.json",
    "revision": "1956d6710b3c2fcf840e5e37f61ad179"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "9fb6cb5512f2a054cd63bae2b8e73244"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "040ce6a31bb1d83aeee7c5856d815c9a"
  },
  {
    "url": "component---src-pages-index-jsx-6bd2e732fd84310a2ccf.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "8335fe6787fa2128da49a9f18f2acf4b"
  },
  {
    "url": "page-data/sq/d/1568960894.json",
    "revision": "ccc731a4dede9ecf652236082791dd71"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "f04168d2584a64a68f5811f761370207"
  },
  {
    "url": "page-data/iot/page-data.json",
    "revision": "2faf447b77f1580be128a777f69994d3"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "5334a515ce99cd185ef4b9106d3605ff"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "45960bf429e87160467e7df5f0374962"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "ee46703ed9a47a4ffe58da01ce5499bb"
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
