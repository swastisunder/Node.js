# 📂 Node.js File Handling (fs Module)

## 📦 What is `fs`?

- `fs` = File System module
- Built-in module in Node.js
- Used to:
  - 📄 Create files
  - ✍️ Write files
  - 📖 Read files
  - ➕ Append data
  - ❌ Delete files
  - 📁 Create folders
  - 📊 Check file status

Import it:

```js
const fs = require("fs");
```

No `./` needed ✅
Because it is a **built-in module**

---

# ✍️ Writing a File

## 🟢 Synchronous (Blocking)

```js
fs.writeFileSync("test.txt", "Hello World");
```

- Creates file if not exists
- Overwrites if already exists
- Blocking operation ⛔

---

## 🔵 Asynchronous (Non-Blocking)

```js
fs.writeFile("test.txt", "Hello World", (err) => {
  if (err) console.log(err);
});
```

- Requires callback function
- Non-blocking ✅
- Recommended for backend servers

---

# 📖 Reading a File

## 🟢 Synchronous

```js
const data = fs.readFileSync("contacts.txt", "utf-8");
console.log(data);
```

- Returns result directly
- Blocking

---

## 🔵 Asynchronous

```js
fs.readFile("contacts.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
```

- Does NOT return value
- Gives result inside callback
- Non-blocking

---

# 🔁 Append to File (Add Without Overwriting)

```js
fs.appendFileSync("log.txt", "New Entry\n");
```

OR async:

```js
fs.appendFile("log.txt", "New Entry\n", (err) => {
  if (err) console.log(err);
});
```

✅ Used for:

- Logging user requests
- Saving timestamps
- Tracking activity

---

# 📋 File Status (Metadata)

```js
const stats = fs.statSync("test.txt");
console.log(stats.size);
console.log(stats.isFile());
```

You can check:

- File size 📏
- Created time ⏰
- Modified time
- Is file or folder

---

# 📄 Copy File

```js
fs.copyFileSync("test.txt", "copy.txt");
```

---

# ❌ Delete File

```js
fs.unlinkSync("copy.txt");
```

---

# 📁 Create Folder

```js
fs.mkdirSync("myFolder");
```

Recursive folders:

```js
fs.mkdirSync("myFolder/a/b", { recursive: true });
```

---

# ⚠️ Very Important Concept

## 🔴 Synchronous (Blocking)

- Stops execution until task completes
- Can crash server if heavy task
- Avoid in production

## 🟢 Asynchronous (Non-Blocking)

- Does not block main thread
- Uses callback
- Best for backend apps

---

# 💡 Real World Example

When building a server:

- On every request:
  - Save IP address
  - Save timestamp
  - Save requested route

Use:

```js
fs.appendFile("log.txt", logData, callback);
```

This creates a request log system 📊

---
