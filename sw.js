const C='pocketmoney-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','config.js','manifest.webmanifest','icon-192.png'])).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>clients.claim())
));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.hostname.endsWith('supabase.co'))return;
  // Network first, and skip the browser's own HTTP cache for our files so new releases show up straight away.
  const opts=u.origin===location.origin?{cache:'no-store'}:undefined;
  e.respondWith(fetch(e.request,opts).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp)).catch(()=>{});return r}).catch(()=>caches.match(e.request)));
});
