# 📦 Versioning (npm / Node packages)

Package versions look like:

```
4.18.2
```

Structure:

```
MAJOR.MINOR.PATCH
```

| Part   | Meaning       |
| ------ | ------------- |
| **4**  | Major version |
| **18** | Minor version |
| **2**  | Patch version |

---

# 1️⃣ Patch Version (Last Number)

Example:

```
4.18.2 → 4.18.3
```

Meaning:

- small bug fixes
- tiny improvements
- optional update

Example changes:

- fixing typo
- fixing small bug

👉 Safe to update.

---

# 2️⃣ Minor Version (Middle Number)

Example:

```
4.18.2 → 4.19.0
```

Meaning:

- new feature added
- security fix
- recommended update

👉 Usually safe but check **changelog**.

---

# 3️⃣ Major Version (First Number)

Example:

```
4.18.2 → 5.0.0
```

Meaning:

- breaking changes
- old code may stop working

Example:

```
app.get()
```

may change to

```
app.GET()
```

👉 Existing projects may break.

---

# ⚠️ Rule

| Version Change | Meaning         |
| -------------- | --------------- |
| Patch change   | small fix       |
| Minor change   | new feature     |
| Major change   | breaking change |

---

# ^ Caret Symbol

Example in `package.json`:

```
"express": "^4.18.2"
```

Meaning:

```
>=4.18.2  and  <5.0.0
```

Allowed updates:

```
4.18.3
4.19.0
4.20.1
```

Not allowed:

```
5.0.0
```

👉 Major version stays locked.

---

# ~ Tilde Symbol

```
"express": "~4.18.2"
```

Meaning:

```
>=4.18.2 and <4.19.0
```

Allowed:

```
4.18.3
4.18.4
```

Not allowed:

```
4.19.0
```

👉 Only **patch updates allowed**.

---

# No Symbol (Exact Version)

```
"express": "4.18.2"
```

Meaning:

Only this exact version installs.

---

# Installing Specific Version

```
npm install express@4.18.2
```

---

# ❌ Never Use

```
"express": "latest"
```

Because:

- project may break
- unpredictable updates

---

# 🧠 Quick Memory Trick

```
MAJOR → Breaking change
MINOR → New feature
PATCH → Bug fix
```

---
