# 🌐 URL (Uniform Resource Locator)

A **URL** is the address used to **locate a resource on the internet**.

Example:

```
https://www.google.com/search?q=javascript
```

---

# 1️⃣ Main Components of URL

```
protocol://domain/path?query
```

Example:

```
https://www.google.com/search?q=javascript
```

| Part         | Example       | Meaning            |
| ------------ | ------------- | ------------------ |
| Protocol     | https         | communication rule |
| Domain       | google.com    | server name        |
| Path         | /search       | page or route      |
| Query Params | ?q=javascript | extra data         |

---

# 2️⃣ Protocol

Protocol defines **how browser communicates with server**.

Examples:

```
http://
https://
ws://
```

| Protocol | Meaning              |
| -------- | -------------------- |
| HTTP     | normal communication |
| HTTPS    | secure communication |
| WS       | websocket protocol   |

---

# 3️⃣ Domain

Domain is the **human-friendly name of an IP address**.

Example:

```
google.com
```

Actual server:

```
142.250.183.110
```

DNS converts:

```
google.com → IP address
```

---

# 4️⃣ Path

Path tells **which page or resource to access**.

Example:

```
/about
/contact
/products
```

Examples:

```
example.com/
example.com/about
example.com/products/1
```

Nested path example:

```
/project/1
/project/2
```

---

# 5️⃣ Query Parameters

Query parameters send **extra data to server**.

Start with `?`

Example:

```
?key=value
```

Example:

```
https://google.com/search?q=javascript
```

| Key | Value      |
| --- | ---------- |
| q   | javascript |

Multiple parameters:

```
?name=ssb&id=1
```

Separator:

```
&
```

Example:

```
?name=ssb&id=1&age=20
```

---

# 6️⃣ URL Example Breakdown

```
https://youtube.com/results?search_query=nodejs
```

| Part     | Value               |
| -------- | ------------------- |
| Protocol | https               |
| Domain   | youtube.com         |
| Path     | /results            |
| Query    | search_query=nodejs |

---

# 7️⃣ Accessing URL in Node.js

In HTTP server:

```js
req.url;
```

Example request:

```
/about?name=ssb
```

`req.url` returns:

```
/about?name=ssb
```

---

# 8️⃣ Parsing URL

```js
const url = require("url");

const myUrl = url.parse(req.url, true);
```

Now you can access:

| Property       | Meaning          |
| -------------- | ---------------- |
| myUrl.pathname | path             |
| myUrl.query    | query parameters |

---

# Example

URL:

```
/about?name=ssb&id=1
```

Code:

```js
myUrl.pathname;
```

Output:

```
/about
```

Code:

```js
myUrl.query.name;
```

Output:

```
ssb
```

---

# ⚡ Quick Memory Trick

```
URL = Protocol + Domain + Path + Query
```

Example:

```
https://example.com/products?id=10
```

---
