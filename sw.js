const CACHE='go2no-v43';
const ASSETS=['./','./index.html?v=43','./manifest.webmanifest','./icon-192.png','./icon-512.png','./maskable-icon-512.png','./app-icon-original.png','./go2no_v43.html?v=43'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  if(url.origin!==self.location.origin) return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match('./index.html?v=43')));
    return;
  }
  const assetPaths=new Set(ASSETS.map(a=>new URL(a,self.location.href).pathname));
  if(!assetPaths.has(url.pathname)) return;
  e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));}return r;}).catch(()=>caches.match(e.request)));
});
