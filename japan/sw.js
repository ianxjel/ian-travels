/* Offline support: cache the app shell, keep fonts and the last weather forecast. */
const VERSION = "ij-v17";
const SHELL = [
  "./",
  "index.html",
  "styles.css?v=17",
  "data.js?v=17",
  "app.js?v=17",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
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

  // Weather: network first, fall back to the last copy
  if (url.hostname === "api.open-meteo.com") {
    e.respondWith(
      fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r; })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Same-origin + Google Fonts: serve from cache, refresh in the background
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$|cdnjs\.cloudflare\.com$|basemaps\.cartocdn\.com$|upload\.wikimedia\.org$|wikipedia\.org$|open\.er-api\.com$/.test(url.hostname)) {
    e.respondWith(
      caches.open(VERSION).then(async cache => {
        const hit = await cache.match(req, { ignoreSearch: url.origin === location.origin && req.mode === "navigate" });
        const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) cache.put(req, r.clone()); return r; }).catch(() => null);
        return hit || (await net) || (req.mode === "navigate" ? cache.match("index.html") : Response.error());
      })
    );
  }
});
