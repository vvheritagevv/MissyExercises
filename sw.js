const CACHE="hep-cache-v1";
const FILES=["./","index.html","manifest.webmanifest","sw.js","icons/icon-192.png","icons/icon-512.png"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
