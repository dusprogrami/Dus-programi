const CACHE = 'dus-plan-v2';
const FILES = [
  '/Dus-programi/',
  '/Dus-programi/index.html',
  '/Dus-programi/manifest.json',
  '/Dus-programi/icons/icon-192.png',
  '/Dus-programi/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
