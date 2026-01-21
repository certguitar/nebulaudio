// sw.js - Service Worker para Nebulaudio (PWA mínimo funcional)
const CACHE_NAME = 'nebulaudio-v1';
const urlsToCache = [
  './',
  './index.html',
  './estatutos-nebulaudio.html',
  './socios.html',
  './styles.css', // si usas CSS externo (opcional)
  './imagen/logo-nebulaudio.png',
  './imagen/universo-nebulaudio.png'
];

self.addEventListener('install', (event) => {
  // Salta la espera para activar inmediatamente
  self.skipWaiting();
  // Opcional: precachear recursos esenciales
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch(err => console.warn('SW: Algunos recursos no se pudieron cachear', err))
  );
});

self.addEventListener('activate', (event) => {
  // Toma control inmediato de las páginas abiertas
  event.waitUntil(clients.claim());
});

// Opcional: sirve contenido offline básico (solo HTML/JSON/CSS pequeños)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Solo caché para recursos del mismo origen y rutas simples
  if (url.origin === self.location.origin && !url.pathname.includes('.')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});
