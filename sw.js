const cache_name = "the_button_v1";
const assets = [
    "./",
    "./script.js",
    "./index.html",
    "./style.css"
];

self.addEventListener('install', event => {
    console.log("SW Installed");
    event.waitUntil(
        caches.open(cache_name)
            .then(cache => {
                console.log("SW Caching files");
                return cache.addAll(assets);
            })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      }),
    );
  });
  