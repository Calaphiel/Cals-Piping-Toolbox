self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pipefitter-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
        // add your icons and any other assets if split into files
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
