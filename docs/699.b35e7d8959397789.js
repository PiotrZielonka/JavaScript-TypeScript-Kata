'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [699],
  {
    9699: (G, u, a) => {
      a.r(u), a.d(u, { AuthorityComponent: () => N });
      var t = a(4438),
        F = a(8498),
        f = a(4572),
        l = a(8141),
        b = a(5964),
        d = a(1314),
        m = a(9543),
        g = a(4899),
        k = a(7578),
        A = a(5780),
        C = a(9758),
        c = a(9417),
        h = a(6160),
        p = a(5198),
        y = a(60),
        E = a(651),
        j = a(8300);
      const S = i => ({ id: i });
      function T(i, r) {
        if (1 & i) {
          const n = t.RV6();
          t.EFF(0, '\n  '),
            t.j41(1, 'form', 0),
            t.bIt('ngSubmit', function () {
              t.eBV(n);
              const o = t.XpG();
              return t.Njj(o.confirmDelete(o.authority.name));
            }),
            t.EFF(2, '\n    '),
            t.j41(3, 'div', 1),
            t.EFF(4, '\n      '),
            t.j41(5, 'h4', 2),
            t.EFF(6, 'Confirm delete operation'),
            t.k0s(),
            t.EFF(7, '\n    '),
            t.k0s(),
            t.EFF(8, '\n\n    '),
            t.j41(9, 'div', 3),
            t.EFF(10, '\n      '),
            t.nrm(11, 'jhi-alert-error'),
            t.EFF(12, '\n      '),
            t.j41(13, 'p', 4),
            t.EFF(14),
            t.k0s(),
            t.EFF(15, '\n    '),
            t.k0s(),
            t.EFF(16, '\n\n    '),
            t.j41(17, 'div', 5),
            t.EFF(18, '\n      '),
            t.j41(19, 'button', 6),
            t.bIt('click', function () {
              t.eBV(n);
              const o = t.XpG();
              return t.Njj(o.cancel());
            }),
            t.EFF(20, '\n        '),
            t.nrm(21, 'fa-icon', 7),
            t.EFF(22, '\xa0'),
            t.j41(23, 'span', 8),
            t.EFF(24, 'Cancel'),
            t.k0s(),
            t.EFF(25, '\n      '),
            t.k0s(),
            t.EFF(26, '\n\n      '),
            t.j41(27, 'button', 9),
            t.EFF(28, '\n        '),
            t.nrm(29, 'fa-icon', 10),
            t.EFF(30, '\xa0'),
            t.j41(31, 'span', 11),
            t.EFF(32, 'Delete'),
            t.k0s(),
            t.EFF(33, '\n      '),
            t.k0s(),
            t.EFF(34, '\n    '),
            t.k0s(),
            t.EFF(35, '\n  '),
            t.k0s(),
            t.EFF(36, '\n');
        }
        if (2 & i) {
          const n = t.XpG();
          t.R7$(13),
            t.Y8G('translateValues', t.eq3(2, S, n.authority.name)),
            t.R7$(),
            t.SpI('\n        Are you sure you want to delete Authority ', n.authority.name, '?\n      ');
        }
      }
      let R = (() => {
        class i {
          constructor() {
            (this.authorityService = (0, t.WQX)(p.L)), (this.activeModal = (0, t.WQX)(d.Lw));
          }
          cancel() {
            this.activeModal.dismiss();
          }
          confirmDelete(n) {
            this.authorityService.delete(n).subscribe(() => {
              this.activeModal.close(h.zK);
            });
          }
          static {
            this.ɵfac = function (e) {
              return new (e || i)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: i,
              selectors: [['ng-component']],
              decls: 1,
              vars: 1,
              consts: [
                ['name', 'deleteForm', 3, 'ngSubmit'],
                [1, 'modal-header'],
                ['data-cy', 'authorityDeleteDialogHeading', 'jhiTranslate', 'entity.delete.title', 1, 'modal-title'],
                [1, 'modal-body'],
                [
                  'id',
                  'jhi-delete-authority-heading',
                  'jhiTranslate',
                  'javascriptTypescriptKataApp.adminAuthority.delete.question',
                  3,
                  'translateValues',
                ],
                [1, 'modal-footer'],
                ['type', 'button', 'data-dismiss', 'modal', 1, 'btn', 'btn-secondary', 3, 'click'],
                ['icon', 'ban'],
                ['jhiTranslate', 'entity.action.cancel'],
                ['id', 'jhi-confirm-delete-authority', 'data-cy', 'entityConfirmDeleteButton', 'type', 'submit', 1, 'btn', 'btn-danger'],
                ['icon', 'times'],
                ['jhiTranslate', 'entity.action.delete'],
              ],
              template: function (e, o) {
                1 & e && t.DNE(0, T, 37, 4), 2 & e && t.vxM(o.authority ? 0 : -1);
              },
              dependencies: [m.A, y.aY, E.U, j.A, c.YN, c.qT, c.cb, c.cV],
              encapsulation: 2,
            });
          }
        }
        return i;
      })();
      var D = a(8372);
      function B(i, r) {
        return this.trackName(r);
      }
      const L = () => ['/authority/new'],
        v = i => ['/authority', i, 'view'];
      function x(i, r) {
        1 & i &&
          (t.EFF(0, '\n    '),
          t.j41(1, 'div', 9),
          t.EFF(2, '\n      '),
          t.j41(3, 'span', 10),
          t.EFF(4, 'No Authorities found'),
          t.k0s(),
          t.EFF(5, '\n    '),
          t.k0s(),
          t.EFF(6, '\n  '));
      }
      function V(i, r) {
        if (1 & i) {
          const n = t.RV6();
          t.EFF(0, '\n            '),
            t.j41(1, 'tr', 19),
            t.EFF(2, '\n              '),
            t.j41(3, 'td'),
            t.EFF(4, '\n                '),
            t.j41(5, 'a', 20),
            t.EFF(6),
            t.k0s(),
            t.EFF(7, '\n              '),
            t.k0s(),
            t.EFF(8, '\n              '),
            t.j41(9, 'td', 21),
            t.EFF(10, '\n                '),
            t.j41(11, 'div', 22),
            t.EFF(12, '\n                  '),
            t.j41(13, 'a', 23),
            t.EFF(14, '\n                    '),
            t.nrm(15, 'fa-icon', 24),
            t.EFF(16, '\n                    '),
            t.j41(17, 'span', 25),
            t.EFF(18, 'View'),
            t.k0s(),
            t.EFF(19, '\n                  '),
            t.k0s(),
            t.EFF(20, '\n\n                  '),
            t.j41(21, 'button', 26),
            t.bIt('click', function () {
              const o = t.eBV(n).$implicit,
                s = t.XpG(2);
              return t.Njj(s.delete(o));
            }),
            t.EFF(22, '\n                    '),
            t.nrm(23, 'fa-icon', 27),
            t.EFF(24, '\n                    '),
            t.j41(25, 'span', 28),
            t.EFF(26, 'Delete'),
            t.k0s(),
            t.EFF(27, '\n                  '),
            t.k0s(),
            t.EFF(28, '\n                '),
            t.k0s(),
            t.EFF(29, '\n              '),
            t.k0s(),
            t.EFF(30, '\n            '),
            t.k0s(),
            t.EFF(31, '\n          ');
        }
        if (2 & i) {
          const n = r.$implicit;
          t.R7$(5), t.Y8G('routerLink', t.eq3(3, v, n.name)), t.R7$(), t.JRh(n.name), t.R7$(7), t.Y8G('routerLink', t.eq3(5, v, n.name));
        }
      }
      function X(i, r) {
        if (1 & i) {
          const n = t.RV6();
          t.EFF(0, '\n    '),
            t.j41(1, 'div', 11),
            t.EFF(2, '\n      '),
            t.j41(3, 'table', 12),
            t.EFF(4, '\n        '),
            t.j41(5, 'thead'),
            t.EFF(6, '\n          '),
            t.j41(7, 'tr', 13),
            t.mxI('sortStateChange', function (o) {
              t.eBV(n);
              const s = t.XpG();
              return t.DH7(s.sortState, o) || (s.sortState = o), t.Njj(o);
            }),
            t.bIt('sortChange', function (o) {
              t.eBV(n);
              const s = t.XpG();
              return t.Njj(s.navigateToWithComponentValues(o));
            }),
            t.EFF(8, '\n            '),
            t.j41(9, 'th', 14),
            t.EFF(10, '\n              '),
            t.j41(11, 'div', 15),
            t.EFF(12, '\n                '),
            t.j41(13, 'span', 16),
            t.EFF(14, 'Name'),
            t.k0s(),
            t.EFF(15, '\n\n                '),
            t.nrm(16, 'fa-icon', 17),
            t.EFF(17, '\n              '),
            t.k0s(),
            t.EFF(18, '\n            '),
            t.k0s(),
            t.EFF(19, '\n            '),
            t.nrm(20, 'th', 18),
            t.EFF(21, '\n          '),
            t.k0s(),
            t.EFF(22, '\n        '),
            t.k0s(),
            t.EFF(23, '\n        '),
            t.j41(24, 'tbody'),
            t.EFF(25, '\n          '),
            t.Z7z(26, V, 32, 7, null, null, B, !0),
            t.k0s(),
            t.EFF(28, '\n      '),
            t.k0s(),
            t.EFF(29, '\n    '),
            t.k0s(),
            t.EFF(30, '\n  ');
        }
        if (2 & i) {
          const n = t.XpG();
          t.R7$(7), t.R50('sortState', n.sortState), t.R7$(19), t.Dyx(n.authorities());
        }
      }
      let N = (() => {
        class i {
          constructor() {
            (this.subscription = null),
              (this.authorities = (0, t.vPA)([])),
              (this.isLoading = !1),
              (this.sortState = (0, g.q)({})),
              (this.router = (0, t.WQX)(F.Ix)),
              (this.authorityService = (0, t.WQX)(p.L)),
              (this.activatedRoute = (0, t.WQX)(F.nX)),
              (this.sortService = (0, t.WQX)(k.a)),
              (this.modalService = (0, t.WQX)(d.Bq)),
              (this.ngZone = (0, t.WQX)(t.SKi)),
              (this.trackName = n => this.authorityService.getAuthorityIdentifier(n));
          }
          ngOnInit() {
            this.subscription = (0, f.z)([this.activatedRoute.queryParamMap, this.activatedRoute.data])
              .pipe(
                (0, l.M)(([n, e]) => this.fillComponentAttributeFromRoute(n, e)),
                (0, l.M)(() => {
                  0 === this.authorities().length ? this.load() : this.authorities.set(this.refineData(this.authorities()));
                }),
              )
              .subscribe();
          }
          delete(n) {
            const e = this.modalService.open(R, { size: 'lg', backdrop: 'static' });
            (e.componentInstance.authority = n),
              e.closed
                .pipe(
                  (0, b.p)(o => o === h.zK),
                  (0, l.M)(() => this.load()),
                )
                .subscribe();
          }
          load() {
            this.queryBackend().subscribe({
              next: n => {
                this.onResponseSuccess(n);
              },
            });
          }
          navigateToWithComponentValues(n) {
            this.handleNavigation(n);
          }
          fillComponentAttributeFromRoute(n, e) {
            this.sortState.set(this.sortService.parseSortParam(n.get(h.fv) ?? e[h.k7]));
          }
          onResponseSuccess(n) {
            const e = this.fillComponentAttributesFromResponseBody(n.body);
            this.authorities.set(this.refineData(e));
          }
          refineData(n) {
            const { predicate: e, order: o } = this.sortState();
            return e && o ? n.sort(this.sortService.startSort({ predicate: e, order: o })) : n;
          }
          fillComponentAttributesFromResponseBody(n) {
            return n ?? [];
          }
          queryBackend() {
            this.isLoading = !0;
            const n = { sort: this.sortService.buildSortParam(this.sortState()) };
            return this.authorityService.query(n).pipe((0, l.M)(() => (this.isLoading = !1)));
          }
          handleNavigation(n) {
            const e = { sort: this.sortService.buildSortParam(n) };
            this.ngZone.run(() => {
              this.router.navigate(['./'], { relativeTo: this.activatedRoute, queryParams: e });
            });
          }
          static {
            this.ɵfac = function (e) {
              return new (e || i)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: i,
              selectors: [['jhi-authority']],
              decls: 34,
              vars: 5,
              consts: [
                ['id', 'page-heading', 'data-cy', 'AuthorityHeading'],
                ['jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.home.title'],
                [1, 'd-flex', 'justify-content-end'],
                [1, 'btn', 'btn-info', 'me-2', 3, 'click', 'disabled'],
                ['icon', 'sync', 3, 'animation'],
                ['jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.home.refreshListLabel'],
                [
                  'id',
                  'jh-create-entity',
                  'data-cy',
                  'entityCreateButton',
                  1,
                  'btn',
                  'btn-primary',
                  'jh-create-entity',
                  'create-authority',
                  3,
                  'routerLink',
                ],
                ['icon', 'plus'],
                ['jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.home.createLabel'],
                ['id', 'no-result', 1, 'alert', 'alert-warning'],
                ['jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.home.notFound'],
                ['id', 'entities', 1, 'table-responsive', 'table-entities'],
                ['aria-describedby', 'page-heading', 1, 'table', 'table-striped'],
                ['jhiSort', '', 3, 'sortStateChange', 'sortChange', 'sortState'],
                ['scope', 'col', 'jhiSortBy', 'name'],
                [1, 'd-flex'],
                ['jhiTranslate', 'javascriptTypescriptKataApp.adminAuthority.name'],
                ['icon', 'sort', 1, 'p-1'],
                ['scope', 'col'],
                ['data-cy', 'entityTable'],
                [3, 'routerLink'],
                [1, 'text-end'],
                [1, 'btn-group'],
                ['data-cy', 'entityDetailsButton', 1, 'btn', 'btn-info', 'btn-sm', 3, 'routerLink'],
                ['icon', 'eye'],
                ['jhiTranslate', 'entity.action.view', 1, 'd-none', 'd-md-inline'],
                ['type', 'submit', 'data-cy', 'entityDeleteButton', 1, 'btn', 'btn-danger', 'btn-sm', 3, 'click'],
                ['icon', 'times'],
                ['jhiTranslate', 'entity.action.delete', 1, 'd-none', 'd-md-inline'],
              ],
              template: function (e, o) {
                1 & e &&
                  (t.j41(0, 'div'),
                  t.EFF(1, '\n  '),
                  t.j41(2, 'h2', 0),
                  t.EFF(3, '\n    '),
                  t.j41(4, 'span', 1),
                  t.EFF(5, 'Authorities'),
                  t.k0s(),
                  t.EFF(6, '\n\n    '),
                  t.j41(7, 'div', 2),
                  t.EFF(8, '\n      '),
                  t.j41(9, 'button', 3),
                  t.bIt('click', function () {
                    return o.load();
                  }),
                  t.EFF(10, '\n        '),
                  t.nrm(11, 'fa-icon', 4),
                  t.EFF(12, '\n        '),
                  t.j41(13, 'span', 5),
                  t.EFF(14, 'Refresh list'),
                  t.k0s(),
                  t.EFF(15, '\n      '),
                  t.k0s(),
                  t.EFF(16, '\n\n      '),
                  t.j41(17, 'button', 6),
                  t.EFF(18, '\n        '),
                  t.nrm(19, 'fa-icon', 7),
                  t.EFF(20, '\n        '),
                  t.j41(21, 'span', 8),
                  t.EFF(22, 'Create a new Authority'),
                  t.k0s(),
                  t.EFF(23, '\n      '),
                  t.k0s(),
                  t.EFF(24, '\n    '),
                  t.k0s(),
                  t.EFF(25, '\n  '),
                  t.k0s(),
                  t.EFF(26, '\n\n  '),
                  t.nrm(27, 'jhi-alert-error'),
                  t.EFF(28, '\n\n  '),
                  t.nrm(29, 'jhi-alert'),
                  t.EFF(30, '\n\n  '),
                  t.DNE(31, x, 7, 0)(32, X, 31, 1),
                  t.k0s(),
                  t.EFF(33, '\n')),
                  2 & e &&
                    (t.R7$(9),
                    t.Y8G('disabled', o.isLoading),
                    t.R7$(2),
                    t.Y8G('animation', o.isLoading ? 'spin' : void 0),
                    t.R7$(6),
                    t.Y8G('routerLink', t.lJ4(4, L)),
                    t.R7$(14),
                    t.vxM(0 === o.authorities().length ? 31 : 32));
              },
              dependencies: [F.iI, F.Wk, c.YN, m.A, y.aY, D.C, E.U, j.A, A._, C.b],
              encapsulation: 2,
            });
          }
        }
        return i;
      })();
    },
  },
]);
