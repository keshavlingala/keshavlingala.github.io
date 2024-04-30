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
    "url": "webpack-runtime-a61c1509c6f23e5205d6.js"
  },
  {
    "url": "framework-4ce5382688c7c66a6d68.js"
  },
  {
    "url": "app-ac2cd15523934e6d0383.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "adfa437a518b0ba2d8ff171f72de3eea"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-73eb8154f41d356e5f76.js"
  },
  {
    "url": "polyfill-9217de6ac40c524f2054.js"
  },
  {
    "url": "styles.dc8e10d4064b8725cb0a.css"
  },
  {
    "url": "styles-29147cbc04bbc833f6a0.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-d774dcea6512d95f6622.js"
  },
  {
    "url": "component---src-pages-404-mdx-7867cff084c8629a5964.js"
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
    "revision": "84ff803d6d4158273e966917b0bbbf29"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-ed5b54c25c49792bd95e.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-e80935b7740af44b668f.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "d290443370c9a834e93f4d7d65ce69f1"
  },
  {
    "url": "page-data/sq/d/275038021.json",
    "revision": "c9291cd88435dd2cd8200758f5efd8fe"
  },
  {
    "url": "page-data/admin-dashboard/page-data.json",
    "revision": "fd9d4a465ff19d6dde9e685020d05c41"
  },
  {
    "url": "page-data/algorithm-analyzer/page-data.json",
    "revision": "432439dbed28c27565915fcf46ff2c24"
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
    "revision": "e9e4a56bd17de9a0439f295a11c09a2d"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "9fb6cb5512f2a054cd63bae2b8e73244"
  },
  {
    "url": "page-data/floyd-visualizer/page-data.json",
    "revision": "df3106c1243307f98f3c729cfc42e610"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "040ce6a31bb1d83aeee7c5856d815c9a"
  },
  {
    "url": "component---src-pages-index-jsx-7d28b0ccf3e3d3763c78.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "00e56ca4862759c03d9d6f40571a1791"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "fb504ae3bbb2dc6c97a298c071b6d477"
  },
  {
    "url": "page-data/mylocaltask/page-data.json",
    "revision": "e2cd0babfa208580e8e607b28eb62707"
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
  if (!resources || !(await caches.match(`/app-ac2cd15523934e6d0383.js`))) {
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
