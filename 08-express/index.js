const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Home");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name || ""}`);
});

app.listen(8080, () => {
  console.log(`server is running at http://localhost:8080`);
});
