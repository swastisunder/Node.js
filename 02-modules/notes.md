# 📦 What Are Modules in Node.js?

## 🧩 Modular Programming

* Big project ➝ divide into **small files**
* Each file = **Module**
* Makes code:

  * ✅ Clean
  * ✅ Reusable
  * ✅ Easy to manage

Example:

```
app.js → main file
maths.js → math functions
```

---

# 📁 Creating a Separate Module

## 📝 maths.js

```js
function add(a, b) {
  return a + b;
}
```

Now problem ❌
Other files cannot use this function directly.

Because it is **private by default**.

---

# 📤 Exporting in Node.js

To make something usable outside the file → **Export it**

---

## ✅ Method 1: module.exports (Single Export)

### maths.js

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

---

### app.js

```js
const math = require("./maths");

console.log(math(2, 4));
```

✅ Output:

```
6
```

---

# 📦 Multiple Exports (Best Practice)

## maths.js

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

---

## app.js

```js
const math = require("./maths");

console.log(math.add(2, 4));
console.log(math.subtract(2, 4));
```

✅ Output:

```
6
-2
```

---

# ✂️ Destructuring (Cleaner Way)

```js
const { add, subtract } = require("./maths");

console.log(add(2, 4));
console.log(subtract(2, 4));
```

🔥 Cleaner and recommended

---

# 🧠 Important Concepts

## 🔹 require()

* Built-in Node function
* Used to import modules
* Not available in browser JavaScript

---

## 🔹 "./" vs Direct Name

| Syntax               | Meaning               |
| -------------------- | --------------------- |
| `require("./maths")` | Current directory     |
| `require("fs")`      | Built-in Node module  |
| `require("express")` | Installed npm package |

---

# ⚙️ Built-in Node Modules

Node already provides powerful modules:

| Module   | Use              |
| -------- | ---------------- |
| `fs`     | File system 📂   |
| `http`   | Create server 🌍 |
| `crypto` | Encryption 🔐    |
| `path`   | File paths 📁    |

Example:

```js
const fs = require("fs");
```

No installation needed ✅

---

# 📤 module.exports vs exports

## ✅ module.exports

* Main export object
* Can export:

  * Function
  * Object
  * String
  * Anything

## ✅ exports

* Shortcut for module.exports
* Used for multiple properties

Example:

```js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

⚠️ But if you override `module.exports`, exports won’t work.

---
