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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d1f1c9b21782ca58644121cb6f79bd83"
  },
  {
    "url": "assets/css/styles.38103787.css",
    "revision": "b9fbdcb79dca72a87f026eaed10a18bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.115ff864.js",
    "revision": "7c66deb730c3edf21b0820c460502a05"
  },
  {
    "url": "assets/js/10.e392713b.js",
    "revision": "0f06d0e154e5f5b79c0a5ebb48d49963"
  },
  {
    "url": "assets/js/11.56b51e4c.js",
    "revision": "07f676928aac72c9b70b9bee9f31607d"
  },
  {
    "url": "assets/js/12.08257d0a.js",
    "revision": "9367c0d2efc953e7776e8c4389492cb3"
  },
  {
    "url": "assets/js/13.4dc794e5.js",
    "revision": "dc65414f1a4c172c65e03a712a5dffab"
  },
  {
    "url": "assets/js/14.faef358a.js",
    "revision": "0feea42ee142537a0ba42d260bf439c8"
  },
  {
    "url": "assets/js/15.05e4bee1.js",
    "revision": "7b71aad0aa5d5202f1380dffbd5a832a"
  },
  {
    "url": "assets/js/16.97d09055.js",
    "revision": "3a7046c0eef584f285c3125e15843413"
  },
  {
    "url": "assets/js/17.1eb1e088.js",
    "revision": "bc946585684ed40454083def5b8047c2"
  },
  {
    "url": "assets/js/18.84d26e49.js",
    "revision": "252686f7c0e997bb7f2c64d85a457630"
  },
  {
    "url": "assets/js/19.19ab024a.js",
    "revision": "11e6490043775af486e1bf05edfa29a9"
  },
  {
    "url": "assets/js/2.adbb556e.js",
    "revision": "d57956b6dcc1eb37375639b84b4f427f"
  },
  {
    "url": "assets/js/20.a33a6b1e.js",
    "revision": "3c69c554c9a05376b4cfaa6d1251afc2"
  },
  {
    "url": "assets/js/21.5f34f48a.js",
    "revision": "7623f267f00970d61c2b7d7e70ab0f65"
  },
  {
    "url": "assets/js/3.99a4e9ef.js",
    "revision": "c7d63c0a3e158a54b1abcaa31a652037"
  },
  {
    "url": "assets/js/4.a7bee59a.js",
    "revision": "55282c4d7a8ee872c4d64aedc5f701f8"
  },
  {
    "url": "assets/js/5.d3999c7e.js",
    "revision": "99e776fedb9ce4f00997640208a997d9"
  },
  {
    "url": "assets/js/6.615b0f7f.js",
    "revision": "4ef5310084aff5658af3dfd2fe00a6f1"
  },
  {
    "url": "assets/js/7.376125de.js",
    "revision": "2bed9e62c7c3fd0153b37d6585141ded"
  },
  {
    "url": "assets/js/8.04a6bf66.js",
    "revision": "b0ca2da10ab2e8c93dff0c8e6da0c6a4"
  },
  {
    "url": "assets/js/9.5ec813d5.js",
    "revision": "0d85f247db8513b533937ec96c0295b6"
  },
  {
    "url": "assets/js/app.38103787.js",
    "revision": "3082fb5712c9a2e1fe1fb6fe40303a16"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9738c4fc6c9da8f863bc18febdff7060"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "eeafd61db8c46705d56362b2cd3e2f4c"
  },
  {
    "url": "guide/i18n.html",
    "revision": "f9ed3d93cd24a28723f27a5e50704a31"
  },
  {
    "url": "guide/index.html",
    "revision": "f77e589609cb2713f8a5e5c04ea91f63"
  },
  {
    "url": "guide/scene.html",
    "revision": "cdacbf27fdaa639072bb94f6e9b3caff"
  },
  {
    "url": "guide/theme-config.html",
    "revision": "2f19367cfaf890b6b2fb68945d325950"
  },
  {
    "url": "hero.png",
    "revision": "42f17b6e976468a255d506b79736bf32"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "60159790be2cbc30e14b824de704232a"
  },
  {
    "url": "logo.png",
    "revision": "42f17b6e976468a255d506b79736bf32"
  },
  {
    "url": "theme/index.html",
    "revision": "ed2334cab47cd7d7da188196054a1162"
  },
  {
    "url": "zh/api/index.html",
    "revision": "b0a97baebaa92ca53bec4f8003653f6c"
  },
  {
    "url": "zh/changeLog/index.html",
    "revision": "461514c9cb4819a369f49a1887c06192"
  },
  {
    "url": "zh/ecosystem/index.html",
    "revision": "653f83c6193d470495d883fa1c0bfa0b"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "9ff9104d353a6f20f2ba7db140c631cb"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8052906b0145bc87d3fe53c0653f8fa6"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "0479d46e7df92ee2c4480669cd9a144f"
  },
  {
    "url": "zh/guide/important.html",
    "revision": "884026c393745506d663000a1046be4c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "700dad476731d6c61d0d2bd7340561df"
  },
  {
    "url": "zh/guide/theme-config.html",
    "revision": "51bb4e77c1982cc1d74843e81e35218d"
  },
  {
    "url": "zh/index.html",
    "revision": "60159790be2cbc30e14b824de704232a"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "85bb87d4d3cfd0745ee685f7d5769ccd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
