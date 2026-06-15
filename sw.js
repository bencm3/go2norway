const CACHE = 'go2norway-v30';
const ASSETS = [
  './',
  './index.html',
  './index.html?v=30',
  './Go2Norway_v30_highlights_rich_info.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './maskable-icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(networkResp => {
      const copy = networkResp.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(()=>{});
      return networkResp;
    }).catch(() => caches.match(event.request).then(resp => resp || caches.match('./index.html')))
  );
});
