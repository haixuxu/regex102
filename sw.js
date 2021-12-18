if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const i = document.createElement('script');
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, c, r) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const n = { uri: location.origin + s.slice(1) };
        return Promise.all(
          c.map((s) => {
            switch (s) {
              case 'exports':
                return i;
              case 'module':
                return n;
              default:
                return e(s);
            }
          }),
        ).then((e) => {
          const s = r(...e);
          return i.default || (i.default = s), i;
        });
      }));
  };
}
define('./sw.js', ['./workbox-f537f4af'], function (e) {
  'use strict';
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/static/2.27225c201d3c2a9e4eff.css', revision: null },
        { url: '/static/4.6270dcbf0cdce57476a3.css', revision: null },
        { url: '/static/5.8b7e5f517f738a21e693.css', revision: null },
        { url: '/static/6.40c8f1dbde43afb54462.css', revision: null },
        { url: '/static/assets/manifest.webmanifest', revision: '8a2871d5568c5a6ddbf423180f6c7834' },
        { url: '/static/bundle.255b0d51ce6939c8b906.css', revision: null },
        { url: '/static/bundle.6a3c272393fa26f729a5.js', revision: null },
        { url: '/static/codeSample.558f1af35f666db6293e.chunk.js', revision: null },
        { url: '/static/generic.worker.a67ff51733e11f15659d.js', revision: null },
        { url: '/static/golang.js', revision: '4e617463decd26e315cc06f16e37b186' },
        { url: '/static/golang.worker.7ce6223ac70721b75ce8.js', revision: null },
        { url: '/static/java.worker.fab3add35288653c4def.js', revision: null },
        { url: '/static/java.worker.fc5937d353fa205c2095.js', revision: null },
        { url: '/static/java8.js', revision: '69cbd2f719031cbeb7315b206e93781c' },
        { url: '/static/javascript.worker.a214bdabc83acf0827ff.js', revision: null },
        { url: '/static/javascript.worker.c7de0b73739d8f3c1b68.js', revision: null },
        { url: '/static/markdownContainer.704d1d01764f70fae66d.chunk.js', revision: null },
        { url: '/static/pcre.worker.bf4ed3f35b2dfba0a372.js', revision: null },
        { url: '/static/pcre2.worker.4ccbafcae8f10b0f7eac.js', revision: null },
        { url: '/static/pcre2.worker.9c9fc0b2bef52e4a9afa.js', revision: null },
        { url: '/static/pcre2lib.js', revision: '49463b7468fbac539b30ecca1aa0d520' },
        { url: '/static/pcre2lib.wasm', revision: '386a10a4d19026a43ca951581d9568b1' },
        { url: '/static/pcrelib.js', revision: '157f618b0aaeb74cbc883736e3188a27' },
        { url: '/static/pcrelib.wasm', revision: 'ffa71f804dcbb9473efaff6427c940e7' },
        { url: '/static/polyfills.a894b4edbf44d97f4cde.chunk.js', revision: null },
        { url: '/static/quickref.f015563d30d5bebfc613.chunk.js', revision: null },
        { url: '/static/quizStats.b4e80e4d801aad41d61f.chunk.js', revision: null },
        { url: '/static/regexDebugger.0edbbec69ccc3fb756b9.chunk.js', revision: null },
        { url: '/static/vendors-bundle.eecaaa1f0bc02123d56e.chunk.js', revision: null },
        { url: '/static/vendors-codeSample.a834534dd0fa3790354d.chunk.js', revision: null },
        { url: '/static/vendors-markdownContainer.acf6beafad4bddd93269.chunk.js', revision: null },
        { url: '/static/vendors-polyfills.221fc8e46ddcbf1dea33.chunk.js', revision: null },
        { url: '/static/vendors-quickref.feefd9b382eea69bbd65.chunk.js', revision: null },
        { url: '/static/vendors-quizStats.8808b32cc317fead7adc.chunk.js', revision: null },
        { url: '/static/vendors-regexDebugger.f496654486ebff7527e8.chunk.js', revision: null },
        { url: '/static/vendors-sentry.cdc7a0086c242cde31e6.chunk.js', revision: null },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(/\.(?:png|jpg|jpeg|svg|ico)$/, new e.CacheFirst({ cacheName: 'images', plugins: [] }), 'GET'),
    e.registerRoute(/\.json$/, new e.CacheFirst({ cacheName: 'jsonFiles', plugins: [] }), 'GET'),
    e.registerRoute(/fonts\.(?:googleapi|gstatic)\.com/, new e.CacheFirst({ cacheName: 'fonts', plugins: [] }), 'GET'),
    e.registerRoute(/\/api\/|buysellads|\/library\/\w+|google-analytics\.com\/collect/, new e.NetworkOnly(), 'GET'),
    e.registerRoute(/.*/, new e.NetworkFirst({ cacheName: 'html', plugins: [] }), 'GET');
});
