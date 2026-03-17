const CACHE_NAME = 'bpi-cache-v1';

// Install Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetching (Wajib ada supaya syarat PWA terpenuhi)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
