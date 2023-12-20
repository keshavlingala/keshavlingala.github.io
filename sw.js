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
    "url": "webpack-runtime-1fc7f902f07455c383b5.js"
  },
  {
    "url": "framework-8de36d3fd07627b19105.js"
  },
  {
    "url": "app-8e777d99ea1c914502f5.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "012f2cf5f5eaf56a693fb5b3e2c48117"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d949a7cd525de9463f1c.js"
  },
  {
    "url": "polyfill-1fa064a2ee975e391f8e.js"
  },
  {
    "url": "styles.b1d8f31d5f9c5290c8be.css"
  },
  {
    "url": "styles-29147cbc04bbc833f6a0.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-8310edcc482c4b71f8fb.js"
  },
  {
    "url": "eaed999c7eb065486e6ce61a2bc53a5cd506c14c-57a3744c8d512978a92a.js"
  },
  {
    "url": "component---src-pages-404-mdx-38e9fd788329085757a1.js"
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
    "revision": "d35922e0fb15013d8514b49a533a894e"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-4547f328b5f3c1da3875.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-64916f116d09ecf1ddc8.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "7aacc9d01c2c15f9009c48bced29696d"
  },
  {
    "url": "page-data/sq/d/3869525139.json",
    "revision": "4c1aae91e9b98acec6a20dae772d88cc"
  },
  {
    "url": "page-data/admin-dashboard/page-data.json",
    "revision": "8f3f604e2d93ac7db7103f231d9d799c"
  },
  {
    "url": "page-data/algorithm-analyzer/page-data.json",
    "revision": "bcef65158564cbd60c8ed63371c4b682"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "676d14eb6c7e20d2e316d618637c2090"
  },
  {
    "url": "page-data/bigdata/page-data.json",
    "revision": "1ad7087fbf6c2089ce1724dc88e760c6"
  },
  {
    "url": "page-data/block-vote/page-data.json",
    "revision": "75be05ac560fe7cdae6caf8869f73f05"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "a783e5832da307f94613cd9547951e3d"
  },
  {
    "url": "page-data/chainreaction/page-data.json",
    "revision": "f8e05683552f2f4640dba96490872b4e"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "c08bb15c2249493fa541e88285bb75f1"
  },
  {
    "url": "page-data/floyd-visualizer/page-data.json",
    "revision": "e88afe73a284a4e5960e3c8ad9b1e940"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "d2b87ce1d830dba53c307431e0d34c85"
  },
  {
    "url": "component---src-pages-index-jsx-b08e04d9c6dc75da6859.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1eaf1b9e4a7e06445e020ad95ee06b65"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "479074e50ab023b930c17ade2b40b2b7"
  },
  {
    "url": "page-data/iot/page-data.json",
    "revision": "dd81a57d2e1185b7a9dfeba6b673d601"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "4392bc5073d3bef86c57769e806ff5bf"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "7b0a6fe571f2fa688a67b86a679da867"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "5728bdee110576f72f5301d6a97de78a"
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
  if (!resources || !(await caches.match(`/app-8e777d99ea1c914502f5.js`))) {
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
