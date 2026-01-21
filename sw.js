// sw.js
const CACHE_NAME = 'nebulaudio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', // o el nombre de tu CSS
  '/library.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  // Opcional: sirve contenido offline básico
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});