# 🚀 Node.js – Hello World

## 🟢 What is Node.js?

* Node.js = **JavaScript runtime environment**
* Runs JS **outside the browser**
* Built on **V8 engine**
* Used for **server-side development**

---

## 📁 Step 1: Create Project Folder

* Create a new folder (e.g. `hello-world`)
* Open it in VS Code

---

## 📄 Step 2: Create JS File

Create a file:

```
hello.js
```

Write:

```js
console.log("Hi there");
```

---

## ▶️ Step 3: Run the File

Open terminal and run:

```
node hello.js
```

✅ Output:

```
Hi there
```

---

# ❗ Important Difference: Browser vs Node

## 🌐 In Browser:

* `window` works
* `alert()` works
* `document` works

## 🖥️ In Node:

* ❌ `window` → not defined
* ❌ `alert()` → not defined
* ❌ `document` → not defined

👉 Why?

Because Node.js:

* Is NOT a browser
* Has NO DOM
* Has NO window object
* Only provides server-related features

---

## 🔐 What Node.js Provides Instead?

* File handling 📂
* Cryptography 🔒
* Networking 🌍
* Server features 🖥️
* Core JavaScript functionality

---

# 📦 NPM (Node Package Manager)

Check version:

```
npm -v
```

---

## 🛠️ Initialize a Project

Run:

```
npm init
```

OR shortcut:

```
npm init -y
```

✅ This creates:

```
package.json
```

---

# 📄 What is package.json?

* It is a **configuration file**
* Stores:

  * Project name
  * Version
  * Entry file
  * Scripts
  * Dependencies

---

## 🔧 Example package.json Script

Inside `package.json`:

```json
"scripts": {
  "start": "node hello.js"
}
```

Now instead of:

```
node hello.js
```

You can run:

```
npm start
```

✅ Same result
But better for real projects

---

# 🎯 Why Use Scripts?

In real projects:

* You may need:

  * Database connection
  * Environment setup
  * Multiple configs
* Instead of typing long commands
* You just run:

```
npm start
```

---