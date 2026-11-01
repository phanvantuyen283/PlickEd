const CACHE_NAME = 'plicked-v4';
const urlsToCache = [
  './',
  './admin.html',
  './screen.html',
  './display.html',
  './scanner.html',
  './student.html',
  './manifest-admin.json',
  './manifest-screen.json',
  './manifest-scanner.json',
  './manifest-student.json',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
