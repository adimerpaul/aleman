if(!self.define){let e,c={};const a=(a,n)=>(a=new URL(a+".js",n).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(c[s])return;let f={};const o=e=>a(e,s),r={module:{uri:s},exports:f,require:o};c[s]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),f)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"aleman"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.a8398fac.js",revision:"aa550a2f37497f02e55d1d949b44ad5f"},{url:"assets/ErrorNotFound.ef016b81.js",revision:"a5ae510f62dc1313a185d75a30b1507b"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/html2canvas.esm.0eae2bf4.js",revision:"57e52999e4fe32560f4d4f7cb3c65b94"},{url:"assets/index.eaca45a6.js",revision:"ea6a1bc0d72b82ab886bd29c3123a1e1"},{url:"assets/index.es.8163088f.js",revision:"e30ce7f0d0915848cfab696ec5b6af20"},{url:"assets/index.fd95bf81.css",revision:"4656cda4e199652293c27704060a82e6"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/OpenSans-VariableFont_wdth,wght.44e07bd4.ttf",revision:"6609170d0247946f1cbfb8e9116c909a"},{url:"assets/purify.es.de52fd0e.js",revision:"75f7266fd58e409296312932bdf0c0b5"},{url:"favicon.ico",revision:"faf3efcc954c2271fe8233ee4271516b"},{url:"fondo.jpg",revision:"5400e46474cfd7ccefe63071d0568f7b"},{url:"fondo5.png",revision:"e2cf19c5f17a3f1272bf10e25eeab191"},{url:"icons/apple-icon-120x120.png",revision:"3d17850c65eab88be88e16c12408a1d4"},{url:"icons/apple-icon-152x152.png",revision:"49d1953c32cd70bd4efce81f2be9cdbb"},{url:"icons/apple-icon-167x167.png",revision:"e6bca8cb66e4056760ec37a63d803ebf"},{url:"icons/apple-icon-180x180.png",revision:"ddf830b6658765f5244dc1d4a795cb2d"},{url:"icons/apple-launch-1125x2436.png",revision:"c6e08b92f9496b5ee896873d5ddb63da"},{url:"icons/apple-launch-1170x2532.png",revision:"95048fab2211f1cf2da77c9f311b9717"},{url:"icons/apple-launch-1242x2208.png",revision:"93031e14072af4a818de8f682d412459"},{url:"icons/apple-launch-1242x2688.png",revision:"e2f545659e983259e406f1ab36125dbc"},{url:"icons/apple-launch-1284x2778.png",revision:"3b61ed88537168aa9aa403350180f36a"},{url:"icons/apple-launch-1536x2048.png",revision:"8c92b31925e6edc62d5af42693d60200"},{url:"icons/apple-launch-1620x2160.png",revision:"17d0c48d0c13bd2f99650273869e7c0e"},{url:"icons/apple-launch-1668x2224.png",revision:"3fecd09a3c1c6808ec39c4fbe4d3e09b"},{url:"icons/apple-launch-1668x2388.png",revision:"a772afd8a1a358544d8ce789e178f595"},{url:"icons/apple-launch-2048x2732.png",revision:"a300e58dc403da7ec4274f98a8a597ed"},{url:"icons/apple-launch-750x1334.png",revision:"953e5a5a9ea44d5416ef9ec0baf1ba06"},{url:"icons/apple-launch-828x1792.png",revision:"daafa5babc68b67482a034ebfb03847e"},{url:"icons/favicon-128x128.png",revision:"9e60d1b655f4150642eaa26f1ada222e"},{url:"icons/favicon-16x16.png",revision:"c217e6ff4a1f86a4989454c7912c4d71"},{url:"icons/favicon-32x32.png",revision:"d0eae3847b7b34affdd9ed23fc3b0493"},{url:"icons/favicon-96x96.png",revision:"2be33570a0257978e3c86e0f86a8d3c2"},{url:"icons/icon-128x128.png",revision:"9e60d1b655f4150642eaa26f1ada222e"},{url:"icons/icon-192x192.png",revision:"be36152ee8205ac1d659af104f630b18"},{url:"icons/icon-256x256.png",revision:"d7a3634259b32bb64d349f3b5481b0bf"},{url:"icons/icon-384x384.png",revision:"468a04db117811eb27ec6f35e6fc4b91"},{url:"icons/icon-512x512.png",revision:"03de7b938f251abf8c3e39b614cdfdf9"},{url:"icons/ms-icon-144x144.png",revision:"6c3d1a93d2648ccc8ead2dd62162592f"},{url:"icons/safari-pinned-tab.svg",revision:"95d7d883c03db86e2597b525efdba1e9"},{url:"index.html",revision:"5874973996def55e58c61672450e73fb"},{url:"logo.png",revision:"b0b0c5f511010329822df771edfbc8a3"},{url:"logo2.png",revision:"366f222c17a4864764af73bcfb842b22"},{url:"manifest.json",revision:"5c0412eeb4f4946af98a63fb29354426"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
