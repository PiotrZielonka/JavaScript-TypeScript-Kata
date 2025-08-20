'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [274],
  {
    4274: (I, E, r) => {
      r.r(E), r.d(E, { default: () => B });
      var e = r(4438),
        a = r(9417),
        f = r(8498),
        c = r(9543),
        g = r(4744),
        p = r(6192),
        h = r(60),
        v = r(651),
        M = r(8300),
        j = r(3152);
      const d = () => ({ max: '50' }),
        C = () => ({ max: '100' }),
        b = () => ({ min: '5' });
      function T(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '), e.j41(1, 'small', 28), e.EFF(2, 'This field is required.'), e.k0s(), e.EFF(3, '\n            '));
      }
      function k(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '),
          e.j41(1, 'small', 29),
          e.EFF(2, 'This field cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n            ')),
          2 & t && (e.R7$(), e.Y8G('translateValues', e.lJ4(1, d)));
      }
      function R(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '),
          e.j41(1, 'small', 30),
          e.EFF(2, 'This field can only contain letters, digits and e-mail addresses.'),
          e.k0s(),
          e.EFF(3, '\n            '));
      }
      function U(t, i) {
        if (
          (1 & t &&
            (e.EFF(0, '\n          '),
            e.j41(1, 'div'),
            e.EFF(2, '\n            '),
            e.DNE(3, T, 4, 0)(4, k, 4, 2)(5, R, 4, 0),
            e.k0s(),
            e.EFF(6, '\n        ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(26);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.pattern ? 5 : -1);
        }
      }
      function x(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '),
          e.j41(1, 'small', 29),
          e.EFF(2, 'This field cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n            ')),
          2 & t && (e.R7$(), e.Y8G('translateValues', e.lJ4(1, d)));
      }
      function y(t, i) {
        if (
          (1 & t &&
            (e.EFF(0, '\n          '), e.j41(1, 'div'), e.EFF(2, '\n            '), e.DNE(3, x, 4, 2), e.k0s(), e.EFF(4, '\n        ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(37);
          e.R7$(3), e.vxM(null != n && null != n.errors && n.errors.maxlength ? 3 : -1);
        }
      }
      function N(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '),
          e.j41(1, 'small', 29),
          e.EFF(2, 'This field cannot be longer than 50 characters.'),
          e.k0s(),
          e.EFF(3, '\n            ')),
          2 & t && (e.R7$(), e.Y8G('translateValues', e.lJ4(1, d)));
      }
      function $(t, i) {
        if (
          (1 & t &&
            (e.EFF(0, '\n          '), e.j41(1, 'div'), e.EFF(2, '\n            '), e.DNE(3, N, 4, 2), e.k0s(), e.EFF(4, '\n        ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(48);
          e.R7$(3), e.vxM(null != n && null != n.errors && n.errors.maxlength ? 3 : -1);
        }
      }
      function D(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '), e.j41(1, 'small', 28), e.EFF(2, 'This field is required.'), e.k0s(), e.EFF(3, '\n            '));
      }
      function S(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '),
          e.j41(1, 'small', 29),
          e.EFF(2, 'This field cannot be longer than 100 characters.'),
          e.k0s(),
          e.EFF(3, '\n            ')),
          2 & t && (e.R7$(), e.Y8G('translateValues', e.lJ4(1, C)));
      }
      function L(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '),
          e.j41(1, 'small', 31),
          e.EFF(2, 'This field is required to be at least 5 characters.'),
          e.k0s(),
          e.EFF(3, '\n            ')),
          2 & t && (e.R7$(), e.Y8G('translateValues', e.lJ4(1, b)));
      }
      function P(t, i) {
        1 & t &&
          (e.EFF(0, '\n              '), e.j41(1, 'small', 32), e.EFF(2, 'Your email is invalid.'), e.k0s(), e.EFF(3, '\n            '));
      }
      function A(t, i) {
        if (
          (1 & t &&
            (e.EFF(0, '\n          '),
            e.j41(1, 'div'),
            e.EFF(2, '\n            '),
            e.DNE(3, D, 4, 0)(4, S, 4, 2)(5, L, 4, 2)(6, P, 4, 0),
            e.k0s(),
            e.EFF(7, '\n        ')),
          2 & t)
        ) {
          e.XpG();
          const n = e.r8f(59);
          e.R7$(3),
            e.vxM(null != n && null != n.errors && n.errors.required ? 3 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.maxlength ? 4 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.minlength ? 5 : -1),
            e.R7$(),
            e.vxM(null != n && null != n.errors && n.errors.email ? 6 : -1);
        }
      }
      function O(t, i) {
        if (
          (1 & t &&
            (e.EFF(0, '\n              '),
            e.j41(1, 'option', 35),
            e.EFF(2),
            e.nI1(3, 'findLanguageFromKey'),
            e.k0s(),
            e.EFF(4, '\n            ')),
          2 & t)
        ) {
          const n = i.$implicit;
          e.R7$(), e.Y8G('value', n), e.R7$(), e.JRh(e.bMT(3, 2, n));
        }
      }
      function K(t, i) {
        if (
          (1 & t &&
            (e.EFF(0, '\n        '),
            e.j41(1, 'div', 7),
            e.EFF(2, '\n          '),
            e.j41(3, 'label', 33),
            e.EFF(4, 'Language'),
            e.k0s(),
            e.EFF(5, '\n          '),
            e.j41(6, 'select', 34),
            e.EFF(7, '\n            '),
            e.Z7z(8, O, 5, 4, null, null, e.Vm6),
            e.k0s(),
            e.EFF(10, '\n        '),
            e.k0s(),
            e.EFF(11, '\n      ')),
          2 & t)
        ) {
          const n = e.XpG();
          e.R7$(8), e.Dyx(n.languages);
        }
      }
      function G(t, i) {
        if ((1 & t && (e.EFF(0, '\n            '), e.j41(1, 'option', 35), e.EFF(2), e.k0s(), e.EFF(3, '\n          ')), 2 & t)) {
          const n = i.$implicit;
          e.R7$(), e.Y8G('value', n), e.R7$(), e.JRh(n);
        }
      }
      const o = {},
        J = { langKey: 'en', activated: !0 };
      let B = (() => {
        class t {
          constructor() {
            (this.languages = g.Y),
              (this.authorities = (0, e.vPA)([])),
              (this.isSaving = (0, e.vPA)(!1)),
              (this.editForm = new a.gE({
                id: new a.MJ(o.id),
                login: new a.MJ(o.login, {
                  nonNullable: !0,
                  validators: [
                    a.k0.required,
                    a.k0.minLength(1),
                    a.k0.maxLength(50),
                    a.k0.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                  ],
                }),
                firstName: new a.MJ(o.firstName, { validators: [a.k0.maxLength(50)] }),
                lastName: new a.MJ(o.lastName, { validators: [a.k0.maxLength(50)] }),
                email: new a.MJ(o.email, { nonNullable: !0, validators: [a.k0.minLength(5), a.k0.maxLength(254), a.k0.email] }),
                activated: new a.MJ(o.activated, { nonNullable: !0 }),
                langKey: new a.MJ(o.langKey, { nonNullable: !0 }),
                authorities: new a.MJ(o.authorities, { nonNullable: !0 }),
              })),
              (this.userService = (0, e.WQX)(p.G)),
              (this.route = (0, e.WQX)(f.nX));
          }
          ngOnInit() {
            this.route.data.subscribe(({ user: n }) => {
              this.editForm.reset(n || J);
            }),
              this.userService.authorities().subscribe(n => this.authorities.set(n));
          }
          previousState() {
            window.history.back();
          }
          save() {
            this.isSaving.set(!0);
            const n = this.editForm.getRawValue();
            null !== n.id
              ? this.userService.update(n).subscribe({ next: () => this.onSaveSuccess(), error: () => this.onSaveError() })
              : this.userService.create(n).subscribe({ next: () => this.onSaveSuccess(), error: () => this.onSaveError() });
          }
          onSaveSuccess() {
            this.isSaving.set(!1), this.previousState();
          }
          onSaveError() {
            this.isSaving.set(!1);
          }
          static {
            this.ɵfac = function (m) {
              return new (m || t)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: t,
              selectors: [['jhi-user-mgmt-update']],
              decls: 105,
              vars: 13,
              consts: [
                [1, 'd-flex', 'justify-content-center'],
                [1, 'col-8'],
                ['name', 'editForm', 'novalidate', '', 3, 'ngSubmit', 'formGroup'],
                ['id', 'myUserLabel', 'jhiTranslate', 'userManagement.home.createOrEditLabel'],
                [1, 'mb-3', 3, 'hidden'],
                ['for', 'field_id', 'jhiTranslate', 'global.field.id', 1, 'form-label'],
                ['type', 'text', 'id', 'field_id', 'name', 'id', 'formControlName', 'id', 'readonly', '', 1, 'form-control'],
                [1, 'mb-3'],
                ['for', 'field_login', 'jhiTranslate', 'userManagement.login', 1, 'form-label'],
                ['type', 'text', 'id', 'field_login', 'name', 'login', 'formControlName', 'login', 1, 'form-control'],
                ['for', 'field_firstName', 'jhiTranslate', 'userManagement.firstName', 1, 'form-label'],
                ['type', 'text', 'id', 'field_firstName', 'name', 'firstName', 'formControlName', 'firstName', 1, 'form-control'],
                ['for', 'field_lastName', 'jhiTranslate', 'userManagement.lastName', 1, 'form-label'],
                ['type', 'text', 'id', 'field_lastName', 'name', 'lastName', 'formControlName', 'lastName', 1, 'form-control'],
                ['for', 'field_email', 'jhiTranslate', 'userManagement.email', 1, 'form-label'],
                ['type', 'email', 'id', 'field_email', 'name', 'email', 'formControlName', 'email', 1, 'form-control'],
                [1, 'form-check'],
                ['for', 'activated', 1, 'form-check-label'],
                ['type', 'checkbox', 'id', 'activated', 'name', 'activated', 'formControlName', 'activated', 1, 'form-check-input'],
                ['jhiTranslate', 'userManagement.activated'],
                ['for', 'field_authority', 'jhiTranslate', 'userManagement.profiles', 1, 'form-label'],
                ['id', 'field_authority', 'multiple', '', 'name', 'authority', 'formControlName', 'authorities', 1, 'form-control'],
                ['type', 'button', 1, 'btn', 'btn-secondary', 3, 'click'],
                ['icon', 'ban'],
                ['jhiTranslate', 'entity.action.cancel'],
                ['type', 'submit', 1, 'btn', 'btn-primary', 3, 'disabled'],
                ['icon', 'save'],
                ['jhiTranslate', 'entity.action.save'],
                ['jhiTranslate', 'entity.validation.required', 1, 'form-text', 'text-danger'],
                ['jhiTranslate', 'entity.validation.maxlength', 1, 'form-text', 'text-danger', 3, 'translateValues'],
                ['jhiTranslate', 'entity.validation.patternLogin', 1, 'form-text', 'text-danger'],
                ['jhiTranslate', 'entity.validation.minlength', 1, 'form-text', 'text-danger', 3, 'translateValues'],
                ['jhiTranslate', 'global.messages.validate.email.invalid', 1, 'form-text', 'text-danger'],
                ['for', 'langKey', 'jhiTranslate', 'userManagement.langKey', 1, 'form-label'],
                ['id', 'langKey', 'name', 'langKey', 'formControlName', 'langKey', 1, 'form-control'],
                [3, 'value'],
              ],
              template: function (m, l) {
                if (1 & m) {
                  const s = e.RV6();
                  e.j41(0, 'div', 0),
                    e.EFF(1, '\n  '),
                    e.j41(2, 'div', 1),
                    e.EFF(3, '\n    '),
                    e.j41(4, 'form', 2),
                    e.bIt('ngSubmit', function () {
                      return e.eBV(s), e.Njj(l.save());
                    }),
                    e.EFF(5, '\n      '),
                    e.j41(6, 'h2', 3),
                    e.EFF(7, 'Create or edit a user'),
                    e.k0s(),
                    e.EFF(8, '\n\n      '),
                    e.nrm(9, 'jhi-alert-error'),
                    e.EFF(10, '\n\n      '),
                    e.j41(11, 'div', 4),
                    e.EFF(12, '\n        '),
                    e.j41(13, 'label', 5),
                    e.EFF(14, 'ID'),
                    e.k0s(),
                    e.EFF(15, '\n        '),
                    e.nrm(16, 'input', 6),
                    e.EFF(17, '\n      '),
                    e.k0s(),
                    e.EFF(18, '\n\n      '),
                    e.j41(19, 'div', 7),
                    e.EFF(20, '\n        '),
                    e.j41(21, 'label', 8),
                    e.EFF(22, 'Login'),
                    e.k0s(),
                    e.EFF(23, '\n        '),
                    e.nrm(24, 'input', 9),
                    e.EFF(25, '\n\n        '),
                    e.SS7(26),
                    e.EFF(27, '\n        '),
                    e.DNE(28, U, 7, 3),
                    e.k0s(),
                    e.EFF(29, '\n\n      '),
                    e.j41(30, 'div', 7),
                    e.EFF(31, '\n        '),
                    e.j41(32, 'label', 10),
                    e.EFF(33, 'First name'),
                    e.k0s(),
                    e.EFF(34, '\n        '),
                    e.nrm(35, 'input', 11),
                    e.EFF(36, '\n\n        '),
                    e.SS7(37),
                    e.EFF(38, '\n        '),
                    e.DNE(39, y, 5, 1),
                    e.k0s(),
                    e.EFF(40, '\n\n      '),
                    e.j41(41, 'div', 7),
                    e.EFF(42, '\n        '),
                    e.j41(43, 'label', 12),
                    e.EFF(44, 'Last name'),
                    e.k0s(),
                    e.EFF(45, '\n        '),
                    e.nrm(46, 'input', 13),
                    e.EFF(47, '\n\n        '),
                    e.SS7(48),
                    e.EFF(49, '\n        '),
                    e.DNE(50, $, 5, 1),
                    e.k0s(),
                    e.EFF(51, '\n\n      '),
                    e.j41(52, 'div', 7),
                    e.EFF(53, '\n        '),
                    e.j41(54, 'label', 14),
                    e.EFF(55, 'Email'),
                    e.k0s(),
                    e.EFF(56, '\n        '),
                    e.nrm(57, 'input', 15),
                    e.EFF(58, '\n\n        '),
                    e.SS7(59),
                    e.EFF(60, '\n        '),
                    e.DNE(61, A, 8, 4),
                    e.k0s(),
                    e.EFF(62, '\n\n      '),
                    e.j41(63, 'div', 16),
                    e.EFF(64, '\n        '),
                    e.j41(65, 'label', 17),
                    e.EFF(66, '\n          '),
                    e.nrm(67, 'input', 18),
                    e.EFF(68, '\n          '),
                    e.j41(69, 'span', 19),
                    e.EFF(70, 'Activated'),
                    e.k0s(),
                    e.EFF(71, '\n        '),
                    e.k0s(),
                    e.EFF(72, '\n      '),
                    e.k0s(),
                    e.EFF(73, '\n\n      '),
                    e.DNE(74, K, 12, 0),
                    e.j41(75, 'div', 7),
                    e.EFF(76, '\n        '),
                    e.j41(77, 'label', 20),
                    e.EFF(78, 'Profiles'),
                    e.k0s(),
                    e.EFF(79, '\n        '),
                    e.j41(80, 'select', 21),
                    e.EFF(81, '\n          '),
                    e.Z7z(82, G, 4, 2, null, null, e.Vm6),
                    e.k0s(),
                    e.EFF(84, '\n      '),
                    e.k0s(),
                    e.EFF(85, '\n      '),
                    e.j41(86, 'button', 22),
                    e.bIt('click', function () {
                      return e.eBV(s), e.Njj(l.previousState());
                    }),
                    e.EFF(87, '\n        '),
                    e.nrm(88, 'fa-icon', 23),
                    e.EFF(89, '\xa0'),
                    e.j41(90, 'span', 24),
                    e.EFF(91, 'Cancel'),
                    e.k0s(),
                    e.EFF(92, '\n      '),
                    e.k0s(),
                    e.EFF(93, '\n\n      '),
                    e.j41(94, 'button', 25),
                    e.EFF(95, '\n        '),
                    e.nrm(96, 'fa-icon', 26),
                    e.EFF(97, '\xa0'),
                    e.j41(98, 'span', 27),
                    e.EFF(99, 'Save'),
                    e.k0s(),
                    e.EFF(100, '\n      '),
                    e.k0s(),
                    e.EFF(101, '\n    '),
                    e.k0s(),
                    e.EFF(102, '\n  '),
                    e.k0s(),
                    e.EFF(103, '\n'),
                    e.k0s(),
                    e.EFF(104, '\n');
                }
                if (2 & m) {
                  e.R7$(4), e.Y8G('formGroup', l.editForm), e.R7$(7), e.Y8G('hidden', !l.editForm.value.id), e.R7$(15);
                  const s = e.bH3(l.editForm.get('login'));
                  e.R7$(2), e.vxM(s.invalid && (s.dirty || s.touched) ? 28 : -1), e.R7$(9);
                  const F = e.bH3(l.editForm.get('firstName'));
                  e.R7$(2), e.vxM(F.invalid && (F.dirty || F.touched) ? 39 : -1), e.R7$(9);
                  const u = e.bH3(l.editForm.get('lastName'));
                  e.R7$(2), e.vxM(u.invalid && (u.dirty || u.touched) ? 50 : -1), e.R7$(9);
                  const _ = e.bH3(l.editForm.get('email'));
                  e.R7$(2),
                    e.vxM(_.invalid && (_.dirty || _.touched) ? 61 : -1),
                    e.R7$(6),
                    e.BMQ('disabled', void 0 === l.editForm.value.id ? 'disabled' : null),
                    e.R7$(7),
                    e.vxM(l.languages && l.languages.length > 0 ? 74 : -1),
                    e.R7$(8),
                    e.Dyx(l.authorities()),
                    e.R7$(12),
                    e.Y8G('disabled', l.editForm.invalid || l.isSaving());
                }
              },
              dependencies: [c.A, h.aY, v.U, M.A, j.A, a.YN, a.qT, a.xH, a.y7, a.me, a.Zm, a.wz, a.W0, a.BC, a.cb, a.X1, a.j4, a.JD],
              encapsulation: 2,
            });
          }
        }
        return t;
      })();
    },
  },
]);
