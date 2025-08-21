(() => {
  'use strict';
  var e,
    v = {},
    m = {};
  function a(e) {
    var d = m[e];
    if (void 0 !== d) return d.exports;
    var t = (m[e] = { exports: {} });
    return v[e](t, t.exports, a), t.exports;
  }
  (a.m = v),
    (e = []),
    (a.O = (d, t, n, c) => {
      if (!t) {
        var r = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [t, n, c] = e[f], l = !0, i = 0; i < t.length; i++)
            (!1 & c || r >= c) && Object.keys(a.O).every(p => a.O[p](t[i])) ? t.splice(i--, 1) : ((l = !1), c < r && (r = c));
          if (l) {
            e.splice(f--, 1);
            var u = n();
            void 0 !== u && (d = u);
          }
        }
        return d;
      }
      c = c || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > c; f--) e[f] = e[f - 1];
      e[f] = [t, n, c];
    }),
    (a.d = (e, d) => {
      for (var t in d) a.o(d, t) && !a.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: d[t] });
    }),
    (a.f = {}),
    (a.e = e => Promise.all(Object.keys(a.f).reduce((d, t) => (a.f[t](e, d), d), []))),
    (a.u = e =>
      (76 === e ? 'common' : e) +
      '.' +
      {
        12: '39f96902b1e07d69',
        76: 'e483c1102087f4e0',
        177: '9b73dc6b4ad06418',
        208: 'd06f40a6f71b5207',
        218: '1922cae129fbfaee',
        239: '23a2965c93996ece',
        254: '9b4e89b916dbd5f7',
        274: '77969a488eb73c3b',
        341: 'fd1696c358f6e2bf',
        432: 'abfa23e1bff62e56',
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
        972: '66403df9001ec6df',
        996: 'b12539d981ed7a24',
      }[e] +
      '.js'),
    (a.miniCssF = e => {}),
    (a.o = (e, d) => Object.prototype.hasOwnProperty.call(e, d)),
    (() => {
      var e = {},
        d = 'javascript-typescript-kata:';
      a.l = (t, n, c, f) => {
        if (e[t]) e[t].push(n);
        else {
          var r, l;
          if (void 0 !== c)
            for (var i = document.getElementsByTagName('script'), u = 0; u < i.length; u++) {
              var o = i[u];
              if (o.getAttribute('src') == t || o.getAttribute('data-webpack') == d + c) {
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
            r.setAttribute('data-webpack', d + c),
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
          ((e = { createScriptURL: d => d }),
          typeof trustedTypes < 'u' && trustedTypes.createPolicy && (e = trustedTypes.createPolicy('angular#bundler', e))),
        e
      );
    })(),
    (a.tu = e => a.tt().createScriptURL(e)),
    (a.p = ''),
    (() => {
      var e = { 121: 0 };
      (a.f.j = (n, c) => {
        var f = a.o(e, n) ? e[n] : void 0;
        if (0 !== f)
          if (f) c.push(f[2]);
          else if (121 != n) {
            var r = new Promise((o, b) => (f = e[n] = [o, b]));
            c.push((f[2] = r));
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
      var d = (n, c) => {
          var i,
            u,
            [f, r, l] = c,
            o = 0;
          if (f.some(s => 0 !== e[s])) {
            for (i in r) a.o(r, i) && (a.m[i] = r[i]);
            if (l) var b = l(a);
          }
          for (n && n(c); o < f.length; o++) a.o(e, (u = f[o])) && e[u] && e[u][0](), (e[u] = 0);
          return a.O(b);
        },
        t = (self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []);
      t.forEach(d.bind(null, 0)), (t.push = d.bind(null, t.push.bind(t)));
    })();
})();
