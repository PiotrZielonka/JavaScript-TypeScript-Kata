'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [827],
  {
    5827: (Cn, _, l) => {
      l.r(_), l.d(_, { default: () => En });
      var e = l(4438),
        d = l(8498),
        j = l(1397),
        c = l(9543),
        p = l(1626),
        g = l(9601);
      let b = (() => {
        class t {
          constructor() {
            (this.http = (0, e.WQX)(p.Qq)), (this.applicationConfigService = (0, e.WQX)(g.a));
          }
          get(n) {
            return this.http.get(this.applicationConfigService.getEndpointFor('api/activate'), { params: new p.Nl().set('key', n) });
          }
          static {
            this.ɵfac = function (s) {
              return new (s || t)();
            };
          }
          static {
            this.ɵprov = e.jDH({ token: t, factory: t.ɵfac, providedIn: 'root' });
          }
        }
        return t;
      })();
      var u = l(8300);
      function R(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 3),
          e.EFF(2, '\n          '),
          e.j41(3, 'span', 4)(4, 'strong'),
          e.EFF(5, 'Your user account has been activated.'),
          e.k0s(),
          e.EFF(6, ' Please '),
          e.k0s(),
          e.EFF(7, '\n          '),
          e.j41(8, 'a', 5),
          e.EFF(9, 'sign in'),
          e.k0s(),
          e.EFF(10, '.\n        '),
          e.k0s(),
          e.EFF(11, '\n      '));
      }
      function k(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 6),
          e.EFF(2, '\n          '),
          e.j41(3, 'strong'),
          e.EFF(4, 'Your user could not be activated.'),
          e.k0s(),
          e.EFF(5, ' Please use the registration form to sign up.\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      const T = {
        path: 'activate',
        component: (() => {
          class t {
            constructor() {
              (this.error = (0, e.vPA)(!1)),
                (this.success = (0, e.vPA)(!1)),
                (this.activateService = (0, e.WQX)(b)),
                (this.route = (0, e.WQX)(d.nX));
            }
            ngOnInit() {
              this.route.queryParams
                .pipe((0, j.Z)(n => this.activateService.get(n.key)))
                .subscribe({ next: () => this.success.set(!0), error: () => this.error.set(!0) });
            }
            static {
              this.ɵfac = function (s) {
                return new (s || t)();
              };
            }
            static {
              this.ɵcmp = e.VBU({
                type: t,
                selectors: [['jhi-activate']],
                decls: 14,
                vars: 2,
                consts: [
                  [1, 'd-flex', 'justify-content-center'],
                  [1, 'col-md-8'],
                  ['jhiTranslate', 'activate.title'],
                  [1, 'alert', 'alert-success'],
                  ['jhiTranslate', 'activate.messages.success'],
                  ['routerLink', '/login', 'jhiTranslate', 'global.messages.info.authenticated.link', 1, 'alert-link'],
                  ['jhiTranslate', 'activate.messages.error', 1, 'alert', 'alert-danger'],
                ],
                template: function (s, r) {
                  1 & s &&
                    (e.j41(0, 'div'),
                    e.EFF(1, '\n  '),
                    e.j41(2, 'div', 0),
                    e.EFF(3, '\n    '),
                    e.j41(4, 'div', 1),
                    e.EFF(5, '\n      '),
                    e.j41(6, 'h1', 2),
                    e.EFF(7, 'Activation'),
                    e.k0s(),
                    e.EFF(8, '\n      '),
                    e.DNE(9, R, 12, 0)(10, k, 7, 0),
                    e.k0s(),
                    e.EFF(11, '\n  '),
                    e.k0s(),
                    e.EFF(12, '\n'),
                    e.k0s(),
                    e.EFF(13, '\n')),
                    2 & s && (e.R7$(9), e.vxM(r.success() ? 9 : -1), e.R7$(), e.vxM(r.error() ? 10 : -1));
                },
                dependencies: [c.A, u.A, d.iI, d.Wk],
                encapsulation: 2,
              });
            }
          }
          return t;
        })(),
        title: 'activate.title',
      };
      var v = l(5442),
        o = l(9417),
        w = l(4573);
      let P = (() => {
          class t {
            constructor() {
              (this.http = (0, e.WQX)(p.Qq)), (this.applicationConfigService = (0, e.WQX)(g.a));
            }
            save(n, s) {
              return this.http.post(this.applicationConfigService.getEndpointFor('api/account/change-password'), {
                currentPassword: s,
                newPassword: n,
              });
            }
            static {
              this.ɵfac = function (s) {
                return new (s || t)();
              };
            }
            static {
              this.ɵprov = e.jDH({ token: t, factory: t.ɵfac, providedIn: 'root' });
            }
          }
          return t;
        })(),
        E = (() => {
          class t {
            constructor() {
              (this.passwordToCheck = (0, e.hFB)('')),
                (this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0']),
                (this.renderer = (0, e.WQX)(e.sFG)),
                (this.elementRef = (0, e.WQX)(e.aKT)),
                (0, e.QZP)(() => {
                  const n = this.passwordToCheck();
                  if (n) {
                    const s = this.getColor(this.measureStrength(n)),
                      r = this.elementRef.nativeElement;
                    r.className && this.renderer.removeClass(r, r.className);
                    const i = r.getElementsByTagName('li');
                    for (let F = 0; F < i.length; F++) this.renderer.setStyle(i[F], 'backgroundColor', F < s.idx ? s.color : '#DDD');
                  }
                });
            }
            measureStrength(n) {
              let s = 0;
              const h = [/[a-z]+/.test(n), /[A-Z]+/.test(n), /\d+/.test(n), /[$-/:-?{-~!"^_`[\]]/g.test(n)].filter(wn => wn).length;
              return (
                (s += 2 * n.length + (n.length >= 10 ? 1 : 0)),
                (s += 10 * h),
                (s = n.length <= 6 ? Math.min(s, 10) : s),
                (s = 1 === h ? Math.min(s, 10) : s),
                (s = 2 === h ? Math.min(s, 20) : s),
                (s = 3 === h ? Math.min(s, 40) : s),
                s
              );
            }
            getColor(n) {
              let s = 0;
              return n > 10 && (s = n <= 20 ? 1 : n <= 30 ? 2 : n <= 40 ? 3 : 4), { idx: s + 1, color: this.colors[s] };
            }
            static {
              this.ɵfac = function (s) {
                return new (s || t)();
              };
            }
            static {
              this.ɵcmp = e.VBU({
                type: t,
                selectors: [['jhi-password-strength-bar']],
                inputs: { passwordToCheck: [1, 'passwordToCheck'] },
                decls: 19,
                vars: 0,
                consts: [
                  ['id', 'strength'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.strength'],
                  ['id', 'strengthBar'],
                  [1, 'point'],
                ],
                template: function (s, r) {
                  1 & s &&
                    (e.j41(0, 'div', 0),
                    e.EFF(1, '\n  '),
                    e.j41(2, 'small', 1),
                    e.EFF(3, 'Password strength:'),
                    e.k0s(),
                    e.EFF(4, '\n  '),
                    e.j41(5, 'ul', 2),
                    e.EFF(6, '\n    '),
                    e.nrm(7, 'li', 3),
                    e.EFF(8, '\n    '),
                    e.nrm(9, 'li', 3),
                    e.EFF(10, '\n    '),
                    e.nrm(11, 'li', 3),
                    e.EFF(12, '\n    '),
                    e.nrm(13, 'li', 3),
                    e.EFF(14, '\n    '),
                    e.nrm(15, 'li', 3),
                    e.EFF(16, '\n  '),
                    e.k0s(),
                    e.EFF(17, '\n'),
                    e.k0s(),
                    e.EFF(18, '\n'));
                },
                dependencies: [c.A, u.A],
                styles: [
                  'ul#strength[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0 0 0 15px;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]{background:#ddd;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:20px}.point[_ngcontent-%COMP%]:last-child{margin:0!important}',
                ],
              });
            }
          }
          return t;
        })();
      var y = l(177),
        f = l(8018);
      const $ = t => ({ username: t });
      function M(t, a) {
        1 & t &&
          (e.EFF(0, '\n          '), e.j41(1, 'div', 13)(2, 'strong'), e.EFF(3, 'Password changed!'), e.k0s()(), e.EFF(4, '\n        '));
      }
      function N(t, a) {
        1 & t &&
          (e.EFF(0, '\n          '),
          e.j41(1, 'div', 14),
          e.EFF(2, '\n            '),
          e.j41(3, 'strong'),
          e.EFF(4, 'An error has occurred!'),
          e.k0s(),
          e.EFF(5, ' The password could not be changed.\n          '),
          e.k0s(),
          e.EFF(6, '\n        '));
      }
      function S(t, a) {
        1 & t &&
          (e.EFF(0, '\n          '),
          e.j41(1, 'div', 15),
          e.EFF(2, '\n            The password and its confirmation do not match!\n          '),
          e.k0s(),
          e.EFF(3, '\n        '));
      }
      function q(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 16),
          e.EFF(2, 'Your password is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Y(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, q, 4, 0),
            e.k0s(),
            e.EFF(4, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(22);
          e.R7$(3), e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1);
        }
      }
      function D(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 16),
          e.EFF(2, 'Your password is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function A(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 17),
          e.EFF(2, 'Your password is required to be at least 4 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function X(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 18),
          e.EFF(2, 'Your password cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function I(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, D, 4, 0)(4, A, 4, 0)(5, X, 4, 0),
            e.k0s(),
            e.EFF(6, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(34);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function G(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 19),
          e.EFF(2, 'Your confirmation password is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function L(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 20),
          e.EFF(2, 'Your confirmation password is required to be at least 4 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Q(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 21),
          e.EFF(2, 'Your confirmation password cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function V(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, G, 4, 0)(4, L, 4, 0)(5, Q, 4, 0),
            e.k0s(),
            e.EFF(6, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(48);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function B(t, a) {
        if (1 & t) {
          const n = e.RV6();
          e.EFF(0, '\n      '),
            e.j41(1, 'div', 1),
            e.EFF(2, '\n        '),
            e.j41(3, 'h2', 2),
            e.EFF(4, '\n          Password for ['),
            e.j41(5, 'strong'),
            e.EFF(6),
            e.k0s(),
            e.EFF(7, ']\n        '),
            e.k0s(),
            e.EFF(8, '\n\n        '),
            e.DNE(9, M, 5, 0)(10, N, 7, 0)(11, S, 4, 0),
            e.j41(12, 'form', 3),
            e.bIt('ngSubmit', function () {
              e.eBV(n);
              const r = e.XpG();
              return e.Njj(r.changePassword());
            }),
            e.EFF(13, '\n          '),
            e.j41(14, 'div', 4),
            e.EFF(15, '\n            '),
            e.j41(16, 'label', 5),
            e.EFF(17, 'Current password'),
            e.k0s(),
            e.EFF(18, '\n            '),
            e.nrm(19, 'input', 6),
            e.nI1(20, 'translate'),
            e.EFF(21, '\n\n            '),
            e.SS7(22),
            e.EFF(23, '\n            '),
            e.DNE(24, Y, 5, 1),
            e.k0s(),
            e.EFF(25, '\n\n          '),
            e.j41(26, 'div', 4),
            e.EFF(27, '\n            '),
            e.j41(28, 'label', 7),
            e.EFF(29, 'New password'),
            e.k0s(),
            e.EFF(30, '\n            '),
            e.nrm(31, 'input', 8),
            e.nI1(32, 'translate'),
            e.EFF(33, '\n\n            '),
            e.SS7(34),
            e.EFF(35, '\n            '),
            e.DNE(36, I, 7, 3),
            e.nrm(37, 'jhi-password-strength-bar', 9),
            e.EFF(38, '\n          '),
            e.k0s(),
            e.EFF(39, '\n\n          '),
            e.j41(40, 'div', 4),
            e.EFF(41, '\n            '),
            e.j41(42, 'label', 10),
            e.EFF(43, 'New password confirmation'),
            e.k0s(),
            e.EFF(44, '\n            '),
            e.nrm(45, 'input', 11),
            e.nI1(46, 'translate'),
            e.EFF(47, '\n\n            '),
            e.SS7(48),
            e.EFF(49, '\n            '),
            e.DNE(50, V, 7, 3),
            e.k0s(),
            e.EFF(51, '\n\n          '),
            e.j41(52, 'button', 12),
            e.EFF(53, '\n            Save\n          '),
            e.k0s(),
            e.EFF(54, '\n        '),
            e.k0s(),
            e.EFF(55, '\n      '),
            e.k0s(),
            e.EFF(56, '\n    ');
        }
        if (2 & t) {
          const n = a,
            s = e.XpG();
          e.R7$(3),
            e.Y8G('translateValues', e.eq3(23, $, n.login)),
            e.R7$(3),
            e.JRh(n.login),
            e.R7$(3),
            e.vxM(s.success() ? 9 : -1),
            e.R7$(),
            e.vxM(s.error() ? 10 : -1),
            e.R7$(),
            e.vxM(s.doNotMatch() ? 11 : -1),
            e.R7$(),
            e.Y8G('formGroup', s.passwordForm),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(20, 14, 'global.form.currentpassword.placeholder')),
            e.R7$(3);
          const r = e.bH3(s.passwordForm.get('currentPassword'));
          e.R7$(2),
            e.vxM(r.invalid && (r.dirty || r.touched) ? 24 : -1),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(32, 17, 'global.form.newpassword.placeholder')),
            e.R7$(3);
          const i = e.bH3(s.passwordForm.get('newPassword'));
          e.R7$(2),
            e.vxM(i.invalid && (i.dirty || i.touched) ? 36 : -1),
            e.R7$(),
            e.Y8G('passwordToCheck', i.value),
            e.R7$(8),
            e.FS9('placeholder', e.bMT(46, 20, 'global.form.confirmpassword.placeholder')),
            e.R7$(3);
          const F = e.bH3(s.passwordForm.get('confirmPassword'));
          e.R7$(2), e.vxM(F.invalid && (F.dirty || F.touched) ? 50 : -1), e.R7$(2), e.Y8G('disabled', s.passwordForm.invalid);
        }
      }
      const W = {
        path: 'password',
        component: (() => {
          class t {
            constructor() {
              (this.doNotMatch = (0, e.vPA)(!1)),
                (this.error = (0, e.vPA)(!1)),
                (this.success = (0, e.vPA)(!1)),
                (this.passwordForm = new o.gE({
                  currentPassword: new o.MJ('', { nonNullable: !0, validators: o.k0.required }),
                  newPassword: new o.MJ('', { nonNullable: !0, validators: [o.k0.required, o.k0.minLength(4), o.k0.maxLength(50)] }),
                  confirmPassword: new o.MJ('', { nonNullable: !0, validators: [o.k0.required, o.k0.minLength(4), o.k0.maxLength(50)] }),
                })),
                (this.passwordService = (0, e.WQX)(P)),
                (this.accountService = (0, e.WQX)(w.D));
            }
            ngOnInit() {
              this.account$ = this.accountService.identity();
            }
            changePassword() {
              this.error.set(!1), this.success.set(!1), this.doNotMatch.set(!1);
              const { newPassword: n, confirmPassword: s, currentPassword: r } = this.passwordForm.getRawValue();
              n !== s
                ? this.doNotMatch.set(!0)
                : this.passwordService.save(n, r).subscribe({ next: () => this.success.set(!0), error: () => this.error.set(!0) });
            }
            static {
              this.ɵfac = function (s) {
                return new (s || t)();
              };
            }
            static {
              this.ɵcmp = e.VBU({
                type: t,
                selectors: [['jhi-password']],
                decls: 8,
                vars: 3,
                consts: [
                  [1, 'd-flex', 'justify-content-center'],
                  [1, 'col-md-8'],
                  ['jhiTranslate', 'password.title', 3, 'translateValues'],
                  ['name', 'form', 3, 'ngSubmit', 'formGroup'],
                  [1, 'mb-3'],
                  ['for', 'currentPassword', 'jhiTranslate', 'global.form.currentpassword.label', 1, 'form-label'],
                  [
                    'type',
                    'password',
                    'id',
                    'currentPassword',
                    'name',
                    'currentPassword',
                    'formControlName',
                    'currentPassword',
                    'data-cy',
                    'currentPassword',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  ['for', 'newPassword', 'jhiTranslate', 'global.form.newpassword.label', 1, 'form-label'],
                  [
                    'type',
                    'password',
                    'id',
                    'newPassword',
                    'name',
                    'newPassword',
                    'formControlName',
                    'newPassword',
                    'data-cy',
                    'newPassword',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  [3, 'passwordToCheck'],
                  ['for', 'confirmPassword', 'jhiTranslate', 'global.form.confirmpassword.label', 1, 'form-label'],
                  [
                    'type',
                    'password',
                    'id',
                    'confirmPassword',
                    'name',
                    'confirmPassword',
                    'formControlName',
                    'confirmPassword',
                    'data-cy',
                    'confirmPassword',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  ['type', 'submit', 'data-cy', 'submit', 'jhiTranslate', 'password.form.button', 1, 'btn', 'btn-primary', 3, 'disabled'],
                  ['jhiTranslate', 'password.messages.success', 1, 'alert', 'alert-success'],
                  ['jhiTranslate', 'password.messages.error', 1, 'alert', 'alert-danger'],
                  ['jhiTranslate', 'global.messages.error.dontmatch', 1, 'alert', 'alert-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.maxlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.maxlength', 1, 'form-text', 'text-danger'],
                ],
                template: function (s, r) {
                  if (
                    (1 & s &&
                      (e.j41(0, 'div'),
                      e.EFF(1, '\n  '),
                      e.j41(2, 'div', 0),
                      e.EFF(3, '\n    '),
                      e.DNE(4, B, 57, 25),
                      e.nI1(5, 'async'),
                      e.k0s(),
                      e.EFF(6, '\n'),
                      e.k0s(),
                      e.EFF(7, '\n')),
                    2 & s)
                  ) {
                    let i;
                    e.R7$(4), e.vxM((i = e.bMT(5, 1, r.account$)) ? 4 : -1, i);
                  }
                },
                dependencies: [c.A, u.A, y.Jj, f.D9, o.YN, o.qT, o.me, o.BC, o.cb, o.X1, o.j4, o.JD, E],
                encapsulation: 2,
              });
            }
          }
          return t;
        })(),
        title: 'global.menu.account.password',
        canActivate: [v.y],
      };
      let J = (() => {
        class t {
          constructor() {
            (this.http = (0, e.WQX)(p.Qq)), (this.applicationConfigService = (0, e.WQX)(g.a));
          }
          save(n, s) {
            return this.http.post(this.applicationConfigService.getEndpointFor('api/account/reset-password/finish'), {
              key: n,
              newPassword: s,
            });
          }
          static {
            this.ɵfac = function (s) {
              return new (s || t)();
            };
          }
          static {
            this.ɵprov = e.jDH({ token: t, factory: t.ɵfac, providedIn: 'root' });
          }
        }
        return t;
      })();
      const U = ['newPassword'];
      function H(t, a) {
        1 & t && (e.EFF(0, '\n        '), e.j41(1, 'div', 3), e.EFF(2, 'The reset key is missing.'), e.k0s(), e.EFF(3, '\n      '));
      }
      function z(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 4),
          e.EFF(2, '\n          '),
          e.j41(3, 'span', 5),
          e.EFF(4, 'Choose a new password'),
          e.k0s(),
          e.EFF(5, '\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      function K(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 6),
          e.EFF(2, '\n          '),
          e.j41(3, 'span', 7),
          e.EFF(4, "Your password couldn't be reset. Remember a password request is only valid for 24 hours."),
          e.k0s(),
          e.EFF(5, '\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      function Z(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 8),
          e.EFF(2, '\n          '),
          e.j41(3, 'span', 9)(4, 'strong'),
          e.EFF(5, 'Your password has been reset.'),
          e.k0s(),
          e.EFF(6, ' Please '),
          e.k0s(),
          e.EFF(7, '\n          '),
          e.j41(8, 'a', 10),
          e.EFF(9, 'sign in'),
          e.k0s(),
          e.EFF(10, '.\n        '),
          e.k0s(),
          e.EFF(11, '\n      '));
      }
      function O(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 11),
          e.EFF(2, 'The password and its confirmation do not match!'),
          e.k0s(),
          e.EFF(3, '\n      '));
      }
      function ee(t, a) {
        1 & t &&
          (e.EFF(0, '\n                    '),
          e.j41(1, 'small', 20),
          e.EFF(2, 'Your password is required.'),
          e.k0s(),
          e.EFF(3, '\n                  '));
      }
      function ne(t, a) {
        1 & t &&
          (e.EFF(0, '\n                    '),
          e.j41(1, 'small', 21),
          e.EFF(2, 'Your password is required to be at least 4 characters.'),
          e.k0s(),
          e.EFF(3, '\n                  '));
      }
      function te(t, a) {
        1 & t &&
          (e.EFF(0, '\n                    '),
          e.j41(1, 'small', 22),
          e.EFF(2, 'Your password cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                  '));
      }
      function se(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n                '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                  '),
            e.DNE(3, ee, 4, 0)(4, ne, 4, 0)(5, te, 4, 0),
            e.k0s(),
            e.EFF(6, '\n              ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(13);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function oe(t, a) {
        1 & t &&
          (e.EFF(0, '\n                    '),
          e.j41(1, 'small', 23),
          e.EFF(2, 'Your confirmation password is required.'),
          e.k0s(),
          e.EFF(3, '\n                  '));
      }
      function ae(t, a) {
        1 & t &&
          (e.EFF(0, '\n                    '),
          e.j41(1, 'small', 24),
          e.EFF(2, 'Your confirmation password is required to be at least 4 characters.'),
          e.k0s(),
          e.EFF(3, '\n                  '));
      }
      function re(t, a) {
        1 & t &&
          (e.EFF(0, '\n                    '),
          e.j41(1, 'small', 25),
          e.EFF(2, 'Your confirmation password cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                  '));
      }
      function ie(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n                '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                  '),
            e.DNE(3, oe, 4, 0)(4, ae, 4, 0)(5, re, 4, 0),
            e.k0s(),
            e.EFF(6, '\n              ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(27);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function le(t, a) {
        if (1 & t) {
          const n = e.RV6();
          e.EFF(0, '\n        '),
            e.j41(1, 'div'),
            e.EFF(2, '\n          '),
            e.j41(3, 'form', 12),
            e.bIt('ngSubmit', function () {
              e.eBV(n);
              const r = e.XpG();
              return e.Njj(r.finishReset());
            }),
            e.EFF(4, '\n            '),
            e.j41(5, 'div', 13),
            e.EFF(6, '\n              '),
            e.j41(7, 'label', 14),
            e.EFF(8, 'New password'),
            e.k0s(),
            e.EFF(9, '\n              '),
            e.nrm(10, 'input', 15),
            e.nI1(11, 'translate'),
            e.EFF(12, '\n\n              '),
            e.SS7(13),
            e.EFF(14, '\n              '),
            e.DNE(15, se, 7, 3),
            e.nrm(16, 'jhi-password-strength-bar', 16),
            e.EFF(17, '\n            '),
            e.k0s(),
            e.EFF(18, '\n\n            '),
            e.j41(19, 'div', 13),
            e.EFF(20, '\n              '),
            e.j41(21, 'label', 17),
            e.EFF(22, 'New password confirmation'),
            e.k0s(),
            e.EFF(23, '\n              '),
            e.nrm(24, 'input', 18),
            e.nI1(25, 'translate'),
            e.EFF(26, '\n\n              '),
            e.SS7(27),
            e.EFF(28, '\n              '),
            e.DNE(29, ie, 7, 3),
            e.k0s(),
            e.EFF(30, '\n\n            '),
            e.j41(31, 'button', 19),
            e.EFF(32, '\n              Validate new password\n            '),
            e.k0s(),
            e.EFF(33, '\n          '),
            e.k0s(),
            e.EFF(34, '\n        '),
            e.k0s(),
            e.EFF(35, '\n      ');
        }
        if (2 & t) {
          const n = e.XpG();
          e.R7$(3),
            e.Y8G('formGroup', n.passwordForm),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(11, 7, 'global.form.newpassword.placeholder')),
            e.R7$(3);
          const s = e.bH3(n.passwordForm.get('newPassword'));
          e.R7$(2),
            e.vxM(s.invalid && (s.dirty || s.touched) ? 15 : -1),
            e.R7$(),
            e.Y8G('passwordToCheck', s.value),
            e.R7$(8),
            e.FS9('placeholder', e.bMT(25, 10, 'global.form.confirmpassword.placeholder')),
            e.R7$(3);
          const r = e.bH3(n.passwordForm.get('confirmPassword'));
          e.R7$(2), e.vxM(r.invalid && (r.dirty || r.touched) ? 29 : -1), e.R7$(2), e.Y8G('disabled', n.passwordForm.invalid);
        }
      }
      const Fe = {
        path: 'reset/finish',
        component: (() => {
          class t {
            constructor() {
              (this.newPassword = e.ebz.required('newPassword')),
                (this.initialized = (0, e.vPA)(!1)),
                (this.doNotMatch = (0, e.vPA)(!1)),
                (this.error = (0, e.vPA)(!1)),
                (this.success = (0, e.vPA)(!1)),
                (this.key = (0, e.vPA)('')),
                (this.passwordForm = new o.gE({
                  newPassword: new o.MJ('', { nonNullable: !0, validators: [o.k0.required, o.k0.minLength(4), o.k0.maxLength(50)] }),
                  confirmPassword: new o.MJ('', { nonNullable: !0, validators: [o.k0.required, o.k0.minLength(4), o.k0.maxLength(50)] }),
                })),
                (this.passwordResetFinishService = (0, e.WQX)(J)),
                (this.route = (0, e.WQX)(d.nX));
            }
            ngOnInit() {
              this.route.queryParams.subscribe(n => {
                n.key && this.key.set(n.key), this.initialized.set(!0);
              });
            }
            ngAfterViewInit() {
              this.newPassword().nativeElement.focus();
            }
            finishReset() {
              this.doNotMatch.set(!1), this.error.set(!1);
              const { newPassword: n, confirmPassword: s } = this.passwordForm.getRawValue();
              n !== s
                ? this.doNotMatch.set(!0)
                : this.passwordResetFinishService
                    .save(this.key(), n)
                    .subscribe({ next: () => this.success.set(!0), error: () => this.error.set(!0) });
            }
            static {
              this.ɵfac = function (s) {
                return new (s || t)();
              };
            }
            static {
              this.ɵcmp = e.VBU({
                type: t,
                selectors: [['jhi-password-reset-finish']],
                viewQuery: function (s, r) {
                  1 & s && e.wEZ(r.newPassword, U, 5), 2 & s && e.NyB();
                },
                decls: 18,
                vars: 6,
                consts: [
                  [1, 'd-flex', 'justify-content-center'],
                  [1, 'col-md-4'],
                  ['jhiTranslate', 'reset.finish.title'],
                  ['jhiTranslate', 'reset.finish.messages.keymissing', 1, 'alert', 'alert-danger'],
                  [1, 'alert', 'alert-warning'],
                  ['jhiTranslate', 'reset.finish.messages.info'],
                  [1, 'alert', 'alert-danger'],
                  ['jhiTranslate', 'reset.finish.messages.error'],
                  [1, 'alert', 'alert-success'],
                  ['jhiTranslate', 'reset.finish.messages.success'],
                  ['routerLink', '/login', 'jhiTranslate', 'global.messages.info.authenticated.link', 1, 'alert-link'],
                  ['jhiTranslate', 'global.messages.error.dontmatch', 1, 'alert', 'alert-danger'],
                  ['name', 'form', 3, 'ngSubmit', 'formGroup'],
                  [1, 'mb-3'],
                  ['for', 'newPassword', 'jhiTranslate', 'global.form.newpassword.label', 1, 'form-label'],
                  [
                    'type',
                    'password',
                    'id',
                    'newPassword',
                    'name',
                    'newPassword',
                    'formControlName',
                    'newPassword',
                    'data-cy',
                    'resetPassword',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  [3, 'passwordToCheck'],
                  ['for', 'confirmPassword', 'jhiTranslate', 'global.form.confirmpassword.label', 1, 'form-label'],
                  [
                    'type',
                    'password',
                    'id',
                    'confirmPassword',
                    'name',
                    'confirmPassword',
                    'formControlName',
                    'confirmPassword',
                    'data-cy',
                    'confirmResetPassword',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  [
                    'type',
                    'submit',
                    'data-cy',
                    'submit',
                    'jhiTranslate',
                    'reset.finish.form.button',
                    1,
                    'btn',
                    'btn-primary',
                    3,
                    'disabled',
                  ],
                  ['jhiTranslate', 'global.messages.validate.newpassword.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.maxlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.maxlength', 1, 'form-text', 'text-danger'],
                ],
                template: function (s, r) {
                  1 & s &&
                    (e.j41(0, 'div'),
                    e.EFF(1, '\n  '),
                    e.j41(2, 'div', 0),
                    e.EFF(3, '\n    '),
                    e.j41(4, 'div', 1),
                    e.EFF(5, '\n      '),
                    e.j41(6, 'h1', 2),
                    e.EFF(7, 'Reset password'),
                    e.k0s(),
                    e.EFF(8, '\n\n      '),
                    e.DNE(9, H, 4, 0)(10, z, 7, 0)(11, K, 7, 0)(12, Z, 12, 0)(13, O, 4, 0)(14, le, 36, 13),
                    e.k0s(),
                    e.EFF(15, '\n  '),
                    e.k0s(),
                    e.EFF(16, '\n'),
                    e.k0s(),
                    e.EFF(17, '\n')),
                    2 & s &&
                      (e.R7$(9),
                      e.vxM(r.initialized() && !r.key() ? 9 : -1),
                      e.R7$(),
                      e.vxM(r.key() && !r.success() ? 10 : -1),
                      e.R7$(),
                      e.vxM(r.error() ? 11 : -1),
                      e.R7$(),
                      e.vxM(r.success() ? 12 : -1),
                      e.R7$(),
                      e.vxM(r.doNotMatch() ? 13 : -1),
                      e.R7$(),
                      e.vxM(r.key() && !r.success() ? 14 : -1));
                },
                dependencies: [c.A, u.A, f.D9, d.iI, d.Wk, o.YN, o.qT, o.me, o.BC, o.cb, o.X1, o.j4, o.JD, E],
                encapsulation: 2,
              });
            }
          }
          return t;
        })(),
        title: 'global.menu.account.password',
      };
      let de = (() => {
        class t {
          constructor() {
            (this.http = (0, e.WQX)(p.Qq)), (this.applicationConfigService = (0, e.WQX)(g.a));
          }
          save(n) {
            return this.http.post(this.applicationConfigService.getEndpointFor('api/account/reset-password/init'), n);
          }
          static {
            this.ɵfac = function (s) {
              return new (s || t)();
            };
          }
          static {
            this.ɵprov = e.jDH({ token: t, factory: t.ɵfac, providedIn: 'root' });
          }
        }
        return t;
      })();
      var C = l(651);
      const me = ['email'];
      function ce(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 10),
          e.EFF(2, 'Your email is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function ue(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 11),
          e.EFF(2, 'Your email is invalid.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function fe(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 12),
          e.EFF(2, 'Your email is required to be at least 5 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function pe(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 13),
          e.EFF(2, 'Your email cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function ge(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, ce, 4, 0)(4, ue, 4, 0)(5, fe, 4, 0)(6, pe, 4, 0),
            e.k0s(),
            e.EFF(7, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(17);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.email ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 5 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 6 : -1);
        }
      }
      function he(t, a) {
        if (1 & t) {
          const n = e.RV6();
          e.EFF(0, '\n        '),
            e.j41(1, 'div', 3),
            e.EFF(2, '\n          '),
            e.j41(3, 'span', 4),
            e.EFF(4, 'Enter the email address you used to register'),
            e.k0s(),
            e.EFF(5, '\n        '),
            e.k0s(),
            e.EFF(6, '\n        '),
            e.j41(7, 'form', 5),
            e.bIt('ngSubmit', function () {
              e.eBV(n);
              const r = e.XpG();
              return e.Njj(r.requestReset());
            }),
            e.EFF(8, '\n          '),
            e.j41(9, 'div', 6),
            e.EFF(10, '\n            '),
            e.j41(11, 'label', 7),
            e.EFF(12, 'Email'),
            e.k0s(),
            e.EFF(13, '\n            '),
            e.nrm(14, 'input', 8),
            e.nI1(15, 'translate'),
            e.EFF(16, '\n\n            '),
            e.SS7(17),
            e.EFF(18, '\n            '),
            e.DNE(19, ge, 8, 4),
            e.k0s(),
            e.EFF(20, '\n          '),
            e.j41(21, 'button', 9),
            e.EFF(22, '\n            Reset password\n          '),
            e.k0s(),
            e.EFF(23, '\n        '),
            e.k0s(),
            e.EFF(24, '\n      ');
        }
        if (2 & t) {
          const n = e.XpG();
          e.R7$(7),
            e.Y8G('formGroup', n.resetRequestForm),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(15, 4, 'global.form.email.placeholder')),
            e.R7$(3);
          const s = e.bH3(n.resetRequestForm.get('email'));
          e.R7$(2), e.vxM(s.invalid && (s.dirty || s.touched) ? 19 : -1), e.R7$(2), e.Y8G('disabled', n.resetRequestForm.invalid);
        }
      }
      function Ee(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 14),
          e.EFF(2, '\n          '),
          e.j41(3, 'span', 15),
          e.EFF(4, 'Check your email for details on how to reset your password.'),
          e.k0s(),
          e.EFF(5, '\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      const _e = {
          path: 'reset/request',
          component: (() => {
            class t {
              constructor() {
                (this.email = e.ebz.required('email')),
                  (this.success = (0, e.vPA)(!1)),
                  (this.passwordResetInitService = (0, e.WQX)(de)),
                  (this.fb = (0, e.WQX)(o.ok)),
                  (this.resetRequestForm = this.fb.group({
                    email: ['', [o.k0.required, o.k0.minLength(5), o.k0.maxLength(254), o.k0.email]],
                  }));
              }
              ngAfterViewInit() {
                this.email().nativeElement.focus();
              }
              requestReset() {
                this.passwordResetInitService.save(this.resetRequestForm.get(['email']).value).subscribe(() => this.success.set(!0));
              }
              static {
                this.ɵfac = function (s) {
                  return new (s || t)();
                };
              }
              static {
                this.ɵcmp = e.VBU({
                  type: t,
                  selectors: [['jhi-password-reset-init']],
                  viewQuery: function (s, r) {
                    1 & s && e.wEZ(r.email, me, 5), 2 & s && e.NyB();
                  },
                  decls: 16,
                  vars: 1,
                  consts: [
                    [1, 'd-flex', 'justify-content-center'],
                    [1, 'col-md-8'],
                    ['jhiTranslate', 'reset.request.title'],
                    [1, 'alert', 'alert-warning'],
                    ['jhiTranslate', 'reset.request.messages.info'],
                    ['name', 'form', 3, 'ngSubmit', 'formGroup'],
                    [1, 'mb-3'],
                    ['for', 'email', 'jhiTranslate', 'global.form.email.label', 1, 'form-label'],
                    [
                      'type',
                      'email',
                      'id',
                      'email',
                      'name',
                      'email',
                      'formControlName',
                      'email',
                      'data-cy',
                      'emailResetPassword',
                      1,
                      'form-control',
                      3,
                      'placeholder',
                    ],
                    [
                      'type',
                      'submit',
                      'data-cy',
                      'submit',
                      'jhiTranslate',
                      'reset.request.form.button',
                      1,
                      'btn',
                      'btn-primary',
                      3,
                      'disabled',
                    ],
                    ['jhiTranslate', 'global.messages.validate.email.required', 1, 'form-text', 'text-danger'],
                    ['jhiTranslate', 'global.messages.validate.email.invalid', 1, 'form-text', 'text-danger'],
                    ['jhiTranslate', 'global.messages.validate.email.minlength', 1, 'form-text', 'text-danger'],
                    ['jhiTranslate', 'global.messages.validate.email.maxlength', 1, 'form-text', 'text-danger'],
                    [1, 'alert', 'alert-success'],
                    ['jhiTranslate', 'reset.request.messages.success'],
                  ],
                  template: function (s, r) {
                    1 & s &&
                      (e.j41(0, 'div'),
                      e.EFF(1, '\n  '),
                      e.j41(2, 'div', 0),
                      e.EFF(3, '\n    '),
                      e.j41(4, 'div', 1),
                      e.EFF(5, '\n      '),
                      e.j41(6, 'h1', 2),
                      e.EFF(7, 'Reset your password'),
                      e.k0s(),
                      e.EFF(8, '\n\n      '),
                      e.nrm(9, 'jhi-alert-error'),
                      e.EFF(10, '\n\n      '),
                      e.DNE(11, he, 25, 7)(12, Ee, 7, 0),
                      e.k0s(),
                      e.EFF(13, '\n  '),
                      e.k0s(),
                      e.EFF(14, '\n'),
                      e.k0s(),
                      e.EFF(15, '\n')),
                      2 & s && (e.R7$(11), e.vxM(r.success() ? 12 : 11));
                  },
                  dependencies: [c.A, C.U, u.A, f.D9, o.YN, o.qT, o.me, o.BC, o.cb, o.X1, o.j4, o.JD],
                  encapsulation: 2,
                });
              }
            }
            return t;
          })(),
          title: 'global.menu.account.password',
        },
        x = 'https://www.jhipster.tech/problem',
        ve = `${x}/email-already-used`,
        we = `${x}/login-already-used`;
      let Ce = (() => {
        class t {
          constructor() {
            (this.http = (0, e.WQX)(p.Qq)), (this.applicationConfigService = (0, e.WQX)(g.a));
          }
          save(n) {
            return this.http.post(this.applicationConfigService.getEndpointFor('api/register'), n);
          }
          static {
            this.ɵfac = function (s) {
              return new (s || t)();
            };
          }
          static {
            this.ɵprov = e.jDH({ token: t, factory: t.ɵfac, providedIn: 'root' });
          }
        }
        return t;
      })();
      const xe = ['login'];
      function je(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 7),
          e.EFF(2, '\n          '),
          e.j41(3, 'strong'),
          e.EFF(4, 'Registration saved!'),
          e.k0s(),
          e.EFF(5, ' Please check your email for confirmation.\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      function be(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 8),
          e.EFF(2, '\n          '),
          e.j41(3, 'strong'),
          e.EFF(4, 'Registration failed!'),
          e.k0s(),
          e.EFF(5, ' Please try again later.\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      function Re(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 9),
          e.EFF(2, '\n          '),
          e.j41(3, 'strong'),
          e.EFF(4, 'Login name already registered!'),
          e.k0s(),
          e.EFF(5, ' Please choose another one.\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      function ke(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 10),
          e.EFF(2, '\n          '),
          e.j41(3, 'strong'),
          e.EFF(4, 'Email is already in use!'),
          e.k0s(),
          e.EFF(5, ' Please choose another one.\n        '),
          e.k0s(),
          e.EFF(6, '\n      '));
      }
      function Te(t, a) {
        1 & t &&
          (e.EFF(0, '\n        '),
          e.j41(1, 'div', 11),
          e.EFF(2, 'The password and its confirmation do not match!'),
          e.k0s(),
          e.EFF(3, '\n      '));
      }
      function Pe(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 24),
          e.EFF(2, 'Your username is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function ye(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 25),
          e.EFF(2, 'Your username is required to be at least 1 character.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function $e(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 26),
          e.EFF(2, 'Your username cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Me(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 27),
          e.EFF(2, 'Your username is invalid.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Ne(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, Pe, 4, 0)(4, ye, 4, 0)(5, $e, 4, 0)(6, Me, 4, 0),
            e.k0s(),
            e.EFF(7, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(11);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.pattern ? 6 : -1);
        }
      }
      function Se(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 28),
          e.EFF(2, 'Your email is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function qe(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 29),
          e.EFF(2, 'Your email is invalid.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Ye(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 30),
          e.EFF(2, 'Your email is required to be at least 5 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function De(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 31),
          e.EFF(2, 'Your email cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Ae(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, Se, 4, 0)(4, qe, 4, 0)(5, Ye, 4, 0)(6, De, 4, 0),
            e.k0s(),
            e.EFF(7, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(23);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.invalid ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 5 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 6 : -1);
        }
      }
      function Xe(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 32),
          e.EFF(2, 'Your password is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Ie(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 33),
          e.EFF(2, 'Your password is required to be at least 4 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Ge(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 34),
          e.EFF(2, 'Your password cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Le(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, Xe, 4, 0)(4, Ie, 4, 0)(5, Ge, 4, 0),
            e.k0s(),
            e.EFF(6, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(35);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function Qe(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 35),
          e.EFF(2, 'Your confirmation password is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Ve(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 36),
          e.EFF(2, 'Your confirmation password is required to be at least 4 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function Be(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 37),
          e.EFF(2, 'Your confirmation password cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function We(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, Qe, 4, 0)(4, Ve, 4, 0)(5, Be, 4, 0),
            e.k0s(),
            e.EFF(6, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(49);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function Je(t, a) {
        if (1 & t) {
          const n = e.RV6();
          e.EFF(0, '\n        '),
            e.j41(1, 'form', 12),
            e.bIt('ngSubmit', function () {
              e.eBV(n);
              const r = e.XpG();
              return e.Njj(r.register());
            }),
            e.EFF(2, '\n          '),
            e.j41(3, 'div', 13),
            e.EFF(4, '\n            '),
            e.j41(5, 'label', 14),
            e.EFF(6, 'Username'),
            e.k0s(),
            e.EFF(7, '\n            '),
            e.nrm(8, 'input', 15),
            e.nI1(9, 'translate'),
            e.EFF(10, '\n\n            '),
            e.SS7(11),
            e.EFF(12, '\n            '),
            e.DNE(13, Ne, 8, 4),
            e.k0s(),
            e.EFF(14, '\n\n          '),
            e.j41(15, 'div', 13),
            e.EFF(16, '\n            '),
            e.j41(17, 'label', 16),
            e.EFF(18, 'Email'),
            e.k0s(),
            e.EFF(19, '\n            '),
            e.nrm(20, 'input', 17),
            e.nI1(21, 'translate'),
            e.EFF(22, '\n\n            '),
            e.SS7(23),
            e.EFF(24, '\n            '),
            e.DNE(25, Ae, 8, 4),
            e.k0s(),
            e.EFF(26, '\n\n          '),
            e.j41(27, 'div', 13),
            e.EFF(28, '\n            '),
            e.j41(29, 'label', 18),
            e.EFF(30, 'New password'),
            e.k0s(),
            e.EFF(31, '\n            '),
            e.nrm(32, 'input', 19),
            e.nI1(33, 'translate'),
            e.EFF(34, '\n\n            '),
            e.SS7(35),
            e.EFF(36, '\n            '),
            e.DNE(37, Le, 7, 3),
            e.nrm(38, 'jhi-password-strength-bar', 20),
            e.EFF(39, '\n          '),
            e.k0s(),
            e.EFF(40, '\n\n          '),
            e.j41(41, 'div', 13),
            e.EFF(42, '\n            '),
            e.j41(43, 'label', 21),
            e.EFF(44, 'New password confirmation'),
            e.k0s(),
            e.EFF(45, '\n            '),
            e.nrm(46, 'input', 22),
            e.nI1(47, 'translate'),
            e.EFF(48, '\n\n            '),
            e.SS7(49),
            e.EFF(50, '\n            '),
            e.DNE(51, We, 7, 3),
            e.k0s(),
            e.EFF(52, '\n\n          '),
            e.j41(53, 'button', 23),
            e.EFF(54, '\n            Register\n          '),
            e.k0s(),
            e.EFF(55, '\n        '),
            e.k0s(),
            e.EFF(56, '\n      ');
        }
        if (2 & t) {
          const n = e.XpG();
          e.R7$(),
            e.Y8G('formGroup', n.registerForm),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(9, 11, 'global.form.username.placeholder')),
            e.R7$(3);
          const s = e.bH3(n.registerForm.get('login'));
          e.R7$(2),
            e.vxM(s.invalid && (s.dirty || s.touched) ? 13 : -1),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(21, 14, 'global.form.email.placeholder')),
            e.R7$(3);
          const r = e.bH3(n.registerForm.get('email'));
          e.R7$(2),
            e.vxM(r.invalid && (r.dirty || r.touched) ? 25 : -1),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(33, 17, 'global.form.newpassword.placeholder')),
            e.R7$(3);
          const i = e.bH3(n.registerForm.get('password'));
          e.R7$(2),
            e.vxM(i.invalid && (i.dirty || i.touched) ? 37 : -1),
            e.R7$(),
            e.Y8G('passwordToCheck', i.value),
            e.R7$(8),
            e.FS9('placeholder', e.bMT(47, 20, 'global.form.confirmpassword.placeholder')),
            e.R7$(3);
          const F = e.bH3(n.registerForm.get('confirmPassword'));
          e.R7$(2), e.vxM(F.invalid && (F.dirty || F.touched) ? 51 : -1), e.R7$(2), e.Y8G('disabled', n.registerForm.invalid);
        }
      }
      const Ue = {
        path: 'register',
        component: (() => {
          class t {
            constructor() {
              (this.login = e.ebz.required('login')),
                (this.doNotMatch = (0, e.vPA)(!1)),
                (this.error = (0, e.vPA)(!1)),
                (this.errorEmailExists = (0, e.vPA)(!1)),
                (this.errorUserExists = (0, e.vPA)(!1)),
                (this.success = (0, e.vPA)(!1)),
                (this.registerForm = new o.gE({
                  login: new o.MJ('', {
                    nonNullable: !0,
                    validators: [
                      o.k0.required,
                      o.k0.minLength(1),
                      o.k0.maxLength(50),
                      o.k0.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                    ],
                  }),
                  email: new o.MJ('', { nonNullable: !0, validators: [o.k0.required, o.k0.minLength(5), o.k0.maxLength(254), o.k0.email] }),
                  password: new o.MJ('', { nonNullable: !0, validators: [o.k0.required, o.k0.minLength(4), o.k0.maxLength(50)] }),
                  confirmPassword: new o.MJ('', { nonNullable: !0, validators: [o.k0.required, o.k0.minLength(4), o.k0.maxLength(50)] }),
                })),
                (this.translateService = (0, e.WQX)(f.c$)),
                (this.registerService = (0, e.WQX)(Ce));
            }
            ngAfterViewInit() {
              this.login().nativeElement.focus();
            }
            register() {
              this.doNotMatch.set(!1), this.error.set(!1), this.errorEmailExists.set(!1), this.errorUserExists.set(!1);
              const { password: n, confirmPassword: s } = this.registerForm.getRawValue();
              if (n !== s) this.doNotMatch.set(!0);
              else {
                const { login: r, email: i } = this.registerForm.getRawValue();
                this.registerService
                  .save({ login: r, email: i, password: n, langKey: this.translateService.currentLang })
                  .subscribe({ next: () => this.success.set(!0), error: F => this.processError(F) });
              }
            }
            processError(n) {
              400 === n.status && n.error.type === we
                ? this.errorUserExists.set(!0)
                : 400 === n.status && n.error.type === ve
                  ? this.errorEmailExists.set(!0)
                  : this.error.set(!0);
            }
            static {
              this.ɵfac = function (s) {
                return new (s || t)();
              };
            }
            static {
              this.ɵcmp = e.VBU({
                type: t,
                selectors: [['jhi-register']],
                viewQuery: function (s, r) {
                  1 & s && e.wEZ(r.login, xe, 5), 2 & s && e.NyB();
                },
                decls: 39,
                vars: 6,
                consts: [
                  [1, 'd-flex', 'justify-content-center'],
                  [1, 'col-md-8'],
                  ['data-cy', 'registerTitle', 'jhiTranslate', 'register.title'],
                  [1, 'mt-3', 'alert', 'alert-warning'],
                  ['jhiTranslate', 'global.messages.info.authenticated.prefix'],
                  ['routerLink', '/login', 'jhiTranslate', 'global.messages.info.authenticated.link', 1, 'alert-link'],
                  ['jhiTranslate', 'global.messages.info.authenticated.suffix'],
                  ['jhiTranslate', 'register.messages.success', 1, 'alert', 'alert-success'],
                  ['jhiTranslate', 'register.messages.error.fail', 1, 'alert', 'alert-danger'],
                  ['jhiTranslate', 'register.messages.error.userexists', 1, 'alert', 'alert-danger'],
                  ['jhiTranslate', 'register.messages.error.emailexists', 1, 'alert', 'alert-danger'],
                  ['jhiTranslate', 'global.messages.error.dontmatch', 1, 'alert', 'alert-danger'],
                  ['name', 'form', 3, 'ngSubmit', 'formGroup'],
                  [1, 'mb-3'],
                  ['for', 'login', 'jhiTranslate', 'global.form.username.label', 1, 'form-label'],
                  [
                    'type',
                    'text',
                    'id',
                    'login',
                    'name',
                    'login',
                    'formControlName',
                    'login',
                    'data-cy',
                    'username',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  ['for', 'email', 'jhiTranslate', 'global.form.email.label', 1, 'form-label'],
                  [
                    'type',
                    'email',
                    'id',
                    'email',
                    'name',
                    'email',
                    'formControlName',
                    'email',
                    'data-cy',
                    'email',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  ['for', 'password', 'jhiTranslate', 'global.form.newpassword.label', 1, 'form-label'],
                  [
                    'type',
                    'password',
                    'id',
                    'password',
                    'name',
                    'password',
                    'formControlName',
                    'password',
                    'data-cy',
                    'firstPassword',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  [3, 'passwordToCheck'],
                  ['for', 'confirmPassword', 'jhiTranslate', 'global.form.confirmpassword.label', 1, 'form-label'],
                  [
                    'type',
                    'password',
                    'id',
                    'confirmPassword',
                    'name',
                    'confirmPassword',
                    'formControlName',
                    'confirmPassword',
                    'data-cy',
                    'secondPassword',
                    1,
                    'form-control',
                    3,
                    'placeholder',
                  ],
                  ['type', 'submit', 'data-cy', 'submit', 'jhiTranslate', 'register.form.button', 1, 'btn', 'btn-primary', 3, 'disabled'],
                  ['jhiTranslate', 'register.messages.validate.login.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'register.messages.validate.login.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'register.messages.validate.login.maxlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'register.messages.validate.login.pattern', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.email.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.email.invalid', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.email.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.email.maxlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.newpassword.maxlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.required', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.minlength', 1, 'form-text', 'text-danger'],
                  ['jhiTranslate', 'global.messages.validate.confirmpassword.maxlength', 1, 'form-text', 'text-danger'],
                ],
                template: function (s, r) {
                  1 & s &&
                    (e.j41(0, 'div'),
                    e.EFF(1, '\n  '),
                    e.j41(2, 'div', 0),
                    e.EFF(3, '\n    '),
                    e.j41(4, 'div', 1),
                    e.EFF(5, '\n      '),
                    e.j41(6, 'h1', 2),
                    e.EFF(7, 'Registration'),
                    e.k0s(),
                    e.EFF(8, '\n\n      '),
                    e.DNE(9, je, 7, 0)(10, be, 7, 0)(11, Re, 7, 0)(12, ke, 7, 0)(13, Te, 4, 0),
                    e.k0s(),
                    e.EFF(14, '\n  '),
                    e.k0s(),
                    e.EFF(15, '\n\n  '),
                    e.j41(16, 'div', 0),
                    e.EFF(17, '\n    '),
                    e.j41(18, 'div', 1),
                    e.EFF(19, '\n      '),
                    e.DNE(20, Je, 57, 23),
                    e.j41(21, 'div', 3),
                    e.EFF(22, '\n        '),
                    e.j41(23, 'span', 4),
                    e.EFF(24, 'If you want to '),
                    e.k0s(),
                    e.EFF(25, '\n        '),
                    e.j41(26, 'a', 5),
                    e.EFF(27, 'sign in'),
                    e.k0s(),
                    e.j41(28, 'span', 6),
                    e.EFF(29, ', you can try the default accounts:'),
                    e.nrm(30, 'br'),
                    e.EFF(31, '- Administrator (login="admin" and password="admin") '),
                    e.nrm(32, 'br'),
                    e.EFF(33, '- User\n          (login="user" and password="user").'),
                    e.k0s(),
                    e.EFF(34, '\n      '),
                    e.k0s(),
                    e.EFF(35, '\n    '),
                    e.k0s(),
                    e.EFF(36, '\n  '),
                    e.k0s(),
                    e.EFF(37, '\n'),
                    e.k0s(),
                    e.EFF(38, '\n')),
                    2 & s &&
                      (e.R7$(9),
                      e.vxM(r.success() ? 9 : -1),
                      e.R7$(),
                      e.vxM(r.error() ? 10 : -1),
                      e.R7$(),
                      e.vxM(r.errorUserExists() ? 11 : -1),
                      e.R7$(),
                      e.vxM(r.errorEmailExists() ? 12 : -1),
                      e.R7$(),
                      e.vxM(r.doNotMatch() ? 13 : -1),
                      e.R7$(7),
                      e.vxM(r.success() ? -1 : 20));
                },
                dependencies: [c.A, u.A, f.D9, d.iI, d.Wk, o.YN, o.qT, o.me, o.BC, o.cb, o.X1, o.j4, o.JD, E],
                encapsulation: 2,
              });
            }
          }
          return t;
        })(),
        title: 'register.title',
      };
      var He = l(4744),
        ze = l(3152);
      const Ke = t => ({ username: t });
      function Ze(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n        '),
            e.j41(1, 'h2', 2),
            e.EFF(2, '\n          User settings for ['),
            e.j41(3, 'strong'),
            e.EFF(4),
            e.k0s(),
            e.EFF(5, ']\n        '),
            e.k0s(),
            e.EFF(6, '\n      ')),
          2 & t)
        ) {
          const n = e.XpG();
          e.R7$(), e.Y8G('translateValues', e.eq3(2, Ke, n.settingsForm.value.login)), e.R7$(3), e.JRh(n.settingsForm.value.login);
        }
      }
      function Oe(t, a) {
        1 & t && (e.EFF(0, '\n        '), e.j41(1, 'div', 3)(2, 'strong'), e.EFF(3, 'Settings saved!'), e.k0s()(), e.EFF(4, '\n      '));
      }
      function en(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 13),
          e.EFF(2, 'Your first name is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function nn(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 14),
          e.EFF(2, 'Your first name is required to be at least 1 character'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function tn(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 15),
          e.EFF(2, 'Your first name cannot be longer than 50 characters'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function sn(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, en, 4, 0)(4, nn, 4, 0)(5, tn, 4, 0),
            e.k0s(),
            e.EFF(6, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(11);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function on(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 16),
          e.EFF(2, 'Your last name is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function an(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 17),
          e.EFF(2, 'Your last name is required to be at least 1 character'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function rn(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 18),
          e.EFF(2, 'Your last name cannot be longer than 50 characters'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function ln(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, on, 4, 0)(4, an, 4, 0)(5, rn, 4, 0),
            e.k0s(),
            e.EFF(6, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(23);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 5 : -1);
        }
      }
      function Fn(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 19),
          e.EFF(2, 'Your email is required.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function dn(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 20),
          e.EFF(2, 'Your email is invalid.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function mn(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 21),
          e.EFF(2, 'Your email is required to be at least 5 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function cn(t, a) {
        1 & t &&
          (e.EFF(0, '\n                  '),
          e.j41(1, 'small', 22),
          e.EFF(2, 'Your email cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n                '));
      }
      function un(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'div'),
            e.EFF(2, '\n                '),
            e.DNE(3, Fn, 4, 0)(4, dn, 4, 0)(5, mn, 4, 0)(6, cn, 4, 0),
            e.k0s(),
            e.EFF(7, '\n            ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(35);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.email ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 5 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 6 : -1);
        }
      }
      function fn(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n                  '),
            e.j41(1, 'option', 25),
            e.EFF(2),
            e.nI1(3, 'findLanguageFromKey'),
            e.k0s(),
            e.EFF(4, '\n                ')),
          2 & t)
        ) {
          const n = a.$implicit;
          e.R7$(), e.Y8G('value', n), e.R7$(), e.JRh(e.bMT(3, 2, n));
        }
      }
      function pn(t, a) {
        if (
          (1 & t &&
            (e.EFF(0, '\n            '),
            e.j41(1, 'div', 5),
            e.EFF(2, '\n              '),
            e.j41(3, 'label', 23),
            e.EFF(4, 'Language'),
            e.k0s(),
            e.EFF(5, '\n              '),
            e.j41(6, 'select', 24),
            e.EFF(7, '\n                '),
            e.Z7z(8, fn, 5, 4, null, null, e.Vm6),
            e.k0s(),
            e.EFF(10, '\n            '),
            e.k0s(),
            e.EFF(11, '\n          ')),
          2 & t)
        ) {
          const n = e.XpG(2);
          e.R7$(8), e.Dyx(n.languages);
        }
      }
      function gn(t, a) {
        if (1 & t) {
          const n = e.RV6();
          e.EFF(0, '\n        '),
            e.j41(1, 'form', 4),
            e.bIt('ngSubmit', function () {
              e.eBV(n);
              const r = e.XpG();
              return e.Njj(r.save());
            }),
            e.EFF(2, '\n          '),
            e.j41(3, 'div', 5),
            e.EFF(4, '\n            '),
            e.j41(5, 'label', 6),
            e.EFF(6, 'First Name'),
            e.k0s(),
            e.EFF(7, '\n            '),
            e.nrm(8, 'input', 7),
            e.nI1(9, 'translate'),
            e.EFF(10, '\n\n            '),
            e.SS7(11),
            e.EFF(12, '\n            '),
            e.DNE(13, sn, 7, 3),
            e.k0s(),
            e.EFF(14, '\n\n          '),
            e.j41(15, 'div', 5),
            e.EFF(16, '\n            '),
            e.j41(17, 'label', 8),
            e.EFF(18, 'Last Name'),
            e.k0s(),
            e.EFF(19, '\n            '),
            e.nrm(20, 'input', 9),
            e.nI1(21, 'translate'),
            e.EFF(22, '\n\n            '),
            e.SS7(23),
            e.EFF(24, '\n            '),
            e.DNE(25, ln, 7, 3),
            e.k0s(),
            e.EFF(26, '\n\n          '),
            e.j41(27, 'div', 5),
            e.EFF(28, '\n            '),
            e.j41(29, 'label', 10),
            e.EFF(30, 'Email'),
            e.k0s(),
            e.EFF(31, '\n            '),
            e.nrm(32, 'input', 11),
            e.nI1(33, 'translate'),
            e.EFF(34, '\n\n            '),
            e.SS7(35),
            e.EFF(36, '\n            '),
            e.DNE(37, un, 8, 4),
            e.k0s(),
            e.EFF(38, '\n\n          '),
            e.DNE(39, pn, 12, 0),
            e.j41(40, 'button', 12),
            e.EFF(41, '\n            Save\n          '),
            e.k0s(),
            e.EFF(42, '\n        '),
            e.k0s(),
            e.EFF(43, '\n      ');
        }
        if (2 & t) {
          const n = e.XpG();
          e.R7$(),
            e.Y8G('formGroup', n.settingsForm),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(9, 9, 'settings.form.firstname.placeholder')),
            e.R7$(3);
          const s = e.bH3(n.settingsForm.get('firstName'));
          e.R7$(2),
            e.vxM(s.invalid && (s.dirty || s.touched) ? 13 : -1),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(21, 12, 'settings.form.lastname.placeholder')),
            e.R7$(3);
          const r = e.bH3(n.settingsForm.get('lastName'));
          e.R7$(2),
            e.vxM(r.invalid && (r.dirty || r.touched) ? 25 : -1),
            e.R7$(7),
            e.FS9('placeholder', e.bMT(33, 15, 'global.form.email.placeholder')),
            e.R7$(3);
          const i = e.bH3(n.settingsForm.get('email'));
          e.R7$(2),
            e.vxM(i.invalid && (i.dirty || i.touched) ? 37 : -1),
            e.R7$(2),
            e.vxM(n.languages && n.languages.length > 0 ? 39 : -1),
            e.R7$(),
            e.Y8G('disabled', n.settingsForm.invalid);
        }
      }
      const m = {},
        En = [
          T,
          W,
          Fe,
          _e,
          Ue,
          {
            path: 'settings',
            component: (() => {
              class t {
                constructor() {
                  (this.success = (0, e.vPA)(!1)),
                    (this.languages = He.Y),
                    (this.settingsForm = new o.gE({
                      firstName: new o.MJ(m.firstName, {
                        nonNullable: !0,
                        validators: [o.k0.required, o.k0.minLength(1), o.k0.maxLength(50)],
                      }),
                      lastName: new o.MJ(m.lastName, {
                        nonNullable: !0,
                        validators: [o.k0.required, o.k0.minLength(1), o.k0.maxLength(50)],
                      }),
                      email: new o.MJ(m.email, {
                        nonNullable: !0,
                        validators: [o.k0.required, o.k0.minLength(5), o.k0.maxLength(254), o.k0.email],
                      }),
                      langKey: new o.MJ(m.langKey, { nonNullable: !0 }),
                      activated: new o.MJ(m.activated, { nonNullable: !0 }),
                      authorities: new o.MJ(m.authorities, { nonNullable: !0 }),
                      imageUrl: new o.MJ(m.imageUrl, { nonNullable: !0 }),
                      login: new o.MJ(m.login, { nonNullable: !0 }),
                    })),
                    (this.accountService = (0, e.WQX)(w.D)),
                    (this.translateService = (0, e.WQX)(f.c$));
                }
                ngOnInit() {
                  this.accountService.identity().subscribe(n => {
                    n && this.settingsForm.patchValue(n);
                  });
                }
                save() {
                  this.success.set(!1);
                  const n = this.settingsForm.getRawValue();
                  this.accountService.save(n).subscribe(() => {
                    this.success.set(!0),
                      this.accountService.authenticate(n),
                      n.langKey !== this.translateService.currentLang && this.translateService.use(n.langKey);
                  });
                }
                static {
                  this.ɵfac = function (s) {
                    return new (s || t)();
                  };
                }
                static {
                  this.ɵcmp = e.VBU({
                    type: t,
                    selectors: [['jhi-settings']],
                    decls: 14,
                    vars: 3,
                    consts: [
                      [1, 'd-flex', 'justify-content-center'],
                      [1, 'col-md-8'],
                      ['jhiTranslate', 'settings.title', 3, 'translateValues'],
                      ['jhiTranslate', 'settings.messages.success', 1, 'alert', 'alert-success'],
                      ['name', 'form', 'novalidate', '', 3, 'ngSubmit', 'formGroup'],
                      [1, 'mb-3'],
                      ['for', 'firstName', 'jhiTranslate', 'settings.form.firstname', 1, 'form-label'],
                      [
                        'type',
                        'text',
                        'id',
                        'firstName',
                        'name',
                        'firstName',
                        'formControlName',
                        'firstName',
                        'data-cy',
                        'firstname',
                        1,
                        'form-control',
                        3,
                        'placeholder',
                      ],
                      ['for', 'lastName', 'jhiTranslate', 'settings.form.lastname', 1, 'form-label'],
                      [
                        'type',
                        'text',
                        'id',
                        'lastName',
                        'name',
                        'lastName',
                        'formControlName',
                        'lastName',
                        'data-cy',
                        'lastname',
                        1,
                        'form-control',
                        3,
                        'placeholder',
                      ],
                      ['for', 'email', 'jhiTranslate', 'global.form.email.label', 1, 'form-label'],
                      [
                        'type',
                        'email',
                        'id',
                        'email',
                        'name',
                        'email',
                        'formControlName',
                        'email',
                        'data-cy',
                        'email',
                        1,
                        'form-control',
                        3,
                        'placeholder',
                      ],
                      [
                        'type',
                        'submit',
                        'data-cy',
                        'submit',
                        'jhiTranslate',
                        'settings.form.button',
                        1,
                        'btn',
                        'btn-primary',
                        3,
                        'disabled',
                      ],
                      ['jhiTranslate', 'settings.messages.validate.firstname.required', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'settings.messages.validate.firstname.minlength', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'settings.messages.validate.firstname.maxlength', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'settings.messages.validate.lastname.required', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'settings.messages.validate.lastname.minlength', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'settings.messages.validate.lastname.maxlength', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'global.messages.validate.email.required', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'global.messages.validate.email.invalid', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'global.messages.validate.email.minlength', 1, 'form-text', 'text-danger'],
                      ['jhiTranslate', 'global.messages.validate.email.maxlength', 1, 'form-text', 'text-danger'],
                      ['for', 'langKey', 'jhiTranslate', 'settings.form.language'],
                      ['id', 'langKey', 'name', 'langKey', 'formControlName', 'langKey', 'data-cy', 'langKey', 1, 'form-control'],
                      [3, 'value'],
                    ],
                    template: function (s, r) {
                      1 & s &&
                        (e.j41(0, 'div'),
                        e.EFF(1, '\n  '),
                        e.j41(2, 'div', 0),
                        e.EFF(3, '\n    '),
                        e.j41(4, 'div', 1),
                        e.EFF(5, '\n      '),
                        e.DNE(6, Ze, 7, 4)(7, Oe, 5, 0),
                        e.nrm(8, 'jhi-alert-error'),
                        e.EFF(9, '\n\n      '),
                        e.DNE(10, gn, 44, 18),
                        e.k0s(),
                        e.EFF(11, '\n  '),
                        e.k0s(),
                        e.EFF(12, '\n'),
                        e.k0s(),
                        e.EFF(13, '\n')),
                        2 & s &&
                          (e.R7$(6),
                          e.vxM(r.settingsForm.value.login ? 6 : -1),
                          e.R7$(),
                          e.vxM(r.success() ? 7 : -1),
                          e.R7$(3),
                          e.vxM(r.settingsForm.value.login ? 10 : -1));
                    },
                    dependencies: [c.A, C.U, u.A, f.D9, ze.A, o.YN, o.qT, o.xH, o.y7, o.me, o.wz, o.BC, o.cb, o.X1, o.j4, o.JD],
                    encapsulation: 2,
                  });
                }
              }
              return t;
            })(),
            title: 'global.menu.account.settings',
            canActivate: [v.y],
          },
        ];
    },
  },
]);
