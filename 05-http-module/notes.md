## 1️⃣ What is HTTP Module?

* `http` is a **built-in Node.js module**
* Used to **create web servers**

Import it:

```js
const http = require("http")
```

---

# 2️⃣ Creating a Server

Use `createServer()`.

```js
const server = http.createServer((req, res) => {

})
```

This function runs **every time a request comes** to the server.

Parameters:

| Parameter | Meaning                                   |
| --------- | ----------------------------------------- |
| `req`     | Request object (client info)              |
| `res`     | Response object (send response to client) |

---

# 3️⃣ Sending Response

```js
res.end("Hello from server")
```

* Ends the response
* Sends data to client

Example:

```js
const http = require("http")

const server = http.createServer((req, res) => {
  res.end("Hello from server")
})
```

---

# 4️⃣ Starting the Server

Server must **listen on a port**.

```js
server.listen(8000, () => {
  console.log("Server started")
})
```

Now open:

```
localhost:8000
```

---

# 5️⃣ What is a Port?

A **port is like a door** for the server.

Example:

```
localhost:8000
```

| Part      | Meaning       |
| --------- | ------------- |
| localhost | your computer |
| 8000      | server port   |

Multiple servers → different ports.

Example:

```
8000
8001
8002
```

---

# 6️⃣ Request Object (`req`)

Contains **information about client request**.

Example:

```js
console.log(req.url)
console.log(req.headers)
```

Common properties:

| Property      | Meaning        |
| ------------- | -------------- |
| `req.url`     | requested path |
| `req.method`  | GET / POST     |
| `req.headers` | client info    |

---

# 7️⃣ Response Object (`res`)

Used to **send data back to client**.

Example:

```js
res.end("Hello")
```

You can send:

* text
* HTML
* JSON
* files

---

# 8️⃣ Simple Routing

Using `req.url`

```js
const server = http.createServer((req, res) => {

  if(req.url === "/"){
    res.end("Home Page")
  }

  else if(req.url === "/about"){
    res.end("About Page")
  }

  else{
    res.end("404 Not Found")
  }

})
```

---

# 9️⃣ Logging Requests (Using fs)

```js
const fs = require("fs")

fs.appendFile(
  "log.txt",
  `${Date.now()} ${req.url}\n`,
  () => {}
)
```

This creates a **server log file**.

Example log:

```
171000000 /about
171000005 /contact
```

---

# 🔟 Full Basic Server Example

```js
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {

  fs.appendFile(
    "log.txt",
    `${Date.now()} ${req.url}\n`,
    () => {}
  )

  if(req.url === "/"){
    res.end("Home Page")
  }

  else if(req.url === "/about"){
    res.end("About Page")
  }

  else{
    res.end("404 Not Found")
  }

})

server.listen(8000, () => {
  console.log("Server Started")
})
```

---

# 🧠 Important Concepts

* `http` module creates server
* `createServer()` handles requests
* `req` → request info
* `res` → response to client
* `listen(port)` starts server
* use **non-blocking code**

---

# ⚡ One-Line Summary

> Node.js HTTP module lets you create a web server that listens on a port, receives requests, and sends responses.

---
