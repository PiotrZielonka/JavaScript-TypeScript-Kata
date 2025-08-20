'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [239],
  {
    8239: (X, d, o) => {
      o.r(d), o.d(d, { default: () => I });
      var n = o(4438),
        l = o(8498),
        u = o(8018),
        E = o(1055),
        m = o(9543),
        p = o(4573);
      let g = (() => {
        class i {
          constructor() {
            (this.authorities = (0, n.hFB)([], { alias: 'jhiHasAnyAuthority' })),
              (this.templateRef = (0, n.WQX)(n.C4Q)),
              (this.viewContainerRef = (0, n.WQX)(n.c1b));
            const t = (0, n.WQX)(p.D),
              e = t.trackCurrentAccount(),
              a = (0, n.EWP)(() => e()?.authorities && t.hasAnyAuthority(this.authorities()));
            (0, n.QZP)(() => {
              a() ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
            });
          }
          static {
            this.ɵfac = function (e) {
              return new (e || i)();
            };
          }
          static {
            this.ɵdir = n.FsC({
              type: i,
              selectors: [['', 'jhiHasAnyAuthority', '']],
              inputs: { authorities: [1, 'jhiHasAnyAuthority', 'authorities'] },
            });
          }
        }
        return i;
      })();
      var k = o(4744),
        h = o(1723),
        j = o(6949);
      const b = [];
      var f = o(7384);
      let _ = (() => {
        class i {
          constructor() {
            (this.jhiActiveMenu = (0, n.hFB)()),
              (this.el = (0, n.WQX)(n.aKT)),
              (this.renderer = (0, n.WQX)(n.sFG)),
              (this.translateService = (0, n.WQX)(u.c$));
          }
          ngOnInit() {
            this.translateService.onLangChange.subscribe(t => {
              this.updateActiveFlag(t.lang);
            }),
              this.updateActiveFlag(this.translateService.currentLang);
          }
          updateActiveFlag(t) {
            this.jhiActiveMenu() === t
              ? this.renderer.addClass(this.el.nativeElement, 'active')
              : this.renderer.removeClass(this.el.nativeElement, 'active');
          }
          static {
            this.ɵfac = function (e) {
              return new (e || i)();
            };
          }
          static {
            this.ɵdir = n.FsC({ type: i, selectors: [['', 'jhiActiveMenu', '']], inputs: { jhiActiveMenu: [1, 'jhiActiveMenu'] } });
          }
        }
        return i;
      })();
      var F = o(1314),
        C = o(60),
        N = o(8300),
        A = o(3152);
      const s = () => ({ exact: !0 });
      function x(i, r) {
        1 & i &&
          (n.EFF(0, '\n          '),
          n.j41(1, 'li', 18),
          n.EFF(2, '\n            '),
          n.j41(3, 'a', 21),
          n.EFF(4, '\n              '),
          n.j41(5, 'span'),
          n.EFF(6, '\n                '),
          n.nrm(7, 'fa-icon', 22),
          n.EFF(8, '\n                '),
          n.j41(9, 'span', 23),
          n.EFF(10, 'Entities'),
          n.k0s(),
          n.EFF(11, '\n              '),
          n.k0s(),
          n.EFF(12, '\n            '),
          n.k0s(),
          n.EFF(13, '\n            '),
          n.j41(14, 'ul', 24),
          n.EFF(15, '\n              '),
          n.EFF(16, '\n            '),
          n.k0s(),
          n.EFF(17, '\n          '),
          n.k0s(),
          n.EFF(18, '\n        ')),
          2 & i && (n.R7$(), n.Y8G('routerLinkActiveOptions', n.lJ4(1, s)));
      }
      function T(i, r) {
        if (1 & i) {
          const t = n.RV6();
          n.EFF(0, '\n              '),
            n.j41(1, 'li'),
            n.EFF(2, '\n                '),
            n.j41(3, 'a', 46),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG(2);
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(4, '\n                  '),
            n.nrm(5, 'fa-icon', 47),
            n.EFF(6, '\n                  '),
            n.j41(7, 'span', 48),
            n.EFF(8, 'API'),
            n.k0s(),
            n.EFF(9, '\n                '),
            n.k0s(),
            n.EFF(10, '\n              '),
            n.k0s(),
            n.EFF(11, '\n            ');
        }
        2 & i && (n.R7$(5), n.Y8G('fixedWidth', !0));
      }
      function R(i, r) {
        if (1 & i) {
          const t = n.RV6();
          n.EFF(0, '\n              '),
            n.j41(1, 'li'),
            n.EFF(2, '\n                '),
            n.j41(3, 'a', 49),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG(2);
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(4, '\n                  '),
            n.nrm(5, 'fa-icon', 50),
            n.EFF(6, '\n                  '),
            n.j41(7, 'span', 51),
            n.EFF(8, 'Database'),
            n.k0s(),
            n.EFF(9, '\n                '),
            n.k0s(),
            n.EFF(10, '\n              '),
            n.k0s(),
            n.EFF(11, '\n            ');
        }
        2 & i && (n.R7$(5), n.Y8G('fixedWidth', !0));
      }
      function y(i, r) {
        if (1 & i) {
          const t = n.RV6();
          n.j41(0, 'li', 18),
            n.EFF(1, '\n          '),
            n.j41(2, 'a', 25),
            n.EFF(3, '\n            '),
            n.j41(4, 'span'),
            n.EFF(5, '\n              '),
            n.nrm(6, 'fa-icon', 26),
            n.EFF(7, '\n              '),
            n.j41(8, 'span', 27),
            n.EFF(9, 'Administration'),
            n.k0s(),
            n.EFF(10, '\n            '),
            n.k0s(),
            n.EFF(11, '\n          '),
            n.k0s(),
            n.EFF(12, '\n          '),
            n.j41(13, 'ul', 28),
            n.EFF(14, '\n            '),
            n.j41(15, 'li'),
            n.EFF(16, '\n              '),
            n.j41(17, 'a', 29),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(18, '\n                '),
            n.nrm(19, 'fa-icon', 15),
            n.EFF(20, '\n                '),
            n.j41(21, 'span', 30),
            n.EFF(22, 'Authority'),
            n.k0s(),
            n.EFF(23, '\n              '),
            n.k0s(),
            n.EFF(24, '\n            '),
            n.k0s(),
            n.EFF(25, '\n            '),
            n.EFF(26, '\n            '),
            n.j41(27, 'li'),
            n.EFF(28, '\n              '),
            n.j41(29, 'a', 31),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(30, '\n                '),
            n.nrm(31, 'fa-icon', 32),
            n.EFF(32, '\n                '),
            n.j41(33, 'span', 33),
            n.EFF(34, 'User management'),
            n.k0s(),
            n.EFF(35, '\n              '),
            n.k0s(),
            n.EFF(36, '\n            '),
            n.k0s(),
            n.EFF(37, '\n            '),
            n.j41(38, 'li'),
            n.EFF(39, '\n              '),
            n.j41(40, 'a', 34),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(41, '\n                '),
            n.nrm(42, 'fa-icon', 35),
            n.EFF(43, '\n                '),
            n.j41(44, 'span', 36),
            n.EFF(45, 'Metrics'),
            n.k0s(),
            n.EFF(46, '\n              '),
            n.k0s(),
            n.EFF(47, '\n            '),
            n.k0s(),
            n.EFF(48, '\n            '),
            n.j41(49, 'li'),
            n.EFF(50, '\n              '),
            n.j41(51, 'a', 37),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(52, '\n                '),
            n.nrm(53, 'fa-icon', 38),
            n.EFF(54, '\n                '),
            n.j41(55, 'span', 39),
            n.EFF(56, 'Health'),
            n.k0s(),
            n.EFF(57, '\n              '),
            n.k0s(),
            n.EFF(58, '\n            '),
            n.k0s(),
            n.EFF(59, '\n            '),
            n.j41(60, 'li'),
            n.EFF(61, '\n              '),
            n.j41(62, 'a', 40),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(63, '\n                '),
            n.nrm(64, 'fa-icon', 41),
            n.EFF(65, '\n                '),
            n.j41(66, 'span', 42),
            n.EFF(67, 'Configuration'),
            n.k0s(),
            n.EFF(68, '\n              '),
            n.k0s(),
            n.EFF(69, '\n            '),
            n.k0s(),
            n.EFF(70, '\n            '),
            n.j41(71, 'li'),
            n.EFF(72, '\n              '),
            n.j41(73, 'a', 43),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(74, '\n                '),
            n.nrm(75, 'fa-icon', 44),
            n.EFF(76, '\n                '),
            n.j41(77, 'span', 45),
            n.EFF(78, 'Logs'),
            n.k0s(),
            n.EFF(79, '\n              '),
            n.k0s(),
            n.EFF(80, '\n            '),
            n.k0s(),
            n.EFF(81, '\n            '),
            n.DNE(82, T, 12, 1)(83, R, 12, 1),
            n.k0s(),
            n.EFF(84, '\n        '),
            n.k0s();
        }
        if (2 & i) {
          const t = n.XpG();
          n.Y8G('routerLinkActiveOptions', n.lJ4(10, s)),
            n.R7$(17),
            n.Y8G('routerLinkActiveOptions', n.lJ4(11, s)),
            n.R7$(2),
            n.Y8G('fixedWidth', !0),
            n.R7$(12),
            n.Y8G('fixedWidth', !0),
            n.R7$(11),
            n.Y8G('fixedWidth', !0),
            n.R7$(11),
            n.Y8G('fixedWidth', !0),
            n.R7$(11),
            n.Y8G('fixedWidth', !0),
            n.R7$(11),
            n.Y8G('fixedWidth', !0),
            n.R7$(7),
            n.vxM(t.openAPIEnabled ? 82 : -1),
            n.R7$(),
            n.vxM(t.inProduction ? -1 : 83);
        }
      }
      function w(i, r) {
        if (1 & i) {
          const t = n.RV6();
          n.EFF(0, '\n                '),
            n.j41(1, 'li'),
            n.EFF(2, '\n                  '),
            n.j41(3, 'a', 57),
            n.bIt('click', function () {
              const a = n.eBV(t).$implicit,
                c = n.XpG(2);
              return c.changeLanguage(a), n.Njj(c.collapseNavbar());
            }),
            n.EFF(4),
            n.nI1(5, 'findLanguageFromKey'),
            n.k0s(),
            n.EFF(6, '\n                '),
            n.k0s(),
            n.EFF(7, '\n              ');
        }
        if (2 & i) {
          const t = r.$implicit;
          n.R7$(3), n.Y8G('jhiActiveMenu', t), n.R7$(), n.JRh(n.bMT(5, 2, t));
        }
      }
      function L(i, r) {
        if (
          (1 & i &&
            (n.EFF(0, '\n          '),
            n.j41(1, 'li', 52),
            n.EFF(2, '\n            '),
            n.j41(3, 'a', 53),
            n.EFF(4, '\n              '),
            n.j41(5, 'span'),
            n.EFF(6, '\n                '),
            n.nrm(7, 'fa-icon', 54),
            n.EFF(8, '\n                '),
            n.j41(9, 'span', 55),
            n.EFF(10, 'Language'),
            n.k0s(),
            n.EFF(11, '\n              '),
            n.k0s(),
            n.EFF(12, '\n            '),
            n.k0s(),
            n.EFF(13, '\n            '),
            n.j41(14, 'ul', 56),
            n.EFF(15, '\n              '),
            n.Z7z(16, w, 8, 4, null, null, n.Vm6),
            n.k0s(),
            n.EFF(18, '\n          '),
            n.k0s(),
            n.EFF(19, '\n        ')),
          2 & i)
        ) {
          const t = n.XpG();
          n.R7$(16), n.Dyx(t.languages);
        }
      }
      function G(i, r) {
        1 & i &&
          (n.EFF(0, '\n              '),
          n.j41(1, 'span'),
          n.EFF(2, '\n                '),
          n.nrm(3, 'fa-icon', 58),
          n.EFF(4, '\n                '),
          n.j41(5, 'span', 59),
          n.EFF(6, 'Account'),
          n.k0s(),
          n.EFF(7, '\n              '),
          n.k0s(),
          n.EFF(8, '\n            '));
      }
      function W(i, r) {
        if (
          (1 & i &&
            (n.EFF(0, '\n              '),
            n.j41(1, 'span'),
            n.EFF(2, '\n                '),
            n.nrm(3, 'img', 60),
            n.EFF(4, '\n              '),
            n.k0s(),
            n.EFF(5, '\n            ')),
          2 & i)
        ) {
          n.XpG();
          const t = n.r8f(56);
          n.R7$(3), n.Y8G('src', t.imageUrl, n.B4B);
        }
      }
      function $(i, r) {
        if (1 & i) {
          const t = n.RV6();
          n.EFF(0, '\n              '),
            n.j41(1, 'li'),
            n.EFF(2, '\n                '),
            n.j41(3, 'a', 61),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(4, '\n                  '),
            n.nrm(5, 'fa-icon', 62),
            n.EFF(6, '\n                  '),
            n.j41(7, 'span', 63),
            n.EFF(8, 'Settings'),
            n.k0s(),
            n.EFF(9, '\n                '),
            n.k0s(),
            n.EFF(10, '\n              '),
            n.k0s(),
            n.EFF(11, '\n              '),
            n.j41(12, 'li'),
            n.EFF(13, '\n                '),
            n.j41(14, 'a', 64),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(15, '\n                  '),
            n.nrm(16, 'fa-icon', 65),
            n.EFF(17, '\n                  '),
            n.j41(18, 'span', 66),
            n.EFF(19, 'Password'),
            n.k0s(),
            n.EFF(20, '\n                '),
            n.k0s(),
            n.EFF(21, '\n              '),
            n.k0s(),
            n.EFF(22, '\n              '),
            n.j41(23, 'li'),
            n.EFF(24, '\n                '),
            n.j41(25, 'a', 67),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.logout());
            }),
            n.EFF(26, '\n                  '),
            n.nrm(27, 'fa-icon', 68),
            n.EFF(28, '\n                  '),
            n.j41(29, 'span', 69),
            n.EFF(30, 'Sign out'),
            n.k0s(),
            n.EFF(31, '\n                '),
            n.k0s(),
            n.EFF(32, '\n              '),
            n.k0s(),
            n.EFF(33, '\n            ');
        }
        2 & i && (n.R7$(5), n.Y8G('fixedWidth', !0), n.R7$(11), n.Y8G('fixedWidth', !0), n.R7$(11), n.Y8G('fixedWidth', !0));
      }
      function M(i, r) {
        if (1 & i) {
          const t = n.RV6();
          n.EFF(0, '\n              '),
            n.j41(1, 'li'),
            n.EFF(2, '\n                '),
            n.j41(3, 'a', 70),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.login());
            }),
            n.EFF(4, '\n                  '),
            n.nrm(5, 'fa-icon', 71),
            n.EFF(6, '\n                  '),
            n.j41(7, 'span', 72),
            n.EFF(8, 'Sign in'),
            n.k0s(),
            n.EFF(9, '\n                '),
            n.k0s(),
            n.EFF(10, '\n              '),
            n.k0s(),
            n.EFF(11, '\n              '),
            n.j41(12, 'li'),
            n.EFF(13, '\n                '),
            n.j41(14, 'a', 73),
            n.bIt('click', function () {
              n.eBV(t);
              const a = n.XpG();
              return n.Njj(a.collapseNavbar());
            }),
            n.EFF(15, '\n                  '),
            n.nrm(16, 'fa-icon', 74),
            n.EFF(17, '\n                  '),
            n.j41(18, 'span', 75),
            n.EFF(19, 'Register'),
            n.k0s(),
            n.EFF(20, '\n                '),
            n.k0s(),
            n.EFF(21, '\n              '),
            n.k0s(),
            n.EFF(22, '\n            ');
        }
        2 & i && (n.R7$(5), n.Y8G('fixedWidth', !0), n.R7$(11), n.Y8G('fixedWidth', !0));
      }
      let I = (() => {
        class i {
          constructor() {
            (this.isNavbarCollapsed = (0, n.vPA)(!0)),
              (this.languages = k.Y),
              (this.version = ''),
              (this.account = (0, n.WQX)(p.D).trackCurrentAccount()),
              (this.entitiesNavbarItems = []),
              (this.loginService = (0, n.WQX)(h.H)),
              (this.translateService = (0, n.WQX)(u.c$)),
              (this.stateStorageService = (0, n.WQX)(E.A)),
              (this.profileService = (0, n.WQX)(j.p)),
              (this.router = (0, n.WQX)(l.Ix));
            const { VERSION: t } = f.c;
            t && (this.version = t.toLowerCase().startsWith('v') ? t : `v${t}`);
          }
          ngOnInit() {
            (this.entitiesNavbarItems = b),
              this.profileService.getProfileInfo().subscribe(t => {
                (this.inProduction = t.inProduction), (this.openAPIEnabled = t.openAPIEnabled);
              });
          }
          changeLanguage(t) {
            this.stateStorageService.storeLocale(t), this.translateService.use(t);
          }
          collapseNavbar() {
            this.isNavbarCollapsed.set(!0);
          }
          login() {
            this.router.navigate(['/login']);
          }
          logout() {
            this.collapseNavbar(), this.loginService.logout(), this.router.navigate(['']);
          }
          toggleNavbar() {
            this.isNavbarCollapsed.update(t => !t);
          }
          static {
            this.ɵfac = function (e) {
              return new (e || i)();
            };
          }
          static {
            this.ɵcmp = n.VBU({
              type: i,
              selectors: [['jhi-navbar']],
              decls: 73,
              vars: 15,
              consts: [
                ['data-cy', 'navbar', 1, 'navbar', 'navbar-dark', 'navbar-expand-md', 'bg-dark'],
                [1, 'container-fluid'],
                ['routerLink', '/', 1, 'navbar-brand', 'logo', 3, 'click'],
                [1, 'logo-img'],
                ['jhiTranslate', 'global.title', 1, 'navbar-title'],
                [1, 'navbar-version'],
                [
                  'href',
                  'javascript:void(0);',
                  'data-toggle',
                  'collapse',
                  'data-target',
                  '#navbarResponsive',
                  'aria-controls',
                  'navbarResponsive',
                  'aria-expanded',
                  'false',
                  'aria-label',
                  'Toggle navigation',
                  1,
                  'navbar-toggler',
                  'd-lg-none',
                  3,
                  'click',
                ],
                ['icon', 'bars'],
                ['id', 'navbarResponsive', 1, 'navbar-collapse', 'collapse', 3, 'ngbCollapse'],
                [1, 'navbar-nav', 'ms-auto'],
                ['routerLinkActive', 'active', 1, 'nav-item', 3, 'routerLinkActiveOptions'],
                ['routerLink', '/', 1, 'nav-link', 3, 'click'],
                ['icon', 'home'],
                ['jhiTranslate', 'global.menu.home'],
                ['routerLink', '/kata', 1, 'nav-link'],
                ['icon', 'asterisk', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.entities.kata'],
                [
                  'ngbDropdown',
                  '',
                  'class',
                  'nav-item dropdown pointer',
                  'display',
                  'dynamic',
                  'routerLinkActive',
                  'active',
                  3,
                  'routerLinkActiveOptions',
                  4,
                  'jhiHasAnyAuthority',
                ],
                [
                  'ngbDropdown',
                  '',
                  'display',
                  'dynamic',
                  'routerLinkActive',
                  'active',
                  1,
                  'nav-item',
                  'dropdown',
                  'pointer',
                  3,
                  'routerLinkActiveOptions',
                ],
                [
                  'ngbDropdownToggle',
                  '',
                  'href',
                  'javascript:void(0);',
                  'id',
                  'account-menu',
                  'data-cy',
                  'accountMenu',
                  1,
                  'nav-link',
                  'dropdown-toggle',
                ],
                ['ngbDropdownMenu', '', 'aria-labelledby', 'account-menu', 1, 'dropdown-menu'],
                [
                  'ngbDropdownToggle',
                  '',
                  'href',
                  'javascript:void(0);',
                  'id',
                  'entity-menu',
                  'data-cy',
                  'entity',
                  1,
                  'nav-link',
                  'dropdown-toggle',
                ],
                ['icon', 'th-list'],
                ['jhiTranslate', 'global.menu.entities.main'],
                ['ngbDropdownMenu', '', 'aria-labelledby', 'entity-menu', 1, 'dropdown-menu'],
                [
                  'ngbDropdownToggle',
                  '',
                  'href',
                  'javascript:void(0);',
                  'id',
                  'admin-menu',
                  'data-cy',
                  'adminMenu',
                  1,
                  'nav-link',
                  'dropdown-toggle',
                ],
                ['icon', 'users-cog'],
                ['jhiTranslate', 'global.menu.admin.main'],
                ['ngbDropdownMenu', '', 'aria-labelledby', 'admin-menu', 1, 'dropdown-menu'],
                ['routerLink', '/authority', 'routerLinkActive', 'active', 1, 'dropdown-item', 3, 'click', 'routerLinkActiveOptions'],
                ['jhiTranslate', 'global.menu.entities.adminAuthority'],
                ['routerLink', '/admin/user-management', 'routerLinkActive', 'active', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'users', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.admin.userManagement'],
                ['routerLink', '/admin/metrics', 'routerLinkActive', 'active', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'tachometer-alt', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.admin.metrics'],
                ['routerLink', '/admin/health', 'routerLinkActive', 'active', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'heart', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.admin.health'],
                ['routerLink', '/admin/configuration', 'routerLinkActive', 'active', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'cogs', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.admin.configuration'],
                ['routerLink', '/admin/logs', 'routerLinkActive', 'active', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'tasks', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.admin.logs'],
                ['routerLink', '/admin/docs', 'routerLinkActive', 'active', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'book', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.admin.apidocs'],
                ['href', './h2-console/', 'target', '_tab', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'database', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.admin.database'],
                ['ngbDropdown', '', 'display', 'dynamic', 1, 'nav-item', 'dropdown', 'pointer'],
                ['ngbDropdownToggle', '', 'href', 'javascript:void(0);', 'id', 'languagesnavBarDropdown', 1, 'nav-link', 'dropdown-toggle'],
                ['icon', 'flag'],
                ['jhiTranslate', 'global.menu.language'],
                ['ngbDropdownMenu', '', 'aria-labelledby', 'languagesnavBarDropdown', 1, 'dropdown-menu'],
                ['href', 'javascript:void(0);', 1, 'dropdown-item', 3, 'click', 'jhiActiveMenu'],
                ['icon', 'user'],
                ['jhiTranslate', 'global.menu.account.main'],
                ['alt', 'Avatar', 1, 'profile-image', 'rounded-circle', 3, 'src'],
                ['routerLink', '/account/settings', 'routerLinkActive', 'active', 'data-cy', 'settings', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'wrench', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.account.settings'],
                [
                  'routerLink',
                  '/account/password',
                  'routerLinkActive',
                  'active',
                  'data-cy',
                  'passwordItem',
                  1,
                  'dropdown-item',
                  3,
                  'click',
                ],
                ['icon', 'lock', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.account.password'],
                ['id', 'logout', 'data-cy', 'logout', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'sign-out-alt', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.account.logout'],
                ['id', 'login', 'data-cy', 'login', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'sign-in-alt', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.account.login'],
                ['routerLink', '/account/register', 'routerLinkActive', 'active', 'data-cy', 'register', 1, 'dropdown-item', 3, 'click'],
                ['icon', 'user-plus', 3, 'fixedWidth'],
                ['jhiTranslate', 'global.menu.account.register'],
              ],
              template: function (e, a) {
                if (1 & e) {
                  const c = n.RV6();
                  n.j41(0, 'nav', 0),
                    n.EFF(1, '\n  '),
                    n.j41(2, 'div', 1),
                    n.EFF(3, '\n    '),
                    n.j41(4, 'a', 2),
                    n.bIt('click', function () {
                      return n.eBV(c), n.Njj(a.collapseNavbar());
                    }),
                    n.EFF(5, '\n      '),
                    n.nrm(6, 'span', 3),
                    n.EFF(7, '\n      '),
                    n.j41(8, 'span', 4),
                    n.EFF(9, 'JavascriptTypescriptKata'),
                    n.k0s(),
                    n.EFF(10, '\n      '),
                    n.j41(11, 'span', 5),
                    n.EFF(12),
                    n.k0s(),
                    n.EFF(13, '\n    '),
                    n.k0s(),
                    n.EFF(14, '\n    '),
                    n.j41(15, 'a', 6),
                    n.bIt('click', function () {
                      return n.eBV(c), n.Njj(a.toggleNavbar());
                    }),
                    n.EFF(16, '\n      '),
                    n.nrm(17, 'fa-icon', 7),
                    n.EFF(18, '\n    '),
                    n.k0s(),
                    n.EFF(19, '\n    '),
                    n.j41(20, 'div', 8),
                    n.EFF(21, '\n      '),
                    n.j41(22, 'ul', 9),
                    n.EFF(23, '\n        '),
                    n.j41(24, 'li', 10),
                    n.EFF(25, '\n          '),
                    n.j41(26, 'a', 11),
                    n.bIt('click', function () {
                      return n.eBV(c), n.Njj(a.collapseNavbar());
                    }),
                    n.EFF(27, '\n            '),
                    n.j41(28, 'span'),
                    n.EFF(29, '\n              '),
                    n.nrm(30, 'fa-icon', 12),
                    n.EFF(31, '\n              '),
                    n.j41(32, 'span', 13),
                    n.EFF(33, 'Home'),
                    n.k0s(),
                    n.EFF(34, '\n            '),
                    n.k0s(),
                    n.EFF(35, '\n          '),
                    n.k0s(),
                    n.EFF(36, '\n        '),
                    n.k0s(),
                    n.EFF(37, '\n        '),
                    n.j41(38, 'li', 10),
                    n.EFF(39, '\n          '),
                    n.j41(40, 'a', 14),
                    n.EFF(41, '\n            '),
                    n.nrm(42, 'fa-icon', 15),
                    n.EFF(43, '\n            '),
                    n.j41(44, 'span', 16),
                    n.EFF(45, 'Kata'),
                    n.k0s(),
                    n.EFF(46, '\n          '),
                    n.k0s(),
                    n.EFF(47, '\n        '),
                    n.k0s(),
                    n.EFF(48, '\n        '),
                    n.EFF(49, '\n        '),
                    n.DNE(50, x, 19, 2)(51, y, 85, 12, 'li', 17),
                    n.EFF(52, '\n        '),
                    n.DNE(53, L, 20, 0),
                    n.j41(54, 'li', 18),
                    n.EFF(55, '\n          '),
                    n.SS7(56),
                    n.EFF(57, '\n          '),
                    n.j41(58, 'a', 19),
                    n.EFF(59, '\n            '),
                    n.DNE(60, G, 9, 0)(61, W, 6, 1),
                    n.k0s(),
                    n.EFF(62, '\n          '),
                    n.j41(63, 'ul', 20),
                    n.EFF(64, '\n            '),
                    n.DNE(65, $, 34, 3)(66, M, 23, 2),
                    n.k0s(),
                    n.EFF(67, '\n        '),
                    n.k0s(),
                    n.EFF(68, '\n      '),
                    n.k0s(),
                    n.EFF(69, '\n    '),
                    n.k0s(),
                    n.EFF(70, '\n  '),
                    n.k0s(),
                    n.EFF(71, '\n'),
                    n.k0s(),
                    n.EFF(72, '\n');
                }
                if (2 & e) {
                  n.R7$(12),
                    n.JRh(a.version),
                    n.R7$(8),
                    n.Y8G('ngbCollapse', a.isNavbarCollapsed()),
                    n.R7$(4),
                    n.Y8G('routerLinkActiveOptions', n.lJ4(12, s)),
                    n.R7$(14),
                    n.Y8G('routerLinkActiveOptions', n.lJ4(13, s)),
                    n.R7$(4),
                    n.Y8G('fixedWidth', !0),
                    n.R7$(8),
                    n.vxM(null !== a.account() ? 50 : -1),
                    n.R7$(),
                    n.Y8G('jhiHasAnyAuthority', 'ROLE_ADMIN'),
                    n.R7$(2),
                    n.vxM(a.languages && a.languages.length > 1 ? 53 : -1),
                    n.R7$(),
                    n.Y8G('routerLinkActiveOptions', n.lJ4(14, s)),
                    n.R7$(2);
                  const c = n.bH3(a.account());
                  n.R7$(4), n.vxM(null != c && c.imageUrl ? 61 : 60), n.R7$(5), n.vxM(null !== c ? 65 : 66);
                }
              },
              dependencies: [l.iI, l.Wk, l.wQ, m.A, F.$G, F.tg, F.do, F.U0, C.aY, N.A, A.A, g, _],
              styles: [
                '.navbar-version[_ngcontent-%COMP%]{font-size:.65em;color:#ffffff8c}.profile-image[_ngcontent-%COMP%]{height:1.75em;width:1.75em}.navbar[_ngcontent-%COMP%]{padding:.2rem 1rem}.navbar[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]:hover{background-color:#17141f}.navbar[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{font-weight:400}.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:hover{color:#ffffffbf}.logo-img[_ngcontent-%COMP%]{height:45px;width:45px;display:inline-block;vertical-align:middle;background:url(/content/images/logo-jhipster.png) no-repeat center center;background-size:contain}',
              ],
            });
          }
        }
        return i;
      })();
    },
  },
]);
