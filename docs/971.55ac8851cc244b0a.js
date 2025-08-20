'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [971],
  {
    9971: (he, j, d) => {
      d.r(j), d.d(j, { default: () => ue });
      var e = d(4438),
        g = d(4572),
        l = d(9543),
        b = d(1626),
        M = d(9601);
      let f = (() => {
        class n {
          constructor() {
            (this.http = (0, e.WQX)(b.Qq)), (this.applicationConfigService = (0, e.WQX)(M.a));
          }
          getMetrics() {
            return this.http.get(this.applicationConfigService.getEndpointFor('management/jhimetrics'));
          }
          threadDump() {
            return this.http.get(this.applicationConfigService.getEndpointFor('management/threaddump'));
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵprov = e.jDH({ token: n, factory: n.ɵfac, providedIn: 'root' });
          }
        }
        return n;
      })();
      var h = d(1314),
        E = d(8300),
        c = d(177);
      function _(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n          '),
            e.j41(1, 'span'),
            e.EFF(2, '\n            '),
            e.j41(3, 'span'),
            e.EFF(4),
            e.k0s(),
            e.EFF(5),
            e.nI1(6, 'number'),
            e.nI1(7, 'number'),
            e.k0s(),
            e.EFF(8, '\n\n          '),
            e.j41(9, 'div'),
            e.EFF(10),
            e.nI1(11, 'number'),
            e.k0s(),
            e.EFF(12, '\n          '),
            e.j41(13, 'ngb-progressbar', 1),
            e.EFF(14, '\n            '),
            e.j41(15, 'span'),
            e.EFF(16),
            e.nI1(17, 'number'),
            e.k0s(),
            e.EFF(18, '\n          '),
            e.k0s(),
            e.EFF(19, '\n        ')),
          2 & n)
        ) {
          const t = e.XpG().$implicit;
          e.R7$(4),
            e.JRh(t.key),
            e.R7$(),
            e.Lme(
              '\n            (',
              e.i5U(6, 8, t.value.used / 1048576, '1.0-0'),
              'M / ',
              e.i5U(7, 11, t.value.max / 1048576, '1.0-0'),
              'M)\n          ',
            ),
            e.R7$(5),
            e.SpI('Committed : ', e.i5U(11, 14, t.value.committed / 1048576, '1.0-0'), 'M'),
            e.R7$(3),
            e.Y8G('value', (100 * t.value.used) / t.value.max)('striped', !0)('animated', !1),
            e.R7$(3),
            e.SpI('', e.i5U(17, 17, (100 * t.value.used) / t.value.max, '1.0-0'), '%');
        }
      }
      function T(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n          '),
            e.j41(1, 'span')(2, 'span'),
            e.EFF(3),
            e.k0s(),
            e.EFF(4),
            e.nI1(5, 'number'),
            e.k0s(),
            e.EFF(6, '\n        ')),
          2 & n)
        ) {
          const t = e.XpG().$implicit;
          e.R7$(3), e.JRh(t.key), e.R7$(), e.SpI(' ', e.i5U(5, 2, t.value.used / 1048576, '1.0-0'), 'M');
        }
      }
      function $(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n      '), e.j41(1, 'div'), e.EFF(2, '\n        '), e.DNE(3, _, 20, 20)(4, T, 7, 5), e.k0s(), e.EFF(5, '\n    ')),
          2 & n)
        ) {
          const t = a.$implicit;
          e.R7$(3), e.vxM(-1 !== t.value.max ? 3 : 4);
        }
      }
      function C(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n  '),
            e.j41(1, 'div'),
            e.EFF(2, '\n    '),
            e.Z7z(3, $, 6, 1, null, null, e.Vm6),
            e.nI1(5, 'keyvalue'),
            e.k0s(),
            e.EFF(6, '\n')),
          2 & n)
        ) {
          const t = e.XpG();
          e.R7$(3), e.Dyx(e.bMT(5, 0, t.jvmMemoryMetrics()));
        }
      }
      let y = (() => {
        class n {
          constructor() {
            (this.jvmMemoryMetrics = (0, e.hFB)()), (this.updating = (0, e.hFB)());
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-jvm-memory']],
              inputs: { jvmMemoryMetrics: [1, 'jvmMemoryMetrics'], updating: [1, 'updating'] },
              decls: 4,
              vars: 1,
              consts: [
                ['jhiTranslate', 'metrics.jvm.memory.title'],
                ['type', 'success', 3, 'value', 'striped', 'animated'],
              ],
              template: function (i, s) {
                1 & i && (e.j41(0, 'h4', 0), e.EFF(1, 'Memory'), e.k0s(), e.EFF(2, '\n\n'), e.DNE(3, C, 7, 2)),
                  2 & i && (e.R7$(3), e.vxM(!s.updating() && s.jvmMemoryMetrics() ? 3 : -1));
              },
              dependencies: [l.A, h.EH, E.A, c.QX, c.lG],
              encapsulation: 2,
            });
          }
        }
        return n;
      })();
      var o = (function (n) {
          return (
            (n.Runnable = 'RUNNABLE'),
            (n.TimedWaiting = 'TIMED_WAITING'),
            (n.Waiting = 'WAITING'),
            (n.Blocked = 'BLOCKED'),
            (n.New = 'NEW'),
            n
          );
        })(o || {}),
        k = d(60);
      function D(n, a) {
        1 & n && (e.EFF(0, '\n        '), e.nrm(1, 'fa-icon', 13), e.EFF(2, '\n      '));
      }
      function I(n, a) {
        1 & n && (e.EFF(0, '\n        '), e.nrm(1, 'fa-icon', 13), e.EFF(2, '\n      '));
      }
      function J(n, a) {
        1 & n && (e.EFF(0, '\n        '), e.nrm(1, 'fa-icon', 13), e.EFF(2, '\n      '));
      }
      function U(n, a) {
        1 & n && (e.EFF(0, '\n        '), e.nrm(1, 'fa-icon', 13), e.EFF(2, '\n      '));
      }
      function x(n, a) {
        1 & n && (e.EFF(0, '\n        '), e.nrm(1, 'fa-icon', 13), e.EFF(2, '\n      '));
      }
      function G(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n            '),
            e.j41(1, 'div', 28),
            e.EFF(2, '\n              '),
            e.j41(3, 'samp'),
            e.EFF(4),
            e.j41(5, 'code'),
            e.EFF(6),
            e.k0s(),
            e.EFF(7, ')'),
            e.k0s(),
            e.EFF(8, '\n              '),
            e.nrm(9, 'span', 29),
            e.EFF(10, '\n            '),
            e.k0s(),
            e.EFF(11, '\n          ')),
          2 & n)
        ) {
          const t = a.$implicit;
          e.R7$(4), e.Lme('', t.className, '.', t.methodName, '('), e.R7$(2), e.Lme('', t.fileName, ':', t.lineNumber, '');
        }
      }
      function N(n, a) {
        if (1 & n) {
          const t = e.RV6();
          e.EFF(0, '\n    '),
            e.j41(1, 'div', 14),
            e.EFF(2, '\n      '),
            e.j41(3, 'h6'),
            e.EFF(4, '\n        '),
            e.j41(5, 'span', 15),
            e.EFF(6),
            e.k0s(),
            e.EFF(7),
            e.j41(8, 'a', 16),
            e.bIt('click', function () {
              const s = e.eBV(t).$implicit;
              return e.Njj((s.showThreadDump = !s.showThreadDump));
            }),
            e.EFF(9, '\n          '),
            e.j41(10, 'span', 17),
            e.EFF(11, 'Show Stacktrace'),
            e.k0s(),
            e.EFF(12, '\n          '),
            e.j41(13, 'span', 18),
            e.EFF(14, 'Hide Stacktrace'),
            e.k0s(),
            e.EFF(15, '\n        '),
            e.k0s(),
            e.EFF(16, '\n      '),
            e.k0s(),
            e.EFF(17, '\n\n      '),
            e.j41(18, 'div', 19),
            e.EFF(19, '\n        '),
            e.j41(20, 'div', 20),
            e.EFF(21, '\n          '),
            e.Z7z(22, G, 12, 4, null, null, e.Vm6),
            e.k0s(),
            e.EFF(24, '\n      '),
            e.k0s(),
            e.EFF(25, '\n      '),
            e.j41(26, 'table', 21),
            e.EFF(27, '\n        '),
            e.j41(28, 'caption'),
            e.EFF(29),
            e.k0s(),
            e.EFF(30, '\n        '),
            e.j41(31, 'thead'),
            e.EFF(32, '\n          '),
            e.j41(33, 'tr'),
            e.EFF(34, '\n            '),
            e.j41(35, 'th', 22),
            e.EFF(36, 'Blocked Time'),
            e.k0s(),
            e.EFF(37, '\n            '),
            e.j41(38, 'th', 23),
            e.EFF(39, 'Blocked Count'),
            e.k0s(),
            e.EFF(40, '\n            '),
            e.j41(41, 'th', 24),
            e.EFF(42, 'Waited Time'),
            e.k0s(),
            e.EFF(43, '\n            '),
            e.j41(44, 'th', 25),
            e.EFF(45, 'Waited Count'),
            e.k0s(),
            e.EFF(46, '\n            '),
            e.j41(47, 'th', 26),
            e.EFF(48, 'Lock name'),
            e.k0s(),
            e.EFF(49, '\n          '),
            e.k0s(),
            e.EFF(50, '\n        '),
            e.k0s(),
            e.EFF(51, '\n        '),
            e.j41(52, 'tbody'),
            e.EFF(53, '\n          '),
            e.j41(54, 'tr'),
            e.EFF(55, '\n            '),
            e.j41(56, 'td'),
            e.EFF(57),
            e.k0s(),
            e.EFF(58, '\n            '),
            e.j41(59, 'td'),
            e.EFF(60),
            e.k0s(),
            e.EFF(61, '\n            '),
            e.j41(62, 'td'),
            e.EFF(63),
            e.k0s(),
            e.EFF(64, '\n            '),
            e.j41(65, 'td'),
            e.EFF(66),
            e.k0s(),
            e.EFF(67, '\n            '),
            e.j41(68, 'td', 27),
            e.EFF(69, '\n              '),
            e.j41(70, 'code'),
            e.EFF(71),
            e.k0s(),
            e.EFF(72, '\n            '),
            e.k0s(),
            e.EFF(73, '\n          '),
            e.k0s(),
            e.EFF(74, '\n        '),
            e.k0s(),
            e.EFF(75, '\n      '),
            e.k0s(),
            e.EFF(76, '\n    '),
            e.k0s(),
            e.EFF(77, '\n  ');
        }
        if (2 & n) {
          const t = a.$implicit,
            i = e.XpG();
          e.R7$(5),
            e.Y8G('ngClass', i.getBadgeClass(t.threadState)),
            e.R7$(),
            e.JRh(t.threadState),
            e.R7$(),
            e.Lme('\n\n        \xa0', t.threadName, ' (ID ', t.threadId, ')\n\n        '),
            e.R7$(3),
            e.Y8G('hidden', t.showThreadDump),
            e.R7$(3),
            e.Y8G('hidden', !t.showThreadDump),
            e.R7$(5),
            e.Y8G('hidden', !t.showThreadDump),
            e.R7$(4),
            e.Dyx(t.stackTrace),
            e.R7$(7),
            e.SpI('\n          Threads dump:\n          ', t.threadName, '\n        '),
            e.R7$(28),
            e.JRh(t.blockedTime),
            e.R7$(3),
            e.JRh(t.blockedCount),
            e.R7$(3),
            e.JRh(t.waitedTime),
            e.R7$(3),
            e.JRh(t.waitedCount),
            e.R7$(2),
            e.FS9('title', t.lockName),
            e.R7$(3),
            e.JRh(t.lockName);
        }
      }
      let B = (() => {
          class n {
            constructor() {
              (this.ThreadState = o),
                (this.threadDumpAll = 0),
                (this.threadDumpBlocked = 0),
                (this.threadDumpRunnable = 0),
                (this.threadDumpTimedWaiting = 0),
                (this.threadDumpWaiting = 0),
                (this.activeModal = (0, e.WQX)(h.Lw));
            }
            ngOnInit() {
              this.threads?.forEach(t => {
                t.threadState === o.Runnable
                  ? (this.threadDumpRunnable += 1)
                  : t.threadState === o.Waiting
                    ? (this.threadDumpWaiting += 1)
                    : t.threadState === o.TimedWaiting
                      ? (this.threadDumpTimedWaiting += 1)
                      : t.threadState === o.Blocked && (this.threadDumpBlocked += 1);
              }),
                (this.threadDumpAll =
                  this.threadDumpRunnable + this.threadDumpWaiting + this.threadDumpTimedWaiting + this.threadDumpBlocked);
            }
            getBadgeClass(t) {
              return t === o.Runnable
                ? 'bg-success'
                : t === o.Waiting
                  ? 'bg-info'
                  : t === o.TimedWaiting
                    ? 'bg-warning'
                    : t === o.Blocked
                      ? 'bg-danger'
                      : '';
            }
            getThreads() {
              return this.threads?.filter(t => !this.threadStateFilter || t.threadState === this.threadStateFilter) ?? [];
            }
            dismiss() {
              this.activeModal.dismiss();
            }
            static {
              this.ɵfac = function (i) {
                return new (i || n)();
              };
            }
            static {
              this.ɵcmp = e.VBU({
                type: n,
                selectors: [['jhi-thread-modal']],
                decls: 63,
                vars: 10,
                consts: [
                  [1, 'modal-header'],
                  ['jhiTranslate', 'metrics.jvm.threads.dump.title', 1, 'modal-title'],
                  ['type', 'button', 1, 'btn-close', 3, 'click'],
                  [1, 'modal-body'],
                  [1, 'mb-3'],
                  [1, 'badge', 'bg-primary', 'hand', 3, 'click', 'keydown.enter'],
                  [1, 'badge', 'rounded-pill', 'bg-default'],
                  [1, 'badge', 'bg-success', 'hand', 3, 'click', 'keydown.enter'],
                  [1, 'badge', 'bg-info', 'hand', 3, 'click', 'keydown.enter'],
                  [1, 'badge', 'bg-warning', 'hand', 3, 'click', 'keydown.enter'],
                  [1, 'badge', 'bg-danger', 'hand', 3, 'click', 'keydown.enter'],
                  [1, 'modal-footer'],
                  ['type', 'button', 'data-dismiss', 'modal', 1, 'btn', 'btn-secondary', 'float-start', 3, 'click'],
                  ['icon', 'check'],
                  [1, 'pad'],
                  [1, 'badge', 3, 'ngClass'],
                  ['href', 'javascript:void(0);', 3, 'click'],
                  ['jhiTranslate', 'metrics.jvm.threads.dump.show', 3, 'hidden'],
                  ['jhiTranslate', 'metrics.jvm.threads.dump.hide', 3, 'hidden'],
                  [1, 'card', 3, 'hidden'],
                  [1, 'card-body'],
                  [1, 'table', 'table-sm', 'table-responsive'],
                  ['scope', 'col', 'jhiTranslate', 'metrics.jvm.threads.dump.blockedtime'],
                  ['scope', 'col', 'jhiTranslate', 'metrics.jvm.threads.dump.blockedcount'],
                  ['scope', 'col', 'jhiTranslate', 'metrics.jvm.threads.dump.waitedtime'],
                  ['scope', 'col', 'jhiTranslate', 'metrics.jvm.threads.dump.waitedcount'],
                  ['scope', 'col', 'jhiTranslate', 'metrics.jvm.threads.dump.lockname'],
                  [1, 'thread-dump-modal-lock', 3, 'title'],
                  [1, 'break'],
                  [1, 'mt-1'],
                ],
                template: function (i, s) {
                  1 & i &&
                    (e.j41(0, 'div', 0),
                    e.EFF(1, '\n  '),
                    e.j41(2, 'h4', 1),
                    e.EFF(3, 'Threads dump'),
                    e.k0s(),
                    e.EFF(4, '\n\n  '),
                    e.j41(5, 'button', 2),
                    e.bIt('click', function () {
                      return s.dismiss();
                    }),
                    e.EFF(6, '\xa0'),
                    e.k0s(),
                    e.EFF(7, '\n'),
                    e.k0s(),
                    e.EFF(8, '\n\n'),
                    e.j41(9, 'div', 3),
                    e.EFF(10, '\n  '),
                    e.j41(11, 'div', 4),
                    e.EFF(12, '\n    '),
                    e.j41(13, 'button', 5),
                    e.bIt('click', function () {
                      return (s.threadStateFilter = void 0);
                    })('keydown.enter', function () {
                      return (s.threadStateFilter = void 0);
                    }),
                    e.EFF(14, '\n      '),
                    e.DNE(15, D, 3, 0),
                    e.EFF(16, '\n      All\xa0'),
                    e.j41(17, 'span', 6),
                    e.EFF(18),
                    e.k0s(),
                    e.EFF(19, '\n    '),
                    e.k0s(),
                    e.EFF(20, '\n\n    '),
                    e.j41(21, 'button', 7),
                    e.bIt('click', function () {
                      return (s.threadStateFilter = s.ThreadState.Runnable);
                    })('keydown.enter', function () {
                      return (s.threadStateFilter = s.ThreadState.Runnable);
                    }),
                    e.EFF(22, '\n      '),
                    e.DNE(23, I, 3, 0),
                    e.EFF(24, '\n      Runnable\xa0'),
                    e.j41(25, 'span', 6),
                    e.EFF(26),
                    e.k0s(),
                    e.EFF(27, '\n    '),
                    e.k0s(),
                    e.EFF(28, '\n\n    '),
                    e.j41(29, 'button', 8),
                    e.bIt('click', function () {
                      return (s.threadStateFilter = s.ThreadState.Waiting);
                    })('keydown.enter', function () {
                      return (s.threadStateFilter = s.ThreadState.Waiting);
                    }),
                    e.EFF(30, '\n      '),
                    e.DNE(31, J, 3, 0),
                    e.EFF(32, '\n      Waiting\xa0'),
                    e.j41(33, 'span', 6),
                    e.EFF(34),
                    e.k0s(),
                    e.EFF(35, '\n    '),
                    e.k0s(),
                    e.EFF(36, '\n\n    '),
                    e.j41(37, 'button', 9),
                    e.bIt('click', function () {
                      return (s.threadStateFilter = s.ThreadState.TimedWaiting);
                    })('keydown.enter', function () {
                      return (s.threadStateFilter = s.ThreadState.TimedWaiting);
                    }),
                    e.EFF(38, '\n      '),
                    e.DNE(39, U, 3, 0),
                    e.EFF(40, '\n      Timed Waiting\xa0'),
                    e.j41(41, 'span', 6),
                    e.EFF(42),
                    e.k0s(),
                    e.EFF(43, '\n    '),
                    e.k0s(),
                    e.EFF(44, '\n\n    '),
                    e.j41(45, 'button', 10),
                    e.bIt('click', function () {
                      return (s.threadStateFilter = s.ThreadState.Blocked);
                    })('keydown.enter', function () {
                      return (s.threadStateFilter = s.ThreadState.Blocked);
                    }),
                    e.EFF(46, '\n      '),
                    e.DNE(47, x, 3, 0),
                    e.EFF(48, '\n      Blocked\xa0'),
                    e.j41(49, 'span', 6),
                    e.EFF(50),
                    e.k0s(),
                    e.EFF(51, '\n    '),
                    e.k0s(),
                    e.EFF(52, '\n  '),
                    e.k0s(),
                    e.EFF(53, '\n\n  '),
                    e.Z7z(54, N, 78, 14, null, null, e.Vm6),
                    e.k0s(),
                    e.EFF(56, '\n'),
                    e.j41(57, 'div', 11),
                    e.EFF(58, '\n  '),
                    e.j41(59, 'button', 12),
                    e.bIt('click', function () {
                      return s.dismiss();
                    }),
                    e.EFF(60, 'Done'),
                    e.k0s(),
                    e.EFF(61, '\n'),
                    e.k0s(),
                    e.EFF(62, '\n')),
                    2 & i &&
                      (e.R7$(15),
                      e.vxM(void 0 === s.threadStateFilter ? 15 : -1),
                      e.R7$(3),
                      e.JRh(s.threadDumpAll),
                      e.R7$(5),
                      e.vxM(s.threadStateFilter === s.ThreadState.Runnable ? 23 : -1),
                      e.R7$(3),
                      e.JRh(s.threadDumpRunnable),
                      e.R7$(5),
                      e.vxM(s.threadStateFilter === s.ThreadState.Waiting ? 31 : -1),
                      e.R7$(3),
                      e.JRh(s.threadDumpWaiting),
                      e.R7$(5),
                      e.vxM(s.threadStateFilter === s.ThreadState.TimedWaiting ? 39 : -1),
                      e.R7$(3),
                      e.JRh(s.threadDumpTimedWaiting),
                      e.R7$(5),
                      e.vxM(s.threadStateFilter === s.ThreadState.Blocked ? 47 : -1),
                      e.R7$(3),
                      e.JRh(s.threadDumpBlocked),
                      e.R7$(4),
                      e.Dyx(s.getThreads()));
                },
                dependencies: [l.A, c.YU, k.aY, E.A],
                encapsulation: 2,
                changeDetection: 0,
              });
            }
          }
          return n;
        })(),
        A = (() => {
          class n {
            constructor() {
              (this.threads = (0, e.hFB)()),
                (this.threadStats = (0, e.EWP)(() => {
                  const t = {
                    threadDumpAll: 0,
                    threadDumpRunnable: 0,
                    threadDumpTimedWaiting: 0,
                    threadDumpWaiting: 0,
                    threadDumpBlocked: 0,
                  };
                  return (
                    this.threads()?.forEach(i => {
                      i.threadState === o.Runnable
                        ? (t.threadDumpRunnable += 1)
                        : i.threadState === o.Waiting
                          ? (t.threadDumpWaiting += 1)
                          : i.threadState === o.TimedWaiting
                            ? (t.threadDumpTimedWaiting += 1)
                            : i.threadState === o.Blocked && (t.threadDumpBlocked += 1);
                    }),
                    (t.threadDumpAll = t.threadDumpRunnable + t.threadDumpWaiting + t.threadDumpTimedWaiting + t.threadDumpBlocked),
                    t
                  );
                })),
                (this.modalService = (0, e.WQX)(h.Bq));
            }
            open() {
              this.modalService.open(B).componentInstance.threads = this.threads();
            }
            static {
              this.ɵfac = function (i) {
                return new (i || n)();
              };
            }
            static {
              this.ɵcmp = e.VBU({
                type: n,
                selectors: [['jhi-jvm-threads']],
                inputs: { threads: [1, 'threads'] },
                decls: 60,
                vars: 37,
                consts: [
                  ['jhiTranslate', 'metrics.jvm.threads.title'],
                  ['jhiTranslate', 'metrics.jvm.threads.runnable'],
                  ['type', 'success', 3, 'value', 'max', 'striped', 'animated'],
                  ['jhiTranslate', 'metrics.jvm.threads.timedwaiting'],
                  ['type', 'warning', 3, 'value', 'max', 'striped', 'animated'],
                  ['jhiTranslate', 'metrics.jvm.threads.waiting'],
                  ['jhiTranslate', 'metrics.jvm.threads.blocked'],
                  ['data-toggle', 'modal', 'data-target', '#threadDump', 1, 'hand', 'btn', 'btn-primary', 'btn-sm', 3, 'click'],
                ],
                template: function (i, s) {
                  1 & i &&
                    (e.j41(0, 'h4', 0),
                    e.EFF(1, 'Threads'),
                    e.k0s(),
                    e.EFF(2, '\n\n'),
                    e.j41(3, 'span')(4, 'span', 1),
                    e.EFF(5, 'Runnable'),
                    e.k0s(),
                    e.EFF(6),
                    e.k0s(),
                    e.EFF(7, '\n\n'),
                    e.j41(8, 'ngb-progressbar', 2),
                    e.EFF(9, '\n  '),
                    e.j41(10, 'span'),
                    e.EFF(11),
                    e.nI1(12, 'number'),
                    e.k0s(),
                    e.EFF(13, '\n'),
                    e.k0s(),
                    e.EFF(14, '\n\n'),
                    e.j41(15, 'span')(16, 'span', 3),
                    e.EFF(17, 'Timed waiting'),
                    e.k0s(),
                    e.EFF(18),
                    e.k0s(),
                    e.EFF(19, '\n\n'),
                    e.j41(20, 'ngb-progressbar', 4),
                    e.EFF(21, '\n  '),
                    e.j41(22, 'span'),
                    e.EFF(23),
                    e.nI1(24, 'number'),
                    e.k0s(),
                    e.EFF(25, '\n'),
                    e.k0s(),
                    e.EFF(26, '\n\n'),
                    e.j41(27, 'span')(28, 'span', 5),
                    e.EFF(29, 'Waiting'),
                    e.k0s(),
                    e.EFF(30),
                    e.k0s(),
                    e.EFF(31, '\n\n'),
                    e.j41(32, 'ngb-progressbar', 4),
                    e.EFF(33, '\n  '),
                    e.j41(34, 'span'),
                    e.EFF(35),
                    e.nI1(36, 'number'),
                    e.k0s(),
                    e.EFF(37, '\n'),
                    e.k0s(),
                    e.EFF(38, '\n\n'),
                    e.j41(39, 'span')(40, 'span', 6),
                    e.EFF(41, 'Blocked'),
                    e.k0s(),
                    e.EFF(42),
                    e.k0s(),
                    e.EFF(43, '\n\n'),
                    e.j41(44, 'ngb-progressbar', 2),
                    e.EFF(45, '\n  '),
                    e.j41(46, 'span'),
                    e.EFF(47),
                    e.nI1(48, 'number'),
                    e.k0s(),
                    e.EFF(49, '\n'),
                    e.k0s(),
                    e.EFF(50, '\n\n'),
                    e.j41(51, 'div'),
                    e.EFF(52),
                    e.k0s(),
                    e.EFF(53, '\n\n'),
                    e.j41(54, 'button', 7),
                    e.bIt('click', function () {
                      return s.open();
                    }),
                    e.EFF(55, '\n  '),
                    e.j41(56, 'span'),
                    e.EFF(57, 'Expand'),
                    e.k0s(),
                    e.EFF(58, '\n'),
                    e.k0s(),
                    e.EFF(59, '\n')),
                    2 & i &&
                      (e.R7$(6),
                      e.SpI(' ', s.threadStats().threadDumpRunnable, ''),
                      e.R7$(2),
                      e.Y8G('value', s.threadStats().threadDumpRunnable)('max', s.threadStats().threadDumpAll)('striped', !0)(
                        'animated',
                        !1,
                      ),
                      e.R7$(3),
                      e.SpI('', e.i5U(12, 25, (100 * s.threadStats().threadDumpRunnable) / s.threadStats().threadDumpAll, '1.0-0'), '%'),
                      e.R7$(7),
                      e.SpI(' (', s.threadStats().threadDumpTimedWaiting, ')'),
                      e.R7$(2),
                      e.Y8G('value', s.threadStats().threadDumpTimedWaiting)('max', s.threadStats().threadDumpAll)('striped', !0)(
                        'animated',
                        !1,
                      ),
                      e.R7$(3),
                      e.SpI(
                        '',
                        e.i5U(24, 28, (100 * s.threadStats().threadDumpTimedWaiting) / s.threadStats().threadDumpAll, '1.0-0'),
                        '%',
                      ),
                      e.R7$(7),
                      e.SpI(' (', s.threadStats().threadDumpWaiting, ')'),
                      e.R7$(2),
                      e.Y8G('value', s.threadStats().threadDumpWaiting)('max', s.threadStats().threadDumpAll)('striped', !0)(
                        'animated',
                        !1,
                      ),
                      e.R7$(3),
                      e.SpI('', e.i5U(36, 31, (100 * s.threadStats().threadDumpWaiting) / s.threadStats().threadDumpAll, '1.0-0'), '%'),
                      e.R7$(7),
                      e.SpI(' (', s.threadStats().threadDumpBlocked, ')'),
                      e.R7$(2),
                      e.Y8G('value', s.threadStats().threadDumpBlocked)('max', s.threadStats().threadDumpAll)('striped', !0)(
                        'animated',
                        !1,
                      ),
                      e.R7$(3),
                      e.SpI('', e.i5U(48, 34, (100 * s.threadStats().threadDumpBlocked) / s.threadStats().threadDumpAll, '1.0-0'), '%'),
                      e.R7$(5),
                      e.SpI('Total: ', s.threadStats().threadDumpAll, ''));
                },
                dependencies: [l.A, h.EH, E.A, c.QX],
                encapsulation: 2,
              });
            }
          }
          return n;
        })();
      var p = d(8768);
      const W = (n, a) => a.key;
      function w(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n          '),
            e.j41(1, 'tr'),
            e.EFF(2, '\n            '),
            e.j41(3, 'td'),
            e.EFF(4),
            e.k0s(),
            e.EFF(5, '\n            '),
            e.j41(6, 'td', 12),
            e.EFF(7),
            e.k0s(),
            e.EFF(8, '\n            '),
            e.j41(9, 'td', 12),
            e.EFF(10),
            e.k0s(),
            e.EFF(11, '\n            '),
            e.j41(12, 'td', 12),
            e.EFF(13),
            e.k0s(),
            e.EFF(14, '\n            '),
            e.j41(15, 'td', 12),
            e.EFF(16),
            e.k0s(),
            e.EFF(17, '\n            '),
            e.j41(18, 'td', 12),
            e.EFF(19),
            e.k0s(),
            e.EFF(20, '\n            '),
            e.j41(21, 'td', 12),
            e.EFF(22),
            e.k0s(),
            e.EFF(23, '\n            '),
            e.j41(24, 'td', 12),
            e.EFF(25),
            e.nI1(26, 'number'),
            e.k0s(),
            e.EFF(27, '\n            '),
            e.j41(28, 'td', 12),
            e.EFF(29),
            e.nI1(30, 'number'),
            e.k0s(),
            e.EFF(31, '\n          '),
            e.k0s(),
            e.EFF(32, '\n        ')),
          2 & n)
        ) {
          const t = a.$implicit,
            i = e.XpG(2);
          e.R7$(4),
            e.JRh(t.key),
            e.R7$(3),
            e.JRh(t.value['cache.gets.hit']),
            e.R7$(3),
            e.JRh(t.value['cache.gets.miss']),
            e.R7$(3),
            e.JRh(t.value['cache.gets.hit'] + t.value['cache.gets.miss']),
            e.R7$(3),
            e.JRh(t.value['cache.puts']),
            e.R7$(3),
            e.JRh(t.value['cache.removals']),
            e.R7$(3),
            e.JRh(t.value['cache.evictions']),
            e.R7$(3),
            e.SpI(
              '\n              ',
              e.i5U(
                26,
                9,
                i.filterNaN((100 * t.value['cache.gets.hit']) / (t.value['cache.gets.hit'] + t.value['cache.gets.miss'])),
                '1.0-4',
              ),
              '\n            ',
            ),
            e.R7$(4),
            e.SpI(
              '\n              ',
              e.i5U(
                30,
                12,
                i.filterNaN((100 * t.value['cache.gets.miss']) / (t.value['cache.gets.hit'] + t.value['cache.gets.miss'])),
                '1.0-4',
              ),
              '\n            ',
            );
        }
      }
      function q(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n  '),
            e.j41(1, 'div', 1),
            e.EFF(2, '\n    '),
            e.j41(3, 'table', 2),
            e.EFF(4, '\n      '),
            e.j41(5, 'thead'),
            e.EFF(6, '\n        '),
            e.j41(7, 'tr'),
            e.EFF(8, '\n          '),
            e.j41(9, 'th', 3),
            e.EFF(10, 'Cache name'),
            e.k0s(),
            e.EFF(11, '\n          '),
            e.j41(12, 'th', 4),
            e.EFF(13, 'Cache Hits'),
            e.k0s(),
            e.EFF(14, '\n          '),
            e.j41(15, 'th', 5),
            e.EFF(16, 'Cache Misses'),
            e.k0s(),
            e.EFF(17, '\n          '),
            e.j41(18, 'th', 6),
            e.EFF(19, 'Cache Gets'),
            e.k0s(),
            e.EFF(20, '\n          '),
            e.j41(21, 'th', 7),
            e.EFF(22, 'Cache Puts'),
            e.k0s(),
            e.EFF(23, '\n          '),
            e.j41(24, 'th', 8),
            e.EFF(25, 'Cache Removals'),
            e.k0s(),
            e.EFF(26, '\n          '),
            e.j41(27, 'th', 9),
            e.EFF(28, 'Cache Evictions'),
            e.k0s(),
            e.EFF(29, '\n          '),
            e.j41(30, 'th', 10),
            e.EFF(31, 'Cache Hit %'),
            e.k0s(),
            e.EFF(32, '\n          '),
            e.j41(33, 'th', 11),
            e.EFF(34, 'Cache Miss %'),
            e.k0s(),
            e.EFF(35, '\n        '),
            e.k0s(),
            e.EFF(36, '\n      '),
            e.k0s(),
            e.EFF(37, '\n      '),
            e.j41(38, 'tbody'),
            e.EFF(39, '\n        '),
            e.Z7z(40, w, 33, 15, null, null, W),
            e.nI1(42, 'keyvalue'),
            e.k0s(),
            e.EFF(43, '\n    '),
            e.k0s(),
            e.EFF(44, '\n  '),
            e.k0s(),
            e.EFF(45, '\n')),
          2 & n)
        ) {
          const t = e.XpG();
          e.R7$(40), e.Dyx(e.bMT(42, 0, t.cacheMetrics()));
        }
      }
      let X = (() => {
        class n {
          constructor() {
            (this.cacheMetrics = (0, e.hFB)()), (this.updating = (0, e.hFB)()), (this.filterNaN = t => (0, p.a)(t));
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-metrics-cache']],
              inputs: { cacheMetrics: [1, 'cacheMetrics'], updating: [1, 'updating'] },
              decls: 4,
              vars: 1,
              consts: [
                ['id', 'cacheMetrics()', 'jhiTranslate', 'metrics.cache.title'],
                [1, 'table-responsive'],
                ['aria-describedby', 'cacheMetrics', 1, 'table', 'table-striped'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.cachename'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.hits', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.misses', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.gets', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.puts', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.removals', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.evictions', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.hitPercent', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.cache.missPercent', 1, 'text-end'],
                [1, 'text-end'],
              ],
              template: function (i, s) {
                1 & i && (e.j41(0, 'h3', 0), e.EFF(1, 'Cache statistics'), e.k0s(), e.EFF(2, '\n\n'), e.DNE(3, q, 46, 2)),
                  2 & i && (e.R7$(3), e.vxM(!s.updating() && s.cacheMetrics() ? 3 : -1));
              },
              dependencies: [l.A, E.A, c.QX, c.lG],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
        }
        return n;
      })();
      function Y(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n  '),
            e.j41(1, 'div', 1),
            e.EFF(2, '\n    '),
            e.j41(3, 'table', 2),
            e.EFF(4, '\n      '),
            e.j41(5, 'thead'),
            e.EFF(6, '\n        '),
            e.j41(7, 'tr'),
            e.EFF(8, '\n          '),
            e.j41(9, 'th', 3),
            e.EFF(10, '\n            '),
            e.j41(11, 'span', 4),
            e.EFF(12, 'Connection Pool Usage'),
            e.k0s(),
            e.EFF(13),
            e.k0s(),
            e.EFF(14, '\n          '),
            e.j41(15, 'th', 5),
            e.EFF(16, 'Count'),
            e.k0s(),
            e.EFF(17, '\n          '),
            e.j41(18, 'th', 6),
            e.EFF(19, 'Mean'),
            e.k0s(),
            e.EFF(20, '\n          '),
            e.j41(21, 'th', 7),
            e.EFF(22, 'Min'),
            e.k0s(),
            e.EFF(23, '\n          '),
            e.j41(24, 'th', 8),
            e.EFF(25, 'p50'),
            e.k0s(),
            e.EFF(26, '\n          '),
            e.j41(27, 'th', 9),
            e.EFF(28, 'p75'),
            e.k0s(),
            e.EFF(29, '\n          '),
            e.j41(30, 'th', 10),
            e.EFF(31, 'p95'),
            e.k0s(),
            e.EFF(32, '\n          '),
            e.j41(33, 'th', 11),
            e.EFF(34, 'p99'),
            e.k0s(),
            e.EFF(35, '\n          '),
            e.j41(36, 'th', 12),
            e.EFF(37, 'Max'),
            e.k0s(),
            e.EFF(38, '\n        '),
            e.k0s(),
            e.EFF(39, '\n      '),
            e.k0s(),
            e.EFF(40, '\n      '),
            e.j41(41, 'tbody'),
            e.EFF(42, '\n        '),
            e.j41(43, 'tr'),
            e.EFF(44, '\n          '),
            e.j41(45, 'td'),
            e.EFF(46, 'Acquire'),
            e.k0s(),
            e.EFF(47, '\n          '),
            e.SS7(48),
            e.EFF(49, '\n          '),
            e.j41(50, 'td', 13),
            e.EFF(51),
            e.k0s(),
            e.EFF(52, '\n          '),
            e.j41(53, 'td', 13),
            e.EFF(54),
            e.nI1(55, 'number'),
            e.k0s(),
            e.EFF(56, '\n          '),
            e.j41(57, 'td', 13),
            e.EFF(58),
            e.nI1(59, 'number'),
            e.k0s(),
            e.EFF(60, '\n          '),
            e.j41(61, 'td', 13),
            e.EFF(62),
            e.nI1(63, 'number'),
            e.k0s(),
            e.EFF(64, '\n          '),
            e.j41(65, 'td', 13),
            e.EFF(66),
            e.nI1(67, 'number'),
            e.k0s(),
            e.EFF(68, '\n          '),
            e.j41(69, 'td', 13),
            e.EFF(70),
            e.nI1(71, 'number'),
            e.k0s(),
            e.EFF(72, '\n          '),
            e.j41(73, 'td', 13),
            e.EFF(74),
            e.nI1(75, 'number'),
            e.k0s(),
            e.EFF(76, '\n          '),
            e.j41(77, 'td', 13),
            e.EFF(78),
            e.nI1(79, 'number'),
            e.k0s(),
            e.EFF(80, '\n        '),
            e.k0s(),
            e.EFF(81, '\n        '),
            e.j41(82, 'tr'),
            e.EFF(83, '\n          '),
            e.j41(84, 'td'),
            e.EFF(85, 'Creation'),
            e.k0s(),
            e.EFF(86, '\n          '),
            e.SS7(87),
            e.EFF(88, '\n          '),
            e.j41(89, 'td', 13),
            e.EFF(90),
            e.k0s(),
            e.EFF(91, '\n          '),
            e.j41(92, 'td', 13),
            e.EFF(93),
            e.nI1(94, 'number'),
            e.k0s(),
            e.EFF(95, '\n          '),
            e.j41(96, 'td', 13),
            e.EFF(97),
            e.nI1(98, 'number'),
            e.k0s(),
            e.EFF(99, '\n          '),
            e.j41(100, 'td', 13),
            e.EFF(101),
            e.nI1(102, 'number'),
            e.k0s(),
            e.EFF(103, '\n          '),
            e.j41(104, 'td', 13),
            e.EFF(105),
            e.nI1(106, 'number'),
            e.k0s(),
            e.EFF(107, '\n          '),
            e.j41(108, 'td', 13),
            e.EFF(109),
            e.nI1(110, 'number'),
            e.k0s(),
            e.EFF(111, '\n          '),
            e.j41(112, 'td', 13),
            e.EFF(113),
            e.nI1(114, 'number'),
            e.k0s(),
            e.EFF(115, '\n          '),
            e.j41(116, 'td', 13),
            e.EFF(117),
            e.nI1(118, 'number'),
            e.k0s(),
            e.EFF(119, '\n        '),
            e.k0s(),
            e.EFF(120, '\n        '),
            e.j41(121, 'tr'),
            e.EFF(122, '\n          '),
            e.j41(123, 'td'),
            e.EFF(124, 'Usage'),
            e.k0s(),
            e.EFF(125, '\n          '),
            e.SS7(126),
            e.EFF(127, '\n          '),
            e.j41(128, 'td', 13),
            e.EFF(129),
            e.k0s(),
            e.EFF(130, '\n          '),
            e.j41(131, 'td', 13),
            e.EFF(132),
            e.nI1(133, 'number'),
            e.k0s(),
            e.EFF(134, '\n          '),
            e.j41(135, 'td', 13),
            e.EFF(136),
            e.nI1(137, 'number'),
            e.k0s(),
            e.EFF(138, '\n          '),
            e.j41(139, 'td', 13),
            e.EFF(140),
            e.nI1(141, 'number'),
            e.k0s(),
            e.EFF(142, '\n          '),
            e.j41(143, 'td', 13),
            e.EFF(144),
            e.nI1(145, 'number'),
            e.k0s(),
            e.EFF(146, '\n          '),
            e.j41(147, 'td', 13),
            e.EFF(148),
            e.nI1(149, 'number'),
            e.k0s(),
            e.EFF(150, '\n          '),
            e.j41(151, 'td', 13),
            e.EFF(152),
            e.nI1(153, 'number'),
            e.k0s(),
            e.EFF(154, '\n          '),
            e.j41(155, 'td', 13),
            e.EFF(156),
            e.nI1(157, 'number'),
            e.k0s(),
            e.EFF(158, '\n        '),
            e.k0s(),
            e.EFF(159, '\n      '),
            e.k0s(),
            e.EFF(160, '\n    '),
            e.k0s(),
            e.EFF(161, '\n  '),
            e.k0s(),
            e.EFF(162, '\n')),
          2 & n)
        ) {
          const t = e.XpG(),
            i = e.r8f(3);
          e.R7$(13),
            e.LHq(
              ' (active: ',
              i.active.value,
              ',\n            min: ',
              i.min.value,
              ', max: ',
              i.max.value,
              ', idle:\n            ',
              i.idle.value,
              ')\n          ',
            );
          const s = i.acquire;
          e.R7$(38),
            e.JRh(s.count),
            e.R7$(3),
            e.JRh(e.i5U(55, 28, t.filterNaN(s.mean), '1.0-2')),
            e.R7$(4),
            e.JRh(e.i5U(59, 31, s['0.0'], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(63, 34, s[0.5], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(67, 37, s[0.75], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(71, 40, s[0.95], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(75, 43, s[0.99], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(79, 46, t.filterNaN(s.max), '1.0-2'));
          const F = i.creation;
          e.R7$(12),
            e.JRh(F.count),
            e.R7$(3),
            e.JRh(e.i5U(94, 49, t.filterNaN(F.mean), '1.0-2')),
            e.R7$(4),
            e.JRh(e.i5U(98, 52, F['0.0'], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(102, 55, F[0.5], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(106, 58, F[0.75], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(110, 61, F[0.95], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(114, 64, F[0.99], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(118, 67, t.filterNaN(F.max), '1.0-2'));
          const r = i.usage;
          e.R7$(12),
            e.JRh(r.count),
            e.R7$(3),
            e.JRh(e.i5U(133, 70, t.filterNaN(r.mean), '1.0-2')),
            e.R7$(4),
            e.JRh(e.i5U(137, 73, r['0.0'], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(141, 76, r[0.5], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(145, 79, r[0.75], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(149, 82, r[0.95], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(153, 85, r[0.99], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(157, 88, t.filterNaN(r.max), '1.0-2'));
        }
      }
      let P = (() => {
        class n {
          constructor() {
            (this.datasourceMetrics = (0, e.hFB)()), (this.updating = (0, e.hFB)()), (this.filterNaN = t => (0, p.a)(t));
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-metrics-datasource']],
              inputs: { datasourceMetrics: [1, 'datasourceMetrics'], updating: [1, 'updating'] },
              decls: 6,
              vars: 2,
              consts: [
                ['id', 'datasourceMetrics', 'jhiTranslate', 'metrics.datasource.title'],
                [1, 'table-responsive'],
                ['aria-describedby', 'datasourceMetrics', 1, 'table', 'table-striped'],
                ['scope', 'col'],
                ['jhiTranslate', 'metrics.datasource.usage'],
                ['scope', 'col', 'jhiTranslate', 'metrics.datasource.count', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.datasource.mean', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.min', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p50', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p75', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p95', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p99', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.datasource.max', 1, 'text-end'],
                [1, 'text-end'],
              ],
              template: function (i, s) {
                if (
                  (1 & i &&
                    (e.j41(0, 'h3', 0),
                    e.EFF(1, 'DataSource statistics (time in millisecond)'),
                    e.k0s(),
                    e.EFF(2, '\n\n'),
                    e.SS7(3),
                    e.EFF(4, '\n'),
                    e.DNE(5, Y, 163, 91)),
                  2 & i)
                ) {
                  e.R7$(3);
                  const F = e.bH3(s.datasourceMetrics());
                  e.R7$(2), e.vxM(!s.updating() && F ? 5 : -1);
                }
              },
              dependencies: [l.A, E.A, c.QX],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
        }
        return n;
      })();
      const R = (n, a) => a.key;
      function V(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n            '),
            e.j41(1, 'tr'),
            e.EFF(2, '\n              '),
            e.j41(3, 'td'),
            e.EFF(4),
            e.k0s(),
            e.EFF(5, '\n              '),
            e.j41(6, 'td'),
            e.EFF(7),
            e.k0s(),
            e.EFF(8, '\n              '),
            e.j41(9, 'td', 5),
            e.EFF(10),
            e.k0s(),
            e.EFF(11, '\n              '),
            e.j41(12, 'td', 5),
            e.EFF(13),
            e.nI1(14, 'number'),
            e.k0s(),
            e.EFF(15, '\n            '),
            e.k0s(),
            e.EFF(16, '\n          ')),
          2 & n)
        ) {
          const t = a.$implicit,
            i = e.XpG().$implicit;
          e.R7$(4),
            e.JRh(t.key),
            e.R7$(3),
            e.JRh(i.key),
            e.R7$(3),
            e.JRh(t.value.count),
            e.R7$(3),
            e.JRh(e.i5U(14, 4, t.value.mean, '1.0-3'));
        }
      }
      function z(n, a) {
        if ((1 & n && (e.EFF(0, '\n          '), e.Z7z(1, V, 17, 7, null, null, R), e.nI1(3, 'keyvalue')), 2 & n)) {
          const t = a.$implicit;
          e.R7$(), e.Dyx(e.bMT(3, 0, t.value));
        }
      }
      function L(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n  '),
            e.j41(1, 'div', 1),
            e.EFF(2, '\n    '),
            e.j41(3, 'table', 2),
            e.EFF(4, '\n      '),
            e.j41(5, 'thead'),
            e.EFF(6, '\n        '),
            e.j41(7, 'tr'),
            e.EFF(8, '\n          '),
            e.j41(9, 'th', 3),
            e.EFF(10, 'Method'),
            e.k0s(),
            e.EFF(11, '\n          '),
            e.j41(12, 'th', 3),
            e.EFF(13, 'Endpoint url'),
            e.k0s(),
            e.EFF(14, '\n          '),
            e.j41(15, 'th', 4),
            e.EFF(16, 'Count'),
            e.k0s(),
            e.EFF(17, '\n          '),
            e.j41(18, 'th', 4),
            e.EFF(19, 'Mean'),
            e.k0s(),
            e.EFF(20, '\n        '),
            e.k0s(),
            e.EFF(21, '\n      '),
            e.k0s(),
            e.EFF(22, '\n      '),
            e.j41(23, 'tbody'),
            e.EFF(24, '\n        '),
            e.Z7z(25, z, 4, 2, null, null, R),
            e.nI1(27, 'keyvalue'),
            e.k0s(),
            e.EFF(28, '\n    '),
            e.k0s(),
            e.EFF(29, '\n  '),
            e.k0s(),
            e.EFF(30, '\n')),
          2 & n)
        ) {
          const t = e.XpG();
          e.R7$(25), e.Dyx(e.bMT(27, 0, t.endpointsRequestsMetrics()));
        }
      }
      let Q = (() => {
        class n {
          constructor() {
            (this.endpointsRequestsMetrics = (0, e.hFB)()), (this.updating = (0, e.hFB)());
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-metrics-endpoints-requests']],
              inputs: { endpointsRequestsMetrics: [1, 'endpointsRequestsMetrics'], updating: [1, 'updating'] },
              decls: 4,
              vars: 1,
              consts: [
                ['id', 'endpointsRequestsMetrics'],
                [1, 'table-responsive'],
                ['aria-describedby', 'endpointsRequestsMetrics', 1, 'table', 'table-striped'],
                ['scope', 'col'],
                ['scope', 'col', 1, 'text-end'],
                [1, 'text-end'],
              ],
              template: function (i, s) {
                1 & i &&
                  (e.j41(0, 'h3', 0), e.EFF(1, 'Endpoints requests (time in millisecond)'), e.k0s(), e.EFF(2, '\n\n'), e.DNE(3, L, 31, 2)),
                  2 & i && (e.R7$(3), e.vxM(!s.updating() && s.endpointsRequestsMetrics() ? 3 : -1));
              },
              dependencies: [l.A, c.QX, c.lG],
              encapsulation: 2,
            });
          }
        }
        return n;
      })();
      function H(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n      '),
            e.j41(1, 'div'),
            e.EFF(2, '\n        '),
            e.j41(3, 'span'),
            e.EFF(4),
            e.nI1(5, 'number'),
            e.nI1(6, 'number'),
            e.k0s(),
            e.EFF(7, '\n\n        '),
            e.j41(8, 'ngb-progressbar', 3),
            e.EFF(9, '\n          '),
            e.j41(10, 'span'),
            e.EFF(11),
            e.nI1(12, 'number'),
            e.k0s(),
            e.EFF(13, '\n        '),
            e.k0s(),
            e.EFF(14, '\n      '),
            e.k0s(),
            e.EFF(15, '\n    ')),
          2 & n)
        ) {
          const t = a;
          e.R7$(4),
            e.Lme(
              '\n          GC Live Data Size/GC Max Data Size (',
              e.i5U(5, 7, t['jvm.gc.live.data.size'] / 1048576, '1.0-0'),
              'M /\n          ',
              e.i5U(6, 10, t['jvm.gc.max.data.size'] / 1048576, '1.0-0'),
              'M)\n        ',
            ),
            e.R7$(4),
            e.Y8G('max', t['jvm.gc.max.data.size'])('value', t['jvm.gc.live.data.size'])('striped', !0)('animated', !1),
            e.R7$(3),
            e.SpI(
              '\n            ',
              e.i5U(12, 13, (100 * t['jvm.gc.live.data.size']) / t['jvm.gc.max.data.size'], '1.0-2'),
              '%\n          ',
            );
        }
      }
      function O(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n      '),
            e.j41(1, 'div'),
            e.EFF(2, '\n        '),
            e.j41(3, 'span'),
            e.EFF(4),
            e.nI1(5, 'number'),
            e.nI1(6, 'number'),
            e.k0s(),
            e.EFF(7, '\n\n        '),
            e.j41(8, 'ngb-progressbar', 3),
            e.EFF(9, '\n          '),
            e.j41(10, 'span'),
            e.EFF(11),
            e.nI1(12, 'number'),
            e.k0s(),
            e.EFF(13, '\n        '),
            e.k0s(),
            e.EFF(14, '\n      '),
            e.k0s(),
            e.EFF(15, '\n    ')),
          2 & n)
        ) {
          const t = a;
          e.R7$(4),
            e.Lme(
              '\n          GC Memory Promoted/GC Memory Allocated (',
              e.i5U(5, 7, t['jvm.gc.memory.promoted'] / 1048576, '1.0-0'),
              'M /\n          ',
              e.i5U(6, 10, t['jvm.gc.memory.allocated'] / 1048576, '1.0-0'),
              'M)\n        ',
            ),
            e.R7$(4),
            e.Y8G('max', t['jvm.gc.memory.allocated'])('value', t['jvm.gc.memory.promoted'])('striped', !0)('animated', !1),
            e.R7$(3),
            e.SpI(
              '\n            ',
              e.i5U(12, 13, (100 * t['jvm.gc.memory.promoted']) / t['jvm.gc.memory.allocated'], '1.0-2'),
              '%\n          ',
            );
        }
      }
      function Z(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n      '),
            e.j41(1, 'div', 1),
            e.EFF(2, '\n        '),
            e.j41(3, 'div', 4),
            e.EFF(4, 'Classes loaded'),
            e.k0s(),
            e.EFF(5, '\n        '),
            e.j41(6, 'div', 5),
            e.EFF(7),
            e.k0s(),
            e.EFF(8, '\n      '),
            e.k0s(),
            e.EFF(9, '\n      '),
            e.j41(10, 'div', 1),
            e.EFF(11, '\n        '),
            e.j41(12, 'div', 4),
            e.EFF(13, 'Classes unloaded'),
            e.k0s(),
            e.EFF(14, '\n        '),
            e.j41(15, 'div', 5),
            e.EFF(16),
            e.k0s(),
            e.EFF(17, '\n      '),
            e.k0s(),
            e.EFF(18, '\n    ')),
          2 & n)
        ) {
          const t = a;
          e.R7$(7), e.JRh(t.classesLoaded), e.R7$(9), e.JRh(t.classesUnloaded);
        }
      }
      function K(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n    '),
            e.j41(1, 'div', 6),
            e.EFF(2, '\n      '),
            e.j41(3, 'table', 7),
            e.EFF(4, '\n        '),
            e.j41(5, 'thead'),
            e.EFF(6, '\n          '),
            e.j41(7, 'tr'),
            e.EFF(8, '\n            '),
            e.nrm(9, 'th', 8),
            e.EFF(10, '\n            '),
            e.j41(11, 'th', 9),
            e.EFF(12, 'Count'),
            e.k0s(),
            e.EFF(13, '\n            '),
            e.j41(14, 'th', 10),
            e.EFF(15, 'Mean'),
            e.k0s(),
            e.EFF(16, '\n            '),
            e.j41(17, 'th', 11),
            e.EFF(18, 'Min'),
            e.k0s(),
            e.EFF(19, '\n            '),
            e.j41(20, 'th', 12),
            e.EFF(21, 'p50'),
            e.k0s(),
            e.EFF(22, '\n            '),
            e.j41(23, 'th', 13),
            e.EFF(24, 'p75'),
            e.k0s(),
            e.EFF(25, '\n            '),
            e.j41(26, 'th', 14),
            e.EFF(27, 'p95'),
            e.k0s(),
            e.EFF(28, '\n            '),
            e.j41(29, 'th', 15),
            e.EFF(30, 'p99'),
            e.k0s(),
            e.EFF(31, '\n            '),
            e.j41(32, 'th', 16),
            e.EFF(33, 'Max'),
            e.k0s(),
            e.EFF(34, '\n          '),
            e.k0s(),
            e.EFF(35, '\n        '),
            e.k0s(),
            e.EFF(36, '\n        '),
            e.j41(37, 'tbody'),
            e.EFF(38, '\n          '),
            e.j41(39, 'tr'),
            e.EFF(40, '\n            '),
            e.j41(41, 'td'),
            e.EFF(42, 'jvm.gc.pause'),
            e.k0s(),
            e.EFF(43, '\n            '),
            e.SS7(44),
            e.EFF(45, '\n            '),
            e.j41(46, 'td', 17),
            e.EFF(47),
            e.k0s(),
            e.EFF(48, '\n            '),
            e.j41(49, 'td', 17),
            e.EFF(50),
            e.nI1(51, 'number'),
            e.k0s(),
            e.EFF(52, '\n            '),
            e.j41(53, 'td', 17),
            e.EFF(54),
            e.nI1(55, 'number'),
            e.k0s(),
            e.EFF(56, '\n            '),
            e.j41(57, 'td', 17),
            e.EFF(58),
            e.nI1(59, 'number'),
            e.k0s(),
            e.EFF(60, '\n            '),
            e.j41(61, 'td', 17),
            e.EFF(62),
            e.nI1(63, 'number'),
            e.k0s(),
            e.EFF(64, '\n            '),
            e.j41(65, 'td', 17),
            e.EFF(66),
            e.nI1(67, 'number'),
            e.k0s(),
            e.EFF(68, '\n            '),
            e.j41(69, 'td', 17),
            e.EFF(70),
            e.nI1(71, 'number'),
            e.k0s(),
            e.EFF(72, '\n            '),
            e.j41(73, 'td', 17),
            e.EFF(74),
            e.nI1(75, 'number'),
            e.k0s(),
            e.EFF(76, '\n          '),
            e.k0s(),
            e.EFF(77, '\n        '),
            e.k0s(),
            e.EFF(78, '\n      '),
            e.k0s(),
            e.EFF(79, '\n    '),
            e.k0s(),
            e.EFF(80, '\n  ')),
          2 & n)
        ) {
          const t = e.XpG().garbageCollectorMetrics()['jvm.gc.pause'];
          e.R7$(47),
            e.JRh(t.count),
            e.R7$(3),
            e.JRh(e.i5U(51, 8, t.mean, '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(55, 11, t['0.0'], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(59, 14, t[0.5], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(63, 17, t[0.75], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(67, 20, t[0.95], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(71, 23, t[0.99], '1.0-3')),
            e.R7$(4),
            e.JRh(e.i5U(75, 26, t.max, '1.0-3'));
        }
      }
      let ee = (() => {
        class n {
          constructor() {
            (this.garbageCollectorMetrics = (0, e.hFB)()), (this.updating = (0, e.hFB)());
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-metrics-garbagecollector']],
              inputs: { garbageCollectorMetrics: [1, 'garbageCollectorMetrics'], updating: [1, 'updating'] },
              decls: 19,
              vars: 4,
              consts: [
                ['id', 'garbageCollectorMetrics', 'jhiTranslate', 'metrics.jvm.gc.title'],
                [1, 'row'],
                [1, 'col-md-4'],
                ['type', 'success', 3, 'max', 'value', 'striped', 'animated'],
                [1, 'col-md-9'],
                [1, 'col-md-3', 'text-end'],
                [1, 'table-responsive'],
                ['aria-describedby', 'garbageCollectorMetrics', 1, 'table', 'table-striped'],
                ['scope', 'col'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.count', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.mean', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.min', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p50', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p75', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p95', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.p99', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.servicesstats.table.max', 1, 'text-end'],
                [1, 'text-end'],
              ],
              template: function (i, s) {
                if (
                  (1 & i &&
                    (e.j41(0, 'h3', 0),
                    e.EFF(1, 'Garbage collections'),
                    e.k0s(),
                    e.EFF(2, '\n\n'),
                    e.j41(3, 'div', 1),
                    e.EFF(4, '\n  '),
                    e.j41(5, 'div', 2),
                    e.EFF(6, '\n    '),
                    e.DNE(7, H, 16, 16),
                    e.k0s(),
                    e.EFF(8, '\n\n  '),
                    e.j41(9, 'div', 2),
                    e.EFF(10, '\n    '),
                    e.DNE(11, O, 16, 16),
                    e.k0s(),
                    e.EFF(12, '\n\n  '),
                    e.j41(13, 'div', 2),
                    e.EFF(14, '\n    '),
                    e.DNE(15, Z, 19, 2),
                    e.k0s(),
                    e.EFF(16, '\n\n  '),
                    e.DNE(17, K, 81, 29),
                    e.k0s(),
                    e.EFF(18, '\n')),
                  2 & i)
                ) {
                  let F, r, u;
                  e.R7$(7),
                    e.vxM((F = s.garbageCollectorMetrics()) ? 7 : -1, F),
                    e.R7$(4),
                    e.vxM((r = s.garbageCollectorMetrics()) ? 11 : -1, r),
                    e.R7$(4),
                    e.vxM((u = s.garbageCollectorMetrics()) ? 15 : -1, u),
                    e.R7$(2),
                    e.vxM(!s.updating() && s.garbageCollectorMetrics() ? 17 : -1);
                }
              },
              dependencies: [l.A, h.EH, E.A, c.QX],
              encapsulation: 2,
            });
          }
        }
        return n;
      })();
      const te = (n, a) => a.key;
      function ne(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n        '),
            e.j41(1, 'tr'),
            e.EFF(2, '\n          '),
            e.j41(3, 'td'),
            e.EFF(4),
            e.k0s(),
            e.EFF(5, '\n          '),
            e.j41(6, 'td'),
            e.EFF(7, '\n            '),
            e.j41(8, 'ngb-progressbar', 6),
            e.EFF(9, '\n              '),
            e.j41(10, 'span'),
            e.EFF(11),
            e.k0s(),
            e.EFF(12, '\n            '),
            e.k0s(),
            e.EFF(13, '\n          '),
            e.k0s(),
            e.EFF(14, '\n          '),
            e.j41(15, 'td', 7),
            e.EFF(16),
            e.nI1(17, 'number'),
            e.k0s(),
            e.EFF(18, '\n          '),
            e.j41(19, 'td', 7),
            e.EFF(20),
            e.nI1(21, 'number'),
            e.k0s(),
            e.EFF(22, '\n        '),
            e.k0s(),
            e.EFF(23, '\n      ')),
          2 & n)
        ) {
          const t = a.$implicit,
            i = e.XpG(2),
            s = e.r8f(3);
          e.R7$(4),
            e.JRh(t.key),
            e.R7$(4),
            e.Y8G('max', s.all.count)('value', t.value.count)('striped', !0)('animated', !1),
            e.R7$(3),
            e.JRh(t.value.count),
            e.R7$(5),
            e.SpI('\n            ', e.i5U(17, 8, i.filterNaN(t.value.mean), '1.0-2'), '\n          '),
            e.R7$(4),
            e.JRh(e.i5U(21, 11, t.value.max, '1.0-2'));
        }
      }
      function se(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n  '),
            e.j41(1, 'table', 1),
            e.EFF(2, '\n    '),
            e.j41(3, 'thead'),
            e.EFF(4, '\n      '),
            e.j41(5, 'tr'),
            e.EFF(6, '\n        '),
            e.j41(7, 'th', 2),
            e.EFF(8, 'Code'),
            e.k0s(),
            e.EFF(9, '\n        '),
            e.j41(10, 'th', 3),
            e.EFF(11, 'Count'),
            e.k0s(),
            e.EFF(12, '\n        '),
            e.j41(13, 'th', 4),
            e.EFF(14, 'Mean'),
            e.k0s(),
            e.EFF(15, '\n        '),
            e.j41(16, 'th', 5),
            e.EFF(17, 'Max'),
            e.k0s(),
            e.EFF(18, '\n      '),
            e.k0s(),
            e.EFF(19, '\n    '),
            e.k0s(),
            e.EFF(20, '\n    '),
            e.j41(21, 'tbody'),
            e.EFF(22, '\n      '),
            e.Z7z(23, ne, 24, 14, null, null, te),
            e.nI1(25, 'keyvalue'),
            e.k0s(),
            e.EFF(26, '\n  '),
            e.k0s(),
            e.EFF(27, '\n')),
          2 & n)
        ) {
          e.XpG();
          const t = e.r8f(3);
          e.R7$(23), e.Dyx(e.bMT(25, 0, t.percode));
        }
      }
      let ie = (() => {
        class n {
          constructor() {
            (this.requestMetrics = (0, e.hFB)()), (this.updating = (0, e.hFB)()), (this.filterNaN = t => (0, p.a)(t));
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-metrics-request']],
              inputs: { requestMetrics: [1, 'requestMetrics'], updating: [1, 'updating'] },
              decls: 6,
              vars: 2,
              consts: [
                ['id', 'requestMetrics', 'jhiTranslate', 'metrics.jvm.http.title'],
                ['aria-describedby', 'requestMetrics', 1, 'table', 'table-striped'],
                ['scope', 'col', 'jhiTranslate', 'metrics.jvm.http.table.code'],
                ['scope', 'col', 'jhiTranslate', 'metrics.jvm.http.table.count'],
                ['scope', 'col', 'jhiTranslate', 'metrics.jvm.http.table.mean', 1, 'text-end'],
                ['scope', 'col', 'jhiTranslate', 'metrics.jvm.http.table.max', 1, 'text-end'],
                ['type', 'success', 3, 'max', 'value', 'striped', 'animated'],
                [1, 'text-end'],
              ],
              template: function (i, s) {
                if (
                  (1 & i &&
                    (e.j41(0, 'h3', 0),
                    e.EFF(1, 'HTTP requests (time in millisecond)'),
                    e.k0s(),
                    e.EFF(2, '\n\n'),
                    e.SS7(3),
                    e.EFF(4, '\n'),
                    e.DNE(5, se, 28, 2)),
                  2 & i)
                ) {
                  e.R7$(3);
                  const F = e.bH3(s.requestMetrics());
                  e.R7$(2), e.vxM(!s.updating() && F ? 5 : -1);
                }
              },
              dependencies: [l.A, h.EH, E.A, c.QX, c.lG],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
        }
        return n;
      })();
      function ae(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n  '),
            e.qex(1),
            e.EFF(2, '\n    '),
            e.j41(3, 'div', 0),
            e.EFF(4, '\n      '),
            e.j41(5, 'div', 1),
            e.EFF(6, 'Uptime'),
            e.k0s(),
            e.EFF(7, '\n      '),
            e.j41(8, 'div', 2),
            e.EFF(9),
            e.k0s(),
            e.EFF(10, '\n    '),
            e.k0s(),
            e.EFF(11, '\n\n    '),
            e.j41(12, 'div', 0),
            e.EFF(13, '\n      '),
            e.j41(14, 'div', 1),
            e.EFF(15, 'Start time'),
            e.k0s(),
            e.EFF(16, '\n      '),
            e.j41(17, 'div', 2),
            e.EFF(18),
            e.nI1(19, 'date'),
            e.k0s(),
            e.EFF(20, '\n    '),
            e.k0s(),
            e.EFF(21, '\n\n    '),
            e.j41(22, 'div', 0),
            e.EFF(23, '\n      '),
            e.j41(24, 'div', 3),
            e.EFF(25, 'Process CPU usage'),
            e.k0s(),
            e.EFF(26, '\n      '),
            e.j41(27, 'div', 4),
            e.EFF(28),
            e.nI1(29, 'number'),
            e.k0s(),
            e.EFF(30, '\n    '),
            e.k0s(),
            e.EFF(31, '\n\n    '),
            e.j41(32, 'ngb-progressbar', 5),
            e.EFF(33, '\n      '),
            e.j41(34, 'span'),
            e.EFF(35),
            e.nI1(36, 'number'),
            e.k0s(),
            e.EFF(37, '\n    '),
            e.k0s(),
            e.EFF(38, '\n\n    '),
            e.j41(39, 'div', 0),
            e.EFF(40, '\n      '),
            e.j41(41, 'div', 3),
            e.EFF(42, 'System CPU usage'),
            e.k0s(),
            e.EFF(43, '\n      '),
            e.j41(44, 'div', 4),
            e.EFF(45),
            e.nI1(46, 'number'),
            e.k0s(),
            e.EFF(47, '\n    '),
            e.k0s(),
            e.EFF(48, '\n\n    '),
            e.j41(49, 'ngb-progressbar', 5),
            e.EFF(50, '\n      '),
            e.j41(51, 'span'),
            e.EFF(52),
            e.nI1(53, 'number'),
            e.k0s(),
            e.EFF(54, '\n    '),
            e.k0s(),
            e.EFF(55, '\n\n    '),
            e.j41(56, 'div', 0),
            e.EFF(57, '\n      '),
            e.j41(58, 'div', 3),
            e.EFF(59, 'System CPU count'),
            e.k0s(),
            e.EFF(60, '\n      '),
            e.j41(61, 'div', 4),
            e.EFF(62),
            e.k0s(),
            e.EFF(63, '\n    '),
            e.k0s(),
            e.EFF(64, '\n\n    '),
            e.j41(65, 'div', 0),
            e.EFF(66, '\n      '),
            e.j41(67, 'div', 3),
            e.EFF(68, 'System 1m Load average'),
            e.k0s(),
            e.EFF(69, '\n      '),
            e.j41(70, 'div', 4),
            e.EFF(71),
            e.nI1(72, 'number'),
            e.k0s(),
            e.EFF(73, '\n    '),
            e.k0s(),
            e.EFF(74, '\n\n    '),
            e.j41(75, 'div', 0),
            e.EFF(76, '\n      '),
            e.j41(77, 'div', 3),
            e.EFF(78, 'Process files max'),
            e.k0s(),
            e.EFF(79, '\n      '),
            e.j41(80, 'div', 4),
            e.EFF(81),
            e.nI1(82, 'number'),
            e.k0s(),
            e.EFF(83, '\n    '),
            e.k0s(),
            e.EFF(84, '\n\n    '),
            e.j41(85, 'div', 0),
            e.EFF(86, '\n      '),
            e.j41(87, 'div', 3),
            e.EFF(88, 'Process files open'),
            e.k0s(),
            e.EFF(89, '\n      '),
            e.j41(90, 'div', 4),
            e.EFF(91),
            e.nI1(92, 'number'),
            e.k0s(),
            e.EFF(93, '\n    '),
            e.k0s(),
            e.EFF(94, '\n  '),
            e.bVm(),
            e.EFF(95, '\n')),
          2 & n)
        ) {
          const t = e.XpG(),
            i = e.r8f(3);
          e.R7$(9),
            e.JRh(t.convertMillisecondsToDuration(i['process.uptime'])),
            e.R7$(9),
            e.JRh(e.i5U(19, 16, i['process.start.time'], 'full')),
            e.R7$(10),
            e.SpI('', e.i5U(29, 19, 100 * i['process.cpu.usage'], '1.0-2'), ' %'),
            e.R7$(4),
            e.Y8G('value', 100 * i['process.cpu.usage'])('striped', !0)('animated', !1),
            e.R7$(3),
            e.SpI('', e.i5U(36, 22, 100 * i['process.cpu.usage'], '1.0-2'), ' %'),
            e.R7$(10),
            e.SpI('', e.i5U(46, 25, 100 * i['system.cpu.usage'], '1.0-2'), ' %'),
            e.R7$(4),
            e.Y8G('value', 100 * i['system.cpu.usage'])('striped', !0)('animated', !1),
            e.R7$(3),
            e.SpI('', e.i5U(53, 28, 100 * i['system.cpu.usage'], '1.0-2'), ' %'),
            e.R7$(10),
            e.JRh(i['system.cpu.count']),
            e.R7$(9),
            e.JRh(e.i5U(72, 31, i['system.load.average.1m'], '1.0-2')),
            e.R7$(10),
            e.JRh(e.i5U(82, 34, i['process.files.max'], '1.0-0')),
            e.R7$(10),
            e.JRh(e.i5U(92, 37, i['process.files.open'], '1.0-0'));
        }
      }
      let Fe = (() => {
        class n {
          constructor() {
            (this.systemMetrics = (0, e.hFB)()), (this.updating = (0, e.hFB)());
          }
          convertMillisecondsToDuration(t) {
            const i = { year: 315576e5, month: 2629746e3, day: 864e5, hour: 36e5, minute: 6e4, second: 1e3 };
            let s = '';
            for (const [F, r] of Object.entries(i))
              if (Math.floor(t / r) > 0) {
                let u = '';
                Math.floor(t / r) > 1 && (u = 's'),
                  (s += `${Math.floor(t / r).toString()} ${F.toString()}${u} `),
                  (t -= r * Math.floor(t / r));
              }
            return s;
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-metrics-system']],
              inputs: { systemMetrics: [1, 'systemMetrics'], updating: [1, 'updating'] },
              decls: 6,
              vars: 2,
              consts: [
                [1, 'row'],
                [1, 'col-md-4'],
                [1, 'col-md-8', 'text-end'],
                [1, 'col-md-9'],
                [1, 'col-md-3', 'text-end'],
                ['type', 'success', 3, 'value', 'striped', 'animated'],
              ],
              template: function (i, s) {
                if (
                  (1 & i && (e.j41(0, 'h4'), e.EFF(1, 'System'), e.k0s(), e.EFF(2, '\n\n'), e.SS7(3), e.EFF(4, '\n'), e.DNE(5, ae, 96, 40)),
                  2 & i)
                ) {
                  e.R7$(3);
                  const F = e.bH3(s.systemMetrics());
                  e.R7$(2), e.vxM(!s.updating() && F ? 5 : -1);
                }
              },
              dependencies: [l.A, h.EH, c.QX, c.vh],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
        }
        return n;
      })();
      function re(n, a) {
        if (
          (1 & n &&
            (e.EFF(0, '\n    '),
            e.j41(1, 'div', 5),
            e.EFF(2, '\n      '),
            e.nrm(3, 'jhi-jvm-memory', 6),
            e.EFF(4, '\n\n      '),
            e.nrm(5, 'jhi-jvm-threads', 7),
            e.EFF(6, '\n\n      '),
            e.nrm(7, 'jhi-metrics-system', 8),
            e.EFF(8, '\n    '),
            e.k0s(),
            e.EFF(9, '\n  ')),
          2 & n)
        ) {
          const t = e.XpG(),
            i = e.r8f(19);
          e.R7$(3),
            e.Y8G('updating', t.updatingMetrics())('jvmMemoryMetrics', i.jvm),
            e.R7$(2),
            e.Y8G('threads', t.threads()),
            e.R7$(2),
            e.Y8G('updating', t.updatingMetrics())('systemMetrics', i.processMetrics);
        }
      }
      function ce(n, a) {
        if ((1 & n && (e.EFF(0, '\n    '), e.nrm(1, 'jhi-metrics-garbagecollector', 9), e.EFF(2, '\n  ')), 2 & n)) {
          const t = e.XpG();
          e.R7$(), e.Y8G('updating', t.updatingMetrics())('garbageCollectorMetrics', a);
        }
      }
      function oe(n, a) {
        1 & n && (e.EFF(0, '\n    '), e.j41(1, 'div', 10), e.EFF(2, 'Updating...'), e.k0s(), e.EFF(3, '\n  '));
      }
      function de(n, a) {
        if ((1 & n && (e.EFF(0, '\n    '), e.nrm(1, 'jhi-metrics-request', 11), e.EFF(2, '\n  ')), 2 & n)) {
          const t = e.XpG();
          e.R7$(), e.Y8G('updating', t.updatingMetrics())('requestMetrics', a);
        }
      }
      function le(n, a) {
        if ((1 & n && (e.EFF(0, '\n    '), e.nrm(1, 'jhi-metrics-endpoints-requests', 12), e.EFF(2, '\n  ')), 2 & n)) {
          const t = e.XpG();
          e.R7$(), e.Y8G('updating', t.updatingMetrics())('endpointsRequestsMetrics', a);
        }
      }
      function me(n, a) {
        if ((1 & n && (e.EFF(0, '\n    '), e.nrm(1, 'jhi-metrics-cache', 13), e.EFF(2, '\n  ')), 2 & n)) {
          const t = e.XpG();
          e.R7$(), e.Y8G('updating', t.updatingMetrics())('cacheMetrics', a);
        }
      }
      function Ee(n, a) {
        if ((1 & n && (e.EFF(0, '\n    '), e.nrm(1, 'jhi-metrics-datasource', 14), e.EFF(2, '\n  ')), 2 & n)) {
          const t = e.XpG(),
            i = e.r8f(19);
          e.R7$(), e.Y8G('updating', t.updatingMetrics())('datasourceMetrics', i.databases);
        }
      }
      let ue = (() => {
        class n {
          constructor() {
            (this.metrics = (0, e.vPA)(void 0)),
              (this.threads = (0, e.vPA)(void 0)),
              (this.updatingMetrics = (0, e.vPA)(!0)),
              (this.metricsService = (0, e.WQX)(f)),
              (this.changeDetector = (0, e.WQX)(e.gRc));
          }
          ngOnInit() {
            this.refresh();
          }
          refresh() {
            this.updatingMetrics.set(!0),
              (0, g.z)([this.metricsService.getMetrics(), this.metricsService.threadDump()]).subscribe(([t, i]) => {
                this.metrics.set(t), this.threads.set(i.threads), this.updatingMetrics.set(!1), this.changeDetector.markForCheck();
              });
          }
          metricsKeyExistsAndObjectNotEmpty(t) {
            return !(!this.metrics()?.[t] || '{}' === JSON.stringify(this.metrics()?.[t]));
          }
          static {
            this.ɵfac = function (i) {
              return new (i || n)();
            };
          }
          static {
            this.ɵcmp = e.VBU({
              type: n,
              selectors: [['jhi-metrics']],
              decls: 29,
              vars: 8,
              consts: [
                ['id', 'metrics-page-heading', 'data-cy', 'metricsPageHeading', 'jhiTranslate', 'metrics.title'],
                [1, 'btn', 'btn-primary', 'float-end', 3, 'click'],
                ['icon', 'sync'],
                ['jhiTranslate', 'metrics.refresh.button'],
                ['jhiTranslate', 'metrics.jvm.title'],
                [1, 'row'],
                [1, 'col-md-4', 3, 'updating', 'jvmMemoryMetrics'],
                [1, 'col-md-4', 3, 'threads'],
                [1, 'col-md-4', 3, 'updating', 'systemMetrics'],
                [3, 'updating', 'garbageCollectorMetrics'],
                ['jhiTranslate', 'metrics.updating', 1, 'well', 'well-lg'],
                [3, 'updating', 'requestMetrics'],
                [3, 'updating', 'endpointsRequestsMetrics'],
                [3, 'updating', 'cacheMetrics'],
                [3, 'updating', 'datasourceMetrics'],
              ],
              template: function (i, s) {
                if (1 & i) {
                  const F = e.RV6();
                  e.j41(0, 'div'),
                    e.EFF(1, '\n  '),
                    e.j41(2, 'h2'),
                    e.EFF(3, '\n    '),
                    e.j41(4, 'span', 0),
                    e.EFF(5, 'Application Metrics'),
                    e.k0s(),
                    e.EFF(6, '\n\n    '),
                    e.j41(7, 'button', 1),
                    e.bIt('click', function () {
                      return e.eBV(F), e.Njj(s.refresh());
                    }),
                    e.EFF(8, '\n      '),
                    e.nrm(9, 'fa-icon', 2),
                    e.EFF(10, ' '),
                    e.j41(11, 'span', 3),
                    e.EFF(12, 'Refresh'),
                    e.k0s(),
                    e.EFF(13, '\n    '),
                    e.k0s(),
                    e.EFF(14, '\n  '),
                    e.k0s(),
                    e.EFF(15, '\n\n  '),
                    e.j41(16, 'h3', 4),
                    e.EFF(17, 'JVM Metrics'),
                    e.k0s(),
                    e.EFF(18, '\n\n  '),
                    e.SS7(19),
                    e.EFF(20, '\n  '),
                    e.DNE(21, re, 10, 5)(22, ce, 3, 2)(23, oe, 4, 0)(24, de, 3, 2)(25, le, 3, 2)(26, me, 3, 2)(27, Ee, 3, 2),
                    e.k0s(),
                    e.EFF(28, '\n');
                }
                if (2 & i) {
                  let F, r, u, v;
                  e.R7$(19);
                  const m = e.bH3(s.metrics());
                  e.R7$(2),
                    e.vxM(m && !s.updatingMetrics() ? 21 : -1),
                    e.R7$(),
                    e.vxM((F = null == m ? null : m.garbageCollector) ? 22 : -1, F),
                    e.R7$(),
                    e.vxM(s.updatingMetrics() ? 23 : -1),
                    e.R7$(),
                    e.vxM((r = null == m ? null : m['http.server.requests']) ? 24 : -1, r),
                    e.R7$(),
                    e.vxM((u = null == m ? null : m.services) ? 25 : -1, u),
                    e.R7$(),
                    e.vxM((v = null == m ? null : m.cache) ? 26 : -1, v),
                    e.R7$(),
                    e.vxM(m && s.metricsKeyExistsAndObjectNotEmpty('databases') ? 27 : -1);
                }
              },
              dependencies: [l.A, k.aY, E.A, y, A, X, P, Q, ee, ie, Fe],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
        }
        return n;
      })();
    },
  },
]);
