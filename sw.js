/* go2no v87z.1 — opravuje obnovení lokálního obrazového balíku v Android PWA. */
const APP_CACHE='go2no-app-v88-1';
const ASSET_CACHE='go2no-assets-v87z-2';
const APP_FILES=['./','./index.html','./go2no.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
const ASSET_FILE='./go2no-assets-v86.js';
self.addEventListener('install',event=>{
  event.waitUntil(Promise.all([
    caches.open(APP_CACHE).then(cache=>cache.addAll(APP_FILES)),
    caches.open(ASSET_CACHE).then(async cache=>{
      if(!(await cache.match(ASSET_FILE))) await cache.add(ASSET_FILE);
    })
  ]).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(key=>(key.startsWith('go2no-app-')&&key!==APP_CACHE)||(key.startsWith('go2no-assets-')&&key!==ASSET_CACHE)).map(key=>caches.delete(key))
  )).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  if(url.pathname.endsWith('/go2no-assets-v86.js')){
    event.respondWith(caches.open(ASSET_CACHE).then(cache=>
      cache.match(event.request,{ignoreSearch:true}).then(hit=>hit||fetch(event.request).then(response=>{
        if(response&&response.ok) cache.put(event.request,response.clone());
        return response;
      }))
    ));
    return;
  }
  const isPage=/\/(?:index|go2no)\.html$/.test(url.pathname)||url.pathname.endsWith('/');
  if(isPage){
    event.respondWith(fetch(event.request).then(response=>{
      const copy=response.clone();
      caches.open(APP_CACHE).then(cache=>cache.put(event.request,copy));
      return response;
    }).catch(()=>caches.match(event.request,{ignoreSearch:true}).then(hit=>hit||caches.match('./go2no.html'))));
    return;
  }
  event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(hit=>hit||fetch(event.request).then(response=>{
    if(response&&response.ok)caches.open(APP_CACHE).then(cache=>cache.put(event.request,response.clone()));
    return response;
  })));
});
