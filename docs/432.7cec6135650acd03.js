'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [432],
  {
    9432: (j, l, a) => {
      a.r(l), a.d(l, { default: () => _ });
      var e = a(4438),
        r = a(8498),
        F = a(1413),
        c = a(6977),
        h = a(9543),
        p = a(4573),
        E = a(8300);
      const u = n => ({ username: n });
      function m(n, o) {
        if ((1 & n && (e.EFF(0, '\n            '), e.j41(1, 'span', 16), e.EFF(2), e.k0s(), e.EFF(3, '\n          ')), 2 & n)) {
          const t = o;
          e.R7$(), e.Y8G('translateValues', e.eq3(2, u, t.login)), e.R7$(), e.SpI('You are logged in as user "', t.login, '".');
        }
      }
      function g(n, o) {
        if (
          (1 & n &&
            (e.EFF(0, '\n        '), e.j41(1, 'div', 15), e.EFF(2, '\n          '), e.DNE(3, m, 4, 4), e.k0s(), e.EFF(4, '\n      ')),
          2 & n)
        ) {
          let t;
          const s = e.XpG();
          e.R7$(3), e.vxM((t = s.account()) ? 3 : -1, t);
        }
      }
      function d(n, o) {
        if (1 & n) {
          const t = e.RV6();
          e.EFF(0, '\n        '),
            e.j41(1, 'div', 17),
            e.EFF(2, '\n          '),
            e.j41(3, 'span', 18),
            e.EFF(4, 'If you want to '),
            e.k0s(),
            e.EFF(5, '\n          '),
            e.j41(6, 'a', 19),
            e.bIt('click', function () {
              e.eBV(t);
              const i = e.XpG();
              return e.Njj(i.login());
            }),
            e.EFF(7, 'sign in'),
            e.k0s(),
            e.j41(8, 'span', 20),
            e.EFF(9, ', you can try the default accounts:'),
            e.nrm(10, 'br'),
            e.EFF(11, '- Administrator (login="admin" and password="admin") '),
            e.nrm(12, 'br'),
            e.EFF(13, '- User\n            (login="user" and password="user").'),
            e.k0s(),
            e.EFF(14, '\n        '),
            e.k0s(),
            e.EFF(15, '\n\n        '),
            e.j41(16, 'div', 17),
            e.EFF(17, '\n          '),
            e.j41(18, 'span', 21),
            e.EFF(19, "You don't have an account yet?"),
            e.k0s(),
            e.EFF(20, '\xa0\n          '),
            e.j41(21, 'a', 22),
            e.EFF(22, 'Register a new account'),
            e.k0s(),
            e.EFF(23, '\n        '),
            e.k0s(),
            e.EFF(24, '\n      ');
        }
      }
      let _ = (() => {
        class n {
          constructor() {
            (this.account = (0, e.vPA)(null)),
              (this.destroy$ = new F.B()),
              (this.accountService = (0, e.WQX)(p.D)),
              (this.router = (0, e.WQX)(r.Ix));
          }
          ngOnInit() {
            this.accountService
              .getAuthenticationState()
              .pipe((0, c.Q)(this.destroy$))
              .subscribe(t => this.account.set(t));
          }
          login() {
            this.router.navigate(['/login']);
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.complete();
          }
          static {
            this.ɵfac = function (s) {
              return new (s || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-home']],
              decls: 69,
              vars: 1,
              consts: [
                [1, 'row'],
                [1, 'col-md-3'],
                [1, 'hipster', 'img-fluid', 'rounded'],
                [1, 'col-md-9'],
                [1, 'display-4'],
                ['jhiTranslate', 'home.title'],
                ['jhiTranslate', 'home.subtitle', 1, 'lead'],
                ['jhiTranslate', 'home.question'],
                [
                  'href',
                  'https://www.jhipster.tech/',
                  'target',
                  '_blank',
                  'rel',
                  'noopener noreferrer',
                  'jhiTranslate',
                  'home.link.homepage',
                ],
                [
                  'href',
                  'https://stackoverflow.com/tags/jhipster/info',
                  'target',
                  '_blank',
                  'rel',
                  'noopener noreferrer',
                  'jhiTranslate',
                  'home.link.stackoverflow',
                ],
                [
                  'href',
                  'https://github.com/jhipster/generator-jhipster/issues?state=open',
                  'target',
                  '_blank',
                  'rel',
                  'noopener noreferrer',
                  'jhiTranslate',
                  'home.link.bugtracker',
                ],
                [
                  'href',
                  'https://gitter.im/jhipster/generator-jhipster',
                  'target',
                  '_blank',
                  'rel',
                  'noopener noreferrer',
                  'jhiTranslate',
                  'home.link.chat',
                ],
                [
                  'href',
                  'https://twitter.com/jhipster',
                  'target',
                  '_blank',
                  'rel',
                  'noopener noreferrer',
                  'jhiTranslate',
                  'home.link.follow',
                ],
                ['jhiTranslate', 'home.like'],
                [
                  'href',
                  'https://github.com/jhipster/generator-jhipster',
                  'target',
                  '_blank',
                  'rel',
                  'noopener noreferrer',
                  'jhiTranslate',
                  'home.github',
                ],
                [1, 'alert', 'alert-success'],
                ['id', 'home-logged-message', 'jhiTranslate', 'home.logged.message', 3, 'translateValues'],
                [1, 'alert', 'alert-warning'],
                ['jhiTranslate', 'global.messages.info.authenticated.prefix'],
                ['jhiTranslate', 'global.messages.info.authenticated.link', 1, 'alert-link', 3, 'click'],
                ['jhiTranslate', 'global.messages.info.authenticated.suffix'],
                ['jhiTranslate', 'global.messages.info.register.noaccount'],
                ['routerLink', '/account/register', 'jhiTranslate', 'global.messages.info.register.link', 1, 'alert-link'],
              ],
              template: function (s, i) {
                1 & s &&
                  (e.j41(0, 'div', 0),
                  e.EFF(1, '\n  '),
                  e.j41(2, 'div', 1),
                  e.EFF(3, '\n    '),
                  e.nrm(4, 'span', 2),
                  e.EFF(5, '\n  '),
                  e.k0s(),
                  e.EFF(6, '\n\n  '),
                  e.j41(7, 'div', 3),
                  e.EFF(8, '\n    '),
                  e.j41(9, 'h1', 4)(10, 'span', 5),
                  e.EFF(11, 'Welcome, Java Hipster!'),
                  e.k0s(),
                  e.EFF(12, ' (Javascript Typescript Kata)'),
                  e.k0s(),
                  e.EFF(13, '\n\n    '),
                  e.j41(14, 'p', 6),
                  e.EFF(15, 'This is your homepage'),
                  e.k0s(),
                  e.EFF(16, '\n\n    '),
                  e.j41(17, 'div'),
                  e.EFF(18, '\n      '),
                  e.DNE(19, g, 5, 1)(20, d, 25, 0),
                  e.k0s(),
                  e.EFF(21, '\n\n    '),
                  e.j41(22, 'p', 7),
                  e.EFF(23, 'If you have any question on JHipster:'),
                  e.k0s(),
                  e.EFF(24, '\n\n    '),
                  e.j41(25, 'ul'),
                  e.EFF(26, '\n      '),
                  e.j41(27, 'li'),
                  e.EFF(28, '\n        '),
                  e.j41(29, 'a', 8),
                  e.EFF(30, 'JHipster homepage'),
                  e.k0s(),
                  e.EFF(31, '\n      '),
                  e.k0s(),
                  e.EFF(32, '\n      '),
                  e.j41(33, 'li'),
                  e.EFF(34, '\n        '),
                  e.j41(35, 'a', 9),
                  e.EFF(36, 'JHipster on Stack Overflow'),
                  e.k0s(),
                  e.EFF(37, '\n      '),
                  e.k0s(),
                  e.EFF(38, '\n      '),
                  e.j41(39, 'li'),
                  e.EFF(40, '\n        '),
                  e.j41(41, 'a', 10),
                  e.EFF(42, 'JHipster bug tracker'),
                  e.k0s(),
                  e.EFF(43, '\n      '),
                  e.k0s(),
                  e.EFF(44, '\n      '),
                  e.j41(45, 'li'),
                  e.EFF(46, '\n        '),
                  e.j41(47, 'a', 11),
                  e.EFF(48, 'JHipster public chat room'),
                  e.k0s(),
                  e.EFF(49, '\n      '),
                  e.k0s(),
                  e.EFF(50, '\n      '),
                  e.j41(51, 'li'),
                  e.EFF(52, '\n        '),
                  e.j41(53, 'a', 12),
                  e.EFF(54, 'follow @jhipster on Twitter'),
                  e.k0s(),
                  e.EFF(55, '\n      '),
                  e.k0s(),
                  e.EFF(56, '\n    '),
                  e.k0s(),
                  e.EFF(57, '\n\n    '),
                  e.j41(58, 'p'),
                  e.EFF(59, '\n      '),
                  e.j41(60, 'span', 13),
                  e.EFF(61, "If you like JHipster, don't forget to give us a star on"),
                  e.k0s(),
                  e.EFF(62, '\n      '),
                  e.j41(63, 'a', 14),
                  e.EFF(64, 'GitHub'),
                  e.k0s(),
                  e.EFF(65, '!\n    '),
                  e.k0s(),
                  e.EFF(66, '\n  '),
                  e.k0s(),
                  e.EFF(67, '\n'),
                  e.k0s(),
                  e.EFF(68, '\n')),
                  2 & s && (e.R7$(19), e.vxM(null !== i.account() ? 19 : 20));
              },
              dependencies: [h.A, E.A, r.iI, r.Wk],
              styles: [
                '.hipster[_ngcontent-%COMP%]{display:inline-block;width:347px;height:497px;background:url(jhipster_family_member_1.fda070a628103330.svg) no-repeat center top;background-size:contain}@media only screen and (-moz-min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx){.hipster[_ngcontent-%COMP%]{background:url(jhipster_family_member_1.fda070a628103330.svg) no-repeat center top;background-size:contain}}',
              ],
            });
          }
        }
        return n;
      })();
    },
  },
]);
