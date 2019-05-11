/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b2fd490ea1219baa28bd914f1ad458d7"
  },
  {
    "url": "app.png",
    "revision": "daf2b980da9988091a28e0e300ba604c"
  },
  {
    "url": "assets/css/0.styles.a1803f11.css",
    "revision": "d57bd4134ee2c7e2e82f3ae2a8d65946"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8951ddec.js",
    "revision": "2fc775f3285cb6a0bd39615c47e774c5"
  },
  {
    "url": "assets/js/11.096fd395.js",
    "revision": "9a9cff1260298f77b978cb76a0639e83"
  },
  {
    "url": "assets/js/12.1d9c5b7a.js",
    "revision": "379de78d1ab3e9dc9504795233f5f5fd"
  },
  {
    "url": "assets/js/13.04982187.js",
    "revision": "f3d25f07ec33ea3655d0a3a3418e31d4"
  },
  {
    "url": "assets/js/14.ab18e056.js",
    "revision": "f98b4f47d302057dd72e0870a6c81227"
  },
  {
    "url": "assets/js/15.007e57dd.js",
    "revision": "5ea0890d474d000af881bdf676485cd4"
  },
  {
    "url": "assets/js/2.758407b3.js",
    "revision": "eb6e75c9b6fbe4e96cf456094d02bcb1"
  },
  {
    "url": "assets/js/3.916bc5db.js",
    "revision": "fb163a65da2ae1916a8d77ab5727253d"
  },
  {
    "url": "assets/js/4.56e2bd05.js",
    "revision": "91acf64b133c8328ee6cd22ceb2a80dc"
  },
  {
    "url": "assets/js/5.0589bc8b.js",
    "revision": "c80f99461da2f3d3e19c644008dc6d4c"
  },
  {
    "url": "assets/js/6.ab1b8e7b.js",
    "revision": "3939bf25fe11f1dc24415d7a7212cc46"
  },
  {
    "url": "assets/js/7.738281e2.js",
    "revision": "eb27f4c1411df6686957500cb15f659d"
  },
  {
    "url": "assets/js/8.09cdfc42.js",
    "revision": "f6c78f5270a5816132107f499dc61ef1"
  },
  {
    "url": "assets/js/9.e87a6d40.js",
    "revision": "bd1a85783ccc540dd877ec0df1d903f3"
  },
  {
    "url": "assets/js/app.c097e801.js",
    "revision": "17a5b3837a6e47ed7fe9242d975006f2"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "712e24e7cadde2e64ddb8386bf45ef91"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "d52483264a7a49331c1e8a34788b79ff"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "68a4eb1db9a684a0bcaf674acb1a2d7e"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "85a662f71a4d60719b1cdc9977b71c65"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "76f400fd3d187bfbeb454a8d31324c65"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "fac11982e3a84f8343edc82e3f9b7533"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "84c1596aa0ca60d308f01e4288655de2"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "003a4f323ce077c0eb1c57a769d81b04"
  },
  {
    "url": "icons/hbb/apple-launch-1242x2208.png",
    "revision": "63811de6896615b9a6f77127b2751414"
  },
  {
    "url": "icons/hbb/apple-launch-1536x2048.png",
    "revision": "0f20220907814fe2582bd56855b03a07"
  },
  {
    "url": "icons/hbb/apple-launch-640x1136.png",
    "revision": "78b050616d3b55131a7c2cd4196792a4"
  },
  {
    "url": "icons/hbb/apple-launch-750x1334.png",
    "revision": "f33a4c448368585e5887b8a70e18b803"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "160ca24b75d22ece99e69b13b9bc251d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "114a9280acf551005fb2de5800725c56"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "f260f2e03536b1853e763b97ce78f998"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "428df90a089b949e37694e985ca2ff47"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "da14bbf9df09a0e7aca7af0f1d1abb95"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "93917ce5dda3d75f02bc69d1c24b7faa"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "53eec6536bef9b49242c3873f0c19612"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c7c8c480bec2dfd47b8ce4f1aaf9f275"
  },
  {
    "url": "icons/touch-bar.svg",
    "revision": "c4279f77fbbde00f515a9542868dba4d"
  },
  {
    "url": "index.html",
    "revision": "4b3d9706c59f39af9729d444ef637883"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
self.addEventListener('activate', function (event) {
    send_message_to_all_clients("sw.update");
});
//sw发送信息给页面
function send_message_to_all_clients(msg) {
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            return new Promise(function (resolve, reject) {
                var msg_chan = new MessageChannel();
                msg_chan.port1.onmessage = function (event) {
                    if (event.data.error) {
                        reject(event.data.error);
                    } else {
                        resolve(event.data);
                    }
                };
                client.postMessage(msg, [msg_chan.port2]);
            });
        })
    })
}
workbox.routing.registerRoute(/\/sw-register\.js/,workbox.strategies.networkOnly());
