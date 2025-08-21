# JavaScript & TypeScript Kata – 50 Mini-Apps Showing the Key Differences between Java & JavaScript

🔗 **Live demo:** [GitHub Pages](https://piotrzielonka.github.io/JavaScript-TypeScript-Kata/)

Each kata is built in both:

- **Vanilla JavaScript** (plain JS, no frameworks)
- **Angular + TypeScript** (typed, structured, framework-based)

This lets you **compare both approaches side by side** and build instinct in two languages at once..

---

## 🎯 Why this project?

Coming from the Java language, learning JavaScript often feels like hitting a wall. This project hacks that learning curve.

🧩 Kata = mini-apps → Each kata is a working mini-application, so you practice with real code, not just theory.

⚖️ Vanilla JS vs Angular + TS → The same challenge is solved twice, letting you directly compare approaches.

🧠 Instinct-building training → Focus on the concepts Java doesn’t have, until they become second nature.

If you already know Java, these kata give you the fastest way to bridge the gap to JavaScript and Angular.

---

## 🔥 Top 12 JavaScript Pitfalls for Java Developers

These kata focus on the areas where Java and JavaScript differ the most:

1. let vs var vs const differences
2. Dynamic typing (JS) vs static typing (TS)
3. null vs undefined
4. Scope, Scope Chain, Hoisting, Closure
5. JavaScript as a prototype-based & functional language (vs class-based OOP in Java)
6. No privacy in JS (private only in TS, in JS everything is public)
7. Different contexts of `this`
8. Arrow functions
9. call, apply, bind (legacy JavaScript)
10. Truthy / Falsy values
11. == vs === pitfalls
12. Asynchrony: setTimeout, setInterval, event loop, Promise, async/await

---

## 📂 Project Structure

- **Angular + TypeScript kata**: src/main/webapp/app/entities/kata/list
- **Vanilla JavaScript kata**: src/main/webapp/content/kata_js

💡 Best results: Use **two monitors** — run the app and compare code in JS vs TS/Angular side by side.

---

## 🛠️ How to Run

### GitHub Pages demo:

👉 The **frontend-only version** is available on GitHub Pages (link above).  
⚠️ Backend logic (like user management) is **not deployed** on Github Pages. It works only locally.

---

## 🧪 Running the Application Locally

To run the full version (with backend and user logic), install the following prerequisites:

| Tool        | Version                              |
| ----------- | ------------------------------------ |
| Docker      | 28.0.4 (Desktop)                     |
| Java        | OpenJDK 17                           |
| Maven       | 3.8.1                                |
| Node.js     | 22.18.0 LTS                          |
| H2 Database | Installed automatically (local file) |
| JHipster    | 8.9.0                                |

### Start the app locally:

```bash
mvnw
```

This starts the backend (Spring Boot + JHipster) and the Angular frontend.

🔑 Optional: User Logic Training with JHipster

Besides kata, this project also includes modern JHipster user management logic, such as:

AbstractAuditingEntity → automatic auditing (who/when changed data),

Role & authority management,

Audit fields in entities.

This logic is disabled in the GitHub Pages demo, since it requires a backend.

👉 To enable it locally for training:

Open:

src/main/webapp/app/layouts/navbar/navbar.component.html

Uncomment the user account section.

Run the project locally with backend support.

💡 This way, you can also practice JHipster’s latest user logic strategy (auditing, authentication, roles, permissions) alongside your kata training.

👤 About the Project

This project is designed as a hands-on training path — 50 kata (mini-apps) that highlight the key differences between Java and JavaScript. If this helps you — feel free to ⭐ the repo or share it with others.
