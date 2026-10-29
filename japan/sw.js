/* Offline support: cache the app shell, keep fonts and the last weather forecast. */
const VERSION = "ij-v45";
const SHELL = [
  "./",
  "index.html",
  "styles.css?v=41",
  "data.js?v=41",
  "app.js?v=41",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js",
];

self.addEventListener("install", e => {
  // cache each file separately so one slow or blocked file can't stop the update from installing
  e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Weather + live Disney waits: network first, fall back to the last copy
  if (url.hostname === "api.open-meteo.com" || url.hostname === "api.themeparks.wiki" || url.hostname === "queue-times.com") {
    e.respondWith(
      fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r; })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Our own files (pages, data, code): network first so updates land right away; cache when offline
  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      const nav = req.mode === "navigate";
      try {
        const r = await Promise.race([
          fetch(nav ? req.url : req, { cache: "no-cache", credentials: "same-origin" }),
          new Promise((_, no) => setTimeout(() => no(new Error("slow")), 4000)),
        ]);
        if (r && r.ok) cache.put(nav ? "index.html" : req, r.clone());
        return r;
      } catch {
        return (await cache.match(nav ? "index.html" : req, { ignoreSearch: nav })) || (nav ? cache.match("./") : Response.error());
      }
    })());
    return;
  }

  // Fonts, map tiles, Leaflet, images, exchange rate: serve from cache, refresh in the background
  if (/fonts\.(googleapis|gstatic)\.com$|cdnjs\.cloudflare\.com$|basemaps\.cartocdn\.com$|upload\.wikimedia\.org$|wikipedia\.org$|open\.er-api\.com$/.test(url.hostname)) {
    e.respondWith(
      caches.open(VERSION).then(async cache => {
        const hit = await cache.match(req);
        const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) cache.put(req, r.clone()); return r; }).catch(() => null);
        return hit || (await net) || Response.error();
      })
    );
  }
});

// The 🔄 button asks a waiting update to take over immediately
self.addEventListener("message", e => { if (e.data === "skip") self.skipWaiting(); });
