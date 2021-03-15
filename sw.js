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
    "url": "webpack-runtime-e3f89d8e162af39f6adf.js"
  },
  {
    "url": "framework-b5b229d58c3c710d5429.js"
  },
  {
    "url": "app-05b473d14f2c4a3dffa7.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "27680b35f1cce7f7faf7bf4b09c95826"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "polyfill-905013744daa67b74738.js"
  },
  {
    "url": "styles.6aa3243efee1490af76b.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "0a8091863b01680e96d685047a5274cf82e5ec9e-d4a722ed6f5bf68e35d8.js"
  },
  {
    "url": "component---src-pages-404-mdx-d1bb914cc38269438830.js"
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
    "revision": "16256d07ea84c182f1b13fbb06a5695c"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "086efaeaf24215743066e7b0ee24d63a"
  },
  {
    "url": "626ab95abc79aae436b2012dc69cd0a647fb869d-2051248b551e7ae43018.js"
  },
  {
    "url": "component---src-components-post-layout-jsx-d6311e057dec2bd42182.js"
  },
  {
    "url": "page-data/aakarshan/page-data.json",
    "revision": "b4ca2bc703d518ed53a109d6ac8043f7"
  },
  {
    "url": "page-data/sq/d/2990369020.json",
    "revision": "fe356e0fe7ec062bd4d974c686a8de4f"
  },
  {
    "url": "page-data/angular2-timeline/page-data.json",
    "revision": "6bad3f9c3a4d5ee87c98f468832cd07b"
  },
  {
    "url": "page-data/edithminibot/page-data.json",
    "revision": "356baf76308e0464cf589c12a7d1203b"
  },
  {
    "url": "page-data/havmormovies/page-data.json",
    "revision": "4d33b7bf2bbf9af3ee1fe776de45a5ed"
  },
  {
    "url": "component---src-pages-index-jsx-b77d8eeac897dad135dd.js"
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
    "revision": "bcd6400e9b30aa0fccaa88fd89b04caa"
  },
  {
    "url": "page-data/iot/page-data.json",
    "revision": "e1e9ab820f0f09030f5e9d7cbb30b445"
  },
  {
    "url": "page-data/seeinghome/page-data.json",
    "revision": "f403266e5530884cd8f66db4b2f17275"
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
  if (!resources || !(await caches.match(`/app-05b473d14f2c4a3dffa7.js`))) {
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
