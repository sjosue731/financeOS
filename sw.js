// FinanceOS — Service Worker
// Versión del caché: actualiza este número si cambias archivos
const CACHE_NAME = 'financeOS-v1';

// Archivos a guardar para uso sin internet
const ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ─── INSTALACIÓN ─────────────────────────────────────────────
// Se ejecuta la primera vez que se abre la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Guardando archivos en caché...');
      return cache.addAll(ASSETS);
    })
  );
  // Activa el nuevo SW sin esperar a que se cierren pestañas anteriores
  self.skipWaiting();
});

// ─── ACTIVACIÓN ──────────────────────────────────────────────
// Limpia cachés viejos cuando se actualiza el SW
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Eliminando caché antiguo:', key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});

// ─── INTERCEPCIÓN DE PETICIONES ───────────────────────────────
// Cache-first: sirve desde caché, si no hay va a red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Guarda en caché las respuestas exitosas
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Si no hay red ni caché, devuelve la página principal
      return caches.match('./index.html');
    })
  );
});
