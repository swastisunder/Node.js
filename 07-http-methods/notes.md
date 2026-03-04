# 🌐 HTTP Methods (Node.js / Web Basics)

HTTP methods define **what action the client wants to perform on the server**.

Common methods:

```
GET
POST
PUT
PATCH
DELETE
```

---

# 1️⃣ GET

Used to **get data from the server**.

Example:

```
GET /users
```

Meaning → fetch users from server.

Example in browser:

```
youtube.com/results?search_query=nodejs
```

Browser always sends **GET request by default**.

Use cases:

* opening a webpage
* fetching API data
* searching something

Example in Node:

```javascript
if(req.method === "GET"){
  res.end("Sending data")
}
```

---

# 2️⃣ POST

Used to **send data to server** (create new data).

Example:

```
POST /users
```

Use cases:

* signup
* login
* submitting forms
* creating a new record

Example:

User signup form

```
email
password
```

Data sent to server using **POST request**.

Node example:

```javascript
if(req.method === "POST"){
  res.end("User created")
}
```

---

# 3️⃣ PUT

Used to **replace/update existing data completely**.

Example:

```
PUT /users/1
```

Meaning → replace user with id `1`.

Use case:

* updating full profile
* replacing database record

---

# 4️⃣ PATCH

Used to **update part of data**.

Example:

```
PATCH /users/1
```

Meaning → update only specific fields.

Example:

```
change username only
```

---

# 5️⃣ DELETE

Used to **delete data from server**.

Example:

```
DELETE /users/1
```

Meaning → delete user with id `1`.

Use cases:

* delete account
* remove post
* remove comment

---

# 🧠 Quick Table

| Method | Purpose             |
| ------ | ------------------- |
| GET    | read data           |
| POST   | create data         |
| PUT    | replace data        |
| PATCH  | update part of data |
| DELETE | delete data         |

---

# ⚡ Simple Memory Trick

```
CRUD operations
```

| CRUD   | HTTP        |
| ------ | ----------- |
| Create | POST        |
| Read   | GET         |
| Update | PUT / PATCH |
| Delete | DELETE      |

---

# Example API

```
GET    /users
POST   /users
PUT    /users/1
PATCH  /users/1
DELETE /users/1
```

---

# Example Node.js Logic

```javascript
if(req.method === "GET"){
  res.end("Get data")
}

else if(req.method === "POST"){
  res.end("Create data")
}

else if(req.method === "DELETE"){
  res.end("Delete data")
}
```

---

# ⚡ Key Point

Browser URL bar always sends:

```
GET request
```

Forms usually send:

```
POST request
```

---

If you want, I can also give you **one powerful diagram that connects everything you studied so far:**

```
Client → URL → HTTP Method → Node Server → Response
```

It will make **Node.js backend flow crystal clear.**
