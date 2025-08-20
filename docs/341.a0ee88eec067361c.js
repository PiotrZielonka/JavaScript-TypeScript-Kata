'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [341],
  {
    2341: (q, u, c) => {
      c.r(u), c.d(u, { KataComponent: () => H });
      var p = c(467),
        F = c(9417),
        m = c(8498),
        d = c(9543),
        n = c(4438),
        h = c(177);
      const g = o => ({ counter: !0, animate: o }),
        _ = o => ({ dark: o }),
        E = () => ['alice', 'bob', 'carol'];
      function k(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'li'),
            n.EFF(1),
            n.j41(2, 'button', 146),
            n.bIt('click', function () {
              const t = n.eBV(e).index,
                a = n.XpG();
              return n.Njj(a.deleteItem(t));
            }),
            n.EFF(3, 'Delete'),
            n.k0s(),
            n.EFF(4, '\n    '),
            n.k0s();
        }
        if (2 & o) {
          const e = l.$implicit;
          n.R7$(), n.SpI('\n      ', e, '\n      ');
        }
      }
      function j(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e.text);
        }
      }
      function f(o, l) {
        1 & o && (n.j41(0, 'p'), n.EFF(1, 'Thank you!'), n.k0s());
      }
      function b(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.Lme('', e.text, ' - ', e.date, '');
        }
      }
      function C(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e);
        }
      }
      function M(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e.name);
        }
      }
      function w(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.Lme('', e.name, ' - $', e.price, '');
        }
      }
      function R(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.Lme('', e.name, ' - $', e.price, '');
        }
      }
      function I(o, l) {
        1 & o && n.nrm(0, 'div', 147);
      }
      function T(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'div', 148),
            n.EFF(1, '\n  '),
            n.j41(2, 'p'),
            n.EFF(3),
            n.k0s(),
            n.EFF(4, '\n  '),
            n.j41(5, 'input', 51),
            n.mxI('ngModelChange', function (t) {
              n.eBV(e);
              const a = n.XpG();
              return n.DH7(a.quizAnswer, t) || (a.quizAnswer = t), n.Njj(t);
            }),
            n.k0s(),
            n.EFF(6, '\n  '),
            n.j41(7, 'button', 5),
            n.bIt('click', function () {
              n.eBV(e);
              const t = n.XpG();
              return n.Njj(t.submitQuizAnswer());
            }),
            n.EFF(8, 'Next'),
            n.k0s(),
            n.EFF(9, '\n'),
            n.k0s();
        }
        if (2 & o) {
          const e = n.XpG();
          n.R7$(3), n.JRh(e.quizQuestions[e.quizIndex].q), n.R7$(2), n.R50('ngModel', e.quizAnswer);
        }
      }
      function S(o, l) {
        if ((1 & o && (n.EFF(0, '\n  '), n.j41(1, 'p'), n.EFF(2), n.k0s(), n.EFF(3, '\n')), 2 & o)) {
          const e = n.XpG();
          n.R7$(2), n.SpI('Score: ', e.quizScore, '');
        }
      }
      function y(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e);
        }
      }
      function P(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'div', 149),
            n.bIt('click', function () {
              const t = n.eBV(e).index,
                a = n.XpG();
              return n.Njj(a.toggleActive(t));
            }),
            n.EFF(1),
            n.k0s();
        }
        if (2 & o) {
          const e = l.$implicit,
            r = l.index,
            t = n.XpG();
          n.AVh('is-active', t.isActive(r)), n.R7$(), n.SpI('\n    ', e, '\n  ');
        }
      }
      function V(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'div'),
            n.EFF(1),
            n.j41(2, 'input', 19),
            n.mxI('ngModelChange', function (t) {
              const a = n.eBV(e).$implicit;
              return n.DH7(a.qty, t) || (a.qty = t), n.Njj(t);
            }),
            n.k0s(),
            n.EFF(3, '\n  '),
            n.k0s();
        }
        if (2 & o) {
          const e = l.$implicit;
          n.R7$(), n.Lme('\n    ', e.name, ' $', e.price, '\n    '), n.R7$(), n.R50('ngModel', e.qty);
        }
      }
      function A(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e);
        }
      }
      function v(o, l) {
        if ((1 & o && (n.j41(0, 'tr'), n.EFF(1, '\n        '), n.j41(2, 'td'), n.EFF(3), n.k0s(), n.EFF(4, '\n      '), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(3), n.JRh(e);
        }
      }
      function N(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.nI1(2, 'uppercase'), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(n.bMT(2, 1, e));
        }
      }
      function B(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.Lme('', e.name, ' $', e.price, '');
        }
      }
      function O(o, l) {
        if (
          (1 & o &&
            (n.j41(0, 'tr'),
            n.EFF(1, '\n        '),
            n.j41(2, 'td'),
            n.EFF(3),
            n.k0s(),
            n.EFF(4, '\n        '),
            n.j41(5, 'td'),
            n.EFF(6),
            n.k0s(),
            n.EFF(7, '\n      '),
            n.k0s()),
          2 & o)
        ) {
          const e = l.$implicit;
          n.R7$(3), n.JRh(e.n), n.R7$(3), n.JRh(e.p);
        }
      }
      function K(o, l) {
        if ((1 & o && (n.j41(0, 'div'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.SpI('Section ', e, '');
        }
      }
      function D(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'li', 5),
            n.bIt('click', function () {
              const t = n.eBV(e).$implicit,
                a = n.XpG();
              return n.Njj(a.selectMail(t));
            }),
            n.EFF(1),
            n.k0s();
        }
        if (2 & o) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e.subject);
        }
      }
      function G(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e);
        }
      }
      function x(o, l) {
        if (
          (1 & o &&
            (n.j41(0, 'tr'),
            n.EFF(1, '\n        '),
            n.j41(2, 'td'),
            n.EFF(3),
            n.k0s(),
            n.EFF(4, '\n        '),
            n.j41(5, 'td'),
            n.EFF(6),
            n.k0s(),
            n.EFF(7, '\n      '),
            n.k0s()),
          2 & o)
        ) {
          const e = l.$implicit;
          n.R7$(3), n.JRh(e.name), n.R7$(3), n.JRh(e.price);
        }
      }
      function $(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'li'),
            n.EFF(1, '\n      '),
            n.j41(2, 'span'),
            n.EFF(3),
            n.nI1(4, 'currency'),
            n.k0s(),
            n.EFF(5, '\n      '),
            n.j41(6, 'button', 150),
            n.bIt('click', function () {
              const t = n.eBV(e).index,
                a = n.XpG();
              return n.Njj(a.removeAt47(t));
            }),
            n.EFF(7, 'Remove'),
            n.k0s(),
            n.EFF(8, '\n    '),
            n.k0s();
        }
        if (2 & o) {
          const e = l.$implicit;
          n.R7$(3), n.Lme('', e.name, ' ', n.ii3(4, 2, e.price, 'USD', 'symbol', '1.0-0'), '');
        }
      }
      function J(o, l) {
        if ((1 & o && (n.j41(0, 'li'), n.EFF(1), n.k0s()), 2 & o)) {
          const e = l.$implicit;
          n.R7$(), n.JRh(e.title);
        }
      }
      function X(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'div', 151),
            n.EFF(1, '\n  '),
            n.j41(2, 'p'),
            n.EFF(3),
            n.k0s(),
            n.EFF(4, '\n  '),
            n.j41(5, 'input', 51),
            n.mxI('ngModelChange', function (t) {
              n.eBV(e);
              const a = n.XpG();
              return n.DH7(a.fullAnswer, t) || (a.fullAnswer = t), n.Njj(t);
            }),
            n.k0s(),
            n.EFF(6, '\n  '),
            n.j41(7, 'button', 5),
            n.bIt('click', function () {
              n.eBV(e);
              const t = n.XpG();
              return n.Njj(t.submitFull());
            }),
            n.EFF(8, 'Next'),
            n.k0s(),
            n.EFF(9, '\n'),
            n.k0s();
        }
        if (2 & o) {
          const e = n.XpG();
          n.R7$(3), n.JRh(e.fullQuiz[e.fullIndex].q), n.R7$(2), n.R50('ngModel', e.fullAnswer);
        }
      }
      function z(o, l) {
        if ((1 & o && (n.EFF(0, '\n  '), n.j41(1, 'p'), n.EFF(2), n.k0s(), n.EFF(3, '\n')), 2 & o)) {
          const e = n.XpG();
          n.R7$(2), n.Lme('Score: ', e.fullScore, '/', e.fullQuiz.length, '');
        }
      }
      function L(o, l) {
        if (1 & o) {
          const e = n.RV6();
          n.j41(0, 'div', 152),
            n.EFF(1, '\n    Admin Action\n    '),
            n.j41(2, 'button', 5),
            n.bIt('click', function () {
              n.eBV(e);
              const t = n.XpG();
              return n.Njj(t.close50());
            }),
            n.EFF(3, 'Close'),
            n.k0s(),
            n.EFF(4, '\n  '),
            n.k0s();
        }
      }
      let H = (() => {
        class o {
          constructor() {
            (this.count = 0),
              (this.animate = !1),
              (this.text = ''),
              (this.characterCount = 0),
              (this.items = []),
              (this.newItem = ''),
              (this.loginUsername = ''),
              (this.loginPassword = ''),
              (this.loginMessage = ''),
              (this.calcA = 0),
              (this.calcB = 0),
              (this.calcResult = 0),
              (this.itemsArray = ['Apple', 'Banana', 'Orange', 'Grape']),
              (this.randomItem = ''),
              (this.gameMessage = 'Click start to play'),
              (this.gameStart = 0),
              (this.images = [
                'https://picsum.photos/id/25/150/150',
                'https://picsum.photos/id/26/150/150',
                'https://picsum.photos/id/27/150/150',
              ]),
              (this.imageIndex = 0),
              (this.isDark = !1),
              (this.currentTime = new Date().toLocaleTimeString()),
              (this.todoItems = []),
              (this.todoText = ''),
              (this.todoFilter = ''),
              (this.contactName = ''),
              (this.contactEmail = ''),
              (this.contactMessage = ''),
              (this.contactSubmitted = !1),
              (this.commentText = ''),
              (this.comments = []),
              (this.guessMessage = ''),
              (this.books = ['Moby Dick', 'Hamlet', 'The Odyssey', 'War and Peace']),
              (this.bookTerm = ''),
              (this.products = [
                { name: 'Apple', category: 'fruit', price: 10 },
                { name: 'Banana', category: 'fruit', price: 12 },
                { name: 'Carrot', category: 'veg', price: 5 },
              ]),
              (this.productCategory = 'all'),
              (this.sortAsc = !0),
              (this.currentLight = 'red'),
              (this.countdownStart = 10),
              (this.countdownValue = 0),
              (this.stopwatchRunning = !1),
              (this.stopwatchDisplay = '0.0'),
              (this.stopwatchStartTime = 0),
              (this.delayMessage = ''),
              (this.loading = !1),
              (this.asyncQuizQuestion = ''),
              (this.quizQuestions = [
                { q: '1+1?', a: '2' },
                { q: '2+2?', a: '4' },
                { q: '3+3?', a: '6' },
              ]),
              (this.quizIndex = 0),
              (this.quizAnswer = ''),
              (this.quizScore = 0),
              (this.shuffleItems = [1, 2, 3, 4, 5]),
              (this.itemsHover = ['Item 1', 'Item 2', 'Item 3']),
              (this.active = new Set()),
              (this.rangeValue = 50),
              (this.bill = 0),
              (this.tipPercent = 0),
              (this.cartProducts = [
                { name: 'Apple', price: 5, qty: 0 },
                { name: 'Banana', price: 3, qty: 0 },
              ]),
              (this.data33 = ['apple', 'banana', 'carrot']),
              (this.results33 = this.data33),
              (this.vatNet = 0),
              (this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
              (this.page = 0),
              (this.pageSize = 3),
              (this.asc = !0),
              (this.products37 = [
                { name: 'Apple', price: 5 },
                { name: 'Banana', price: 3 },
                { name: 'Carrot', price: 7 },
              ]),
              (this.filter37 = ''),
              (this.asc37 = !0),
              (this.delayResult = ''),
              (this.data40 = [
                { n: 'A', p: 1 },
                { n: 'B', p: 2 },
                { n: 'C', p: 3 },
                { n: 'D', p: 4 },
                { n: 'E', p: 5 },
              ]),
              (this.page40 = 0),
              (this.pageSize40 = 2),
              (this.dashboardSections = ['One', 'Two', 'Three']),
              (this.mails = [
                { subject: 'Hello', body: 'Hi there' },
                { subject: 'News', body: 'Latest update' },
              ]),
              (this.selectedMail = ''),
              (this.promoEmail = ''),
              (this.promoCode = ''),
              (this.products44 = ['apple', 'banana', 'carrot']),
              (this.cache = new Map()),
              (this.results44 = []),
              (this.data46 = [
                { name: 'A', price: 2 },
                { name: 'B', price: 3 },
                { name: 'C', price: 1 },
              ]),
              (this.sortDir = { name: !0, price: !0 }),
              (this.activeKey = null),
              (this.cart = []),
              (this.apiPage = 1),
              (this.apiItems = []),
              (this.fullQuiz = [
                { q: 'Capital of France?', a: 'paris' },
                { q: '2*3', a: '6' },
              ]),
              (this.fullIndex = 0),
              (this.fullAnswer = ''),
              (this.fullScore = 0),
              (this.isOpen50 = !1),
              (this.autoValue = '');
          }
          increment() {
            this.count++,
              (this.animate = !0),
              setTimeout(() => {
                this.animate = !1;
              }, 200);
          }
          resetCount() {
            this.count = 0;
          }
          countCharacters() {
            this.characterCount = this.text.length;
          }
          addItem() {
            const e = this.newItem.trim();
            e && (this.items.push(e), (this.newItem = ''));
          }
          deleteItem(e) {
            this.items.splice(e, 1);
          }
          login() {
            this.loginMessage =
              'admin' === this.loginUsername && 'password' === this.loginPassword ? 'Login success' : 'Invalid credentials';
          }
          calculate(e) {
            const r = Number(this.calcA),
              t = Number(this.calcB);
            switch (e) {
              case 'add':
                this.calcResult = r + t;
                break;
              case 'sub':
                this.calcResult = r - t;
                break;
              case 'mul':
                this.calcResult = r * t;
                break;
              case 'div':
                this.calcResult = 0 !== t ? r / t : 0;
            }
          }
          pickRandom() {
            const e = Math.floor(Math.random() * this.itemsArray.length);
            this.randomItem = this.itemsArray[e];
          }
          startGame() {
            this.gameMessage = 'Wait for green...';
            const e = 2e3 * Math.random() + 1e3;
            this.timeoutId = setTimeout(() => {
              (this.gameStart = performance.now()), (this.gameMessage = 'Click!');
            }, e);
          }
          stopGame() {
            if ('Click!' === this.gameMessage) {
              const r = performance.now() - this.gameStart;
              this.gameMessage = `Reaction: ${Math.round(r)} ms`;
            } else (this.gameMessage = 'Too soon!'), clearTimeout(this.timeoutId);
          }
          nextImage() {
            this.imageIndex = (this.imageIndex + 1) % this.images.length;
          }
          toggleTheme() {
            this.isDark = !this.isDark;
          }
          addTodo() {
            const e = this.todoText.trim();
            e && (this.todoItems.push({ text: e, done: !1 }), (this.todoText = ''));
          }
          filteredTodos() {
            return this.todoItems.filter(e => e.text.includes(this.todoFilter));
          }
          submitContact() {
            this.contactName && this.contactEmail && (this.contactSubmitted = !0);
          }
          addComment() {
            const e = this.commentText.trim();
            e && (this.comments.push({ text: e, date: new Date().toLocaleString() }), (this.commentText = ''));
          }
          guessNumber() {
            const e = Math.floor(10 * Math.random()) + 1,
              r = Number(prompt('Guess a number 1-10'));
            this.guessMessage = r === e ? 'Correct!' : `Wrong, number was ${e}`;
          }
          filteredBooks() {
            return this.books.filter(e => e.toLowerCase().includes(this.bookTerm.toLowerCase()));
          }
          filteredProducts() {
            return this.products.filter(e => 'all' === this.productCategory || e.category === this.productCategory);
          }
          sortedByPrice() {
            return [...this.products].sort((e, r) => (this.sortAsc ? e.price - r.price : r.price - e.price));
          }
          startTraffic() {
            const e = ['red', 'green', 'yellow'];
            let r = 0;
            this.trafficInterval = setInterval(() => {
              (r = (r + 1) % e.length), (this.currentLight = e[r]);
            }, 1e3);
          }
          startCountdown() {
            (this.countdownValue = this.countdownStart),
              clearInterval(this.countdownId),
              (this.countdownId = setInterval(() => {
                this.countdownValue--, this.countdownValue <= 0 && clearInterval(this.countdownId);
              }, 1e3));
          }
          toggleStopwatch() {
            this.stopwatchRunning
              ? (clearInterval(this.stopwatchInterval), (this.stopwatchRunning = !1))
              : ((this.stopwatchStartTime = Date.now()),
                (this.stopwatchInterval = setInterval(() => {
                  const e = Date.now() - this.stopwatchStartTime;
                  this.stopwatchDisplay = (e / 1e3).toFixed(1);
                }, 100)),
                (this.stopwatchRunning = !0));
          }
          runDelay() {
            var e = this;
            return (0, p.A)(function* () {
              (e.delayMessage = 'Waiting...'), yield new Promise(r => setTimeout(r, 1e3)), (e.delayMessage = 'Done');
            })();
          }
          fetchData() {
            var e = this;
            return (0, p.A)(function* () {
              const r = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
              e.apiData = yield r.json();
            })();
          }
          startLoading() {
            (this.loading = !0), setTimeout(() => (this.loading = !1), 1e3);
          }
          loadAsyncQuiz() {
            var e = this;
            return (0, p.A)(function* () {
              const t = yield (yield fetch('/content/quiz.json')).json();
              e.asyncQuizQuestion = t.question;
            })();
          }
          submitQuizAnswer() {
            this.quizAnswer === this.quizQuestions[this.quizIndex].a && this.quizScore++, this.quizIndex++, (this.quizAnswer = '');
          }
          shuffleList() {
            this.shuffleItems.sort(() => Math.random() - 0.5);
          }
          toggleActive(e) {
            this.active.has(e) ? this.active.delete(e) : this.active.add(e);
          }
          isActive(e) {
            return this.active.has(e);
          }
          get tipTotal() {
            return this.bill + (this.bill * this.tipPercent) / 100;
          }
          get cartSum() {
            return this.cartProducts.reduce((e, r) => e + r.price * r.qty, 0);
          }
          onInput(e) {
            const r = e.target.value ?? '';
            clearTimeout(this.t),
              (this.t = setTimeout(() => {
                this.results33 = this.data33.filter(t => t.includes(r));
              }, 300));
          }
          get vatGross() {
            return 1.2 * this.vatNet;
          }
          get totalPages() {
            return Math.ceil(this.data.length / this.pageSize);
          }
          get pageItems() {
            const e = this.page * this.pageSize;
            return this.data.slice(e, e + this.pageSize);
          }
          sort() {
            (this.asc = !this.asc), this.data.sort((e, r) => (this.asc ? e - r : r - e));
          }
          next() {
            this.page + 1 < this.totalPages && this.page++;
          }
          prev() {
            this.page > 0 && this.page--;
          }
          trackByIndex(e, r) {
            return r;
          }
          get filteredSorted37() {
            const e = this.filter37.toLowerCase();
            return this.products
              .filter(r => r.name.toLowerCase().includes(e))
              .slice()
              .sort((r, t) => (this.asc ? r.price - t.price : t.price - r.price));
          }
          toggleSort37() {
            this.asc = !this.asc;
          }
          trackByName37(e, r) {
            return r.name;
          }
          simulateHttp() {
            (this.delayResult = 'Loading...'), setTimeout(() => (this.delayResult = 'Done'), 1e3);
          }
          loadMock() {
            var e = this;
            return (0, p.A)(function* () {
              const r = yield fetch('/content/mock.json');
              e.mockData = yield r.json();
            })();
          }
          get totalPages40() {
            return Math.ceil(this.data40.length / this.pageSize40);
          }
          get slice40() {
            const e = this.page40 * this.pageSize40;
            return this.data40.slice(e, e + this.pageSize40);
          }
          prev40() {
            this.page40 > 0 && this.page40--;
          }
          next40() {
            this.page40 + 1 < this.totalPages40 && this.page40++;
          }
          trackByName40(e, r) {
            return r.n;
          }
          selectMail(e) {
            this.selectedMail = e.body;
          }
          generateCode() {
            this.promoEmail && (this.promoCode = Math.random().toString(36).slice(-6));
          }
          onInput44(e) {
            const r = (e ?? '').toLowerCase(),
              t = this.cache.get(r);
            if (t) return void (this.results44 = t);
            const a = this.products44.filter(s => s.includes(r));
            this.cache.set(r, a), (this.results44 = a);
          }
          get ariaSort() {
            return {
              name: 'name' === this.activeKey ? (this.sortDir.name ? 'ascending' : 'descending') : 'none',
              price: 'price' === this.activeKey ? (this.sortDir.price ? 'ascending' : 'descending') : 'none',
            };
          }
          sortBy(e) {
            (this.sortDir[e] = !this.sortDir[e]), (this.activeKey = e);
            const r = this.sortDir[e];
            this.data46.sort((t, a) => {
              const s = t[e],
                i = a[e];
              return 'name' === e ? (r ? String(s).localeCompare(String(i)) : String(i).localeCompare(String(s))) : r ? s - i : i - s;
            });
          }
          trackByName46(e, r) {
            return r.name;
          }
          add47(e, r) {
            this.cart.push({ name: e, price: r });
          }
          removeAt47(e) {
            e >= 0 && e < this.cart.length && this.cart.splice(e, 1);
          }
          get total() {
            return this.cart.reduce((e, r) => e + (r.price || 0), 0);
          }
          trackByIndex47(e) {
            return e;
          }
          loadApiPage() {
            var e = this;
            return (0, p.A)(function* () {
              const r = yield fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${e.apiPage}`);
              e.apiItems = yield r.json();
            })();
          }
          submitFull() {
            this.fullAnswer.toLowerCase() === this.fullQuiz[this.fullIndex].a && this.fullScore++, this.fullIndex++, (this.fullAnswer = '');
          }
          open50() {
            this.isOpen50 = !0;
          }
          close50() {
            this.isOpen50 = !1;
          }
          onEsc() {
            this.isOpen50 && this.close50();
          }
          startAutoRefresh() {
            this.autoInterval = setInterval(() => {
              this.autoValue = 'Value: ' + Math.floor(100 * Math.random());
            }, 1e4);
          }
          ngOnInit() {
            setInterval(() => {
              this.currentTime = new Date().toLocaleTimeString();
            }, 1e3),
              this.startAutoRefresh(),
              this.startTraffic(),
              this.loadApiPage();
          }
          static {
            this.ɵfac = function (r) {
              return new (r || o)();
            };
          }
          static {
            this.ɵcmp = n.VBU({
              type: o,
              selectors: [['jhi-kata']],
              hostBindings: function (r, t) {
                1 & r &&
                  n.bIt(
                    'keydown.escape',
                    function () {
                      return t.onEsc();
                    },
                    !1,
                    n.EBC,
                  );
              },
              decls: 957,
              vars: 118,
              consts: [
                ['quizDone', ''],
                ['q', ''],
                ['quizOver', ''],
                [1, 'container'],
                [3, 'ngClass'],
                [3, 'click'],
                ['src', n.wXG`/content/kata_js/1_clickCounter.html`, 'width', '100%', 'height', '300px'],
                [1, 'container2'],
                ['type', 'text', 'placeholder', 'Write something...', 3, 'ngModelChange', 'keyup', 'ngModel'],
                ['src', n.wXG`/content/kata_js/2_charactersCounter.html`, 'width', '100%', 'height', '300px'],
                [1, 'container3'],
                ['type', 'text', 'placeholder', 'Type item name', 3, 'ngModelChange', 'keyup.enter', 'ngModel'],
                [4, 'ngFor', 'ngForOf'],
                ['src', n.wXG`/content/kata_js/3_addItemToList.html`, 'width', '100%', 'height', '300px'],
                [1, 'container4'],
                ['type', 'text', 'placeholder', 'Username', 3, 'ngModelChange', 'ngModel'],
                ['type', 'password', 'placeholder', 'Password', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/4_login.html`, 'width', '100%', 'height', '300px'],
                [1, 'container5'],
                ['type', 'number', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/5_basicCalculator.html`, 'width', '100%', 'height', '300px'],
                [1, 'container6'],
                ['src', n.wXG`/content/kata_js/6_randomElement.html`, 'width', '100%', 'height', '300px'],
                [1, 'container7', 3, 'ngClass'],
                ['src', n.wXG`/content/kata_js/7_clickFastest.html`, 'width', '100%', 'height', '300px'],
                [1, 'container8'],
                ['alt', 'gallery', 3, 'src'],
                ['src', n.wXG`/content/kata_js/8_imageGallery.html`, 'width', '100%', 'height', '300px'],
                [1, 'container9'],
                ['src', n.wXG`/content/kata_js/9_themeToggle.html`, 'width', '100%', 'height', '300px'],
                [1, 'container10'],
                ['src', n.wXG`/content/kata_js/10_currentTime.html`, 'width', '100%', 'height', '300px'],
                [1, 'container11'],
                ['type', 'text', 'placeholder', 'New todo', 3, 'ngModelChange', 'ngModel'],
                ['type', 'text', 'placeholder', 'Filter', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/11_todoFilter.html`, 'width', '100%', 'height', '300px'],
                [1, 'container12'],
                ['type', 'text', 'placeholder', 'Name', 3, 'ngModelChange', 'ngModel'],
                ['type', 'email', 'placeholder', 'Email', 3, 'ngModelChange', 'ngModel'],
                ['placeholder', 'Message', 3, 'ngModelChange', 'ngModel'],
                [4, 'ngIf'],
                ['src', n.wXG`/content/kata_js/12_contactForm.html`, 'width', '100%', 'height', '300px'],
                [1, 'container13'],
                ['type', 'text', 'placeholder', 'Add comment', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/13_commentSection.html`, 'width', '100%', 'height', '300px'],
                [1, 'container14'],
                ['src', n.wXG`/content/kata_js/14_numberGuess.html`, 'width', '100%', 'height', '300px'],
                [1, 'container15'],
                ['type', 'text', 'placeholder', 'Search', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/15_bookSearch.html`, 'width', '100%', 'height', '300px'],
                [1, 'container16'],
                [3, 'ngModelChange', 'ngModel'],
                ['value', 'all'],
                ['value', 'fruit'],
                ['value', 'veg'],
                ['src', n.wXG`/content/kata_js/16_productFilter.html`, 'width', '100%', 'height', '300px'],
                [1, 'container17'],
                ['src', n.wXG`/content/kata_js/17_autoRefresh.html`, 'width', '100%', 'height', '300px'],
                [1, 'container18'],
                ['src', n.wXG`/content/kata_js/18_displayProducts.html`, 'width', '100%', 'height', '300px'],
                [1, 'container19'],
                ['src', n.wXG`/content/kata_js/19_sortByPrice.html`, 'width', '100%', 'height', '300px'],
                [1, 'container20'],
                [1, 'light', 2, 'background', 'red'],
                [1, 'light', 2, 'background', 'yellow'],
                [1, 'light', 2, 'background', 'green'],
                ['src', n.wXG`/content/kata_js/20_trafficLight.html`, 'width', '100%', 'height', '300px'],
                [1, 'container21'],
                ['src', n.wXG`/content/kata_js/21_countdown.html`, 'width', '100%', 'height', '300px'],
                [1, 'container22'],
                ['src', n.wXG`/content/kata_js/22_stopwatch.html`, 'width', '100%', 'height', '300px'],
                [1, 'container23'],
                ['src', n.wXG`/content/kata_js/23_delay.html`, 'width', '100%', 'height', '300px'],
                [1, 'container24'],
                ['src', n.wXG`/content/kata_js/24_loadApi.html`, 'width', '100%', 'height', '300px'],
                [1, 'container25'],
                ['class', 'spinner', 4, 'ngIf'],
                ['src', n.wXG`/content/kata_js/25_loadingSpinner.html`, 'width', '100%', 'height', '300px'],
                [1, 'container26'],
                ['src', n.wXG`/content/kata_js/26_asyncQuiz.html`, 'width', '100%', 'height', '300px'],
                ['class', 'container27', 4, 'ngIf', 'ngIfElse'],
                ['src', n.wXG`/content/kata_js/27_quiz3.html`, 'width', '100%', 'height', '300px'],
                [1, 'container28'],
                ['src', n.wXG`/content/kata_js/28_shuffleList.html`, 'width', '100%', 'height', '300px'],
                [1, 'container29'],
                ['class', 'itemHover', 3, 'is-active', 'click', 4, 'ngFor', 'ngForOf'],
                ['src', n.wXG`/content/kata_js/29_hoverEffect.html`, 'width', '100%', 'height', '300px'],
                [1, 'container30'],
                ['type', 'range', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/30_rangeSlider.html`, 'width', '100%', 'height', '300px'],
                [1, 'container31'],
                ['type', 'number', 'placeholder', 'Bill', 3, 'ngModelChange', 'ngModel'],
                ['type', 'number', 'placeholder', 'Tip %', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/31_tipCalculator.html`, 'width', '100%', 'height', '300px'],
                [1, 'container32'],
                ['src', n.wXG`/content/kata_js/32_cartSum.html`, 'width', '100%', 'height', '300px'],
                [1, 'container33'],
                ['placeholder', 'Search', 3, 'input'],
                ['src', n.wXG`/content/kata_js/33_liveSearch.html`, 'width', '100%', 'height', '300px'],
                [1, 'container34'],
                ['type', 'number', 'placeholder', 'Net', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/34_vatCalculator.html`, 'width', '100%', 'height', '300px'],
                [1, 'container35'],
                [3, 'click', 'disabled'],
                [1, 'tbl'],
                [4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
                [1, 'meta'],
                ['src', n.wXG`/content/kata_js/35_sortPaginate.html`, 'width', '100%', 'height', '300px'],
                [1, 'container36'],
                ['src', n.wXG`/content/kata_js/36_pipeDisplay.html`, 'width', '100%', 'height', '300px'],
                [1, 'container37'],
                ['type', 'text', 'placeholder', 'Filter', 'aria-label', 'Filter products37 by name', 3, 'ngModelChange', 'ngModel'],
                [1, 'list'],
                ['src', n.wXG`/content/kata_js/37_filterSortProducts.html`, 'width', '100%', 'height', '300px'],
                [1, 'container38'],
                ['src', n.wXG`/content/kata_js/38_httpDelay.html`, 'width', '100%', 'height', '300px'],
                [1, 'container39'],
                ['src', n.wXG`/content/kata_js/39_localMockAPI.html`, 'width', '100%', 'height', '300px'],
                [1, 'container40'],
                [1, 'tbl40'],
                ['src', n.wXG`/content/kata_js/40_tablePagination.html`, 'width', '100%', 'height', '300px'],
                [1, 'container41'],
                ['src', n.wXG`/content/kata_js/41_dashboard.html`, 'width', '100%', 'height', '300px'],
                [1, 'container42'],
                [3, 'click', 4, 'ngFor', 'ngForOf'],
                ['src', n.wXG`/content/kata_js/42_mockMailbox.html`, 'width', '100%', 'height', '300px'],
                [1, 'container43'],
                ['placeholder', 'Email', 3, 'ngModelChange', 'ngModel'],
                ['src', n.wXG`/content/kata_js/43_promoCode.html`, 'width', '100%', 'height', '300px'],
                [1, 'container44'],
                ['src', n.wXG`/content/kata_js/44_productCache.html`, 'width', '100%', 'height', '300px'],
                [1, 'container45'],
                ['src', n.wXG`/content/kata_js/45_unitTesting.html`, 'width', '100%', 'height', '300px'],
                ['role', 'columnheader', 3, 'click'],
                [1, 'arrow'],
                ['src', n.wXG`/content/kata_js/46_multiSort.html`, 'width', '100%', 'height', '300px'],
                [1, 'container47'],
                ['id', 'total47'],
                ['src', n.wXG`/content/kata_js/47_cartService.html`, 'width', '100%', 'height', '300px'],
                [1, 'container48'],
                ['src', n.wXG`/content/kata_js/48_apiPagination.html`, 'width', '100%', 'height', '300px'],
                ['class', 'container49', 4, 'ngIf', 'ngIfElse'],
                ['src', n.wXG`/content/kata_js/49_fullQuiz.html`, 'width', '100%', 'height', '300px'],
                [1, 'container50'],
                ['class', 'modal50', 'role', 'dialog', 'aria-modal', 'true', 'aria-label', 'Admin Action Modal', 4, 'ngIf'],
                ['src', n.wXG`/content/kata_js/50_adminPanel.html`, 'width', '100%', 'height', '300px'],
                [1, 'delete-btn', 3, 'click'],
                [1, 'spinner'],
                [1, 'container27'],
                [1, 'itemHover', 3, 'click'],
                [1, 'remove', 3, 'click'],
                [1, 'container49'],
                ['role', 'dialog', 'aria-modal', 'true', 'aria-label', 'Admin Action Modal', 1, 'modal50'],
              ],
              template: function (r, t) {
                if (1 & r) {
                  const a = n.RV6();
                  n.j41(0, 'h1'),
                    n.EFF(1, '1. Click counter'),
                    n.k0s(),
                    n.EFF(2, '\n\n'),
                    n.j41(3, 'div', 3),
                    n.EFF(4, '\n  '),
                    n.j41(5, 'h1'),
                    n.EFF(6, 'Click the button!'),
                    n.k0s(),
                    n.EFF(7, '\n  '),
                    n.j41(8, 'div', 4),
                    n.EFF(9),
                    n.k0s(),
                    n.EFF(10, '\n  '),
                    n.j41(11, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.increment());
                    }),
                    n.EFF(12, 'Click'),
                    n.k0s(),
                    n.EFF(13, '\n  '),
                    n.j41(14, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.resetCount());
                    }),
                    n.EFF(15, 'Reset'),
                    n.k0s(),
                    n.EFF(16, '\n'),
                    n.k0s(),
                    n.EFF(17, '\n\n'),
                    n.j41(18, 'h1'),
                    n.EFF(19, 'Click counter Vanilla JS'),
                    n.k0s(),
                    n.EFF(20, '\n\n'),
                    n.nrm(21, 'iframe', 6),
                    n.EFF(22, '\n\n'),
                    n.j41(23, 'h1'),
                    n.EFF(24, '2. Characters counter Angular'),
                    n.k0s(),
                    n.EFF(25, '\n\n'),
                    n.j41(26, 'div', 7),
                    n.EFF(27, '\n  '),
                    n.j41(28, 'h2'),
                    n.EFF(29, 'Characters counter'),
                    n.k0s(),
                    n.EFF(30, '\n  '),
                    n.j41(31, 'input', 8),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.text, i) || (t.text = i), n.Njj(i);
                    }),
                    n.bIt('keyup', function () {
                      return n.eBV(a), n.Njj(t.countCharacters());
                    }),
                    n.k0s(),
                    n.EFF(32, '\n  '),
                    n.j41(33, 'p'),
                    n.EFF(34),
                    n.k0s(),
                    n.EFF(35, '\n'),
                    n.k0s(),
                    n.EFF(36, '\n\n'),
                    n.j41(37, 'h1'),
                    n.EFF(38, 'Characters counter Vanilla JS'),
                    n.k0s(),
                    n.EFF(39, '\n\n'),
                    n.nrm(40, 'iframe', 9),
                    n.EFF(41, '\n\n'),
                    n.j41(42, 'h1'),
                    n.EFF(43, '3. Add Item to List Angular'),
                    n.k0s(),
                    n.EFF(44, '\n\n'),
                    n.j41(45, 'div', 10),
                    n.EFF(46, '\n  '),
                    n.j41(47, 'h2'),
                    n.EFF(48, 'Add Item to List'),
                    n.k0s(),
                    n.EFF(49, '\n\n  '),
                    n.j41(50, 'input', 11),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.newItem, i) || (t.newItem = i), n.Njj(i);
                    }),
                    n.bIt('keyup.enter', function () {
                      return n.eBV(a), n.Njj(t.addItem());
                    }),
                    n.k0s(),
                    n.EFF(51, '\n  '),
                    n.j41(52, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.addItem());
                    }),
                    n.EFF(53, 'Add'),
                    n.k0s(),
                    n.EFF(54, '\n\n  '),
                    n.j41(55, 'ul'),
                    n.EFF(56, '\n    '),
                    n.DNE(57, k, 5, 1, 'li', 12),
                    n.EFF(58, '\n  '),
                    n.k0s(),
                    n.EFF(59, '\n'),
                    n.k0s(),
                    n.EFF(60, '\n\n'),
                    n.j41(61, 'h1'),
                    n.EFF(62, 'Add Item to List Vanilla JS'),
                    n.k0s(),
                    n.EFF(63, '\n\n'),
                    n.nrm(64, 'iframe', 13),
                    n.EFF(65, '\n\n'),
                    n.j41(66, 'h1'),
                    n.EFF(67, '4. Simple Login with Mock Angular'),
                    n.k0s(),
                    n.EFF(68, '\n\n'),
                    n.j41(69, 'div', 14),
                    n.EFF(70, '\n  '),
                    n.j41(71, 'input', 15),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.loginUsername, i) || (t.loginUsername = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(72, '\n  '),
                    n.j41(73, 'input', 16),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.loginPassword, i) || (t.loginPassword = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(74, '\n  '),
                    n.j41(75, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.login());
                    }),
                    n.EFF(76, 'Login'),
                    n.k0s(),
                    n.EFF(77, '\n  '),
                    n.j41(78, 'p'),
                    n.EFF(79),
                    n.k0s(),
                    n.EFF(80, '\n'),
                    n.k0s(),
                    n.EFF(81, '\n\n'),
                    n.j41(82, 'h1'),
                    n.EFF(83, 'Simple Login with Mock Vanilla JS'),
                    n.k0s(),
                    n.EFF(84, '\n\n'),
                    n.nrm(85, 'iframe', 17),
                    n.EFF(86, '\n\n'),
                    n.j41(87, 'h1'),
                    n.EFF(88, '5. Basic Calculator Angular'),
                    n.k0s(),
                    n.EFF(89, '\n\n'),
                    n.j41(90, 'div', 18),
                    n.EFF(91, '\n  '),
                    n.j41(92, 'input', 19),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.calcA, i) || (t.calcA = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(93, '\n  '),
                    n.j41(94, 'input', 19),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.calcB, i) || (t.calcB = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(95, '\n  '),
                    n.j41(96, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.calculate('add'));
                    }),
                    n.EFF(97, 'Add'),
                    n.k0s(),
                    n.EFF(98, '\n  '),
                    n.j41(99, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.calculate('sub'));
                    }),
                    n.EFF(100, 'Subtract'),
                    n.k0s(),
                    n.EFF(101, '\n  '),
                    n.j41(102, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.calculate('mul'));
                    }),
                    n.EFF(103, 'Multiply'),
                    n.k0s(),
                    n.EFF(104, '\n  '),
                    n.j41(105, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.calculate('div'));
                    }),
                    n.EFF(106, 'Divide'),
                    n.k0s(),
                    n.EFF(107, '\n  '),
                    n.j41(108, 'p'),
                    n.EFF(109),
                    n.k0s(),
                    n.EFF(110, '\n'),
                    n.k0s(),
                    n.EFF(111, '\n\n'),
                    n.j41(112, 'h1'),
                    n.EFF(113, 'Basic Calculator Vanilla JS'),
                    n.k0s(),
                    n.EFF(114, '\n\n'),
                    n.nrm(115, 'iframe', 20),
                    n.EFF(116, '\n\n'),
                    n.j41(117, 'h1'),
                    n.EFF(118, '6. Random Element from Array Angular'),
                    n.k0s(),
                    n.EFF(119, '\n\n'),
                    n.j41(120, 'div', 21),
                    n.EFF(121, '\n  '),
                    n.j41(122, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.pickRandom());
                    }),
                    n.EFF(123, 'Pick Random'),
                    n.k0s(),
                    n.EFF(124, '\n  '),
                    n.j41(125, 'p'),
                    n.EFF(126),
                    n.k0s(),
                    n.EFF(127, '\n'),
                    n.k0s(),
                    n.EFF(128, '\n\n'),
                    n.j41(129, 'h1'),
                    n.EFF(130, 'Random Element from Array Vanilla JS'),
                    n.k0s(),
                    n.EFF(131, '\n\n'),
                    n.nrm(132, 'iframe', 22),
                    n.EFF(133, '\n\n'),
                    n.j41(134, 'h1'),
                    n.EFF(135, '7. Click fastest game Angular'),
                    n.k0s(),
                    n.EFF(136, '\n\n'),
                    n.j41(137, 'div', 23),
                    n.EFF(138, '\n  '),
                    n.j41(139, 'p'),
                    n.EFF(140),
                    n.k0s(),
                    n.EFF(141, '\n  '),
                    n.j41(142, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.startGame());
                    }),
                    n.EFF(143, 'Start'),
                    n.k0s(),
                    n.EFF(144, '\n  '),
                    n.j41(145, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.stopGame());
                    }),
                    n.EFF(146, 'Stop'),
                    n.k0s(),
                    n.EFF(147, '\n'),
                    n.k0s(),
                    n.EFF(148, '\n\n'),
                    n.j41(149, 'h1'),
                    n.EFF(150, 'Click fastest game Vanilla JS'),
                    n.k0s(),
                    n.EFF(151, '\n\n'),
                    n.nrm(152, 'iframe', 24),
                    n.EFF(153, '\n\n'),
                    n.j41(154, 'h1'),
                    n.EFF(155, '8. Image gallery with Next photo Angular'),
                    n.k0s(),
                    n.EFF(156, '\n\n'),
                    n.j41(157, 'div', 25),
                    n.EFF(158, '\n  '),
                    n.nrm(159, 'img', 26),
                    n.EFF(160, '\n  '),
                    n.j41(161, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.nextImage());
                    }),
                    n.EFF(162, 'Next photo'),
                    n.k0s(),
                    n.EFF(163, '\n'),
                    n.k0s(),
                    n.EFF(164, '\n\n'),
                    n.j41(165, 'h1'),
                    n.EFF(166, 'Image gallery with Next photo Vanilla JS'),
                    n.k0s(),
                    n.EFF(167, '\n\n'),
                    n.nrm(168, 'iframe', 27),
                    n.EFF(169, '\n\n'),
                    n.j41(170, 'h1'),
                    n.EFF(171, '9. Light/Dark theme toggle Angular'),
                    n.k0s(),
                    n.EFF(172, '\n\n'),
                    n.j41(173, 'div', 28),
                    n.EFF(174, '\n  '),
                    n.j41(175, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.toggleTheme());
                    }),
                    n.EFF(176, 'Toggle Theme'),
                    n.k0s(),
                    n.EFF(177, '\n  '),
                    n.j41(178, 'p'),
                    n.EFF(179),
                    n.k0s(),
                    n.EFF(180, '\n'),
                    n.k0s(),
                    n.EFF(181, '\n\n'),
                    n.j41(182, 'h1'),
                    n.EFF(183, 'Light/Dark theme toggle Vanilla JS'),
                    n.k0s(),
                    n.EFF(184, '\n\n'),
                    n.nrm(185, 'iframe', 29),
                    n.EFF(186, '\n\n'),
                    n.j41(187, 'h1'),
                    n.EFF(188, '10. Display current time Angular'),
                    n.k0s(),
                    n.EFF(189, '\n\n'),
                    n.j41(190, 'div', 30),
                    n.EFF(191, '\n  '),
                    n.j41(192, 'p'),
                    n.EFF(193),
                    n.k0s(),
                    n.EFF(194, '\n'),
                    n.k0s(),
                    n.EFF(195, '\n\n'),
                    n.j41(196, 'h1'),
                    n.EFF(197, 'Display current time Vanilla JS'),
                    n.k0s(),
                    n.EFF(198, '\n\n'),
                    n.nrm(199, 'iframe', 31),
                    n.EFF(200, '\n\n'),
                    n.j41(201, 'h1'),
                    n.EFF(202, '11. ToDo list with filter Angular'),
                    n.k0s(),
                    n.EFF(203, '\n\n'),
                    n.j41(204, 'div', 32),
                    n.EFF(205, '\n  '),
                    n.j41(206, 'input', 33),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.todoText, i) || (t.todoText = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(207, '\n  '),
                    n.j41(208, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.addTodo());
                    }),
                    n.EFF(209, 'Add'),
                    n.k0s(),
                    n.EFF(210, '\n  '),
                    n.nrm(211, 'br'),
                    n.EFF(212, '\n  '),
                    n.j41(213, 'input', 34),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.todoFilter, i) || (t.todoFilter = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(214, '\n  '),
                    n.j41(215, 'ul'),
                    n.EFF(216, '\n    '),
                    n.DNE(217, j, 2, 1, 'li', 12),
                    n.EFF(218, '\n  '),
                    n.k0s(),
                    n.EFF(219, '\n'),
                    n.k0s(),
                    n.EFF(220, '\n\n'),
                    n.j41(221, 'h1'),
                    n.EFF(222, 'ToDo list with filter Vanilla JS'),
                    n.k0s(),
                    n.EFF(223, '\n\n'),
                    n.nrm(224, 'iframe', 35),
                    n.EFF(225, '\n\n'),
                    n.j41(226, 'h1'),
                    n.EFF(227, '12. Contact form with validation Angular'),
                    n.k0s(),
                    n.EFF(228, '\n\n'),
                    n.j41(229, 'div', 36),
                    n.EFF(230, '\n  '),
                    n.j41(231, 'input', 37),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.contactName, i) || (t.contactName = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(232, '\n  '),
                    n.j41(233, 'input', 38),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.contactEmail, i) || (t.contactEmail = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(234, '\n  '),
                    n.j41(235, 'textarea', 39),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.contactMessage, i) || (t.contactMessage = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(236, '\n  '),
                    n.j41(237, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.submitContact());
                    }),
                    n.EFF(238, 'Send'),
                    n.k0s(),
                    n.EFF(239, '\n  '),
                    n.DNE(240, f, 2, 0, 'p', 40),
                    n.EFF(241, '\n'),
                    n.k0s(),
                    n.EFF(242, '\n\n'),
                    n.j41(243, 'h1'),
                    n.EFF(244, 'Contact form with validation Vanilla JS'),
                    n.k0s(),
                    n.EFF(245, '\n\n'),
                    n.nrm(246, 'iframe', 41),
                    n.EFF(247, '\n\n'),
                    n.j41(248, 'h1'),
                    n.EFF(249, '13. Comment section with date Angular'),
                    n.k0s(),
                    n.EFF(250, '\n\n'),
                    n.j41(251, 'div', 42),
                    n.EFF(252, '\n  '),
                    n.j41(253, 'input', 43),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.commentText, i) || (t.commentText = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(254, '\n  '),
                    n.j41(255, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.addComment());
                    }),
                    n.EFF(256, 'Add'),
                    n.k0s(),
                    n.EFF(257, '\n  '),
                    n.j41(258, 'ul'),
                    n.EFF(259, '\n    '),
                    n.DNE(260, b, 2, 2, 'li', 12),
                    n.EFF(261, '\n  '),
                    n.k0s(),
                    n.EFF(262, '\n'),
                    n.k0s(),
                    n.EFF(263, '\n\n'),
                    n.j41(264, 'h1'),
                    n.EFF(265, 'Comment section with date Vanilla JS'),
                    n.k0s(),
                    n.EFF(266, '\n\n'),
                    n.nrm(267, 'iframe', 44),
                    n.EFF(268, '\n\n'),
                    n.j41(269, 'h1'),
                    n.EFF(270, '14. Number guessing game Angular'),
                    n.k0s(),
                    n.EFF(271, '\n'),
                    n.j41(272, 'div', 45),
                    n.EFF(273, '\n  '),
                    n.j41(274, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.guessNumber());
                    }),
                    n.EFF(275, 'Guess Number'),
                    n.k0s(),
                    n.EFF(276, '\n  '),
                    n.j41(277, 'p'),
                    n.EFF(278),
                    n.k0s(),
                    n.EFF(279, '\n'),
                    n.k0s(),
                    n.EFF(280, '\n'),
                    n.j41(281, 'h1'),
                    n.EFF(282, 'Number guessing game Vanilla JS'),
                    n.k0s(),
                    n.EFF(283, '\n'),
                    n.nrm(284, 'iframe', 46),
                    n.EFF(285, '\n\n'),
                    n.j41(286, 'h1'),
                    n.EFF(287, '15. Book list with search Angular'),
                    n.k0s(),
                    n.EFF(288, '\n'),
                    n.j41(289, 'div', 47),
                    n.EFF(290, '\n  '),
                    n.j41(291, 'input', 48),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.bookTerm, i) || (t.bookTerm = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(292, '\n  '),
                    n.j41(293, 'ul'),
                    n.EFF(294, '\n    '),
                    n.DNE(295, C, 2, 1, 'li', 12),
                    n.EFF(296, '\n  '),
                    n.k0s(),
                    n.EFF(297, '\n'),
                    n.k0s(),
                    n.EFF(298, '\n'),
                    n.j41(299, 'h1'),
                    n.EFF(300, 'Book list with search Vanilla JS'),
                    n.k0s(),
                    n.EFF(301, '\n'),
                    n.nrm(302, 'iframe', 49),
                    n.EFF(303, '\n\n'),
                    n.j41(304, 'h1'),
                    n.EFF(305, '16. Product filtering by category Angular'),
                    n.k0s(),
                    n.EFF(306, '\n'),
                    n.j41(307, 'div', 50),
                    n.EFF(308, '\n  '),
                    n.j41(309, 'select', 51),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.productCategory, i) || (t.productCategory = i), n.Njj(i);
                    }),
                    n.EFF(310, '\n    '),
                    n.j41(311, 'option', 52),
                    n.EFF(312, 'All'),
                    n.k0s(),
                    n.EFF(313, '\n    '),
                    n.j41(314, 'option', 53),
                    n.EFF(315, 'Fruit'),
                    n.k0s(),
                    n.EFF(316, '\n    '),
                    n.j41(317, 'option', 54),
                    n.EFF(318, 'Veg'),
                    n.k0s(),
                    n.EFF(319, '\n  '),
                    n.k0s(),
                    n.EFF(320, '\n  '),
                    n.j41(321, 'ul'),
                    n.EFF(322, '\n    '),
                    n.DNE(323, M, 2, 1, 'li', 12),
                    n.EFF(324, '\n  '),
                    n.k0s(),
                    n.EFF(325, '\n'),
                    n.k0s(),
                    n.EFF(326, '\n'),
                    n.j41(327, 'h1'),
                    n.EFF(328, 'Product filtering by category Vanilla JS'),
                    n.k0s(),
                    n.EFF(329, '\n'),
                    n.nrm(330, 'iframe', 55),
                    n.EFF(331, '\n\n'),
                    n.j41(332, 'h1'),
                    n.EFF(333, '17. Auto-refresh data every 10s Angular'),
                    n.k0s(),
                    n.EFF(334, '\n'),
                    n.j41(335, 'div', 56),
                    n.EFF(336, '\n  '),
                    n.j41(337, 'p'),
                    n.EFF(338),
                    n.k0s(),
                    n.EFF(339, '\n'),
                    n.k0s(),
                    n.EFF(340, '\n'),
                    n.j41(341, 'h1'),
                    n.EFF(342, 'Auto-refresh data every 10s Vanilla JS'),
                    n.k0s(),
                    n.EFF(343, '\n'),
                    n.nrm(344, 'iframe', 57),
                    n.EFF(345, '\n\n'),
                    n.j41(346, 'h1'),
                    n.EFF(347, '18. Display product data from array Angular'),
                    n.k0s(),
                    n.EFF(348, '\n'),
                    n.j41(349, 'div', 58),
                    n.EFF(350, '\n  '),
                    n.j41(351, 'ul'),
                    n.EFF(352, '\n    '),
                    n.DNE(353, w, 2, 2, 'li', 12),
                    n.EFF(354, '\n  '),
                    n.k0s(),
                    n.EFF(355, '\n'),
                    n.k0s(),
                    n.EFF(356, '\n'),
                    n.j41(357, 'h1'),
                    n.EFF(358, 'Display product data from array Vanilla JS'),
                    n.k0s(),
                    n.EFF(359, '\n'),
                    n.nrm(360, 'iframe', 59),
                    n.EFF(361, '\n\n'),
                    n.j41(362, 'h1'),
                    n.EFF(363, '19. Sort products by price Angular'),
                    n.k0s(),
                    n.EFF(364, '\n'),
                    n.j41(365, 'div', 60),
                    n.EFF(366, '\n  '),
                    n.j41(367, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj((t.sortAsc = !t.sortAsc));
                    }),
                    n.EFF(368, 'Toggle Sort'),
                    n.k0s(),
                    n.EFF(369, '\n  '),
                    n.j41(370, 'ul'),
                    n.EFF(371, '\n    '),
                    n.DNE(372, R, 2, 2, 'li', 12),
                    n.EFF(373, '\n  '),
                    n.k0s(),
                    n.EFF(374, '\n'),
                    n.k0s(),
                    n.EFF(375, '\n'),
                    n.j41(376, 'h1'),
                    n.EFF(377, 'Sort products by price Vanilla JS'),
                    n.k0s(),
                    n.EFF(378, '\n'),
                    n.nrm(379, 'iframe', 61),
                    n.EFF(380, '\n\n'),
                    n.j41(381, 'h1'),
                    n.EFF(382, '20. Traffic light simulation Angular'),
                    n.k0s(),
                    n.EFF(383, '\n'),
                    n.j41(384, 'div', 62),
                    n.EFF(385, '\n  '),
                    n.nrm(386, 'div', 63),
                    n.EFF(387, '\n  '),
                    n.nrm(388, 'div', 64),
                    n.EFF(389, '\n  '),
                    n.nrm(390, 'div', 65),
                    n.EFF(391, '\n'),
                    n.k0s(),
                    n.EFF(392, '\n'),
                    n.j41(393, 'h1'),
                    n.EFF(394, 'Traffic light simulation Vanilla JS'),
                    n.k0s(),
                    n.EFF(395, '\n'),
                    n.nrm(396, 'iframe', 66),
                    n.EFF(397, '\n\n'),
                    n.j41(398, 'h1'),
                    n.EFF(399, '21. Countdown timer Angular'),
                    n.k0s(),
                    n.EFF(400, '\n'),
                    n.j41(401, 'div', 67),
                    n.EFF(402, '\n  '),
                    n.j41(403, 'input', 19),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.countdownStart, i) || (t.countdownStart = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(404, '\n  '),
                    n.j41(405, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.startCountdown());
                    }),
                    n.EFF(406, 'Start'),
                    n.k0s(),
                    n.EFF(407, '\n  '),
                    n.j41(408, 'p'),
                    n.EFF(409),
                    n.k0s(),
                    n.EFF(410, '\n'),
                    n.k0s(),
                    n.EFF(411, '\n'),
                    n.j41(412, 'h1'),
                    n.EFF(413, 'Countdown timer Vanilla JS'),
                    n.k0s(),
                    n.EFF(414, '\n'),
                    n.nrm(415, 'iframe', 68),
                    n.EFF(416, '\n\n'),
                    n.j41(417, 'h1'),
                    n.EFF(418, '22. Stopwatch with Start/Stop Angular'),
                    n.k0s(),
                    n.EFF(419, '\n'),
                    n.j41(420, 'div', 69),
                    n.EFF(421, '\n  '),
                    n.j41(422, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.toggleStopwatch());
                    }),
                    n.EFF(423),
                    n.k0s(),
                    n.EFF(424, '\n  '),
                    n.j41(425, 'p'),
                    n.EFF(426),
                    n.k0s(),
                    n.EFF(427, '\n'),
                    n.k0s(),
                    n.EFF(428, '\n'),
                    n.j41(429, 'h1'),
                    n.EFF(430, 'Stopwatch with Start/Stop Vanilla JS'),
                    n.k0s(),
                    n.EFF(431, '\n'),
                    n.nrm(432, 'iframe', 70),
                    n.EFF(433, '\n\n'),
                    n.j41(434, 'h1'),
                    n.EFF(435, '23. setTimeout + await delay Angular'),
                    n.k0s(),
                    n.EFF(436, '\n'),
                    n.j41(437, 'div', 71),
                    n.EFF(438, '\n  '),
                    n.j41(439, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.runDelay());
                    }),
                    n.EFF(440, 'Run'),
                    n.k0s(),
                    n.EFF(441, '\n  '),
                    n.j41(442, 'p'),
                    n.EFF(443),
                    n.k0s(),
                    n.EFF(444, '\n'),
                    n.k0s(),
                    n.EFF(445, '\n'),
                    n.j41(446, 'h1'),
                    n.EFF(447, 'setTimeout + await delay Vanilla JS'),
                    n.k0s(),
                    n.EFF(448, '\n'),
                    n.nrm(449, 'iframe', 72),
                    n.EFF(450, '\n\n'),
                    n.j41(451, 'h1'),
                    n.EFF(452, '24. Load data from API Angular'),
                    n.k0s(),
                    n.EFF(453, '\n'),
                    n.j41(454, 'div', 73),
                    n.EFF(455, '\n  '),
                    n.j41(456, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.fetchData());
                    }),
                    n.EFF(457, 'Load'),
                    n.k0s(),
                    n.EFF(458, '\n  '),
                    n.j41(459, 'pre'),
                    n.EFF(460),
                    n.nI1(461, 'json'),
                    n.k0s(),
                    n.EFF(462, '\n'),
                    n.k0s(),
                    n.EFF(463, '\n'),
                    n.j41(464, 'h1'),
                    n.EFF(465, 'Load data from API Vanilla JS'),
                    n.k0s(),
                    n.EFF(466, '\n'),
                    n.nrm(467, 'iframe', 74),
                    n.EFF(468, '\n\n'),
                    n.j41(469, 'h1'),
                    n.EFF(470, '25. Loading spinner Angular'),
                    n.k0s(),
                    n.EFF(471, '\n'),
                    n.j41(472, 'div', 75),
                    n.EFF(473, '\n  '),
                    n.j41(474, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.startLoading());
                    }),
                    n.EFF(475, 'Start'),
                    n.k0s(),
                    n.EFF(476, '\n  '),
                    n.DNE(477, I, 1, 0, 'div', 76),
                    n.EFF(478, '\n'),
                    n.k0s(),
                    n.EFF(479, '\n'),
                    n.j41(480, 'h1'),
                    n.EFF(481, 'Loading spinner Vanilla JS'),
                    n.k0s(),
                    n.EFF(482, '\n'),
                    n.nrm(483, 'iframe', 77),
                    n.EFF(484, '\n\n'),
                    n.j41(485, 'h1'),
                    n.EFF(486, '26. Async quiz Angular'),
                    n.k0s(),
                    n.EFF(487, '\n'),
                    n.j41(488, 'div', 78),
                    n.EFF(489, '\n  '),
                    n.j41(490, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.loadAsyncQuiz());
                    }),
                    n.EFF(491, 'Load Quiz'),
                    n.k0s(),
                    n.EFF(492, '\n  '),
                    n.j41(493, 'p'),
                    n.EFF(494),
                    n.k0s(),
                    n.EFF(495, '\n'),
                    n.k0s(),
                    n.EFF(496, '\n'),
                    n.j41(497, 'h1'),
                    n.EFF(498, 'Async quiz Vanilla JS'),
                    n.k0s(),
                    n.EFF(499, '\n'),
                    n.nrm(500, 'iframe', 79),
                    n.EFF(501, '\n\n'),
                    n.j41(502, 'h1'),
                    n.EFF(503, '27. Quiz with 3 questions Angular'),
                    n.k0s(),
                    n.EFF(504, '\n'),
                    n.DNE(505, T, 10, 2, 'div', 80),
                    n.EFF(506, '\n'),
                    n.DNE(507, S, 4, 1, 'ng-template', null, 0, n.C5r),
                    n.EFF(509, '\n'),
                    n.j41(510, 'h1'),
                    n.EFF(511, 'Quiz with 3 questions Vanilla JS'),
                    n.k0s(),
                    n.EFF(512, '\n'),
                    n.nrm(513, 'iframe', 81),
                    n.EFF(514, '\n\n'),
                    n.j41(515, 'h1'),
                    n.EFF(516, '28. Shuffle list Angular'),
                    n.k0s(),
                    n.EFF(517, '\n'),
                    n.j41(518, 'div', 82),
                    n.EFF(519, '\n  '),
                    n.j41(520, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.shuffleList());
                    }),
                    n.EFF(521, 'Shuffle'),
                    n.k0s(),
                    n.EFF(522, '\n  '),
                    n.j41(523, 'ul'),
                    n.EFF(524, '\n    '),
                    n.DNE(525, y, 2, 1, 'li', 12),
                    n.EFF(526, '\n  '),
                    n.k0s(),
                    n.EFF(527, '\n'),
                    n.k0s(),
                    n.EFF(528, '\n'),
                    n.j41(529, 'h1'),
                    n.EFF(530, 'Shuffle list Vanilla JS'),
                    n.k0s(),
                    n.EFF(531, '\n'),
                    n.nrm(532, 'iframe', 83),
                    n.EFF(533, '\n\n'),
                    n.j41(534, 'h1'),
                    n.EFF(535, '29. Hover effect Angular'),
                    n.k0s(),
                    n.EFF(536, '\n'),
                    n.j41(537, 'div', 84),
                    n.EFF(538, '\n  '),
                    n.DNE(539, P, 2, 3, 'div', 85),
                    n.EFF(540, '\n'),
                    n.k0s(),
                    n.EFF(541, '\n'),
                    n.j41(542, 'h1'),
                    n.EFF(543, 'Hover effect Vanilla JS'),
                    n.k0s(),
                    n.EFF(544, '\n'),
                    n.nrm(545, 'iframe', 86),
                    n.EFF(546, '\n\n'),
                    n.j41(547, 'h1'),
                    n.EFF(548, '30. Range slider Angular'),
                    n.k0s(),
                    n.EFF(549, '\n'),
                    n.j41(550, 'div', 87),
                    n.EFF(551, '\n  '),
                    n.j41(552, 'input', 88),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.rangeValue, i) || (t.rangeValue = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(553, '\n  '),
                    n.j41(554, 'p'),
                    n.EFF(555),
                    n.k0s(),
                    n.EFF(556, '\n'),
                    n.k0s(),
                    n.EFF(557, '\n'),
                    n.j41(558, 'h1'),
                    n.EFF(559, 'Range slider Vanilla JS'),
                    n.k0s(),
                    n.EFF(560, '\n'),
                    n.nrm(561, 'iframe', 89),
                    n.EFF(562, '\n\n'),
                    n.j41(563, 'h1'),
                    n.EFF(564, '31. Tip calculator Angular'),
                    n.k0s(),
                    n.EFF(565, '\n'),
                    n.j41(566, 'div', 90),
                    n.EFF(567, '\n  '),
                    n.j41(568, 'input', 91),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.bill, i) || (t.bill = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(569, '\n  '),
                    n.j41(570, 'input', 92),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.tipPercent, i) || (t.tipPercent = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(571, '\n  '),
                    n.j41(572, 'p'),
                    n.EFF(573),
                    n.k0s(),
                    n.EFF(574, '\n'),
                    n.k0s(),
                    n.EFF(575, '\n'),
                    n.j41(576, 'h1'),
                    n.EFF(577, 'Tip calculator Vanilla JS'),
                    n.k0s(),
                    n.EFF(578, '\n'),
                    n.nrm(579, 'iframe', 93),
                    n.EFF(580, '\n\n'),
                    n.j41(581, 'h1'),
                    n.EFF(582, '32. Cart with product sum Angular'),
                    n.k0s(),
                    n.EFF(583, '\n'),
                    n.j41(584, 'div', 94),
                    n.EFF(585, '\n  '),
                    n.DNE(586, V, 4, 3, 'div', 12),
                    n.EFF(587, '\n  '),
                    n.j41(588, 'p'),
                    n.EFF(589),
                    n.k0s(),
                    n.EFF(590, '\n'),
                    n.k0s(),
                    n.EFF(591, '\n'),
                    n.j41(592, 'h1'),
                    n.EFF(593, 'Cart with product sum Vanilla JS'),
                    n.k0s(),
                    n.EFF(594, '\n'),
                    n.nrm(595, 'iframe', 95),
                    n.EFF(596, '\n\n'),
                    n.j41(597, 'h1'),
                    n.EFF(598, '33. Live search with event Angular'),
                    n.k0s(),
                    n.EFF(599, '\n'),
                    n.j41(600, 'div', 96),
                    n.EFF(601, '\n  '),
                    n.j41(602, 'input', 97),
                    n.bIt('input', function (i) {
                      return n.eBV(a), n.Njj(t.onInput(i));
                    }),
                    n.k0s(),
                    n.EFF(603, '\n  '),
                    n.j41(604, 'ul'),
                    n.EFF(605, '\n    '),
                    n.DNE(606, A, 2, 1, 'li', 12),
                    n.EFF(607, '\n  '),
                    n.k0s(),
                    n.EFF(608, '\n'),
                    n.k0s(),
                    n.EFF(609, '\n'),
                    n.j41(610, 'h1'),
                    n.EFF(611, 'Live search event Vanilla JS'),
                    n.k0s(),
                    n.EFF(612, '\n'),
                    n.nrm(613, 'iframe', 98),
                    n.EFF(614, '\n\n'),
                    n.j41(615, 'h1'),
                    n.EFF(616, '34. VAT calculator Angular'),
                    n.k0s(),
                    n.EFF(617, '\n'),
                    n.j41(618, 'div', 99),
                    n.EFF(619, '\n  '),
                    n.j41(620, 'input', 100),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.vatNet, i) || (t.vatNet = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(621, '\n  '),
                    n.j41(622, 'p'),
                    n.EFF(623),
                    n.k0s(),
                    n.EFF(624, '\n'),
                    n.k0s(),
                    n.EFF(625, '\n'),
                    n.j41(626, 'h1'),
                    n.EFF(627, 'VAT calculator Vanilla JS'),
                    n.k0s(),
                    n.EFF(628, '\n'),
                    n.nrm(629, 'iframe', 101),
                    n.EFF(630, '\n\n'),
                    n.j41(631, 'h1'),
                    n.EFF(632, '35. Sorting + pagination Angular'),
                    n.k0s(),
                    n.EFF(633, '\n'),
                    n.j41(634, 'div', 102),
                    n.EFF(635, '\n  '),
                    n.j41(636, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.sort());
                    }),
                    n.EFF(637, 'Sort'),
                    n.k0s(),
                    n.EFF(638, '\n  '),
                    n.j41(639, 'button', 103),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.prev());
                    }),
                    n.EFF(640, 'Prev'),
                    n.k0s(),
                    n.EFF(641, '\n  '),
                    n.j41(642, 'button', 103),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.next());
                    }),
                    n.EFF(643, 'Next'),
                    n.k0s(),
                    n.EFF(644, '\n\n  '),
                    n.j41(645, 'table', 104),
                    n.EFF(646, '\n    '),
                    n.j41(647, 'tbody'),
                    n.EFF(648, '\n      '),
                    n.DNE(649, v, 5, 1, 'tr', 105),
                    n.EFF(650, '\n    '),
                    n.k0s(),
                    n.EFF(651, '\n  '),
                    n.k0s(),
                    n.EFF(652, '\n\n  '),
                    n.j41(653, 'div', 106),
                    n.EFF(654),
                    n.j41(655, 'span'),
                    n.EFF(656),
                    n.k0s(),
                    n.EFF(657, '\n  '),
                    n.k0s(),
                    n.EFF(658, '\n'),
                    n.k0s(),
                    n.EFF(659, '\n\n'),
                    n.j41(660, 'h1'),
                    n.EFF(661, '35. Sorting + pagination Vanilla JS'),
                    n.k0s(),
                    n.EFF(662, '\n'),
                    n.nrm(663, 'iframe', 107),
                    n.EFF(664, '\n\n'),
                    n.j41(665, 'h1'),
                    n.EFF(666, '36. Data display with Angular pipe'),
                    n.k0s(),
                    n.EFF(667, '\n'),
                    n.j41(668, 'div', 108),
                    n.EFF(669, '\n  '),
                    n.j41(670, 'ul'),
                    n.EFF(671, '\n    '),
                    n.DNE(672, N, 3, 3, 'li', 12),
                    n.EFF(673, '\n  '),
                    n.k0s(),
                    n.EFF(674, '\n'),
                    n.k0s(),
                    n.EFF(675, '\n'),
                    n.j41(676, 'h1'),
                    n.EFF(677, 'Data display Vanilla JS'),
                    n.k0s(),
                    n.EFF(678, '\n'),
                    n.nrm(679, 'iframe', 109),
                    n.EFF(680, '\n\n'),
                    n.j41(681, 'h1'),
                    n.EFF(682, '37. Filter + sort products Angular'),
                    n.k0s(),
                    n.EFF(683, '\n'),
                    n.j41(684, 'div', 110),
                    n.EFF(685, '\n  '),
                    n.j41(686, 'input', 111),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.filter37, i) || (t.filter37 = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(687, '\n\n  '),
                    n.j41(688, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.toggleSort37());
                    }),
                    n.EFF(689, 'Toggle Sort'),
                    n.k0s(),
                    n.EFF(690, '\n\n  '),
                    n.j41(691, 'ul', 112),
                    n.EFF(692, '\n    '),
                    n.DNE(693, B, 2, 2, 'li', 105),
                    n.EFF(694, '\n  '),
                    n.k0s(),
                    n.EFF(695, '\n'),
                    n.k0s(),
                    n.EFF(696, '\n'),
                    n.j41(697, 'h1'),
                    n.EFF(698, 'Filter + sort products Vanilla JS'),
                    n.k0s(),
                    n.EFF(699, '\n'),
                    n.nrm(700, 'iframe', 113),
                    n.EFF(701, '\n\n'),
                    n.j41(702, 'h1'),
                    n.EFF(703, '38. Simulate HTTP loading delay Angular'),
                    n.k0s(),
                    n.EFF(704, '\n'),
                    n.j41(705, 'div', 114),
                    n.EFF(706, '\n  '),
                    n.j41(707, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.simulateHttp());
                    }),
                    n.EFF(708, 'Run'),
                    n.k0s(),
                    n.EFF(709, '\n  '),
                    n.j41(710, 'p'),
                    n.EFF(711),
                    n.k0s(),
                    n.EFF(712, '\n'),
                    n.k0s(),
                    n.EFF(713, '\n'),
                    n.j41(714, 'h1'),
                    n.EFF(715, 'Simulate HTTP loading delay Vanilla JS'),
                    n.k0s(),
                    n.EFF(716, '\n'),
                    n.nrm(717, 'iframe', 115),
                    n.EFF(718, '\n\n'),
                    n.j41(719, 'h1'),
                    n.EFF(720, '39. Local mock API Angular'),
                    n.k0s(),
                    n.EFF(721, '\n'),
                    n.j41(722, 'div', 116),
                    n.EFF(723, '\n  '),
                    n.j41(724, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.loadMock());
                    }),
                    n.EFF(725, 'Load'),
                    n.k0s(),
                    n.EFF(726, '\n  '),
                    n.j41(727, 'pre'),
                    n.EFF(728),
                    n.nI1(729, 'json'),
                    n.k0s(),
                    n.EFF(730, '\n'),
                    n.k0s(),
                    n.EFF(731, '\n'),
                    n.j41(732, 'h1'),
                    n.EFF(733, 'Local mock API Vanilla JS'),
                    n.k0s(),
                    n.EFF(734, '\n'),
                    n.nrm(735, 'iframe', 117),
                    n.EFF(736, '\n\n'),
                    n.j41(737, 'h1'),
                    n.EFF(738, '40. Angular table with pagination Angular'),
                    n.k0s(),
                    n.EFF(739, '\n'),
                    n.j41(740, 'div', 118),
                    n.EFF(741, '\n  '),
                    n.j41(742, 'button', 103),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.prev40());
                    }),
                    n.EFF(743, 'Prev'),
                    n.k0s(),
                    n.EFF(744, '\n  '),
                    n.j41(745, 'button', 103),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.next40());
                    }),
                    n.EFF(746, 'Next'),
                    n.k0s(),
                    n.EFF(747, '\n\n  '),
                    n.j41(748, 'table', 119),
                    n.EFF(749, '\n    '),
                    n.j41(750, 'tbody'),
                    n.EFF(751, '\n      '),
                    n.DNE(752, O, 8, 2, 'tr', 105),
                    n.EFF(753, '\n    '),
                    n.k0s(),
                    n.EFF(754, '\n  '),
                    n.k0s(),
                    n.EFF(755, '\n\n  '),
                    n.j41(756, 'div', 106),
                    n.EFF(757),
                    n.k0s(),
                    n.EFF(758, '\n'),
                    n.k0s(),
                    n.EFF(759, '\n\n'),
                    n.j41(760, 'h1'),
                    n.EFF(761, 'Angular table with pagination Vanilla JS'),
                    n.k0s(),
                    n.EFF(762, '\n'),
                    n.nrm(763, 'iframe', 120),
                    n.EFF(764, '\n\n'),
                    n.j41(765, 'h1'),
                    n.EFF(766, '41. Dashboard with 3 routed sections Angular'),
                    n.k0s(),
                    n.EFF(767, '\n'),
                    n.j41(768, 'div', 121),
                    n.EFF(769, '\n  '),
                    n.DNE(770, K, 2, 1, 'div', 12),
                    n.EFF(771, '\n'),
                    n.k0s(),
                    n.EFF(772, '\n'),
                    n.j41(773, 'h1'),
                    n.EFF(774, 'Dashboard Vanilla JS'),
                    n.k0s(),
                    n.EFF(775, '\n'),
                    n.nrm(776, 'iframe', 122),
                    n.EFF(777, '\n\n'),
                    n.j41(778, 'h1'),
                    n.EFF(779, '42. Mock mailbox Angular'),
                    n.k0s(),
                    n.EFF(780, '\n'),
                    n.j41(781, 'div', 123),
                    n.EFF(782, '\n  '),
                    n.j41(783, 'ul'),
                    n.EFF(784, '\n    '),
                    n.DNE(785, D, 2, 1, 'li', 124),
                    n.EFF(786, '\n  '),
                    n.k0s(),
                    n.EFF(787, '\n  '),
                    n.j41(788, 'p'),
                    n.EFF(789),
                    n.k0s(),
                    n.EFF(790, '\n'),
                    n.k0s(),
                    n.EFF(791, '\n'),
                    n.j41(792, 'h1'),
                    n.EFF(793, 'Mock mailbox Vanilla JS'),
                    n.k0s(),
                    n.EFF(794, '\n'),
                    n.nrm(795, 'iframe', 125),
                    n.EFF(796, '\n\n'),
                    n.j41(797, 'h1'),
                    n.EFF(798, '43. Promo code generator Angular'),
                    n.k0s(),
                    n.EFF(799, '\n'),
                    n.j41(800, 'div', 126),
                    n.EFF(801, '\n  '),
                    n.j41(802, 'input', 127),
                    n.mxI('ngModelChange', function (i) {
                      return n.eBV(a), n.DH7(t.promoEmail, i) || (t.promoEmail = i), n.Njj(i);
                    }),
                    n.k0s(),
                    n.EFF(803, '\n  '),
                    n.j41(804, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.generateCode());
                    }),
                    n.EFF(805, 'Generate'),
                    n.k0s(),
                    n.EFF(806, '\n  '),
                    n.j41(807, 'p'),
                    n.EFF(808),
                    n.k0s(),
                    n.EFF(809, '\n'),
                    n.k0s(),
                    n.EFF(810, '\n'),
                    n.j41(811, 'h1'),
                    n.EFF(812, 'Promo code generator Vanilla JS'),
                    n.k0s(),
                    n.EFF(813, '\n'),
                    n.nrm(814, 'iframe', 128),
                    n.EFF(815, '\n\n'),
                    n.j41(816, 'h1'),
                    n.EFF(817, '44. Product search with cache Angular'),
                    n.k0s(),
                    n.EFF(818, '\n'),
                    n.j41(819, 'div', 129),
                    n.EFF(820, '\n  '),
                    n.j41(821, 'input', 97, 1),
                    n.bIt('input', function () {
                      n.eBV(a);
                      const i = n.sdS(822);
                      return n.Njj(t.onInput44(i.value));
                    }),
                    n.k0s(),
                    n.EFF(823, '\n  '),
                    n.j41(824, 'ul'),
                    n.EFF(825, '\n    '),
                    n.DNE(826, G, 2, 1, 'li', 12),
                    n.EFF(827, '\n  '),
                    n.k0s(),
                    n.EFF(828, '\n'),
                    n.k0s(),
                    n.EFF(829, '\n'),
                    n.j41(830, 'h1'),
                    n.EFF(831, 'Product search with cache Vanilla JS'),
                    n.k0s(),
                    n.EFF(832, '\n'),
                    n.nrm(833, 'iframe', 130),
                    n.EFF(834, '\n\n'),
                    n.j41(835, 'h1'),
                    n.EFF(836, '45. Component unit testing Angular'),
                    n.k0s(),
                    n.EFF(837, '\n'),
                    n.j41(838, 'div', 131),
                    n.EFF(839, 'Write tests for this component.'),
                    n.k0s(),
                    n.EFF(840, '\n'),
                    n.j41(841, 'h1'),
                    n.EFF(842, 'Component unit testing Vanilla JS'),
                    n.k0s(),
                    n.EFF(843, '\n'),
                    n.nrm(844, 'iframe', 132),
                    n.EFF(845, '\n\n'),
                    n.j41(846, 'h1'),
                    n.EFF(847, '46. Multi-column sorting Angular'),
                    n.k0s(),
                    n.EFF(848, '\n'),
                    n.j41(849, 'div', 3),
                    n.EFF(850, '\n  '),
                    n.j41(851, 'table', 104),
                    n.EFF(852, '\n    '),
                    n.j41(853, 'thead'),
                    n.EFF(854, '\n      '),
                    n.j41(855, 'tr'),
                    n.EFF(856, '\n        '),
                    n.j41(857, 'th', 133),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.sortBy('name'));
                    }),
                    n.EFF(858, '\n          Name\n          '),
                    n.j41(859, 'span', 134),
                    n.EFF(860),
                    n.k0s(),
                    n.EFF(861, '\n        '),
                    n.k0s(),
                    n.EFF(862, '\n\n        '),
                    n.j41(863, 'th', 133),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.sortBy('price'));
                    }),
                    n.EFF(864, '\n          Price\n          '),
                    n.j41(865, 'span', 134),
                    n.EFF(866),
                    n.k0s(),
                    n.EFF(867, '\n        '),
                    n.k0s(),
                    n.EFF(868, '\n      '),
                    n.k0s(),
                    n.EFF(869, '\n    '),
                    n.k0s(),
                    n.EFF(870, '\n\n    '),
                    n.j41(871, 'tbody'),
                    n.EFF(872, '\n      '),
                    n.DNE(873, x, 8, 2, 'tr', 105),
                    n.EFF(874, '\n    '),
                    n.k0s(),
                    n.EFF(875, '\n  '),
                    n.k0s(),
                    n.EFF(876, '\n'),
                    n.k0s(),
                    n.EFF(877, '\n'),
                    n.j41(878, 'h1'),
                    n.EFF(879, 'Multi-column sorting Vanilla JS'),
                    n.k0s(),
                    n.EFF(880, '\n'),
                    n.nrm(881, 'iframe', 135),
                    n.EFF(882, '\n\n'),
                    n.j41(883, 'h1'),
                    n.EFF(884, '47. Cart with add/remove Angular'),
                    n.k0s(),
                    n.EFF(885, '\n'),
                    n.j41(886, 'div', 136),
                    n.EFF(887, '\n  '),
                    n.j41(888, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.add47('Apple', 5));
                    }),
                    n.EFF(889, 'Add Apple'),
                    n.k0s(),
                    n.EFF(890, '\n  '),
                    n.j41(891, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.add47('Banana', 3));
                    }),
                    n.EFF(892, 'Add Banana'),
                    n.k0s(),
                    n.EFF(893, '\n\n  '),
                    n.j41(894, 'ul', 112),
                    n.EFF(895, '\n    '),
                    n.DNE(896, $, 9, 7, 'li', 105),
                    n.EFF(897, '\n  '),
                    n.k0s(),
                    n.EFF(898, '\n\n  '),
                    n.j41(899, 'p', 137),
                    n.EFF(900),
                    n.nI1(901, 'currency'),
                    n.k0s(),
                    n.EFF(902, '\n'),
                    n.k0s(),
                    n.EFF(903, '\n'),
                    n.j41(904, 'h1'),
                    n.EFF(905, 'Cart with add/remove Vanilla JS'),
                    n.k0s(),
                    n.EFF(906, '\n'),
                    n.nrm(907, 'iframe', 138),
                    n.EFF(908, '\n\n'),
                    n.j41(909, 'h1'),
                    n.EFF(910, '48. Simulated API pagination Angular'),
                    n.k0s(),
                    n.EFF(911, '\n'),
                    n.j41(912, 'div', 139),
                    n.EFF(913, '\n  '),
                    n.j41(914, 'button', 103),
                    n.bIt('click', function () {
                      return n.eBV(a), (t.apiPage = t.apiPage - 1), n.Njj(t.loadApiPage());
                    }),
                    n.EFF(915, 'Prev'),
                    n.k0s(),
                    n.EFF(916, '\n  '),
                    n.j41(917, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), (t.apiPage = t.apiPage + 1), n.Njj(t.loadApiPage());
                    }),
                    n.EFF(918, 'Next'),
                    n.k0s(),
                    n.EFF(919, '\n  '),
                    n.j41(920, 'ul'),
                    n.EFF(921, '\n    '),
                    n.DNE(922, J, 2, 1, 'li', 12),
                    n.EFF(923, '\n  '),
                    n.k0s(),
                    n.EFF(924, '\n'),
                    n.k0s(),
                    n.EFF(925, '\n'),
                    n.j41(926, 'h1'),
                    n.EFF(927, 'Simulated API pagination Vanilla JS'),
                    n.k0s(),
                    n.EFF(928, '\n'),
                    n.nrm(929, 'iframe', 140),
                    n.EFF(930, '\n\n'),
                    n.j41(931, 'h1'),
                    n.EFF(932, '49. Full quiz app with results Angular'),
                    n.k0s(),
                    n.EFF(933, '\n'),
                    n.DNE(934, X, 10, 2, 'div', 141),
                    n.EFF(935, '\n'),
                    n.DNE(936, z, 4, 2, 'ng-template', null, 2, n.C5r),
                    n.EFF(938, '\n'),
                    n.j41(939, 'h1'),
                    n.EFF(940, 'Full quiz app Vanilla JS'),
                    n.k0s(),
                    n.EFF(941, '\n'),
                    n.nrm(942, 'iframe', 142),
                    n.EFF(943, '\n\n'),
                    n.j41(944, 'h1'),
                    n.EFF(945, '50. Admin panel with modal Angular'),
                    n.k0s(),
                    n.EFF(946, '\n'),
                    n.j41(947, 'div', 143),
                    n.EFF(948, '\n  '),
                    n.j41(949, 'button', 5),
                    n.bIt('click', function () {
                      return n.eBV(a), n.Njj(t.open50());
                    }),
                    n.EFF(950, 'Open Modal'),
                    n.k0s(),
                    n.EFF(951, '\n\n  '),
                    n.DNE(952, L, 5, 0, 'div', 144),
                    n.EFF(953, '\n'),
                    n.k0s(),
                    n.EFF(954, '\n'),
                    n.nrm(955, 'iframe', 145),
                    n.EFF(956, '\n');
                }
                if (2 & r) {
                  const a = n.sdS(508),
                    s = n.sdS(937);
                  n.R7$(8),
                    n.Y8G('ngClass', n.eq3(113, g, t.animate)),
                    n.R7$(),
                    n.SpI('\n    ', t.count, '\n  '),
                    n.R7$(22),
                    n.R50('ngModel', t.text),
                    n.R7$(3),
                    n.SpI('Lenghth: ', t.characterCount, ''),
                    n.R7$(16),
                    n.R50('ngModel', t.newItem),
                    n.R7$(7),
                    n.Y8G('ngForOf', t.items),
                    n.R7$(14),
                    n.R50('ngModel', t.loginUsername),
                    n.R7$(2),
                    n.R50('ngModel', t.loginPassword),
                    n.R7$(6),
                    n.JRh(t.loginMessage),
                    n.R7$(13),
                    n.R50('ngModel', t.calcA),
                    n.R7$(2),
                    n.R50('ngModel', t.calcB),
                    n.R7$(15),
                    n.SpI('Result: ', t.calcResult, ''),
                    n.R7$(17),
                    n.JRh(t.randomItem),
                    n.R7$(11),
                    n.Y8G('ngClass', n.eq3(115, _, t.isDark)),
                    n.R7$(3),
                    n.JRh(t.gameMessage),
                    n.R7$(19),
                    n.Y8G('src', t.images[t.imageIndex], n.B4B),
                    n.R7$(14),
                    n.AVh('dark', t.isDark),
                    n.R7$(6),
                    n.SpI('Theme: ', t.isDark ? 'Dark' : 'Light', ''),
                    n.R7$(14),
                    n.JRh(t.currentTime),
                    n.R7$(13),
                    n.R50('ngModel', t.todoText),
                    n.R7$(7),
                    n.R50('ngModel', t.todoFilter),
                    n.R7$(4),
                    n.Y8G('ngForOf', t.filteredTodos()),
                    n.R7$(14),
                    n.R50('ngModel', t.contactName),
                    n.R7$(2),
                    n.R50('ngModel', t.contactEmail),
                    n.R7$(2),
                    n.R50('ngModel', t.contactMessage),
                    n.R7$(5),
                    n.Y8G('ngIf', t.contactSubmitted),
                    n.R7$(13),
                    n.R50('ngModel', t.commentText),
                    n.R7$(7),
                    n.Y8G('ngForOf', t.comments),
                    n.R7$(18),
                    n.JRh(t.guessMessage),
                    n.R7$(13),
                    n.R50('ngModel', t.bookTerm),
                    n.R7$(4),
                    n.Y8G('ngForOf', t.filteredBooks()),
                    n.R7$(14),
                    n.R50('ngModel', t.productCategory),
                    n.R7$(14),
                    n.Y8G('ngForOf', t.filteredProducts()),
                    n.R7$(15),
                    n.JRh(t.autoValue),
                    n.R7$(15),
                    n.Y8G('ngForOf', t.products),
                    n.R7$(19),
                    n.Y8G('ngForOf', t.sortedByPrice()),
                    n.R7$(14),
                    n.AVh('active', 'red' === t.currentLight),
                    n.R7$(2),
                    n.AVh('active', 'yellow' === t.currentLight),
                    n.R7$(2),
                    n.AVh('active', 'green' === t.currentLight),
                    n.R7$(13),
                    n.R50('ngModel', t.countdownStart),
                    n.R7$(6),
                    n.JRh(t.countdownValue),
                    n.R7$(14),
                    n.JRh(t.stopwatchRunning ? 'Stop' : 'Start'),
                    n.R7$(3),
                    n.JRh(t.stopwatchDisplay),
                    n.R7$(17),
                    n.JRh(t.delayMessage),
                    n.R7$(17),
                    n.JRh(n.bMT(461, 104, t.apiData)),
                    n.R7$(17),
                    n.Y8G('ngIf', t.loading),
                    n.R7$(17),
                    n.JRh(t.asyncQuizQuestion),
                    n.R7$(11),
                    n.Y8G('ngIf', t.quizIndex < t.quizQuestions.length)('ngIfElse', a),
                    n.R7$(20),
                    n.Y8G('ngForOf', t.shuffleItems),
                    n.R7$(14),
                    n.Y8G('ngForOf', t.itemsHover),
                    n.R7$(13),
                    n.R50('ngModel', t.rangeValue),
                    n.R7$(3),
                    n.JRh(t.rangeValue),
                    n.R7$(13),
                    n.R50('ngModel', t.bill),
                    n.R7$(2),
                    n.R50('ngModel', t.tipPercent),
                    n.R7$(3),
                    n.SpI('Total: ', t.tipTotal, ''),
                    n.R7$(13),
                    n.Y8G('ngForOf', t.cartProducts),
                    n.R7$(3),
                    n.SpI('Total: ', t.cartSum, ''),
                    n.R7$(17),
                    n.Y8G('ngForOf', t.results33),
                    n.R7$(14),
                    n.R50('ngModel', t.vatNet),
                    n.R7$(3),
                    n.SpI('Gross: ', t.vatGross, ''),
                    n.R7$(16),
                    n.Y8G('disabled', 0 === t.page),
                    n.R7$(3),
                    n.Y8G('disabled', t.page + 1 >= t.totalPages),
                    n.R7$(7),
                    n.Y8G('ngForOf', t.pageItems)('ngForTrackBy', t.trackByIndex),
                    n.R7$(5),
                    n.Lme('\n    Page: ', t.page + 1, ' / ', t.totalPages, '\n    '),
                    n.R7$(2),
                    n.SpI(' \u2022 Order: ', t.asc ? 'ASC' : 'DESC', ''),
                    n.R7$(16),
                    n.Y8G('ngForOf', n.lJ4(117, E)),
                    n.R7$(14),
                    n.R50('ngModel', t.filter37),
                    n.R7$(7),
                    n.Y8G('ngForOf', t.filteredSorted37)('ngForTrackBy', t.trackByName37),
                    n.R7$(18),
                    n.JRh(t.delayResult),
                    n.R7$(17),
                    n.JRh(n.bMT(729, 106, t.mockData)),
                    n.R7$(14),
                    n.Y8G('disabled', 0 === t.page40),
                    n.R7$(3),
                    n.Y8G('disabled', t.page40 + 1 >= t.totalPages),
                    n.R7$(7),
                    n.Y8G('ngForOf', t.slice40)('ngForTrackBy', t.trackByName40),
                    n.R7$(5),
                    n.Lme('Page: ', t.page + 1, ' / ', t.totalPages, ''),
                    n.R7$(13),
                    n.Y8G('ngForOf', t.dashboardSections),
                    n.R7$(15),
                    n.Y8G('ngForOf', t.mails),
                    n.R7$(4),
                    n.JRh(t.selectedMail),
                    n.R7$(13),
                    n.R50('ngModel', t.promoEmail),
                    n.R7$(6),
                    n.JRh(t.promoCode),
                    n.R7$(18),
                    n.Y8G('ngForOf', t.results44),
                    n.R7$(31),
                    n.BMQ('aria-sort', t.ariaSort.name),
                    n.R7$(3),
                    n.SpI(
                      '\n            ',
                      'ascending' === t.ariaSort.name ? '\u25b2' : 'descending' === t.ariaSort.name ? '\u25bc' : '',
                      '\n          ',
                    ),
                    n.R7$(3),
                    n.BMQ('aria-sort', t.ariaSort.price),
                    n.R7$(3),
                    n.SpI(
                      '\n            ',
                      'ascending' === t.ariaSort.price ? '\u25b2' : 'descending' === t.ariaSort.price ? '\u25bc' : '',
                      '\n          ',
                    ),
                    n.R7$(7),
                    n.Y8G('ngForOf', t.data46)('ngForTrackBy', t.trackByName46),
                    n.R7$(23),
                    n.Y8G('ngForOf', t.cart)('ngForTrackBy', t.trackByIndex47),
                    n.R7$(4),
                    n.SpI('Total: ', n.ii3(901, 108, t.total, 'USD', 'symbol', '1.0-0'), ''),
                    n.R7$(14),
                    n.Y8G('disabled', 1 === t.apiPage),
                    n.R7$(8),
                    n.Y8G('ngForOf', t.apiItems),
                    n.R7$(12),
                    n.Y8G('ngIf', t.fullIndex < t.fullQuiz.length)('ngIfElse', s),
                    n.R7$(18),
                    n.Y8G('ngIf', t.isOpen50);
                }
              },
              dependencies: [d.A, h.YU, h.Sq, h.bT, h.Pc, h.TG, h.oe, m.iI, F.YN, F.xH, F.y7, F.me, F.Q0, F.MR, F.wz, F.BC, F.vS],
              styles: [
                '.container[_ngcontent-%COMP%]{text-align:center;margin-top:100px}.counter[_ngcontent-%COMP%]{font-size:5rem;margin:20px 0;transition:transform .2s ease}.animate[_ngcontent-%COMP%]{transform:scale(1.3);color:#2e8b57}button[_ngcontent-%COMP%]{font-size:1rem;padding:10px 16px;margin:5px;border:none;border-radius:4px;background-color:#007bff;color:#fff;cursor:pointer;transition:background .3s}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.container2[_ngcontent-%COMP%]{border:2px solid #ccc}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:8px;font-size:16px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.container3[_ngcontent-%COMP%]{max-width:500px;border:2px solid #ccc}.container3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:70%}.container3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}ul[_ngcontent-%COMP%]{margin-top:20px;padding:0;list-style-type:none}li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:8px;background:#f9f9f9;padding:8px;border-radius:6px}.delete-btn[_ngcontent-%COMP%]{background-color:#e74c3c;border:none;color:#fff;padding:6px 10px;border-radius:4px}.container9[_ngcontent-%COMP%]{padding:2rem;background:#f5f5f5;color:#222;border-radius:8px;transition:all .3s ease}.container9.dark[_ngcontent-%COMP%]{background:#333;color:#fff}[class^=container][_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;text-align:center;font-family:Segoe UI,Tahoma,sans-serif;background:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a}.container20[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.container20[_ngcontent-%COMP%]   .light[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%;opacity:.3}.container20[_ngcontent-%COMP%]   .light.active[_ngcontent-%COMP%]{opacity:1}.container29[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a;text-align:center}.itemHover[_ngcontent-%COMP%]{padding:12px 14px;margin:8px 0;background:#eee;border-radius:6px;transition:background .25s,color .25s,transform .15s;cursor:pointer}.itemHover[_ngcontent-%COMP%]:hover{background:#4e8ef7;color:#fff;transform:translateY(-1px)}.itemHover.is-active[_ngcontent-%COMP%]{background:#4e8ef7;color:#fff}.spinner[_ngcontent-%COMP%]{width:40px;height:40px;border:4px solid #ccc;border-top-color:#333;border-radius:50%;margin:10px auto;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block;background:#eef2f7;padding-bottom:40px}h1[_ngcontent-%COMP%]{text-align:center;margin:40px auto 20px;font-family:Segoe UI,Tahoma,sans-serif;font-size:1.3rem}.modal[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 6px #0000004d}.container40[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a;text-align:center}.container40[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#007bff;color:#fff;border:none;padding:10px 16px;margin:5px;border-radius:4px;cursor:pointer;transition:background .3s}.container40[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0056b3}.container40[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.container40[_ngcontent-%COMP%]   .tbl[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:10px}.container40[_ngcontent-%COMP%]   .tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ccc;padding:4px 6px;text-align:left}.container40[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{margin-top:10px;color:#666;font-size:.9rem}.container46[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a}.tbl[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ccc;padding:8px;text-align:left}.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.tbl[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{margin-left:.25rem;opacity:.7}.container47[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a;text-align:center}.container47[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#007bff;color:#fff;border:none;padding:10px 16px;margin:5px;border-radius:4px;cursor:pointer;transition:background .3s}.container47[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0056b3}.container47[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:12px 0}.container47[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:6px 10px;background:#f6f7f9;border:1px solid #e9edf2;border-radius:6px;margin:6px 0}.container47[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]{background:#dc3545}.container47[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover{background:#b02a37}body[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,sans-serif;background:#eef2f7;margin:0;padding:20px}.container50[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a;text-align:center}.container50[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#007bff;color:#fff;border:none;padding:10px 16px;margin:5px;border-radius:4px;cursor:pointer;transition:background .3s}.container50[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0056b3}.modal50[_ngcontent-%COMP%]{position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);background:#fff;border:1px solid #ccc;padding:10px}',
              ],
            });
          }
        }
        return o;
      })();
    },
  },
]);
