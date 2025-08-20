'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [828],
  {
    4828: (Y, d, i) => {
      i.r(d), i.d(d, { default: () => N });
      var t = i(4438),
        F = i(8498),
        j = i(4572),
        c = i(1314),
        u = i(9543),
        f = i(4899),
        _ = i(7578),
        b = i(5780),
        k = i(9758),
        C = i(6160),
        m = i(8300);
      const y = (s, r, n) => ({ first: s, second: r, total: n });
      let M = (() => {
        class s {
          constructor() {
            (this.params = (0, t.hFB)()),
              (this.first = (0, t.EWP)(() => {
                const n = this.params();
                if (n?.page && void 0 !== n.totalItems && n.itemsPerPage) return (n.page - 1) * n.itemsPerPage + 1;
              })),
              (this.second = (0, t.EWP)(() => {
                const n = this.params();
                if (n?.page && void 0 !== n.totalItems && n.itemsPerPage)
                  return n.page * n.itemsPerPage < n.totalItems ? n.page * n.itemsPerPage : n.totalItems;
              })),
              (this.total = (0, t.EWP)(() => this.params()?.totalItems));
          }
          static {
            this.ɵfac = function (e) {
              return new (e || s)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: s,
              selectors: [['jhi-item-count']],
              inputs: { params: [1, 'params'] },
              decls: 3,
              vars: 5,
              consts: [['jhiTranslate', 'global.item-count', 3, 'translateValues']],
              template: function (e, a) {
                1 & e && (t.EFF(0, ' '), t.nrm(1, 'div', 0), t.EFF(2, ' ')),
                  2 & e && (t.R7$(), t.Y8G('translateValues', t.sMw(1, y, a.first(), a.second(), a.total())));
              },
              dependencies: [m.A],
              encapsulation: 2,
            });
          }
        }
        return s;
      })();
      var R = i(4573),
        E = i(6192),
        l = i(9417),
        p = i(60),
        g = i(651);
      const S = s => ({ login: s });
      function T(s, r) {
        if (1 & s) {
          const n = t.RV6();
          t.EFF(0, '\n  '),
            t.j41(1, 'form', 0),
            t.bIt('ngSubmit', function () {
              t.eBV(n);
              const a = t.XpG();
              return t.Njj(a.confirmDelete(a.user.login));
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
            t.EFF(12, '\n\n      '),
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
              const a = t.XpG();
              return t.Njj(a.cancel());
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
        if (2 & s) {
          const n = t.XpG();
          t.R7$(13),
            t.Y8G('translateValues', t.eq3(2, S, n.user.login)),
            t.R7$(),
            t.SpI('\n        Are you sure you want to delete user ', n.user.login, '?\n      ');
        }
      }
      let P = (() => {
        class s {
          constructor() {
            (this.userService = (0, t.WQX)(E.G)), (this.activeModal = (0, t.WQX)(c.Lw));
          }
          cancel() {
            this.activeModal.dismiss();
          }
          confirmDelete(n) {
            this.userService.delete(n).subscribe(() => {
              this.activeModal.close('deleted');
            });
          }
          static {
            this.ɵfac = function (e) {
              return new (e || s)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: s,
              selectors: [['jhi-user-mgmt-delete-dialog']],
              decls: 1,
              vars: 1,
              consts: [
                ['name', 'deleteForm', 3, 'ngSubmit'],
                [1, 'modal-header'],
                ['jhiTranslate', 'entity.delete.title', 1, 'modal-title'],
                [1, 'modal-body'],
                ['jhiTranslate', 'userManagement.delete.question', 3, 'translateValues'],
                [1, 'modal-footer'],
                ['type', 'button', 'data-dismiss', 'modal', 1, 'btn', 'btn-secondary', 3, 'click'],
                ['icon', 'ban'],
                ['jhiTranslate', 'entity.action.cancel'],
                ['type', 'submit', 1, 'btn', 'btn-danger'],
                ['icon', 'times'],
                ['jhiTranslate', 'entity.action.delete'],
              ],
              template: function (e, a) {
                1 & e && t.DNE(0, T, 37, 4), 2 & e && t.vxM(a.user ? 0 : -1);
              },
              dependencies: [u.A, p.aY, g.U, m.A, l.YN, l.qT, l.cb, l.cV],
              encapsulation: 2,
            });
          }
        }
        return s;
      })();
      var G = i(8372),
        I = i(177);
      function D(s, r) {
        return this.trackIdentity(r);
      }
      const A = () => ['./new'],
        U = (s, r, n) => ({ page: s, totalItems: r, itemsPerPage: n }),
        h = s => ['./', s, 'view'],
        $ = s => ['./', s, 'edit'];
      function X(s, r) {
        if (1 & s) {
          const n = t.RV6();
          t.EFF(0, '\n                  '),
            t.j41(1, 'button', 43),
            t.bIt('click', function () {
              t.eBV(n);
              const a = t.XpG().$implicit,
                o = t.XpG(2);
              return t.Njj(o.setActive(a, !0));
            }),
            t.EFF(2, '\n                    Deactivated\n                  '),
            t.k0s(),
            t.EFF(3, '\n                ');
        }
      }
      function x(s, r) {
        if (1 & s) {
          const n = t.RV6();
          t.EFF(0, '\n                  '),
            t.j41(1, 'button', 44),
            t.bIt('click', function () {
              t.eBV(n);
              const a = t.XpG().$implicit,
                o = t.XpG(2);
              return t.Njj(o.setActive(a, !1));
            }),
            t.EFF(2, '\n                    Activated\n                  '),
            t.k0s(),
            t.EFF(3, '\n                ');
        }
        if (2 & s) {
          let n;
          const e = t.XpG().$implicit,
            a = t.XpG(2);
          t.R7$(), t.Y8G('disabled', !a.currentAccount() || (null == (n = a.currentAccount()) ? null : n.login) === e.login);
        }
      }
      function B(s, r) {
        if (
          (1 & s &&
            (t.EFF(0, '\n                  '),
            t.j41(1, 'div'),
            t.EFF(2, '\n                    '),
            t.j41(3, 'span', 45),
            t.EFF(4),
            t.k0s(),
            t.EFF(5, '\n                  '),
            t.k0s(),
            t.EFF(6, '\n                ')),
          2 & s)
        ) {
          const n = r.$implicit;
          t.R7$(4), t.JRh(n);
        }
      }
      function L(s, r) {
        if (1 & s) {
          const n = t.RV6();
          t.EFF(0, '\n            '),
            t.j41(1, 'tr'),
            t.EFF(2, '\n              '),
            t.j41(3, 'td'),
            t.EFF(4, '\n                '),
            t.j41(5, 'a', 31),
            t.EFF(6),
            t.k0s(),
            t.EFF(7, '\n              '),
            t.k0s(),
            t.EFF(8, '\n              '),
            t.j41(9, 'td'),
            t.EFF(10),
            t.k0s(),
            t.EFF(11, '\n              '),
            t.j41(12, 'td'),
            t.EFF(13),
            t.k0s(),
            t.EFF(14, '\n              '),
            t.j41(15, 'td'),
            t.EFF(16, '\n                '),
            t.DNE(17, X, 4, 0)(18, x, 4, 1),
            t.k0s(),
            t.EFF(19, '\n              '),
            t.j41(20, 'td'),
            t.EFF(21),
            t.k0s(),
            t.EFF(22, '\n              '),
            t.j41(23, 'td'),
            t.EFF(24, '\n                '),
            t.Z7z(25, B, 7, 1, null, null, t.Vm6),
            t.k0s(),
            t.EFF(27, '\n              '),
            t.j41(28, 'td'),
            t.EFF(29),
            t.nI1(30, 'date'),
            t.k0s(),
            t.EFF(31, '\n              '),
            t.j41(32, 'td'),
            t.EFF(33),
            t.k0s(),
            t.EFF(34, '\n              '),
            t.j41(35, 'td'),
            t.EFF(36),
            t.nI1(37, 'date'),
            t.k0s(),
            t.EFF(38, '\n              '),
            t.j41(39, 'td', 32),
            t.EFF(40, '\n                '),
            t.j41(41, 'div', 33),
            t.EFF(42, '\n                  '),
            t.j41(43, 'button', 34),
            t.EFF(44, '\n                    '),
            t.nrm(45, 'fa-icon', 35),
            t.EFF(46, '\n                    '),
            t.j41(47, 'span', 36),
            t.EFF(48, 'View'),
            t.k0s(),
            t.EFF(49, '\n                  '),
            t.k0s(),
            t.EFF(50, '\n\n                  '),
            t.j41(51, 'button', 37),
            t.EFF(52, '\n                    '),
            t.nrm(53, 'fa-icon', 38),
            t.EFF(54, '\n                    '),
            t.j41(55, 'span', 39),
            t.EFF(56, 'Edit'),
            t.k0s(),
            t.EFF(57, '\n                  '),
            t.k0s(),
            t.EFF(58, '\n\n                  '),
            t.j41(59, 'button', 40),
            t.bIt('click', function () {
              const a = t.eBV(n).$implicit,
                o = t.XpG(2);
              return t.Njj(o.deleteUser(a));
            }),
            t.EFF(60, '\n                    '),
            t.nrm(61, 'fa-icon', 41),
            t.EFF(62, '\n                    '),
            t.j41(63, 'span', 42),
            t.EFF(64, 'Delete'),
            t.k0s(),
            t.EFF(65, '\n                  '),
            t.k0s(),
            t.EFF(66, '\n                '),
            t.k0s(),
            t.EFF(67, '\n              '),
            t.k0s(),
            t.EFF(68, '\n            '),
            t.k0s(),
            t.EFF(69, '\n          ');
        }
        if (2 & s) {
          let n;
          const e = r.$implicit,
            a = t.XpG(2);
          t.R7$(5),
            t.Y8G('routerLink', t.eq3(18, h, e.login)),
            t.R7$(),
            t.JRh(e.id),
            t.R7$(4),
            t.JRh(e.login),
            t.R7$(3),
            t.JRh(e.email),
            t.R7$(4),
            t.vxM(e.activated ? 18 : 17),
            t.R7$(4),
            t.JRh(e.langKey),
            t.R7$(4),
            t.Dyx(e.authorities),
            t.R7$(4),
            t.JRh(t.i5U(30, 12, e.createdDate, 'dd/MM/yy HH:mm')),
            t.R7$(4),
            t.JRh(e.lastModifiedBy),
            t.R7$(3),
            t.JRh(t.i5U(37, 15, e.lastModifiedDate, 'dd/MM/yy HH:mm')),
            t.R7$(7),
            t.Y8G('routerLink', t.eq3(20, h, e.login)),
            t.R7$(8),
            t.Y8G('routerLink', t.eq3(22, $, e.login)),
            t.R7$(8),
            t.Y8G('disabled', !a.currentAccount() || (null == (n = a.currentAccount()) ? null : n.login) === e.login);
        }
      }
      function V(s, r) {
        if (1 & s) {
          const n = t.RV6();
          t.EFF(0, '\n    '),
            t.j41(1, 'div', 8),
            t.EFF(2, '\n      '),
            t.j41(3, 'table', 9),
            t.EFF(4, '\n        '),
            t.j41(5, 'thead'),
            t.EFF(6, '\n          '),
            t.j41(7, 'tr', 10),
            t.mxI('sortStateChange', function (a) {
              t.eBV(n);
              const o = t.XpG();
              return t.DH7(o.sortState, a) || (o.sortState = a), t.Njj(a);
            }),
            t.bIt('sortChange', function (a) {
              t.eBV(n);
              const o = t.XpG();
              return t.Njj(o.transition(a));
            }),
            t.EFF(8, '\n            '),
            t.j41(9, 'th', 11)(10, 'span', 12),
            t.EFF(11, 'ID'),
            t.k0s(),
            t.EFF(12, ' '),
            t.nrm(13, 'fa-icon', 13),
            t.k0s(),
            t.EFF(14, '\n            '),
            t.j41(15, 'th', 14)(16, 'span', 15),
            t.EFF(17, 'Login'),
            t.k0s(),
            t.EFF(18, ' '),
            t.nrm(19, 'fa-icon', 13),
            t.k0s(),
            t.EFF(20, '\n            '),
            t.j41(21, 'th', 16)(22, 'span', 17),
            t.EFF(23, 'Email'),
            t.k0s(),
            t.EFF(24, ' '),
            t.nrm(25, 'fa-icon', 13),
            t.k0s(),
            t.EFF(26, '\n            '),
            t.nrm(27, 'th', 18),
            t.EFF(28, '\n            '),
            t.j41(29, 'th', 19),
            t.EFF(30, '\n              '),
            t.j41(31, 'span', 20),
            t.EFF(32, 'Language'),
            t.k0s(),
            t.EFF(33, ' '),
            t.nrm(34, 'fa-icon', 13),
            t.EFF(35, '\n            '),
            t.k0s(),
            t.EFF(36, '\n            '),
            t.j41(37, 'th', 18)(38, 'span', 21),
            t.EFF(39, 'Profiles'),
            t.k0s()(),
            t.EFF(40, '\n            '),
            t.j41(41, 'th', 22),
            t.EFF(42, '\n              '),
            t.j41(43, 'span', 23),
            t.EFF(44, 'Created date'),
            t.k0s(),
            t.EFF(45, ' '),
            t.nrm(46, 'fa-icon', 13),
            t.EFF(47, '\n            '),
            t.k0s(),
            t.EFF(48, '\n            '),
            t.j41(49, 'th', 24),
            t.EFF(50, '\n              '),
            t.j41(51, 'span', 25),
            t.EFF(52, 'Modified by'),
            t.k0s(),
            t.EFF(53, ' '),
            t.nrm(54, 'fa-icon', 13),
            t.EFF(55, '\n            '),
            t.k0s(),
            t.EFF(56, '\n            '),
            t.j41(57, 'th', 26),
            t.EFF(58, '\n              '),
            t.j41(59, 'span', 27),
            t.EFF(60, 'Modified date'),
            t.k0s(),
            t.EFF(61, ' '),
            t.nrm(62, 'fa-icon', 13),
            t.EFF(63, '\n            '),
            t.k0s(),
            t.EFF(64, '\n            '),
            t.nrm(65, 'th', 18),
            t.EFF(66, '\n          '),
            t.k0s(),
            t.EFF(67, '\n        '),
            t.k0s(),
            t.EFF(68, '\n        '),
            t.j41(69, 'tbody'),
            t.EFF(70, '\n          '),
            t.Z7z(71, L, 70, 24, null, null, D, !0),
            t.k0s(),
            t.EFF(73, '\n      '),
            t.k0s(),
            t.EFF(74, '\n    '),
            t.k0s(),
            t.EFF(75, '\n\n    '),
            t.j41(76, 'div'),
            t.EFF(77, '\n      '),
            t.j41(78, 'div', 28),
            t.EFF(79, '\n        '),
            t.nrm(80, 'jhi-item-count', 29),
            t.EFF(81, '\n      '),
            t.k0s(),
            t.EFF(82, '\n\n      '),
            t.j41(83, 'div', 28),
            t.EFF(84, '\n        '),
            t.j41(85, 'ngb-pagination', 30),
            t.mxI('pageChange', function (a) {
              t.eBV(n);
              const o = t.XpG();
              return t.DH7(o.page, a) || (o.page = a), t.Njj(a);
            }),
            t.bIt('pageChange', function () {
              t.eBV(n);
              const a = t.XpG();
              return t.Njj(a.transition());
            }),
            t.k0s(),
            t.EFF(86, '\n      '),
            t.k0s(),
            t.EFF(87, '\n    '),
            t.k0s(),
            t.EFF(88, '\n  ');
        }
        if (2 & s) {
          const n = t.XpG();
          t.R7$(7),
            t.R50('sortState', n.sortState),
            t.R7$(64),
            t.Dyx(n.users()),
            t.R7$(9),
            t.Y8G('params', t.sMw(8, U, n.page, n.totalItems(), n.itemsPerPage)),
            t.R7$(5),
            t.Y8G('collectionSize', n.totalItems()),
            t.R50('page', n.page),
            t.Y8G('pageSize', n.itemsPerPage)('maxSize', 5)('rotate', !0)('boundaryLinks', !0);
        }
      }
      let N = (() => {
        class s {
          constructor() {
            (this.currentAccount = (0, t.WQX)(R.D).trackCurrentAccount()),
              (this.users = (0, t.vPA)(null)),
              (this.isLoading = (0, t.vPA)(!1)),
              (this.totalItems = (0, t.vPA)(0)),
              (this.itemsPerPage = 20),
              (this.sortState = (0, f.q)({})),
              (this.userService = (0, t.WQX)(E.G)),
              (this.activatedRoute = (0, t.WQX)(F.nX)),
              (this.router = (0, t.WQX)(F.Ix)),
              (this.sortService = (0, t.WQX)(_.a)),
              (this.modalService = (0, t.WQX)(c.Bq));
          }
          ngOnInit() {
            this.handleNavigation();
          }
          setActive(n, e) {
            this.userService.update({ ...n, activated: e }).subscribe(() => this.loadAll());
          }
          trackIdentity(n) {
            return n.id;
          }
          deleteUser(n) {
            const e = this.modalService.open(P, { size: 'lg', backdrop: 'static' });
            (e.componentInstance.user = n),
              e.closed.subscribe(a => {
                'deleted' === a && this.loadAll();
              });
          }
          loadAll() {
            this.isLoading.set(!0),
              this.userService
                .query({ page: this.page - 1, size: this.itemsPerPage, sort: this.sortService.buildSortParam(this.sortState(), 'id') })
                .subscribe({
                  next: n => {
                    this.isLoading.set(!1), this.onSuccess(n.body, n.headers);
                  },
                  error: () => this.isLoading.set(!1),
                });
          }
          transition(n) {
            this.router.navigate(['./'], {
              relativeTo: this.activatedRoute.parent,
              queryParams: { page: this.page, sort: this.sortService.buildSortParam(n ?? this.sortState()) },
            });
          }
          handleNavigation() {
            (0, j.z)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([n, e]) => {
              const a = e.get('page');
              (this.page = +(a ?? 1)), this.sortState.set(this.sortService.parseSortParam(e.get(C.fv) ?? n.defaultSort)), this.loadAll();
            });
          }
          onSuccess(n, e) {
            this.totalItems.set(Number(e.get('X-Total-Count'))), this.users.set(n);
          }
          static {
            this.ɵfac = function (e) {
              return new (e || s)();
            };
          }
          static {
            this.ɵcmp = t.VBU({
              type: s,
              selectors: [['jhi-user-mgmt']],
              decls: 33,
              vars: 5,
              consts: [
                ['id', 'user-management-page-heading', 'data-cy', 'userManagementPageHeading', 'jhiTranslate', 'userManagement.home.title'],
                [1, 'd-flex', 'justify-content-end'],
                [1, 'btn', 'btn-info', 'me-2', 3, 'click', 'disabled'],
                ['icon', 'sync', 3, 'animation'],
                ['jhiTranslate', 'userManagement.home.refreshListLabel'],
                [1, 'btn', 'btn-primary', 'jh-create-entity', 3, 'routerLink'],
                ['icon', 'plus'],
                ['jhiTranslate', 'userManagement.home.createLabel'],
                [1, 'table-responsive'],
                ['aria-describedby', 'user-management-page-heading', 1, 'table', 'table-striped'],
                ['jhiSort', '', 3, 'sortStateChange', 'sortChange', 'sortState'],
                ['scope', 'col', 'jhiSortBy', 'id'],
                ['jhiTranslate', 'global.field.id'],
                ['icon', 'sort'],
                ['scope', 'col', 'jhiSortBy', 'login'],
                ['jhiTranslate', 'userManagement.login'],
                ['scope', 'col', 'jhiSortBy', 'email'],
                ['jhiTranslate', 'userManagement.email'],
                ['scope', 'col'],
                ['scope', 'col', 'jhiSortBy', 'langKey'],
                ['jhiTranslate', 'userManagement.langKey'],
                ['jhiTranslate', 'userManagement.profiles'],
                ['scope', 'col', 'jhiSortBy', 'createdDate'],
                ['jhiTranslate', 'userManagement.createdDate'],
                ['scope', 'col', 'jhiSortBy', 'lastModifiedBy'],
                ['jhiTranslate', 'userManagement.lastModifiedBy'],
                ['scope', 'col', 'jhiSortBy', 'lastModifiedDate'],
                ['jhiTranslate', 'userManagement.lastModifiedDate'],
                [1, 'd-flex', 'justify-content-center'],
                [3, 'params'],
                [3, 'pageChange', 'collectionSize', 'page', 'pageSize', 'maxSize', 'rotate', 'boundaryLinks'],
                [3, 'routerLink'],
                [1, 'text-end'],
                [1, 'btn-group'],
                ['type', 'submit', 1, 'btn', 'btn-info', 'btn-sm', 3, 'routerLink'],
                ['icon', 'eye'],
                ['jhiTranslate', 'entity.action.view', 1, 'd-none', 'd-md-inline'],
                ['type', 'submit', 'queryParamsHandling', 'merge', 1, 'btn', 'btn-primary', 'btn-sm', 3, 'routerLink'],
                ['icon', 'pencil-alt'],
                ['jhiTranslate', 'entity.action.edit', 1, 'd-none', 'd-md-inline'],
                ['type', 'button', 1, 'btn', 'btn-danger', 'btn-sm', 3, 'click', 'disabled'],
                ['icon', 'times'],
                ['jhiTranslate', 'entity.action.delete', 1, 'd-none', 'd-md-inline'],
                ['jhiTranslate', 'userManagement.deactivated', 1, 'btn', 'btn-danger', 'btn-sm', 3, 'click'],
                ['jhiTranslate', 'userManagement.activated', 1, 'btn', 'btn-success', 'btn-sm', 3, 'click', 'disabled'],
                [1, 'badge', 'bg-info'],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.j41(0, 'div'),
                  t.EFF(1, '\n  '),
                  t.j41(2, 'h2'),
                  t.EFF(3, '\n    '),
                  t.j41(4, 'span', 0),
                  t.EFF(5, 'Users'),
                  t.k0s(),
                  t.EFF(6, '\n\n    '),
                  t.j41(7, 'div', 1),
                  t.EFF(8, '\n      '),
                  t.j41(9, 'button', 2),
                  t.bIt('click', function () {
                    return a.loadAll();
                  }),
                  t.EFF(10, '\n        '),
                  t.nrm(11, 'fa-icon', 3),
                  t.EFF(12, '\n        '),
                  t.j41(13, 'span', 4),
                  t.EFF(14, 'Refresh list'),
                  t.k0s(),
                  t.EFF(15, '\n      '),
                  t.k0s(),
                  t.EFF(16, '\n      '),
                  t.j41(17, 'button', 5),
                  t.EFF(18, '\n        '),
                  t.nrm(19, 'fa-icon', 6),
                  t.EFF(20, ' '),
                  t.j41(21, 'span', 7),
                  t.EFF(22, 'Create a new user'),
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
                  t.DNE(31, V, 89, 12),
                  t.k0s(),
                  t.EFF(32, '\n')),
                  2 & e &&
                    (t.R7$(9),
                    t.Y8G('disabled', a.isLoading()),
                    t.R7$(2),
                    t.Y8G('animation', a.isLoading() ? 'spin' : void 0),
                    t.R7$(6),
                    t.Y8G('routerLink', t.lJ4(4, A)),
                    t.R7$(14),
                    t.vxM(a.users() ? 31 : -1));
              },
              dependencies: [F.iI, F.Wk, u.A, c.s5, p.aY, G.C, g.U, m.A, I.vh, b._, k.b, M],
              encapsulation: 2,
            });
          }
        }
        return s;
      })();
    },
  },
]);
