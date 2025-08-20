'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [792],
  {
    9237: (d, $, g) => {
      g.e(972)
        .then(g.bind(g, 1972))
        .catch(m => console.error(m));
    },
    4073: () => {
      Error;
      const U = function (t, ...n) {
          if (U.translate) {
            const i = U.translate(t, n);
            (t = i[0]), (n = i[1]);
          }
          let e = L(t[0], t.raw[0]);
          for (let i = 1; i < t.length; i++) e += n[i - 1] + L(t[i], t.raw[i]);
          return e;
        },
        it = ':';
      function L(t, n) {
        return n.charAt(0) === it
          ? t.substring(
              (function E(t, n) {
                for (let e = 1, i = 1; e < t.length; e++, i++)
                  if ('\\' === n[i]) i++;
                  else if (':' === t[e]) return e;
                throw new Error(`Unterminated $localize metadata block in "${n}".`);
              })(t, n) + 1,
            )
          : t;
      }
      globalThis.$localize = U;
    },
  },
  d => {
    var $ = m => d((d.s = m));
    $(4073), $(9237);
  },
]);
