const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8080;

const USERS_PATH = path.join(__dirname, "MOCK_DATA.json");

app.use(express.json());

const readJSON = () => {
  try {
    const data = fs.readFileSync(USERS_PATH, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
};

const writeJSON = (data) => {
  fs.writeFileSync(USERS_PATH, JSON.stringify(data, null, 2));
};

app.get("/api/users", (req, res) => {
  try {
    const users = readJSON();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
});

app.get("/api/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id))
      return res.status(400).json({
        success: false,
        message: "Invalid user id",
      });

    const users = readJSON();
    const user = users.find((u) => u.id === id);

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.post("/api/users", (req, res) => {
  try {
    const { name, email, role } = req.body || {};

    if (!name || !email || !role)
      return res.status(400).json({
        success: false,
        message: "name, email and role are required",
      });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email))
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });

    const users = readJSON();

    const emailExists = users.some((u) => u.email === email);

    if (emailExists)
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });

    const newUser = {
      id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      name,
      email,
      role,
    };

    users.push(newUser);
    writeJSON(users);

    res.status(201).json({
      success: true,
      message: "User created",
      data: newUser,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
});

app.patch("/api/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id))
      return res.status(400).json({
        success: false,
        message: "Invalid user id",
      });

    const users = readJSON();

    const index = users.findIndex((u) => u.id === id);

    if (index === -1)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    const { name, email, role } = req.body || {};

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email))
        return res.status(400).json({
          success: false,
          message: "Invalid email format",
        });

      const emailExists = users.some((u) => u.email === email && u.id !== id);

      if (emailExists)
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
    }

    if (name) users[index].name = name;
    if (email) users[index].email = email;
    if (role) users[index].role = role;

    writeJSON(users);

    res.json({
      success: true,
      message: "User updated",
      data: users[index],
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
});

app.delete("/api/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id))
      return res.status(400).json({
        success: false,
        message: "Invalid user id",
      });

    const users = readJSON();

    const exists = users.some((u) => u.id === id);

    if (!exists)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    const filtered = users.filter((u) => u.id !== id);

    writeJSON(filtered);

    res.json({
      success: true,
      message: "User deleted",
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
