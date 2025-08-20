'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [208],
  {
    208: (B, l, i) => {
      i.r(l), i.d(l, { default: () => T });
      var t = i(4438),
        F = i(9417),
        E = i(9543),
        u = i(4899),
        f = i(7578),
        h = i(5780),
        g = i(9758),
        j = i(1626),
        c = i(6354),
        v = i(9601);
      let m = (() => {
        class e {
          constructor() {
            (this.http = (0, t.WQX)(j.Qq)), (this.applicationConfigService = (0, t.WQX)(v.a));
          }
          getBeans() {
            return this.http.get(this.applicationConfigService.getEndpointFor('management/configprops')).pipe(
              (0, c.T)(n =>
                Object.values(
                  Object.values(n.contexts)
                    .map(o => o.beans)
                    .reduce((o, r) => ({ ...o, ...r }), {}),
                ),
              ),
            );
          }
          getPropertySources() {
            return this.http.get(this.applicationConfigService.getEndpointFor('management/env')).pipe((0, c.T)(n => n.propertySources));
          }
          static {
            this.ɵfac = function (o) {
              return new (o || e)();
            };
          }
          static {
            this.ɵprov = t.jDH({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      var C = i(60),
        y = i(8300),
        p = i(177);
      const d = (e, s) => s.key;
      function b(e, s) {
        if (
          (1 & e &&
            (t.EFF(0, '\n                '),
            t.j41(1, 'div', 11),
            t.EFF(2, '\n                  '),
            t.j41(3, 'div', 12),
            t.EFF(4),
            t.k0s(),
            t.EFF(5, '\n                  '),
            t.j41(6, 'div', 13),
            t.EFF(7, '\n                    '),
            t.j41(8, 'span', 14),
            t.EFF(9),
            t.nI1(10, 'json'),
            t.k0s(),
            t.EFF(11, '\n                  '),
            t.k0s(),
            t.EFF(12, '\n                '),
            t.k0s(),
            t.EFF(13, '\n              ')),
          2 & e)
        ) {
          const n = s.$implicit;
          t.R7$(4), t.JRh(n.key), t.R7$(5), t.JRh(t.bMT(10, 2, n.value));
        }
      }
      function k(e, s) {
        if (
          (1 & e &&
            (t.EFF(0, '\n          '),
            t.j41(1, 'tr'),
            t.EFF(2, '\n            '),
            t.j41(3, 'td'),
            t.EFF(4, '\n              '),
            t.j41(5, 'span'),
            t.EFF(6),
            t.k0s(),
            t.EFF(7, '\n            '),
            t.k0s(),
            t.EFF(8, '\n            '),
            t.j41(9, 'td'),
            t.EFF(10, '\n              '),
            t.Z7z(11, b, 14, 4, null, null, d),
            t.nI1(13, 'keyvalue'),
            t.k0s(),
            t.EFF(14, '\n          '),
            t.k0s(),
            t.EFF(15, '\n        ')),
          2 & e)
        ) {
          const n = s.$implicit;
          t.R7$(6), t.JRh(n.prefix), t.R7$(5), t.Dyx(t.bMT(13, 1, n.properties));
        }
      }
      function S(e, s) {
        if (
          (1 & e &&
            (t.EFF(0, '\n              '),
            t.j41(1, 'tr'),
            t.EFF(2, '\n                '),
            t.j41(3, 'td', 18),
            t.EFF(4),
            t.k0s(),
            t.EFF(5, '\n                '),
            t.j41(6, 'td', 18),
            t.EFF(7, '\n                  '),
            t.j41(8, 'span', 14),
            t.EFF(9),
            t.k0s(),
            t.EFF(10, '\n                '),
            t.k0s(),
            t.EFF(11, '\n              '),
            t.k0s(),
            t.EFF(12, '\n            ')),
          2 & e)
        ) {
          const n = s.$implicit;
          t.R7$(4), t.JRh(n.key), t.R7$(5), t.JRh(n.value.value);
        }
      }
      function R(e, s) {
        if (
          (1 & e &&
            (t.EFF(0, '\n      '),
            t.j41(1, 'div'),
            t.EFF(2, '\n        '),
            t.j41(3, 'h4', 15),
            t.EFF(4, '\n          '),
            t.j41(5, 'span'),
            t.EFF(6),
            t.k0s(),
            t.EFF(7, '\n        '),
            t.k0s(),
            t.EFF(8, '\n\n        '),
            t.j41(9, 'table', 16),
            t.EFF(10, '\n          '),
            t.j41(11, 'thead'),
            t.EFF(12, '\n            '),
            t.j41(13, 'tr'),
            t.EFF(14, '\n              '),
            t.j41(15, 'th', 17),
            t.EFF(16, 'Property'),
            t.k0s(),
            t.EFF(17, '\n              '),
            t.j41(18, 'th', 9),
            t.EFF(19, 'Value'),
            t.k0s(),
            t.EFF(20, '\n            '),
            t.k0s(),
            t.EFF(21, '\n          '),
            t.k0s(),
            t.EFF(22, '\n          '),
            t.j41(23, 'tbody'),
            t.EFF(24, '\n            '),
            t.Z7z(25, S, 13, 2, null, null, d),
            t.nI1(27, 'keyvalue'),
            t.k0s(),
            t.EFF(28, '\n        '),
            t.k0s(),
            t.EFF(29, '\n      '),
            t.k0s(),
            t.EFF(30, '\n    ')),
          2 & e)
        ) {
          const n = s.$implicit,
            o = s.$index;
          t.R7$(3),
            t.Y8G('id', 'property-source-' + o),
            t.R7$(3),
            t.JRh(n.name),
            t.R7$(3),
            t.BMQ('aria-describedby', 'property-source-' + o),
            t.R7$(16),
            t.Dyx(t.bMT(27, 3, n.properties));
        }
      }
      function x(e, s) {
        if (1 & e) {
          const n = t.RV6();
          t.EFF(0, '\n  '),
            t.j41(1, 'div'),
            t.EFF(2, '\n    '),
            t.j41(3, 'h2', 0),
            t.EFF(4, 'Configuration'),
            t.k0s(),
            t.EFF(5, '\n\n    '),
            t.j41(6, 'span', 1),
            t.EFF(7, 'Filter (by prefix)'),
            t.k0s(),
            t.EFF(8, '\n    '),
            t.j41(9, 'input', 2),
            t.bIt('ngModelChange', function (r) {
              t.eBV(n);
              const a = t.XpG();
              return t.Njj(a.beansFilter.set(r));
            }),
            t.k0s(),
            t.EFF(10, '\n\n    '),
            t.j41(11, 'h3', 3),
            t.EFF(12, 'Spring configuration'),
            t.k0s(),
            t.EFF(13, '\n\n    '),
            t.j41(14, 'table', 4),
            t.EFF(15, '\n      '),
            t.j41(16, 'thead'),
            t.EFF(17, '\n        '),
            t.j41(18, 'tr', 5),
            t.mxI('sortStateChange', function (r) {
              t.eBV(n);
              const a = t.XpG();
              return t.DH7(a.sortState, r) || (a.sortState = r), t.Njj(r);
            }),
            t.EFF(19, '\n          '),
            t.j41(20, 'th', 6),
            t.EFF(21, '\n            '),
            t.j41(22, 'span', 7),
            t.EFF(23, 'Prefix'),
            t.k0s(),
            t.EFF(24, ' '),
            t.nrm(25, 'fa-icon', 8),
            t.EFF(26, '\n          '),
            t.k0s(),
            t.EFF(27, '\n          '),
            t.j41(28, 'th', 9)(29, 'span', 10),
            t.EFF(30, 'Properties'),
            t.k0s()(),
            t.EFF(31, '\n        '),
            t.k0s(),
            t.EFF(32, '\n      '),
            t.k0s(),
            t.EFF(33, '\n      '),
            t.j41(34, 'tbody'),
            t.EFF(35, '\n        '),
            t.Z7z(36, k, 16, 3, null, null, t.Vm6),
            t.k0s(),
            t.EFF(38, '\n    '),
            t.k0s(),
            t.EFF(39, '\n\n    '),
            t.Z7z(40, R, 31, 5, null, null, t.Vm6),
            t.k0s(),
            t.EFF(42, '\n');
        }
        if (2 & e) {
          const n = t.XpG();
          t.R7$(9),
            t.Y8G('ngModel', n.beansFilter()),
            t.R7$(9),
            t.R50('sortState', n.sortState),
            t.R7$(18),
            t.Dyx(n.beans()),
            t.R7$(4),
            t.Dyx(n.propertySources());
        }
      }
      let T = (() => {
        class e {
          constructor() {
            (this.allBeans = (0, t.vPA)(void 0)),
              (this.beansFilter = (0, t.vPA)('')),
              (this.propertySources = (0, t.vPA)([])),
              (this.sortState = (0, u.q)({ predicate: 'prefix', order: 'asc' })),
              (this.beans = (0, t.EWP)(() => {
                let n = this.allBeans() ?? [];
                const o = this.beansFilter();
                o && (n = n.filter($ => $.prefix.toLowerCase().includes(o.toLowerCase())));
                const { order: r, predicate: a } = this.sortState();
                return a && r && (n = n.sort(this.sortService.startSort({ predicate: a, order: r }))), n;
              })),
              (this.sortService = (0, t.WQX)(f.a)),
              (this.configurationService = (0, t.WQX)(m));
          }
          ngOnInit() {
            this.configurationService.getBeans().subscribe(n => {
              this.allBeans.set(n);
            }),
              this.configurationService.getPropertySources().subscribe(n => this.propertySources.set(n));
          }
          static {
            this.ɵfac = function (o) {
              return new (o || e)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: e,
              selectors: [['jhi-configuration']],
              decls: 1,
              vars: 1,
              consts: [
                ['id', 'configuration-page-heading', 'data-cy', 'configurationPageHeading', 'jhiTranslate', 'configuration.title'],
                ['jhiTranslate', 'configuration.filter'],
                ['type', 'text', 1, 'form-control', 3, 'ngModelChange', 'ngModel'],
                ['id', 'spring-configuration'],
                ['aria-describedby', 'spring-configuration', 1, 'table', 'table-striped', 'table-bordered', 'table-responsive', 'd-table'],
                ['jhiSort', '', 3, 'sortStateChange', 'sortState'],
                ['jhiSortBy', 'prefix', 'scope', 'col', 1, 'w-40'],
                ['jhiTranslate', 'configuration.table.prefix'],
                ['icon', 'sort'],
                ['scope', 'col', 1, 'w-60'],
                ['jhiTranslate', 'configuration.table.properties'],
                [1, 'row'],
                [1, 'col-md-4'],
                [1, 'col-md-8'],
                [1, 'float-end', 'bg-secondary', 'break'],
                [3, 'id'],
                [1, 'table', 'table-sm', 'table-striped', 'table-bordered', 'table-responsive', 'd-table'],
                ['scope', 'col', 1, 'w-40'],
                [1, 'break'],
              ],
              template: function (o, r) {
                1 & o && t.DNE(0, x, 43, 2), 2 & o && t.vxM(r.allBeans() ? 0 : -1);
              },
              dependencies: [E.A, C.aY, y.A, p.TG, p.lG, F.YN, F.me, F.BC, F.vS, h._, g.b],
              encapsulation: 2,
            });
          }
        }
        return e;
      })();
    },
  },
]);
