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
    "url": "webpack-runtime-3fb678bc61c4a84f38e9.js"
  },
  {
    "url": "framework-b5b229d58c3c710d5429.js"
  },
  {
    "url": "app-b44b1efdf3c41d36b0bd.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "05a11da0ae8f63bc8afec784e442fae4"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "polyfill-905013744daa67b74738.js"
  },
  {
    "url": "styles.7962f7c8f2ccb7bc8f71.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-46355ba1ac119880d26c.js"
  },
  {
    "url": "component---src-pages-404-mdx-dd8a95f9525502ca5445.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "1625a5f96647d3b572727a9420747b1e"
  },
  {
    "url": "page-data/sq/d/2719584231.json",
    "revision": "0c7726bdab642be667750287e47d73df"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "28eac4a0e29cd18b8211c529c74771a8"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-3c11b9249131badb48cc.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-dd6f95a0e38465cb1744.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "d7ac1830e3be01c6000ffbcbf7696194"
  },
  {
    "url": "page-data/sq/d/2990369020.json",
    "revision": "fe356e0fe7ec062bd4d974c686a8de4f"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "331b67d291d12f76b81f28cd898a81ce"
  },
  {
    "url": "page-data/bump/page-data.json",
    "revision": "f0e39674b242f35ba486c27d4b9eab96"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "4286d29b798352cf5c8efc27202b588a"
  },
  {
    "url": "page-data/havmor-movies/page-data.json",
    "revision": "03c336206eaee6ecaba1a5d2e8677076"
  },
  {
    "url": "component---src-pages-index-jsx-e72075bd633a18d196b3.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "478d78dbb667011f4ac44bf3ddb70b84"
  },
  {
    "url": "page-data/sq/d/3250122160.json",
    "revision": "717b903800435e71d7d798171e7bac1a"
  },
  {
    "url": "page-data/sq/d/3716579500.json",
    "revision": "407061fd67ce542d52d61c72655df3a2"
  },
  {
    "url": "page-data/iot/page-data.json",
    "revision": "a5d3bf3eee91e26f32402a7ee12f2943"
  },
  {
    "url": "page-data/payment-dbs/page-data.json",
    "revision": "bb9fb977acda7240cb3bfe09198df12b"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "b486e9af8d4d3ecbc53c051fbe48e7ee"
  },
  {
    "url": "page-data/synopsis/page-data.json",
    "revision": "a8d1640d00fc3336e415a22c979eec94"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1bcb3b9b90fb4e8b387cb315380edde8"
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
  if (!resources || !(await caches.match(`/app-b44b1efdf3c41d36b0bd.js`))) {
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
