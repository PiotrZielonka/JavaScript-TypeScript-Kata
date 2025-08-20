'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [12],
  {
    7012: (C, l, o) => {
      o.r(l), o.d(l, { AuthorityUpdateComponent: () => b });
      var t = o(4438),
        F = o(8498),
        m = o(980),
        d = o(9543),
        r = o(9417),
        c = o(5198);
      let h = (() => {
        class n {
          createAuthorityFormGroup(e = { name: null }) {
            const a = { ...this.getFormDefaults(), ...e };
            return new r.gE({
              name: new r.MJ(
                { value: a.name, disabled: null !== a.name },
                { nonNullable: !0, validators: [r.k0.required, r.k0.maxLength(50)] },
              ),
            });
          }
          getAuthority(e) {
            return e.getRawValue();
          }
          resetForm(e, a) {
            const i = { ...this.getFormDefaults(), ...a };
            e.reset({ ...i, name: { value: i.name, disabled: null !== i.name } });
          }
          getFormDefaults() {
            return { name: null };
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
      var v = o(60),
        p = o(651),
        y = o(8300);
      const f = () => ({ max: '50' });
      function E(n, u) {
        1 & n &&
          (t.EFF(0, '\n                '),
          t.j41(1, 'small', 13),
          t.EFF(2, 'This field is required.'),
          t.k0s(),
          t.EFF(3, '\n              '));
      }
      function j(n, u) {
        1 & n &&
          (t.EFF(0, '\n                '),
          t.j41(1, 'small', 14),
          t.EFF(2, 'This field cannot be longer than 50 characters.'),
          t.k0s(),
          t.EFF(3, '\n              ')),
          2 & n && (t.R7$(), t.Y8G('translateValues', t.lJ4(1, f)));
      }
      function S(n, u) {
        if (
          (1 & n &&
            (t.EFF(0, '\n            '),
            t.j41(1, 'div'),
            t.EFF(2, '\n              '),
            t.DNE(3, E, 4, 0)(4, j, 4, 2),
            t.k0s(),
            t.EFF(5, '\n          ')),
          2 & n)
        ) {
          let e, a;
          const i = t.XpG();
          t.R7$(3),
            t.vxM(null != (e = i.editForm.get('name')) && null != e.errors && e.errors.required ? 3 : -1),
            t.R7$(),
            t.vxM(null != (a = i.editForm.get('name')) && null != a.errors && a.errors.maxlength ? 4 : -1);
        }
      }
      let b = (() => {
        class n {
          constructor() {
            (this.isSaving = !1),
              (this.authority = null),
              (this.authorityService = (0, t.WQX)(c.L)),
              (this.authorityFormService = (0, t.WQX)(h)),
              (this.activatedRoute = (0, t.WQX)(F.nX)),
              (this.editForm = this.authorityFormService.createAuthorityFormGroup());
          }
          ngOnInit() {
            this.activatedRoute.data.subscribe(({ authority: e }) => {
              (this.authority = e), e && this.updateForm(e);
            });
          }
          previousState() {
            window.history.back();
          }
          save() {
            this.isSaving = !0;
            const e = this.authorityFormService.getAuthority(this.editForm);
            this.subscribeToSaveResponse(this.authorityService.create(e));
          }
          subscribeToSaveResponse(e) {
            e.pipe((0, m.j)(() => this.onSaveFinalize())).subscribe({ next: () => this.onSaveSuccess(), error: () => this.onSaveError() });
          }
          onSaveSuccess() {
            this.previousState();
          }
          onSaveError() {}
          onSaveFinalize() {
            this.isSaving = !1;
          }
          updateForm(e) {
            (this.authority = e), this.authorityFormService.resetForm(this.editForm, e);
          }
          static {
            this.ɵfac = function (a) {
              return new (a || n)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: n,
              selectors: [['jhi-authority-update']],
              decls: 47,
              vars: 4,
              consts: [
                [1, 'd-flex', 'justify-content-center'],
                [1, 'col-8'],
                ['name', 'editForm', 'novalidate', '', 3, 'ngSubmit', 'formGroup'],
                [
                  'id',
                  'jhi-authority-heading',
                  'data-cy',
                  'AuthorityCreateUpdateHeading',
                  'jhiTranslate',
                  'javascriptTypescriptKataApp.adminAuthority.home.createOrEditLabel',
                ],
                [1, 'mb-3'],
                ['for', 'field_name', 'jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.name', 1, 'form-label'],
                [
                  'type',
                  'text',
                  'name',
                  'name',
                  'id',
                  'field_name',
                  'data-cy',
                  'name',
                  'formControlName',
                  'name',
                  1,
                  'form-control',
                  3,
                  'readonly',
                ],
                ['type', 'button', 'id', 'cancel-save', 'data-cy', 'entityCreateCancelButton', 1, 'btn', 'btn-secondary', 3, 'click'],
                ['icon', 'ban'],
                ['jhiTranslate', 'entity.action.cancel'],
                ['type', 'submit', 'id', 'save-entity', 'data-cy', 'entityCreateSaveButton', 1, 'btn', 'btn-primary', 3, 'disabled'],
                ['icon', 'save'],
                ['jhiTranslate', 'entity.action.save'],
                ['jhiTranslate', 'entity.validation.required', 1, 'form-text', 'text-danger'],
                ['jhiTranslate', 'entity.validation.maxlength', 1, 'form-text', 'text-danger', 3, 'translateValues'],
              ],
              template: function (a, i) {
                if (1 & a) {
                  const s = t.RV6();
                  t.j41(0, 'div', 0),
                    t.EFF(1, '\n  '),
                    t.j41(2, 'div', 1),
                    t.EFF(3, '\n    '),
                    t.j41(4, 'form', 2),
                    t.bIt('ngSubmit', function () {
                      return t.eBV(s), t.Njj(i.save());
                    }),
                    t.EFF(5, '\n      '),
                    t.j41(6, 'h2', 3),
                    t.EFF(7, '\n        Create or edit a Authority\n      '),
                    t.k0s(),
                    t.EFF(8, '\n\n      '),
                    t.j41(9, 'div'),
                    t.EFF(10, '\n        '),
                    t.nrm(11, 'jhi-alert-error'),
                    t.EFF(12, '\n\n        '),
                    t.SS7(13),
                    t.EFF(14, '\n        '),
                    t.j41(15, 'div', 4),
                    t.EFF(16, '\n          '),
                    t.j41(17, 'label', 5),
                    t.EFF(18, 'Name'),
                    t.k0s(),
                    t.EFF(19, '\n          '),
                    t.nrm(20, 'input', 6),
                    t.EFF(21, '\n          '),
                    t.DNE(22, S, 6, 2),
                    t.k0s(),
                    t.EFF(23, '\n      '),
                    t.k0s(),
                    t.EFF(24, '\n\n      '),
                    t.j41(25, 'div'),
                    t.EFF(26, '\n        '),
                    t.j41(27, 'button', 7),
                    t.bIt('click', function () {
                      return t.eBV(s), t.Njj(i.previousState());
                    }),
                    t.EFF(28, '\n          '),
                    t.nrm(29, 'fa-icon', 8),
                    t.EFF(30, '\xa0'),
                    t.j41(31, 'span', 9),
                    t.EFF(32, 'Cancel'),
                    t.k0s(),
                    t.EFF(33, '\n        '),
                    t.k0s(),
                    t.EFF(34, '\n\n        '),
                    t.j41(35, 'button', 10),
                    t.EFF(36, '\n          '),
                    t.nrm(37, 'fa-icon', 11),
                    t.EFF(38, '\xa0'),
                    t.j41(39, 'span', 12),
                    t.EFF(40, 'Save'),
                    t.k0s(),
                    t.EFF(41, '\n        '),
                    t.k0s(),
                    t.EFF(42, '\n      '),
                    t.k0s(),
                    t.EFF(43, '\n    '),
                    t.k0s(),
                    t.EFF(44, '\n  '),
                    t.k0s(),
                    t.EFF(45, '\n'),
                    t.k0s(),
                    t.EFF(46, '\n');
                }
                if (2 & a) {
                  t.R7$(4), t.Y8G('formGroup', i.editForm);
                  const s = i.editForm.get('name');
                  t.R7$(16),
                    t.Y8G('readonly', i.editForm.get('name').disabled),
                    t.R7$(2),
                    t.vxM(s.invalid && (s.dirty || s.touched) ? 22 : -1),
                    t.R7$(13),
                    t.Y8G('disabled', i.editForm.invalid || i.isSaving);
                }
              },
              dependencies: [d.A, v.aY, p.U, y.A, r.YN, r.qT, r.me, r.BC, r.cb, r.X1, r.j4, r.JD],
              encapsulation: 2,
            });
          }
        }
        return n;
      })();
    },
  },
]);
