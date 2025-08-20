(() => {
  'use strict';
  var e,
    v = {},
    m = {};
  function a(e) {
    var c = m[e];
    if (void 0 !== c) return c.exports;
    var t = (m[e] = { exports: {} });
    return v[e](t, t.exports, a), t.exports;
  }
  (a.m = v),
    (e = []),
    (a.O = (c, t, n, d) => {
      if (!t) {
        var r = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [t, n, d] = e[f], l = !0, i = 0; i < t.length; i++)
            (!1 & d || r >= d) && Object.keys(a.O).every(p => a.O[p](t[i])) ? t.splice(i--, 1) : ((l = !1), d < r && (r = d));
          if (l) {
            e.splice(f--, 1);
            var u = n();
            void 0 !== u && (c = u);
          }
        }
        return c;
      }
      d = d || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > d; f--) e[f] = e[f - 1];
      e[f] = [t, n, d];
    }),
    (a.d = (e, c) => {
      for (var t in c) a.o(c, t) && !a.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: c[t] });
    }),
    (a.f = {}),
    (a.e = e => Promise.all(Object.keys(a.f).reduce((c, t) => (a.f[t](e, c), c), []))),
    (a.u = e =>
      (76 === e ? 'common' : e) +
      '.' +
      {
        12: '39f96902b1e07d69',
        76: 'e483c1102087f4e0',
        177: '9b73dc6b4ad06418',
        208: 'd06f40a6f71b5207',
        218: '1922cae129fbfaee',
        239: '1fae66457477099d',
        254: '9b4e89b916dbd5f7',
        274: '77969a488eb73c3b',
        341: 'fd1696c358f6e2bf',
        432: '7cec6135650acd03',
        441: 'a2e8100c1d3c254d',
        496: '76b0f6d0d673d2d3',
        636: '6a38ec018cb66177',
        699: 'b35e7d8959397789',
        818: '712b5a5e7d44ec98',
        827: '38c63082893a63b8',
        828: 'ceb5b7e061df6375',
        859: '26e0b73a476d9aa8',
        871: 'd2d1aa7188562558',
        921: 'cfa41dbe91a70676',
        956: '99dac9a87c67a51b',
        971: '55ac8851cc244b0a',
        972: '8a92829240dc6b85',
        996: 'b12539d981ed7a24',
      }[e] +
      '.js'),
    (a.miniCssF = e => {}),
    (a.o = (e, c) => Object.prototype.hasOwnProperty.call(e, c)),
    (() => {
      var e = {},
        c = 'javascript-typescript-kata:';
      a.l = (t, n, d, f) => {
        if (e[t]) e[t].push(n);
        else {
          var r, l;
          if (void 0 !== d)
            for (var i = document.getElementsByTagName('script'), u = 0; u < i.length; u++) {
              var o = i[u];
              if (o.getAttribute('src') == t || o.getAttribute('data-webpack') == c + d) {
                r = o;
                break;
              }
            }
          r ||
            ((l = !0),
            ((r = document.createElement('script')).type = 'module'),
            (r.charset = 'utf-8'),
            (r.timeout = 120),
            a.nc && r.setAttribute('nonce', a.nc),
            r.setAttribute('data-webpack', c + d),
            (r.src = a.tu(t))),
            (e[t] = [n]);
          var b = (g, p) => {
              (r.onerror = r.onload = null), clearTimeout(s);
              var _ = e[t];
              if ((delete e[t], r.parentNode && r.parentNode.removeChild(r), _ && _.forEach(y => y(p)), g)) return g(p);
            },
            s = setTimeout(b.bind(null, void 0, { type: 'timeout', target: r }), 12e4);
          (r.onerror = b.bind(null, r.onerror)), (r.onload = b.bind(null, r.onload)), l && document.head.appendChild(r);
        }
      };
    })(),
    (a.r = e => {
      typeof Symbol < 'u' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      a.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: c => c }),
          typeof trustedTypes < 'u' && trustedTypes.createPolicy && (e = trustedTypes.createPolicy('angular#bundler', e))),
        e
      );
    })(),
    (a.tu = e => a.tt().createScriptURL(e)),
    (a.p = ''),
    (() => {
      var e = { 121: 0 };
      (a.f.j = (n, d) => {
        var f = a.o(e, n) ? e[n] : void 0;
        if (0 !== f)
          if (f) d.push(f[2]);
          else if (121 != n) {
            var r = new Promise((o, b) => (f = e[n] = [o, b]));
            d.push((f[2] = r));
            var l = a.p + a.u(n),
              i = new Error();
            a.l(
              l,
              o => {
                if (a.o(e, n) && (0 !== (f = e[n]) && (e[n] = void 0), f)) {
                  var b = o && ('load' === o.type ? 'missing' : o.type),
                    s = o && o.target && o.target.src;
                  (i.message = 'Loading chunk ' + n + ' failed.\n(' + b + ': ' + s + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = b),
                    (i.request = s),
                    f[1](i);
                }
              },
              'chunk-' + n,
              n,
            );
          } else e[n] = 0;
      }),
        (a.O.j = n => 0 === e[n]);
      var c = (n, d) => {
          var i,
            u,
            [f, r, l] = d,
            o = 0;
          if (f.some(s => 0 !== e[s])) {
            for (i in r) a.o(r, i) && (a.m[i] = r[i]);
            if (l) var b = l(a);
          }
          for (n && n(d); o < f.length; o++) a.o(e, (u = f[o])) && e[u] && e[u][0](), (e[u] = 0);
          return a.O(b);
        },
        t = (self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []);
      t.forEach(c.bind(null, 0)), (t.push = c.bind(null, t.push.bind(t)));
    })();
})();
