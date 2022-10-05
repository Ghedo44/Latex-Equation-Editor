var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/images/hello-icon-152.png',
  '/images/hello-icon-144.png',
  '/favicon.ico',
  '/manifest.json',
  '/katex',
  '/katex/katex.min.css',
  '/katex/katex.min.js',
  '/katex/contrib/auto-render.min.js',
  '/katex/fonts',
  '/katex/fonts/KaTeX_Main-Regular.woff2',
  '/katex/fonts/KaTeX_Math-Italic.woff2',
  '/katex/fonts/KaTeX_Main-Regular.woff',
  '/katex/fonts/KaTeX_Math-Italic.woff',
  '/katex/fonts/KaTeX_Main-Regular.ttf',
  '/katex/fonts/KaTeX_Math-Italic.ttf'
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});


/* Serve cached content when offline  */
self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    }),
  );
});


/* Serve cached content when offline 
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

https://stackoverflow.com/questions/54145735/vue-pwa-not-getting-new-content-after-refresh*/
