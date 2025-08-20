'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [996],
  {
    7996: (m, r, n) => {
      n.r(r), n.d(r, { AuthorityDetailComponent: () => p });
      var t = n(4438),
        F = n(8498),
        l = n(9543),
        E = n(60),
        _ = n(8372),
        c = n(651),
        u = n(8300);
      function h(a, d) {
        if (1 & a) {
          const e = t.RV6();
          t.EFF(0, '\n      '),
            t.j41(1, 'div'),
            t.EFF(2, '\n        '),
            t.j41(3, 'h2', 2),
            t.EFF(4, '\n          '),
            t.j41(5, 'span', 3),
            t.EFF(6, 'Authority'),
            t.k0s(),
            t.EFF(7, '\n        '),
            t.k0s(),
            t.EFF(8, '\n\n        '),
            t.nrm(9, 'hr'),
            t.EFF(10, '\n\n        '),
            t.nrm(11, 'jhi-alert-error'),
            t.EFF(12, '\n\n        '),
            t.nrm(13, 'jhi-alert'),
            t.EFF(14, '\n\n        '),
            t.j41(15, 'dl', 4),
            t.EFF(16, '\n          '),
            t.j41(17, 'dt')(18, 'span', 5),
            t.EFF(19, 'Name'),
            t.k0s()(),
            t.EFF(20, '\n          '),
            t.j41(21, 'dd'),
            t.EFF(22, '\n            '),
            t.j41(23, 'span'),
            t.EFF(24),
            t.k0s(),
            t.EFF(25, '\n          '),
            t.k0s(),
            t.EFF(26, '\n        '),
            t.k0s(),
            t.EFF(27, '\n\n        '),
            t.j41(28, 'button', 6),
            t.bIt('click', function () {
              t.eBV(e);
              const o = t.XpG();
              return t.Njj(o.previousState());
            }),
            t.EFF(29, '\n          '),
            t.nrm(30, 'fa-icon', 7),
            t.EFF(31, '\xa0'),
            t.j41(32, 'span', 8),
            t.EFF(33, 'Back'),
            t.k0s(),
            t.EFF(34, '\n        '),
            t.k0s(),
            t.EFF(35, '\n      '),
            t.k0s(),
            t.EFF(36, '\n    ');
        }
        2 & a && (t.R7$(24), t.JRh(d.name));
      }
      let p = (() => {
        class a {
          constructor() {
            this.authority = (0, t.hFB)(null);
          }
          previousState() {
            window.history.back();
          }
          static {
            this.ɵfac = function (i) {
              return new (i || a)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: a,
              selectors: [['jhi-authority-detail']],
              inputs: { authority: [1, 'authority'] },
              decls: 7,
              vars: 1,
              consts: [
                [1, 'd-flex', 'justify-content-center'],
                [1, 'col-8'],
                ['data-cy', 'authorityDetailsHeading'],
                ['jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.detail.title'],
                [1, 'row-md', 'jh-entity-details'],
                ['jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.name'],
                ['type', 'submit', 'data-cy', 'entityDetailsBackButton', 1, 'btn', 'btn-info', 3, 'click'],
                ['icon', 'arrow-left'],
                ['jhiTranslate', 'entity.action.back'],
              ],
              template: function (i, o) {
                if (
                  (1 & i &&
                    (t.j41(0, 'div', 0),
                    t.EFF(1, '\n  '),
                    t.j41(2, 'div', 1),
                    t.EFF(3, '\n    '),
                    t.DNE(4, h, 37, 1),
                    t.k0s(),
                    t.EFF(5, '\n'),
                    t.k0s(),
                    t.EFF(6, '\n')),
                  2 & i)
                ) {
                  let s;
                  t.R7$(4), t.vxM((s = o.authority()) ? 4 : -1, s);
                }
              },
              dependencies: [l.A, E.aY, _.C, c.U, u.A, F.iI],
              encapsulation: 2,
            });
          }
        }
        return a;
      })();
    },
  },
]);
