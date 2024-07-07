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
    "url": "webpack-runtime-9335c3af62a5197bc964.js"
  },
  {
    "url": "framework-4ce5382688c7c66a6d68.js"
  },
  {
    "url": "app-fcd3347e245f1256b73c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "73e711959c9c98eee69e57c366db4d39"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-73eb8154f41d356e5f76.js"
  },
  {
    "url": "polyfill-0090b00b5741e99aa84b.js"
  },
  {
    "url": "styles.cddbd4b8aa9dda3cd8de.css"
  },
  {
    "url": "styles-29147cbc04bbc833f6a0.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-dcf94c8e4ea717383615.js"
  },
  {
    "url": "component---src-pages-404-mdx-02a3f5a4063f0a7dfac0.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "1704da66db2bcc5a1c486be2ad6b2cbf"
  },
  {
    "url": "page-data/sq/d/2719584231.json",
    "revision": "737c520573fb3fe3ab88cd94fd3e7e6c"
  },
  {
    "url": "page-data/sq/d/88970343.json",
    "revision": "4ad62b1b414dbdbdbcb6d955539fb6f7"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5751fd0b751410aba3c245624db8a57b"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "5abd210d1858b23432f67ca237fb0a0c"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-517c5243ebd2a401a6ca.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-802da9c52516f6f5d665.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "aa6cb54005e6e7542faa827c1506dfcd"
  },
  {
    "url": "page-data/sq/d/275038021.json",
    "revision": "c9291cd88435dd2cd8200758f5efd8fe"
  },
  {
    "url": "page-data/admin-dashboard/page-data.json",
    "revision": "056e11d2118371aee6dda1b66000965f"
  },
  {
    "url": "page-data/algorithm-analyzer/page-data.json",
    "revision": "2d5a91afed6693bbda681ef2eb22e546"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "b4f2473e3cf92fb280d13195f66ab6e7"
  },
  {
    "url": "page-data/bigdata/page-data.json",
    "revision": "9e3750c82e77202eae1f1a90aafbb7a2"
  },
  {
    "url": "page-data/block-vote/page-data.json",
    "revision": "c908d4183825c9ebfbf676396339e5c6"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "a0d180ff5efcb4e8405eacc6e58c1484"
  },
  {
    "url": "page-data/chainreaction/page-data.json",
    "revision": "179a9f2234ef4ef121af266944f3e6b1"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "d3e6b13973e8c9e701563eb5dcfd246e"
  },
  {
    "url": "page-data/floyd-visualizer/page-data.json",
    "revision": "3b41cae4d5b4c4ee64eff3f1c25dcc10"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "8b766cb661e66f03c744a64273594198"
  },
  {
    "url": "component---src-pages-index-jsx-9e039fe33fa4f29c6bd8.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "708e1819b6bc77924eca0d75c9674682"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "5eafe7429073e8c4e4e41ab5c4ae26b2"
  },
  {
    "url": "page-data/mylocaltask/page-data.json",
    "revision": "91e6676ab2ce1d36e858842b49a47204"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "4c89d9151555fd9880e9e64487ed67c9"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "7e0c55f54f36cc8ce48dc8e8529d07a1"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "28a04a34bf309e5b3873dffd05a0cb4c"
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
  if (!resources || !(await caches.match(`/app-fcd3347e245f1256b73c.js`))) {
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
