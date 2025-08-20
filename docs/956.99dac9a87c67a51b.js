'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [956],
  {
    7956: (f, i, r) => {
      r.r(i), r.d(i, { default: () => h });
      var e = r(4438),
        n = r(9417),
        s = r(8498),
        F = r(9543),
        m = r(1723),
        u = r(4573),
        c = r(8300),
        E = r(8018);
      const d = ['username'];
      function g(a, p) {
        1 & a &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 19),
          e.EFF(2, '\n          '),
          e.j41(3, 'strong'),
          e.EFF(4, 'Failed to sign in!'),
          e.k0s(),
          e.EFF(5, ' Please check your credentials and try again.\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      let h = (() => {
        class a {
          constructor() {
            (this.username = e.ebz.required('username')),
              (this.authenticationError = (0, e.vPA)(!1)),
              (this.loginForm = new n.gE({
                username: new n.MJ('', { nonNullable: !0, validators: [n.k0.required] }),
                password: new n.MJ('', { nonNullable: !0, validators: [n.k0.required] }),
                rememberMe: new n.MJ(!1, { nonNullable: !0, validators: [n.k0.required] }),
              })),
              (this.accountService = (0, e.WQX)(u.D)),
              (this.loginService = (0, e.WQX)(m.H)),
              (this.router = (0, e.WQX)(s.Ix));
          }
          ngOnInit() {
            this.accountService.identity().subscribe(() => {
              this.accountService.isAuthenticated() && this.router.navigate(['']);
            });
          }
          ngAfterViewInit() {
            this.username().nativeElement.focus();
          }
          login() {
            this.loginService.login(this.loginForm.getRawValue()).subscribe({
              next: () => {
                this.authenticationError.set(!1), this.router.getCurrentNavigation() || this.router.navigate(['']);
              },
              error: () => this.authenticationError.set(!0),
            });
          }
          static {
            this.ɵfac = function (t) {
              return new (t || a)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: a,
              selectors: [['jhi-login']],
              viewQuery: function (t, o) {
                1 & t && e.wEZ(o.username, d, 5), 2 & t && e.NyB();
              },
              decls: 63,
              vars: 8,
              consts: [
                [1, 'd-flex', 'justify-content-center'],
                [1, 'col-lg-6', 'col-md-8', 'col-sm-10'],
                ['data-cy', 'loginTitle', 'jhiTranslate', 'login.title'],
                [1, 'form', 3, 'ngSubmit', 'formGroup'],
                [1, 'mb-3'],
                ['for', 'username', 'jhiTranslate', 'global.form.username.label', 1, 'username-label'],
                [
                  'type',
                  'text',
                  'name',
                  'username',
                  'id',
                  'username',
                  'formControlName',
                  'username',
                  'data-cy',
                  'username',
                  1,
                  'form-control',
                  3,
                  'placeholder',
                ],
                ['for', 'password', 'jhiTranslate', 'login.form.password'],
                [
                  'type',
                  'password',
                  'name',
                  'password',
                  'id',
                  'password',
                  'formControlName',
                  'password',
                  'data-cy',
                  'password',
                  1,
                  'form-control',
                  3,
                  'placeholder',
                ],
                [1, 'form-check'],
                ['for', 'rememberMe', 1, 'form-check-label'],
                ['type', 'checkbox', 'name', 'rememberMe', 'id', 'rememberMe', 'formControlName', 'rememberMe', 1, 'form-check-input'],
                ['jhiTranslate', 'login.form.rememberme'],
                ['type', 'submit', 'data-cy', 'submit', 'jhiTranslate', 'login.form.button', 1, 'btn', 'btn-primary'],
                [1, 'mt-3', 'alert', 'alert-warning'],
                [
                  'routerLink',
                  '/account/reset/request',
                  'data-cy',
                  'forgetYourPasswordSelector',
                  'jhiTranslate',
                  'login.password.forgot',
                  1,
                  'alert-link',
                ],
                [1, 'alert', 'alert-warning'],
                ['jhiTranslate', 'global.messages.info.register.noaccount'],
                ['routerLink', '/account/register', 'jhiTranslate', 'global.messages.info.register.link', 1, 'alert-link'],
                ['data-cy', 'loginError', 'jhiTranslate', 'login.messages.error.authentication', 1, 'alert', 'alert-danger'],
              ],
              template: function (t, o) {
                1 & t &&
                  (e.j41(0, 'div'),
                  e.EFF(1, '\n  '),
                  e.j41(2, 'div', 0),
                  e.EFF(3, '\n    '),
                  e.j41(4, 'div', 1),
                  e.EFF(5, '\n      '),
                  e.j41(6, 'h1', 2),
                  e.EFF(7, 'Sign in'),
                  e.k0s(),
                  e.EFF(8, '\n      '),
                  e.DNE(9, g, 7, 0),
                  e.j41(10, 'form', 3),
                  e.bIt('ngSubmit', function () {
                    return o.login();
                  }),
                  e.EFF(11, '\n        '),
                  e.j41(12, 'div', 4),
                  e.EFF(13, '\n          '),
                  e.j41(14, 'label', 5),
                  e.EFF(15, 'Username'),
                  e.k0s(),
                  e.EFF(16, '\n          '),
                  e.nrm(17, 'input', 6),
                  e.nI1(18, 'translate'),
                  e.EFF(19, '\n        '),
                  e.k0s(),
                  e.EFF(20, '\n\n        '),
                  e.j41(21, 'div', 4),
                  e.EFF(22, '\n          '),
                  e.j41(23, 'label', 7),
                  e.EFF(24, 'Password'),
                  e.k0s(),
                  e.EFF(25, '\n          '),
                  e.nrm(26, 'input', 8),
                  e.nI1(27, 'translate'),
                  e.EFF(28, '\n        '),
                  e.k0s(),
                  e.EFF(29, '\n\n        '),
                  e.j41(30, 'div', 9),
                  e.EFF(31, '\n          '),
                  e.j41(32, 'label', 10),
                  e.EFF(33, '\n            '),
                  e.nrm(34, 'input', 11),
                  e.EFF(35, '\n            '),
                  e.j41(36, 'span', 12),
                  e.EFF(37, 'Remember me'),
                  e.k0s(),
                  e.EFF(38, '\n          '),
                  e.k0s(),
                  e.EFF(39, '\n        '),
                  e.k0s(),
                  e.EFF(40, '\n\n        '),
                  e.j41(41, 'button', 13),
                  e.EFF(42, 'Sign in'),
                  e.k0s(),
                  e.EFF(43, '\n      '),
                  e.k0s(),
                  e.EFF(44, '\n      '),
                  e.j41(45, 'div', 14),
                  e.EFF(46, '\n        '),
                  e.j41(47, 'a', 15),
                  e.EFF(48, 'Did you forget your password?'),
                  e.k0s(),
                  e.EFF(49, '\n      '),
                  e.k0s(),
                  e.EFF(50, '\n\n      '),
                  e.j41(51, 'div', 16),
                  e.EFF(52, '\n        '),
                  e.j41(53, 'span', 17),
                  e.EFF(54, "You don't have an account yet?"),
                  e.k0s(),
                  e.EFF(55, '\n        '),
                  e.j41(56, 'a', 18),
                  e.EFF(57, 'Register a new account'),
                  e.k0s(),
                  e.EFF(58, '\n      '),
                  e.k0s(),
                  e.EFF(59, '\n    '),
                  e.k0s(),
                  e.EFF(60, '\n  '),
                  e.k0s(),
                  e.EFF(61, '\n'),
                  e.k0s(),
                  e.EFF(62, '\n')),
                  2 & t &&
                    (e.R7$(9),
                    e.vxM(o.authenticationError() ? 9 : -1),
                    e.R7$(),
                    e.Y8G('formGroup', o.loginForm),
                    e.R7$(7),
                    e.FS9('placeholder', e.bMT(18, 4, 'global.form.username.placeholder')),
                    e.R7$(9),
                    e.FS9('placeholder', e.bMT(27, 6, 'login.form.password.placeholder')));
              },
              dependencies: [F.A, c.A, E.D9, n.YN, n.qT, n.me, n.Zm, n.BC, n.cb, n.X1, n.j4, n.JD, s.iI, s.Wk],
              encapsulation: 2,
            });
          }
        }
        return a;
      })();
    },
  },
]);
