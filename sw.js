const CACHE='go2norway-v34';
const ASSETS=['./','./index.html?v=34','./manifest.webmanifest','./icon-192.png','./icon-512.png','./maskable-icon-512.png','./app-icon-original.png','./Go2Norway_v34_kontakty_sirka_mapy.html?v=34'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return; e.respondWith(fetch(e.request).then(r=>{const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html?v=34'))))});
