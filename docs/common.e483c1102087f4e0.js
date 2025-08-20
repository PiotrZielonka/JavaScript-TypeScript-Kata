'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [76],
  {
    4744: (l, r, o) => {
      o.d(r, { Y: () => s });
      const s = ['en', 'pl'];
    },
    6160: (l, r, o) => {
      o.d(r, { fv: () => t, k7: () => e, zK: () => u });
      const t = 'sort',
        u = 'deleted',
        e = 'defaultSort';
    },
    6404: (l, r, o) => {
      o.d(r, { $: () => i });
      var s = o(1626);
      const i = t => {
        let u = new s.Nl();
        return (
          t &&
            Object.entries(t).forEach(([e, n]) => {
              if (null != n) for (const _ of [].concat(t[e]).filter(a => '' !== a)) u = u.append(e, _);
            }),
          u
        );
      };
    },
    8768: (l, r, o) => {
      function s(t) {
        return null != t;
      }
      o.d(r, { W: () => s, a: () => i });
      const i = t => (isNaN(t) ? 0 : t);
    },
    3152: (l, r, o) => {
      o.d(r, { A: () => i });
      var s = o(4438);
      let i = (() => {
        class t {
          constructor() {
            this.languages = { en: { name: 'English' }, pl: { name: 'Polski' } };
          }
          transform(e) {
            return this.languages[e].name;
          }
          static {
            this.ɵfac = function (n) {
              return new (n || t)();
            };
          }
          static {
            this.ɵpipe = s.EJ8({ name: 'findLanguageFromKey', type: t, pure: !0 });
          }
        }
        return t;
      })();
    },
    9758: (l, r, o) => {
      o.d(r, { b: () => e });
      var s = o(4438),
        i = o(60),
        t = o(5383),
        u = o(5780);
      let e = (() => {
        class n {
          constructor() {
            (this.jhiSortBy = s.hFB.required()),
              (this.iconComponent = (0, s.sbv)(i.aY)),
              (this.sortIcon = t.OM7),
              (this.sortAscIcon = t.Dvs),
              (this.sortDescIcon = t.Ync),
              (this.sort = (0, s.WQX)(u._, { host: !0 })),
              (0, s.QZP)(() => {
                if (this.iconComponent()) {
                  let a = this.sortIcon;
                  const { predicate: c, order: d } = this.sort.sortState();
                  c === this.jhiSortBy() && void 0 !== d && (a = 'asc' === d ? this.sortAscIcon : this.sortDescIcon),
                    (this.iconComponent().icon = a.iconName),
                    this.iconComponent().render();
                }
              });
          }
          onClick() {
            this.iconComponent() && this.sort.sort(this.jhiSortBy());
          }
          static {
            this.ɵfac = function (c) {
              return new (c || n)();
            };
          }
          static {
            this.ɵdir = s.FsC({
              type: n,
              selectors: [['', 'jhiSortBy', '']],
              contentQueries: function (c, d, h) {
                1 & c && s.C6U(h, d.iconComponent, i.aY, 5), 2 & c && s.NyB();
              },
              hostBindings: function (c, d) {
                1 & c &&
                  s.bIt('click', function () {
                    return d.onClick();
                  });
              },
              inputs: { jhiSortBy: [1, 'jhiSortBy'] },
            });
          }
        }
        return n;
      })();
    },
    4899: (l, r, o) => {
      o.d(r, { q: () => i });
      var s = o(4438);
      const i = t => (0, s.vPA)(t, { equal: (u, e) => u.predicate === e.predicate && u.order === e.order });
    },
    5780: (l, r, o) => {
      o.d(r, { _: () => i });
      var s = o(4438);
      let i = (() => {
        class t {
          constructor() {
            (this.sortState = s.geq.required()), (this.sortChange = (0, s.CGW)());
          }
          sort(e) {
            const { predicate: n, order: _ } = this.sortState(),
              c = { predicate: e, order: e !== n ? 'asc' : 'asc' === _ ? 'desc' : 'asc' };
            this.sortState.update(() => c), this.sortChange.emit(c);
          }
          static {
            this.ɵfac = function (n) {
              return new (n || t)();
            };
          }
          static {
            this.ɵdir = s.FsC({
              type: t,
              selectors: [['', 'jhiSort', '']],
              inputs: { sortState: [1, 'sortState'] },
              outputs: { sortState: 'sortStateChange', sortChange: 'sortChange' },
            });
          }
        }
        return t;
      })();
    },
    7578: (l, r, o) => {
      o.d(r, { a: () => i });
      var s = o(4438);
      let i = (() => {
        class t {
          constructor() {
            this.collator = new Intl.Collator(void 0, { numeric: !0, sensitivity: 'base' });
          }
          startSort({ predicate: e, order: n }, _) {
            const a = 'desc' === n ? -1 : 1;
            return (c, d) => {
              const h = this.collator.compare(c[e], d[e]);
              return 0 === h && _ ? this.startSort(_)(c, d) : h * a;
            };
          }
          parseSortParam(e) {
            if (e?.includes(',')) {
              const n = e.split(',');
              if (n[0]) return { predicate: n[0], order: n[1] };
            }
            return { predicate: e?.length ? e : void 0 };
          }
          buildSortParam({ predicate: e, order: n }, _) {
            const a = e && n ? [`${e},${n}`] : [];
            return _ && e !== _ && a.push(`${_},asc`), a;
          }
          static {
            this.ɵfac = function (n) {
              return new (n || t)();
            };
          }
          static {
            this.ɵprov = s.jDH({ token: t, factory: t.ɵfac, providedIn: 'root' });
          }
        }
        return t;
      })();
    },
  },
]);
