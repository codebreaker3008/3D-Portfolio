if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>n(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/advaith-fb137242.jpg",revision:null},{url:"assets/azure-237eb77e.png",revision:null},{url:"assets/backend-5abcbfdf.png",revision:null},{url:"assets/carrent-c9e19944.png",revision:null},{url:"assets/close-b7566719.svg",revision:null},{url:"assets/creator-459934d8.png",revision:null},{url:"assets/css-84b11ed2.png",revision:null},{url:"assets/docker-602a695a.png",revision:null},{url:"assets/figma-fac0db2d.png",revision:null},{url:"assets/herobg-c55bc0f1.png",revision:null},{url:"assets/html-839d7966.png",revision:null},{url:"assets/index-545f4a03.css",revision:null},{url:"assets/index-dd5345fc.js",revision:null},{url:"assets/intellij-bebd63f1.png",revision:null},{url:"assets/jobit-3088733b.png",revision:null},{url:"assets/logo-a47ba9d5.svg",revision:null},{url:"assets/menu-03d0a6b3.svg",revision:null},{url:"assets/meta-e386841a.png",revision:null},{url:"assets/mobile-2bd114ee.png",revision:null},{url:"assets/mongodb-54000b2b.png",revision:null},{url:"assets/mysql-6142feab.png",revision:null},{url:"assets/nodejs-2361cd61.png",revision:null},{url:"assets/ntfy-a3fdc676.png",revision:null},{url:"assets/parakh-5ac0b52c.jpg",revision:null},{url:"assets/pgsql-366931b7.png",revision:null},{url:"assets/postman-7d8615c8.png",revision:null},{url:"assets/python-314ea70d.png",revision:null},{url:"assets/rcds-4a411490.jpg",revision:null},{url:"assets/redux-c2917f9f.png",revision:null},{url:"assets/shopify-c0fdbc80.png",revision:null},{url:"assets/springboot-8fc0a34b.png",revision:null},{url:"assets/springshell-2f0b2a3d.png",revision:null},{url:"assets/starbucks-af2a76fc.png",revision:null},{url:"assets/swagger-b24614dc.svg",revision:null},{url:"assets/tailwind-6ece120d.png",revision:null},{url:"assets/threejs-fe160e71.svg",revision:null},{url:"assets/tripguide-725f077d.png",revision:null},{url:"assets/vika-773a4415.jpg",revision:null},{url:"assets/web-a72daeb5.png",revision:null},{url:"index.html",revision:"ec9d4b3dfe19f0f8cc41e06980cbf168"},{url:"logo.svg",revision:"1b0e5d983732dd87f851712347a0ebcc"},{url:"manifest.webmanifest",revision:"ad7983010203c32fcc61f99ff775f128"},{url:"pwa-192x192.png",revision:"5197130bb5477d77eb1d42d78e88de86"},{url:"pwa-512x512.png",revision:"13b0d285f51a1fbf70bd3f5c7cb76f90"},{url:"registerSW.js",revision:"2e573dda80efb41a0811bcb07127798d"},{url:"pwa-192x192.png",revision:"5197130bb5477d77eb1d42d78e88de86"},{url:"pwa-512x512.png",revision:"13b0d285f51a1fbf70bd3f5c7cb76f90"},{url:"manifest.webmanifest",revision:"ad7983010203c32fcc61f99ff775f128"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
