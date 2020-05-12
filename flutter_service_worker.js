'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b04d0b29d4bac0781fe844e328c5e2ac",
".git/config": "fb78a233f9a1f16bb063673f1b001e4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "d5e1175cd318a279a1f04170227db598",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb2ab598d3936235c40081f183426182",
".git/logs/refs/heads/master": "09de3b6854d7c3e6d00fccdf8f15f983",
".git/logs/refs/remotes/origin/master": "70fce086c48158cb16b9c71db3a64feb",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/4dfd4b4a6d7fac3ddc376061c4f290c1086087": "da24ff0027c84ecc44402504049b9438",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/637ba63746485d56531dc15cea978097474dff": "8a80aa315bbd25e6844021f931d2fe3c",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/30/5cdec34f6842a54234b36fa627dcd81293423a": "5e98e1b4053c1fcabd7f3082d048fd52",
".git/objects/3a/ff5726b75b33bbf94b66557577d1bdee621c58": "a737de19d84f746d036fddbdedaeea6d",
".git/objects/3c/6c0f1652b31de2f1156df4f0d48ce310c35271": "500c5497408490ff55d4bc36684a1463",
".git/objects/57/59827a2cc7fc6be95753d9434615db4a55bf70": "0b43bb3eba0f5bec969f84290cd5e020",
".git/objects/58/be24eb6ed3ef69a9ee5709f1b049bd40024137": "9b433bfe14e54c701e8e450967e91020",
".git/objects/5a/284c037b3f06e2b351af4dab1a8cc124647421": "a083849e98310bb5a33dd36d6591a63f",
".git/objects/5e/6a0afc084ba07e62f9eb95b2fa17b4ba143f3f": "029de0d2e4b2db4cb917c5fa0d5a7e49",
".git/objects/71/4cdc49a187f0c3d541da4a9491be9ca8b026ba": "69e27ca3544a698f9c79f5b9fc596737",
".git/objects/75/017ff639e2d6fab173d947b49d5bfef88fd0b8": "8a8236a98c6dde51bd58a0d0b4925e99",
".git/objects/80/bf1686f38ef3cf70ebec0e9b2d8fedde28d3ce": "7545df17b9ec53f990223f3edaeb09b2",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/42ca3246b06a25487ddc5005994a5148cfa6b6": "f727596e6880cfc99082ed9cfa1d5868",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9f/6543e9525f451c39437f78045995bc55fdc857": "5fe0d07639f3b5c1152f079587fe5033",
".git/objects/b1/3c94bfb374a9db895e874cb642810e52315262": "d361e6d03e0c28998516f7c39b214940",
".git/objects/b3/9349aed6aa8a661016ef3b9fd933102f1238ef": "ee8e5cd44deb8a1a9811eed59fc19015",
".git/objects/b5/3b822d1882b128c1c6efdc4bde31c32da08d44": "b6f956b35f2d68b447034a002a6e271f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/55f4d93fac926004abcb2dccf73cd94cf13d5d": "a8919731702bbb36e4d5ef75c9e6ff3e",
".git/objects/d0/ba0bed28e5f5a0ac5177625bf5f41b76a4a4d1": "259ece6b85e5d5fa3caed021bf9422e4",
".git/objects/d3/558d9d79b043103e552083692c862316673d20": "b079e76201e3eaea8184eeb7170ee7de",
".git/objects/d7/d91b7052f5631ddc02392c2cac0f5455758dd4": "16f6c16eb36e1f45d9b28a459bf09de7",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/de/b878e801aeca48a8556e888fb8dce67e5f48e3": "5f9d3e4eb70fb5bfed28966032724a3e",
".git/objects/e2/11d3c795a918c303a2f467d87ae6a8fe00c9e4": "9cb6de6e292419c988e59ad4867ce365",
".git/objects/ef/8a82d0544f223d7770ff064d0525f9f0f921a4": "9d435d2bb4719f1d314e4e64ae0ca202",
".git/objects/f1/a0670426b6b4453f237acb4a2d0eecdb46b0ef": "8aab33a93ec24b87f0c0688f2db71bcc",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "22e78ac52200daabb56ab47bc2c7519d",
".git/refs/remotes/origin/master": "22e78ac52200daabb56ab47bc2c7519d",
"assets/AssetManifest.json": "5b0fc5a013b37a3a999a9204973144a9",
"assets/assets/404.jpg": "fe769a6f31dceaa23543f507741e0988",
"assets/assets/flutter_web.png": "e15983b61f73c9a9c899fb71fe4121ce",
"assets/assets/Loading2.gif": "3aaadc45f4da67e52850a02aedf68040",
"assets/assets/Loading_2.gif": "5fe4039b11fa6d042519dd1d049901c9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "80f2a2f0c7b46b50f130cbba21364e1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2b37041bddcbd867c5b04d7c2cc187e7",
"/": "2b37041bddcbd867c5b04d7c2cc187e7",
"main.dart.js": "0f85645ebeb1fe523884252fab7360bd",
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
