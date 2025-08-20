'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [254],
  {
    2254: (G, c, i) => {
      i.r(c), i.d(c, { default: () => T });
      var t = i(4438),
        F = i(980),
        p = i(9543),
        a = i(9417),
        h = i(5780),
        m = i(9758),
        d = i(4899),
        f = i(7578);
      class E {
        constructor(l, e) {
          (this.name = l), (this.level = e);
        }
      }
      var v = i(1626),
        u = i(9601);
      let j = (() => {
        class o {
          constructor() {
            (this.http = (0, t.WQX)(v.Qq)), (this.applicationConfigService = (0, t.WQX)(u.a));
          }
          changeLevel(e, s) {
            return this.http.post(this.applicationConfigService.getEndpointFor(`management/loggers/${e}`), { configuredLevel: s });
          }
          findAll() {
            return this.http.get(this.applicationConfigService.getEndpointFor('management/loggers'));
          }
          static {
            this.ɵfac = function (s) {
              return new (s || o)();
            };
          }
          static {
            this.ɵprov = t.jDH({ token: o, factory: o.ɵfac, providedIn: 'root' });
          }
        }
        return o;
      })();
      var g = i(177),
        _ = i(60),
        b = i(8300);
      const L = () => [g.YU, _.aY, b.A, g.P9, a.me, a.BC, a.vS, h._, m.b],
        C = o => ({ total: o });
      function R(o, l) {
        if (1 & o) {
          const e = t.RV6();
          t.EFF(0, '\n          '),
            t.j41(1, 'tr'),
            t.EFF(2, '\n            '),
            t.j41(3, 'td'),
            t.EFF(4, '\n              '),
            t.j41(5, 'small'),
            t.EFF(6),
            t.nI1(7, 'slice'),
            t.k0s(),
            t.EFF(8, '\n            '),
            t.k0s(),
            t.EFF(9, '\n            '),
            t.j41(10, 'td'),
            t.EFF(11, '\n              '),
            t.j41(12, 'button', 12),
            t.bIt('click', function () {
              const n = t.eBV(e).$implicit,
                r = t.XpG(2);
              return t.Njj(r.changeLevel(n.name, 'TRACE'));
            }),
            t.EFF(13, '\n                TRACE\n              '),
            t.k0s(),
            t.EFF(14, '\n\n              '),
            t.j41(15, 'button', 12),
            t.bIt('click', function () {
              const n = t.eBV(e).$implicit,
                r = t.XpG(2);
              return t.Njj(r.changeLevel(n.name, 'DEBUG'));
            }),
            t.EFF(16, '\n                DEBUG\n              '),
            t.k0s(),
            t.EFF(17, '\n\n              '),
            t.j41(18, 'button', 12),
            t.bIt('click', function () {
              const n = t.eBV(e).$implicit,
                r = t.XpG(2);
              return t.Njj(r.changeLevel(n.name, 'INFO'));
            }),
            t.EFF(19, '\n                INFO\n              '),
            t.k0s(),
            t.EFF(20, '\n\n              '),
            t.j41(21, 'button', 12),
            t.bIt('click', function () {
              const n = t.eBV(e).$implicit,
                r = t.XpG(2);
              return t.Njj(r.changeLevel(n.name, 'WARN'));
            }),
            t.EFF(22, '\n                WARN\n              '),
            t.k0s(),
            t.EFF(23, '\n\n              '),
            t.j41(24, 'button', 12),
            t.bIt('click', function () {
              const n = t.eBV(e).$implicit,
                r = t.XpG(2);
              return t.Njj(r.changeLevel(n.name, 'ERROR'));
            }),
            t.EFF(25, '\n                ERROR\n              '),
            t.k0s(),
            t.EFF(26, '\n\n              '),
            t.j41(27, 'button', 12),
            t.bIt('click', function () {
              const n = t.eBV(e).$implicit,
                r = t.XpG(2);
              return t.Njj(r.changeLevel(n.name, 'OFF'));
            }),
            t.EFF(28, '\n                OFF\n              '),
            t.k0s(),
            t.EFF(29, '\n            '),
            t.k0s(),
            t.EFF(30, '\n          '),
            t.k0s(),
            t.EFF(31, '\n        ');
        }
        if (2 & o) {
          const e = l.$implicit;
          t.R7$(6),
            t.JRh(t.brH(7, 7, e.name, 0, 140)),
            t.R7$(6),
            t.Y8G('ngClass', 'TRACE' === e.level ? 'btn-primary' : 'btn-light'),
            t.R7$(3),
            t.Y8G('ngClass', 'DEBUG' === e.level ? 'btn-success' : 'btn-light'),
            t.R7$(3),
            t.Y8G('ngClass', 'INFO' === e.level ? 'btn-info' : 'btn-light'),
            t.R7$(3),
            t.Y8G('ngClass', 'WARN' === e.level ? 'btn-warning' : 'btn-light'),
            t.R7$(3),
            t.Y8G('ngClass', 'ERROR' === e.level ? 'btn-danger' : 'btn-light'),
            t.R7$(3),
            t.Y8G('ngClass', 'OFF' === e.level ? 'btn-secondary' : 'btn-light');
        }
      }
      function k(o, l) {
        if (1 & o) {
          const e = t.RV6();
          t.EFF(0, '\n  '),
            t.j41(1, 'div', 0),
            t.EFF(2, '\n    '),
            t.j41(3, 'h2', 1),
            t.EFF(4, 'Logs'),
            t.k0s(),
            t.EFF(5, '\n\n    '),
            t.j41(6, 'p', 2),
            t.EFF(7),
            t.k0s(),
            t.EFF(8, '\n\n    '),
            t.j41(9, 'span', 3),
            t.EFF(10, 'Filter'),
            t.k0s(),
            t.EFF(11, '\n    '),
            t.j41(12, 'input', 4),
            t.bIt('ngModelChange', function (n) {
              t.eBV(e);
              const r = t.XpG();
              return t.Njj(r.filter.set(n));
            }),
            t.k0s(),
            t.EFF(13, '\n\n    '),
            t.j41(14, 'table', 5),
            t.EFF(15, '\n      '),
            t.j41(16, 'thead'),
            t.EFF(17, '\n        '),
            t.j41(18, 'tr', 6),
            t.mxI('sortStateChange', function (n) {
              t.eBV(e);
              const r = t.XpG();
              return t.DH7(r.sortState, n) || (r.sortState = n), t.Njj(n);
            }),
            t.EFF(19, '\n          '),
            t.j41(20, 'th', 7)(21, 'span', 8),
            t.EFF(22, 'Name'),
            t.k0s(),
            t.EFF(23, ' '),
            t.nrm(24, 'fa-icon', 9),
            t.k0s(),
            t.EFF(25, '\n          '),
            t.j41(26, 'th', 10)(27, 'span', 11),
            t.EFF(28, 'Level'),
            t.k0s(),
            t.EFF(29, ' '),
            t.nrm(30, 'fa-icon', 9),
            t.k0s(),
            t.EFF(31, '\n        '),
            t.k0s(),
            t.EFF(32, '\n      '),
            t.k0s(),
            t.EFF(33, '\n\n      '),
            t.j41(34, 'tbody'),
            t.EFF(35, '\n        '),
            t.Z7z(36, R, 32, 11, null, null, t.Vm6),
            t.k0s(),
            t.EFF(38, '\n    '),
            t.k0s(),
            t.EFF(39, '\n  '),
            t.k0s(),
            t.EFF(40, '\n');
        }
        if (2 & o) {
          let e, s;
          const n = t.XpG();
          t.R7$(6),
            t.Y8G('translateValues', t.eq3(4, C, null == (e = n.loggers()) ? null : e.length)),
            t.R7$(),
            t.SpI('There are ', null == (s = n.loggers()) ? null : s.length, ' loggers.'),
            t.R7$(5),
            t.Y8G('ngModel', n.filter()),
            t.R7$(6),
            t.R50('sortState', n.sortState),
            t.R7$(18),
            t.Dyx(n.filteredAndOrderedLoggers());
        }
      }
      function S(o, l) {
        1 & o &&
          (t.EFF(0, '\n  '), t.j41(1, 'div', 13), t.EFF(2, '\n    '), t.nrm(3, 'div', 14), t.EFF(4, '\n  '), t.k0s(), t.EFF(5, '\n'));
      }
      let T = (() => {
        class o {
          constructor() {
            (this.loggers = (0, t.vPA)(void 0)),
              (this.isLoading = (0, t.vPA)(!1)),
              (this.filter = (0, t.vPA)('')),
              (this.sortState = (0, d.q)({ predicate: 'name', order: 'asc' })),
              (this.filteredAndOrderedLoggers = (0, t.EWP)(() => {
                let e = this.loggers() ?? [];
                const s = this.filter();
                s && (e = e.filter(D => D.name.toLowerCase().includes(s.toLowerCase())));
                const { order: n, predicate: r } = this.sortState();
                return (
                  n && r && (e = e.sort(this.sortService.startSort({ order: n, predicate: r }, { predicate: 'name', order: 'asc' }))), e
                );
              })),
              (this.logsService = (0, t.WQX)(j)),
              (this.sortService = (0, t.WQX)(f.a));
          }
          ngOnInit() {
            this.findAndExtractLoggers();
          }
          changeLevel(e, s) {
            this.logsService.changeLevel(e, s).subscribe(() => this.findAndExtractLoggers());
          }
          findAndExtractLoggers() {
            this.isLoading.set(!0),
              this.logsService
                .findAll()
                .pipe(
                  (0, F.j)(() => {
                    this.isLoading.set(!1);
                  }),
                )
                .subscribe({
                  next: e => this.loggers.set(Object.entries(e.loggers).map(([s, n]) => new E(s, n.effectiveLevel))),
                  error: () => this.loggers.set([]),
                });
          }
          static {
            this.ɵfac = function (s) {
              return new (s || o)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: o,
              selectors: [['jhi-logs']],
              decls: 4,
              vars: 1,
              consts: [
                [1, 'table-responsive'],
                ['id', 'logs-page-heading', 'data-cy', 'logsPageHeading', 'jhiTranslate', 'logs.title'],
                ['jhiTranslate', 'logs.nbloggers', 3, 'translateValues'],
                ['jhiTranslate', 'logs.filter'],
                ['type', 'text', 1, 'form-control', 3, 'ngModelChange', 'ngModel'],
                ['aria-describedby', 'logs-page-heading', 1, 'table', 'table-sm', 'table-striped', 'table-bordered'],
                ['jhiSort', '', 3, 'sortStateChange', 'sortState'],
                ['jhiSortBy', 'name', 'scope', 'col'],
                ['jhiTranslate', 'logs.table.name'],
                ['icon', 'sort'],
                ['jhiSortBy', 'level', 'scope', 'col'],
                ['jhiTranslate', 'logs.table.level'],
                [1, 'btn', 'btn-sm', 3, 'click', 'ngClass'],
                [1, 'd-flex', 'justify-content-center', 'me-3'],
                [1, 'spinner-border'],
              ],
              template: function (s, n) {
                1 & s && (t.DNE(0, k, 41, 6)(1, S, 6, 0), t.nv$(2, 0, L, 1)), 2 & s && (t.R7$(2), t.LVR(n.loggers() && !n.isLoading()));
              },
              dependencies: [p.A, a.YN],
              encapsulation: 2,
            });
          }
        }
        return o;
      })();
    },
  },
]);
