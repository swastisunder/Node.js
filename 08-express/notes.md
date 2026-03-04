# 🚀 Express.js (Introduction)

**Express.js** is a **web framework for Node.js** that makes building servers **easier and cleaner**.

Official idea:

> Express is a fast, minimal web framework for Node.js.

---

# ❌ Problem with Node HTTP Module

Using only `http` module becomes messy.

Example problems:

1️⃣ **All logic in one handler**

```js
http.createServer((req, res) => {});
```

Everything goes inside one function → messy code.

---

2️⃣ **Manual routing**

You must handle routes manually.

```js
if (req.url === "/") {
} else if (req.url === "/about") {
}
```

---

3️⃣ **Manual method handling**

```js
if (req.method === "GET") {
}
if (req.method === "POST") {
}
```

---

4️⃣ **Manual URL parsing**

Need extra modules like:

```js
url.parse(req.url);
```

---

5️⃣ **Code becomes hard to maintain**

Large applications → very confusing.

---

# ✅ Solution → Express.js

Express solves these problems by providing:

- easy routing
- clean code structure
- built-in utilities
- middleware system

---

# 📦 Installing Express

```bash
npm install express
```

---

# 📥 Import Express

```javascript
const express = require("express");
```

---

# 🏗 Creating an App

```javascript
const app = express();
```

`app` is the **main Express application object**.

---

# 🌐 Creating Routes

Example:

```javascript
app.get("/", (req, res) => {
  res.send("Hello from home page");
});
```

Explanation:

| Part    | Meaning            |
| ------- | ------------------ |
| app.get | handle GET request |
| "/"     | route path         |
| req     | request object     |
| res     | response object    |

---

# Example Route

```javascript
app.get("/about", (req, res) => {
  res.send("Hello from about page");
});
```

---

# ▶ Starting the Server

```javascript
app.listen(8000, () => {
  console.log("Server started");
});
```

Open in browser:

```text
localhost:8000
```

---

# 📊 Express vs HTTP Module

| Feature           | HTTP Module | Express  |
| ----------------- | ----------- | -------- |
| Routing           | manual      | built-in |
| URL parsing       | manual      | built-in |
| Code structure    | messy       | clean    |
| Development speed | slow        | fast     |

---

# Example Full Express Server

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
  res.send("Hello from About Page");
});

app.listen(8000, () => {
  console.log("Server started");
});
```

---

# 🧠 Key Idea

Express internally uses:

```text
Node.js HTTP module
```

But **it hides the complexity** and gives simple APIs.

---

# ⚡ Quick Memory Line

```text
Express = Cleaner + Faster + Easier Node.js Server
```

---
