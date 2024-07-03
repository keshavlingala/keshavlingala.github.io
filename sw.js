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
    "url": "webpack-runtime-2f73a81c531216ebd148.js"
  },
  {
    "url": "framework-4ce5382688c7c66a6d68.js"
  },
  {
    "url": "app-fcd3347e245f1256b73c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ab595956e608af15bd348c25a083dcbe"
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
    "url": "component---src-pages-404-mdx-08904feee03e780686f3.js"
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
    "revision": "90d77a8a4e511fff6095113cb3a2a7db"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-517c5243ebd2a401a6ca.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-ec36c6e4705893c22867.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "93c3d4c0f5f1d7d49f5f5f40d0fd87d4"
  },
  {
    "url": "page-data/sq/d/275038021.json",
    "revision": "c9291cd88435dd2cd8200758f5efd8fe"
  },
  {
    "url": "page-data/admin-dashboard/page-data.json",
    "revision": "ae8afbe2d647df6db7b4bee9dfac00f5"
  },
  {
    "url": "page-data/algorithm-analyzer/page-data.json",
    "revision": "b0a950dcc1d0130c9cdc6f7f0994740d"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "c2927428c9bb8383f2e19680c6f23248"
  },
  {
    "url": "page-data/bigdata/page-data.json",
    "revision": "d07f64481583e6111b722b65c6b70d82"
  },
  {
    "url": "page-data/block-vote/page-data.json",
    "revision": "17b0ac5e247c2dc7c90d83365a2ddfc2"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "1f904efa84e46461e942191aea60f3a8"
  },
  {
    "url": "page-data/chainreaction/page-data.json",
    "revision": "21df06bef0ee0bc99aef9691dcdc945a"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "b1191610bf97adaf50d1d8b0238dfd0c"
  },
  {
    "url": "page-data/floyd-visualizer/page-data.json",
    "revision": "c7706121ee1e3b1a3a70a1a1ef602979"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "d51c08f0ad45f75bad4ad9cb0b94542c"
  },
  {
    "url": "component---src-pages-index-jsx-0a971bdd8d8c72923f86.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "00e56ca4862759c03d9d6f40571a1791"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "82474dd9bdd3880b8fa7e788c66ff243"
  },
  {
    "url": "page-data/mylocaltask/page-data.json",
    "revision": "dcbce28eafd37c73b53d5b2b2f4dc556"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "55282a82ddd7ebc481afb5bc38803ee4"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "07c61ece4acd5032fc92b95b44c43e0a"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "5ca1cde6c32a3ea4552f1389824a1aa1"
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
