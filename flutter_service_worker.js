'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3851a4674d70719e545e8296e80ac1bf",
"assets/assets/404.jpg": "fe769a6f31dceaa23543f507741e0988",
"assets/assets/Loading2.gif": "3aaadc45f4da67e52850a02aedf68040",
"assets/assets/Loading_2.gif": "5fe4039b11fa6d042519dd1d049901c9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "8e96620d7a208a34aba9f4fb32eea643",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2b37041bddcbd867c5b04d7c2cc187e7",
"/": "2b37041bddcbd867c5b04d7c2cc187e7",
"main.dart.js": "5cd9199eed062d424c21d1576601faf1",
"manifest.json": "f38bfa73e4efd38ef88c2a057d616672"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
