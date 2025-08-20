'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [921],
  {
    3921: (S, c, i) => {
      i.r(c), i.d(c, { default: () => x });
      var t = i(4438),
        h = i(1314),
        r = i(9543),
        p = i(1626),
        E = i(9601);
      let u = (() => {
        class n {
          constructor() {
            (this.http = (0, t.WQX)(p.Qq)), (this.applicationConfigService = (0, t.WQX)(E.a));
          }
          checkHealth() {
            return this.http.get(this.applicationConfigService.getEndpointFor('management/health'));
          }
          static {
            this.ɵfac = function (a) {
              return new (a || n)();
            };
          }
          static {
            this.ɵprov = t.jDH({ token: n, factory: n.ɵfac, providedIn: 'root' });
          }
        }
        return n;
      })();
      var d = i(8300),
        F = i(177);
      const m = (n, l) => l.key,
        k = () => ({
          diskSpace: 'Disk space',
          mail: 'Email',
          livenessState: 'Liveness state',
          readinessState: 'Readiness state',
          ping: 'Application',
          db: 'Database',
        });
      function j(n, l) {
        if ((1 & n && (t.EFF(0, '\n    '), t.j41(1, 'h4', 6), t.EFF(2), t.k0s(), t.EFF(3, '\n  ')), 2 & n)) {
          const e = t.XpG();
          t.R7$(),
            t.Y8G('jhiTranslate', 'health.indicator.' + e.health.key),
            t.R7$(),
            t.SpI('\n      ', t.lJ4(2, k)[e.health.key] || e.health.key, '\n    ');
        }
      }
      function f(n, l) {
        if (
          (1 & n &&
            (t.EFF(0, '\n              '),
            t.j41(1, 'tr'),
            t.EFF(2, '\n                '),
            t.j41(3, 'td', 12),
            t.EFF(4),
            t.k0s(),
            t.EFF(5, '\n                '),
            t.j41(6, 'td', 12),
            t.EFF(7),
            t.k0s(),
            t.EFF(8, '\n              '),
            t.k0s(),
            t.EFF(9, '\n            ')),
          2 & n)
        ) {
          const e = l.$implicit,
            a = t.XpG(2);
          t.R7$(4), t.JRh(e.key), t.R7$(3), t.JRh(a.readableValue(e.value));
        }
      }
      function v(n, l) {
        if (
          (1 & n &&
            (t.EFF(0, '\n    '),
            t.j41(1, 'div'),
            t.EFF(2, '\n      '),
            t.j41(3, 'h5', 7),
            t.EFF(4, 'Properties'),
            t.k0s(),
            t.EFF(5, '\n\n      '),
            t.j41(6, 'div', 8),
            t.EFF(7, '\n        '),
            t.j41(8, 'table', 9),
            t.EFF(9, '\n          '),
            t.j41(10, 'thead'),
            t.EFF(11, '\n            '),
            t.j41(12, 'tr'),
            t.EFF(13, '\n              '),
            t.j41(14, 'th', 10),
            t.EFF(15, 'Name'),
            t.k0s(),
            t.EFF(16, '\n              '),
            t.j41(17, 'th', 11),
            t.EFF(18, 'Value'),
            t.k0s(),
            t.EFF(19, '\n            '),
            t.k0s(),
            t.EFF(20, '\n          '),
            t.k0s(),
            t.EFF(21, '\n          '),
            t.j41(22, 'tbody'),
            t.EFF(23, '\n            '),
            t.Z7z(24, f, 10, 2, null, null, m),
            t.nI1(26, 'keyvalue'),
            t.k0s(),
            t.EFF(27, '\n        '),
            t.k0s(),
            t.EFF(28, '\n      '),
            t.k0s(),
            t.EFF(29, '\n    '),
            t.k0s(),
            t.EFF(30, '\n  ')),
          2 & n)
        ) {
          const e = t.XpG();
          t.R7$(24), t.Dyx(t.bMT(26, 0, e.health.value.details));
        }
      }
      let b = (() => {
        class n {
          constructor() {
            this.activeModal = (0, t.WQX)(h.Lw);
          }
          readableValue(e) {
            if ('diskSpace' === this.health?.key) {
              const a = e / 1073741824;
              return a > 1 ? `${a.toFixed(2)} GB` : `${(e / 1048576).toFixed(2)} MB`;
            }
            return 'object' == typeof e ? JSON.stringify(e) : String(e);
          }
          dismiss() {
            this.activeModal.dismiss();
          }
          static {
            this.ɵfac = function (a) {
              return new (a || n)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: n,
              selectors: [['jhi-health-modal']],
              decls: 20,
              vars: 2,
              consts: [
                [1, 'modal-header'],
                ['aria-label', 'Close', 'data-dismiss', 'modal', 'type', 'button', 1, 'btn-close', 3, 'click'],
                ['aria-hidden', 'true'],
                [1, 'modal-body', 'pad'],
                [1, 'modal-footer'],
                ['data-dismiss', 'modal', 'type', 'button', 1, 'btn', 'btn-secondary', 'float-start', 3, 'click'],
                ['id', 'showHealthLabel', 1, 'modal-title', 3, 'jhiTranslate'],
                ['jhiTranslate', 'health.details.properties'],
                [1, 'table-responsive'],
                ['aria-describedby', 'showHealthLabel', 1, 'table', 'table-striped'],
                ['scope', 'col', 'jhiTranslate', 'health.details.name', 1, 'text-start'],
                ['scope', 'col', 'jhiTranslate', 'health.details.value', 1, 'text-start'],
                [1, 'text-start'],
              ],
              template: function (a, s) {
                1 & a &&
                  (t.j41(0, 'div', 0),
                  t.EFF(1, '\n  '),
                  t.DNE(2, j, 4, 3),
                  t.j41(3, 'button', 1),
                  t.bIt('click', function () {
                    return s.dismiss();
                  }),
                  t.EFF(4, '\n    '),
                  t.j41(5, 'span', 2),
                  t.EFF(6, '\xa0'),
                  t.k0s(),
                  t.EFF(7, '\n  '),
                  t.k0s(),
                  t.EFF(8, '\n'),
                  t.k0s(),
                  t.EFF(9, '\n\n'),
                  t.j41(10, 'div', 3),
                  t.EFF(11, '\n  '),
                  t.DNE(12, v, 31, 2),
                  t.k0s(),
                  t.EFF(13, '\n\n'),
                  t.j41(14, 'div', 4),
                  t.EFF(15, '\n  '),
                  t.j41(16, 'button', 5),
                  t.bIt('click', function () {
                    return s.dismiss();
                  }),
                  t.EFF(17, 'Done'),
                  t.k0s(),
                  t.EFF(18, '\n'),
                  t.k0s(),
                  t.EFF(19, '\n')),
                  2 & a && (t.R7$(2), t.vxM(s.health ? 2 : -1), t.R7$(10), t.vxM(s.health ? 12 : -1));
              },
              dependencies: [r.A, d.A, F.lG],
              encapsulation: 2,
            });
          }
        }
        return n;
      })();
      var _ = i(60);
      const y = (n, l) => l.key,
        C = () => ({
          diskSpace: 'Disk space',
          mail: 'Email',
          livenessState: 'Liveness state',
          readinessState: 'Readiness state',
          ping: 'Application',
          db: 'Database',
        }),
        T = () => ({ UNKNOWN: 'UNKNOWN', UP: 'UP', OUT_OF_SERVICE: 'OUT_OF_SERVICE', DOWN: 'DOWN' });
      function g(n, l) {
        if (1 & n) {
          const e = t.RV6();
          t.EFF(0, '\n                  '),
            t.j41(1, 'a', 12),
            t.bIt('click', function () {
              t.eBV(e);
              const s = t.XpG().$implicit,
                o = t.XpG(2);
              return t.Njj(o.showHealth({ key: s.key, value: s.value }));
            }),
            t.EFF(2, '\n                    '),
            t.nrm(3, 'fa-icon', 13),
            t.EFF(4, '\n                  '),
            t.k0s(),
            t.EFF(5, '\n                ');
        }
      }
      function H(n, l) {
        if (
          (1 & n &&
            (t.EFF(0, '\n            '),
            t.j41(1, 'tr'),
            t.EFF(2, '\n              '),
            t.j41(3, 'td', 9),
            t.EFF(4),
            t.k0s(),
            t.EFF(5, '\n              '),
            t.j41(6, 'td', 10),
            t.EFF(7, '\n                '),
            t.j41(8, 'span', 11),
            t.EFF(9),
            t.k0s(),
            t.EFF(10, '\n              '),
            t.k0s(),
            t.EFF(11, '\n              '),
            t.j41(12, 'td', 10),
            t.EFF(13, '\n                '),
            t.DNE(14, g, 6, 0),
            t.k0s(),
            t.EFF(15, '\n            '),
            t.k0s(),
            t.EFF(16, '\n          ')),
          2 & n)
        ) {
          let e, a;
          const s = l.$implicit,
            o = t.XpG(2);
          t.R7$(3),
            t.Y8G('jhiTranslate', 'health.indicator.' + s.key),
            t.R7$(),
            t.SpI('\n                ', t.lJ4(6, C)[s.key] || s.key, '\n              '),
            t.R7$(4),
            t.Y8G('ngClass', o.getBadgeClass(s.value.status))(
              'jhiTranslate',
              'health.status.' + (null !== (e = null == s.value ? null : s.value.status) && void 0 !== e ? e : 'UNKNOWN'),
            ),
            t.R7$(),
            t.SpI(
              '\n                  ',
              t.lJ4(7, T)[null !== (a = null == s.value ? null : s.value.status) && void 0 !== a ? a : 'UNKNOWN'],
              '\n                ',
            ),
            t.R7$(5),
            t.vxM(s.value.details ? 14 : -1);
        }
      }
      function R(n, l) {
        if (
          (1 & n &&
            (t.EFF(0, '\n        '),
            t.j41(1, 'tbody'),
            t.EFF(2, '\n          '),
            t.Z7z(3, H, 17, 8, null, null, y),
            t.nI1(5, 'keyvalue'),
            t.k0s(),
            t.EFF(6, '\n      ')),
          2 & n)
        ) {
          const e = t.XpG();
          t.R7$(3), t.Dyx(t.bMT(5, 0, e.health.components));
        }
      }
      let x = (() => {
        class n {
          constructor() {
            (this.modalService = (0, t.WQX)(h.Bq)), (this.healthService = (0, t.WQX)(u));
          }
          ngOnInit() {
            this.refresh();
          }
          getBadgeClass(e) {
            return 'UP' === e ? 'bg-success' : 'bg-danger';
          }
          refresh() {
            this.healthService.checkHealth().subscribe({
              next: e => (this.health = e),
              error: e => {
                503 === e.status && (this.health = e.error);
              },
            });
          }
          showHealth(e) {
            this.modalService.open(b).componentInstance.health = e;
          }
          static {
            this.ɵfac = function (a) {
              return new (a || n)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: n,
              selectors: [['jhi-health']],
              decls: 39,
              vars: 1,
              consts: [
                ['id', 'health-page-heading', 'data-cy', 'healthPageHeading', 'jhiTranslate', 'health.title'],
                [1, 'btn', 'btn-primary', 'float-end', 3, 'click'],
                ['icon', 'sync'],
                ['jhiTranslate', 'health.refresh.button'],
                [1, 'table-responsive'],
                ['id', 'healthCheck', 'aria-describedby', 'health-page-heading', 1, 'table', 'table-striped'],
                ['scope', 'col', 'jhiTranslate', 'health.table.service'],
                ['scope', 'col', 'jhiTranslate', 'health.table.status', 1, 'text-center'],
                ['scope', 'col', 'jhiTranslate', 'health.details.details', 1, 'text-center'],
                [3, 'jhiTranslate'],
                [1, 'text-center'],
                [1, 'badge', 3, 'ngClass', 'jhiTranslate'],
                [1, 'hand', 3, 'click'],
                ['icon', 'eye'],
              ],
              template: function (a, s) {
                1 & a &&
                  (t.j41(0, 'div'),
                  t.EFF(1, '\n  '),
                  t.j41(2, 'h2'),
                  t.EFF(3, '\n    '),
                  t.j41(4, 'span', 0),
                  t.EFF(5, 'Health Checks'),
                  t.k0s(),
                  t.EFF(6, '\n\n    '),
                  t.j41(7, 'button', 1),
                  t.bIt('click', function () {
                    return s.refresh();
                  }),
                  t.EFF(8, '\n      '),
                  t.nrm(9, 'fa-icon', 2),
                  t.EFF(10, ' '),
                  t.j41(11, 'span', 3),
                  t.EFF(12, 'Refresh'),
                  t.k0s(),
                  t.EFF(13, '\n    '),
                  t.k0s(),
                  t.EFF(14, '\n  '),
                  t.k0s(),
                  t.EFF(15, '\n\n  '),
                  t.j41(16, 'div', 4),
                  t.EFF(17, '\n    '),
                  t.j41(18, 'table', 5),
                  t.EFF(19, '\n      '),
                  t.j41(20, 'thead'),
                  t.EFF(21, '\n        '),
                  t.j41(22, 'tr'),
                  t.EFF(23, '\n          '),
                  t.j41(24, 'th', 6),
                  t.EFF(25, 'Service name'),
                  t.k0s(),
                  t.EFF(26, '\n          '),
                  t.j41(27, 'th', 7),
                  t.EFF(28, 'Status'),
                  t.k0s(),
                  t.EFF(29, '\n          '),
                  t.j41(30, 'th', 8),
                  t.EFF(31, 'Details'),
                  t.k0s(),
                  t.EFF(32, '\n        '),
                  t.k0s(),
                  t.EFF(33, '\n      '),
                  t.k0s(),
                  t.EFF(34, '\n      '),
                  t.DNE(35, R, 7, 2),
                  t.k0s(),
                  t.EFF(36, '\n  '),
                  t.k0s(),
                  t.EFF(37, '\n'),
                  t.k0s(),
                  t.EFF(38, '\n')),
                  2 & a && (t.R7$(35), t.vxM(s.health ? 35 : -1));
              },
              dependencies: [r.A, F.YU, _.aY, d.A, F.lG],
              encapsulation: 2,
            });
          }
        }
        return n;
      })();
    },
  },
]);
