'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [496],
  {
    2496: (_, a, e) => {
      e.r(a), e.d(a, { default: () => g });
      var r = e(4438),
        o = e(8498),
        E = e(8018),
        l = e(9543),
        c = e(8300);
      function h(s, F) {
        1 & s && (r.EFF(0, '\n        '), r.j41(1, 'div', 5), r.EFF(2), r.k0s(), r.EFF(3, '\n      ')), 2 & s && (r.R7$(2), r.JRh(F));
      }
      let g = (() => {
        class s {
          constructor() {
            (this.errorMessage = (0, r.vPA)(void 0)), (this.translateService = (0, r.WQX)(E.c$)), (this.route = (0, r.WQX)(o.nX));
          }
          ngOnInit() {
            this.route.data.subscribe(t => {
              t.errorMessage &&
                ((this.errorKey = t.errorMessage),
                this.getErrorMessageTranslation(),
                (this.langChangeSubscription = this.translateService.onLangChange.subscribe(() => this.getErrorMessageTranslation())));
            });
          }
          ngOnDestroy() {
            this.langChangeSubscription && this.langChangeSubscription.unsubscribe();
          }
          getErrorMessageTranslation() {
            this.errorMessage.set(''),
              this.errorKey &&
                this.translateService.get(this.errorKey).subscribe(t => {
                  this.errorMessage.set(t);
                });
          }
          static {
            this.ɵfac = function (n) {
              return new (n || s)();
            };
          }
          static {
            this.ɵcmp = r.VBU({
              type: s,
              selectors: [['jhi-error']],
              decls: 18,
              vars: 1,
              consts: [
                [1, 'row'],
                [1, 'col-md-4'],
                [1, 'hipster', 'img-fluid', 'rounded'],
                [1, 'col-md-8'],
                ['jhiTranslate', 'error.title'],
                [1, 'alert', 'alert-danger'],
              ],
              template: function (n, d) {
                if (
                  (1 & n &&
                    (r.j41(0, 'div'),
                    r.EFF(1, '\n  '),
                    r.j41(2, 'div', 0),
                    r.EFF(3, '\n    '),
                    r.j41(4, 'div', 1),
                    r.EFF(5, '\n      '),
                    r.nrm(6, 'span', 2),
                    r.EFF(7, '\n    '),
                    r.k0s(),
                    r.EFF(8, '\n\n    '),
                    r.j41(9, 'div', 3),
                    r.EFF(10, '\n      '),
                    r.j41(11, 'h1', 4),
                    r.EFF(12, 'Error page!'),
                    r.k0s(),
                    r.EFF(13, '\n\n      '),
                    r.DNE(14, h, 4, 1),
                    r.k0s(),
                    r.EFF(15, '\n  '),
                    r.k0s(),
                    r.EFF(16, '\n'),
                    r.k0s(),
                    r.EFF(17, '\n')),
                  2 & n)
                ) {
                  let i;
                  r.R7$(14), r.vxM((i = d.errorMessage()) ? 14 : -1, i);
                }
              },
              dependencies: [l.A, c.A],
              encapsulation: 2,
            });
          }
        }
        return s;
      })();
    },
  },
]);
