import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';
import { HostListener } from '@angular/core';

interface Product37 {
  name: string;
  price: number;
}

type SortKey46 = 'name' | 'price';

@Component({
  selector: 'jhi-kata',
  templateUrl: './kata.component.html',
  styleUrls: ['./kata.scss'],
  imports: [SharedModule, RouterModule, FormsModule],
})
export class KataComponent {
  // 1. Click counter
  count = 0;
  animate = false;

  increment(): void {
    this.count++;
    this.animate = true;

    setTimeout(() => {
      this.animate = false;
    }, 200);
  }

  resetCount(): void {
    this.count = 0;
  }

  // 2. Characters counter
  text: string = '';
  characterCount: number = 0;

  countCharacters(): void {
    this.characterCount = this.text.length;
  }

  // 3. Add Item to List Angular
  items: string[] = [];
  newItem: string = '';

  addItem(): void {
    const trimmed = this.newItem.trim();
    if (trimmed) {
      // if (StringUtils.isNotEmpty(trimmed)) z Java
      this.items.push(trimmed);
      this.newItem = '';
    }
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  // 4. Simple Login with Mock
  loginUsername = '';
  loginPassword = '';
  loginMessage = '';

  login(): void {
    if (this.loginUsername === 'admin' && this.loginPassword === 'password') {
      this.loginMessage = 'Login success';
    } else {
      this.loginMessage = 'Invalid credentials';
    }
  }

  // 5. Basic Calculator
  calcA = 0;
  calcB = 0;
  calcResult = 0;

  calculate(op: string): void {
    const a = Number(this.calcA);
    const b = Number(this.calcB);
    switch (op) {
      case 'add':
        this.calcResult = a + b;
        break;
      case 'sub':
        this.calcResult = a - b;
        break;
      case 'mul':
        this.calcResult = a * b;
        break;
      case 'div':
        this.calcResult = b !== 0 ? a / b : 0;
        break;
    }
  }

  // 6. Random element from array
  itemsArray = ['Apple', 'Banana', 'Orange', 'Grape'];
  randomItem = '';

  pickRandom(): void {
    const index = Math.floor(Math.random() * this.itemsArray.length);
    this.randomItem = this.itemsArray[index];
  }

  // 7. Click fastest game
  gameMessage = 'Click start to play';
  private gameStart = 0;
  private timeoutId: any;

  startGame(): void {
    this.gameMessage = 'Wait for green...';
    const delay = Math.random() * 2000 + 1000;
    this.timeoutId = setTimeout(() => {
      this.gameStart = performance.now();
      this.gameMessage = 'Click!';
    }, delay);
  }

  stopGame(): void {
    if (this.gameMessage === 'Click!') {
      const end = performance.now();
      const ms = end - this.gameStart;
      this.gameMessage = `Reaction: ${Math.round(ms)} ms`;
    } else {
      this.gameMessage = 'Too soon!';
      clearTimeout(this.timeoutId);
    }
  }

  // 8. Image gallery with next photo
  images = ['https://picsum.photos/id/25/150/150', 'https://picsum.photos/id/26/150/150', 'https://picsum.photos/id/27/150/150'];
  imageIndex = 0;

  nextImage(): void {
    this.imageIndex = (this.imageIndex + 1) % this.images.length;
  }

  // 9. Light/Dark theme toggle
  isDark = false;

  toggleTheme(): void {
    this.isDark = !this.isDark;
  }

  // 10. Display current time
  currentTime = new Date().toLocaleTimeString();

  // 11. ToDo list with filter
  todoItems: { text: string; done: boolean }[] = [];
  todoText = '';
  todoFilter = '';

  addTodo(): void {
    const trimmed = this.todoText.trim();
    if (trimmed) {
      this.todoItems.push({ text: trimmed, done: false });
      this.todoText = '';
    }
  }

  filteredTodos(): { text: string; done: boolean }[] {
    return this.todoItems.filter(t => t.text.includes(this.todoFilter));
  }

  // 12. Contact form with validation
  contactName = '';
  contactEmail = '';
  contactMessage = '';
  contactSubmitted = false;

  submitContact(): void {
    if (this.contactName && this.contactEmail) {
      this.contactSubmitted = true;
    }
  }

  // 13. Comment section with date
  commentText = '';
  comments: { text: string; date: string }[] = [];

  addComment(): void {
    const trimmed = this.commentText.trim();
    if (trimmed) {
      this.comments.push({ text: trimmed, date: new Date().toLocaleString() });
      this.commentText = '';
    }
  }

  // 14. Number guessing game
  guessMessage = '';

  guessNumber(): void {
    const secret = Math.floor(Math.random() * 10) + 1;
    const guess = Number(prompt('Guess a number 1-10'));
    this.guessMessage = guess === secret ? 'Correct!' : `Wrong, number was ${secret}`;
  }

  // 15. Book list with search
  books = ['Moby Dick', 'Hamlet', 'The Odyssey', 'War and Peace'];
  bookTerm = '';

  filteredBooks(): string[] {
    return this.books.filter(b => b.toLowerCase().includes(this.bookTerm.toLowerCase()));
  }

  // 16. Product filtering by category
  products = [
    { name: 'Apple', category: 'fruit', price: 10 },
    { name: 'Banana', category: 'fruit', price: 12 },
    { name: 'Carrot', category: 'veg', price: 5 },
  ];
  productCategory = 'all';

  filteredProducts(): { name: string; category: string; price: number }[] {
    return this.products.filter(p => this.productCategory === 'all' || p.category === this.productCategory);
  }

  // 19. Sort products by price
  sortAsc = true;

  sortedByPrice(): { name: string; category: string; price: number }[] {
    return [...this.products].sort((a, b) => (this.sortAsc ? a.price - b.price : b.price - a.price));
  }

  // 20. Traffic light simulation
  currentLight: 'red' | 'yellow' | 'green' = 'red';
  private trafficInterval: any;

  private startTraffic(): void {
    const order = ['red', 'green', 'yellow'];
    let index = 0;
    this.trafficInterval = setInterval(() => {
      index = (index + 1) % order.length;
      this.currentLight = order[index] as 'red' | 'yellow' | 'green';
    }, 1000);
  }

  // 21. Countdown timer
  countdownStart = 10;
  countdownValue = 0;
  private countdownId: any;

  startCountdown(): void {
    this.countdownValue = this.countdownStart;
    clearInterval(this.countdownId);
    this.countdownId = setInterval(() => {
      this.countdownValue--;
      if (this.countdownValue <= 0) {
        clearInterval(this.countdownId);
      }
    }, 1000);
  }

  // 22. Stopwatch with Start/Stop
  stopwatchRunning = false;
  stopwatchDisplay = '0.0';
  private stopwatchStartTime = 0;
  private stopwatchInterval: any;

  toggleStopwatch(): void {
    if (this.stopwatchRunning) {
      clearInterval(this.stopwatchInterval);
      this.stopwatchRunning = false;
    } else {
      this.stopwatchStartTime = Date.now();
      this.stopwatchInterval = setInterval(() => {
        const diff = Date.now() - this.stopwatchStartTime;
        this.stopwatchDisplay = (diff / 1000).toFixed(1);
      }, 100);
      this.stopwatchRunning = true;
    }
  }

  // 23. setTimeout + await delay
  delayMessage = '';

  async runDelay(): Promise<void> {
    this.delayMessage = 'Waiting...';
    await new Promise(res => setTimeout(res, 1000));
    this.delayMessage = 'Done';
  }

  // 24. Load data from API
  apiData: any;

  async fetchData(): Promise<void> {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    this.apiData = await res.json();
  }

  // 25. Loading spinner
  loading = false;

  startLoading(): void {
    this.loading = true;
    setTimeout(() => (this.loading = false), 1000);
  }

  // 26. Async quiz loaded via JS
  asyncQuizQuestion = '';

  async loadAsyncQuiz(): Promise<void> {
    const res = await fetch('/content/quiz.json');
    const data = await res.json();
    this.asyncQuizQuestion = data.question;
  }

  // 27. Quiz with 3 questions and score
  quizQuestions = [
    { q: '1+1?', a: '2' },
    { q: '2+2?', a: '4' },
    { q: '3+3?', a: '6' },
  ];
  quizIndex = 0;
  quizAnswer = '';
  quizScore = 0;

  submitQuizAnswer(): void {
    if (this.quizAnswer === this.quizQuestions[this.quizIndex].a) {
      this.quizScore++;
    }
    this.quizIndex++;
    this.quizAnswer = '';
  }

  // 28. Shuffle list
  shuffleItems = [1, 2, 3, 4, 5];

  shuffleList(): void {
    this.shuffleItems.sort(() => Math.random() - 0.5);
  }

  // 29.
  itemsHover = ['Item 1', 'Item 2', 'Item 3'];

  // (opcjonalne) aktywne elementy po kliknięciu
  active: Set<number> = new Set();

  toggleActive(index: number): void {
    if (this.active.has(index)) {
      this.active.delete(index);
    } else {
      this.active.add(index);
    }
  }

  isActive(index: number): boolean {
    return this.active.has(index);
  }

  // 30. Range slider
  rangeValue = 50;

  // 31. Tip calculator
  bill = 0;
  tipPercent = 0;

  get tipTotal(): number {
    return this.bill + (this.bill * this.tipPercent) / 100;
  }

  // 32. Cart with product sum
  cartProducts = [
    { name: 'Apple', price: 5, qty: 0 },
    { name: 'Banana', price: 3, qty: 0 },
  ];

  get cartSum(): number {
    return this.cartProducts.reduce((sum, p) => sum + p.price * p.qty, 0);
  }

  // 33. Live search with debounce
  data33: string[] = ['apple', 'banana', 'carrot'];
  results33: string[] = this.data33;
  private t: any;

  onInput(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value ?? '';
    clearTimeout(this.t);
    this.t = setTimeout(() => {
      this.results33 = this.data33.filter(i => i.includes(value));
    }, 300);
  }

  // 34. VAT calculator
  vatNet = 0;

  get vatGross(): number {
    return this.vatNet * 1.2;
  }

  // 35. Sorting + pagination
  data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  page = 0;
  pageSize = 3;
  asc = true;

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  get pageItems(): number[] {
    const start = this.page * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  sort(): void {
    this.asc = !this.asc;
    this.data.sort((a, b) => (this.asc ? a - b : b - a));
  }

  next(): void {
    if (this.page + 1 < this.totalPages) {
      this.page++;
    }
  }

  prev(): void {
    if (this.page > 0) {
      this.page--;
    }
  }

  trackByIndex(_: number, item: number): number {
    return item;
  }

  // 37. Filter + sort products Angular
  products37: Product37[] = [
    { name: 'Apple', price: 5 },
    { name: 'Banana', price: 3 },
    { name: 'Carrot', price: 7 },
  ];

  filter37 = '';
  asc37 = true;

  get filteredSorted37(): Product37[] {
    const q = this.filter37.toLowerCase();
    return this.products
      .filter(p => p.name.toLowerCase().includes(q))
      .slice() // copy before sort
      .sort((a, b) => (this.asc ? a.price - b.price : b.price - a.price));
  }

  toggleSort37(): void {
    this.asc = !this.asc;
  }

  trackByName37(_: number, p: Product37): string {
    return p.name;
  }

  // 38. Simulate HTTP loading delay
  delayResult = '';

  simulateHttp(): void {
    this.delayResult = 'Loading...';
    setTimeout(() => (this.delayResult = 'Done'), 1000);
  }

  // 39. Local mock API
  mockData: any;

  async loadMock(): Promise<void> {
    const res = await fetch('/content/mock.json');
    this.mockData = await res.json();
  }

  // 40. Table pagination
  data40 = [
    { n: 'A', p: 1 },
    { n: 'B', p: 2 },
    { n: 'C', p: 3 },
    { n: 'D', p: 4 },
    { n: 'E', p: 5 },
  ];

  page40 = 0;
  pageSize40 = 2;

  get totalPages40() {
    return Math.ceil(this.data40.length / this.pageSize40);
  }

  get slice40() {
    const start = this.page40 * this.pageSize40;
    return this.data40.slice(start, start + this.pageSize40);
  }

  prev40(): void {
    if (this.page40 > 0) this.page40--;
  }

  next40(): void {
    if (this.page40 + 1 < this.totalPages40) this.page40++;
  }

  // typ inline (bez interface); ewentualnie możesz dać row: any
  trackByName40(_index: number, row: { n: string; p: number }): string {
    return row.n;
  }

  // 41. Dashboard with 3 routed sections
  dashboardSections = ['One', 'Two', 'Three'];

  // 42. Mock mailbox
  mails = [
    { subject: 'Hello', body: 'Hi there' },
    { subject: 'News', body: 'Latest update' },
  ];
  selectedMail = '';

  selectMail(m: { subject: string; body: string }): void {
    this.selectedMail = m.body;
  }

  // 43. Promo code generator
  promoEmail = '';
  promoCode = '';

  generateCode(): void {
    if (this.promoEmail) {
      this.promoCode = Math.random().toString(36).slice(-6);
    }
  }

  // 44. Product search with cache
  products44: string[] = ['apple', 'banana', 'carrot'];

  // cache: term -> results
  private cache = new Map<string, string[]>();

  results44: string[] = [];

  onInput44(value: string): void {
    const t44 = (value ?? '').toLowerCase();

    // cache hit
    const cached = this.cache.get(t44);
    if (cached) {
      this.results44 = cached;
      return;
    }

    // compute + store
    const res44 = this.products44.filter(p44 => p44.includes(t44));

    this.cache.set(t44, res44);
    this.results44 = res44;
  }

  // 46. Multi-column sorting
  data46 = [
    { name: 'A', price: 2 },
    { name: 'B', price: 3 },
    { name: 'C', price: 1 },
  ];

  // kierunek sortowania per kolumna: true=ASC, false=DESC
  sortDir: Record<SortKey46, boolean> = { name: true, price: true };
  activeKey: SortKey46 | null = null;

  get ariaSort(): Record<SortKey46, 'ascending' | 'descending' | 'none'> {
    return {
      name: this.activeKey === 'name' ? (this.sortDir.name ? 'ascending' : 'descending') : 'none',
      price: this.activeKey === 'price' ? (this.sortDir.price ? 'ascending' : 'descending') : 'none',
    };
  }

  sortBy(key: SortKey46): void {
    this.sortDir[key] = !this.sortDir[key];
    this.activeKey = key;
    const asc = this.sortDir[key];

    this.data46.sort((a, b) => {
      const va = a[key] as any;
      const vb = b[key] as any;
      if (key === 'name') {
        return asc ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
      } else {
        return asc ? va - vb : vb - va;
      }
    });
  }

  trackByName46(_: number, row: { name: string; price: number }) {
    return row.name;
  }

  // 47. Cart with add/remove
  cart = [] as { name: string; price: number }[];

  add47(name: string, price: number): void {
    this.cart.push({ name, price });
  }

  removeAt47(index: number): void {
    if (index >= 0 && index < this.cart.length) {
      this.cart.splice(index, 1);
    }
  }

  get total(): number {
    return this.cart.reduce((sum, item) => sum + (item.price || 0), 0);
  }

  trackByIndex47(i: number) {
    return i;
  }

  // 48. Simulated API pagination
  apiPage = 1;
  apiItems: any[] = [];

  async loadApiPage(): Promise<void> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${this.apiPage}`);
    this.apiItems = await res.json();
  }

  // 49. Full quiz app with results
  fullQuiz = [
    { q: 'Capital of France?', a: 'paris' },
    { q: '2*3', a: '6' },
  ];
  fullIndex = 0;
  fullAnswer = '';
  fullScore = 0;

  submitFull(): void {
    if (this.fullAnswer.toLowerCase() === this.fullQuiz[this.fullIndex].a) {
      this.fullScore++;
    }
    this.fullIndex++;
    this.fullAnswer = '';
  }

  // 50. Admin panel with modal
  isOpen50 = false;

  open50(): void {
    this.isOpen50 = true;
  }
  close50(): void {
    this.isOpen50 = false;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.isOpen50) this.close50();
  }

  // 17. Auto-refresh data every 10s
  autoValue = '';

  private autoInterval: any;

  private startAutoRefresh(): void {
    this.autoInterval = setInterval(() => {
      this.autoValue = 'Value: ' + Math.floor(Math.random() * 100);
    }, 10000);
  }

  // 18. Display product data from array
  // (uses the products array defined above)

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
    this.startAutoRefresh();
    this.startTraffic();
    this.loadApiPage();
  }
}
