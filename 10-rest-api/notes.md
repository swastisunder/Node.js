# 🌐 REST API (Quick Notes)

**REST** = **Representational State Transfer**

REST API is a **set of best practices** for communication between:

```
Client ↔ Server
```

Example clients:

- Browser
- Mobile app
- Desktop app
- IoT device

Communication happens using:

```
HTTP Request → Server
HTTP Response → Client
```

---

# 1️⃣ Client–Server Architecture

REST follows **client-server separation**.

```
Client → sends request
Server → sends response
```

Both should be **independent**.

Server job:

```
Get data from database
Return data
```

Client job:

```
Render UI
Show data to user
```

---

# ❌ Bad Approach (Server Rendering Everything)

Server sends **HTML page**.

Example:

```
Server → HTML → Browser
```

Problem:

- Mobile apps cannot use HTML easily
- Client depends on server rendering

This is called:

```
Server Side Rendering (SSR)
```

---

# ✅ REST Approach

Server sends **raw data (JSON)**.

Example:

```
Server → JSON → Client
```

Example JSON:

```json
{
  "title": "Blog 1",
  "author": "Swastisunder"
}
```

Now client decides how to show it.

Example clients:

- React
- Mobile app
- Browser
- Flutter app

---

# 2️⃣ Respect HTTP Methods

REST APIs must use **correct HTTP methods**.

| Method | Purpose      |
| ------ | ------------ |
| GET    | Get data     |
| POST   | Create data  |
| PUT    | Replace data |
| PATCH  | Update data  |
| DELETE | Delete data  |

---

# Example REST Routes

### Get users

```
GET /users
```

Return:

```
All users
```

---

### Create user

```
POST /users
```

Create new user.

---

### Update user

```
PATCH /users/:id
```

Update user.

---

### Delete user

```
DELETE /users/:id
```

Delete user.

---

# ❌ Bad API Design

```
POST /createUser
POST /deleteUser
GET /getUsers
```

This ignores HTTP methods.

---

# ✅ Good REST API

```
GET /users
POST /users
PATCH /users/:id
DELETE /users/:id
```

---

# JSON vs HTML

| Format | Used For              |
| ------ | --------------------- |
| HTML   | Browser rendering     |
| JSON   | APIs / cross-platform |

---

# Express Example

Send HTML:

```javascript
res.send("<h1>Hello</h1>");
```

Send JSON:

```javascript
res.json({
  name: "Swastisunder",
});
```

---

# 🧠 Quick Memory

```
REST = Best practices for API design
```

Rules:

```
1️⃣ Client–Server separation
2️⃣ Use correct HTTP methods
3️⃣ Prefer JSON for APIs
```

---
