const CACHE_NAME = 'busalert-v1';
const ASSETS = [
  '.',
  'index.html',
  'alarm.mp3',
  'https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js',
  'https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});